import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from '@/config/icons';
import { generatePageMetadata, contactPageJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';
import AnswerBlock from '@/components/ui/AnswerBlock';
import FAQSection from '@/components/ui/FAQSection';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import { AEO_CONTENT } from '@/content/aeo';

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
          __html: JSON.stringify(contactPageJsonLd(AEO_CONTENT.contact.faqs)),
        }}
      />

      {/* Page Header (Royal Navy Deep Band) */}
      <section className="on-navy bg-[var(--navy-deep)] py-20 md:py-28 text-white border-b border-[var(--gold)]/30 select-none">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 shadow-xs">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--gold-bright)]">
                Direct Guest Assistance • Lonikand, Pune
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">CONTACT & </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">DIRECT RESERVATION</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="font-body mx-auto max-w-2xl text-base sm:text-lg text-[var(--on-navy)] font-medium leading-relaxed">
              {contactPage.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Answer Block (AEO Contact & Booking Hotline First) */}
      <AnswerBlock data={AEO_CONTENT.contact.answerBlock} />

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-[var(--cream)] select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 items-start">
            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-6">
                  <div>
                    <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[var(--brown-gold)]">
                      Boutique Reservations Desk
                    </span>
                    <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold uppercase text-[var(--navy-ink)]">
                      {contactPage.sidebar.title}
                    </h2>
                    <div className="mt-2 h-[2px] w-12 bg-[var(--gold)]" />
                    <p className="font-body mt-3 text-sm text-[var(--ink)] leading-relaxed">
                      {contactPage.sidebar.description}
                    </p>
                  </div>

                  {/* Contact Cards (6px radius, 1px gold border) */}
                  <div className="space-y-3.5">
                    {/* Front Desk Phone */}
                    <a
                      href={phoneUrl()}
                      className="group flex items-start gap-4 rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 sm:p-5 transition-all duration-200 hover:shadow-md"
                      id="contact-call"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)] transition-colors group-hover:bg-[var(--gold-bright)] group-hover:text-[var(--navy-deep)] shadow-xs">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-extrabold text-sm uppercase text-[var(--navy-ink)] group-hover:text-[var(--gold)] transition-colors">
                            {contact.cards.call.title}
                          </h3>
                          <span className="rounded-full bg-[var(--navy-deep)] px-2 py-0.5 text-[9px] font-bold text-[var(--gold-bright)] uppercase tracking-wider">
                            Verified
                          </span>
                        </div>
                        <p className="font-display text-sm font-extrabold text-[var(--navy-ink)] mt-1">
                          {contact.phone}
                        </p>
                        <p className="font-body text-xs text-[var(--ink-muted)] mt-0.5">
                          Available 24/7 for direct calls
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
                      className="group flex items-start gap-4 rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 sm:p-5 transition-all duration-200 hover:shadow-md"
                      id="contact-whatsapp"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-extrabold text-sm uppercase text-[var(--navy-ink)] group-hover:text-[#25D366] transition-colors">
                            WhatsApp Chat
                          </h3>
                          <span className="rounded-full bg-[#25D366]/20 px-2 py-0.5 text-[9px] font-bold text-[#1b7e3e] uppercase tracking-wider">
                            Instant
                          </span>
                        </div>
                        <p className="font-display text-sm font-extrabold text-[var(--navy-ink)] mt-1">
                          +91 80077 24646
                        </p>
                        <p className="font-body text-xs text-[var(--ink-muted)] mt-0.5">
                          Chat on WhatsApp for fast room queries
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-start gap-4 rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 sm:p-5 transition-all duration-200 hover:shadow-md"
                      id="contact-email"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)] transition-colors group-hover:bg-[var(--gold-bright)] group-hover:text-[var(--navy-deep)] shadow-xs">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-sm uppercase text-[var(--navy-ink)] group-hover:text-[var(--gold)] transition-colors">
                          {contact.cards.email.title}
                        </h3>
                        <p className="font-display text-xs sm:text-sm font-bold text-[var(--navy-ink)] mt-1 truncate">
                          {contact.email}
                        </p>
                        <p className="font-body text-xs text-[var(--ink-muted)] mt-0.5">
                          {contact.cards.email.subtitle}
                        </p>
                      </div>
                    </a>

                    {/* Location Card */}
                    <div className="rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-4 sm:p-5 shadow-xs">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[var(--gold-bright)] shadow-xs">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-extrabold text-sm uppercase text-[var(--navy-ink)]">
                              Property Address
                            </h3>
                            <span className="rounded-full bg-[var(--navy-deep)] px-2 py-0.5 text-[9px] font-bold text-[var(--gold-bright)] uppercase tracking-wider">
                              Verified
                            </span>
                          </div>
                          <p className="font-body text-xs text-[var(--ink)] mt-1.5 leading-relaxed font-semibold">
                            {contact.address.full}
                          </p>
                          <div className="mt-2.5 flex flex-wrap items-center gap-3">
                            <Link
                              href="/location"
                              className="font-display text-xs font-bold uppercase tracking-wider text-[var(--brown-gold)] hover:text-[var(--gold)] underline"
                            >
                              Driving Directions
                            </Link>
                            <span className="text-[var(--gold)]/40">•</span>
                            <a
                              href={contact.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-display text-xs font-bold uppercase tracking-wider text-[var(--brown-gold)] hover:text-[var(--gold)]"
                            >
                              <span>Google Maps</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stay Overview Quick Note (Card Framed) */}
                  <div className="card-framed p-4 text-xs bg-[var(--cream-deep)]">
                    <div className="flex items-center gap-2 font-display font-bold uppercase tracking-wider text-[var(--navy-ink)]">
                      <CrownMark size="sm" variant="gold" />
                      <span>Hotel Sky Executive Pune Overview</span>
                    </div>
                    <ul className="mt-2 space-y-1 font-body text-xs text-[var(--ink)]">
                      <li>• <Link href="/rooms" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">Review Executive Double Bed Room amenities</Link></li>
                      <li>• Direct Highway Access: Pune–Nagar Road, Lonikand</li>
                      <li>• In-house cloud kitchen, free Wi-Fi & parking</li>
                      <li>• Accepted Payments: UPI, Cash, Cards & Net Banking</li>
                      <li>• <Link href="/guest-information" className="text-[var(--brown-gold)] font-bold underline hover:text-[var(--gold)]">View hotel guest policies & check-in timings</Link></li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form Container (Framed) */}
            <div className="lg:col-span-3 rounded-[6px] border border-[var(--gold)] bg-[var(--cream-deep)] p-6 sm:p-8 shadow-[0_10px_28px_rgba(11,31,63,0.12)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Visible Contact & Booking FAQs */}
      <FAQSection
        faqs={AEO_CONTENT.contact.faqs}
        title="Booking & Contact FAQs"
        subtitle="Verified information on reservations, check-in requirements, and payments."
      />
    </>
  );
}
