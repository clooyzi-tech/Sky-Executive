import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { brand, contact } from '@/lib/content';
import { whatsappUrl, phoneUrl, formatAddress } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description: `Get in touch with ${brand.name}. Send an enquiry, call us, or message us on WhatsApp for room availability and bookings.`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: 'Contact', href: '/contact' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              We&apos;d love to hear from you — reach out anytime
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-charcoal">
                      Get in Touch
                    </h2>
                    <div className="mt-1 h-px w-12 bg-accent" />
                    <p className="mt-4 text-slate-deep leading-relaxed">
                      Whether you have a question about availability, pricing, or
                      anything else, our team is ready to help.
                    </p>
                  </div>

                  {/* Quick Contact Cards */}
                  <div className="space-y-4">
                    <a
                      href={whatsappUrl("Hi! I'd like to enquire about rooms at Liv.inn.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-4 transition-all duration-300 hover:border-green-200 hover:shadow-md"
                      id="contact-whatsapp"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">WhatsApp</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.whatsapp}
                        </p>
                        <p className="mt-1 text-xs text-green-600">
                          Tap to chat — instant response
                        </p>
                      </div>
                    </a>

                    <a
                      href={phoneUrl()}
                      className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                      id="contact-call"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent transition-colors group-hover:bg-accent/20">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">Call Us</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.phone}
                        </p>
                        <p className="mt-1 text-xs text-accent">
                          Available 24/7
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                      id="contact-email"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent transition-colors group-hover:bg-accent/20">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">Email</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.email}
                        </p>
                        <p className="mt-1 text-xs text-accent">
                          We reply within 24 hours
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">Address</h3>
                        <p className="text-sm text-slate-deep leading-relaxed">
                          {formatAddress()}
                        </p>
                        <a
                          href={contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center gap-1 text-xs text-accent hover:text-accent-dark"
                        >
                          View on Google Maps
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
