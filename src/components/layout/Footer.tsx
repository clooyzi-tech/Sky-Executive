'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { STRINGS } from '@/config/strings';
import { phoneUrl, whatsappUrl } from '@/lib/utils';
import FooterCTABand from '@/components/ui/FooterCTABand';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 6.6: FOOTER CTA BAND (Gold Bright #D4A24C)           */}
      {/* ============================================================ */}
      <FooterCTABand
        locationText="JAYWANT TOWERS, PUNE–NAGAR ROAD, NEAR JAYWANT WAREHOUSE, LONIKAND"
        buttonText="ENQUIRE DIRECT / CALL DESK"
        buttonHref="/contact"
      />

      {/* ============================================================ */}
      {/* MAIN FOOTER (Section 7: Navy Deep #0B1F3F)                   */}
      {/* ============================================================ */}
      <footer className="bg-[var(--navy-deep)] text-[var(--on-navy)] border-t border-[var(--gold)]/30 relative overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[var(--line-gold-navy)]">
            {/* Col 1: Brand & Crown (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              {/* Official Brand Logo Medallion */}
              <Link href="/" className="flex items-center gap-3.5 mb-4 group">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[var(--gold-bright)] shadow-[0_0_12px_rgba(212,162,76,0.35)] shrink-0 bg-[#0B1F3F]">
                  <Image
                    src="/SE_Logo.jpeg"
                    alt={`${STRINGS.brand.name} official medallion logo`}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-extrabold tracking-wider text-white uppercase group-hover:text-[var(--gold-bright)] transition-colors">
                    {STRINGS.brand.name}
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-bold mt-0.5">
                    Executive Boutique Hotel • Lonikand, Pune
                  </span>
                </div>
              </Link>

              <p className="font-body text-xs sm:text-sm text-[var(--on-navy)]/80 leading-relaxed mb-6 max-w-sm">
                {STRINGS.brand.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-[var(--gold-bright)] font-semibold">
                <span>✓ Executive Rooms</span>
                <span>•</span>
                <span>In-House Cloud Kitchen</span>
                <span>•</span>
                <span>Free Parking</span>
              </div>
            </div>

            {/* Col 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--gold-bright)] mb-2">
                Quick Links
              </h4>
              <div className="w-10 h-[2px] bg-[var(--gold-bright)] mb-4" />

              <ul className="space-y-2.5 font-display text-[13px] font-semibold uppercase tracking-wider text-[var(--on-navy)]/90">
                <li>
                  <Link href="/" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    About Property
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Rooms & Suites
                  </Link>
                </li>
                <li>
                  <Link href="/rooms#facilities" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    20+ Hotel Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Location & Directions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Guest & Policies (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--gold-bright)] mb-2">
                Guest Service
              </h4>
              <div className="w-10 h-[2px] bg-[var(--gold-bright)] mb-4" />

              <ul className="space-y-2.5 font-display text-[13px] font-semibold uppercase tracking-wider text-[var(--on-navy)]/90">
                <li>
                  <Link href="/guest-information" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Guest Information
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Stay Enquiry Form
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Hotel Policies & Check-in
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[var(--gold-foil-light)] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="hover:text-[var(--gold-foil-light)] transition-colors text-[var(--gold-bright)] flex items-center gap-1">
                    <span>Virtual Desk</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Front Desk (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="font-display text-sm font-extrabold uppercase tracking-widest text-[var(--gold-bright)] mb-2">
                Reception & Location
              </h4>
              <div className="w-10 h-[2px] bg-[var(--gold-bright)] mb-4" />

              <div className="space-y-3 font-body text-xs sm:text-sm text-[var(--on-navy)]/90">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[var(--gold-bright)] shrink-0 mt-0.5" />
                  <span>{STRINGS.contact.address.full}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[var(--gold-bright)] shrink-0" />
                  <a href={phoneUrl()} className="hover:text-[var(--gold-foil-light)] font-bold transition-colors">
                    {STRINGS.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" />
                  <a
                    href={whatsappUrl(STRINGS.contact.prefilledMessages.heroEnquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--gold-foil-light)] transition-colors"
                  >
                    Direct WhatsApp Desk: {STRINGS.contact.whatsapp}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--gold-bright)] shrink-0" />
                  <a href={`mailto:${STRINGS.contact.email}`} className="hover:text-[var(--gold-foil-light)] transition-colors">
                    {STRINGS.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Clock className="h-4 w-4 text-[var(--gold-bright)] shrink-0" />
                  <span>24 Hours Front Desk • Check-in 11:00 AM • Check-out 10:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[var(--on-navy)]/60">
            <p>
              © {currentYear} {STRINGS.brand.name}. All rights reserved. Professional Hospitality at Jaywant Towers, Lonikand.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-[var(--gold-bright)] transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[var(--gold-bright)] transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/policies" className="hover:text-[var(--gold-bright)] transition-colors">
                Policies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
