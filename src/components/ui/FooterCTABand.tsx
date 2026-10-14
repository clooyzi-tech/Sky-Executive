import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import CrownMark from './CrownMark';

interface FooterCTABandProps {
  locationText?: string;
  buttonText?: string;
  buttonHref?: string;
}

/**
 * Footer CTA Band Component
 * Section 6.6:
 * Height 72px, solid background Gold Bright (#D4A24C).
 * (●pin) TAGLINE FRAGMENT A │ [ navy pill: TAGLINE FRAGMENT B ] (crown)
 */
export default function FooterCTABand({
  locationText = 'JAYWANT TOWERS, PUNE–NAGAR ROAD, LONIKAND',
  buttonText = 'ENQUIRE DIRECT / BOOK NOW',
  buttonHref = '/contact',
}: FooterCTABandProps) {
  return (
    <aside
      className="w-full bg-[var(--gold-bright)] text-[var(--navy-deep)] border-y border-[var(--gold)]/30 select-none py-3 sm:py-0 sm:h-[76px] flex items-center justify-center shadow-md relative z-20"
      aria-label="Hotel Location and Quick Booking Bar"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        {/* Left: Location Pin & Address Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--navy-deep)] flex items-center justify-center shrink-0 shadow-xs">
            <MapPin className="w-5 h-5 text-[var(--cream)]" />
          </div>
          <span className="font-display font-bold text-xs sm:text-sm md:text-base tracking-wider text-[var(--navy-deep)] uppercase text-center sm:text-left">
            {locationText}
          </span>
        </div>

        {/* Center Divider for Desktop */}
        <div className="hidden lg:block w-[1px] h-8 bg-[var(--navy-deep)]/40" />

        {/* Right: Navy Pill CTA & Crown */}
        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <Link
            href={buttonHref}
            className="w-full sm:w-auto text-center inline-flex items-center justify-center rounded-full bg-[var(--navy-deep)] text-white hover:bg-[var(--navy-ink)] active:scale-95 transition-all duration-200 px-6 sm:px-8 py-3 text-xs sm:text-sm md:text-base font-display font-bold tracking-widest uppercase shadow-md hover:shadow-lg"
          >
            {buttonText}
          </Link>

          <div className="hidden sm:block opacity-80 shrink-0">
            <CrownMark size="footer" variant="navy" />
          </div>
        </div>
      </div>
    </aside>
  );
}
