import type { Metadata } from 'next';
import {
  Phone,
  Wifi,
  Clock,
  AlertCircle,
  Compass,
  getServiceIcon,
  getAttractionIcon,
  Sparkles,
} from '@/config/icons';
import { generatePageMetadata, guestInfoPageJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnswerBlock from '@/components/ui/AnswerBlock';
import FAQSection from '@/components/ui/FAQSection';
import { AEO_CONTENT } from '@/content/aeo';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.guestInfo.title,
  description: STRINGS.seo.pages.guestInfo.description,
  path: '/guest-information',
});

export default function GuestInformationPage() {
  const { guestInfo, contact, location } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guestInfoPageJsonLd(AEO_CONTENT.guestInfo.faqs)),
        }}
      />

      {/* Page Header — optimized for guest access & QR scanning */}
      <section className="bg-charcoal py-16 md:py-24 text-white">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Hotel Sky Executive • Pune Guest Portal
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
              {guestInfo.header.title}
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm text-white/80 md:text-base font-light">
              {guestInfo.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Answer Block (AEO Guest Guidelines First) */}
      <AnswerBlock data={AEO_CONTENT.guestInfo.answerBlock} />

      <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 md:max-w-2xl md:py-12">
        {/* Front Desk Support */}
        <AnimatedSection>
          <div className="mb-8 rounded-2xl border border-border-gold bg-ivory p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
                  24/7 Front Desk Hotline
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  {contact.phone}
                </h3>
                <p className="text-xs text-slate-deep mt-0.5">
                  Available round the clock for room service, housekeeping & assistance.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={phoneUrl()}
                  className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-charcoal shadow-xs hover:bg-accent-light"
                  id="guest-call"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/918007724646?text=${encodeURIComponent(
                    contact.prefilledMessages.guestAssistance
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700"
                  id="guest-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Check-in / Check-out Timing Notice */}
        <AnimatedSection delay={0.05}>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-charcoal">
                <Clock className="h-5 w-5 text-accent" />
                {guestInfo.timing.title}
              </h2>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800 border border-emerald-200">
                Verified Schedule
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border-light bg-cream/40 p-3 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
                  Check-in Time
                </p>
                <p className="mt-1 text-base font-serif font-bold text-charcoal">
                  11:00 AM
                </p>
              </div>
              <div className="rounded-xl border border-border-light bg-cream/40 p-3 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-dark">
                  Check-out Time
                </p>
                <p className="mt-1 text-base font-serif font-bold text-charcoal">
                  10:00 AM
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-deep">
              {guestInfo.timing.note}
            </p>
          </div>
        </AnimatedSection>

        {/* Wi-Fi Access */}
        <AnimatedSection delay={0.1}>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-xs">
            <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-charcoal">
              <Wifi className="h-5 w-5 text-accent" />
              {guestInfo.wifi.title}
            </h2>
            <p className="mt-2 text-sm text-slate-deep leading-relaxed">
              {guestInfo.wifi.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Verified Property Services */}
        <AnimatedSection delay={0.15}>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-xs">
            <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-charcoal">
              <Sparkles className="h-5 w-5 text-accent" />
              {guestInfo.services.title}
            </h2>
            <div className="mt-4 space-y-3">
              {guestInfo.services.items.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-xl bg-cream/40 px-4 py-3 border border-border-light"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent">
                      {getServiceIcon(service.name)}
                    </span>
                    <span className="text-sm font-semibold text-charcoal">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-accent-dark">
                    {service.availability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* House Guidelines */}
        <AnimatedSection delay={0.2}>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-xs">
            <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-charcoal">
              <AlertCircle className="h-5 w-5 text-accent" />
              {guestInfo.houseRules.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {guestInfo.houseRules.items.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-deep">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted text-[10px] font-semibold text-accent-dark">
                    {i + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Nearby Establishments (Pune) */}
        <AnimatedSection delay={0.25}>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-xs">
            <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-charcoal">
              <Compass className="h-5 w-5 text-accent" />
              {guestInfo.nearby.title}
            </h2>
            <div className="mt-4 space-y-3">
              {location.attractions.items.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between rounded-xl bg-cream/40 px-4 py-3 border border-border-light"
                >
                  <div className="flex items-center gap-2.5">
                    {getAttractionIcon(place.name, 'h-4 w-4 text-accent')}
                    <span className="text-sm font-medium text-charcoal">
                      {place.name}
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Footer note & Property Address */}
        <AnimatedSection delay={0.3}>
          <div className="text-center text-xs text-slate-medium leading-relaxed">
            <p>
              {guestInfo.footerNote.line1}
              <br />
              {guestInfo.footerNote.line2}
            </p>
            <p className="mt-3 font-medium text-charcoal">
              Hotel Sky Executive Hotel • {contact.address.full}
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Visible Guest Portal & House Guidelines FAQs */}
      <FAQSection
        faqs={AEO_CONTENT.guestInfo.faqs}
        title="Guest Portal & House Guidelines FAQs"
        subtitle="Verified information on Wi-Fi access, cloud kitchen meal windows, pet policy, and quiet hours."
      />
    </>
  );
}
