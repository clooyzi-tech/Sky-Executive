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
} from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { cn, phoneUrl, whatsappUrl } from '@/lib/utils';
import CrownMark from '@/components/ui/CrownMark';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (!prev && y > 24) return true;
            if (prev && y <= 10) return false;
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

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'ROOMS', href: '/rooms' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'LOCATION', href: '/location' },
    { label: 'CONTACT', href: '/contact' },
  ];

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <>
      {/* ============================================================ */}
      {/* 1. TOP UTILITY BAR (Warm Cream Deep & Gold Accent)           */}
      {/* ============================================================ */}
      <div className="w-full border-b border-[var(--line-gold)] bg-[var(--cream-deep)] text-[var(--navy-ink)] text-[12px] select-none">
        <div className="w-full max-w-[1440px] mx-auto flex h-9 sm:h-10 items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Left: Location & Tagline */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 font-medium text-[var(--navy-ink)]">
              <MapPin className="h-3.5 w-3.5 text-[var(--gold)] shrink-0" />
              <span className="hidden sm:inline font-display font-semibold text-[11px] uppercase tracking-wider">
                Lonikand, Pune–Nagar Road
              </span>
              <span className="sm:hidden text-[10px] font-semibold">Lonikand, Pune</span>
            </div>
            <span className="hidden md:inline text-[var(--gold)]/40">•</span>
            <span className="hidden md:inline font-script text-[var(--brown-gold)] text-sm">
              Executive Boutique Hospitality
            </span>
          </div>

          {/* Right: WhatsApp, Phone Number & 24/7 Front Desk */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0 text-[11px]">
            <a
              href={whatsappUrl(STRINGS.contact.prefilledMessages.heroEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--navy-ink)] hover:text-[var(--gold)] transition-colors"
              id="topbar-whatsapp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <span className="text-[var(--gold)]/40">•</span>

            <a
              href={phoneUrl()}
              className="inline-flex items-center gap-1.5 font-bold text-[var(--navy-ink)] hover:text-[var(--gold)] transition-colors"
              id="topbar-phone"
            >
              <Phone className="h-3 w-3 text-[var(--gold)]" />
              <span>{STRINGS.contact.phone}</span>
            </a>

            <span className="hidden lg:inline text-[var(--gold)]/40">•</span>

            <div className="hidden lg:flex items-center gap-1 text-[var(--ink-muted)]">
              <Clock className="h-3 w-3 text-[var(--gold)]" />
              <span>24/7 Front Desk</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN NAVBAR (Section 6.1 Theme Blueprint)                 */}
      {/* ============================================================ */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-[var(--cream)] border-b border-[var(--line-gold)] transition-all duration-300',
          scrolled
            ? 'h-[72px] shadow-[0_6px_18px_rgba(11,31,63,0.10)]'
            : 'h-[88px]'
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 gap-3 sm:gap-4">
          {/* Brand Logo Lockup: Crown/Logo + Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none shrink-0 mr-2 xl:mr-4"
            id="header-center-logo"
            aria-label={`${STRINGS.brand.name} Home`}
          >
            {/* Official Brand Logo Medallion */}
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 xl:h-12 xl:w-12 shrink-0 rounded-full overflow-hidden border border-[var(--gold)] shadow-xs transition-transform duration-300 group-hover:scale-105 bg-[#0B1F3F]">
              <Image
                src="/SE_Logo.jpeg"
                alt={STRINGS.brand.logoAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg xl:text-xl font-extrabold tracking-wider text-[var(--navy-ink)] uppercase leading-none group-hover:text-[var(--gold)] transition-colors whitespace-nowrap">
                {STRINGS.brand.name}
              </span>
              <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brown-gold)] mt-0.5 sm:mt-1 whitespace-nowrap">
                Lonikand, Pune
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Cleanly centered with ample clearance) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 mx-auto px-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative py-1 font-display text-[13px] xl:text-[14px] 2xl:text-[15px] font-bold tracking-[0.08em] uppercase transition-all duration-200 group whitespace-nowrap',
                    isActive
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--navy-ink)] hover:text-[var(--gold)]'
                  )}
                  id={`nav-${link.href.replace('/', '') || 'home'}`}
                >
                  <span>{link.label}</span>

                  {/* 2px Gold Underline growing from center on hover or active */}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[var(--gold)] transition-all duration-200',
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    )}
                  />

                  {/* 6px Center Dot under active item */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button (Gold-bright filled pill, height 44px, text navy) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold-bright)] hover:bg-[var(--gold-foil-light)] text-[var(--navy-deep)] font-display font-bold text-xs sm:text-[13px] xl:text-[14px] uppercase tracking-[0.08em] h-11 px-5 xl:px-6 shadow-xs hover:shadow-[0_6px_16px_rgba(184,134,43,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
              id="header-enquire-pill"
            >
              <span>ENQUIRE NOW</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Call button + Hamburger drawer button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={phoneUrl()}
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[var(--gold-bright)] text-[var(--navy-deep)] shadow-xs shrink-0"
              aria-label="Call Front Desk"
              id="mobile-header-call"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--line-gold)] bg-[var(--cream-deep)] text-[var(--navy-ink)] hover:text-[var(--gold)] focus:outline-none transition-colors shrink-0"
              aria-label="Open mobile menu"
              id="mobile-menu-trigger"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
