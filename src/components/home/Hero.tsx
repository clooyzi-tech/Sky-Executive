'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';

interface HeroSlide {
  src: string;
  alt: string;
  word: string;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/images/rooms/double_bed_room.webp',
    alt: 'Hotel Sky Executive contemporary room offering executive comfort in Lonikand, Pune',
    word: 'Comfort',
    label: 'Room View',
  },
  {
    src: IMAGES.interior || '/images/property/interior_design.webp',
    alt: 'Executive hospitality and modern interior at Hotel Sky Executive',
    word: 'Elegance',
    label: 'Lobby & Ambiance',
  },
  {
    src: IMAGES.building || '/images/property/building_exterior.webp',
    alt: 'Hotel Sky Executive at Jaywant Towers, Pune–Nagar Road, Lonikand',
    word: 'Prestige',
    label: 'Hotel Exterior',
  },
  {
    src: '/images/property/peaceful_ambience.jpg',
    alt: 'Relaxing and peaceful stay experience at Hotel Sky Executive',
    word: 'Serenity',
    label: 'Peaceful Stay',
  },
  {
    src: IMAGES.interior || '/images/property/interior_design.webp',
    alt: 'Attentive 24/7 front desk guest assistance at Hotel Sky Executive Pune',
    word: 'Excellence',
    label: '24/7 Service',
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide navigation
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

  return (
    <section
      className="relative flex min-h-[92vh] lg:min-h-[96vh] w-full flex-col justify-between overflow-hidden bg-navy select-none pt-20 pb-10"
      id="hero"
    >
      {/* Background Slides with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Deep Navy/Black gradient overlay for luxury contrast and text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D46]/95 via-[#0B2D46]/55 to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-xs transition-all hover:bg-accent hover:border-accent hover:text-navy cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-xs transition-all hover:bg-accent hover:border-accent hover:text-navy cursor-pointer"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Main Center Headline */}
      <div className="relative z-10 mx-auto flex flex-1 max-w-5xl flex-col items-center justify-center px-4 text-center mt-12 sm:mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-navy/60 px-4 py-1 text-xs uppercase tracking-widest text-accent backdrop-blur-sm">
              <span>Executive Hotel • Pune–Nagar Road, Lonikand</span>
            </div>

            <h1 className="flex flex-col sm:flex-row items-center justify-center font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
              <span>Hotel Sky Executive delivers</span>
              <span
                className="font-script text-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal sm:ml-4 mt-2 sm:mt-0 tracking-normal drop-shadow-lg"
                style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
              >
                {activeSlide.word}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed drop-shadow-sm">
              {STRINGS.brand.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators */}
        <div className="mt-6 flex items-center gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}