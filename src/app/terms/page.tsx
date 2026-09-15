import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.terms.title,
  description: STRINGS.seo.pages.terms.description,
  path: '/terms',
});

export default function TermsPage() {
  const { terms, contact, guestInfo } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: terms.header.title, href: '/terms' },
            ])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-charcoal py-20 md:py-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Policies & Stay Terms
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {terms.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {terms.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-slate max-w-none space-y-8 text-slate-deep [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-charcoal [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-charcoal [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_li]:leading-relaxed">
              <p className="text-sm text-slate-medium">
                {terms.lastUpdated}
              </p>

              <p>
                {terms.intro}
              </p>

              <h2>1. Reservations &amp; Stay Enquiries</h2>
              <ul className="list-disc pl-5">
                <li>Submitting a website stay enquiry does not constitute a confirmed room booking.</li>
                <li>All reservations are subject to room availability and formal confirmation by hotel management.</li>
                <li>A valid government-issued photo ID is mandatory at check-in for all adult guests, in accordance with applicable laws.</li>
                <li>The hotel reserves the right to refuse admission if mandatory identification is not presented upon arrival.</li>
              </ul>

              <h2>2. Check-in &amp; Check-out Timings (To Be Confirmed)</h2>
              <ul className="list-disc pl-5">
                <li>Provided operational timing: <strong>{guestInfo.timing.providedTiming}</strong>.</li>
                <li><em>Notice:</em> Final confirmation whether this specifies Check-in at 11:00 AM and Check-out at 10:00 AM is pending formal hotel management confirmation.</li>
                <li>Early check-in and late check-out requests remain strictly subject to availability.</li>
              </ul>

              <h2>3. Pricing &amp; Cancellation Policies</h2>
              <ul className="list-disc pl-5">
                <li>Room tariffs, seasonal rates, applicable taxes, and cancellation policies are confirmed upon enquiry.</li>
                <li>Detailed cancellation and refund guidelines will be communicated prior to booking finalization.</li>
              </ul>

              <h2>4. In-House Cloud Kitchen &amp; Food Facility</h2>
              <ul className="list-disc pl-5">
                <li>liv.inn operates an in-house cloud kitchen for guest dining convenience.</li>
                <li>Operating hours, menu selections, and order guidelines are provided at the property.</li>
              </ul>

              <h2>5. Property Care &amp; Cleanliness</h2>
              <ul className="list-disc pl-5">
                <li>Smoking is strictly prohibited inside all 25 guest rooms.</li>
                <li>Guests are requested to observe quiet hours after 10:00 PM to maintain a tranquil stay environment for all 5 rooms per floor.</li>
                <li>Any intentional damage to hotel property will be assessed and billed accordingly.</li>
              </ul>

              <h2>6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in <strong>Pune, Maharashtra</strong>.
              </p>

              <h2>7. Contact for Questions</h2>
              <p>
                For questions regarding stay terms or property policies, please contact:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-accent hover:text-accent-dark"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Pune, Maharashtra, India
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
