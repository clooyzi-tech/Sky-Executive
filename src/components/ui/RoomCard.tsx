'use client';

import Image from 'next/image';
import { Bed, Users, Check, ArrowRight, Trees, Sparkles } from '@/config/icons';
import CTAButton from '@/components/ui/CTAButton';
import type { Room } from '@/lib/content';

interface RoomCardProps {
  room: Room;
  detailed?: boolean;
}

export default function RoomCard({ room, detailed = false }: RoomCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-xl">
      {/* Room Image Container with Nature View Pill */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Nature View Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/20">
            <Trees className="h-3.5 w-3.5 text-accent-gold" />
            Nature-Oriented View
          </span>
        </div>

        {/* Floor & Size Info */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-xs font-medium text-white/90 drop-shadow-sm">
            200 sq. ft. • Double Bed • Nature Views
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
            {room.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-medium">
            <Sparkles className="h-3 w-3 text-accent" />
            {room.availabilityLabel}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-2xl font-bold text-charcoal">
          {room.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-deep line-clamp-3">
          {room.description}
        </p>

        {/* Meta badges: Bed type & Occupancy */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-y border-border-light py-3 text-xs text-slate-deep">
          <span className="flex items-center gap-1.5 font-medium">
            <Bed className="h-4 w-4 text-accent" />
            {room.bedType}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Users className="h-4 w-4 text-accent" />
            Up to {room.maxOccupancy} Guests
          </span>
        </div>

        {/* Verified Amenities Highlights */}
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">
            Verified Amenities
          </p>
          <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-deep">
            {(detailed ? room.amenities : room.amenities.slice(0, 6)).map((amenity) => (
              <li key={amenity} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing notice: Marked as To be confirmed */}
        <div className="mt-5 rounded-xl bg-cream/60 p-3 text-xs text-slate-deep border border-border-light">
          <div className="flex items-center justify-between">
            <span className="font-medium text-charcoal">Pricing & Availability:</span>
            <span className="text-[11px] font-semibold text-accent-dark">To be confirmed</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-medium">
            Official rates and taxes provided upon stay enquiry.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <CTAButton
            href={`/contact?room=${encodeURIComponent(room.name)}`}
            className="w-full bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-xs"
            id={`room-enquire-${room.id}`}
          >
            Enquire About Room
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
