'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, InstagramIcon, Sparkles } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <footer className="border-t border-border bg-cream/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Official Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group flex items-center gap-3.5"
              id="footer-logo"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border-gold shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={STRINGS.brand.logoPath}
                  alt={STRINGS.brand.logoAlt}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-charcoal">
                  {STRINGS.brand.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-accent font-medium">
                  Boutique Hotel • Pune
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-deep">
              {STRINGS.brand.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-medium">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>25 Rooms • 5 Rooms/Floor • Nature Views</span>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {STRINGS.contact.social.instagram && (
                <a
                  href={STRINGS.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={STRINGS.footer.instagramAria}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-deep transition-all duration-300 hover:border-accent hover:bg-accent hover:text-charcoal shadow-xs"
                  id="footer-instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              {STRINGS.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {STRINGS.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-deep transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (Pune) */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              {STRINGS.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-slate-deep">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <span className="font-medium text-charcoal">Upper Kharadi, Wagholi, Pune</span>
                  <p className="text-xs text-slate-medium mt-0.5 leading-snug">
                    Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <a
                    href={phoneUrl()}
                    className="hover:text-accent transition-colors font-medium"
                  >
                    {STRINGS.contact.phone}
                  </a>
                  <p className="text-[11px] text-slate-medium">24/7 Guest Assistance</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <a
                    href={`mailto:${STRINGS.contact.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {STRINGS.contact.email}
                  </a>
                  <p className="text-[11px] text-slate-medium">Reservations & Enquiries</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Guest Guidance */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              {STRINGS.footer.legal}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/guest-information"
                  className="text-sm text-slate-deep transition-colors hover:text-accent"
                >
                  {STRINGS.footer.guestInformation}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-deep transition-colors hover:text-accent"
                >
                  {STRINGS.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-deep transition-colors hover:text-accent"
                >
                  {STRINGS.footer.termsConditions}
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-white/70 p-3 text-xs text-slate-deep">
              <p className="font-medium text-charcoal">Boutique Stay in Pune</p>
              <p className="text-[11px] text-slate-medium mt-1">
                Timings: 11:00 AM to 10:00 AM (Check-in/out order to be confirmed).
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-medium">
          <p>{STRINGS.footer.copyright(currentYear, STRINGS.brand.name)}</p>
          <p className="text-[11px]">
            Pune, Maharashtra, India • Nature-Oriented Boutique Accommodation
          </p>
        </div>
      </div>
    </footer>
  );
}
