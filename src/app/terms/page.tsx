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
  const { terms, contact } = STRINGS;

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
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              {terms.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              {terms.header.subtitle}
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
                {terms.lastUpdated}
              </p>

              <p>
                {terms.intro}
              </p>

              <h2>1. Reservations &amp; Booking</h2>
              <ul className="list-disc pl-5">
                <li>All reservations are subject to availability.</li>
                <li>A valid government-issued photo ID is mandatory at check-in for all guests, as required by Indian law.</li>
                <li>The Hotel reserves the right to refuse accommodation if valid ID is not provided.</li>
                <li>Room rates and availability may vary depending on the date and season.</li>
              </ul>

              <h2>2. Check-in &amp; Check-out</h2>
              <ul className="list-disc pl-5">
                <li>Standard check-in time is <strong>12:00 PM</strong>.</li>
                <li>Standard check-out time is <strong>11:00 AM</strong>.</li>
                <li>Early check-in and late check-out are subject to availability and may incur additional charges.</li>
                <li>Failure to check out by the designated time may result in an additional day&apos;s charge.</li>
              </ul>

              <h2>3. Cancellation Policy</h2>
              <ul className="list-disc pl-5">
                <li>Cancellations must be made at least 24 hours prior to the check-in date for a full refund.</li>
                <li>Cancellations made within 24 hours of check-in may be subject to a charge equivalent to one night&apos;s stay.</li>
                <li>No-shows will be charged the full booking amount.</li>
                <li>The Hotel reserves the right to modify the cancellation policy for special dates, festivals, and peak seasons.</li>
              </ul>

              <h2>4. Payment</h2>
              <ul className="list-disc pl-5">
                <li>Payment is accepted via cash, UPI, credit cards, and debit cards.</li>
                <li>Full payment is required at the time of check-in unless otherwise arranged.</li>
                <li>Prices are inclusive of applicable taxes unless stated otherwise.</li>
              </ul>

              <h2>5. Guest Conduct</h2>
              <ul className="list-disc pl-5">
                <li>Smoking is strictly prohibited inside hotel rooms. Designated smoking areas may be available.</li>
                <li>Guests are expected to maintain appropriate conduct and noise levels, especially after 10:00 PM.</li>
                <li>Illegal activities of any kind are strictly prohibited on hotel premises.</li>
                <li>The Hotel reserves the right to ask guests to vacate the premises in case of violation of hotel policies, without refund.</li>
              </ul>

              <h2>6. Visitors</h2>
              <ul className="list-disc pl-5">
                <li>All visitors must register at the front desk with valid ID.</li>
                <li>Visitors are not permitted in guest rooms after 10:00 PM.</li>
                <li>The Hotel reserves the right to restrict visitor access for security purposes.</li>
              </ul>

              <h2>7. Damage &amp; Liability</h2>
              <ul className="list-disc pl-5">
                <li>Guests are liable for any damage to hotel property during their stay.</li>
                <li>The cost of repairs or replacement will be charged to the guest.</li>
                <li>The Hotel is not responsible for loss or damage to personal belongings left on the premises.</li>
                <li>Guests are advised to use the in-room safe or front desk locker for valuables.</li>
              </ul>

              <h2>8. Food &amp; Beverages</h2>
              <ul className="list-disc pl-5">
                <li>Outside food is allowed in guest rooms.</li>
                <li>Room service and dining facilities (if available) are subject to their own terms.</li>
                <li>Consumption of alcohol is governed by the laws of the State of Maharashtra.</li>
              </ul>

              <h2>9. Internet &amp; Technology</h2>
              <ul className="list-disc pl-5">
                <li>Complimentary Wi-Fi is provided for guest use.</li>
                <li>The Hotel is not responsible for the speed, reliability, or security of the internet connection.</li>
                <li>Guests must not use the Hotel&apos;s internet for illegal activities.</li>
              </ul>

              <h2>10. Privacy</h2>
              <p>
                The Hotel collects and processes personal data in accordance with our{' '}
                <a href="/privacy-policy" className="text-accent hover:text-accent-dark underline">
                  Privacy Policy
                </a>
                . By staying at the Hotel, you consent to the collection and use of your 
                information as described in our Privacy Policy.
              </p>

              <h2>11. Force Majeure</h2>
              <p>
                The Hotel shall not be liable for any failure or delay in performing its 
                obligations due to circumstances beyond its reasonable control, including 
                natural disasters, government actions, epidemics, or other force majeure events.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with 
                the laws of India. Any disputes shall be subject to the exclusive jurisdiction 
                of the courts in Mumbai, Maharashtra.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                The Hotel reserves the right to modify these terms and conditions at any time. 
                Updated terms will be posted on this page. Continued use of our services 
                constitutes acceptance of the revised terms.
              </p>

              <h2>14. Contact</h2>
              <p>
                For questions regarding these terms, please contact us:
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
