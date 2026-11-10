// Keep reference photos in the existing bucket; never change bucket visibility.
export const PHOTO_LINK_LIFETIME_SECONDS = 7 * 24 * 60 * 60;

export class BookingPhotoError extends Error {}

type PhotoStorage = {
  upload: (path: string, file: File) => Promise<{ data: { path: string } | null; error: unknown }>;
  sign: (path: string, expiresIn: number) => Promise<{ data: { signedUrl: string } | null; error: unknown }>;
};

export async function uploadBookingPhotos(
  files: File[],
  storage: PhotoStorage,
  uploadedPaths: Map<File, string>,
): Promise<string[]> {
  const urls: string[] = [];
  for (const [index, file] of files.entries()) {
    try {
      let path = uploadedPaths.get(file);
      if (!path) {
        // Do not expose customers' original filenames in object paths or email links.
        const result = await storage.upload(crypto.randomUUID(), file);
        if (result.error || !result.data?.path) throw new Error("Upload failed");
        path = result.data.path;
        uploadedPaths.set(file, path);
      }
      const result = await storage.sign(path, PHOTO_LINK_LIFETIME_SECONDS);
      if (result.error || !result.data?.signedUrl) throw new Error("Photo link failed");
      const url = new URL(result.data.signedUrl);
      if (url.protocol !== "https:") throw new Error("Insecure photo link");
      urls.push(url.href);
    } catch {
      throw new BookingPhotoError(
        `Photo ${index + 1} of ${files.length} could not be uploaded or linked securely. Your booking has not been sent. Check your connection and retry. If it keeps failing, go Back to reselect a smaller photo or contact the shop.`,
      );
    }
  }
  return urls;
}

export function bookingPhotoEmailFields(urls: string[]) {
  const individualFields = Object.fromEntries(
    urls.map((url, index) => [`reference_photo_${index + 1}_url`, url]),
  );
  return {
    ...individualFields,
    reference_photo_count: urls.length,
    reference_image_urls: urls.length
      ? urls.map((url, index) => `Reference photo ${index + 1}: ${url}`).join("\n")
      : "None",
    ...(urls.length ? { reference_photo_link_expiration: "Photo links expire 7 days after this submission. Save the photos before they expire." } : {}),
  };
}