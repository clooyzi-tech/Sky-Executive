'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/config/image';

const MOMENTS = [
  {
    id: 1,
    title: 'Serene Exterior & Hills',
    subtitle: 'Upper Kharadi, Pune',
    src: IMAGES.hero,
    span: 'col-span-1 md:col-span-2 row-span-2',
    aspect: 'h-72 md:h-full min-h-[300px]',
  },
  {
    id: 2,
    title: 'Cloud Kitchen Dining',
    subtitle: 'Fresh In-Room Service',
    src: '/images/property/cloud_kitchen.jpg',
    span: 'col-span-1',
    aspect: 'h-64 sm:h-72',
  },
  {
    id: 3,
    title: 'Tranquil Nature Views',
    subtitle: 'Facing lush greenery',
    src: IMAGES.natureView,
    span: 'col-span-1',
    aspect: 'h-64 sm:h-72',
  },
  {
    id: 4,
    title: 'Comfortable Double Bed',
    subtitle: 'Queen Bed 180cm',
    src: '/images/rooms/premium_room.jpg',
    span: 'col-span-1 md:col-span-2',
    aspect: 'h-64 sm:h-72',
  },
];

export default function MomentsGallery() {
  return (
    <section className="py-20 sm:py-28 bg-[#121316] text-white relative overflow-hidden" id="moments-gallery">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DFB756]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B38E46]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#23252B] border border-[#DFB756]/30 text-[#DFB756] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Moments from Liv.inn
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/70 max-w-xl">
              Immerse yourself in our tranquil spaces, thoughtful room details, and peaceful Pune surroundings.
            </p>
          </div>

          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              <span>Explore Gallery & Spaces</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {MOMENTS.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group ${item.span} ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFB756] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
