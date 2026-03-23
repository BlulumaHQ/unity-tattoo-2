import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const artistParam = searchParams.get("artist") || "";
  
  // Build Jotform URL with prefill if artist is specified
  const jotformBaseUrl = "https://form.jotform.com/243295237116254";
  const jotformUrl = artistParam
    ? `${jotformBaseUrl}?preferredArtists=${encodeURIComponent(artistParam)}`
    : jotformBaseUrl;

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-6"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-muted-foreground mb-12"
          >
            Fill out the booking form below and we'll get back to you as soon as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full"
          >
            <iframe
              src={jotformUrl}
              title="Unity Tattoo Booking Form"
              className="w-full border-0 rounded"
              style={{ minHeight: '1200px' }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123!2d-123.0695!3d49.2715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671854e0ee703%3A0x7fbc48cb507cb03c!2s1395+Commercial+Dr%2C+Vancouver%2C+BC+V5L+3X5%2C+Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Unity Tattoo Location"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
