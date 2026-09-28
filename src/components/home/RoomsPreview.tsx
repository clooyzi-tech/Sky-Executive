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
  CheckCircle2,
} from 'lucide-react';

const ROOM_PHOTOS = [
  {
    src: '/images/rooms/double_bed_room.webp',
    title: 'Signature Double Bed Room',
    subtitle: 'Queen Bed with warm ambient cove ceiling lighting',
  },
  {
    src: '/images/property/interior_design.webp',
    title: 'Designer Interior & Lighting',
    subtitle: 'Warm geometric ceiling cove lighting and chandelier',
  },
  {
    src: '/images/property/building_exterior.webp',
    title: 'Hotel Building Exterior',
    subtitle: 'Boutique property amidst serene green surroundings in Pune',
  },
  {
    src: '/images/services/bathroom.jpg',
    title: 'En-Suite Bathroom',
    subtitle: 'Attached bathroom with 24/7 hot water supply',
  },
];

const ROOM_FEATURES = [
  {
    icon: Bed,
    title: 'Double Bed (Queen Size)',
    desc: '200 sq. ft. room with plush queen mattress',
  },
  {
    icon: Trees,
    title: 'Nature-Oriented Views',
    desc: 'Quiet greenery perspective in every room',
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
    desc: '24/7 instant hot water and fresh towels',
  },
  {
    icon: UtensilsCrossed,
    title: 'In-Room Cloud Kitchen',
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
            roomPreference: 'Double Bed Room',
          },
        })
      );
    }
  };

  const current = ROOM_PHOTOS[activePhoto];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden" id={id}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Details & Features */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E1] border border-[#E8DFC8] text-[#A67C37] text-xs font-semibold tracking-wider uppercase mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Accommodation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A241C] tracking-tight leading-tight">
              A Stay Designed for Your Comfort
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#6E6454] leading-relaxed">
              liv.inn offers <strong>Double Bed Rooms</strong> thoughtfully arranged for quiet privacy. Each room is an intimate sanctuary with calming nature views, plush bedding, and modern hospitality.
            </p>

            {/* 6 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {ROOM_FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs hover:border-[#B38E46] transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EC] text-[#A67C37]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#2A241C] leading-snug">
                        {f.title}
                      </h4>
                      <p className="text-[10.5px] text-[#7E7465] leading-normal mt-0.5">
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
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Enquire Now
              </button>

              <Link
                href="/rooms"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#DCD3C3] bg-white hover:bg-[#FAF5EC] text-[#2A241C] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group text-center"
              >
                <span>View Full Room Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#A67C37]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Master Room Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFC8] bg-white p-2">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-[#B38E46] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-[#B38E46] transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFB756]">
                    liv.inn Pune
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
                      idx === activePhoto ? 'border-[#B38E46] scale-102 shadow-xs' : 'border-transparent opacity-60 hover:opacity-100'
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
