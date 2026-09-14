import type { Metadata } from 'next';
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  ExternalLink,
  Train,
  Plane,
  ShoppingBag,
  Waves,
} from 'lucide-react';
import { generatePageMetadata, breadcrumbJsonLd, hotelJsonLd } from '@/lib/seo';
import { brand, contact, nearbyAttractions } from '@/lib/content';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = generatePageMetadata({
  title: 'Location',
  description: `Find ${brand.name} in Mumbai. Get directions, view our address, and explore nearby attractions.`,
  path: '/location',
});

const attractionIcons: Record<string, React.ReactNode> = {
  'Chhatrapati Shivaji Maharaj International Airport': <Plane className="h-5 w-5" />,
  'Andheri Railway Station': <Train className="h-5 w-5" />,
  'Infinity Mall': <ShoppingBag className="h-5 w-5" />,
  'Versova Beach': <Waves className="h-5 w-5" />,
};

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: 'Location', href: '/location' }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelJsonLd()),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Our Location
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Conveniently located in the heart of Mumbai
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Address Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                    Find Us
                  </h2>
                  <div className="mt-1 h-px w-12 bg-accent" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Address</h3>
                    <p className="mt-1 text-slate-deep leading-relaxed">
                      {contact.address.line1}<br />
                      {contact.address.line2}<br />
                      {contact.address.city}, {contact.address.state} {contact.address.pincode}<br />
                      {contact.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Phone</h3>
                    <a
                      href={phoneUrl()}
                      className="mt-1 block text-accent transition-colors hover:text-accent-dark"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Email</h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block text-accent transition-colors hover:text-accent-dark"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <CTAButton
                  href={contact.googleMapsUrl}
                  external
                  className="mt-4"
                  id="location-get-directions"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </CTAButton>
              </div>
            </AnimatedSection>

            {/* Map Embed */}
            <AnimatedSection delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-border-light shadow-lg">
                <iframe
                  src={contact.googleMapsEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${brand.name} location on Google Maps`}
                  className="w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Nearby Attractions"
              subtitle="Explore what's around us"
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyAttractions.map((attraction, i) => (
              <AnimatedSection key={attraction.name} delay={0.08 * i}>
                <div className="rounded-2xl border border-border-light bg-white p-6 text-center transition-all duration-300 hover:shadow-md">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    {attractionIcons[attraction.name] ?? (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-4 font-medium text-charcoal">
                    {attraction.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {attraction.distance}
                  </p>
                  <p className="mt-2 text-sm text-slate-deep">
                    {attraction.description}
                  </p>
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
