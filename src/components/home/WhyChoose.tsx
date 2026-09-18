'use client';

import { getWhyChooseIcon } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyChoose() {
  const { whyChoose } = STRINGS.home;

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={whyChoose.title}
            subtitle={whyChoose.subtitle}
          />
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-border-light bg-white p-7 sm:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {getWhyChooseIcon(feature.icon)}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-deep">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

    </section>
  );
}
