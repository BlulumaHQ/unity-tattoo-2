# Architecture rules

- Keep booking photo upload/link preparation in `src/lib/bookingPhotos.ts`; fail the entire submission before notification on any photo error, so bookings never silently omit selected photos.
- Use expiring signed URLs for booking photos in the existing bucket without modifying storage policies; cache only object paths in component memory to avoid duplicate uploads on retry and regenerate links each attempt.