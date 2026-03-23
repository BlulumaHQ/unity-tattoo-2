import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyBookingCTA = () => {
  return (
    <>
      {/* Desktop - Right side vertical */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 py-3 text-xs tracking-[0.15em] uppercase font-medium text-white transition-colors shadow-lg hover:brightness-110"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', backgroundColor: 'hsl(var(--brand-green))' }}
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>

      {/* Mobile - Floating bottom right */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium rounded-full shadow-xl text-white transition-colors hover:brightness-110"
          style={{ backgroundColor: 'hsl(var(--brand-green))' }}
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>
    </>
  );
};

export default StickyBookingCTA;
