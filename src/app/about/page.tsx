import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { brand, facilities } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';
import {
  Wifi,
  ShieldCheck,
  ConciergeBell,
  Car,
  Sparkles,
  Luggage,
} from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
  description: `Learn about ${brand.name} — a modern boutique hotel in Mumbai dedicated to providing comfortable stays, warm hospitality, and excellent service.`,
  path: '/about',
});

const facilityIcons: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  ConciergeBell: <ConciergeBell className="h-6 w-6" />,
  Car: <Car className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Luggage: <Luggage className="h-6 w-6" />,
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: 'About', href: '/about' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              About {brand.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Our story, our values, and what makes us different
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Our Story" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-slate-deep md:text-lg">
              <p>
                {brand.name} was born from a simple yet powerful idea: every traveller deserves 
                a space that feels like home — clean, comfortable, and genuinely welcoming. 
                In a city as dynamic as Mumbai, we saw an opportunity to create a hotel that 
                blends modern comfort with the warmth of Indian hospitality.
              </p>
              <p>
                Our property has been thoughtfully designed to cater to both business and leisure 
                travellers. Every detail, from the quality of our bedding to the efficiency of 
                our service, reflects our commitment to making your stay exceptional.
              </p>
              <p>
                Whether you&apos;re in Mumbai for a conference, exploring the city&apos;s rich culture, or 
                simply need a comfortable place to rest, {brand.name} is here to ensure you feel 
                at ease from the moment you arrive.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="What We Stand For"
              subtitle="The values that guide everything we do"
            />
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Genuine Hospitality',
                text: 'We treat every guest like family. Our team goes above and beyond to ensure your comfort and satisfaction.',
              },
              {
                title: 'Uncompromising Cleanliness',
                text: 'Hygiene is non-negotiable. Our rooms are meticulously cleaned and maintained to the highest standards.',
              },
              {
                title: 'Thoughtful Design',
                text: 'Every space in our hotel is designed with purpose — to provide functionality, comfort, and aesthetic appeal.',
              },
              {
                title: 'Local Connection',
                text: 'We help guests experience the best of Mumbai through curated local recommendations and travel assistance.',
              },
              {
                title: 'Transparent Service',
                text: 'No hidden charges, no surprises. We believe in honest pricing and transparent communication.',
              },
              {
                title: 'Continuous Improvement',
                text: 'We actively seek guest feedback to refine our services and stay ahead of expectations.',
              },
            ].map((value, i) => (
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
              title="Our Facilities"
              subtitle="Everything you need under one roof"
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, i) => (
              <AnimatedSection key={facility.title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-300 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    {facilityIcons[facility.icon] ?? (
                      <Sparkles className="h-6 w-6" />
                    )}
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
