'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import type { AnswerBlockData } from '@/content/aeo';
import { cn } from '@/lib/utils';
import CrownMark from '@/components/ui/CrownMark';

interface AnswerBlockProps {
  data: AnswerBlockData;
  className?: string;
  id?: string;
}

export default function AnswerBlock({ data, className, id = 'direct-answer' }: AnswerBlockProps) {
  return (
    <section
      id={id}
      aria-label={data.title}
      className={cn('py-12 sm:py-16 bg-[var(--cream)] select-none', className)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Framed Feature Card (Section 5.6: 6px radius, 1px gold border, inner double frame) */}
        <div className="card-framed p-6 sm:p-8 md:p-10 shadow-[0_10px_28px_rgba(11,31,63,0.12)] relative overflow-hidden bg-[var(--cream)]">
          {/* Top Decorative Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--gold)]" />

          {/* Badge & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-[11px] font-display font-bold tracking-wider uppercase w-fit">
              <CrownMark size="sm" variant="gold" />
              <span>{data.badge}</span>
            </div>
            <span className="font-display text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
              Verified Operational Facts
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--navy-ink)] mb-4">
            {data.title}
          </h2>

          {/* Direct Answer (Lead Summary) */}
          <div className="rounded-[6px] bg-[var(--cream-deep)] border-l-4 border-[var(--gold)] p-4 sm:p-5 mb-7">
            <p className="font-body text-sm sm:text-base text-[var(--ink)] font-semibold leading-relaxed">
              {data.directAnswer}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
            {data.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[6px] border border-[var(--line-gold)] bg-[var(--cream-deep)]/70 p-4 sm:p-5 transition-colors hover:border-[var(--gold)]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--gold-bright)] text-[var(--navy-deep)] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--brown-gold)] mb-1">
                      {item.label}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[var(--ink)] font-medium leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          {data.ctaText && data.ctaHref && (
            <div className="pt-2 flex justify-end">
              <Link
                href={data.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
