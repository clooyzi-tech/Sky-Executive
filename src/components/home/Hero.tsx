'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Trees,
  Sparkles,
  Building2,
  MapPin,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

const HERO_SLIDES = [
  {
    src: IMAGES.hero,
    alt: 'liv.inn Boutique Hotel Pune nestled amidst verdant nature at twilight',
    title: 'Twilight Architecture',
  },
  {
    src: '/hero1.avif',
    alt: 'liv.inn Nature & Serenity stay experience in Pune',
    title: 'Nature & Tranquility',
  },
  {
    src: IMAGES.natureView,
    alt: 'Scenic verdant green hills view from liv.inn Pune',
    title: 'Scenic Nature Views',
  },
  {
    src: IMAGES.rooms['premium-room'] || '/images/rooms/premium_room.jpg',
    alt: 'Premium Boutique Room with nature-facing perspective at liv.inn',
    title: 'Premium Boutique Rooms',
  },
];

export default function Hero() {
  const { hero } = STRINGS.home;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slideshow cycle (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section
      className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden bg-charcoal"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slideshow Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7500ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Lightweight, elegant luxury scrim: bright and luminous while keeping white text sharp */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/50 pointer-events-none z-10" />

        {/* Subtle gold accent dot texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-10"
          style={{
            backgroundImage: IMAGES.patterns.heroDots,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Slideshow Arrow Controls (Desktop) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:bg-black/70 hover:border-accent hover:text-white active:scale-95 shadow-lg"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:bg-black/70 hover:border-accent hover:text-white active:scale-95 shadow-lg"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-3.5 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14 text-center w-full">
        {/* Verified Eyebrow Badge Pill */}
        <AnimatedSection delay={0.05} direction="none">
          <div className="mx-auto mb-[16px] flex justify-center px-1">
            <div className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-accent/40 bg-black/60 px-3 py-1.5 sm:px-4 text-[10px] sm:text-xs font-medium uppercase tracking-normal sm:tracking-widest text-accent-gold backdrop-blur-md shadow-lg transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="text-center">{hero.badge}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Headline with Serif Typography & Gold Shimmer Accent */}
        <AnimatedSection delay={0.15}>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] sm:leading-[1.15] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] break-words">
            A Serene,{' '}
            <span className="gold-gradient-text italic font-normal">
              Nature-Oriented
            </span>{' '}
            Stay in Pune
          </h1>
        </AnimatedSection>

        {/* Brief Introduction */}
        <AnimatedSection delay={0.25}>
          <p className="mx-auto mt-[16px] max-w-2xl text-xs sm:text-base md:text-lg font-light leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] break-words px-2 sm:px-0">
            {hero.description}
          </p>
        </AnimatedSection>

        {/* Glassmorphic Property Snapshot Chips */}
        <AnimatedSection delay={0.35}>
          <div className="mx-auto mt-[16px] flex flex-wrap items-center justify-center gap-2 sm:gap-[16px] text-[11px] sm:text-sm text-white px-1">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-gold shrink-0" />
              <span className="font-medium">25 Premium Rooms</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <span className="font-medium">5 Rooms Per Floor (Privacy)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <Trees className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-gold shrink-0" />
              <span className="font-medium">Scenic Nature Views</span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-gold shrink-0" />
              <span className="font-medium">Upper Kharadi, Wagholi</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Primary Call To Actions */}
        <AnimatedSection delay={0.45}>
          <div className="mt-[16px] flex flex-col items-center gap-3 sm:gap-[16px] sm:flex-row sm:justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <CTAButton
              href="/contact"
              size="lg"
              className="bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-xl hover:shadow-accent/30 w-full sm:w-auto transition-transform hover:-translate-y-0.5 text-sm sm:text-base py-3 sm:py-4"
              id="hero-enquire-cta"
            >
              {hero.ctaEnquire}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </CTAButton>
            <CTAButton
              href="/rooms"
              variant="outline"
              size="lg"
              className="border-white/30 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 hover:border-white/60 hover:text-white w-full sm:w-auto transition-transform hover:-translate-y-0.5 shadow-lg text-sm sm:text-base py-3 sm:py-4"
              id="hero-explore-cta"
            >
              {hero.ctaExplore}
            </CTAButton>
          </div>
        </AnimatedSection>

        {/* Integrated Luxury Quick Reservation Strip */}
        <AnimatedSection delay={0.55}>
          <div className="mx-auto mt-[16px] max-w-4xl rounded-2xl border border-white/20 bg-charcoal/80 sm:bg-charcoal/70 p-3 sm:p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-[16px] items-center text-left">
              {/* Check-In Timing */}
              <div className="rounded-xl bg-white/[0.07] p-2.5 sm:p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-accent-gold font-medium">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Check-In</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">11:00 AM</p>
                <p className="text-[11px] text-white/70">Standard Check-In</p>
              </div>

              {/* Room Inventory */}
              <div className="rounded-xl bg-white/[0.07] p-2.5 sm:p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-accent-gold font-medium">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Rooms</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">25 Premium</p>
                <p className="text-[11px] text-white/70">Nature Facing</p>
              </div>

              {/* Privacy & Floors */}
              <div className="rounded-xl bg-white/[0.07] p-2.5 sm:p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-accent-gold font-medium">
                  <Users className="h-3.5 w-3.5" />
                  <span>Boutique Privacy</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">5 Rooms / Floor</p>
                <p className="text-[11px] text-white/70">Quiet & Peaceful</p>
              </div>

              {/* Action Button */}
              <div>
                <CTAButton
                  href="/contact#enquiry"
                  className="w-full justify-center bg-accent text-charcoal font-semibold hover:bg-accent-light py-3 sm:py-3.5 shadow-md hover:shadow-accent/20 text-xs sm:text-sm"
                  id="hero-quick-check-cta"
                >
                  <span>Check Rates</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </CTAButton>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Slideshow Indicator Dots & Slide Title */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                className="group relative flex items-center gap-2 py-1.5 focus:outline-none"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? 'w-8 sm:w-10 bg-accent shadow-sm shadow-accent/60'
                      : 'w-2.5 bg-white/35 hover:bg-white/60 hover:w-4'
                  }`}
                />
                <span
                  className={`hidden md:inline text-[11px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-accent-gold opacity-100'
                      : 'text-white/40 opacity-0 group-hover:opacity-80'
                  }`}
                >
                  {slide.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean, Architectural Gold Hairline Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent z-10" />
    </section>
  );
}
