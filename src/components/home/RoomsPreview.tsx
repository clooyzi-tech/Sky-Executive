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
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { STRINGS } from '@/config/strings';

const ROOM_PHOTOS = [
  {
    src: '/images/rooms/double_bed_room.webp',
    title: 'Signature Executive Room',
    subtitle: 'Queen Bed with warm ambient lighting & executive desk',
  },
  {
    src: '/images/property/interior_design.webp',
    title: 'Designer Interior & Lighting',
    subtitle: 'Warm contemporary ceiling lighting and elegant ambiance',
  },
  {
    src: '/images/property/building_exterior.webp',
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
    desc: 'Spacious room layout with plush mattress',
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
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden" id={id}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Details & Features */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory border border-border text-accent text-xs font-semibold tracking-wider uppercase mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Accommodation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              A Stay Designed for Your Comfort
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-medium leading-relaxed">
              {STRINGS.brand.name} offers <strong>Executive & Double Bed Rooms</strong> thoughtfully appointed for quiet privacy, seamless business productivity, and restful comfort at Jaywant Towers, Lonikand.
            </p>

            {/* 6 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {ROOM_FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-border shadow-xs hover:border-accent transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cream text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-snug">
                        {f.title}
                      </h4>
                      <p className="text-[10.5px] text-slate-medium leading-normal mt-0.5">
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
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Enquire Now
              </button>

              <Link
                href="/rooms"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-border bg-white hover:bg-cream text-foreground text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group text-center"
              >
                <span>View Full Room Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-accent" />
              </Link>
            </div>
          </div>

          {/* Right Column: Master Room Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-white p-2">
              <div className="relative h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Arrows */}
                <button
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-accent transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-accent transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent">
                    {STRINGS.brand.name} • Pune
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold">{current.title}</h4>
                  <p className="text-xs text-white/80">{current.subtitle}</p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-2 px-1 pb-1">
                {ROOM_PHOTOS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activePhoto ? 'border-accent scale-102 shadow-xs' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="100px"
                      className="object-cover"
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
