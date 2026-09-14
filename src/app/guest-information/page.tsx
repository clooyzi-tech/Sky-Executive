import type { Metadata } from 'next';
import {
  Phone,
  MessageCircle,
  Wifi,
  Clock,
  AlertCircle,
  Plane,
  getServiceIcon,
} from '@/config/icons';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { whatsappUrl, phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';

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
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: guestInfo.header.title, href: '/guest-information' },
            ])
          ),
        }}
      />

      {/* Page Header — designed for mobile QR scanning */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-16 md:py-24">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <AnimatedSection>
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
              {guestInfo.header.title}
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm text-white/70 md:text-base">
              {guestInfo.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 md:max-w-2xl md:py-12">
        {/* Quick Contact */}
        <AnimatedSection>
          <div className="mb-8 grid grid-cols-2 gap-3">
            <a
              href={whatsappUrl(contact.prefilledMessages.guestAssistance)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-700 active:scale-[0.98]"
              id="guest-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              {guestInfo.quickContact.whatsapp}
            </a>
            <a
              href={phoneUrl()}
              className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
              id="guest-call"
            >
              <Phone className="h-4 w-4" />
              {guestInfo.quickContact.call}
            </a>
          </div>
        </AnimatedSection>

        {/* Check-in / Check-out */}
        <AnimatedSection delay={0.05}>
          <div className="mb-6 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-charcoal">
              <Clock className="h-5 w-5 text-accent" />
              {guestInfo.timing.title}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-cream/60 p-4 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-medium">
                  {guestInfo.timing.checkIn}
                </p>
                <p className="mt-1 text-xl font-semibold text-charcoal">
                  {guestInfo.timing.checkInTime}
                </p>
              </div>
              <div className="rounded-xl bg-cream/60 p-4 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-medium">
                  {guestInfo.timing.checkOut}
                </p>
                <p className="mt-1 text-xl font-semibold text-charcoal">
                  {guestInfo.timing.checkOutTime}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Wi-Fi */}
        <AnimatedSection delay={0.1}>
          <div className="mb-6 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-charcoal">
              <Wifi className="h-5 w-5 text-accent" />
              {guestInfo.wifi.title}
            </h2>
            <p className="mt-2 text-sm text-slate-deep">
              {guestInfo.wifi.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedSection delay={0.15}>
          <div className="mb-6 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-charcoal">
              <Clock className="h-5 w-5 text-accent" />
              {guestInfo.services.title}
            </h2>
            <div className="mt-4 space-y-3">
              {guestInfo.services.items.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-lg bg-cream/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent">
                      {getServiceIcon(service.name)}
                    </span>
                    <span className="text-sm font-medium text-charcoal">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-medium">
                    {service.availability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* House Rules */}
        <AnimatedSection delay={0.2}>
          <div className="mb-6 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-charcoal">
              <AlertCircle className="h-5 w-5 text-accent" />
              {guestInfo.houseRules.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {guestInfo.houseRules.items.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-deep">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted text-[10px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Nearby */}
        <AnimatedSection delay={0.25}>
          <div className="mb-6 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-charcoal">
              <Plane className="h-5 w-5 text-accent" />
              {guestInfo.nearby.title}
            </h2>
            <div className="mt-4 space-y-3">
              {location.attractions.items.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between rounded-lg bg-cream/40 px-4 py-3"
                >
                  <span className="text-sm font-medium text-charcoal">
                    {place.name}
                  </span>
                  <span className="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Footer note */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-xs text-slate-medium">
            {guestInfo.footerNote.line1}
            <br />
            {guestInfo.footerNote.line2}
          </p>
        </AnimatedSection>
      </div>
    </>
  );
}
