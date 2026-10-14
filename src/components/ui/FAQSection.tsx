'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/content/aeo';
import { cn } from '@/lib/utils';
import CrownMark from '@/components/ui/CrownMark';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  id?: string;
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Verified answers to pre-booking, room amenity, and arrival questions.',
  badge = 'Guest FAQ & Direct Answers',
  className,
  id = 'faq',
}: FAQSectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={cn('py-16 sm:py-24 bg-[var(--cream)] border-t border-[var(--line-gold)] relative overflow-hidden select-none', className)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-xs font-display font-bold tracking-wider uppercase mb-3">
            <CrownMark size="sm" variant="gold" />
            <span>{badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)]">
            {title}
          </h2>
          {subtitle && (
            <p className="font-body mt-2.5 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Semantic HTML5 details/summary Accordion List (6px radius, 1px gold border) */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-[6px] bg-[var(--cream-deep)] border border-[var(--gold)]/70 p-5 sm:p-6 shadow-xs hover:border-[var(--gold)] transition-colors open:border-[var(--gold-bright)] open:shadow-md"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none gap-4">
                <span className="font-display text-sm sm:text-base font-bold uppercase text-[var(--navy-ink)] group-open:text-[var(--brown-gold)] transition-colors">
                  {faq.question}
                </span>
                <span className="p-1.5 rounded-full bg-[var(--gold)]/15 group-open:bg-[var(--gold-bright)] group-open:text-[var(--navy-deep)] group-open:rotate-180 transition-all duration-200 shrink-0">
                  <ChevronDown className="w-4 h-4 text-[var(--navy-ink)] group-open:text-[var(--navy-deep)]" />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[var(--line-gold)] font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
