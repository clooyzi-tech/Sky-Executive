import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { Building2, Trees } from '@/config/icons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import RoomsPreview from '@/components/home/RoomsPreview';
import ExperienceSection from '@/components/home/ExperienceSection';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.rooms.title,
  description: STRINGS.seo.pages.rooms.description,
  path: '/rooms',
});

export default function RoomsPage() {
  const { rooms: roomsStrings } = STRINGS;

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

      {/* Room Showcase — Premium UI matching Reference Design */}
      <RoomsPreview id="room-showcase" isAllRoomsPage={true} />

      {/* Pricing Policy Disclaimer */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-cream/50 p-6 text-center text-xs text-slate-deep">
            <p className="font-semibold text-charcoal text-sm">
              Room Pricing & Availability Confirmation
            </p>
            <p className="mt-1 max-w-2xl mx-auto leading-relaxed text-slate-medium">
              In accordance with official property guidelines, final room pricing, applicable taxes, and live room availability are confirmed directly upon enquiry submission. Please contact our front desk team for current tariffs and customized stay packages in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Property Facilities & Services — Premium Experience UI with All Available Services */}
      <ExperienceSection id="facilities" isAllServicesPage={true} />

      <BookingCTA />
    </>
  );
}
