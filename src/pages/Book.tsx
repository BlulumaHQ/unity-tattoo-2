import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle, Loader2 } from "lucide-react";

const bookingSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  phone: z.string().max(30).optional(),
  placement: z.string().trim().min(1, "Placement is required").max(255),
  isCoverup: z.enum(["yes", "no"], { required_error: "Please select" }),
  tattooSize: z.string().trim().min(1, "Tattoo size is required").max(100),
  style: z.string().trim().min(1, "Style is required").max(255),
  colourPreference: z.enum(["colour", "blackgrey", "mix"], { required_error: "Please select" }),
  description: z.string().trim().min(1, "Description is required").max(5000),
  preferredArtists: z.array(z.string()).min(1, "Select at least one artist"),
  preferredDays: z.array(z.string()).min(1, "Select at least one day"),
  preferredTime: z.enum(["early", "afternoon", "late"], { required_error: "Please select" }),
  additionalComments: z.string().max(5000).optional(),
  bookedBefore: z.enum(["yes", "no"], { required_error: "Please select" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const artistOptions = [
  { value: "Heather Drew", label: "Heather Drew", note: "Realism" },
  { value: "Paige McGrath", label: "Paige McGrath", note: "Neo-Traditional" },
  { value: "Bronson Ramos", label: "Bronson Ramos", note: "Neo-Traditional" },
  { value: "Jesse Kvarnstrom", label: "Jesse Kvarnstrom", note: "Traditional/Neo-Traditional" },
  { value: "Soodie Yang", label: "Soodie Yang", note: "Black & Grey Realism" },
  { value: "Brianne Thorne", label: "Brianne Thorne", note: "Neo-Traditional/Neo-Japanese" },
  { value: "Atisha Rainey", label: "Atisha Rainey", note: "Neo-Traditional" },
  { value: "Jordyn Bishop", label: "Jordyn Bishop", note: "Neo-Traditional" },
  { value: "No Preference", label: "No Preference", note: "" },
];

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Book = () => {
  const [searchParams] = useSearchParams();
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Map slug to artist name for pre-selection
  const slugToName: Record<string, string> = {
    "heather-drew": "Heather Drew",
    "paige-mcgrath": "Paige McGrath",
    "bronson-ramos": "Bronson Ramos",
    "jesse-kvarnstrom": "Jesse Kvarnstrom",
    "soodie-yang": "Soodie Yang",
    "brianne-thorne": "Brianne Thorne",
    "atisha-rainey": "Atisha Rainey",
    "jordyn-bishop": "Jordyn Bishop",
  };

  const artistParam = searchParams.get("artist") || "";
  const preselectedArtist = slugToName[artistParam] || "";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      preferredArtists: preselectedArtist ? [preselectedArtist] : [],
      preferredDays: [],
    },
  });

  const isCoverup = watch("isCoverup");
  const preferredArtists = watch("preferredArtists");
  const preferredDays = watch("preferredDays");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files).slice(0, 3);
      setFiles(selected);
    }
  };

  const toggleCheckbox = (field: "preferredArtists" | "preferredDays", value: string) => {
    const current = field === "preferredArtists" ? preferredArtists : preferredDays;
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(field, updated, { shouldValidate: true });
  };

  const onSubmit = async (data: BookingFormData) => {
    setSubmitting(true);
    try {
      // Upload reference images
      const imageUrls: string[] = [];
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("booking-references")
          .upload(fileName, file);
        if (uploadError) {
          console.error("Upload error:", uploadError);
          continue;
        }
        const { data: urlData } = supabase.storage
          .from("booking-references")
          .getPublicUrl(uploadData.path);
        imageUrls.push(urlData.publicUrl);
      }

      // Insert booking request
      const { error } = await supabase.from("booking_requests").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        placement: data.placement,
        is_coverup: data.isCoverup === "yes",
        tattoo_size: data.tattooSize,
        style: data.style,
        colour_preference: data.colourPreference,
        description: data.description,
        preferred_artists: data.preferredArtists,
        preferred_days: data.preferredDays,
        preferred_time: data.preferredTime,
        additional_comments: data.additionalComments || null,
        booked_before: data.bookedBefore === "yes",
        reference_image_urls: imageUrls.length > 0 ? imageUrls : null,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <CheckCircle size={48} className="mx-auto mb-6 text-[hsl(var(--brand-green))]" />
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Thank You!</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for your interest in booking with us! We'll be in touch within 2 business days.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-4"
        >
          Book Your Appointment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          Fill out the form below and we'll get back to you as soon as possible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
        >
          {/* ── Personal Info ── */}
          <fieldset className="space-y-5">
            <legend className="text-sm tracking-[0.15em] uppercase font-semibold mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Personal Info
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" {...register("firstName")} className="mt-1 bg-muted border-border" />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" {...register("lastName")} className="mt-1 bg-muted border-border" />
                {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1 bg-muted border-border" />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} className="mt-1 bg-muted border-border" />
              <p className="text-muted-foreground text-xs mt-1">We will probably never call you</p>
            </div>
          </fieldset>

          {/* ── Tattoo Details ── */}
          <fieldset className="space-y-5">
            <legend className="text-sm tracking-[0.15em] uppercase font-semibold mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Tattoo Details
            </legend>
            <div>
              <Label htmlFor="placement">Placement *</Label>
              <Input id="placement" placeholder="forearm, calf, etc. Be specific" {...register("placement")} className="mt-1 bg-muted border-border" />
              {errors.placement && <p className="text-destructive text-xs mt-1">{errors.placement.message}</p>}
            </div>

            <div>
              <Label>Is this a cover-up? *</Label>
              <RadioGroup
                onValueChange={(v) => setValue("isCoverup", v as "yes" | "no", { shouldValidate: true })}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="coverup-yes" />
                  <Label htmlFor="coverup-yes" className="font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="coverup-no" />
                  <Label htmlFor="coverup-no" className="font-normal cursor-pointer">No</Label>
                </div>
              </RadioGroup>
              {errors.isCoverup && <p className="text-destructive text-xs mt-1">{errors.isCoverup.message}</p>}
              {isCoverup === "yes" && (
                <p className="text-sm text-muted-foreground mt-2 p-3 bg-muted rounded border border-border">
                  Please upload a well-lit photo of the tattoo or scar, and note how old it is in the Description box below.
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="tattooSize">Tattoo Size *</Label>
              <Input id="tattooSize" placeholder="Estimate in cm or inches" {...register("tattooSize")} className="mt-1 bg-muted border-border" />
              {errors.tattooSize && <p className="text-destructive text-xs mt-1">{errors.tattooSize.message}</p>}
            </div>

            <div>
              <Label htmlFor="style">Style *</Label>
              <Input id="style" placeholder="Realism, neo-traditional, linework, etc." {...register("style")} className="mt-1 bg-muted border-border" />
              {errors.style && <p className="text-destructive text-xs mt-1">{errors.style.message}</p>}
            </div>

            <div>
              <Label>Colour or Black & Grey? *</Label>
              <RadioGroup
                onValueChange={(v) => setValue("colourPreference", v as "colour" | "blackgrey" | "mix", { shouldValidate: true })}
                className="flex flex-wrap gap-6 mt-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="colour" id="colour" />
                  <Label htmlFor="colour" className="font-normal cursor-pointer">Colour</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="blackgrey" id="blackgrey" />
                  <Label htmlFor="blackgrey" className="font-normal cursor-pointer">Black & Grey</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mix" id="mix" />
                  <Label htmlFor="mix" className="font-normal cursor-pointer">Mix</Label>
                </div>
              </RadioGroup>
              {errors.colourPreference && <p className="text-destructive text-xs mt-1">{errors.colourPreference.message}</p>}
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea id="description" placeholder="Any and all details we could need to know" {...register("description")} className="mt-1 bg-muted border-border min-h-[120px]" />
              {errors.description && <p className="text-destructive text-xs mt-1">{errors.description.message}</p>}
            </div>
          </fieldset>

          {/* ── Reference Images ── */}
          <fieldset className="space-y-3">
            <legend className="text-sm tracking-[0.15em] uppercase font-semibold mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Reference Images
            </legend>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/50 hover:bg-muted transition-colors cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Upload size={24} className="mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm font-medium">Upload Reference Images (up to 3)</p>
              <p className="text-xs text-muted-foreground mt-1">Clear reference images help us understand your vision</p>
              {files.length > 0 && (
                <p className="text-xs text-[hsl(var(--brand-green))] mt-2">
                  {files.length} file{files.length > 1 ? "s" : ""} selected
                </p>
              )}
            </div>
          </fieldset>

          {/* ── Preferences ── */}
          <fieldset className="space-y-6">
            <legend className="text-sm tracking-[0.15em] uppercase font-semibold mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Preferences
            </legend>

            <div>
              <Label className="mb-3 block">Preferred Artist(s) *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {artistOptions.map((artist) => (
                  <label
                    key={artist.value}
                    className="flex items-start gap-3 p-3 rounded border border-border bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Checkbox
                      checked={preferredArtists.includes(artist.value)}
                      onCheckedChange={() => toggleCheckbox("preferredArtists", artist.value)}
                      className="mt-0.5"
                    />
                    <div>
                      <span className="text-sm font-medium">{artist.label}</span>
                      {artist.note && (
                        <span className="text-xs text-muted-foreground block">{artist.note}</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
              {errors.preferredArtists && <p className="text-destructive text-xs mt-1">{errors.preferredArtists.message}</p>}
            </div>

            <div>
              <Label className="mb-3 block">Preferred Days *</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {dayOptions.map((day) => (
                  <label
                    key={day}
                    className="flex items-center gap-2 p-3 rounded border border-border bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Checkbox
                      checked={preferredDays.includes(day)}
                      onCheckedChange={() => toggleCheckbox("preferredDays", day)}
                    />
                    <span className="text-sm">{day}</span>
                  </label>
                ))}
              </div>
              {errors.preferredDays && <p className="text-destructive text-xs mt-1">{errors.preferredDays.message}</p>}
            </div>

            <div>
              <Label>Preferred Time of Day *</Label>
              <RadioGroup
                onValueChange={(v) => setValue("preferredTime", v as "early" | "afternoon" | "late", { shouldValidate: true })}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2"
              >
                {[
                  { value: "early", label: "Early (9am–11am)" },
                  { value: "afternoon", label: "Afternoon (12pm–2pm)" },
                  { value: "late", label: "Late (3pm–5pm)" },
                ].map((time) => (
                  <label
                    key={time.value}
                    className="flex items-center gap-2 p-3 rounded border border-border bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={time.value} id={`time-${time.value}`} />
                    <span className="text-sm">{time.label}</span>
                  </label>
                ))}
              </RadioGroup>
              {errors.preferredTime && <p className="text-destructive text-xs mt-1">{errors.preferredTime.message}</p>}
            </div>
          </fieldset>

          {/* ── Final ── */}
          <fieldset className="space-y-5">
            <legend className="text-sm tracking-[0.15em] uppercase font-semibold mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Final Details
            </legend>
            <div>
              <Label htmlFor="additionalComments">Inquiries & Additional Comments</Label>
              <Textarea id="additionalComments" {...register("additionalComments")} className="mt-1 bg-muted border-border" />
            </div>
            <div>
              <Label>Have you booked with us before? *</Label>
              <RadioGroup
                onValueChange={(v) => setValue("bookedBefore", v as "yes" | "no", { shouldValidate: true })}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="booked-yes" />
                  <Label htmlFor="booked-yes" className="font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="booked-no" />
                  <Label htmlFor="booked-no" className="font-normal cursor-pointer">No</Label>
                </div>
              </RadioGroup>
              {errors.bookedBefore && <p className="text-destructive text-xs mt-1">{errors.bookedBefore.message}</p>}
            </div>
          </fieldset>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full py-6 text-sm tracking-[0.15em] uppercase font-semibold"
            style={{ backgroundColor: "hsl(var(--brand-green))", fontFamily: "var(--font-body)" }}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Booking Request"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Book;
