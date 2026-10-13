import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
} from '@/config/icons';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.contact.title,
  description: STRINGS.seo.pages.contact.description,
  path: '/contact',
});

export default function ContactPage() {
  const { contactPage, contact } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: contactPage.header.title, href: '/contact' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-charcoal py-20 md:py-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Stay Enquiries • Pune
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {contactPage.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {contactPage.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                      Boutique Reservations Desk
                    </span>
                    <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                      {contactPage.sidebar.title}
                    </h2>
                    <div className="mt-3 h-0.5 w-12 bg-accent" />
                    <p className="mt-4 text-sm sm:text-base text-slate-deep leading-relaxed">
                      {contactPage.sidebar.description}
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    {/* Front Desk Phone */}
                    <a
                      href={phoneUrl()}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-ivory p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
                      id="contact-call"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-charcoal">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-charcoal group-hover:text-accent transition-colors">
                            {contact.cards.call.title}
                          </h3>
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                            Verified
                          </span>
                        </div>
                        <p className="text-sm font-bold text-charcoal mt-1">
                          {contact.phone}
                        </p>
                        <p className="mt-1 text-xs text-slate-medium">
                          Available 24/7 for stay calls
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/918007724646?text=${encodeURIComponent(
                        contact.prefilledMessages.contactPageEnquiry
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-ivory p-5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xs"
                      id="contact-whatsapp"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-charcoal group-hover:text-emerald-700 transition-colors">
                            WhatsApp Chat
                          </h3>
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                            Instant
                          </span>
                        </div>
                        <p className="text-sm font-bold text-charcoal mt-1">
                          +91 80077 24646
                        </p>
                        <p className="mt-1 text-xs text-slate-medium">
                          Chat on WhatsApp for fast room queries
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-ivory p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
                      id="contact-email"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-charcoal">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-charcoal group-hover:text-accent transition-colors">
                          {contact.cards.email.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-deep mt-1">
                          {contact.email}
                        </p>
                        <p className="mt-1 text-xs text-slate-medium">
                          {contact.cards.email.subtitle}
                        </p>
                      </div>
                    </a>

                    {/* Location Card */}
                    <div className="rounded-2xl border border-border-gold bg-ivory p-5 shadow-2xs">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif font-bold text-charcoal">
                              Property Address
                            </h3>
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                              Verified
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-deep mt-1.5 leading-relaxed font-medium">
                            {contact.address.full}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-3">
                            <Link
                              href="/location"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dark"
                            >
                              Driving Directions to Jaywant Towers
                            </Link>
                            <span className="text-slate-medium text-xs">•</span>
                            <a
                              href={contact.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-dark"
                            >
                              Open Google Maps
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stay Overview Quick Note */}
                  <div className="rounded-2xl border border-border-gold bg-accent-muted/25 p-4 text-xs text-slate-deep">
                    <div className="flex items-center gap-2 font-semibold text-charcoal">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span>Hotel Sky Executive Pune Stay Overview</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-slate-deep">
                      <li>• <Link href="/rooms" className="text-accent font-semibold hover:underline">Review Executive Double Bed Room amenities</Link></li>
                      <li>• Direct Highway Access: Pune–Nagar Road, Lonikand</li>
                      <li>• In-house cloud kitchen, free Wi-Fi & parking</li>
                      <li>• Accepted Payments: UPI, Cash, Cards & Net Banking</li>
                      <li>• <Link href="/guest-information" className="text-accent font-semibold hover:underline">View hotel guest policies & check-in timings</Link></li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
