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
import { STRINGS } from '@/config/strings';

const TRANSIT_POINTS = [
  {
    icon: Plane,
    label: 'Pune International Airport',
    distance: '11.2 km',
    time: '~20 mins drive via Nagar Road',
  },
  {
    icon: Train,
    label: 'Railway Station',
    distance: '5.0 km',
    time: '~10 mins smooth connectivity',
  },
  {
    icon: Building2,
    label: 'Kharadi IT Parks (EON & WTC)',
    distance: '4.0 km',
    time: 'Direct access to corporate hubs',
  },
];

export default function LocationPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden" id="location">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E1] border border-[#E8DFC8] text-[#A67C37] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prime Pune Connectivity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A241C] tracking-tight">
            Peaceful Nature, Connected City
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#7E7465] leading-relaxed">
            Conveniently situated in Upper Kharadi, Wagholi — minutes away from tech hubs and Pune airport while enveloped in tranquil green hills.
          </p>
        </div>

        {/* Framed Location Card matching Canva layout */}
        <div className="rounded-3xl bg-white border border-[#E8DFC8] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Map Embed */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#FAF7F2]">
            <iframe
              src={STRINGS.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="liv.inn Hotel Location Map in Wagholi Pune"
              className="w-full h-full"
            />
          </div>

          {/* Right: Location Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 text-[#A67C37] mb-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  Hotel Location
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A241C] mb-3">
                liv.inn Pune
              </h3>

              <p className="text-xs sm:text-sm text-[#6E6454] leading-relaxed mb-6">
                Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Upper Kharadi, Wagholi, Pune-412207
              </p>

              {/* Transit Distances */}
              <div className="space-y-3 pt-2 border-t border-[#F0E9DC]">
                {TRANSIT_POINTS.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DD]">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF0E1] text-[#A67C37]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-[#2A241C] truncate">
                            {pt.label}
                          </h4>
                          <span className="text-[11px] font-bold text-[#A67C37] shrink-0">
                            {pt.distance}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#7E7465] truncate">{pt.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-[#F0E9DC] flex flex-col sm:flex-row gap-3">
              <a
                href={STRINGS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STRINGS.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="py-3 px-5 rounded-full border border-[#DCD3C3] bg-white text-[#2A241C] hover:bg-[#FAF5EC] text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A67C37]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
