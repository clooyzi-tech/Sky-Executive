'use client';

import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Introduction() {
  const { introduction } = STRINGS.home;

  return (
    <section className="py-20 md:py-28" id="introduction">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={introduction.title}
            subtitle={introduction.subtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-base leading-relaxed text-slate-deep md:text-lg">
              {introduction.p1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-deep md:text-lg">
              {introduction.p2}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
