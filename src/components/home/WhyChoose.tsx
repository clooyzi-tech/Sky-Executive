'use client';

import React from 'react';
import { Star, Sparkles, MessageSquareQuote } from 'lucide-react';
import { STRINGS } from '@/config/strings';

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
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ivory border border-border text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-medium leading-relaxed">
            Real experiences from business executives and travelers who choose Hotel Sky Executive.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-border p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <MessageSquareQuote className="absolute right-4 top-4 h-16 w-16 text-border/40 pointer-events-none group-hover:text-accent/15 transition-colors" />

              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Guest Details */}
              <div className="relative z-10 pt-4 border-t border-border flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream border border-border text-accent font-bold text-xs">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10.5px] text-slate-medium truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge Banner */}
        <div className="mt-12 text-center">
          <a
            href={STRINGS.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border shadow-xs hover:border-accent transition-colors group cursor-pointer"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
              Verified Executive Hospitality • Enquire Today →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
