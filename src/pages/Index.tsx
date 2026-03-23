import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { artists } from "@/data/artists";

const allRecentWorkImages = [
  "/images/portfolio/tattoo-snake-bg.webp",
  "/images/portfolio/tattoo-moon-woman.webp",
  "/images/portfolio/tattoo-frog-samurai.webp",
  "/images/portfolio/tattoo-eagle-snake.webp",
  "/images/portfolio/tattoo-robot-helmet.webp",
  "/images/portfolio/tattoo-strawberry-heart.webp",
  "/images/portfolio/tattoo-cat-portrait.webp",
  "/images/portfolio/tattoo-statue-realism.webp",
  "/images/portfolio/tattoo-dotwork-mandala.jpg",
  "/images/portfolio/tattoo-fineline-botanical.jpg",
  "/images/portfolio/tattoo-fineline-portrait.jpg",
  "/images/portfolio/tattoo-japanese-dragon.jpg",
  "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
  "/images/portfolio/tattoo-trad-eagle.jpg",
  "/images/portfolio/tattoo-watercolor-bird.jpg",
  "/images/portfolio/tattoo-wolf-realism.jpg",
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Incredible experience! The artists at Unity Tattoo are so talented and professional. My piece turned out even better than I imagined.",
  },
  {
    name: "Jordan K.",
    rating: 5,
    text: "Best tattoo shop in Vancouver. The studio is clean, welcoming, and the artists really take the time to understand your vision.",
  },
  {
    name: "Alex R.",
    rating: 5,
    text: "Had an amazing session here. The attention to detail is unmatched. Highly recommend Unity Tattoo to anyone looking for quality work.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Index = () => {
  const recentWorkImages = useMemo(() => shuffleArray(allRecentWorkImages).slice(0, 8), []);

  return (
    <>
      {/* ─── HERO — Above the fold, value prop + CTA dominant ─── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shop-exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 leading-[0.95]"
          >
            Unity Tattoo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            1395 Commercial Drive &nbsp;·&nbsp; Vancouver, BC
          </motion.p>

          {/* Primary CTA — large and prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-white/90 active:scale-[0.97] shadow-2xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book an Appointment
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Social proof teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex items-center justify-center gap-2 text-white/50"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-xs tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
              5-Star Rated on Google
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Scroll Down
        </motion.div>
      </section>

      {/* ─── THE STUDIO — Solution/Value prop ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1fr,auto] gap-10 md:gap-16 items-center">
            <div>
              <motion.h2
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="section-heading mb-6 md:text-left text-center"
              >
                The Studio
              </motion.h2>
              <motion.p
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-muted-foreground leading-relaxed md:text-left text-center"
              >
                Located on Vancouver's iconic Commercial Drive, Unity Tattoo is a collective of talented artists united
                by a shared passion for exceptional tattooing. Our studio provides a welcoming, professional environment
                where artistry meets precision.
              </motion.p>
            </div>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col gap-3 items-center md:items-start"
            >
              <Link to="/the-shop" className="cta-button whitespace-nowrap">
                Explore the Shop
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Book Now <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST — Reviews pulled up for early social proof ─── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-muted-foreground text-sm mb-14"
          >
            Reviews from Google
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="bg-background border border-border p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{review.text}"</p>
                <p className="text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>{review.name}</p>
              </motion.div>
            ))}
          </div>
          {/* Inline CTA after trust */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/contact" className="cta-button">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTISTS — Showcase the team ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4"
          >
            Our Artists
          </motion.h2>
          <motion.p
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-muted-foreground mb-14 max-w-xl mx-auto"
          >
            Meet the talented team behind Unity Tattoo. Each artist brings their own unique style and expertise.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.slug}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/artists/${artist.slug}`} className="group relative block aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="font-serif text-xl md:text-2xl lg:text-3xl text-white text-center leading-tight px-4">
                      {artist.name}
                    </span>
                    <span
                      className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {artist.specialty}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA below artists */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link to="/contact" className="cta-button">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── RECENT WORK — Portfolio proof ─── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-14"
          >
            Recent Work
          </motion.h2>
          <div className="gallery-grid">
            {recentWorkImages.map((src, num) => (
              <motion.div
                key={num}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: num * 0.04 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Recent tattoo work ${num + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            Location
          </motion.h2>
          <motion.p
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-muted-foreground tracking-[0.15em] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            1395 Commercial Drive &nbsp;·&nbsp; Vancouver, BC Canada
          </motion.p>
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] overflow-hidden"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA — Strong close ─── */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-normal mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Get Inked?
          </motion.h2>
          <motion.p
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/70 mb-10 max-w-lg mx-auto"
          >
            Book your appointment today and let our talented artists bring your vision to life.
          </motion.p>
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:bg-white/90 active:scale-[0.97] shadow-xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book an Appointment
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
