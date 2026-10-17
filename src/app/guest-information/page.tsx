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
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import { AEO_CONTENT } from '@/content/aeo';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.guestInfo.title,
  description: STRINGS.seo.pages.guestInfo.description,
  path: '/guest-information',
});

export default function GuestInformationPage() {
  const { guestInfo, contact, location } = STRINGS;

  return (
    <div className="bg-[var(--cream)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guestInfoPageJsonLd(AEO_CONTENT.guestInfo.faqs)),
        }}
      />

      {/* Page Header */}
      <section className="on-navy bg-[var(--navy-deep)] py-16 md:py-24 text-white select-none border-b border-[var(--gold)]/30">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <AnimatedSection>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 shadow-xs">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--gold-bright)]">
                Hotel Sky Executive • Pune Guest Portal
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">GUEST </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">INFORMATION</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="mx-auto mt-2 max-w-sm text-sm text-[var(--on-navy)] font-medium md:text-base leading-relaxed">
              {guestInfo.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Direct Answer Block */}
      <AnswerBlock data={AEO_CONTENT.guestInfo.answerBlock} />

      <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 md:max-w-2xl md:py-12">
        {/* Front Desk Support */}
        <AnimatedSection>
          <div className="mb-8 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brown-gold)] font-display">
                  24/7 Front Desk Hotline
                </span>
                <h3 className="font-display text-lg font-extrabold text-[var(--navy-ink)]">
                  {contact.phone}
                </h3>
                <p className="text-xs text-[var(--ink)] mt-0.5">
                  Available round the clock for room service, housekeeping & assistance.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={phoneUrl()}
                  className="btn-primary-gold text-xs px-4 py-2 flex items-center gap-2"
                  id="guest-call"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/919209397362?text=${encodeURIComponent(
                    contact.prefilledMessages.guestAssistance
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-cream text-xs px-4 py-2 flex items-center gap-2"
                  id="guest-whatsapp"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Check-in / Check-out Timing Notice */}
        <AnimatedSection delay={0.05}>
          <div className="mb-6 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--navy-ink)] uppercase">
                <Clock className="h-5 w-5 text-[var(--gold)]" />
                <span>{guestInfo.timing.title}</span>
              </h2>
              <span className="rounded-full bg-[var(--cream-deep)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--brown-gold)] border border-[var(--line-gold)] font-display uppercase">
                Verified Schedule
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[6px] border border-[var(--line-gold)] bg-[var(--cream)] p-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--brown-gold)] font-display">
                  Check-in Time
                </p>
                <p className="mt-1 text-base font-display font-extrabold text-[var(--navy-ink)]">
                  11:00 AM
                </p>
              </div>
              <div className="rounded-[6px] border border-[var(--line-gold)] bg-[var(--cream)] p-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--brown-gold)] font-display">
                  Check-out Time
                </p>
                <p className="mt-1 text-base font-display font-extrabold text-[var(--navy-ink)]">
                  10:00 AM
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[var(--ink)]">
              {guestInfo.timing.note}
            </p>
          </div>
        </AnimatedSection>

        {/* Wi-Fi Access */}
        <AnimatedSection delay={0.1}>
          <div className="mb-6 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--navy-ink)] uppercase">
              <Wifi className="h-5 w-5 text-[var(--gold)]" />
              <span>{guestInfo.wifi.title}</span>
            </h2>
            <p className="mt-2 text-sm text-[var(--ink)] leading-relaxed">
              {guestInfo.wifi.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Verified Property Services */}
        <AnimatedSection delay={0.15}>
          <div className="mb-6 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--navy-ink)] uppercase">
              <Sparkles className="h-5 w-5 text-[var(--gold)]" />
              <span>{guestInfo.services.title}</span>
            </h2>
            <div className="mt-4 space-y-3">
              {guestInfo.services.items.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-[6px] bg-[var(--cream)] px-4 py-3 border border-[var(--line-gold)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--gold)]">
                      {getServiceIcon(service.name)}
                    </span>
                    <span className="text-sm font-semibold text-[var(--navy-ink)]">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[var(--brown-gold)] font-display uppercase">
                    {service.availability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* House Guidelines */}
        <AnimatedSection delay={0.2}>
          <div className="mb-6 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--navy-ink)] uppercase">
              <AlertCircle className="h-5 w-5 text-[var(--gold)]" />
              <span>{guestInfo.houseRules.title}</span>
            </h2>
            <ul className="mt-4 space-y-2.5">
              {guestInfo.houseRules.items.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--navy-deep)] text-[10px] font-bold text-[var(--cream)]">
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
          <div className="mb-6 rounded-[6px] border border-[var(--gold)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[var(--navy-ink)] uppercase">
              <Compass className="h-5 w-5 text-[var(--gold)]" />
              <span>{guestInfo.nearby.title}</span>
            </h2>
            <div className="mt-4 space-y-3">
              {location.attractions.items.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between rounded-[6px] bg-[var(--cream)] px-4 py-3 border border-[var(--line-gold)]"
                >
                  <div className="flex items-center gap-2.5">
                    {getAttractionIcon(place.name, 'h-4 w-4 text-[var(--gold)]')}
                    <span className="text-sm font-semibold text-[var(--navy-ink)]">
                      {place.name}
                    </span>
                  </div>
                  <span className="rounded-full bg-[var(--cream-deep)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--brown-gold)] border border-[var(--line-gold)] font-display">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Footer note & Property Address */}
        <AnimatedSection delay={0.3}>
          <div className="text-center text-xs text-[var(--ink-muted)] leading-relaxed">
            <p>
              {guestInfo.footerNote.line1}
              <br />
              {guestInfo.footerNote.line2}
            </p>
            <p className="mt-3 font-bold font-display uppercase text-[var(--navy-ink)]">
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
    </div>
  );
}
