'use client';

import { MapPin, ArrowRight, Phone, CheckCircle } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { phoneUrl } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTAButton from '@/components/ui/CTAButton';
import SectionDivider from '@/components/ui/SectionDivider';

export default function LocationPreview() {
  const { locationPreview } = STRINGS.home;

  const nearbyPreviews = [
    { label: 'Hospitals & Healthcare', note: 'Medical centres along Wagholi-Kharadi corridor' },
    { label: 'Corporate & MNC Hubs', note: 'Upper Kharadi IT parks, EON & WTC Pune proximity' },
    { label: 'Schools & Academies', note: 'Educational institutes in Wagholi zone' },
    { label: 'Transit & Conveniences', note: 'Direct access to Nagar Road & Pune Airport link' },
  ];

  return (
    <section className="pt-[26px] pb-0 bg-white" id="location-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-[16px] lg:grid-cols-2">
          {/* Map Embed of Wagholi Pune */}
          <AnimatedSection direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
              <iframe
                src={STRINGS.contact.googleMapsEmbed}
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locationPreview.mapTitle}
                className="w-full"
              />
              {/* Map Notice Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-ivory/95 p-3.5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Infinity Greens Society, Wagholi, Pune-412207</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-deep">
                  Plot No-31, Lane No-4, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Location Content */}
          <AnimatedSection direction="right">
            <div>
              <span className="inline-block rounded-full bg-accent-muted px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Upper Kharadi, Wagholi, Pune
              </span>

              <h2 className="mt-[16px] font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                {locationPreview.title}
              </h2>

              <p className="mt-[16px] text-base leading-relaxed text-slate-deep">
                {locationPreview.subtitle}. Nestled in a peaceful nature-oriented pocket with convenient connectivity to Kharadi corporate towers and Wagholi amenities.
              </p>

              {/* Verified Address Card */}
              <div className="mt-[16px] rounded-2xl border border-border-gold bg-cream/40 p-4 sm:p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-charcoal text-sm">
                        Hotel Address:
                      </h4>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800 border border-emerald-200">
                        Verified
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-deep leading-relaxed font-medium">
                      {locationPreview.addressNotice}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-charcoal font-semibold">
                      <Phone className="h-3.5 w-3.5 text-accent" />
                      <span>Front Desk: </span>
                      <a href={phoneUrl()} className="text-accent hover:text-accent-dark">
                        {STRINGS.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Categories Preview */}
              <div className="mt-[16px]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Surrounding Connectivity
                </h4>
                <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {nearbyPreviews.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border-light bg-white p-2.5 text-xs"
                    >
                      <p className="font-semibold text-charcoal">{item.label}</p>
                      <p className="text-[11px] text-slate-medium mt-0.5">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[16px] flex flex-col sm:flex-row gap-[16px]">
                <CTAButton
                  href={STRINGS.contact.googleMapsUrl}
                  external
                  id="location-directions-cta"
                >
                  {locationPreview.ctaDirections}
                  <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton
                  href="/location"
                  variant="outline"
                  id="location-details-cta"
                >
                  {locationPreview.ctaDetails}
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Luxury Section Divider */}
      <SectionDivider />
    </section>
  );
}
