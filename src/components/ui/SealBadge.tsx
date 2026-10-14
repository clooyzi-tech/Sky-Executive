import React from 'react';
import CrownMark from './CrownMark';

interface SealBadgeProps {
  line1?: string;
  line2?: string;
  line3?: string;
  className?: string;
}

/**
 * Circular Seal Badge Component
 * Section 5.4:
 * Diameter: 220px desktop / 176px tablet / 132px mobile
 * Fill: Navy Deep (#0B1F3F)
 * Outer ring: 3px Gold Bright (#D4A24C)
 * Inner ring: 1px Gold Bright inset 10px
 * 3 lines of script, tiny crown flanked by two 28px gold lines
 */
export default function SealBadge({
  line1 = 'Verified Executive',
  line2 = 'Boutique Comfort',
  line3 = 'Lonikand, Pune',
  className = '',
}: SealBadgeProps) {
  return (
    <div
      className={`relative rounded-full bg-[var(--navy-deep)] flex flex-col items-center justify-center text-center shadow-[0_14px_30px_rgba(0,0,0,0.35)] select-none border-[3px] border-[var(--gold-bright)] p-4 w-[132px] h-[132px] sm:w-[176px] sm:h-[176px] md:w-[220px] md:h-[220px] ${className}`}
      aria-label="Hotel Sky Executive Quality Seal"
    >
      {/* Inset Inner 1px Gold Ring */}
      <div className="absolute inset-[6px] sm:inset-[8px] md:inset-[10px] rounded-full border border-[var(--gold-bright)] pointer-events-none opacity-80" />

      {/* Line 1 */}
      <span className="font-script text-[11px] sm:text-xs md:text-sm text-[var(--on-navy)] tracking-wide">
        {line1}
      </span>

      {/* Line 2 (Featured Large Tagline) */}
      <span className="font-script text-[15px] sm:text-lg md:text-2xl font-normal text-[var(--gold-bright)] leading-tight my-0.5 sm:my-1 drop-shadow-sm">
        {line2}
      </span>

      {/* Line 3 */}
      <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-[var(--on-navy)] opacity-90">
        {line3}
      </span>

      {/* Tiny Crown Flanked by Two Gold Lines */}
      <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
        <div className="w-4 sm:w-6 md:w-7 h-[1.5px] bg-[var(--gold-bright)] opacity-70" />
        <CrownMark size="sm" variant="gold-bright" className="scale-75 sm:scale-90" />
        <div className="w-4 sm:w-6 md:w-7 h-[1.5px] bg-[var(--gold-bright)] opacity-70" />
      </div>
    </div>
  );
}
