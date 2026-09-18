'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Trees,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { whatsappUrl } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface HeroSlide {
  src: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: IMAGES.hero,
    alt: 'liv.inn Boutique Hotel nestled amidst verdant nature in Pune at twilight',
  },
  {
    src: '/hero1.avif',
    alt: 'Serene nature and verdant landscapes at liv.inn Pune',
  },
  {
    src: IMAGES.natureView,
    alt: 'Scenic verdant green hills view from liv.inn Pune',
  },
  {
    src: IMAGES.rooms['executive'] || IMAGES.rooms['premium-room'] || '/images/rooms/premium_room.jpg',
    alt: 'Intimate premium boutique rooms with nature-facing perspective at liv.inn',
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const { hero } = STRINGS.home;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swipe support for mobile
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
      className="relative flex min-h-[92vh] lg:h-[calc(100vh-74px)] items-center justify-center overflow-hidden bg-charcoal select-none"
      id="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="liv.inn Boutique Hotel Pune Hero Slideshow"
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
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Refined Nilaya-Inspired Luxury Scrim: Luminous, rich, transparent depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-black/35 to-black/55 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%] pointer-events-none z-10" />

        {/* Subtle architectural gold dot pattern texture */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none z-10"
          style={{
            backgroundImage: IMAGES.patterns.heroDots,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Floating Location Micro-Badge (Desktop Top-Right) */}
      <div className="hidden lg:flex absolute top-6 right-8 z-20 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md text-xs font-light text-white/90 shadow-lg transition-transform hover:scale-105">
        <MapPin className="h-3.5 w-3.5 text-accent-gold" />
        <span>Upper Kharadi, Pune</span>
        <span className="h-1 w-1 rounded-full bg-accent" />
        <Trees className="h-3.5 w-3.5 text-accent-gold" />
        <span className="text-white/70">Nature-Oriented</span>
      </div>

      {/* Slideshow Arrow Navigation (Desktop Left/Right) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/85 backdrop-blur-md transition-all hover:bg-black/70 hover:border-accent hover:text-accent-gold hover:scale-110 active:scale-95 shadow-xl"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/85 backdrop-blur-md transition-all hover:bg-black/70 hover:border-accent hover:text-accent-gold hover:scale-110 active:scale-95 shadow-xl"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Main Hero Editorial Content (Minimal, Nilaya Stays Inspired) */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center w-full">
        {/* Eyebrow Pill */}
        <AnimatedSection delay={0.05} direction="none">
          <div className="mx-auto mb-4 sm:mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/50 px-4 py-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-accent-gold backdrop-blur-md shadow-lg transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
              <span>Boutique Sanctuary • Pune</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Headline: Serif Elegance with Generous Air & Presence */}
        <AnimatedSection delay={0.15}>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            A Sanctuary of Calm,{' '}
            <span className="gold-gradient-text italic font-normal block sm:inline">
              Framed by Nature
            </span>
          </h1>
        </AnimatedSection>

        {/* Minimal, Evocative Tagline (Zero Clutter) */}
        <AnimatedSection delay={0.25}>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg md:text-xl font-light leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            An intimate 25-room boutique hotel in Pune overlooking verdant hills.
          </p>
        </AnimatedSection>

        {/* Call-to-Actions (Clean, Minimal Dual Buttons) */}
        <AnimatedSection delay={0.35}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
            <CTAButton
              href="/rooms"
              size="lg"
              className="bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-xl hover:shadow-accent/30 w-full sm:w-auto transition-all hover:-translate-y-0.5 text-sm sm:text-base py-3.5 px-8 rounded-full"
              id="hero-explore-cta"
            >
              <span>Explore Accommodation</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </CTAButton>

            <CTAButton
              href={whatsappUrl(STRINGS.contact.prefilledMessages.heroEnquiry)}
              external
              variant="outline"
              size="lg"
              className="border-white/35 bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:border-accent hover:text-accent-gold w-full sm:w-auto transition-all hover:-translate-y-0.5 shadow-lg text-sm sm:text-base py-3.5 px-8 rounded-full"
              id="hero-enquire-cta"
            >
              <span>{hero.ctaEnquire}</span>
            </CTAButton>
          </div>
        </AnimatedSection>

        {/* Subtle, Minimal Slide Dots (Unobtrusive) */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-accent shadow-sm shadow-accent/50'
                  : 'w-2 bg-white/35 hover:bg-white/65 hover:w-3.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Architectural Bottom Hairline Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10" />
    </section>
  );
}
