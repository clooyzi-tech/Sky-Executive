'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Wifi,
  Wind,
  Tv,
  Bath,
  Coffee,
  Laptop,
  Maximize2,
  Armchair,
  Users,
  ArrowRight,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { whatsappUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionDivider from '@/components/ui/SectionDivider';

interface RoomsShowcaseProps {
  id?: string;
  isAllRoomsPage?: boolean;
}

export default function RoomsPreview({
  id = 'rooms-preview',
  isAllRoomsPage = false,
}: RoomsShowcaseProps) {
  const { roomsPreview } = STRINGS.home;

  const amenityIconResolver = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="h-4 w-4 text-[#5F5A50]" />;
      case 'Wifi':
        return <Wifi className="h-4 w-4 text-[#5F5A50]" />;
      case 'Wind':
        return <Wind className="h-4 w-4 text-[#5F5A50]" />;
      case 'Tv':
        return <Tv className="h-4 w-4 text-[#5F5A50]" />;
      case 'Bath':
        return <Bath className="h-4 w-4 text-[#5F5A50]" />;
      case 'Coffee':
        return <Coffee className="h-4 w-4 text-[#5F5A50]" />;
      case 'Laptop':
        return <Laptop className="h-4 w-4 text-[#5F5A50]" />;
      case 'Maximize2':
        return <Maximize2 className="h-4 w-4 text-[#5F5A50]" />;
      case 'Armchair':
        return <Armchair className="h-4 w-4 text-[#5F5A50]" />;
      default:
        return <Bed className="h-4 w-4 text-[#5F5A50]" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-[26px] pb-0" id={id}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER (Matching Rooms-image.png)                */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[16px] pb-[16px]">
          {/* Left Title & Subtitle */}
          <AnimatedSection>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                {roomsPreview.eyebrow}
              </span>

              <h2 className="mt-[16px] font-serif text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
                {roomsPreview.title}
              </h2>

              <p className="mt-[16px] max-w-2xl text-sm leading-relaxed text-[#5F5A50] sm:text-base">
                {roomsPreview.subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* Right Luxury Brand Stamp with Underline */}
          <AnimatedSection delay={0.15}>
            <div className="hidden md:flex flex-col items-end select-none">
              <div className="text-right font-serif text-xs font-semibold tracking-[0.25em] text-[#B88A2A] uppercase leading-tight">
                <div>A STAY</div>
                <div>BEYOND</div>
                <div>ORDINARY</div>
              </div>
              <div className="mt-2 h-px w-28 bg-[#C9A227]" />
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================================ */}
        {/* 2. THE 4 ALTERNATING ROOM SHOWCASE CARDS                     */}
        {/* ============================================================ */}
        <div className="mt-[16px] space-y-[16px]">
          {roomsPreview.rooms.map((room, idx) => {
            const isReversed = idx % 2 === 1; // Odd indices (02, 04) have content on left, image on right

            const actionHref = isAllRoomsPage
              ? whatsappUrl(STRINGS.contact.prefilledMessages.roomEnquiry(room.name))
              : `/rooms#${room.id}`;

            return (
              <AnimatedSection key={room.id} delay={0.08 * (idx + 1)}>
                <div
                  id={room.id}
                  className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-white shadow-xs transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Image Column */}
                    <div
                      className={`relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] w-full overflow-hidden bg-charcoal ${
                        isReversed
                          ? 'lg:col-span-6 lg:order-2'
                          : 'lg:col-span-6 lg:order-1'
                      }`}
                    >
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Dark gradient overlay with tag badge at bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 sm:p-6 flex items-end">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/95">
                          {room.tagBadge}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-white ${
                        isReversed
                          ? 'lg:col-span-6 lg:order-1'
                          : 'lg:col-span-6 lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Huge Number & Category Eyebrow */}
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-4xl sm:text-5xl font-normal text-[#C9A227]/40 leading-none">
                            {room.number}
                          </span>
                          <span className="h-px w-8 bg-[#C9A227]" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                            {room.category}
                          </span>
                        </div>

                        {/* Room Name */}
                        <h3 className="mt-[16px] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1C]">
                          {room.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-[16px] text-xs sm:text-sm leading-relaxed text-[#5F5A50] sm:text-base font-normal">
                          {room.description}
                        </p>

                        {/* 6 Amenities Grid with Icons */}
                        <div className="mt-[16px] pt-[16px] border-t border-[#F3EFE6] grid grid-cols-2 sm:grid-cols-3 gap-[16px]">
                          {room.amenities.map((amenity) => (
                            <div
                              key={amenity.label}
                              className="flex items-center gap-2 text-xs text-[#1C1C1C]"
                            >
                              {amenityIconResolver(amenity.icon)}
                              <span className="font-medium text-[#1C1C1C] truncate">
                                {amenity.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row: CTA Button + Occupancy Indicator */}
                      <div className="mt-[16px] pt-[16px] border-t border-[#F3EFE6] flex flex-wrap items-center justify-between gap-[16px]">
                        <Link
                          href={actionHref}
                          target={isAllRoomsPage ? '_blank' : undefined}
                          rel={isAllRoomsPage ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B88A2A] px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1C1C1C] shadow-sm transition-all duration-300 hover:brightness-105 hover:shadow-md active:scale-95 whitespace-nowrap"
                          id={`room-explore-${room.id}`}
                        >
                          <span>{isAllRoomsPage ? 'ENQUIRE ROOM' : 'EXPLORE ROOM'}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-[#1C1C1C]" />
                        </Link>

                        {/* Occupancy Indicator with User Icon */}
                        <div className="flex items-center gap-2 text-xs font-medium text-[#5F5A50]">
                          <Users className="h-4 w-4 text-[#C9A227]" />
                          <span>{room.occupancyText}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* 3. BOTTOM CONSULTATION / HELP BANNER                          */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.3}>
          <div className="mt-[16px] rounded-2xl sm:rounded-3xl border border-[#DED8CC] bg-[#F5EFEB] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-[16px] shadow-xs hover:shadow-sm transition-all">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1C]">
                {roomsPreview.consultationBanner.title}
              </h4>
              <p className="mt-[16px] text-xs sm:text-sm text-[#5F5A50]">
                {roomsPreview.consultationBanner.subtitle}
              </p>
            </div>

            <Link
              href={roomsPreview.consultationBanner.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A227] bg-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B88A2A] shadow-xs transition-all duration-300 hover:border-[#B88A2A] hover:bg-[#FAF8F3] hover:text-[#C9A227] hover:shadow-md whitespace-nowrap"
              id="room-consultation-btn"
            >
              <span>{roomsPreview.consultationBanner.btnText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Luxury Section Divider */}
      <SectionDivider />
    </section>
  );
}
