'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageCircle, MapPin } from '@/config/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { STRINGS } from '@/config/strings';
import Image from 'next/image';
import { phoneUrl, whatsappUrl } from '@/lib/utils';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'ROOMS & AMENITIES', href: '/rooms' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'LOCATION & DIRECTIONS', href: '/location' },
    { label: 'GUEST INFORMATION', href: '/guest-information' },
    { label: 'CONTACT & ENQUIRY', href: '/contact' },
  ];

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Slide-in Navy Panel (Section 6.1: Full-height navy drawer) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[var(--navy-deep)] text-[var(--on-navy)] shadow-2xl border-l border-[var(--gold)]/30 overflow-y-auto"
          >
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between border-b border-[var(--line-gold-navy)] px-6 py-5">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[var(--gold-bright)] shadow-[0_0_8px_rgba(212,162,76,0.3)] shrink-0 bg-[#0B1F3F]">
                  <Image
                    src="/SE_Logo.jpeg"
                    alt={`${STRINGS.brand.name} logo`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-extrabold text-white tracking-wider uppercase">
                    {STRINGS.brand.name}
                  </span>
                  <span className="font-display text-[9px] uppercase tracking-[0.2em] text-[var(--gold-bright)]">
                    Lonikand, Pune
                  </span>
                </div>
              </Link>

              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--gold)]/40 text-[var(--gold-bright)] hover:bg-[var(--gold)]/15 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links (Section 6.1: Links in 22px cream, gold rule+dot between groups) */}
            <nav className="flex-1 px-6 py-6" aria-label="Mobile navigation">
              <div className="space-y-4">
                {links.slice(0, 4).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`block font-display text-[20px] font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'text-[var(--gold-bright)]'
                          : 'text-[var(--cream)] hover:text-[var(--gold-bright)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Gold rule + dot divider between groups */}
              <GoldRuleDot width="full" variant="gold-bright" dotSize={8} className="my-4" />

              <div className="space-y-4">
                {links.slice(4).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`block font-display text-[20px] font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'text-[var(--gold-bright)]'
                          : 'text-[var(--cream)] hover:text-[var(--gold-bright)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-[var(--line-gold-navy)] p-6 space-y-3 bg-[var(--navy-surface)]">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center rounded-full bg-[var(--gold-bright)] text-[var(--navy-deep)] font-display font-bold text-sm tracking-wider uppercase h-12 shadow-md hover:bg-[var(--gold-foil-light)] transition-colors"
              >
                ENQUIRE DIRECT
              </Link>

              <div className="flex gap-2">
                <a
                  href={phoneUrl()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--gold-bright)] text-[var(--gold-bright)] font-display font-semibold text-xs tracking-wider uppercase h-10 hover:bg-[var(--gold-bright)]/10 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={whatsappUrl(STRINGS.contact.prefilledMessages.heroEnquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#25D366] text-[#25D366] font-display font-semibold text-xs tracking-wider uppercase h-10 hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center gap-1 text-[11px] text-[var(--on-navy)]/60">
                <MapPin className="h-3 w-3 text-[var(--gold-bright)]" />
                <span>Jaywant Towers, Pune–Nagar Road</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
