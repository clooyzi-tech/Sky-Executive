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
import { generatePageMetadata, locationPageJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { contactConfig } from '@/content';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BookingCTA from '@/components/home/BookingCTA';
import AnswerBlock from '@/components/ui/AnswerBlock';
import FAQSection from '@/components/ui/FAQSection';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import { AEO_CONTENT } from '@/content/aeo';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.location.title,
  description: STRINGS.seo.pages.location.description,
  path: '/location',
});

export default function LocationPage() {
  const { location, contact } = STRINGS;

  const categoryIcons: Record<string, React.ReactNode> = {
    airport: <Plane className="h-5 w-5 text-[var(--cream)]" />,
    railway: <Train className="h-5 w-5 text-[var(--cream)]" />,
    hospitals: <HeartPulse className="h-5 w-5 text-[var(--cream)]" />,
    'mnc-offices': <Building className="h-5 w-5 text-[var(--cream)]" />,
    schools: <GraduationCap className="h-5 w-5 text-[var(--cream)]" />,
    conveniences: <Compass className="h-5 w-5 text-[var(--cream)]" />,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationPageJsonLd(AEO_CONTENT.location.faqs)),
        }}
      />

      {/* Page Header (Royal Navy Deep Band) */}
      <section className="on-navy bg-[var(--navy-deep)] py-20 md:py-28 text-white border-b border-[var(--gold)]/30 select-none">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 shadow-xs">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--gold-bright)]">
                Prime Transit Corridor • Lonikand, Pune
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">HOTEL LOCATION & </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">DIRECTIONS</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="font-body mx-auto max-w-2xl text-base sm:text-lg text-[var(--on-navy)] font-medium leading-relaxed">
              {location.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Answer Block (AEO Location & Transit First) */}
      <AnswerBlock data={AEO_CONTENT.location.answerBlock} />

      {/* Address & Highway Map Area */}
      <section className="py-16 md:py-24 bg-[var(--cream)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Verified Address Information */}
            <AnimatedSection>
              <div className="space-y-6">
                <div>
                  <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                    Official Hotel Coordinates
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[var(--navy-ink)]">
                    {location.findUs.title}
                  </h2>
                  <div className="mt-2 h-[2px] w-14 bg-[var(--gold)]" />
                </div>

                {/* Full Verified Address Card (Card Framed) */}
                <div className="card-framed p-6 sm:p-7 bg-[var(--cream-deep)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)] shadow-xs">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-lg font-extrabold uppercase text-[var(--navy-ink)]">
                          {contact.address.line1}
                        </h3>
                        <span className="rounded-full bg-[var(--navy-deep)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--gold-bright)] border border-[var(--gold-bright)]/40 uppercase tracking-wider">
                          Verified Location
                        </span>
                      </div>
                      <p className="font-body mt-2 text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                        <strong className="text-[var(--navy-ink)]">Full Address:</strong> {contactConfig.address.fullAddressDisplay}<br />
                        <strong className="text-[var(--navy-ink)]">Landmark:</strong> {contactConfig.address.landmark}
                      </p>
                      <div className="mt-3.5 rounded-[6px] bg-[var(--cream)] p-3.5 text-xs text-[var(--ink)] border border-[var(--line-gold)] leading-relaxed">
                        <span className="font-display font-bold text-[var(--navy-ink)] uppercase">Driving Landmark: </span>
                        Located on the main Pune–Nagar Road at Jaywant Towers, directly adjacent to Jaywant Warehouse in Lonikand. Easily accessible with wide roadside entry into our secure on-site parking lot. Please{' '}
                        <Link href="/contact" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                          contact our 24/7 reception team for arrival guidance
                        </Link>{' '}
                        or{' '}
                        <Link href="/rooms" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                          view our executive double bed rooms for your transit stay
                        </Link>
                        .
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verified Contact Numbers */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)]">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-[10px] uppercase font-bold tracking-wider text-[var(--brown-gold)]">Front Desk & Call</p>
                        <a
                          href={phoneUrl()}
                          className="font-display text-sm font-bold text-[var(--navy-ink)] hover:text-[var(--gold)] transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-[var(--navy-deep)] font-semibold uppercase tracking-wider">
                      Verified • Available 24/7
                    </p>
                  </div>

                  <div className="rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)]">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-[10px] uppercase font-bold tracking-wider text-[var(--brown-gold)]">Email Enquiries</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="font-display text-xs sm:text-sm font-bold text-[var(--navy-ink)] hover:text-[var(--gold)] transition-colors truncate block"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-[var(--navy-deep)] font-semibold uppercase tracking-wider">
                      Inquiries monitored 24/7
                    </p>
                  </div>
                </div>

                {/* Check-in / Check-out timing note */}
                <div className="rounded-[6px] border border-[var(--line-gold)] bg-[var(--cream-deep)] p-4 text-xs">
                  <div className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-[var(--navy-ink)]">
                    <Clock className="h-4 w-4 text-[var(--gold)]" />
                    <span>Check-in & Check-out Schedule</span>
                  </div>
                  <p className="font-body mt-1.5 leading-relaxed text-[var(--ink)]">
                    Standard Check-in: <strong>11:00 AM</strong> • Standard Check-out: <strong>10:00 AM</strong>. Front desk reception is active 24/7 for guest check-in, key handover, and local travel assistance. You can{' '}
                    <Link href="/guest-information" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                      check standard check-in hours and late arrival policies
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider px-7 py-3.5 shadow-sm transition-all"
                    id="location-open-maps"
                  >
                    Open in Google Maps
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[var(--navy-ink)] hover:bg-[var(--navy-ink)] text-[var(--navy-ink)] hover:text-[var(--cream)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all"
                    id="location-enquire-btn"
                  >
                    Submit Stay Enquiry
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Pune Map Integration (6px radius card, gold border) */}
            <AnimatedSection delay={0.15}>
              <div className="relative overflow-hidden rounded-[6px] border border-[var(--gold)] shadow-[0_10px_28px_rgba(11,31,63,0.12)] bg-[var(--navy-deep)]">
                <iframe
                  src={contact.googleMapsEmbed}
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.findUs.mapTitle}
                  className="w-full"
                />

                <div className="border-t border-[var(--line-gold)] bg-[var(--cream-deep)] p-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-[var(--brown-gold)] shrink-0" />
                    <div>
                      <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--navy-ink)]">
                        Jaywant Towers, Lonikand, Pune-412216
                      </p>
                      <p className="font-body text-[11px] text-[var(--ink-muted)] mt-0.5">
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

      {/* Surrounding Establishments & Connectivity (Cream Deep Band) */}
      <section className="bg-[var(--cream-deep)] py-16 md:py-24 border-t border-[var(--line-gold)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
              Local Corridors
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)] mt-1">
              {location.attractions.title}
            </h2>
            <p className="font-body mt-2 text-sm sm:text-base text-[var(--ink)]">
              {location.attractions.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactConfig.nearbyCategories.map((item, i) => (
              <AnimatedSection key={item.id} delay={0.08 * i}>
                <div className="h-full rounded-[6px] border border-[var(--gold)] bg-[var(--cream)] p-6 shadow-xs transition-all duration-300 hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--cream)] shadow-xs">
                        {categoryIcons[item.id] ?? <MapPin className="h-5 w-5 text-[var(--cream)]" />}
                      </div>
                      <span className="rounded-full bg-[var(--cream-deep)] px-2.5 py-0.5 text-[10px] font-display font-bold uppercase tracking-wider text-[var(--brown-gold)] border border-[var(--line-gold)]">
                        {item.statusText}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-extrabold uppercase text-[var(--navy-ink)]">
                      {item.category}
                    </h3>

                    <p className="font-body mt-2 text-xs leading-relaxed text-[var(--ink)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--line-gold)] text-[11px] font-script text-[var(--brown-gold)]">
                    {item.samplePlaceholder}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visible Location FAQs */}
      <FAQSection
        faqs={AEO_CONTENT.location.faqs}
        title="Location & Travel FAQs"
        subtitle="Verified directions, driving landmarks, parking, and transit distances."
      />

      <BookingCTA />
    </>
  );
}
