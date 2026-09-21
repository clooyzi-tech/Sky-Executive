'use client';

import React from 'react';
import { Star, Sparkles, CheckCircle2, MessageSquareQuote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sameer Kulkarni',
    role: 'Corporate Traveler (Kharadi IT Park)',
    rating: 5,
    date: 'Stayed last month',
    review:
      'Superb quiet boutique stay! The nature view from the double bed room was very peaceful after a hectic workday. Wi-Fi was fast and the in-house cloud kitchen served hot, delicious meals on time.',
    initials: 'SK',
  },
  {
    id: 2,
    name: 'Ananya & Rohan Joshi',
    role: 'Weekend Leisure Stay',
    rating: 5,
    date: 'Stayed 2 weeks ago',
    review:
      'Spotlessly clean rooms and very cozy bed! The quiet boutique layout ensures zero corridor disturbance. Miss Reena and the front desk team were courteous and attentive round the clock.',
    initials: 'AR',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    role: 'Family Trip to Pune',
    rating: 5,
    date: 'Stayed recently',
    review:
      'Great value for money. Gated parking was secure, 24/7 hot water in the bathroom worked flawlessly, and the location in Upper Kharadi is convenient yet peaceful. Highly recommended!',
    initials: 'VM',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E1] border border-[#E8DFC8] text-[#A67C37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A241C] tracking-tight">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#7E7465] leading-relaxed">
            Real experiences from travelers who made liv.inn Pune their home away from home.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-[#E8DFC8] p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <MessageSquareQuote className="absolute right-4 top-4 h-16 w-16 text-[#FAF5EC] pointer-events-none group-hover:text-[#F5EFE4] transition-colors" />

              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-[#4E473D] leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Guest Details */}
              <div className="relative z-10 pt-4 border-t border-[#F0E9DC] flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#A67C37] font-bold text-xs">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#2A241C] truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10.5px] text-[#7E7465] truncate">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/liv.inn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8DFC8] shadow-xs hover:border-[#B38E46] transition-colors group cursor-pointer"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#2A241C] group-hover:text-[#A67C37]">
              Rated 4.9 on Google Maps • Read all reviews →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
