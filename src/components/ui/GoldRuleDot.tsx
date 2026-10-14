import React from 'react';

interface GoldRuleDotProps {
  width?: 'full' | 'hero' | 'intro' | 'sm' | string;
  variant?: 'gold' | 'gold-bright' | 'navy';
  dotPosition?: 'center' | 'left-40';
  className?: string;
  dotSize?: 8 | 10 | 12;
}

/**
 * Gold Rule with Center Dot (Section Divider)
 * Motif: ────────────────────●────────────────────
 * Line: 2px, Dot: 12px (or 8px)
 */
export default function GoldRuleDot({
  width = 'hero',
  variant = 'gold',
  dotPosition = 'center',
  className = '',
  dotSize = 12,
}: GoldRuleDotProps) {
  const widthClass = {
    full: 'w-full',
    hero: 'w-[340px] max-w-full',
    intro: 'w-[420px] max-w-full',
    sm: 'w-[200px] max-w-full',
  }[width] || width;

  const lineColor = {
    gold: 'bg-[var(--gold)]',
    'gold-bright': 'bg-[var(--gold-bright)]',
    navy: 'bg-[var(--navy-deep)]',
  }[variant];

  const dotColor = {
    gold: 'bg-[var(--gold)] border-[var(--cream)]',
    'gold-bright': 'bg-[var(--gold-bright)] border-[var(--navy-deep)]',
    navy: 'bg-[var(--navy-deep)] border-[var(--gold-bright)]',
  }[variant];

  return (
    <div
      className={`relative flex items-center my-6 ${widthClass} ${
        dotPosition === 'center' ? 'mx-auto justify-center' : 'justify-start'
      } ${className}`}
      aria-hidden="true"
    >
      {/* Horizontal Rule */}
      <div className={`h-[2px] w-full ${lineColor} opacity-75`} />

      {/* Diamond / Dot */}
      <div
        className={`absolute rounded-full border-2 ${dotColor} shadow-xs`}
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          left: dotPosition === 'center' ? '50%' : '40%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
}
