'use client';

import Image from 'next/image';
import { Trees, Check, ArrowRight, Sun, Wind, Eye } from '@/config/icons';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTAButton from '@/components/ui/CTAButton';

export default function NatureViewSection() {
  const { natureHighlight } = STRINGS.home;

  const features = [
    {
      icon: <Trees className="h-5 w-5 text-accent" />,
      title: 'Verdant Green Vistas',
      desc: 'Wake up to lush, open green perspectives that bring peace and calm into your morning.',
    },
    {
      icon: <Sun className="h-5 w-5 text-accent" />,
      title: 'Abundant Natural Light',
      desc: 'Expansive windows designed to maximize daylight and create airy, uplifting room spaces.',
    },
    {
      icon: <Wind className="h-5 w-5 text-accent" />,
      title: 'Refreshing Air & Calm',
      desc: 'Set in a quieter neighborhood of Pune, away from high-density traffic and urban commotion.',
    },
    {
      icon: <Eye className="h-5 w-5 text-accent" />,
      title: 'Nature-Facing Perspective',
      desc: 'Thoughtfully positioned to take full advantage of the natural surroundings.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="nature-views">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          {/* Left Column: Image with layered elegance */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border-gold shadow-2xl">
                <Image
                  src={IMAGES.natureView}
                  alt={`Scenic surroundings and relaxing stay at ${STRINGS.brand.name} Pune`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Executive Atmosphere
                  </span>
                  <p className="mt-2 text-sm font-medium text-white drop-shadow-md">
                    Tranquility and hospitality integrated into every stay at {STRINGS.brand.name}.
                  </p>
                </div>
              </div>

              {/* Float badge */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl border border-border bg-ivory p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-charcoal">
                  <Trees className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    Scenic Retreat
                  </p>
                  <p className="text-xs text-slate-medium">
                    Nature-Oriented Views
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Narrative & verified highlights */}
          <AnimatedSection direction="right">
            <div className="lg:pl-6">
              <span className="inline-block rounded-full bg-accent-muted px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-dark">
                {natureHighlight.badge}
              </span>

              <h2 className="mt-3 sm:mt-4 font-serif text-3xl font-bold text-charcoal sm:text-4xl md:text-5xl leading-tight">
                {natureHighlight.title}
              </h2>

              <p className="mt-3 sm:mt-4 text-base leading-relaxed text-slate-deep md:text-lg">
                {natureHighlight.description}
              </p>

              {/* 4 Feature mini-cards */}
              <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-cream/40 p-4 transition-all duration-200 hover:bg-cream"
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <h3 className="font-serif text-sm font-semibold text-charcoal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-deep">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <CTAButton href="/contact" size="md" id="nature-enquire-cta">
                  Enquire for Stay
                  <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton
                  href="/rooms"
                  variant="outline"
                  size="md"
                  id="nature-rooms-cta"
                >
                  Explore Rooms
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

    </section>
  );
}
