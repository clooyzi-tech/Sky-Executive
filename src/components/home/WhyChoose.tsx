'use client';

import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { STRINGS } from '@/config/strings';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

const REVIEWS = [
  {
    id: 1,
    name: 'Sameer Kulkarni',
    role: 'Corporate Executive (Pune–Nagar Corridor)',
    rating: 5,
    date: 'Stayed last month',
    review:
      'Superb executive stay! The room was very peaceful and productive after a hectic workday. Wi-Fi was remarkably fast and front desk assistance was top-notch.',
    initials: 'SK',
  },
  {
    id: 2,
    name: 'Ananya & Rohan Joshi',
    role: 'Transit & Leisure Stay',
    rating: 5,
    date: 'Stayed 2 weeks ago',
    review:
      'Spotlessly clean rooms and very cozy bed! Prime location right at Jaywant Towers on Pune–Nagar Road, making transit smooth and convenient. Courteous staff round the clock.',
    initials: 'AR',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    role: 'Business Trip to Pune',
    rating: 5,
    date: 'Stayed recently',
    review:
      'Great value for money. Gated on-site parking was secure, 24/7 hot water in the bathroom worked flawlessly, and in-room dining was prompt and delicious. Highly recommended!',
    initials: 'VM',
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-16 sm:py-24 bg-[var(--cream-deep)] relative overflow-hidden select-none"
      id="testimonials"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-xs font-display font-bold tracking-wider uppercase mb-3">
            <CrownMark size="sm" variant="gold" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--navy-ink)]">
            What Our Guests Say
          </h2>
          <p className="font-body mt-2.5 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
            Real guest reviews from corporate visitors and highway travelers who stay at Hotel Sky Executive.
          </p>
        </div>

        {/* 3 Review Cards (Section 7: 6px radius, 1px gold border, shadow-card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="rounded-[6px] bg-[var(--cream)] border border-[var(--gold)] p-6 sm:p-7 shadow-[0_10px_28px_rgba(11,31,63,0.12)] hover:shadow-[0_14px_34px_rgba(11,31,63,0.16)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle watermark quote icon */}
              <MessageSquareQuote className="absolute right-4 top-4 h-14 w-14 text-[var(--gold)]/15 pointer-events-none group-hover:text-[var(--gold)]/25 transition-colors" />

              <div className="relative z-10">
                {/* 5 Stars in Gold Bright */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold-bright)] text-[var(--gold-bright)]" />
                  ))}
                </div>

                {/* Review Text in Playfair Italic font-script */}
                <p className="font-script text-base sm:text-lg text-[var(--navy-ink)] leading-relaxed mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Guest Details */}
              <div className="relative z-10 pt-4 border-t border-[var(--line-gold)] flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] border border-[var(--gold-bright)] text-[var(--gold-bright)] font-display font-bold text-xs shadow-xs">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm text-[var(--navy-ink)] uppercase truncate">
                    {item.name}
                  </h4>
                  <p className="font-body text-xs text-[var(--ink-muted)] truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[var(--line-gold)] bg-[var(--cream)] px-6 py-2.5 shadow-xs">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[var(--navy-ink)]">
              4.9/5 Average Guest Rating
            </span>
            <span className="text-[var(--gold)]">•</span>
            <span className="font-body text-xs text-[var(--brown-gold)] font-semibold">
              Verified Executive Boutique Hospitality in Lonikand
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
