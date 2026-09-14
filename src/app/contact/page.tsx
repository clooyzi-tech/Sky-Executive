import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
} from '@/config/icons';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import { whatsappUrl, phoneUrl, formatAddress } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.contact.title,
  description: STRINGS.seo.pages.contact.description,
  path: '/contact',
});

export default function ContactPage() {
  const { contactPage, contact } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: contactPage.header.title, href: '/contact' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              {contactPage.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              {contactPage.header.subtitle}
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
                      {contactPage.sidebar.title}
                    </h2>
                    <div className="mt-1 h-px w-12 bg-accent" />
                    <p className="mt-4 text-slate-deep leading-relaxed">
                      {contactPage.sidebar.description}
                    </p>
                  </div>

                  {/* Quick Contact Cards */}
                  <div className="space-y-4">
                    <a
                      href={whatsappUrl(contact.prefilledMessages.contactPageEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-4 transition-all duration-300 hover:border-green-200 hover:shadow-md"
                      id="contact-whatsapp"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">{contact.cards.whatsapp.title}</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.whatsapp}
                        </p>
                        <p className="mt-1 text-xs text-green-600">
                          {contact.cards.whatsapp.subtitle}
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
                        <h3 className="font-medium text-charcoal">{contact.cards.call.title}</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.phone}
                        </p>
                        <p className="mt-1 text-xs text-accent">
                          {contact.cards.call.subtitle}
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
                        <h3 className="font-medium text-charcoal">{contact.cards.email.title}</h3>
                        <p className="text-sm text-slate-deep">
                          {contact.email}
                        </p>
                        <p className="mt-1 text-xs text-accent">
                          {contact.cards.email.subtitle}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-xl border border-border-light bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal">{contact.cards.address.title}</h3>
                        <p className="text-sm text-slate-deep leading-relaxed">
                          {formatAddress()}
                        </p>
                        <a
                          href={contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center gap-1 text-xs text-accent hover:text-accent-dark"
                        >
                          {contact.cards.address.viewMap}
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
