'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { cn } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b border-border-light/60 bg-ivory/80 backdrop-blur-lg transition-all duration-300'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-charcoal transition-colors hover:text-accent"
            id="header-logo"
          >
            {STRINGS.brand.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label={STRINGS.nav.aria.mainNavigation}>
            {STRINGS.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-slate-deep hover:text-charcoal hover:bg-cream/60'
                )}
                id={`nav-${link.href.replace('/', '') || 'home'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <CTAButton
              href="/contact"
              size="sm"
              className="hidden lg:inline-flex"
              id="header-enquire-cta"
            >
              {STRINGS.common.buttons.enquireNow}
            </CTAButton>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-cream lg:hidden"
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
