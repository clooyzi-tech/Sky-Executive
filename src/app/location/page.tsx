import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  HeartPulse,
  Building,
  GraduationCap,
  Compass,
  Plane,
  Train,
} from '@/config/icons';
import { generatePageMetadata, breadcrumbJsonLd, hotelJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { contactConfig } from '@/content';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.location.title,
  description: STRINGS.seo.pages.location.description,
  path: '/location',
});

export default function LocationPage() {
  const { location, contact } = STRINGS;

  const categoryIcons: Record<string, React.ReactNode> = {
    airport: <Plane className="h-6 w-6 text-accent" />,
    railway: <Train className="h-6 w-6 text-accent" />,
    hospitals: <HeartPulse className="h-6 w-6 text-accent" />,
    'mnc-offices': <Building className="h-6 w-6 text-accent" />,
    schools: <GraduationCap className="h-6 w-6 text-accent" />,
    conveniences: <Compass className="h-6 w-6 text-accent" />,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: location.header.title, href: '/location' }])
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
      <section className="bg-charcoal py-20 md:py-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Pune–Nagar Road, Lonikand • Pune
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {location.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {location.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Address & Pune Map Area */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Verified Address Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                    Official Hotel Coordinates
                  </span>
                  <h2 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                    {location.findUs.title}
                  </h2>
                  <div className="mt-3 h-0.5 w-14 bg-accent" />
                </div>

                {/* Full Verified Address Card */}
                <div className="rounded-2xl border border-border-gold bg-ivory p-6 shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif text-lg font-bold text-charcoal">
                          {contact.address.line1}
                        </h3>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                          Verified Address
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-deep leading-relaxed">
                        <strong>Full Address:</strong> {contactConfig.address.fullAddressDisplay}<br />
                        <strong>Landmark:</strong> {contactConfig.address.landmark}
                      </p>
                      <div className="mt-3 rounded-lg bg-white p-3 text-xs text-slate-medium border border-border-light">
                        <span className="font-semibold text-charcoal">Driving Landmark: </span>
                        Located on the main Pune–Nagar Road at Jaywant Towers, directly adjacent to Jaywant Warehouse in Lonikand. Easily accessible with wide roadside entry into our secure on-site parking lot. Please{' '}
                        <Link href="/contact" className="text-accent font-semibold hover:underline">
                          contact our 24/7 reception team for arrival guidance
                        </Link>{' '}
                        or{' '}
                        <Link href="/rooms" className="text-accent font-semibold hover:underline">
                          view our executive double bed rooms for your transit stay
                        </Link>
                        .
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verified Contact Numbers */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-ivory p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-medium">Front Desk & Call</p>
                        <a
                          href={phoneUrl()}
                          className="text-sm font-bold text-charcoal hover:text-accent transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-emerald-800 bg-emerald-50 rounded px-2 py-0.5 inline-block font-medium">
                      Verified • Available 24/7
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-ivory p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-medium">Email Address</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm font-bold text-charcoal hover:text-accent transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-emerald-800 bg-emerald-50 rounded px-2 py-0.5 inline-block font-medium">
                      Inquiries monitored 24/7
                    </p>
                  </div>
                </div>

                {/* Check-in / Check-out timing note */}
                <div className="rounded-xl border border-border-gold bg-accent-muted/30 p-4 text-xs text-slate-deep">
                  <div className="flex items-center gap-2 font-semibold text-charcoal">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Check-in & Check-out Schedule</span>
                  </div>
                  <p className="mt-1 leading-relaxed text-slate-deep">
                    Standard Check-in: <strong>11:00 AM</strong> • Standard Check-out: <strong>10:00 AM</strong>. Front desk reception is active 24/7 for guest check-in, key handover, and local travel assistance. You can{' '}
                    <Link href="/guest-information" className="text-accent font-semibold hover:underline">
                      check standard check-in hours and late arrival policies
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <CTAButton
                    href={contact.googleMapsUrl}
                    external
                    id="location-open-maps"
                  >
                    Open in Google Maps
                  </CTAButton>
                  <CTAButton
                    href="/contact"
                    variant="outline"
                    id="location-enquire-btn"
                  >
                    Submit Stay Enquiry
                  </CTAButton>
                </div>
              </div>
            </AnimatedSection>

            {/* Wagholi Pune Map Integration */}
            <AnimatedSection delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
                <iframe
                  src={contact.googleMapsEmbed}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.findUs.mapTitle}
                  className="w-full"
                />

                <div className="border-t border-border bg-ivory p-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-charcoal">
                        Jaywant Towers, Lonikand, Pune-412216
                      </p>
                      <p className="text-[11px] text-slate-medium mt-0.5">
                        {contactConfig.maps.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Surrounding Establishments & Connectivity */}
      <section className="bg-cream/40 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={location.attractions.title}
              subtitle={location.attractions.subtitle}
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactConfig.nearbyCategories.map((item, i) => (
              <AnimatedSection key={item.id} delay={0.08 * i}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted">
                      {categoryIcons[item.id] ?? <MapPin className="h-6 w-6 text-accent" />}
                    </div>
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[10px] font-semibold text-slate-deep border border-border">
                      {item.statusText}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">
                    {item.category}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-deep">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-light text-[11px] text-slate-medium italic">
                    {item.samplePlaceholder}
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
