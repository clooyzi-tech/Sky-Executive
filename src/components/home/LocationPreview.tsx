'use client';

import { MapPin, ArrowRight } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { formatAddress } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

export default function LocationPreview() {
  const { locationPreview } = STRINGS.home;

  return (
    <section className="py-20 md:py-28" id="location-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Map embed */}
          <AnimatedSection direction="left">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={STRINGS.contact.googleMapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locationPreview.mapTitle}
                className="w-full"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection direction="right">
            <SectionHeading
              title={locationPreview.title}
              subtitle={locationPreview.subtitle}
              centered={false}
            />

            <div className="flex items-start gap-3 text-slate-deep">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-base leading-relaxed">{formatAddress()}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={STRINGS.contact.googleMapsUrl}
                external
                id="location-directions"
              >
                {locationPreview.ctaDirections}
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton
                href="/location"
                variant="outline"
                id="location-more"
              >
                {locationPreview.ctaDetails}
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
