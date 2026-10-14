import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/config/fonts';
import { STRINGS } from '@/config/strings';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import EnquiryPopup from '@/components/ui/EnquiryPopup';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

const siteUrl = STRINGS.seo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: STRINGS.seo.defaultTitle,
  description: STRINGS.seo.defaultDescription,
  keywords: [...STRINGS.seo.defaultKeywords],
  authors: [{ name: STRINGS.brand.name }],
  creator: STRINGS.brand.name,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/sky-executive-logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/sky-executive-logo.svg' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: STRINGS.brand.name,
    title: STRINGS.seo.defaultTitle,
    description: STRINGS.seo.defaultDescription,
    images: [
      {
        url: `${siteUrl}/images/property/building_exterior.webp`,
        secureUrl: `${siteUrl}/images/property/building_exterior.webp`,
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: `${STRINGS.brand.name} Building Exterior`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: STRINGS.seo.defaultTitle,
    description: STRINGS.seo.defaultDescription,
    images: [`${siteUrl}/images/property/building_exterior.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-clip">
        <Header />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppButton />
        <EnquiryPopup />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
