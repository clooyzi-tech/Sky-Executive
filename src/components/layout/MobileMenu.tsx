'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone } from '@/config/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { STRINGS } from '@/config/strings';
import { cn, phoneUrl } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm"
          />

          {/* Slide-in panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ivory shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border-gold">
                  <Image
                    src={STRINGS.brand.logoPath}
                    alt={STRINGS.brand.logoAlt}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-charcoal">
                    {STRINGS.brand.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-medium">
                    Pune, Maharashtra
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-slate-deep transition-colors hover:bg-cream"
                aria-label={STRINGS.nav.aria.closeMenu}
                id="mobile-menu-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="flex-1 overflow-y-auto px-6 py-6"
              aria-label={STRINGS.nav.aria.mobileNavigation}
            >
              <ul className="space-y-1.5">
                {STRINGS.nav.links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                        pathname === link.href
                          ? 'bg-accent-muted text-accent font-semibold'
                          : 'text-slate-deep hover:bg-cream hover:text-charcoal'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Verified Quick Highlights */}
              <div className="mt-8 rounded-xl border border-border bg-cream/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  liv.inn at a glance
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-deep">
                  <li>• 25 Premium Rooms (5 per floor)</li>
                  <li>• Nature-Oriented Surroundings</li>
                  <li>• Cloud Kitchen & Free Wi-Fi</li>
                  <li>• 24/7 Guest Assistance</li>
                </ul>
              </div>
            </nav>

            {/* CTA */}
            <div className="border-t border-border px-6 py-5 bg-white/70 space-y-2.5">
              <CTAButton
                href="/contact"
                className="w-full bg-accent text-charcoal font-semibold hover:bg-accent-light justify-center"
                onClick={onClose}
                id="mobile-enquire-cta"
              >
                {STRINGS.common.buttons.enquireNow}
              </CTAButton>
              <a
                href={phoneUrl()}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-ivory py-2.5 text-xs font-semibold text-charcoal hover:bg-cream transition-colors"
                id="mobile-call-cta"
              >
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>Call Front Desk: {STRINGS.contact.phone}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
