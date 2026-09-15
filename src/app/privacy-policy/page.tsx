import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.privacy.title,
  description: STRINGS.seo.pages.privacy.description,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const { privacy, contact } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: privacy.header.title, href: '/privacy-policy' },
            ])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-charcoal py-20 md:py-28 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-gold backdrop-blur-sm">
              Data Protection & Privacy
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {privacy.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg font-light">
              {privacy.header.subtitle}
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
                {privacy.lastUpdated}
              </p>

              <p>
                {privacy.intro}
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information when you submit stay enquiries:</p>

              <h3>Personal Information</h3>
              <ul className="list-disc pl-5">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Stay dates and preferences</li>
                <li>Government-issued photo ID (at property check-in as required by law)</li>
              </ul>

              <h3>Stay Enquiry Details</h3>
              <ul className="list-disc pl-5">
                <li>Preferred check-in and check-out dates</li>
                <li>Room requirements</li>
                <li>Number of accompanying guests</li>
                <li>Special requests or arrival notes</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use guest information strictly to:</p>
              <ul className="list-disc pl-5">
                <li>Respond to your stay inquiries and verify room availability</li>
                <li>Communicate with you regarding your stay in Pune</li>
                <li>Comply with statutory guest registration requirements under Indian law</li>
                <li>Continuously refine our hospitality services and cleanliness standards</li>
              </ul>

              <h2>3. Data Security &amp; Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal data. Information is retained solely for reservation handling and statutory guest register compliance under applicable Indian regulations.
              </p>

              <h2>4. Contact Us</h2>
              <p>
                For questions regarding data handling or our privacy practices, please reach out:
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
