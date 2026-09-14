'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { whatsappUrl, phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTAButton from '@/components/ui/CTAButton';

export default function BookingCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-accent-dark py-20 md:py-28"
      id="booking-cta"
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 h-px w-12 mx-auto bg-white/40" />
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Planning Your Stay?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Get in touch with us to check availability, request a quote, or make
            a reservation. We&apos;re always happy to help.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              href={whatsappUrl('Hi! I would like to check room availability at Liv.inn.')}
              external
              size="lg"
              className="bg-[#25D366] hover:bg-[#1da851] shadow-[#25D366]/20"
              id="booking-whatsapp-cta"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
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
              Call Now
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
