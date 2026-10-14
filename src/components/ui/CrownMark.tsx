import React from 'react';

interface CrownMarkProps {
  size?: 'hero' | 'nav' | 'footer' | 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'gold-bright' | 'navy' | 'cream';
  className?: string;
}

/**
 * Crown Mark component
 * Royal Navy + Antique Gold design theme signature motif.
 * Features 3 peaks with tipped circles and a solid base band.
 * Sizes: hero (96x64), nav (32x22), footer (28x20).
 */
export default function CrownMark({
  size = 'nav',
  variant = 'gold',
  className = '',
}: CrownMarkProps) {
  const dimensions = {
    hero: { width: 96, height: 64 },
    nav: { width: 32, height: 22 },
    footer: { width: 28, height: 20 },
    sm: { width: 24, height: 16 },
    md: { width: 48, height: 32 },
    lg: { width: 72, height: 48 },
  }[size];

  const fillColors = {
    gold: '#B8862B',        // Gold Antique
    'gold-bright': '#D4A24C', // Gold Bright
    navy: '#0B1F3F',        // Navy Deep
    cream: '#FBF5E9',       // Cream
  }[variant];

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left tip circle */}
      <circle cx="6" cy="7" r="2.5" fill={fillColors} />
      {/* Center tip circle (taller) */}
      <circle cx="24" cy="3.5" r="3" fill={fillColors} />
      {/* Right tip circle */}
      <circle cx="42" cy="7" r="2.5" fill={fillColors} />

      {/* Main crown body with 3 peaks */}
      <path
        d="M6 10 L14 20 L24 7 L34 20 L42 10 L40 24 L8 24 Z"
        fill={fillColors}
      />

      {/* Flat base band 6px tall */}
      <rect x="7" y="26" width="34" height="4.5" rx="1" fill={fillColors} />

      {/* Subtle jewel accent cutouts on base */}
      <circle cx="16" cy="28.2" r="1" fill={variant === 'navy' ? '#D4A24C' : '#FBF5E9'} />
      <circle cx="24" cy="28.2" r="1.2" fill={variant === 'navy' ? '#D4A24C' : '#FBF5E9'} />
      <circle cx="32" cy="28.2" r="1" fill={variant === 'navy' ? '#D4A24C' : '#FBF5E9'} />
    </svg>
  );
}
