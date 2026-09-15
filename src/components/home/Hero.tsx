'use client';

import Image from 'next/image';
import { ArrowRight, Trees, Sparkles, Building2 } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Hero() {
  const { hero } = STRINGS.home;

  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-charcoal"
      id="hero"
    >
      {/* Premium hotel imagery background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="liv.inn Hotel Pune nestled amidst verdant nature"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic gradients for readability and luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/80" />
        {/* Subtle gold accent dot texture */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: IMAGES.patterns.heroDots,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Official Liv.inn Logo - Strict 1:1 circular badge */}
        <AnimatedSection delay={0.05} direction="none">
          <div className="mx-auto mb-6 flex flex-col items-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-accent/80 shadow-2xl ring-4 ring-black/40 transition-transform duration-500 hover:scale-105">
              <Image
                src={STRINGS.brand.logoPath}
                alt={STRINGS.brand.logoAlt}
                fill
                priority
                sizes="(max-width: 640px) 96px, 112px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-gold backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>{hero.badge}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Headline focused on staying in Pune */}
        <AnimatedSection delay={0.2}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
            {hero.title}
          </h1>
        </AnimatedSection>

        {/* Brief Introduction */}
        <AnimatedSection delay={0.35}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl font-light">
            {hero.description}
          </p>
        </AnimatedSection>

        {/* Verified Property Snapshot Pills */}
        <AnimatedSection delay={0.45}>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/90">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
              <Building2 className="h-3.5 w-3.5 text-accent-gold" />
              25 Premium Rooms
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
              5 Rooms Per Floor
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
              <Trees className="h-3.5 w-3.5 text-accent-gold" />
              Nature-Oriented Views
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
              Pune, Maharashtra
            </span>
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.55}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              href="/contact"
              size="lg"
              className="bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-lg hover:shadow-accent/25 w-full sm:w-auto"
              id="hero-enquire-cta"
            >
              {hero.ctaEnquire}
              <ArrowRight className="h-5 w-5" />
            </CTAButton>
            <CTAButton
              href="/rooms"
              variant="outline"
              size="lg"
              className="border-white/40 bg-black/30 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white w-full sm:w-auto"
              id="hero-explore-cta"
            >
              {hero.ctaExplore}
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>

      {/* Elegant Bottom fade into light section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
