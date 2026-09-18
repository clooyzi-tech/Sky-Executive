'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Wifi,
  Wind,
  Tv,
  Bath,
  Coffee,
  Laptop,
  Maximize2,
  Armchair,
  Users,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  Trees,
  Phone,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { whatsappUrl, phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionDivider from '@/components/ui/SectionDivider';

interface RoomsShowcaseProps {
  id?: string;
  isAllRoomsPage?: boolean;
}

const ROOM_GALLERY_PHOTOS = [
  {
    src: '/images/rooms/premium_room.jpg',
    label: 'Plush Double Bed',
    alt: 'liv.inn Double Bed Room Interior with plush bedding and warm lighting',
  },
  {
    src: '/images/services/bathroom.jpg',
    label: 'Attached Bath (Hot Water)',
    alt: 'Modern en-suite bathroom with 24/7 hot water supply',
  },
  {
    src: '/images/services/wifi_desk.jpg',
    label: 'Work Desk & Wi-Fi',
    alt: 'Dedicated work desk with high-speed Wi-Fi in the Double Bed Room',
  },
  {
    src: '/images/property/nature_view.jpg',
    label: 'Nature Window View',
    alt: 'Scenic verdant green hills view from the Double Bed Room',
  },
];

export default function RoomsPreview({
  id = 'rooms-preview',
  isAllRoomsPage = false,
}: RoomsShowcaseProps) {
  const { roomsPreview } = STRINGS.home;
  const masterRoom = roomsPreview.rooms[0];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % ROOM_GALLERY_PHOTOS.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + ROOM_GALLERY_PHOTOS.length) % ROOM_GALLERY_PHOTOS.length);
  };

  const amenityIconResolver = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="h-4 w-4 text-[#C9A227]" />;
      case 'Wifi':
        return <Wifi className="h-4 w-4 text-[#C9A227]" />;
      case 'Wind':
        return <Wind className="h-4 w-4 text-[#C9A227]" />;
      case 'Tv':
        return <Tv className="h-4 w-4 text-[#C9A227]" />;
      case 'Bath':
        return <Bath className="h-4 w-4 text-[#C9A227]" />;
      case 'Coffee':
        return <Coffee className="h-4 w-4 text-[#C9A227]" />;
      case 'Laptop':
        return <Laptop className="h-4 w-4 text-[#C9A227]" />;
      case 'Maximize2':
        return <Maximize2 className="h-4 w-4 text-[#C9A227]" />;
      case 'Armchair':
        return <Armchair className="h-4 w-4 text-[#C9A227]" />;
      case 'Sparkles':
        return <Sparkles className="h-4 w-4 text-[#C9A227]" />;
      default:
        return <Bed className="h-4 w-4 text-[#C9A227]" />;
    }
  };

  const enquiryHref = whatsappUrl(
    STRINGS.contact.prefilledMessages.roomEnquiry('Double Bed Room')
  );

  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 pb-0" id={id}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER                                            */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#F0EBE1]">
          {/* Left Title & Subtitle */}
          <AnimatedSection>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                {roomsPreview.eyebrow}
              </span>

              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
                {roomsPreview.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5F5A50] sm:text-base">
                {roomsPreview.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Right Luxury Brand Stamp with Underline */}
          <AnimatedSection delay={0.15}>
            <div className="hidden md:flex flex-col items-end select-none">
              <div className="text-right font-serif text-xs font-semibold tracking-[0.25em] text-[#B88A2A] uppercase leading-tight">
                <div>A STAY</div>
                <div>BEYOND</div>
                <div>ORDINARY</div>
              </div>
              <div className="mt-2 h-px w-28 bg-[#C9A227]" />
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================================ */}
        {/* 2. SIGNATURE MASTER ROOM SHOWCASE CARD (1 Unified Room Type) */}
        {/* ============================================================ */}
        <div className="mt-8">
          <AnimatedSection delay={0.1}>
            <div
              id="double-room"
              className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-white shadow-sm transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* -------------------------------------------------------- */}
                {/* Left Column: Interactive Multi-Photo Room Gallery        */}
                {/* -------------------------------------------------------- */}
                <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] w-full overflow-hidden bg-charcoal lg:col-span-6 flex flex-col justify-between">
                  {/* Current Active Photo */}
                  <div className="absolute inset-0">
                    <Image
                      src={ROOM_GALLERY_PHOTOS[activePhotoIdx].src}
                      alt={ROOM_GALLERY_PHOTOS[activePhotoIdx].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out"
                    />
                    {/* Top Scrim with Inventory Badge */}
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent p-4 sm:p-6 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-gold backdrop-blur-md border border-white/15">
                        <Building2 className="h-3.5 w-3.5 text-accent" />
                        <span>All 25 Rooms • Uniform Double Bed</span>
                      </span>
                      <span className="text-xs font-mono font-medium text-white/80">
                        0{activePhotoIdx + 1} / 0{ROOM_GALLERY_PHOTOS.length}
                      </span>
                    </div>

                    {/* Left/Right Photo Carousel Arrows */}
                    <button
                      type="button"
                      onClick={prevPhoto}
                      aria-label="Previous room photo"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/30 bg-black/50 text-white flex items-center justify-center backdrop-blur-md transition-all hover:bg-black/80 hover:border-accent"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      aria-label="Next room photo"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-white/30 bg-black/50 text-white flex items-center justify-center backdrop-blur-md transition-all hover:bg-black/80 hover:border-accent"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Bottom gradient overlay with clean tag badge & subtle dots */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 sm:p-6 flex items-center justify-between z-10">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/95">
                        {masterRoom.tagBadge}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {ROOM_GALLERY_PHOTOS.map((_, pIdx) => (
                          <button
                            key={pIdx}
                            type="button"
                            onClick={() => setActivePhotoIdx(pIdx)}
                            aria-label={`View photo ${pIdx + 1}`}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              pIdx === activePhotoIdx
                                ? 'w-6 bg-accent'
                                : 'w-1.5 bg-white/40 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* Right Column: Complete Features & Service Details         */}
                {/* -------------------------------------------------------- */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-white lg:col-span-6">
                  <div>
                    {/* Eyebrow & Category */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C9A227]/40 leading-none">
                        01
                      </span>
                      <span className="h-px w-6 bg-[#C9A227]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                        {masterRoom.category}
                      </span>
                    </div>

                    {/* Room Name */}
                    <h3 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1C]">
                      {masterRoom.name}
                    </h3>

                    {/* Snapshot Feature Chips */}
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] sm:text-xs font-medium text-[#5F5A50]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-1">
                        <Bed className="h-3.5 w-3.5 text-accent" />
                        Double Bed (Queen Size 180cm)
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-1">
                        <Maximize2 className="h-3.5 w-3.5 text-accent" />
                        200 Sq. Ft.
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-1">
                        <Building2 className="h-3.5 w-3.5 text-accent" />
                        5 Rooms Per Floor (Privacy)
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-1">
                        <Trees className="h-3.5 w-3.5 text-accent" />
                        Scenic Nature View
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5F5A50] sm:text-base font-normal">
                      {masterRoom.description}
                    </p>

                    {/* All Features & Services Consolidated Inside */}
                    <div className="mt-6 pt-5 border-t border-[#F3EFE6]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-3">
                        Included In-Room Amenities & Services
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {masterRoom.amenities.map((amenity) => (
                          <div
                            key={amenity.label}
                            className="flex items-center gap-2 text-xs text-[#1C1C1C] rounded-lg bg-[#FAF8F5] border border-[#EFE9DE] p-2 transition-colors hover:border-accent/40"
                          >
                            {amenityIconResolver(amenity.icon)}
                            <span className="font-medium text-[#1C1C1C] truncate">
                              {amenity.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Direct CTAs + Occupancy */}
                  <div className="mt-8 pt-6 border-t border-[#F3EFE6] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Link
                        href={enquiryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B88A2A] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1C1C1C] shadow-sm transition-all duration-300 hover:brightness-105 hover:shadow-md active:scale-95 whitespace-nowrap"
                        id="room-enquire-whatsapp"
                      >
                        <span>ENQUIRE VIA WHATSAPP</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#1C1C1C]" />
                      </Link>

                      <a
                        href={phoneUrl(STRINGS.contact.phone)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DED8CC] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1C1C1C] hover:bg-[#FAF8F3] hover:border-accent transition-all"
                        id="room-call-frontdesk"
                      >
                        <Phone className="h-3.5 w-3.5 text-accent" />
                        <span>CALL FRONT DESK</span>
                      </a>
                    </div>

                    {/* Occupancy Indicator */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#5F5A50] bg-[#FAF8F5] px-3 py-2 rounded-full border border-[#EFE9DE] self-start sm:self-auto">
                      <Users className="h-4 w-4 text-[#C9A227]" />
                      <span>{masterRoom.occupancyText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================================ */}
        {/* 3. ASSISTANCE & GROUP BOOKING BANNER                         */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.25}>
          <div className="mt-10 rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-[#F5EFEB] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1C]">
                {roomsPreview.consultationBanner.title}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5F5A50]">
                {roomsPreview.consultationBanner.subtitle}
              </p>
            </div>

            <Link
              href={roomsPreview.consultationBanner.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A227] bg-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B88A2A] shadow-xs transition-all duration-300 hover:border-[#B88A2A] hover:bg-[#FAF8F3] hover:text-[#C9A227] hover:shadow-md whitespace-nowrap"
              id="room-consultation-btn"
            >
              <span>{roomsPreview.consultationBanner.btnText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Luxury Section Divider */}
      <SectionDivider />
    </section>
  );
}
