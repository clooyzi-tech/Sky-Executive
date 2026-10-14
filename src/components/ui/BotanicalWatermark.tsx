import React from 'react';

interface BotanicalWatermarkProps {
  className?: string;
  opacity?: number;
}

/**
 * Botanical Watermark SVG Component
 * Section 5.8:
 * Single branch with 8-10 leaves drawn as outline-only SVG,
 * gold-bright with delicate opacity (default 12%), rotated -8deg.
 */
export default function BotanicalWatermark({
  className = '',
  opacity = 0.12,
}: BotanicalWatermarkProps) {
  return (
    <svg
      width="180"
      height="260"
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, transform: 'rotate(-8deg)' }}
      aria-hidden="true"
    >
      {/* Central Curved Stem */}
      <path
        d="M20 250 C 40 180, 70 120, 150 20"
        stroke="var(--gold-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Leaves Pair 1 */}
      <path
        d="M45 200 C 30 185, 20 180, 10 190 C 20 205, 35 210, 45 200 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />
      <path
        d="M55 190 C 70 175, 80 170, 90 180 C 80 195, 65 200, 55 190 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />

      {/* Leaves Pair 2 */}
      <path
        d="M70 150 C 50 135, 40 130, 30 140 C 40 155, 55 160, 70 150 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />
      <path
        d="M80 140 C 100 125, 110 120, 120 130 C 110 145, 95 150, 80 140 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />

      {/* Leaves Pair 3 */}
      <path
        d="M100 100 C 80 85, 70 80, 60 90 C 70 105, 85 110, 100 100 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />
      <path
        d="M110 90 C 130 75, 140 70, 150 80 C 140 95, 125 100, 110 90 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />

      {/* Leaves Pair 4 */}
      <path
        d="M130 55 C 115 45, 105 40, 98 48 C 106 60, 118 64, 130 55 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />
      <path
        d="M138 48 C 152 38, 160 34, 168 42 C 160 54, 148 58, 138 48 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />

      {/* Terminal Bud Leaf */}
      <path
        d="M150 20 C 158 8, 164 4, 170 10 C 165 20, 158 24, 150 20 Z"
        stroke="var(--gold-bright)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
