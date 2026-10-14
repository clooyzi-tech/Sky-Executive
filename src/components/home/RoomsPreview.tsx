'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Trees,
  Wind,
  Tv,
  Bath,
  UtensilsCrossed,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { STRINGS } from '@/config/strings';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

const ROOM_PHOTOS = [
  {
    src: '/images/rooms/sky_executive_room.webp',
    title: 'Signature Executive Room',
    subtitle: 'Queen Bed with warm ambient lighting & executive desk',
  },
  {
    src: '/images/rooms/executive_room.jpg',
    title: 'Executive Room Comfort',
    subtitle: 'Plush bedding, acoustic privacy & restful climate control',
  },
  {
    src: '/images/property/sky_building_exterior.webp',
    title: 'Jaywant Towers Exterior',
    subtitle: 'Hotel Sky Executive on Pune–Nagar Road, Lonikand',
  },
  {
    src: '/images/services/bathroom.jpg',
    title: 'Modern En-Suite Bathroom',
    subtitle: 'Attached bathroom with 24/7 instant hot water supply',
  },
];

const ROOM_FEATURES = [
  {
    icon: Bed,
    title: 'Executive Double Bed (Queen)',
    desc: 'Spacious 200 sq.ft room with plush Queen mattress',
  },
  {
    icon: Trees,
    title: 'Quiet & Private Ambience',
    desc: 'Peaceful floor layout tailored for restful stay',
  },
  {
    icon: Wind,
    title: 'Individual Air Conditioning',
    desc: 'Custom climate control for your comfort',
  },
  {
    icon: Tv,
    title: 'Smart TV & Fast Wi-Fi',
    desc: 'High-speed internet & digital entertainment',
  },
  {
    icon: Bath,
    title: 'Attached Modern Bath',
    desc: '24/7 instant hot water and fresh bath amenities',
  },
  {
    icon: UtensilsCrossed,
    title: 'In-Room Dining Service',
    desc: 'Fresh meals delivered right to your door',
  },
];

export default function RoomsPreview({
  id = 'rooms-preview',
  isAllRoomsPage = false,
}: {
  id?: string;
  isAllRoomsPage?: boolean;
}) {
  const [activePhoto, setActivePhoto] = useState(0);

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % ROOM_PHOTOS.length);
  };

  const prevPhoto = () => {
    setActivePhoto((prev) => (prev - 1 + ROOM_PHOTOS.length) % ROOM_PHOTOS.length);
  };

  const handleBookNow = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-booking-enquiry', {
          detail: {
            roomPreference: 'Executive Room',
          },
        })
      );
    }
  };

  const current = ROOM_PHOTOS[activePhoto];

  return (
    <section className="py-16 sm:py-24 bg-[var(--cream)] relative overflow-hidden select-none" id={id}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Details & Features */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-xs font-display font-bold tracking-wider uppercase mb-3 w-fit">
              <CrownMark size="sm" variant="gold" />
              <span>Signature Accommodation</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--navy-ink)] leading-tight">
              {isAllRoomsPage ? 'Signature Executive Double Bed Room (200 Sq. Ft.)' : 'A Stay Designed for Your Comfort'}
            </h2>

            <p className="font-body mt-3 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
              {STRINGS.brand.name} offers <strong className="text-[var(--navy-ink)]">Executive & Double Bed Rooms</strong> thoughtfully appointed for quiet privacy, seamless business productivity, and restful comfort at Jaywant Towers, Lonikand.{' '}
              {!isAllRoomsPage && (
                <>
                  You can{' '}
                  <Link href="/rooms" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                    explore our Executive Double Bed Rooms
                  </Link>{' '}
                  with verified nature views and amenities.
                </>
              )}
            </p>

            {/* 6 Feature Cards (6px radius, 1px gold border per Section 4.3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
              {ROOM_FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-[6px] bg-[var(--cream-deep)] border border-[var(--gold)]/70 shadow-xs hover:border-[var(--gold)] transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--cream)] shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs uppercase text-[var(--navy-ink)] leading-snug">
                        {f.title}
                      </h4>
                      <p className="font-body text-[11px] text-[var(--ink)] leading-normal mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleBookNow}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider px-8 py-3.5 shadow-md active:scale-95 transition-all cursor-pointer"
                id="rooms-preview-enquire-btn"
              >
                <span>ENQUIRE ROOM NOW</span>
              </button>

              <Link
                href="/rooms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--navy-ink)] hover:bg-[var(--navy-ink)] text-[var(--navy-ink)] hover:text-[var(--cream)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all text-center"
              >
                <span>VIEW ROOM SPECIFICATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Master Room Photo Showcase (Sharp photo corners per Section 4.3) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[6px] border border-[var(--gold)] bg-[var(--navy-deep)] p-2 shadow-[0_10px_28px_rgba(11,31,63,0.12)]">
              {/* Main Photo with 0 radius (Sharp Corners) */}
              <div className="relative h-[280px] sm:h-[360px] md:h-[400px] w-full overflow-hidden bg-[var(--navy-deep)]">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500"
                />

                {/* Photo Badge */}
                <div className="absolute top-3 left-3 bg-[var(--navy-deep)]/90 border border-[var(--gold-bright)]/40 px-3 py-1 font-display font-bold text-[10px] uppercase tracking-wider text-[var(--gold-bright)]">
                  Executive Suite Lonikand
                </div>

                {/* Arrows */}
                <button
                  onClick={prevPhoto}
                  aria-label="Previous room photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--navy-deep)]/80 border border-[var(--gold-bright)]/40 text-[var(--cream)] flex items-center justify-center hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next room photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--navy-deep)]/80 border border-[var(--gold-bright)]/40 text-[var(--cream)] flex items-center justify-center hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/70 to-transparent p-4 flex flex-col">
                  <span className="font-display font-extrabold text-sm sm:text-base uppercase text-white tracking-wide">
                    {current.title}
                  </span>
                  <span className="font-body text-xs text-[var(--on-navy)]/80">
                    {current.subtitle}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-2 mt-2">
                {ROOM_PHOTOS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`relative h-16 sm:h-20 w-full overflow-hidden transition-all cursor-pointer ${
                      activePhoto === idx
                        ? 'border-2 border-[var(--gold-bright)] scale-98 shadow-sm'
                        : 'border border-[var(--line-gold)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="100px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
