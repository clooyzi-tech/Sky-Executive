'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  InstagramIcon,
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { cn, phoneUrl, whatsappUrl } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Robust scroll listener with hysteresis to guarantee no flicker or resize loops
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Only switch to scrolled state after passing 60px;
          // Only return to expanded state when scrolled near top (< 15px).
          // This prevents any rapid bounce loop at the scroll boundary.
          setScrolled((prev) => {
            if (!prev && y > 60) return true;
            if (prev && y < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split navigation: 3 equally divided options on Left, 3 options on Right
  const leftNavLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'ROOMS & FACILITIES', href: '/rooms' },
  ];

  const rightNavLinks = [
    { label: 'GALLERY', href: '/gallery' },
    { label: 'LOCATION', href: '/location' },
    { label: 'CONTACT & ENQUIRY', href: '/contact' },
  ];

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <>
      {/* ============================================================ */}
      {/* 1. TOP UTILITY BAR (Rules.md Warm Ivory #FAF8F3 Theme)       */}
      {/* WhatsApp and Phone Number live here on the right, not navbar  */}
      {/* ============================================================ */}
      <div className="w-full border-b border-[#DED8CC] bg-[#FAF8F3] text-[#5F5A50] text-[11px] select-none overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto flex h-9 sm:h-10 items-center justify-between px-3 sm:px-6 lg:px-8 xl:px-12">
          {/* Left: Location & Luxury Tagline */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 font-medium text-[#1C1C1C]">
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C9A227] shrink-0" />
              <span className="hidden sm:inline">Pune, Maharashtra</span>
              <span className="sm:hidden text-[10px]">Pune</span>
            </div>
            <span className="hidden sm:inline text-[#DED8CC]">|</span>
            <span className="hidden sm:inline font-serif italic text-[#8A8478]">
              A Stay Beyond Ordinary
            </span>
          </div>

          {/* Right: WhatsApp, Phone Number, 24/7 Support & Socials */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* WhatsApp Link/Button in Top Bar - hidden on mobile screens to prevent overflow */}
            <a
              href={whatsappUrl(STRINGS.contact.prefilledMessages.heroEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-medium text-[#1C1C1C] hover:text-[#C9A227] transition-colors"
              id="topbar-whatsapp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <span className="hidden sm:inline text-[#DED8CC]">|</span>

            {/* Phone Number in Top Bar */}
            <a
              href={phoneUrl()}
              className="inline-flex items-center gap-1 sm:gap-1.5 font-semibold text-[#1C1C1C] hover:text-[#C9A227] transition-colors text-[10px] sm:text-[11px]"
              id="topbar-phone"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C9A227] shrink-0" />
              <span>{STRINGS.contact.phone}</span>
            </a>

            <span className="hidden md:inline text-[#DED8CC]">|</span>

            {/* 24/7 Support */}
            <div className="hidden md:flex items-center gap-1.5 text-[#5F5A50]">
              <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>24/7 Support</span>
            </div>

            {/* Social Links - Instagram Only */}
            {STRINGS.contact.social.instagram && (
              <>
                <span className="hidden lg:inline text-[#DED8CC]">|</span>
                <div className="hidden lg:flex items-center gap-2.5 text-[#5F5A50]">
                  <a
                    href={STRINGS.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-[#C9A227] transition-colors"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN STICKY NAVBAR (Pure White #FFFFFF, Fixed Stable Height)*/}
      {/* Stable container height prevents page jump or resize loops   */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 w-full border-b border-[#DED8CC] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="relative w-full max-w-[1600px] mx-auto flex h-[74px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* -------------------------------------------------------- */}
          {/* EXACT MATHEMATICAL CENTER: Circular Liv.inn Logo Emblem   */}
          {/* Overlaps hero when at top; scales to fit navbar on scroll*/}
          {/* -------------------------------------------------------- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto">
            <Link
              href="/"
              className="group relative flex items-center justify-center focus:outline-none"
              id="header-center-logo"
              aria-label="liv.inn Hotel Home"
            >
              {/* Circular Emblem Frame with Outer White Halo & Inner Gold Ring */}
              <div
                className={cn(
                  'relative flex items-center justify-center rounded-full bg-white border border-[#DED8CC] transition-all duration-300 ease-out group-hover:scale-105',
                  scrolled
                    ? 'h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md'
                    : 'h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 p-1 sm:p-1.5 shadow-xl translate-y-1.5 sm:translate-y-3 md:translate-y-4'
                )}
              >
                {/* Inner Gold Ring & Black Brand Emblem */}
                <div className="relative h-full w-full rounded-full border-2 border-[#C9A227] overflow-hidden bg-black shadow-inner flex items-center justify-center">
                  <Image
                    src={IMAGES.brand.logo || '/livinn-logo.png'}
                    alt={STRINGS.brand.logoAlt}
                    fill
                    sizes={scrolled ? '56px' : '112px'}
                    priority
                    className="object-contain p-1 sm:p-1.5"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* -------------------------------------------------------- */}
          {/* DESKTOP (xl+): 3 EQUALLY DIVIDED OPTIONS ON LEFT          */}
          {/* (HOME, ABOUT, ROOMS & FACILITIES)                        */}
          {/* -------------------------------------------------------- */}
          <div className="hidden xl:flex flex-1 items-center justify-end pr-16 2xl:pr-20">
            <nav
              className="flex items-center gap-6 2xl:gap-8"
              aria-label="Left navigation"
            >
              {leftNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative py-1 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 group whitespace-nowrap',
                      isActive
                        ? 'text-[#C9A227]'
                        : 'text-[#1C1C1C] hover:text-[#C9A227]'
                    )}
                    id={`nav-${link.href.replace('/', '') || 'home'}`}
                  >
                    <span>{link.label}</span>
                    {/* Active gold underline bar */}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C9A227]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* -------------------------------------------------------- */}
          {/* DESKTOP (xl+): 3 EQUALLY DIVIDED OPTIONS ON RIGHT + CTA   */}
          {/* (GALLERY, LOCATION, CONTACT & ENQUIRY) + [ENQUIRE NOW]   */}
          {/* -------------------------------------------------------- */}
          <div className="hidden xl:flex flex-1 items-center justify-between pl-16 2xl:pl-20">
            {/* Right Navigation Links */}
            <nav
              className="flex items-center gap-6 2xl:gap-8"
              aria-label="Right navigation"
            >
              {rightNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative py-1 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 group whitespace-nowrap',
                      isActive
                        ? 'text-[#C9A227]'
                        : 'text-[#1C1C1C] hover:text-[#C9A227]'
                    )}
                    id={`nav-${link.href.replace('/', '') || 'contact'}`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C9A227]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action Button Fixed on Far Right */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B88A2A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1C1C1C] shadow-sm transition-all duration-300 hover:brightness-105 hover:shadow-md active:scale-95 whitespace-nowrap"
                id="header-enquire-pill"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#1C1C1C]" />
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* MOBILE & TABLET (< xl)                                   */}
          {/* -------------------------------------------------------- */}
          <div className="flex xl:hidden w-full items-center justify-between">
            {/* Left: Quick Call / WhatsApp */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={phoneUrl()}
                className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-[#DED8CC] bg-[#FAF8F3] px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-[#1C1C1C]"
                id="mobile-header-call"
                aria-label="Call Front Desk"
              >
                <Phone className="h-3.5 w-3.5 text-[#C9A227] shrink-0" />
                <span className="hidden sm:inline">{STRINGS.contact.phone}</span>
              </a>
            </div>

            {/* Spacer for center logo emblem on mobile */}
            <div className="w-14 sm:w-20" />

            {/* Right: Enquire CTA & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#B88A2A] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]"
              >
                Enquire
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-[#DED8CC] bg-[#FAF8F3] text-[#1C1C1C] hover:bg-[#F3EFE6] transition-colors"
                aria-label={STRINGS.nav.aria.openMenu}
                id="mobile-menu-toggle"
              >
                <Menu className="h-5 w-5 text-[#1C1C1C]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
