import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { rooms, facilities } from '@/lib/content';
import { getFacilityIcon, Building2, Trees, ShieldCheck } from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import RoomCard from '@/components/ui/RoomCard';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.rooms.title,
  description: STRINGS.seo.pages.rooms.description,
  path: '/rooms',
});

export default function RoomsPage() {
  const { rooms: roomsStrings, facilities: facilitiesStrings } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: roomsStrings.header.title, href: '/rooms' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="relative overflow-hidden bg-charcoal py-20 md:py-28 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={IMAGES.rooms['premium-room']}
            alt="liv.inn Premium Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Accommodation • Pune, Maharashtra
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {roomsStrings.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {roomsStrings.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Inventory & Architectural Notice Banner */}
      <section className="border-b border-border bg-ivory py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-deep">
            <span className="flex items-center gap-2 font-medium">
              <Building2 className="h-4 w-4 text-accent" />
              25 Total Rooms Inventory
            </span>
            <span className="hidden sm:inline text-border-gold">•</span>
            <span className="flex items-center gap-2 font-medium">
              5 Rooms on Each Floor (Across 5 Floors)
            </span>
            <span className="hidden sm:inline text-border-gold">•</span>
            <span className="flex items-center gap-2 font-medium">
              <Trees className="h-4 w-4 text-accent" />
              Pleasant Nature-Oriented Views
            </span>
          </div>
        </div>
      </section>

      {/* Room Showcase - Reusable Architecture */}
      <section className="py-20 md:py-28 bg-white" id="room-showcase">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.id} delay={0.1 * i}>
                <RoomCard room={room} detailed={true} />
              </AnimatedSection>
            ))}
          </div>

          {/* Pricing Policy Disclaimer */}
          <div className="mt-12 rounded-2xl border border-border bg-cream/50 p-6 text-center text-xs text-slate-deep">
            <p className="font-semibold text-charcoal text-sm">
              Room Pricing & Availability Confirmation
            </p>
            <p className="mt-1 max-w-2xl mx-auto leading-relaxed text-slate-medium">
              In accordance with official property guidelines, final room pricing, applicable taxes, and live room availability are confirmed directly upon enquiry submission. Please contact our front desk team for current tariffs and customized stay packages in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Property Facilities & Services */}
      <section className="bg-cream/40 py-20 md:py-28 border-t border-border" id="facilities">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={roomsStrings.facilitiesTitle}
              subtitle={roomsStrings.facilitiesSubtitle}
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    {getFacilityIcon(f.icon, 'h-6 w-6')}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-charcoal">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-deep leading-relaxed">
                      {f.description}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-accent-dark">
                      {f.availability}
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
