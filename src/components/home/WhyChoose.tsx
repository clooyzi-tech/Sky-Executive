'use client';

import {
  MapPin,
  Heart,
  Shield,
  Sparkles,
  Wifi,
  IndianRupee,
} from 'lucide-react';
import { whyChooseFeatures } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Wifi: <Wifi className="h-6 w-6" />,
  IndianRupee: <IndianRupee className="h-6 w-6" />,
};

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Liv.inn"
            subtitle="Everything you need for a perfect stay"
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {iconMap[feature.icon] ?? <Sparkles className="h-6 w-6" />}
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-deep">
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
