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
    <footer className="bg-[#121316] text-white border-t border-white/10 relative overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#DFB756]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Logo */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="group flex items-center gap-3.5 mb-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#DFB756] shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={STRINGS.brand.logoPath}
                  alt={STRINGS.brand.logoAlt}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-[#DFB756] transition-colors">
                  {STRINGS.brand.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#DFB756] font-medium">
                  Boutique Hotel • Pune
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              An intimate 25-room boutique hotel in Upper Kharadi, Pune. 5 rooms per floor with peaceful nature views, in-house cloud kitchen, and 24/7 hospitality.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DFB756]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>25 Double Bed Rooms • Free Wi-Fi & Parking</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB756] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-[#DFB756] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#DFB756] transition-colors">
                  Double Bed Rooms
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#DFB756] transition-colors">
                  Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#DFB756] transition-colors">
                  Location & Map
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#DFB756] transition-colors">
                  Contact Reception
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-[#DFB756] transition-colors flex items-center gap-1 text-[#DFB756]">
                  <span>Front Desk Assistant</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay & Room Features */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB756] mb-4">
              Hotel Highlights
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>• In-House Cloud Kitchen (Room Delivery)</li>
              <li>• Free High-Speed Wi-Fi for Work</li>
              <li>• Free On-Site Parking Facility</li>
              <li>• 100% Full Power Backup</li>
              <li>• 24/7 Security & CCTV Monitoring</li>
              <li>• Pet-Friendly Stays (No Extra Charge)</li>
              <li>• Attached Bathroom with 24/7 Hot Water</li>
            </ul>
          </div>

          {/* Contact & Front Desk */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB756] mb-4">
              Front Desk 24/7
            </h4>
            <div className="space-y-3 text-xs text-white/75 mb-6">
              <a
                href={`tel:${STRINGS.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-start gap-2.5 hover:text-[#DFB756] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#DFB756] shrink-0 mt-0.5" />
                <span>+91 80077 24646 / +91 80077 34646</span>
              </a>

              <a
                href="mailto:help.livinn@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#DFB756] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#DFB756] shrink-0" />
                <span>help.livinn@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#DFB756] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Infinity Greens Society, Upper Kharadi, Wagholi, Pune-412207
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={STRINGS.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#DFB756] hover:text-[#121316] text-white transition-all shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/918007724646?text=Hi!%20I%20have%20an%20enquiry%20regarding%20liv.inn%20Pune."
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#DFB756] hover:text-[#121316] text-white transition-all shadow-xs"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} liv.inn Hotel Pune. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#DFB756] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#DFB756] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#DFB756] transition-colors">
              Guest Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
