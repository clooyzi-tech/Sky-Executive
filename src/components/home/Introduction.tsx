'use client';

import { brand } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Introduction() {
  return (
    <section className="py-20 md:py-28" id="introduction">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Welcome to Liv.inn"
            subtitle="A place where comfort meets convenience"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-base leading-relaxed text-slate-deep md:text-lg">
              Nestled in the vibrant heart of Mumbai, {brand.name} is more than just a hotel — it&apos;s 
              your home away from home. We believe that every traveller deserves a comfortable, clean, 
              and welcoming space, whether you&apos;re visiting for business, leisure, or just passing through.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-deep md:text-lg">
              Our thoughtfully designed rooms, attentive service, and prime location make 
              {' '}{brand.name} the ideal choice for discerning guests who value quality without 
              compromise. From the moment you step through our doors, expect nothing less than 
              genuine warmth and modern comfort.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
