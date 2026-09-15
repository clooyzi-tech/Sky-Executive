'use client';

import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { Building2, Trees, Sparkles, Clock } from '@/config/icons';

export default function Introduction() {
  const { introduction } = STRINGS.home;

  const keyFacts = [
    {
      icon: <Building2 className="h-6 w-6 text-accent" />,
      title: '25 Premium Rooms',
      desc: 'Balanced across 5 floors with 5 rooms on each floor for quiet comfort.',
    },
    {
      icon: <Trees className="h-6 w-6 text-accent" />,
      title: 'Nature-Oriented Views',
      desc: 'Lush greenery and refreshing perspectives overlooking Pune scenery.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      title: 'Spotless Cleanliness',
      desc: 'Strict daily housekeeping and sanitation across all rooms and spaces.',
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: '24/7 Guest Assistance',
      desc: 'Round-the-clock service support ready to assist whenever you need.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background" id="hotel-overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <SectionHeading
              title={introduction.title}
              subtitle={introduction.subtitle}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-4 text-base leading-relaxed text-slate-deep md:text-lg">
              <p>{introduction.p1}</p>
              <p>{introduction.p2}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* 4 Pillars of liv.inn Pune */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyFacts.map((fact, idx) => (
            <AnimatedSection key={fact.title} delay={0.1 * idx}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted">
                  {fact.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">
                  {fact.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-deep">
                  {fact.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
