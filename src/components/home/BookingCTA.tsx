'use client';

import { Phone, Mail, ArrowRight, Sparkles, MessageCircle } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { phoneUrl, whatsappUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTAButton from '@/components/ui/CTAButton';

export default function BookingCTA() {
  const { bookingCTA } = STRINGS.home;

  return (
    <section
      className="relative overflow-hidden bg-charcoal pt-[26px] pb-0 text-white"
      id="booking-cta"
    >
      {/* Pattern & ambient glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: IMAGES.patterns.ctaDots,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Upper Kharadi, Wagholi, Pune
          </div>

          <h2 className="mt-[16px] font-serif text-3xl font-bold sm:text-4xl md:text-5xl text-white">
            {bookingCTA.title}
          </h2>

          <p className="mx-auto mt-[16px] max-w-2xl text-base leading-relaxed text-white/80 md:text-lg font-light">
            {bookingCTA.description}
          </p>

          <p className="mt-[16px] text-xs sm:text-sm text-accent-gold font-medium">
            Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-[16px] flex flex-col items-center gap-[16px] sm:flex-row sm:justify-center">
            <CTAButton
              href="/contact"
              size="lg"
              className="bg-accent text-charcoal font-semibold hover:bg-accent-light shadow-xl hover:shadow-accent/30 w-full sm:w-auto"
              id="cta-enquire-now"
            >
              Submit Stay Enquiry
              <ArrowRight className="h-5 w-5" />
            </CTAButton>

            <CTAButton
              href={phoneUrl()}
              external
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-full sm:w-auto"
              id="cta-call-desk"
            >
              <Phone className="h-4 w-4 text-accent" />
              Call: {STRINGS.contact.phone}
            </CTAButton>

            <CTAButton
              href={whatsappUrl(STRINGS.contact.prefilledMessages.bookingCTA)}
              external
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500/40 w-full sm:w-auto"
              id="cta-whatsapp-desk"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </CTAButton>
          </div>

          <div className="mt-[16px] flex flex-wrap items-center justify-center gap-[16px] text-xs text-white/70">
            <span>• 25 Premium Rooms</span>
            <span>• 5 Rooms Per Floor</span>
            <span>• Nature-Oriented Views</span>
            <span>• 24/7 Front Desk: 8007724646</span>
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
}
