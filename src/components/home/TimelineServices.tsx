'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UtensilsCrossed, ShieldCheck, Wifi, Sparkles, Check } from 'lucide-react';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import IconMedallion from '@/components/ui/IconMedallion';

interface TimelineStep {
  number: number;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: 'We Provide High Quality Services',
    tagline: 'Thoughtful Hospitality & Fresh Dining',
    description:
      'From our dedicated in-house cloud kitchen delivering fresh meals to your door to tranquil nature-facing rooms with individual AC and Smart TV, every detail is organized for effortless comfort in Pune.',
    highlights: [
      'In-house cloud kitchen for room-delivered breakfast, lunch & dinner',
      'Boutique rooms arranged for quiet privacy',
      'Scenic nature-oriented views facing tranquil greenery',
    ],
    image: IMAGES.cloudKitchen || '/images/property/cloud_kitchen.jpg',
    imageAlt: 'High quality in-room dining and guest care at Hotel Sky Executive Pune',
    ctaText: 'Explore Dining & Rooms',
    ctaHref: '/rooms',
  },
  {
    number: 2,
    title: 'Comprehensive Boutique Comfort: 20+ Verified Amenities',
    tagline: 'Modern Conveniences for Work & Leisure',
    description:
      'Enjoy verified boutique amenities including high-speed Wi-Fi for corporate travelers, an elevator / lift facility, 100% power backup, free on-site parking, and laundry support.',
    highlights: [
      'Free High-Speed Wi-Fi & work desk in every room',
      'Elevator / Lift facility & 100% full power backup',
      'Free on-site parking & pet-friendly stay at no extra charge',
    ],
    image: '/images/services/wifi_desk.jpg',
    imageAlt: '20+ verified amenities and guest services at Hotel Sky Executive',
    ctaText: 'View All Facilities',
    ctaHref: '/rooms#facilities',
  },
  {
    number: 3,
    title: 'We Provide High Class Security',
    tagline: '24/7 Front Desk, Security & Peace of Mind',
    description:
      'Situated at Jaywant Towers on Pune–Nagar Road in Lonikand, Hotel Sky Executive provides round-the-clock front desk presence, CCTV monitoring across all corridors and entry points, and complete safety.',
    highlights: [
      '24/7 Front desk assistance & staff on-site day and night',
      'Continuous CCTV security monitoring in all common areas',
      'Prime connectivity near Lonikand and Sanaswadi industrial belt',
    ],
    image: IMAGES.services?.reception || '/images/services/reception.jpg',
    imageAlt: '24/7 security and reception desk at Hotel Sky Executive Pune',
    ctaText: 'Connect with Front Desk',
    ctaHref: '/contact',
  },
];

export default function TimelineServices() {
  return (
    <section
      className="py-16 sm:py-24 bg-[var(--cream)] relative overflow-hidden select-none"
      id="timeline-services"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ============================================================ */}
        {/* SECTION 6.4: FEATURE MEDALLION ROW (Cream Background)       */}
        {/* ============================================================ */}
        <div className="mb-16 sm:mb-20 pb-12 border-b border-[var(--line-gold)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Medallion Cell 1: Fresh Dining */}
            <div className="group flex flex-col items-center text-center p-4">
              <IconMedallion icon={UtensilsCrossed} size="lg" variant="gold" />
              <h3 className="font-display font-bold text-sm sm:text-base text-[var(--navy-ink)] uppercase tracking-wider mt-4">
                In-House Cloud Kitchen
              </h3>
              <p className="font-script text-[var(--brown-gold)] text-sm mt-0.5">
                Fresh meals room delivered
              </p>
            </div>

            {/* Medallion Cell 2: Amenities */}
            <div className="group flex flex-col items-center text-center p-4 lg:border-l border-[var(--line-gold)]">
              <IconMedallion icon={Wifi} size="lg" variant="gold" />
              <h3 className="font-display font-bold text-sm sm:text-base text-[var(--navy-ink)] uppercase tracking-wider mt-4">
                20+ Verified Amenities
              </h3>
              <p className="font-script text-[var(--brown-gold)] text-sm mt-0.5">
                Elevator, Wi-Fi & Generator
              </p>
            </div>

            {/* Medallion Cell 3: 24/7 Security */}
            <div className="group flex flex-col items-center text-center p-4 lg:border-l border-[var(--line-gold)]">
              <IconMedallion icon={ShieldCheck} size="lg" variant="navy" />
              <h3 className="font-display font-bold text-sm sm:text-base text-[var(--navy-ink)] uppercase tracking-wider mt-4">
                24/7 Desk & Security
              </h3>
              <p className="font-script text-[var(--brown-gold)] text-sm mt-0.5">
                CCTV coverage & front desk
              </p>
            </div>

            {/* Framed Feature Box (Section 5.6) */}
            <div className="card-framed p-5 sm:p-6 flex flex-col justify-between text-left lg:border-l border-[var(--line-gold)]">
              <div className="flex items-center gap-2 mb-2">
                <CrownMark size="nav" variant="gold" />
                <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                  Executive Suite
                </span>
              </div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-[var(--brown-gold)] leading-tight">
                200 SQ. FT. ROOMS
              </div>
              <p className="font-body text-xs text-[var(--navy-ink)] uppercase tracking-wider font-semibold mt-1">
                Queen Bed • En-Suite Bath
              </p>
              <div className="mt-3 pt-2 border-t border-[var(--line-gold)] flex items-center justify-between text-[11px] font-bold text-[var(--navy-ink)]">
                <span>Free On-Site Parking</span>
                <span className="text-[var(--gold)]">✓ Included</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DETAILED SERVICES CARDS WITH ROYAL NAVY + GOLD STYLING       */}
        {/* ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-xs font-display font-bold tracking-wider uppercase mb-3">
            <CrownMark size="sm" variant="gold" />
            <span>Why Guests Choose Hotel Sky Executive</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy-ink)] uppercase tracking-tight">
            Crafted for Unmatched Stay Experience
          </h2>
          <p className="font-body mt-2.5 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
            Discover how our boutique hotel blends serene surroundings with executive hospitality on Pune–Nagar Road.
          </p>
        </div>

        {/* Detailed Timeline Steps */}
        <div className="space-y-12 sm:space-y-16">
          {TIMELINE_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                } bg-[var(--cream-deep)] rounded-[6px] border border-[var(--gold)] p-6 sm:p-8 lg:p-10 shadow-[0_10px_28px_rgba(11,31,63,0.12)]`}
              >
                {/* Photo with Sharp Corners (0 radius per Section 4.3) */}
                <div className="w-full lg:w-1/2 h-[260px] sm:h-[340px] relative overflow-hidden bg-[var(--navy-deep)] border border-[var(--line-gold)] shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle Number Tag in Gold */}
                  <div className="absolute top-4 left-4 bg-[var(--navy-deep)] text-[var(--gold-bright)] border border-[var(--gold-bright)]/40 px-3 py-1 font-display font-extrabold text-xs uppercase tracking-widest shadow-md">
                    Feature 0{step.number}
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                    {step.tagline}
                  </span>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl uppercase text-[var(--navy-ink)] mt-1.5 leading-tight">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-[var(--ink)] leading-relaxed mt-3">
                    {step.description}
                  </p>

                  {/* Checklist with Section 5.7 Gold Check-Ticks */}
                  <ul className="mt-5 space-y-2.5 w-full">
                    {step.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--gold-bright)] text-[var(--navy-deep)] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-body text-xs sm:text-sm font-semibold text-[var(--navy-ink)]">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Primary CTA Link */}
                  <div className="mt-6">
                    <Link
                      href={step.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <span>{step.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
