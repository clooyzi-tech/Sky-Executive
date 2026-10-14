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
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import BotanicalWatermark from '@/components/ui/BotanicalWatermark';

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
        return <Users className="h-5 w-5 text-[var(--cream)]" />;
      case 'Wifi':
        return <Wifi className="h-5 w-5 text-[var(--cream)]" />;
      case 'Car':
        return <Car className="h-5 w-5 text-[var(--cream)]" />;
      case 'Bell':
        return <Bell className="h-5 w-5 text-[var(--cream)]" />;
      case 'Droplets':
        return <Droplets className="h-5 w-5 text-[var(--cream)]" />;
      case 'Wind':
        return <Wind className="h-5 w-5 text-[var(--cream)]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="h-5 w-5 text-[var(--cream)]" />;
      case 'Trees':
        return <Trees className="h-5 w-5 text-[var(--cream)]" />;
      case 'Luggage':
        return <Luggage className="h-5 w-5 text-[var(--cream)]" />;
      case 'MapPin':
        return <MapPin className="h-5 w-5 text-[var(--cream)]" />;
      case 'Bed':
        return <Bed className="h-4 w-4 text-[var(--cream)]" />;
      case 'Heart':
        return <Heart className="h-4 w-4 text-[var(--cream)]" />;
      case 'Sparkles':
        return <Sparkles className="h-4 w-4 text-[var(--cream)]" />;
      default:
        return <Bed className="h-5 w-5 text-[var(--cream)]" />;
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[var(--cream-deep)] py-16 md:py-24"
      id={id}
    >
      {/* Botanical Watermark */}
      <BotanicalWatermark className="top-0 right-0 pointer-events-none" />

      {/* Top Left Editorial Stamp */}
      <div className="absolute left-6 lg:left-12 top-10 lg:top-14 hidden md:flex flex-col text-[11px] font-bold font-display tracking-[0.26em] text-[var(--brown-gold)] leading-tight select-none">
        <span>COMFORT</span>
        <span className="my-1">IN EVERY</span>
        <span>DETAIL</span>
      </div>

      {/* Top Right Calligraphy Accent */}
      <div className="absolute right-6 lg:right-12 top-8 lg:top-12 hidden md:flex flex-col items-end select-none">
        <div className="font-script italic text-2xl lg:text-3xl text-[var(--gold)] leading-tight tracking-wide">
          <div className="pr-10">Stay</div>
          <div className="pr-4">Relax</div>
          <div>Recharge</div>
        </div>
        <div className="mt-2 h-0.5 w-36 lg:w-48 bg-[var(--gold)]/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--gold)]" />
              <span className="text-xs font-bold font-display tracking-[0.25em] uppercase text-[var(--brown-gold)]">
                {isAllServicesPage ? 'ALL HOTEL SERVICES & AMENITIES' : experience.eyebrow}
              </span>
              <span className="h-0.5 w-10 bg-[var(--gold)]" />
            </div>

            <h2 className="mt-3 sm:mt-4 font-display text-3xl font-extrabold tracking-tight text-[var(--navy-ink)] sm:text-4xl md:text-5xl uppercase">
              {isAllServicesPage ? 'Everything You Need for a Seamless Stay' : experience.title}
            </h2>

            <div className="flex justify-center my-3">
              <GoldRuleDot width="280px" />
            </div>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink)] sm:text-base">
              {isAllServicesPage
                ? 'Thoughtfully curated facilities and verified services across our boutique hotel in Pune.'
                : experience.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* ROW 1: HERO PAIR */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Comfortable Rooms */}
          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="group relative min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] h-full rounded-[6px] overflow-hidden border border-[var(--gold)] shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col justify-end bg-[var(--navy-deep)]">
                {/* Photo has sharp corners */}
                <Image
                  src={experience.heroRoom.image}
                  alt={experience.heroRoom.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/40 to-transparent" />

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] border border-[var(--gold-bright)] text-[var(--cream)] shadow-md">
                      <Bed className="h-6 w-6 text-[var(--cream)]" />
                    </div>

                    <div className="flex-1">
                      <span className="text-[10px] sm:text-xs font-bold font-display uppercase tracking-[0.18em] text-[var(--gold-bright)]">
                        {experience.heroRoom.category}
                      </span>
                      <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-white uppercase">
                        {experience.heroRoom.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[var(--on-navy)]/90 leading-relaxed max-w-md font-normal">
                        {experience.heroRoom.description}
                      </p>

                      <div className="mt-4">
                        <Link
                          href={experience.heroRoom.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-bright)] hover:text-white transition-colors group/link font-display"
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

          {/* Card 2: Daily Housekeeping */}
          <div className="lg:col-span-5 xl:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="group relative min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] h-full rounded-[6px] overflow-hidden border border-[var(--gold)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="relative h-56 sm:h-full w-full overflow-hidden bg-[var(--cream)]">
                  <Image
                    src={experience.housekeeping.image}
                    alt={experience.housekeeping.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7 xl:p-8 flex flex-col justify-center bg-white">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--cream)] shadow-xs">
                    <Sparkles className="h-5 w-5 text-[var(--cream)]" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-bold font-display uppercase tracking-[0.16em] text-[var(--brown-gold)]">
                    {experience.housekeeping.category}
                  </span>

                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-[var(--navy-ink)] uppercase">
                    {experience.housekeeping.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                    {experience.housekeeping.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={experience.housekeeping.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold)] hover:text-[var(--brown-gold)] transition-colors group/link font-display"
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

        {/* 3-Column Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesToDisplay.map((service, idx) => (
            <AnimatedSection key={service.id} delay={0.06 * (idx + 1)}>
              <div className="group relative overflow-hidden rounded-[6px] border border-[var(--gold)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[var(--cream)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="relative p-6 pt-7 flex-1 flex flex-col justify-between bg-white">
                  <div className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--cream)] border-2 border-[var(--gold)] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {iconResolver(service.icon)}
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs font-bold font-display uppercase tracking-[0.16em] text-[var(--brown-gold)] block">
                      {service.category}
                    </span>

                    <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-[var(--navy-ink)] uppercase">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--line-gold)]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold)] hover:text-[var(--brown-gold)] transition-colors group/link font-display"
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

        {/* WIDE BANNER CTA CARD */}
        <AnimatedSection delay={0.3}>
          <div className="mt-10 sm:mt-12 overflow-hidden rounded-[6px] border border-[var(--gold)] bg-white shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14">
                <CrownMark size="footer" variant="gold" />
                <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--navy-ink)] leading-tight uppercase">
                  Experience Comfort<br />at Every Step
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[var(--ink)] leading-relaxed max-w-sm">
                  {isAllServicesPage
                    ? 'Ready to experience boutique comfort at Hotel Sky Executive Pune? Connect directly with our front desk team.'
                    : experience.banner.subtitle}
                </p>

                <div className="mt-6 sm:mt-8">
                  <Link
                    href={isAllServicesPage ? '/contact' : experience.banner.href}
                    className="btn-primary-gold inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider"
                    id="experience-banner-btn"
                  >
                    <span>{isAllServicesPage ? 'ENQUIRE ABOUT STAY' : experience.banner.btnText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[260px] lg:min-h-[340px] overflow-hidden bg-[var(--cream)]">
                <Image
                  src={experience.banner.image}
                  alt="Hotel Sky Executive Boutique Experience — Good Stays Create Great Stories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* BOTTOM FEATURE STRIP */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[var(--line-gold)] flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-xs text-[var(--ink)]">
          {experience.highlights.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[var(--navy-deep)] flex items-center justify-center text-[var(--cream)]">
                {iconResolver(item.icon)}
              </div>
              <span className="font-semibold text-[var(--navy-ink)] uppercase tracking-wider font-display text-[11px]">{item.label}</span>
              {i < experience.highlights.length - 1 && (
                <span className="hidden lg:inline text-[var(--gold)] ml-4 sm:ml-6">•</span>
              )}
            </div>
          ))}

          <div className="flex items-center gap-2.5 font-display font-extrabold text-[11px] tracking-[0.2em] text-[var(--gold)] uppercase ml-auto lg:ml-0">
            <span className="h-0.5 w-6 bg-[var(--gold)]" />
            <span>HOTEL SKY EXECUTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
