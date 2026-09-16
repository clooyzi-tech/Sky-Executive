'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  Building2,
  Trees,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle,
  UtensilsCrossed,
} from '@/config/icons';

export default function Introduction() {
  const { introduction } = STRINGS.home;

  const keyPillars = [
    {
      number: '01',
      icon: <Building2 className="h-6 w-6 text-accent" />,
      title: '25 Premium Rooms',
      desc: 'Balanced across 5 floors with just 5 rooms on each floor for unmatched privacy and quiet comfort.',
    },
    {
      number: '02',
      icon: <Trees className="h-6 w-6 text-accent" />,
      title: 'Nature-Oriented Views',
      desc: 'Lush greenery, rolling hills, and refreshing natural perspectives overlooking Pune scenery.',
    },
    {
      number: '03',
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      title: 'Spotless Cleanliness',
      desc: 'Strict daily housekeeping, pristine white linen, and rigorous sanitation across all rooms.',
    },
    {
      number: '04',
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: '24/7 Guest Assistance',
      desc: 'Warm, round-the-clock service support ready to assist with check-in, dining, and requests.',
    },
  ];

  const highlights = [
    'Intimate scale: Only 5 rooms on each floor',
    'Scenic nature & hill vistas from private windows',
    'Dedicated in-house cloud kitchen for fresh dining',
    'Convenient access to Pune IT corridors & airport',
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden" id="hotel-overview">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-cream-dark/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-gold bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-dark shadow-xs">
              <Trees className="h-3.5 w-3.5 text-accent" />
              <span>The Boutique Sanctuary</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl tracking-tight">
              Welcome to <span className="gold-gradient-text">liv.inn</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-3 text-base sm:text-lg text-slate-medium font-light max-w-xl mx-auto">
              {introduction.subtitle}
            </p>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </AnimatedSection>
        </div>

        {/* 2-Column Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection delay={0.2}>
              <div className="border-l-2 border-accent pl-5 py-1">
                <p className="font-serif text-lg sm:text-xl text-charcoal leading-snug italic">
                  &ldquo;A tranquil haven in Pune, tailored for guests who appreciate quiet luxury, unhurried mornings, and authentic boutique hospitality.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="space-y-4 text-base leading-relaxed text-slate-deep">
                <p>{introduction.p1}</p>
                <p>{introduction.p2}</p>
              </div>
            </AnimatedSection>

            {/* Curated Highlights List */}
            <AnimatedSection delay={0.3}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-charcoal/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Read Story CTA */}
            <AnimatedSection delay={0.35}>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-dark hover:text-accent transition-colors group"
                >
                  <span>Discover Our Story & Hospitality</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Layered Luxury Visual Frame */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.25} direction="left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Gold Glow Frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/25 via-accent-gold/10 to-transparent blur-xl opacity-70" />

                {/* Main Visual Image Card */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-border shadow-2xl bg-charcoal">
                  <Image
                    src={IMAGES.natureView}
                    alt="Scenic nature and greenery view from liv.inn Pune"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />

                  {/* Floating Glass Badge (Top Left) */}
                  <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-charcoal/75 px-3.5 py-2 backdrop-blur-md text-white shadow-lg">
                    <p className="text-[10px] uppercase tracking-wider text-accent-gold font-bold">
                      Boutique Scale
                    </p>
                    <p className="text-xs font-semibold">5 Floors • 25 Rooms</p>
                  </div>

                  {/* Floating Glass Feature Card (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-xs rounded-2xl border border-white/25 bg-white/90 p-4 backdrop-blur-md shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                        <Trees className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-charcoal">
                          Scenic Hill Views
                        </p>
                        <p className="text-[11px] text-slate-medium leading-tight mt-0.5">
                          Wake up to crisp hill breeze and open green horizons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Decorative Architectural Stamp */}
                <div className="hidden sm:block absolute -bottom-5 -left-5 rounded-2xl border border-border-gold bg-cream px-4 py-2.5 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent-dark">
                    <UtensilsCrossed className="h-4 w-4 text-accent" />
                    <span>In-House Cloud Kitchen</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* 4 Pillars of liv.inn Pune (Refined Cards) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">
              Why Guests Love liv.inn
            </h3>
            <p className="mt-2 text-sm text-slate-medium">
              Carefully designed essentials for a restful and seamless stay
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyPillars.map((pillar, idx) => (
              <AnimatedSection key={pillar.title} delay={0.1 * idx}>
                <div className="group relative h-full rounded-2xl border border-border bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl">
                  {/* Subtle Number Watermark */}
                  <span className="absolute top-6 right-6 font-serif text-2xl font-bold text-border group-hover:text-accent/30 transition-colors">
                    {pillar.number}
                  </span>

                  {/* Icon Container */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-cream border border-border-light text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-charcoal group-hover:shadow-md">
                    {pillar.icon}
                  </div>

                  {/* Card Content */}
                  <h4 className="mt-5 font-serif text-lg font-semibold text-charcoal group-hover:text-accent-dark transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-deep">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
