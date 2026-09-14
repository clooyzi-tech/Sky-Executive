import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { getFacilityIcon } from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';

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
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              {about.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              {about.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading title={about.story.title} />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-slate-deep md:text-lg">
              <p>{about.story.p1}</p>
              <p>{about.story.p2}</p>
              <p>{about.story.p3}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={about.values.title}
              subtitle={about.values.subtitle}
            />
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((value, i) => (
              <AnimatedSection key={value.title} delay={0.08 * i}>
                <div className="rounded-2xl border border-border-light bg-white p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
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

      {/* Facilities */}
      <section className="py-20 md:py-28">
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
                <div className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-300 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">{facility.title}</h3>
                    <p className="mt-1 text-sm text-slate-deep">
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
