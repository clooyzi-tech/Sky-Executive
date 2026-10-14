import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, aboutPageJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import {
  getFacilityIcon,
  Building2,
  Trees,
  Clock,
  Bed,
  UtensilsCrossed,
  MapPin,
} from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BookingCTA from '@/components/home/BookingCTA';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.about.title,
  description: STRINGS.seo.pages.about.description,
  path: '/about',
});

const statIcons: Record<string, React.ReactNode> = {
  'Property Type': <Building2 className="h-5 w-5 text-[var(--gold-bright)]" />,
  'Ambience': <Trees className="h-5 w-5 text-[var(--gold-bright)]" />,
  'Front Desk': <Clock className="h-5 w-5 text-[var(--gold-bright)]" />,
  'Primary Category': <Bed className="h-5 w-5 text-[var(--gold-bright)]" />,
  'In-Room Dining': <UtensilsCrossed className="h-5 w-5 text-[var(--gold-bright)]" />,
  'Location': <MapPin className="h-5 w-5 text-[var(--gold-bright)]" />,
};

export default function AboutPage() {
  const { about, facilities } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd()),
        }}
      />

      {/* Page Header (Royal Navy Deep Band) */}
      <section className="relative overflow-hidden on-navy bg-[var(--navy-deep)] py-20 md:py-28 text-white border-b border-[var(--gold)]/30 select-none">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={IMAGES.hero}
            alt="Hotel Sky Executive Pune"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/80 to-[var(--navy-deep)]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 shadow-xs">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--gold-bright)]">
                Boutique Hospitality • Pune, Maharashtra
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">ABOUT </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">HOTEL SKY EXECUTIVE</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="font-body mx-auto max-w-2xl text-base sm:text-lg text-[var(--on-navy)] font-medium leading-relaxed">
              {about.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Verified Hotel Profile Grid (Warm Cream Deep Band) */}
      <section className="border-b border-[var(--line-gold)] bg-[var(--cream-deep)] py-12 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 text-center">
            {about.overviewStats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-[6px] border border-[var(--gold)] bg-[var(--cream)] p-5 shadow-[0_4px_12px_rgba(11,31,63,0.06)] hover:shadow-[0_10px_24px_rgba(184,134,43,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)]" />
                <div className="w-10 h-10 rounded-full bg-[var(--navy-deep)] border border-[var(--gold)] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {statIcons[stat.label] || <Building2 className="h-5 w-5 text-[var(--gold-bright)]" />}
                </div>
                <p className="font-display text-base sm:text-lg lg:text-xl font-extrabold text-[var(--navy-ink)] group-hover:text-[var(--gold)] transition-colors leading-tight">
                  {stat.value}
                </p>
                <p className="font-display mt-1.5 text-[10px] sm:text-[11px] font-bold text-[var(--brown-gold)] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with Side Imagery (Warm Cream Band) */}
      <section className="py-16 md:py-24 bg-[var(--cream)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                  Boutique Philosophy
                </span>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[var(--navy-ink)]">
                  {about.story.title}
                </h2>
                <div className="mt-2 h-[2px] w-12 bg-[var(--gold)]" />

                <div className="mt-6 space-y-4 font-body text-sm sm:text-base leading-relaxed text-[var(--ink)]">
                  <p>{about.story.p1}</p>
                  <p>{about.story.p2}</p>
                  <p>{about.story.p3}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/rooms"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider px-7 py-3.5 shadow-sm transition-all"
                    id="about-explore-rooms"
                  >
                    Explore Our Rooms
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[var(--navy-ink)] hover:bg-[var(--navy-ink)] text-[var(--navy-ink)] hover:text-[var(--cream)] font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all"
                    id="about-contact"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Side Image with Sharp Corners & 1px Gold Frame */}
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-[var(--gold)] bg-[var(--navy-deep)] shadow-[0_10px_28px_rgba(11,31,63,0.12)]">
                <Image
                  src={IMAGES.natureView}
                  alt="Scenic greenery and nature-oriented perspective at Hotel Sky Executive"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-[6px] bg-[var(--navy-deep)]/90 border border-[var(--gold-bright)]/40 p-4 text-white backdrop-blur-md">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-[var(--gold-bright)]">
                    Calm, Nature-Oriented Comfort
                  </p>
                  <p className="font-body text-xs text-[var(--on-navy)]/80 mt-1">
                    An uncluttered boutique property designed for peaceful living in Pune.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Commitments / Values (Cream Deep Band) */}
      <section className="bg-[var(--cream-deep)] py-16 md:py-24 border-y border-[var(--line-gold)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
              Operational Standards
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)] mt-1">
              {about.values.title}
            </h2>
            <p className="font-body mt-2 text-sm sm:text-base text-[var(--ink)]">
              {about.values.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.items.map((value, i) => (
              <AnimatedSection key={value.title} delay={0.08 * i}>
                <div className="relative h-full rounded-[6px] border border-[var(--gold)] bg-[var(--cream)] p-6 sm:p-7 shadow-[0_4px_16px_rgba(11,31,63,0.08)] hover:shadow-[0_12px_28px_rgba(184,134,43,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)]" />
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--navy-deep)] border-2 border-[var(--gold-bright)] text-[var(--gold-bright)] font-display font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-base sm:text-lg font-extrabold uppercase text-[var(--navy-ink)] group-hover:text-[var(--gold)] transition-colors">
                      {value.title}
                    </h3>
                    <p className="font-body mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--ink)]">
                      {value.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Facilities & Services */}
      <section className="py-16 md:py-24 bg-[var(--cream)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
              Amenities
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy-ink)] mt-1">
              {about.facilities.title}
            </h2>
            <p className="font-body mt-2 text-sm sm:text-base text-[var(--ink)]">
              {about.facilities.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, i) => (
              <AnimatedSection key={facility.title} delay={0.08 * i}>
                <div className="relative flex items-start gap-4 rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-5 sm:p-6 shadow-xs hover:shadow-[0_10px_24px_rgba(11,31,63,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] border-2 border-[var(--gold-bright)] text-[var(--gold-bright)] shadow-sm group-hover:scale-105 transition-transform">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-extrabold uppercase text-[var(--navy-ink)] group-hover:text-[var(--gold)] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="font-body mt-1.5 text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Property Governance & Management Accountability (Framed Card) */}
      <section className="bg-[var(--cream-deep)] py-16 sm:py-20 border-t border-[var(--line-gold)] select-none">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="card-framed p-6 sm:p-8 md:p-10 shadow-[0_10px_28px_rgba(11,31,63,0.12)] bg-[var(--cream)]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-[11px] font-display font-bold tracking-wider uppercase mb-4">
                <CrownMark size="sm" variant="gold" />
                <span>Entity Governance & Operational Accountability</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[var(--navy-ink)] mb-3">
                Property Leadership & Operational Transparency
              </h2>
              <p className="font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed mb-6 font-medium">
                Hotel Sky Executive operates as a verified hospitality entity located at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216. Our on-site reception and security operations are staffed 24 hours daily to maintain rigorous standards of hygiene, quiet rest, and prompt guest care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body text-[var(--ink)] pt-4 border-t border-[var(--line-gold)]">
                <div>
                  <span className="font-display font-bold text-[var(--navy-ink)] block uppercase tracking-wider text-[11px]">Management Team</span>
                  <span className="mt-1 block">Overseen by Hotel Sky Executive Management [OWNER TO CONFIRM: Founder / General Manager name]</span>
                </div>
                <div>
                  <span className="font-display font-bold text-[var(--navy-ink)] block uppercase tracking-wider text-[11px]">Direct Front Desk</span>
                  <span className="mt-1 block font-bold text-[var(--navy-ink)]">+91 80077 24646 (24/7 Hotline)</span>
                </div>
                <div>
                  <span className="font-display font-bold text-[var(--navy-ink)] block uppercase tracking-wider text-[11px]">Corporate Enquiries</span>
                  <span className="mt-1 block">help.skyexecutive@gmail.com</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
