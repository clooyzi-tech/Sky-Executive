import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { brand, contact } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${brand.name}. Learn how we collect, use, and protect your personal information.`,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Privacy Policy', href: '/privacy-policy' },
            ])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              How we handle and protect your information
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-slate max-w-none space-y-8 text-slate-deep [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-charcoal [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-charcoal [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_li]:leading-relaxed">
              <p className="text-sm text-slate-medium">
                Last updated: September 2026
              </p>

              <p>
                {brand.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy 
                of our guests and website visitors. This Privacy Policy explains how we collect, 
                use, store, and protect your personal information when you visit our website 
                or stay at our hotel.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>

              <h3>Personal Information</h3>
              <ul className="list-disc pl-5">
                <li>Full name and title</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Government-issued photo ID (as required by law for hotel check-in)</li>
                <li>Nationality</li>
              </ul>

              <h3>Booking Information</h3>
              <ul className="list-disc pl-5">
                <li>Check-in and check-out dates</li>
                <li>Room preferences</li>
                <li>Special requests</li>
                <li>Number of guests</li>
              </ul>

              <h3>Technical Information</h3>
              <ul className="list-disc pl-5">
                <li>IP address and browser type</li>
                <li>Pages visited on our website</li>
                <li>Cookies and usage data</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-5">
                <li>Process and manage your hotel reservation</li>
                <li>Communicate with you regarding your stay</li>
                <li>Comply with legal requirements (e.g., guest registration under Indian law)</li>
                <li>Improve our services and guest experience</li>
                <li>Send promotional communications (only with your consent)</li>
                <li>Respond to your enquiries and feedback</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. 
                We may share your information with:
              </p>
              <ul className="list-disc pl-5">
                <li>Law enforcement or government agencies when required by Indian law</li>
                <li>Service providers who assist us in operating our hotel (e.g., payment processors), under strict confidentiality agreements</li>
                <li>Professional advisors (legal, accounting) as necessary</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect 
                your personal information against unauthorised access, alteration, disclosure, 
                or destruction. However, no method of transmission over the internet is 100% 
                secure.
              </p>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil 
                the purposes outlined in this policy, or as required by law. Guest registration 
                records are retained as required under Indian hotel regulations.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of promotional communications</li>
              </ul>

              <h2>7. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can 
                control cookie settings through your browser preferences. Essential cookies 
                required for website functionality cannot be disabled.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be 
                posted on this page with an updated revision date. We encourage you to 
                review this policy periodically.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your 
                personal information, please contact us:
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
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-accent hover:text-accent-dark"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> {contact.address.line1},{' '}
                  {contact.address.line2}, {contact.address.city},{' '}
                  {contact.address.state} {contact.address.pincode}
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
