import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { getFacilityIcon, Building2, Trees, Sparkles, Clock, Check } from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';
import CTAButton from '@/components/ui/CTAButton';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.about.title,
  description: STRINGS.seo.pages.about.description,
  path: '/about',
});

export default function AboutPage() {
  const { about, facilities } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: about.header.title, href: '/about' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="relative overflow-hidden bg-charcoal py-20 md:py-28 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={IMAGES.hero}
            alt="liv.inn Pune"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Boutique Hospitality • Pune
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {about.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {about.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Verified Hotel Profile Grid */}
      <section className="border-b border-border bg-ivory py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 text-center">
            {about.overviewStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white p-4 shadow-2xs"
              >
                <p className="font-serif text-lg font-bold text-charcoal sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with Side Imagery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  Boutique Philosophy
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                  {about.story.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-deep">
                  <p>{about.story.p1}</p>
                  <p>{about.story.p2}</p>
                  <p>{about.story.p3}</p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <CTAButton href="/rooms" id="about-explore-rooms">
                    Explore Our Rooms
                  </CTAButton>
                  <CTAButton
                    href="/contact"
                    variant="outline"
                    id="about-contact"
                  >
                    Get in Touch
                  </CTAButton>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-gold shadow-xl">
                <Image
                  src={IMAGES.natureView}
                  alt="Scenic greenery and nature-oriented perspective at liv.inn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-charcoal/80 p-4 text-white backdrop-blur-md">
                  <p className="font-serif text-sm font-semibold">
                    Calm, Nature-Oriented Comfort
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    An uncluttered 25-room property designed for peaceful living in Pune.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Commitments / Values */}
      <section className="bg-cream/50 py-20 md:py-28 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={about.values.title}
              subtitle={about.values.subtitle}
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.items.map((value, i) => (
              <AnimatedSection key={value.title} delay={0.08 * i}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent font-serif font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-deep">
                    {value.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Facilities & Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={about.facilities.title}
              subtitle={about.facilities.subtitle}
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, i) => (
              <AnimatedSection key={facility.title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-ivory p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-charcoal">
                      {facility.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-deep leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
