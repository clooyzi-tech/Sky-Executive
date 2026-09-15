'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { cn, phoneUrl } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b border-border/80 bg-ivory/90 backdrop-blur-md transition-all duration-300 shadow-xs'
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with strict preservation of 1:1 original proportions */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-95"
            id="header-logo"
            aria-label="liv.inn Hotel Home"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border-gold shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Image
                src={STRINGS.brand.logoPath}
                alt={STRINGS.brand.logoAlt}
                fill
                sizes="48px"
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-charcoal transition-colors group-hover:text-accent">
                {STRINGS.brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-medium -mt-1 font-medium">
                Boutique Hotel • Pune
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label={STRINGS.nav.aria.mainNavigation}
          >
            {STRINGS.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-accent font-semibold bg-accent-muted/40'
                    : 'text-slate-deep hover:text-charcoal hover:bg-cream'
                )}
                id={`nav-${link.href.replace('/', '') || 'home'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={phoneUrl()}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-charcoal transition-colors hover:bg-cream hover:text-accent"
              id="header-call-cta"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{STRINGS.contact.phone}</span>
            </a>

            <CTAButton
              href="/contact"
              size="sm"
              className="hidden lg:inline-flex shadow-xs bg-accent text-charcoal font-semibold hover:bg-accent-light"
              id="header-enquire-cta"
            >
              {STRINGS.common.buttons.enquireNow}
            </CTAButton>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-charcoal transition-colors hover:bg-cream lg:hidden"
              aria-label={STRINGS.nav.aria.openMenu}
              id="mobile-menu-toggle"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
