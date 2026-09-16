'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-[16px]', className)}>
      {/* Decorative line */}
      <div
        className={cn(
          'mb-4 h-px w-12',
          centered ? 'mx-auto' : '',
          light ? 'bg-white/40' : 'bg-accent'
        )}
      />
      <h2
        className={cn(
          'font-serif text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-[16px] max-w-2xl text-base leading-relaxed md:text-lg',
            light ? 'text-white/70' : 'text-slate-deep'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
