import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/config/fonts';
import { STRINGS } from '@/config/strings';
import { websiteJsonLd, organizationJsonLd } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
import EnquiryPopup from '@/components/ui/EnquiryPopup';

export const metadata: Metadata = {
  title: STRINGS.seo.defaultTitle,
  description: STRINGS.seo.defaultDescription,
  keywords: [...STRINGS.seo.defaultKeywords],
  authors: [{ name: STRINGS.brand.name }],
  creator: STRINGS.brand.name,
  metadataBase: new URL(STRINGS.seo.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: STRINGS.seo.siteUrl,
    siteName: STRINGS.brand.name,
    title: STRINGS.seo.defaultTitle,
    description: STRINGS.seo.defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: STRINGS.seo.defaultTitle,
    description: STRINGS.seo.defaultDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-clip">
        <Header />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
        <EnquiryPopup />
      </body>
    </html>
  );
}
