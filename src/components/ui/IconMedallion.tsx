import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconMedallionProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  size?: 'sm' | 'md' | 'lg'; // 48px, 64px, 76px
  variant?: 'gold' | 'navy';
  className?: string;
  iconClassName?: string;
}

/**
 * Icon Medallion Component
 * Section 5.5:
 * Perfect circle medallion with solid cream icon glyph.
 * Gold variant (fill --gold, icon cream)
 * Navy variant (fill --navy-deep, icon cream)
 */
export default function IconMedallion({
  icon: Icon,
  size = 'lg',
  variant = 'gold',
  className = '',
  iconClassName = '',
}: IconMedallionProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',       // 48px
    md: 'w-16 h-16',       // 64px
    lg: 'w-[76px] h-[76px]', // 76px
  }[size];

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  }[size];

  const bgClasses = {
    gold: 'bg-[var(--gold)] text-[var(--cream)] border border-[var(--gold-bright)]',
    navy: 'bg-[var(--navy-deep)] text-[var(--cream)] border border-[var(--gold-bright)]/40',
  }[variant];

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:ring-6 group-hover:ring-[rgba(184,134,43,0.18)] shadow-md ${sizeClasses} ${bgClasses} ${className}`}
      aria-hidden="true"
    >
      {/* Subtle Inset Ring */}
      <div className="absolute inset-[4px] rounded-full border border-[var(--cream)]/30 pointer-events-none" />

      {/* Center Icon */}
      <Icon className={`${iconSizes} stroke-[2.2] ${iconClassName}`} />
    </div>
  );
}
