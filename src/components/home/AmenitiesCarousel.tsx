'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  Wifi,
  Wind,
  Car,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { IMAGES } from '@/config/image';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import BotanicalWatermark from '@/components/ui/BotanicalWatermark';
import IconMedallion from '@/components/ui/IconMedallion';

const AMENITIES = [
  {
    id: 'wifi',
    title: 'High-Speed Free Wi-Fi',
    desc: 'Seamless fast internet in every room and common area for work & streaming.',
    image: '/images/services/wifi_desk.jpg',
    icon: Wifi,
  },
  {
    id: 'peaceful',
    title: 'Peaceful & Silent Ambience',
    desc: 'Tranquil boutique environment surrounded by serene hills for a restful, undisturbed stay.',
    image: IMAGES.peacefulAmbience || '/images/property/peaceful_ambience.jpg',
    icon: Wind,
  },
  {
    id: 'parking',
    title: 'Free On-Site Parking',
    desc: 'Dedicated and safe on-property vehicular parking space for staying guests.',
    image: '/images/services/parking.jpg',
    icon: Car,
  },
  {
    id: 'security',
    title: '24/7 Security & CCTV',
    desc: 'Round-the-clock staff presence, gated safety, and electronic surveillance.',
    image: '/images/services/reception.jpg',
    icon: ShieldCheck,
  },
  {
    id: 'power',
    title: '100% Power Backup',
    desc: 'Uninterrupted power supply for lighting, elevators, and charging devices.',
    image: '/images/services/ac.jpg',
    icon: Zap,
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    desc: 'Crisp fresh linens, towel replacements, and spotless room sanitization.',
    image: '/images/services/housekeeping.jpg',
    icon: Sparkles,
  },
];

const COMFORT_CHECKLIST = [
  'In-House Cloud Kitchen (Room Delivered)',
  'Elevator / Lift to All Floors',
  '100% Full Power Generator Backup',
  'Free 24-Hour On-Site Vehicular Parking',
  'Attached Bathroom with 24/7 Hot Water',
  '24/7 Attentive Front Desk Reception',
];

export default function AmenitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full select-none" id="amenities-carousel">
      {/* ============================================================ */}
      {/* SECTION 6.5: COMFORT BAND (Navy Deep Background)             */}
      {/* ============================================================ */}
      <div className="w-full bg-[var(--navy-deep)] text-[var(--on-navy)] border-y border-[var(--gold)]/30 py-12 sm:py-16 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: 60% Width, Title + Rule + 2-Column Checklist */}
          <div className="w-full lg:w-[60%] flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--gold-bright)]">
                Standard Inclusions
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-tight leading-tight">
              Executive Stay Standards at Hotel Sky Executive
            </h3>

            {/* Gold Rule + Center Dot */}
            <GoldRuleDot width="full" variant="gold-bright" dotPosition="left-40" className="my-4" />

            {/* 2-Column Checklist (Section 6.5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mt-2">
              {COMFORT_CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--gold-bright)] text-[var(--navy-deep)] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-body text-sm sm:text-[15px] font-semibold text-[var(--on-navy)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Vertical Divider (1px x 140px on desktop) */}
          <div className="hidden lg:block w-[1px] h-36 bg-[var(--line-gold-navy)] shrink-0" />

          {/* Right Column: 35% Width, Script Quote Block + Botanical Watermark */}
          <div className="w-full lg:w-[35%] relative flex flex-col justify-center text-center lg:text-left py-4">
            <span className="font-script text-xl sm:text-2xl text-[var(--on-navy)] leading-relaxed">
              &ldquo;Thoughtful hospitality where every detail
            </span>
            <span className="font-script text-2xl sm:text-3xl text-[var(--gold-bright)] font-normal mt-1">
              feels crafted for your peace of mind.&rdquo;
            </span>

            {/* Subtle Curved Gold Underline */}
            <div className="w-36 h-[1.5px] bg-[var(--gold-bright)] opacity-60 mt-2 mx-auto lg:mx-0" />

            <span className="font-display text-[10px] sm:text-xs uppercase tracking-widest text-[var(--gold-bright)] mt-4">
              Hotel Sky Executive • Lonikand, Pune
            </span>

            {/* Botanical Watermark SVG in background (Section 5.8) */}
            <div className="absolute right-0 bottom-[-30px] opacity-15 pointer-events-none">
              <BotanicalWatermark />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* AMENITIES CAROUSEL GRID (Cream-Deep Background)              */}
      {/* ============================================================ */}
      <div className="w-full bg-[var(--cream-deep)] py-14 sm:py-20 border-b border-[var(--line-gold)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                Boutique Comforts
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)] mt-1">
                Everything You Need for a Seamless Stay
              </h2>
            </div>

            {/* Carousel Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-[var(--gold)] bg-[var(--cream)] text-[var(--navy-ink)] hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-[var(--gold)] bg-[var(--cream)] text-[var(--navy-ink)] hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Carousel (Sharp corners for photos, 6px radius cards) */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {AMENITIES.map((amenity) => {
              const Icon = amenity.icon;

              return (
                <div
                  key={amenity.id}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-[var(--cream)] rounded-[6px] border border-[var(--gold)] shadow-[0_10px_28px_rgba(11,31,63,0.12)] overflow-hidden flex flex-col group hover:shadow-[0_14px_34px_rgba(11,31,63,0.16)] transition-all duration-300"
                >
                  {/* Photo Top with Sharp Corners (0 radius) */}
                  <div className="relative h-44 w-full bg-[var(--navy-deep)] overflow-hidden border-b border-[var(--line-gold)]">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      sizes="320px"
                      className="object-cover object-center transition-transform duration-400 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <IconMedallion icon={Icon} size="sm" variant="gold" />
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-extrabold text-base text-[var(--navy-ink)] uppercase tracking-wide group-hover:text-[var(--gold)] transition-colors">
                        {amenity.title}
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[var(--ink)] mt-2 leading-relaxed">
                        {amenity.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--line-gold)] flex items-center justify-between text-[11px] font-bold text-[var(--brown-gold)] uppercase tracking-wider">
                      <span>Executive In-Room Amenity</span>
                      <span className="text-[var(--gold)] font-extrabold">✓ Verified</span>
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
