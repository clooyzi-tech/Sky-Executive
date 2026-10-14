'use client';

import { Phone, ArrowRight, MessageCircle } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { phoneUrl, whatsappUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';
import BotanicalWatermark from '@/components/ui/BotanicalWatermark';

export default function BookingCTA() {
  const { bookingCTA } = STRINGS.home;

  return (
    <section
      className="relative overflow-hidden on-navy bg-[var(--navy-deep)] py-24 md:py-32 text-[var(--on-navy)] select-none border-t border-[var(--gold)]/30"
      id="booking-cta"
    >
      {/* Botanical Watermark */}
      <BotanicalWatermark className="bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex justify-center mb-4">
            <CrownMark size="footer" variant="gold-bright" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-bright)] shadow-xs">
            <span>Lonikand, Pune–Nagar Road, Pune</span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl !text-white tracking-tight uppercase">
            <span>Ready to Experience </span>
            <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">Boutique Comfort?</span>
          </h2>

          <div className="flex justify-center my-4">
            <GoldRuleDot width="280px" variant="gold-bright" />
          </div>

          <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[var(--on-navy)] md:text-lg font-medium">
            {bookingCTA.description}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[var(--gold-bright)] font-semibold max-w-xl mx-auto">
            Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="btn-primary-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center shadow-lg hover:shadow-[0_6px_20px_rgba(212,162,76,0.4)] cursor-pointer"
              id="cta-enquire-now"
            >
              <span>Submit Stay Enquiry</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={phoneUrl()}
              className="btn-secondary-navy w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center cursor-pointer"
              id="cta-call-desk"
            >
              <Phone className="h-4 w-4 text-[var(--gold-bright)]" />
              <span>Call: {STRINGS.contact.phone}</span>
            </a>

            <a
              href={whatsappUrl(STRINGS.contact.prefilledMessages.bookingCTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-navy w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center cursor-pointer"
              id="cta-whatsapp-desk"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-10 sm:mt-12 pt-8 border-t border-[var(--line-gold-navy)] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[var(--on-navy)] uppercase tracking-wider font-semibold font-display">
            <span>• Premium Boutique Rooms</span>
            <span>• In-House Cloud Kitchen</span>
            <span>• Nature-Oriented Views</span>
            <span className="text-[var(--gold-bright)]">• 24/7 Front Desk: 8007724646</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
