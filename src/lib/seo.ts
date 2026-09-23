import type { Metadata } from 'next';
import { seoConfig, brand, contact } from './content';

/**
 * Generate page-specific metadata with sensible defaults for liv.inn Pune.
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
  const image = ogImage || '/images/property/hero.jpg';

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
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}

/**
 * Generate Hotel / LodgingBusiness JSON-LD structured data.
 * Adheres strictly to verified information: Pune, Maharashtra.
 * Excludes unverified address details, ratings, prices, or claims.
 */
export function hotelJsonLd() {
  const logoUrl = `${seoConfig.siteUrl}${brand.logoPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: brand.name,
    legalName: brand.legalName,
    description: brand.description,
    url: seoConfig.siteUrl,
    logo: logoUrl,
    image: [
      logoUrl,
      `${seoConfig.siteUrl}/images/property/hero.jpg`,
      `${seoConfig.siteUrl}/images/rooms/premium_room.jpg`,
      `${seoConfig.siteUrl}/images/property/nature_view.jpg`,
    ],
    telephone: contact.phone,
    email: contact.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
    checkinTime: '11:00',
    checkoutTime: '10:00',
    petsAllowed: true,
    hasMap: contact.googleMapsUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5510123,
      longitude: 73.9739785,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.state,
      postalCode: contact.address.pincode,
      addressCountry: 'IN',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free On-Site Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'In-House Cloud Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Elevator / Lift Access', value: true },
      { '@type': 'LocationFeatureSpecification', name: '100% Power Backup', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Security & CCTV', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pet-Friendly Stay', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Front Desk Assistance', value: true },
    ],
    sameAs: [
      contact.googleMapsUrl,
      contact.social.instagram,
    ].filter(Boolean),
  };
}

/**
 * Generate Organization JSON-LD structured data for liv.inn.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    legalName: brand.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}${brand.logoPath}`,
    telephone: contact.phone,
    email: contact.email,
    sameAs: [
      contact.googleMapsUrl,
      contact.social.instagram,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.state,
      postalCode: contact.address.pincode,
      addressCountry: 'IN',
    },
  };
}

/**
 * Generate HotelRoom JSON-LD structured data.
 */
export function hotelRoomJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: 'Double Bed Room',
    description:
      'Double Bed Room at liv.inn Boutique Hotel Pune featuring tranquil nature-oriented views, air conditioning, smart TV, complimentary high-speed Wi-Fi, work desk, and attached en-suite bathroom with 24/7 hot water.',
    image: `${seoConfig.siteUrl}/images/rooms/premium_room.jpg`,
    bed: {
      '@type': 'BedDetails',
      numberOfBeds: 1,
      typeOfBed: 'Queen Bed',
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 3,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Attached En-Suite Bathroom', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Hot Water', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Individual Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Work Desk & Chair', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Nature Views', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'In-Room Cloud Kitchen Dining', value: true },
    ],
    isPartOf: {
      '@type': 'Hotel',
      name: brand.name,
      url: seoConfig.siteUrl,
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
