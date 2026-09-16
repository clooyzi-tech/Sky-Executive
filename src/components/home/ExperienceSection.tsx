'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Sparkles,
  Users,
  Wifi,
  Car,
  Bell,
  Droplets,
  Wind,
  UtensilsCrossed,
  Trees,
  Luggage,
  MapPin,
  Heart,
  ArrowRight,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionDivider from '@/components/ui/SectionDivider';

interface ExperienceSectionProps {
  id?: string;
  isAllServicesPage?: boolean;
}

export default function ExperienceSection({
  id = 'experience-services',
  isAllServicesPage = false,
}: ExperienceSectionProps) {
  const { experience } = STRINGS.home;

  const servicesToDisplay = isAllServicesPage
    ? experience.gridServices
    : experience.gridServices.slice(0, 6);

  const iconResolver = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-5 w-5 text-[#C9A227]" />;
      case 'Wifi':
        return <Wifi className="h-5 w-5 text-[#C9A227]" />;
      case 'Car':
        return <Car className="h-5 w-5 text-[#C9A227]" />;
      case 'Bell':
        return <Bell className="h-5 w-5 text-[#C9A227]" />;
      case 'Droplets':
        return <Droplets className="h-5 w-5 text-[#C9A227]" />;
      case 'Wind':
        return <Wind className="h-5 w-5 text-[#C9A227]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="h-5 w-5 text-[#C9A227]" />;
      case 'Trees':
        return <Trees className="h-5 w-5 text-[#C9A227]" />;
      case 'Luggage':
        return <Luggage className="h-5 w-5 text-[#C9A227]" />;
      case 'MapPin':
        return <MapPin className="h-5 w-5 text-[#C9A227]" />;
      case 'Bed':
        return <Bed className="h-4 w-4 text-[#C9A227]" />;
      case 'Heart':
        return <Heart className="h-4 w-4 text-[#C9A227]" />;
      case 'Sparkles':
        return <Sparkles className="h-4 w-4 text-[#C9A227]" />;
      default:
        return <Bed className="h-5 w-5 text-[#C9A227]" />;
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#F8F5EE] to-[#F4EFE6] pt-[26px] pb-0"
      id={id}
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. LUXURY BOTANICAL BRANCHES & CALLIGRAPHY IN CORNERS         */}
      {/* ------------------------------------------------------------- */}
      {/* Top Left Botanical Branch & Stamp */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 opacity-20 select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M0 40C80 40 140 100 180 180C140 140 80 120 20 140M100 100C160 140 180 220 160 300M120 140C200 180 240 260 220 360"
            stroke="#B88A2A"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <ellipse cx="60" cy="80" rx="16" ry="8" transform="rotate(-30 60 80)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="120" cy="120" rx="18" ry="9" transform="rotate(-15 120 120)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="160" cy="200" rx="20" ry="10" transform="rotate(20 160 200)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="200" cy="280" rx="18" ry="9" transform="rotate(45 200 280)" stroke="#B88A2A" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Top Left Editorial Stamp */}
      <div className="absolute left-6 lg:left-12 top-10 lg:top-14 hidden md:flex flex-col text-[11px] font-semibold tracking-[0.26em] text-[#8A8478] leading-tight select-none">
        <span>COMFORT</span>
        <span className="my-1">IN EVERY</span>
        <span>DETAIL</span>
      </div>

      {/* Top Right Botanical Branch & Script */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 opacity-20 select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M400 40C320 40 260 100 220 180C260 140 320 120 380 140M300 100C240 140 220 220 240 300M280 140C200 180 160 260 180 360"
            stroke="#B88A2A"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <ellipse cx="340" cy="80" rx="16" ry="8" transform="rotate(30 340 80)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="280" cy="120" rx="18" ry="9" transform="rotate(15 280 120)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="240" cy="200" rx="20" ry="10" transform="rotate(-20 240 200)" stroke="#B88A2A" strokeWidth="1.2" />
          <ellipse cx="200" cy="280" rx="18" ry="9" transform="rotate(-45 200 280)" stroke="#B88A2A" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Top Right Calligraphy Accent */}
      <div className="absolute right-6 lg:right-12 top-8 lg:top-12 hidden md:flex flex-col items-end select-none">
        <div className="font-serif italic text-2xl lg:text-3xl text-[#B88A2A]/85 leading-tight tracking-wide">
          <div className="pr-10">Stay</div>
          <div className="pr-4">Relax</div>
          <div>Recharge</div>
        </div>
        <div className="mt-2 h-px w-36 lg:w-48 bg-gradient-to-r from-transparent via-[#C9A227]/40 to-[#C9A227]" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. SECTION HEADER (Centered)                                  */}
      {/* ------------------------------------------------------------- */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A227]">
                {isAllServicesPage ? 'ALL HOTEL SERVICES & AMENITIES' : experience.eyebrow}
              </span>
              <span className="h-px w-10 bg-[#C9A227]" />
            </div>

            <h2 className="mt-[16px] font-serif text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl md:text-5xl">
              {isAllServicesPage ? 'Everything You Need for a Seamless Stay' : experience.title}
            </h2>

            <p className="mx-auto mt-[16px] max-w-2xl text-sm leading-relaxed text-[#5F5A50] sm:text-base">
              {isAllServicesPage
                ? 'Thoughtfully curated facilities and verified services across our 25-room boutique hotel in Pune.'
                : experience.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. ROW 1: HERO PAIR (Comfortable Rooms + Daily Housekeeping) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-stretch">
          {/* Card 1: Comfortable Rooms (7 columns - Large landscape photo with overlay badge) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="group relative min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DED8CC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-end bg-charcoal">
                {/* Background Hotel Room Image */}
                <Image
                  src={experience.heroRoom.image}
                  alt={experience.heroRoom.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for perfect typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    {/* Circular Gold Icon Badge */}
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3]/95 border border-[#C9A227] text-[#C9A227] shadow-md">
                      <Bed className="h-5 w-5 sm:h-6 sm:w-6 text-[#C9A227]" />
                    </div>

                    <div className="flex-1">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#E7D39A]">
                        {experience.heroRoom.category}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white">
                        {experience.heroRoom.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed max-w-md font-light">
                        {experience.heroRoom.description}
                      </p>

                      <div className="mt-4">
                        <Link
                          href={experience.heroRoom.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E7D39A] hover:text-white transition-colors group/link"
                        >
                          <span>{experience.heroRoom.linkText}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Card 2: Daily Housekeeping (5 columns - Split Photo & Content) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="group relative min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DED8CC] bg-white shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* Photo of Housekeeper folding towels */}
                <div className="relative h-56 sm:h-full w-full overflow-hidden bg-cream">
                  <Image
                    src={experience.housekeeping.image}
                    alt={experience.housekeeping.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-7 xl:p-8 flex flex-col justify-center bg-white">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF8F3] border border-[#E7D39A] text-[#C9A227] shadow-2xs">
                    <Sparkles className="h-5 w-5 text-[#C9A227]" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#C9A227]">
                    {experience.housekeeping.category}
                  </span>

                  <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[#1C1C1C]">
                    {experience.housekeeping.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#5F5A50] leading-relaxed">
                    {experience.housekeeping.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={experience.housekeeping.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A227] hover:text-[#B88A2A] transition-colors group/link"
                    >
                      <span>{experience.housekeeping.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. BALANCED SERVICES (3-Column Grid)                          */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {servicesToDisplay.map((service, idx) => (
            <AnimatedSection key={service.id} delay={0.06 * (idx + 1)}>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Service Card Top Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-cream">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Service Card Content with Overlapping Badge */}
                <div className="relative p-6 pt-7 flex-1 flex flex-col justify-between bg-white">
                  {/* Overlapping Badge protruding onto photo boundary */}
                  <div className="absolute -top-5 left-6 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#FAF8F3] border border-[#E7D39A] text-[#C9A227] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {iconResolver(service.icon)}
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#C9A227] block">
                      {service.category}
                    </span>

                    <h3 className="mt-1 font-serif text-lg sm:text-xl font-bold text-[#1C1C1C]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#5F5A50] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F3EFE6]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9A227] hover:text-[#B88A2A] transition-colors group/link"
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. WIDE BANNER CTA CARD                                       */}
        {/* ------------------------------------------------------------- */}
        <AnimatedSection delay={0.3}>
          <div className="mt-[16px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-[#F5EFEB] shadow-xs hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column (Copy & Button) */}
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1C] leading-tight">
                  Experience Comfort<br />at Every Step
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#5F5A50] leading-relaxed max-w-sm">
                  {isAllServicesPage
                    ? 'Ready to experience boutique comfort at liv.inn Pune? Connect directly with our front desk team.'
                    : experience.banner.subtitle}
                </p>

                <div className="mt-[16px]">
                  <Link
                    href={isAllServicesPage ? '/contact' : experience.banner.href}
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B88A2A] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1C1C1C] shadow-sm transition-all duration-300 hover:brightness-105 hover:shadow-md active:scale-95"
                    id="experience-banner-btn"
                  >
                    <span>{isAllServicesPage ? 'ENQUIRE ABOUT STAY' : experience.banner.btnText}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#1C1C1C]" />
                  </Link>
                </div>
              </div>

              {/* Right Column (Bedside Table / Stories Image) */}
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[260px] lg:min-h-[340px] overflow-hidden bg-cream">
                <Image
                  src={experience.banner.image}
                  alt="liv.inn Boutique Experience — Good Stays Create Great Stories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ------------------------------------------------------------- */}
        {/* 6. BOTTOM FEATURE STRIP / HIGHLIGHTS BAR                      */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-[16px] pt-[16px] border-t border-[#DED8CC] flex flex-wrap items-center justify-between gap-[16px] text-xs text-[#5F5A50]">
          {experience.highlights.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {iconResolver(item.icon)}
              <span className="font-medium text-[#1C1C1C]">{item.label}</span>
              {i < experience.highlights.length - 1 && (
                <span className="hidden lg:inline text-[#DED8CC] ml-4 sm:ml-6">|</span>
              )}
            </div>
          ))}

          {/* Liv.inn Brand Signature */}
          <div className="flex items-center gap-2.5 font-serif font-bold text-[11px] tracking-[0.2em] text-[#B88A2A] uppercase ml-auto lg:ml-0">
            <span className="h-px w-6 bg-[#C9A227]" />
            <span>LIV.INN BOUTIQUE HOTEL</span>
          </div>
        </div>
      </div>

      {/* Luxury Section Divider */}
      <SectionDivider />
    </section>
  );
}
