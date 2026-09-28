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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { IMAGES } from '@/config/image';

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
    image: IMAGES.peacefulAmbience || '/images/property/interior_design.webp',
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
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden" id="amenities-carousel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E1] border border-[#E8DFC8] text-[#A67C37] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Hotel Features</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A241C] tracking-tight">
              Everything You Need
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-[#7E7465] max-w-xl">
              Thoughtfully curated comforts and essential everyday conveniences for a peaceful boutique stay in Pune.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCD3C3] bg-white text-[#2A241C] transition-all hover:bg-[#B38E46] hover:border-[#B38E46] hover:text-white cursor-pointer shadow-xs"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCD3C3] bg-white text-[#2A241C] transition-all hover:bg-[#B38E46] hover:border-[#B38E46] hover:text-white cursor-pointer shadow-xs"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Strip */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {AMENITIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-3xl overflow-hidden bg-white border border-[#E8DFC8] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="320px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#A67C37] shadow-sm backdrop-blur-xs">
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2A241C] mb-1.5 group-hover:text-[#B38E46] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#7E7465] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0E9DC] flex items-center justify-between text-[11px] font-semibold text-[#A67C37]">
                    <span>Included in Stay</span>
                    <span className="text-[#34A853]">✓ Free</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
