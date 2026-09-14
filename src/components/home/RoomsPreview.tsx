'use client';

import { Users, Bed, ArrowRight } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { getRoomImage } from '@/config/image';
import { whatsappUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import CTAButton from '@/components/ui/CTAButton';

export default function RoomsPreview() {
  const { roomsPreview } = STRINGS.home;
  const { list } = STRINGS.rooms;
  const { labels } = STRINGS.common;

  return (
    <section className="bg-cream/40 py-20 md:py-28" id="rooms-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={roomsPreview.title}
            subtitle={roomsPreview.subtitle}
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((room, i) => (
            <AnimatedSection key={room.id} delay={0.1 * i}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Image */}
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    src={getRoomImage(room.id)}
                    alt={room.name}
                    aspectRatio="video"
                    className="rounded-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {room.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-deep">
                    {room.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-medium">
                    <span className="flex items-center gap-1">
                      <Bed className="h-3.5 w-3.5" />
                      {room.bedType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {labels.upTo} {room.maxOccupancy}
                    </span>
                  </div>

                  {/* Amenities preview */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-slate-deep"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-accent">
                        +{room.amenities.length - 4} {labels.more}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <CTAButton
                    href={whatsappUrl(
                      STRINGS.contact.prefilledMessages.roomEnquiryShort(room.name)
                    )}
                    external
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full"
                  >
                    {roomsPreview.ctaEnquire}
                    <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <CTAButton href="/rooms" variant="outline" id="rooms-view-all">
              {roomsPreview.ctaViewAll}
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
