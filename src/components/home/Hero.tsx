'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Trees,
  Sparkles,
  Building2,
  MapPin,
  Calendar,
  Users,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Hero() {
  const { hero } = STRINGS.home;

  return (
    <section
      className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden bg-charcoal"
      id="hero"
    >
      {/* Background Media Container - Clean, vibrant, visible resort photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="liv.inn Hotel Pune nestled amidst verdant nature"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Lightweight, elegant luxury scrim: bright and luminous while keeping white text sharp */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-black/40 pointer-events-none" />

        {/* Subtle gold accent dot texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: IMAGES.patterns.heroDots,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-14 lg:px-8">
        {/* Verified Eyebrow Badge Pill */}
        <AnimatedSection delay={0.05} direction="none">
          <div className="mx-auto mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-gold backdrop-blur-md shadow-lg transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>{hero.badge}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Headline with Serif Typography & Gold Shimmer Accent */}
        <AnimatedSection delay={0.15}>
          <h1 className="font-serif text-3xl font-bold leading-[1.15] text-white sm:text-5xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            A Serene,{' '}
            <span className="gold-gradient-text italic font-normal">
              Nature-Oriented
            </span>{' '}
            Stay in Pune
          </h1>
        </AnimatedSection>

        {/* Brief Introduction */}
        <AnimatedSection delay={0.25}>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {hero.description}
          </p>
        </AnimatedSection>

        {/* Glassmorphic Property Snapshot Chips */}
        <AnimatedSection delay={0.35}>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <Building2 className="h-4 w-4 text-accent-gold" />
              <span className="font-medium">25 Premium Rooms</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <span className="font-medium">5 Rooms Per Floor (Privacy)</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <Trees className="h-4 w-4 text-accent-gold" />
              <span className="font-medium">Scenic Nature Views</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/25 hover:border-accent/50 hover:bg-black/50 transition-all shadow-md">
              <MapPin className="h-4 w-4 text-accent-gold" />
              <span className="font-medium">Upper Kharadi, Wagholi</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Primary Call To Actions */}
        <AnimatedSection delay={0.45}>
          <div className="mt-7 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center">
            <CTAButton
              href="/contact"
              size="lg"
              className="bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-xl hover:shadow-accent/30 w-full sm:w-auto transition-transform hover:-translate-y-0.5"
              id="hero-enquire-cta"
            >
              {hero.ctaEnquire}
              <ArrowRight className="h-5 w-5" />
            </CTAButton>
            <CTAButton
              href="/rooms"
              variant="outline"
              size="lg"
              className="border-white/30 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 hover:border-white/60 hover:text-white w-full sm:w-auto transition-transform hover:-translate-y-0.5 shadow-lg"
              id="hero-explore-cta"
            >
              {hero.ctaExplore}
            </CTAButton>
          </div>
        </AnimatedSection>

        {/* Integrated Luxury Quick Reservation Strip */}
        <AnimatedSection delay={0.55}>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/20 bg-charcoal/80 sm:bg-charcoal/70 p-3.5 sm:p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-left">
              {/* Check-In Timing */}
              <div className="rounded-xl bg-white/[0.07] p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-accent-gold font-medium">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Check-In</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">11:00 AM</p>
                <p className="text-[11px] text-white/70">Standard Check-In</p>
              </div>

              {/* Room Inventory */}
              <div className="rounded-xl bg-white/[0.07] p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-accent-gold font-medium">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Rooms</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">25 Premium</p>
                <p className="text-[11px] text-white/70">Nature Facing</p>
              </div>

              {/* Privacy & Floors */}
              <div className="rounded-xl bg-white/[0.07] p-3 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]">
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
                  className="w-full justify-center bg-accent text-charcoal font-semibold hover:bg-accent-light py-3.5 shadow-md hover:shadow-accent/20"
                  id="hero-quick-check-cta"
                >
                  <span>Check Rates</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </CTAButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Clean, Architectural Gold Hairline Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent z-10" />
    </section>
  );
}
