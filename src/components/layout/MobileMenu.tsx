'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, brand } from '@/lib/content';
import { cn } from '@/lib/utils';
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
            className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm"
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
            <div className="flex items-center justify-between border-b border-border-light px-6 py-4">
              <span className="font-serif text-xl font-bold text-charcoal">
                {brand.name}
              </span>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-md text-slate-deep transition-colors hover:bg-cream"
                aria-label="Close menu"
                id="mobile-menu-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
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
                          ? 'bg-accent-muted text-accent'
                          : 'text-slate-deep hover:bg-cream hover:text-charcoal'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="border-t border-border-light px-6 py-6">
              <CTAButton
                href="/contact"
                className="w-full"
                onClick={onClose}
                id="mobile-enquire-cta"
              >
                Enquire Now
              </CTAButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
