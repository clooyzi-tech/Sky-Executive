'use client';

import Image from 'next/image';
import { getFacilityIcon, ArrowRight, UtensilsCrossed, Sparkles } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { facilities } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

export default function ServicesSection() {
  const { servicesOverview } = STRINGS.home;

  return (
    <section className="py-20 md:py-28 bg-cream/40" id="facilities-and-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={servicesOverview.title}
            subtitle={servicesOverview.subtitle}
          />
        </AnimatedSection>

        {/* 6 Attractive Cards: Wi-Fi, Parking, Cloud Kitchen, Laundry, Housekeeping, 24/7 Support */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, idx) => (
            <AnimatedSection key={item.id} delay={0.08 * idx}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-xs transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-charcoal">
                    {getFacilityIcon(item.icon, 'h-6 w-6')}
                  </div>
                  <span className="rounded-full bg-cream px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-deep">
                    Verified
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-lg font-bold text-charcoal group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-deep">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between text-xs text-slate-medium">
                  <span className="font-medium text-accent-dark">
                    {item.availability}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Cloud Kitchen Dedicated Spotlight */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-border-gold bg-charcoal text-white shadow-2xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                  <UtensilsCrossed className="h-3.5 w-3.5" />
                  In-House Food Facility
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl text-white">
                  Dedicated Cloud Kitchen for Staying Guests
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80 font-light">
                  Enjoy wholesome meals prepared on order through our dedicated in-house cloud kitchen. Whether a calm breakfast in bed, a midday coffee, or a cozy dinner, fresh food is brought directly to your room.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/90">
                  <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                    Freshly Prepared
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                    Direct Room Delivery
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                    Operational Hours: TBC
                  </span>
                </div>

                <div className="mt-8">
                  <CTAButton
                    href="/contact"
                    className="bg-accent text-charcoal font-semibold hover:bg-accent-light"
                    id="cloud-kitchen-enquire"
                  >
                    Enquire About Stay & Dining
                    <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                </div>
              </div>

              <div className="relative aspect-[16/10] lg:h-full w-full overflow-hidden bg-charcoal-surface min-h-[300px]">
                <Image
                  src={IMAGES.cloudKitchen}
                  alt="Hotel Sky Executive Cloud Kitchen breakfast presentation on wooden tray"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
