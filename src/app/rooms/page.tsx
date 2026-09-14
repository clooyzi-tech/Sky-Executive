import type { Metadata } from 'next';
import {
  Users,
  Bed,
  ArrowRight,
  Check,
  getFacilityIcon,
} from '@/config/icons';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { getRoomImage } from '@/config/image';
import { whatsappUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import CTAButton from '@/components/ui/CTAButton';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.rooms.title,
  description: STRINGS.seo.pages.rooms.description,
  path: '/rooms',
});

export default function RoomsPage() {
  const { rooms, facilities, common } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: rooms.header.title, href: '/rooms' }])
          ),
        }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              {rooms.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              {rooms.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.list.map((room, i) => (
              <AnimatedSection key={room.id} delay={0.1 * i}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <ImagePlaceholder
                      src={getRoomImage(room.id)}
                      alt={room.name}
                      aspectRatio="video"
                      className="shadow-lg"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                      {room.name}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-deep">
                      {room.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-4 flex items-center gap-6 text-sm text-slate-medium">
                      <span className="flex items-center gap-1.5">
                        <Bed className="h-4 w-4 text-accent" />
                        {room.bedType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-accent" />
                        {common.labels.upTo} {room.maxOccupancy} {rooms.guestsSuffix}
                      </span>
                    </div>

                    {/* Amenities list */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                        {rooms.amenitiesTitle}
                      </h4>
                      <ul className="mt-3 grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity) => (
                          <li
                            key={amenity}
                            className="flex items-center gap-2 text-sm text-slate-deep"
                          >
                            <Check className="h-3.5 w-3.5 text-accent" />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <CTAButton
                      href={whatsappUrl(
                        STRINGS.contact.prefilledMessages.roomEnquiry(room.name)
                      )}
                      external
                      className="mt-6"
                      id={`room-enquire-${room.id}`}
                    >
                      {STRINGS.home.roomsPreview.ctaEnquire}
                      <ArrowRight className="h-4 w-4" />
                    </CTAButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-cream/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title={rooms.facilitiesTitle}
              subtitle={rooms.facilitiesSubtitle}
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                    {getFacilityIcon(f.icon, 'h-5 w-5')}
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-deep">
                      {f.description}
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
