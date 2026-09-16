'use client';

import { getWhyChooseIcon } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionDivider from '@/components/ui/SectionDivider';

export default function WhyChoose() {
  const { whyChoose } = STRINGS.home;

  return (
    <section className="pt-[26px] pb-0" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={whyChoose.title}
            subtitle={whyChoose.subtitle}
          />
        </AnimatedSection>

        <div className="mt-[16px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-md">
                <div className="mb-[16px] flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {getWhyChooseIcon(feature.icon)}
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-[16px] text-sm leading-relaxed text-slate-deep">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Luxury Section Divider */}
      <SectionDivider />
    </section>
  );
}
