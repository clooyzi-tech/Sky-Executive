'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import type { AnswerBlockData } from '@/content/aeo';
import { cn } from '@/lib/utils';

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
      className={cn('py-10 sm:py-14 bg-ivory', className)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-border-gold p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle gold decorative accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          {/* Badge & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-border text-accent-dark text-[11px] font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>{data.badge}</span>
            </div>
            <span className="text-[11px] font-medium text-slate-medium uppercase tracking-wider">
              Verified Property Facts
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
            {data.title}
          </h2>

          {/* Direct Answer (Lead Summary) */}
          <div className="rounded-2xl bg-cream/50 border-l-4 border-accent p-4 sm:p-5 mb-8">
            <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              {data.directAnswer}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
            {data.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-ivory/60 p-4 sm:p-5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-deep leading-relaxed">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-charcoal text-xs sm:text-sm font-semibold hover:bg-accent-light transition-colors shadow-xs"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
