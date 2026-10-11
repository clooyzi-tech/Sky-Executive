'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '@/config/image';

interface TimelineStep {
  number: number;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: 'We Provide High Quality Services',
    tagline: 'Thoughtful Hospitality & Fresh Dining',
    description:
      'From our dedicated in-house cloud kitchen delivering fresh meals to your door to tranquil nature-facing rooms with individual AC and Smart TV, every detail is organized for effortless comfort in Pune.',
    highlights: [
      'In-house cloud kitchen for room-delivered breakfast, lunch & dinner',
      'Boutique rooms arranged for quiet privacy',
      'Scenic nature-oriented views facing tranquil greenery',
    ],
    image: IMAGES.cloudKitchen || '/images/property/cloud_kitchen.jpg',
    imageAlt: 'High quality in-room dining and guest care at Hotel Sky Executive Pune',
    ctaText: 'Explore Dining & Rooms',
    ctaHref: '/rooms',
  },
  {
    number: 2,
    title: 'Our Hotel Services Is the best 20+ Amenities',
    tagline: 'Modern Conveniences for Work & Leisure',
    description:
      'Enjoy verified boutique amenities including high-speed Wi-Fi for corporate travelers, an elevator / lift facility, 100% power backup, free on-site parking, and laundry support.',
    highlights: [
      'Free High-Speed Wi-Fi & work desk in every room',
      'Elevator / Lift facility & 100% full power backup',
      'Free on-site parking & pet-friendly stay at no extra charge',
    ],
    image: '/images/services/wifi_desk.jpg',
    imageAlt: '20+ verified amenities and guest services at Hotel Sky Executive',
    ctaText: 'View All Facilities',
    ctaHref: '/facilities',
  },
  {
    number: 3,
    title: 'We Provide High Class Security',
    tagline: '24/7 Front Desk, Security & Peace of Mind',
    description:
      'Nestled inside the secure Infinity Greens Society in Upper Kharadi, Hotel Sky Executive provides round-the-clock front desk presence, CCTV monitoring across all corridors and entry points, and complete safety.',
    highlights: [
      '24/7 Front desk assistance & staff on-site day and night',
      'Continuous CCTV security monitoring in all common areas',
      'Gated residential serenity near Kharadi IT parks and Wagholi',
    ],
    image: IMAGES.services.reception || '/images/property/interior_design.webp',
    imageAlt: '24/7 security and reception desk at Hotel Sky Executive Pune',
    ctaText: 'Contact Front Desk',
    ctaHref: '/contact',
  },
];

export default function TimelineServices() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden" id="timeline-services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E1] border border-[#E8DFC8] text-[#A67C37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Guests Choose Hotel Sky Executive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A241C] tracking-tight">
            Crafted for Unmatched Stay Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7E7465] leading-relaxed">
            Discover how our boutique hotel blends serene nature surroundings with premium hospitality in Pune.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Golden Center Line for desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#B38E46]/20 via-[#B38E46] to-[#B38E46]/20 z-0"
          />

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.number}
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                >
                  {/* Content Column */}
                  <div
                    className={`${
                      isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'
                    } flex flex-col justify-center text-left`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {/* Mobile Node Badge */}
                      <span className="lg:hidden flex h-8 w-8 items-center justify-center rounded-full bg-[#B38E46] text-white font-bold text-sm shadow-md">
                        {step.number}
                      </span>
                      <span className="text-xs uppercase font-bold tracking-widest text-[#B38E46]">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A241C] leading-tight mb-4">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-[#6E6454] leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-6">
                      {step.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#2A241C]">
                          <CheckCircle2 className="w-4 h-4 text-[#B38E46] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {step.ctaHref && (
                      <div>
                        <Link
                          href={step.ctaHref}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A67C37] hover:text-[#805e26] transition-colors group"
                        >
                          <span>{step.ctaText}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Image Column */}
                  <div
                    className={`${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } relative flex justify-center`}
                  >
                    {/* Desktop Center Gold Circle Badge on the timeline */}
                    <div
                      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-[#B38E46] text-white font-bold text-base shadow-lg border-4 border-[#FAF7F2] ${
                        isEven ? '-right-[54px]' : '-left-[54px]'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Image Card */}
                    <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#E8DFC8] group">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
