'use client';

import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/content/aeo';
import { cn } from '@/lib/utils';

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
      className={cn('py-16 sm:py-24 bg-cream/40 border-t border-border-light relative overflow-hidden', className)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ivory border border-border text-accent-dark text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-accent" />
            <span>{badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-medium leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Collapsible Accordion List using Semantic HTML5 details/summary */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl bg-white border border-border p-5 sm:p-6 shadow-xs hover:border-accent/40 transition-colors open:border-accent/60"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none gap-4">
                <span className="font-serif text-base sm:text-lg font-semibold text-charcoal group-open:text-accent-dark transition-colors">
                  {faq.question}
                </span>
                <span className="p-1.5 rounded-full bg-cream group-open:bg-accent/15 group-open:rotate-180 transition-transform duration-200 shrink-0">
                  <ChevronDown className="w-4 h-4 text-charcoal group-open:text-accent-dark" />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-border-light text-xs sm:text-sm text-slate-deep leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
