'use client';

import { Phone, MessageCircle } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import { whatsappUrl, phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTAButton from '@/components/ui/CTAButton';

export default function BookingCTA() {
  const { bookingCTA } = STRINGS.home;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-accent-dark py-20 md:py-28"
      id="booking-cta"
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: IMAGES.patterns.ctaDots,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 h-px w-12 mx-auto bg-white/40" />
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {bookingCTA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {bookingCTA.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              href={whatsappUrl(STRINGS.contact.prefilledMessages.bookingCTA)}
              external
              size="lg"
              className="bg-[#25D366] hover:bg-[#1da851] shadow-[#25D366]/20"
              id="booking-whatsapp-cta"
            >
              <MessageCircle className="h-5 w-5" />
              {bookingCTA.whatsappBtn}
            </CTAButton>
            <CTAButton
              href={phoneUrl()}
              external
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              id="booking-call-cta"
            >
              <Phone className="h-5 w-5" />
              {bookingCTA.callBtn}
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
