import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { brand, contact, social, navLinks } from '@/lib/content';
import { formatAddress, phoneUrl } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-cream/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-charcoal"
              id="footer-logo"
            >
              {brand.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-medium">
              {brand.description}
            </p>
            {/* Social */}
            <div className="mt-4 flex gap-3">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-dark text-slate-deep transition-colors hover:bg-accent hover:text-white"
                  id="footer-instagram"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-medium transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-medium">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={phoneUrl()} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{formatAddress()}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/guest-information"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  Guest Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border-light pt-6 text-center text-xs text-slate-medium">
          © {currentYear} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
