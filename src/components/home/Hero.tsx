'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  Bed,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react';
import { IMAGES } from '@/config/image';

interface HeroSlide {
  src: string;
  alt: string;
  word: string;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: IMAGES.rooms['premium-room'] || '/images/rooms/premium_room.jpg',
    alt: 'liv.inn Double Bed Room offering serene comfort in Pune',
    word: 'comfort',
    label: 'Room View',
  },
  {
    src: IMAGES.rooms['suite'] || '/images/rooms/suite_room.jpg',
    alt: 'Spacious boutique room accommodation at liv.inn',
    word: 'Space',
    label: 'Spacious Stays',
  },
  {
    src: IMAGES.hero,
    alt: 'Hotel liv.inn building atmosphere amidst peaceful greenery in Pune',
    word: 'Atmosphere',
    label: 'Hotel Atmosphere',
  },
  {
    src: IMAGES.natureView,
    alt: 'Scenic nature view and relaxing stay at liv.inn',
    word: 'Happiness',
    label: 'Nature & Joy',
  },
  {
    src: IMAGES.services.reception || '/images/services/reception.jpg',
    alt: 'Attentive 24/7 front desk guest assistance at liv.inn Pune',
    word: 'Quality Service',
    label: 'Front Desk Care',
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
      className="relative flex min-h-[92vh] lg:min-h-[96vh] w-full flex-col justify-between overflow-hidden bg-[#121316] select-none pt-20 pb-10"
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
            {/* Dark gradient overlay for luxury contrast and text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-xs transition-all hover:bg-[#B38E46] hover:border-[#B38E46] cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-xs transition-all hover:bg-[#B38E46] hover:border-[#B38E46] cursor-pointer"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Main Center Headline matching Canva reference */}
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
            <h1 className="flex flex-col sm:flex-row items-center justify-center font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
              <span>Hotel Liv inn provides</span>
              <span
                className="font-script text-[#DFB756] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal sm:ml-4 mt-2 sm:mt-0 tracking-normal drop-shadow-lg"
                style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
              >
                {activeSlide.word}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed drop-shadow-sm">
              An intimate boutique hotel in Pune with scenic nature views, in-house cloud kitchen, and 24/7 guest assistance.
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
                i === currentSlide ? 'w-8 bg-[#DFB756]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>


    </section>
  );
}
