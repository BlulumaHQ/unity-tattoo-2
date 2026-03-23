import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

const Index = () => {
  const recentWorkImages = useMemo(() => shuffleArray(allRecentWorkImages).slice(0, 8), []);

  return (
    <>
      {/* Hero Section — white bg context (above fold) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shop-exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
          >
            Unity Tattoo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            1395 Commercial Drive &nbsp;·&nbsp; Vancouver, BC
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="cta-button-light">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Scroll Down
        </motion.div>
      </section>

      {/* 1. About Preview — WHITE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            The Studio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed mb-10"
          >
            Located on Vancouver's iconic Commercial Drive, Unity Tattoo is a collective of talented artists united
            by a shared passion for exceptional tattooing. Our studio provides a welcoming, professional environment
            where artistry meets precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/the-shop" className="cta-button">
              Explore the Shop
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Artists Section — GREY */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4"
          >
            Our Artists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
          >
            Meet the talented team behind Unity Tattoo. Each artist brings their own unique style and expertise.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-xl md:text-2xl lg:text-3xl text-white text-center leading-tight px-4">
                      {artist.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What People Say / Reviews — WHITE (moved up, replacing Our Space) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mb-12"
          >
            Reviews from Google
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-xs font-medium tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recent Work — GREY */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-16"
          >
            Recent Work
          </motion.h2>
          <div className="gallery-grid">
            {recentWorkImages.map((src, num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: num * 0.05 }}
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

      {/* 5. Location Section — WHITE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            Location
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground tracking-[0.15em] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            1395 Commercial Drive &nbsp;·&nbsp; Vancouver, BC Canada
          </motion.p>
          <div className="w-full h-[400px] rounded overflow-hidden">
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
        </div>
      </section>

      {/* CTA Section — matches next alternation */}
      <section className="py-24 md:py-32 bg-muted text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            Ready to Get Inked?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-10 max-w-lg mx-auto"
          >
            Book your appointment today and let our talented artists bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="cta-button">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
