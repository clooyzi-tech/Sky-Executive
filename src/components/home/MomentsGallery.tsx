'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

const PHOTO_TILES = [
  {
    id: 1,
    title: 'Signature Executive Room',
    subtitle: 'Queen Bed • Ambient Lighting',
    src: IMAGES.rooms?.['premium-room'] || '/images/rooms/sky_executive_room.webp',
  },
  {
    id: 2,
    title: 'Front Desk & Reception',
    subtitle: '24/7 Guest Care & Check-In',
    src: IMAGES.services?.reception || '/images/services/reception.jpg',
  },
  {
    id: 3,
    title: 'Jaywant Towers Exterior',
    subtitle: 'Pune–Nagar Road, Lonikand',
    src: IMAGES.building || '/images/property/sky_building_exterior.webp',
  },
  {
    id: 4,
    title: 'En-Suite Bathroom & Hygiene',
    subtitle: '24/7 Hot Water Facility',
    src: '/images/services/bathroom.jpg',
  },
];

export default function MomentsGallery() {
  return (
    <section
      className="w-full bg-[var(--cream)] py-14 sm:py-20 select-none overflow-hidden"
      id="moments-gallery"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CrownMark size="nav" variant="gold" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                Visual Experience • Jaywant Towers
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)]">
              Moments from {STRINGS.brand.name}
            </h2>
            <p className="font-body text-sm sm:text-base text-[var(--ink-muted)] mt-1.5 max-w-xl">
              Authentic property photography: verified executive rooms, modern corridor spaces, and secure premises in Lonikand, Pune.
            </p>
          </div>

          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--navy-ink)] hover:bg-[var(--navy-ink)] text-[var(--navy-ink)] hover:text-[var(--cream)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3 transition-all duration-200"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Section 6.3 Photo Strip Grid: 1.35fr 1fr 1fr 1.1fr, sharp corners, 4px gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr] gap-1 bg-[var(--cream)] p-1 border border-[var(--line-gold)] shadow-md">
          {PHOTO_TILES.map((tile) => (
            <div
              key={tile.id}
              className="group relative h-[260px] sm:h-[300px] lg:h-[320px] w-full overflow-hidden bg-[var(--navy-deep)] cursor-pointer"
            >
              {/* Photo with Sharp Corners (0 radius) */}
              <Image
                src={tile.src}
                alt={tile.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-400 ease-out group-hover:scale-105"
              />

              {/* 3px Gold Inset Frame on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[3px] border-[var(--gold-bright)] transition-all duration-300 pointer-events-none z-10" />

              {/* Slide-Up Navy Caption Bar (44px high) */}
              <div className="absolute bottom-0 left-0 right-0 h-11 bg-[var(--navy-deep)]/95 border-t border-[var(--gold-bright)]/40 px-3 flex items-center justify-between z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-250 ease-out">
                <span className="font-display font-bold text-xs text-white uppercase tracking-wider truncate">
                  {tile.title}
                </span>
                <span className="font-sans text-[10px] text-[var(--gold-bright)] uppercase tracking-widest shrink-0 ml-2">
                  {tile.subtitle}
                </span>
              </div>

              {/* Static subtle label for mobile/touch */}
              <div className="sm:hidden absolute top-2 left-2 bg-[var(--navy-deep)]/80 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-[var(--gold-bright)]/30">
                <span className="font-display font-bold text-[10px] text-[var(--cream)] uppercase tracking-wider">
                  {tile.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
