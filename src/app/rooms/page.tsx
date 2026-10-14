import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, roomsPageJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { Building2, Trees, Clock } from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import RoomsPreview from '@/components/home/RoomsPreview';
import ExperienceSection from '@/components/home/ExperienceSection';
import BookingCTA from '@/components/home/BookingCTA';
import AnswerBlock from '@/components/ui/AnswerBlock';
import FAQSection from '@/components/ui/FAQSection';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import { AEO_CONTENT } from '@/content/aeo';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.rooms.title,
  description: STRINGS.seo.pages.rooms.description,
  path: '/rooms',
});

export default function RoomsPage() {
  const { rooms: roomsStrings } = STRINGS;
  const { rooms: aeoRooms } = AEO_CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomsPageJsonLd(aeoRooms.faqs)),
        }}
      />

      {/* Page Header (Royal Navy Deep Band) */}
      <section className="relative overflow-hidden on-navy bg-[var(--navy-deep)] py-20 md:py-28 text-white border-b border-[var(--gold)]/30 select-none">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={IMAGES.rooms['premium-room']}
            alt="Hotel Sky Executive Premium Room"
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
                Boutique Accommodation • Pune–Nagar Road
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">EXECUTIVE </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">ROOMS & AMENITIES</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="font-body mx-auto max-w-2xl text-base sm:text-lg text-[var(--on-navy)] font-medium leading-relaxed">
              {roomsStrings.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Answer Block (AEO Specs First) */}
      <AnswerBlock data={aeoRooms.answerBlock} />

      {/* Operational Notice Banner (Warm Cream Deep Band) */}
      <section className="border-b border-[var(--line-gold)] bg-[var(--cream-deep)] py-5 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--navy-ink)]">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[var(--gold)]" />
              200 Sq. Ft. Queen Bed Layout
            </span>
            <span className="hidden sm:inline text-[var(--gold)]/40">•</span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--gold)]" />
              Check-in: 11:00 AM • Check-out: 10:00 AM
            </span>
            <span className="hidden sm:inline text-[var(--gold)]/40">•</span>
            <span className="flex items-center gap-2">
              <Trees className="h-4 w-4 text-[var(--gold)]" />
              Quiet Nature-Facing Ambience
            </span>
          </div>
        </div>
      </section>

      {/* Room Showcase — Signature Double Bed Room */}
      <RoomsPreview id="room-showcase" isAllRoomsPage={true} />

      {/* Best Rate Guarantee & Policy Box (Framed Card) */}
      <section className="bg-[var(--cream)] pb-16 pt-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="card-framed p-6 sm:p-8 text-center bg-[var(--cream-deep)]">
            <h3 className="font-display font-extrabold text-base sm:text-lg uppercase text-[var(--navy-ink)]">
              Best Rate Direct Guarantee & Booking Policy
            </h3>
            <p className="font-body mt-2 max-w-3xl mx-auto leading-relaxed text-xs sm:text-sm text-[var(--ink)]">
              Live seasonal tariffs, applicable taxes, and room availability are confirmed directly upon enquiry submission. Enjoy our{' '}
              <Link href="/location" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                convenient location near Sanaswadi and Lonikand industrial belts
              </Link>
              , and{' '}
              <Link href="/guest-information" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
                view complete guest policies and check-in guidelines
              </Link>{' '}
              for digital arrival instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities & Amenities Detail */}
      <div id="facilities">
        <ExperienceSection />
      </div>

      {/* Visible FAQ Accordions */}
      <FAQSection
        faqs={aeoRooms.faqs}
        title="Executive Room & Booking FAQs"
        subtitle="Verified details on check-in, extra beds, cloud kitchen dining, and room amenities."
      />

      {/* Lead Generation CTA Banner */}
      <BookingCTA />
    </>
  );
}
