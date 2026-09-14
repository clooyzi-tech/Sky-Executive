import type { Metadata } from 'next';
import { seoConfig, brand, contact } from './content';

/**
 * Generate page-specific metadata with sensible defaults.
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace('%s', title)
    : seoConfig.defaultTitle;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const url = `${seoConfig.siteUrl}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...seoConfig.defaultKeywords],
    authors: [{ name: brand.name }],
    creator: brand.name,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      title: pageTitle,
      description: pageDescription,
      siteName: brand.name,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

/**
 * Generate Hotel / LodgingBusiness JSON-LD structured data.
 */
export function hotelJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: brand.name,
    description: brand.description,
    url: seoConfig.siteUrl,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.pincode,
      addressCountry: contact.address.country,
    },
    // No fake ratings, reviews, or prices
  };
}

/**
 * Generate Organization JSON-LD structured data.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: seoConfig.siteUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.pincode,
      addressCountry: contact.address.country,
    },
  };
}

/**
 * Generate WebSite JSON-LD structured data.
 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: seoConfig.siteUrl,
  };
}

/**
 * Generate BreadcrumbList JSON-LD for inner pages.
 */
export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: seoConfig.siteUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${seoConfig.siteUrl}${item.href}`,
      })),
    ],
  };
}
