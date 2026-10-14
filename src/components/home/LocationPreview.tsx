'use client';

import React from 'react';
import {
  MapPin,
  Plane,
  Train,
  Building2,
  Navigation,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import CrownMark from '@/components/ui/CrownMark';

const TRANSIT_POINTS = [
  {
    icon: Plane,
    label: 'Pune International Airport',
    distance: '~15 km',
    time: '~25 mins direct highway drive',
  },
  {
    icon: Train,
    label: 'Pune Railway Station',
    distance: '~20 km',
    time: '~35 mins smooth transit',
  },
  {
    icon: Building2,
    label: 'Industrial & Tech Belts (Lonikand, Sanaswadi, Kharadi)',
    distance: 'Nearby',
    time: 'Direct access to corporate & manufacturing corridors',
  },
];

export default function LocationPreview() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--cream)] relative overflow-hidden select-none" id="location">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--cream-deep)] border border-[var(--line-gold)] text-[var(--brown-gold)] text-xs font-display font-bold tracking-wider uppercase mb-3">
            <CrownMark size="sm" variant="gold" />
            <span>Prime Pune–Nagar Road Location</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--navy-ink)]">
            Strategic Connectivity, Executive Comfort
          </h2>
          <p className="font-body mt-2.5 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
            Conveniently situated at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand — ideal for business leaders, corporate transit, and travelers. You can{' '}
            <Link href="/location" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">
              view Pune–Nagar Road connectivity and transit routes
            </Link>{' '}
            to plan your arrival.
          </p>
        </div>

        {/* Framed Location Card (Section 7: 6px radius, 1px gold border, shadow-card) */}
        <div className="rounded-[6px] bg-[var(--cream-deep)] border border-[var(--gold)] shadow-[0_10px_28px_rgba(11,31,63,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Map Embed with sharp corners */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[var(--navy-deep)] border-b lg:border-b-0 lg:border-r border-[var(--line-gold)]">
            <iframe
              src={STRINGS.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${STRINGS.brand.name} Location Map in Lonikand Pune`}
              className="w-full h-full"
            />
          </div>

          {/* Right: Location Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 text-[var(--gold)] mb-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[var(--brown-gold)]">
                  Hotel Coordinates
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase text-[var(--navy-ink)] mb-2">
                {STRINGS.brand.name}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed mb-6 font-semibold">
                {STRINGS.contact.address.full}
              </p>

              {/* Transit Distances */}
              <div className="space-y-3 pt-3 border-t border-[var(--line-gold)]">
                {TRANSIT_POINTS.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-[6px] bg-[var(--cream)] border border-[var(--line-gold)]">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-bold text-xs uppercase text-[var(--navy-ink)] truncate">
                            {pt.label}
                          </span>
                          <span className="font-display text-[11px] font-extrabold text-[var(--brown-gold)] shrink-0">
                            {pt.distance}
                          </span>
                        </div>
                        <p className="font-body text-[11px] text-[var(--ink-muted)] truncate">{pt.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 pt-4 border-t border-[var(--line-gold)] flex flex-col sm:flex-row gap-3">
              <a
                href={STRINGS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs uppercase tracking-wider py-3.5 shadow-sm active:scale-95 transition-all text-center"
              >
                <Navigation className="h-4 w-4" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>

              <a
                href={phoneUrl()}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--navy-ink)] hover:bg-[var(--navy-ink)] text-[var(--navy-ink)] hover:text-[var(--cream)] font-display font-bold text-xs uppercase tracking-wider px-5 py-3.5 transition-all text-center"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>CALL DESK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
