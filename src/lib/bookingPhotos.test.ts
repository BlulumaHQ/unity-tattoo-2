import { describe, expect, it, vi } from "vitest";
import { bookingPhotoEmailFields, PHOTO_LINK_LIFETIME_SECONDS, uploadBookingPhotos } from "./bookingPhotos";

const files = [1, 2, 3].map((i) => new File(["synthetic test image"], `private-name-${i}.png`, { type: "image/png" }));
function storage() {
  return {
    upload: vi.fn(async (path: string) => ({ data: { path }, error: null })),
    sign: vi.fn(async (path: string) => ({ data: { signedUrl: `https://example.test/signed/${path}?token=synthetic` }, error: null })),
  };
}

describe("booking reference photos", () => {
  it("blocks notification when the second of three photos fails to upload", async () => {
    const client = storage();
    client.upload.mockRejectedValueOnce(new Error("network unavailable"));
    const notify = vi.fn();
    await expect(uploadBookingPhotos(files, client, new Map()).then(notify)).rejects.toThrow("Your booking has not been sent");
    expect(notify).not.toHaveBeenCalled();
    expect(client.sign).not.toHaveBeenCalled();
  });

  it("never skips a middle-photo failure and reuses prior uploaded paths on retry", async () => {
    const client = storage();
    client.upload.mockImplementationOnce(async (path) => ({ data: { path }, error: null }))
      .mockRejectedValueOnce(new Error("upload failure"));
    const cache = new Map<File, string>();
    await expect(uploadBookingPhotos(files, client, cache)).rejects.toThrow("Photo 2 of 3");
    const urls = await uploadBookingPhotos(files, client, cache);
    expect(urls).toHaveLength(3);
    expect(client.upload).toHaveBeenCalledTimes(4);
    for (const [path] of client.upload.mock.calls) expect(path).not.toContain("private-name");
  });

  it("aborts on a signing permission failure instead of falling back to a public URL", async () => {
    const client = storage();
    client.sign.mockRejectedValueOnce(new Error("permission denied"));
    await expect(uploadBookingPhotos(files, client, new Map())).rejects.toThrow("linked securely");
    expect(client.upload).toHaveBeenCalledTimes(1);
  });

  it("requests secure links with explicit seven-day expiration", async () => {
    const client = storage();
    await uploadBookingPhotos(files, client, new Map());
    expect(PHOTO_LINK_LIFETIME_SECONDS).toBe(604800);
    expect(client.sign.mock.calls.every((call) => call[1] === 604800)).toBe(true);
  });

  it("lists all three photos individually and as readable multiline links", () => {
    const urls = [1, 2, 3].map((i) => `https://example.test/photo-${i}`);
    const payload = bookingPhotoEmailFields(urls);
    expect(payload.reference_photo_1_url).toBe(urls[0]);
    expect(payload.reference_photo_2_url).toBe(urls[1]);
    expect(payload.reference_photo_3_url).toBe(urls[2]);
    expect(payload.reference_photo_count).toBe(3);
    expect(payload.reference_image_urls.split("\n")).toEqual(urls.map((url, i) => `Reference photo ${i + 1}: ${url}`));
  });

  it("allows a booking without selected photos", async () => {
    const client = storage();
    expect(await uploadBookingPhotos([], client, new Map())).toEqual([]);
    expect(client.upload).not.toHaveBeenCalled();
    expect(bookingPhotoEmailFields([]).reference_image_urls).toBe("None");
  });
});