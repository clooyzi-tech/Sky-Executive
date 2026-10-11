'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';

const MOMENTS = [
  {
    id: 1,
    title: 'Hotel Building & Exterior',
    subtitle: 'Jaywant Towers, Pune–Nagar Road, Lonikand',
    src: IMAGES.building || '/images/property/building_exterior.webp',
    span: 'col-span-1 md:col-span-2 row-span-2',
    aspect: 'h-72 md:h-full min-h-[300px]',
  },
  {
    id: 2,
    title: 'Designer Interior & Ambiance',
    subtitle: 'Warm Lighting & Contemporary Spaces',
    src: IMAGES.interior || '/images/property/interior_design.webp',
    span: 'col-span-1',
    aspect: 'h-64 sm:h-72',
  },
  {
    id: 3,
    title: 'Executive Comfort & City Skyline',
    subtitle: 'Facing Highway & City Horizons',
    src: '/images/property/peaceful_ambience.jpg',
    span: 'col-span-1',
    aspect: 'h-64 sm:h-72',
  },
  {
    id: 4,
    title: 'Signature Executive Rooms',
    subtitle: 'Plush Queen Bed & Quiet Privacy',
    src: IMAGES.rooms['premium-room'] || '/images/rooms/double_bed_room.webp',
    span: 'col-span-1 md:col-span-2',
    aspect: 'h-64 sm:h-72',
  },
];

export default function MomentsGallery() {
  return (
    <section className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden" id="moments-gallery">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-surface border border-accent/30 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Moments from {STRINGS.brand.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/75 max-w-xl">
              Immerse yourself in our contemporary spaces, thoughtful room details, and hospitable Pune surroundings.
            </p>
          </div>

          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95"
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
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${item.span} ${item.aspect} shadow-lg`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors">
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
