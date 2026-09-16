import React from 'react';

interface SectionDividerProps {
  className?: string;
  glow?: boolean;
}

export default function SectionDivider({
  className = '',
  glow = true,
}: SectionDividerProps) {
  return (
    <div
      className={`relative w-full py-[30px] flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full max-w-xl sm:max-w-2xl px-6 flex items-center justify-center">
        {/* Soft Ambient Golden Glow Layer */}
        {glow && (
          <div
            className="absolute inset-x-6 h-3 sm:h-4 -top-[4px] rounded-full blur-[4px] opacity-75"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(201, 162, 39, 0.2) 20%, rgba(212, 175, 55, 0.6) 50%, rgba(201, 162, 39, 0.2) 80%, transparent 100%)',
            }}
          />
        )}

        {/* Core Luxury Metallic Gold Gradient Divider Bar */}
        <div
          className="relative w-full h-[2.5px] rounded-full shadow-[0_0_10px_rgba(201,162,39,0.35)]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(201, 162, 39, 0.3) 15%, #C9A227 35%, #E5C368 50%, #C9A227 65%, rgba(201, 162, 39, 0.3) 85%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
}
