import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyBookingCTA = () => {
  return (
    <>
      {/* Desktop - Left side vertical */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-foreground text-background px-4 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors shadow-lg"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>

      {/* Mobile - Floating bottom left (right side reserved for scroll-to-top) */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-foreground text-background px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium rounded-full shadow-xl hover:bg-foreground/90 transition-colors"
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>
    </>
  );
};

export default StickyBookingCTA;
