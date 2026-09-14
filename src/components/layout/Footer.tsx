import Link from 'next/link';
import { Phone, Mail, MapPin, InstagramIcon } from '@/config/icons';
import { STRINGS } from '@/config/strings';
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
              {STRINGS.brand.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-medium">
              {STRINGS.brand.description}
            </p>
            {/* Social */}
            <div className="mt-4 flex gap-3">
              {STRINGS.contact.social.instagram && (
                <a
                  href={STRINGS.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={STRINGS.footer.instagramAria}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-dark text-slate-deep transition-colors hover:bg-accent hover:text-white"
                  id="footer-instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
              {STRINGS.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {STRINGS.nav.links.map((link) => (
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
              {STRINGS.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-slate-medium">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={phoneUrl()} className="hover:text-accent transition-colors">
                  {STRINGS.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${STRINGS.contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {STRINGS.contact.email}
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
              {STRINGS.footer.legal}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  {STRINGS.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  {STRINGS.footer.termsConditions}
                </Link>
              </li>
              <li>
                <Link
                  href="/guest-information"
                  className="text-sm text-slate-medium transition-colors hover:text-accent"
                >
                  {STRINGS.footer.guestInformation}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border-light pt-6 text-center text-xs text-slate-medium">
          {STRINGS.footer.copyright(currentYear, STRINGS.brand.name)}
        </div>
      </div>
    </footer>
  );
}
