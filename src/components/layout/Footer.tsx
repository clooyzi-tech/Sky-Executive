'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { InstagramIcon } from '@/config/icons';
import { STRINGS } from '@/config/strings';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <footer className="bg-navy text-white border-t border-accent/20 relative overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Logo */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="group flex items-center gap-3.5 mb-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent shadow-md transition-transform duration-300 group-hover:scale-105 bg-white p-1">
                <Image
                  src={STRINGS.brand.logoPath}
                  alt={STRINGS.brand.logoAlt}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-accent transition-colors">
                  {STRINGS.brand.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                  Executive Hotel • Lonikand, Pune
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 max-w-sm">
              {STRINGS.brand.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Executive & Double Bed Rooms • Free Wi-Fi & Parking</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-accent transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/rooms#facilities" className="hover:text-accent transition-colors">
                  Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-accent transition-colors">
                  Location & Map
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Reception
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-accent transition-colors flex items-center gap-1 text-accent">
                  <span>Front Desk Assistant</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay & Room Features */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Hotel Highlights
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>• Prime Pune–Nagar Highway Connectivity</li>
              <li>• Complimentary High-Speed Wi-Fi for Work</li>
              <li>• Secure 24/7 On-Site Parking Facility</li>
              <li>• 100% Uninterrupted Power Backup</li>
              <li>• Round-the-Clock Security & CCTV</li>
              <li>• In-House Dining & Room Service</li>
              <li>• Attached Bathroom with 24/7 Hot Water</li>
            </ul>
          </div>

          {/* Contact & Front Desk */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Front Desk 24/7
            </h4>
            <div className="space-y-3 text-xs text-white/80 mb-6">
              <a
                href={`tel:${STRINGS.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-start gap-2.5 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{STRINGS.contact.phone}</span>
              </a>

              <a
                href={`mailto:${STRINGS.contact.email}`}
                className="flex items-center gap-2.5 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>{STRINGS.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {STRINGS.contact.address.full}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {STRINGS.contact.social.instagram && (
                <a
                  href={STRINGS.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-navy text-white transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}

              <a
                href={`https://wa.me/${STRINGS.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white text-white transition-all shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href={STRINGS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-navy text-white transition-all shadow-xs"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {currentYear} {STRINGS.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/policies" className="hover:text-accent transition-colors">
              Guest Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
