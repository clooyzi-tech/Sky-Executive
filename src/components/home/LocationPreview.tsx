'use client';

import React from 'react';
import {
  MapPin,
  Plane,
  Train,
  Building2,
  Navigation,
  Sparkles,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { STRINGS } from '@/config/strings';

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
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden" id="location">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-ivory border border-border text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prime Pune–Nagar Road Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Strategic Connectivity, Executive Comfort
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-medium leading-relaxed">
            Conveniently situated at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand — ideal for business leaders, corporate transit, and travelers. You can{' '}
            <Link href="/location" className="text-accent font-semibold hover:underline">
              view Pune–Nagar Road connectivity and transit routes
            </Link>{' '}
            to plan your arrival.
          </p>
        </div>

        {/* Framed Location Card */}
        <div className="rounded-3xl bg-white border border-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Map Embed */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-cream">
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
              <div className="flex items-center gap-2 text-accent mb-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  Hotel Location
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {STRINGS.brand.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-medium leading-relaxed mb-6">
                {STRINGS.contact.address.full}
              </p>

              {/* Transit Distances */}
              <div className="space-y-3 pt-2 border-t border-border">
                {TRANSIT_POINTS.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-ivory border border-border">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cream text-accent">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-foreground truncate">
                            {pt.label}
                          </h4>
                          <span className="text-[11px] font-bold text-accent shrink-0">
                            {pt.distance}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-medium truncate">{pt.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
              <a
                href={STRINGS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-accent hover:bg-accent-dark text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STRINGS.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="py-3 px-5 rounded-full border border-border bg-white text-foreground hover:bg-cream text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
