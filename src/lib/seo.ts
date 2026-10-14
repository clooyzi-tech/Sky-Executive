import type { Metadata } from 'next';
import { seoConfig, brand, contact } from './content';

/**
 * Generate page-specific metadata with sensible defaults for Hotel Sky Executive Pune.
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
  const siteUrl = seoConfig.siteUrl;
  const url = `${siteUrl}${path}`;
  const image = ogImage || `${siteUrl}/images/property/building_exterior.webp`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...seoConfig.defaultKeywords],
    authors: [{ name: brand.name }],
    creator: brand.name,
    metadataBase: new URL(siteUrl),
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
      images: [
        {
          url: image.startsWith('http') ? image : `${siteUrl}${image}`,
          secureUrl: image.startsWith('http') ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          type: image.endsWith('.webp') ? 'image/webp' : 'image/jpeg',
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image.startsWith('http') ? image : `${siteUrl}${image}`],
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
      `${seoConfig.siteUrl}/images/property/building_exterior.webp`,
      `${seoConfig.siteUrl}/images/rooms/double_bed_room.webp`,
      `${seoConfig.siteUrl}/images/property/interior_design.webp`,
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
      latitude: 18.6082,
      longitude: 74.01528,
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
 * Generate Organization JSON-LD structured data for Hotel Sky Executive.
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
      'Double Bed Room at Hotel Sky Executive Pune featuring comfortable accommodation, air conditioning, smart TV, complimentary high-speed Wi-Fi, work desk, and attached en-suite bathroom with 24/7 hot water.',
    image: `${seoConfig.siteUrl}/images/rooms/double_bed_room.webp`,
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

/**
 * Generate standalone FAQPage JSON-LD node.
 * Used within consolidated @graph collections.
 */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Consolidated @graph JSON-LD schema for Homepage (/).
 * Incorporates WebSite, Organization, Hotel (LodgingBusiness), and visible FAQPage.
 */
export function homepageJsonLd(faqs: { question: string; answer: string }[]) {
  const siteUrl = seoConfig.siteUrl;
  const logoUrl = `${siteUrl}${brand.logoPath}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: brand.name,
        url: siteUrl,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: brand.name,
        legalName: brand.legalName,
        url: siteUrl,
        logo: logoUrl,
        telephone: contact.phone,
        email: contact.email,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: contact.phone,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'mr'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.address.street,
          addressLocality: contact.address.locality,
          addressRegion: contact.address.state,
          postalCode: contact.address.pincode,
          addressCountry: 'IN',
        },
        sameAs: [contact.googleMapsUrl].filter(Boolean),
      },
      {
        '@type': 'Hotel',
        '@id': `${siteUrl}/#hotel`,
        name: brand.name,
        legalName: brand.legalName,
        description: brand.description,
        url: siteUrl,
        logo: logoUrl,
        image: [
          logoUrl,
          `${siteUrl}/images/property/building_exterior.webp`,
          `${siteUrl}/images/rooms/double_bed_room.webp`,
          `${siteUrl}/images/property/interior_design.webp`,
          `${siteUrl}/images/property/nature_view.jpg`,
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
          latitude: 18.6082,
          longitude: 74.01528,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.address.street,
          addressLocality: contact.address.locality,
          addressRegion: contact.address.state,
          postalCode: contact.address.pincode,
          addressCountry: 'IN',
        },
        parentOrganization: {
          '@id': `${siteUrl}/#organization`,
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
      },
      faqJsonLd(faqs),
    ],
  };
}

/**
 * Consolidated @graph JSON-LD schema for Rooms Page (/rooms).
 * Incorporates BreadcrumbList, HotelRoom (linked to #hotel), and visible FAQPage.
 */
export function roomsPageJsonLd(faqs: { question: string; answer: string }[]) {
  const siteUrl = seoConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Executive Rooms', item: `${siteUrl}/rooms` },
        ],
      },
      {
        '@type': 'HotelRoom',
        '@id': `${siteUrl}/rooms#double-bed-room`,
        name: 'Executive Double Bed Room',
        description:
          'Executive Double Bed Room at Hotel Sky Executive Pune measuring 200 sq. ft with Queen bed, en-suite bathroom with 24/7 hot water, air conditioning, smart TV, complimentary high-speed Wi-Fi, work desk, and in-room cloud kitchen dining.',
        image: `${siteUrl}/images/rooms/double_bed_room.webp`,
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
        floorSize: {
          '@type': 'QuantitativeValue',
          value: 200,
          unitCode: 'FTK',
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
          '@id': `${siteUrl}/#hotel`,
        },
      },
      faqJsonLd(faqs),
    ],
  };
}

/**
 * Consolidated @graph JSON-LD schema for Location Page (/location).
 * Incorporates BreadcrumbList, Place (with geo & hasMap), and visible FAQPage.
 */
export function locationPageJsonLd(faqs: { question: string; answer: string }[]) {
  const siteUrl = seoConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Location & Connectivity', item: `${siteUrl}/location` },
        ],
      },
      {
        '@type': 'Place',
        '@id': `${siteUrl}/location#place`,
        name: `${brand.name} Physical Location`,
        hasMap: contact.googleMapsUrl,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.6082,
          longitude: 74.01528,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.address.street,
          addressLocality: contact.address.locality,
          addressRegion: contact.address.state,
          postalCode: contact.address.pincode,
          addressCountry: 'IN',
        },
      },
      faqJsonLd(faqs),
    ],
  };
}

/**
 * Consolidated @graph JSON-LD schema for Contact Page (/contact).
 * Incorporates BreadcrumbList, ContactPage (linked to #organization), and visible FAQPage.
 */
export function contactPageJsonLd(faqs: { question: string; answer: string }[]) {
  const siteUrl = seoConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact & Stay Enquiry', item: `${siteUrl}/contact` },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact#webpage`,
        url: `${siteUrl}/contact`,
        name: `Contact Front Desk | ${brand.name}`,
        mainEntity: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      faqJsonLd(faqs),
    ],
  };
}

/**
 * Consolidated @graph JSON-LD schema for Guest Information Portal (/guest-information).
 * Incorporates BreadcrumbList, WebPage, and visible FAQPage.
 */
export function guestInfoPageJsonLd(faqs: { question: string; answer: string }[]) {
  const siteUrl = seoConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Guest Information', item: `${siteUrl}/guest-information` },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/guest-information#webpage`,
        url: `${siteUrl}/guest-information`,
        name: `Guest Portal & House Guidelines | ${brand.name}`,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
      },
      faqJsonLd(faqs),
    ],
  };
}

/**
 * Consolidated @graph JSON-LD schema for About Page (/about).
 * Incorporates BreadcrumbList and AboutPage (linked to #organization).
 */
export function aboutPageJsonLd() {
  const siteUrl = seoConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about` },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about#webpage`,
        url: `${siteUrl}/about`,
        name: `About ${brand.name} | Executive Boutique Hospitality Pune`,
        mainEntity: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  };
}
