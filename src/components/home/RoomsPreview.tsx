'use client';

import { ArrowRight } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { rooms } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import RoomCard from '@/components/ui/RoomCard';
import CTAButton from '@/components/ui/CTAButton';

export default function RoomsPreview() {
  const { roomsPreview } = STRINGS.home;

  return (
    <section className="bg-cream/40 py-20 md:py-28" id="rooms-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title={roomsPreview.title}
            subtitle={roomsPreview.subtitle}
          />
        </AnimatedSection>

        {/* Room Grid */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.id} delay={0.1 * i}>
              <RoomCard room={room} detailed={false} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25}>
          <div className="mt-12 text-center">
            <CTAButton
              href="/rooms"
              variant="outline"
              size="lg"
              className="border-charcoal/30 hover:border-accent hover:text-accent"
              id="rooms-view-all"
            >
              {roomsPreview.ctaViewAll}
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
