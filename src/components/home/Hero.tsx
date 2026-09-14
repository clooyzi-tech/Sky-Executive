'use client';

import { ArrowRight } from 'lucide-react';
import { brand } from '@/lib/content';
import { whatsappUrl } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-accent-dark"
      id="hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1} direction="none">
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Welcome to {brand.name}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {brand.tagline}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
            {brand.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              href={whatsappUrl('Hi! I would like to make a booking enquiry at Liv.inn.')}
              external
              size="lg"
              id="hero-enquire-cta"
            >
              Enquire Now
              <ArrowRight className="h-5 w-5" />
            </CTAButton>
            <CTAButton
              href="/rooms"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              id="hero-explore-cta"
            >
              Explore Rooms
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
