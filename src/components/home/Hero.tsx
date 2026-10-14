'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  Users,
  Bed,
  ArrowRight,
} from 'lucide-react';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import SealBadge from '@/components/ui/SealBadge';

interface HeroSlide {
  src: string;
  alt: string;
  word: string;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/images/rooms/sky_executive_room.webp',
    alt: 'Hotel Sky Executive contemporary room offering executive comfort in Lonikand, Pune',
    word: 'Executive Comfort',
    label: 'Room View',
  },
  {
    src: IMAGES.services?.reception || '/images/services/reception.jpg',
    alt: '24/7 Front Desk Reception and Executive Hospitality at Hotel Sky Executive',
    word: 'Refined Elegance',
    label: 'Reception & Lobby',
  },
  {
    src: IMAGES.building || '/images/property/sky_building_exterior.webp',
    alt: 'Hotel Sky Executive at Jaywant Towers, Pune–Nagar Road, Lonikand',
    word: 'Highway Prestige',
    label: 'Hotel Exterior',
  },
  {
    src: '/images/property/peaceful_ambience.jpg',
    alt: 'Relaxing and peaceful stay experience at Hotel Sky Executive',
    word: 'Calm Serenity',
    label: 'Peaceful Stay',
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  const handleOpenBooking = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-booking-enquiry', {
          detail: { category: 'Executive Double Bed Room' },
        })
      );
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--cream)] select-none"
      id="hero"
    >
      {/* ============================================================ */}
      {/* HERO TOP HALF: CREAM BRAND PANEL (LEFT) + CIRCULAR ARC (RIGHT) */}
      {/* ============================================================ */}
      <div className="relative w-full min-h-[580px] lg:min-h-[640px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-14 pb-12 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Cream Brand Panel (Section 6.2) */}
        <div className="w-full lg:w-[540px] xl:w-[580px] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          {/* Official Emblem Logo */}
          <div className="mb-4 sm:mb-6">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-[var(--gold)] shadow-[0_8px_24px_rgba(212,162,76,0.28)] bg-[#0B1F3F]">
              <Image
                src="/SE_Logo.jpeg"
                alt="Hotel Sky Executive official emblem"
                fill
                sizes="(max-width: 640px) 80px, 96px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Prefix Line */}
          <div className="font-display font-bold text-xs sm:text-sm md:text-base tracking-[0.30em] uppercase text-[var(--navy-ink)] mb-1 sm:mb-2">
            HOTEL
          </div>

          {/* Brand Word XL (Foil Gold, 800 weight) */}
          <div className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] gold-foil-text uppercase mb-2">
            SKY EXECUTIVE
          </div>

          {/* Suffix Line */}
          <div className="font-display font-bold text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-[var(--navy-ink)]">
            LONIKAND, PUNE–NAGAR ROAD
          </div>

          {/* Gold Rule + Center Dot (340px) */}
          <GoldRuleDot width="hero" variant="gold" dotPosition="center" className="my-5 sm:my-6" />

          {/* Tagline (3 lines, 800 weight, uppercase) */}
          <p className="font-display font-bold text-sm sm:text-base md:text-lg text-[var(--navy-ink)] uppercase leading-relaxed max-w-[420px]">
            EXECUTIVE BOUTIQUE HOSPITALITY AT JAYWANT TOWERS • 24/7 GUEST CARE & IN-HOUSE CLOUD KITCHEN
          </p>

          {/* Script accent phrase */}
          <p className="font-script text-[var(--brown-gold)] text-lg sm:text-xl mt-2">
            Crafted for undisturbed comfort & transit convenience
          </p>
        </div>

        {/* Right Circular Photo Arc (Section 6.2 & Section 5.3) */}
        <div className="relative w-full lg:w-[55%] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] mt-8 lg:mt-0 flex items-center justify-center">
          {/* Circular Mask Wrapper with 4px Gold Ring */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full p-[4px] bg-[var(--gold)] shadow-[0_18px_40px_rgba(11,31,63,0.22)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--navy-deep)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    fill
                    sizes="(max-width: 768px) 300px, 520px"
                    priority
                    className="object-cover object-center"
                  />
                  {/* Subtle warm luxury tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Slide Controls Overlay */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--navy-deep)]/70 border border-[var(--gold)]/60 text-[var(--cream)] backdrop-blur-xs hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-all cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--navy-deep)]/70 border border-[var(--gold)]/60 text-[var(--cream)] backdrop-blur-xs hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Signature Seal Badge overlapping the photo edge (Section 5.4) */}
          <div className="absolute -bottom-4 right-2 sm:right-6 lg:-bottom-6 lg:-right-4 z-30">
            <SealBadge
              line1="Verified Executive"
              line2="Boutique Comfort"
              line3="Lonikand, Pune"
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LOWER ZONE: NAVY-DEEP INTRO BAND WITH H1 & DUAL CONVERSION CTAs */}
      {/* ============================================================ */}
      <div className="relative w-full bg-[var(--navy-deep)] text-[var(--on-navy)] border-t border-[var(--gold)]/30 pt-12 pb-20 sm:pb-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Two-Tone H1 & Intro Copy */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-3.5 py-1 text-[11px] font-display font-semibold uppercase tracking-widest text-[var(--gold-bright)] mb-4">
              <span>Verified Hotel on Pune–Nagar Highway</span>
            </div>

            {/* Structured H1 (Two-Tone Heading: White Line 1 + Gold Line 2) */}
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
              <span>Executive Boutique Hotel in </span>
              <span className="block text-[var(--gold-bright)] mt-1 sm:mt-2">
                Lonikand, Pune–Nagar Road
              </span>
            </h1>

            {/* Gold Rule + Center Dot */}
            <GoldRuleDot width="intro" variant="gold-bright" dotPosition="center" className="lg:mx-0 my-5" />

            {/* Intro Paragraph */}
            <p className="font-body text-sm sm:text-base md:text-lg text-[var(--on-navy)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-[var(--gold-bright)] font-semibold">{STRINGS.brand.name}</strong>{' '}
              {STRINGS.brand.description}
            </p>
          </div>

          {/* Right Column: Dual Direct Conversion CTAs */}
          <div className="w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-4 shrink-0">
            {/* Primary Gold Pill CTA */}
            <button
              onClick={handleOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-sm sm:text-base tracking-wider uppercase h-14 px-8 shadow-lg hover:shadow-[0_6px_20px_rgba(212,162,76,0.4)] active:scale-95 transition-all duration-200 cursor-pointer"
              id="hero-check-availability"
            >
              <span>CHECK ROOM AVAILABILITY</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Secondary Gold Outline CTA */}
            <a
              href={phoneUrl()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[var(--gold-bright)] text-[var(--gold-bright)] hover:bg-[var(--gold-bright)] hover:text-[var(--navy-deep)] font-display font-bold text-sm sm:text-base tracking-wider uppercase h-14 px-8 transition-all duration-200"
              id="hero-call-front-desk"
            >
              <Phone className="h-4 w-4" />
              <span>CALL FRONT DESK</span>
            </a>

            {/* Direct hotline confirmation */}
            <span className="text-[11px] font-sans text-[var(--on-navy)]/70 uppercase tracking-wider text-center lg:text-right">
              Direct Desk: {STRINGS.contact.phone} • 24/7 Available
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FAST IN-PAGE BOOKING BAR (Section 7: 14px Radius White Card) */}
        {/* ============================================================ */}
        <div className="w-full max-w-5xl mx-auto px-4 mt-12 sm:mt-16">
          <div className="bg-white rounded-[14px] p-4 sm:p-6 shadow-[0_18px_40px_rgba(11,31,63,0.22)] border border-[var(--line-gold)] flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Field 1: Accommodation Type */}
            <div className="w-full md:w-1/3 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[var(--line-gold)] pb-3 md:pb-0 md:pr-4">
              <div className="w-10 h-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Bed className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-[11px] uppercase tracking-wider text-[var(--brown-gold)]">
                  Room Category
                </span>
                <span className="font-display font-bold text-sm text-[var(--navy-ink)]">
                  Executive Double Bed (200 sq.ft)
                </span>
              </div>
            </div>

            {/* Field 2: Occupancy & Beds */}
            <div className="w-full md:w-1/3 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[var(--line-gold)] pb-3 md:pb-0 md:pr-4">
              <div className="w-10 h-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-[11px] uppercase tracking-wider text-[var(--brown-gold)]">
                  Guest Capacity
                </span>
                <span className="font-display font-bold text-sm text-[var(--navy-ink)]">
                  2 Adults + 1 Extra Bed (Queen)
                </span>
              </div>
            </div>

            {/* Field 3: Fast Action Button */}
            <div className="w-full md:w-1/3 flex items-center justify-end">
              <button
                onClick={handleOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-sm uppercase tracking-wider h-13 px-6 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>RESERVE / ENQUIRE</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}