/* ==========================================================================
   liv.inn — Content Layer
   
   Synchronized with centralized src/content/ and src/config/
   Strictly verified for liv.inn Pune (nature views, verified amenities).
   ========================================================================== */

import { STRINGS } from '@/config/strings';
import { IMAGES } from '@/config/image';
import {
  hotelInfo,
  roomsList,
  allFacilitiesAndServices,
  contactConfig,
} from '@/content';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Room {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  natureViewHighlight: string;
  amenities: string[];
  keyFeatures: string[];
  bedType: string;
  maxOccupancy: number;
  image: string;
  priceLabel: string;
  pricingNote: string;
  availabilityLabel: string;
}

export interface Facility {
  id: string;
  icon: string;
  title: string;
  category: 'facility' | 'service';
  description: string;
  fullDescription: string;
  availability: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
  icon?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Brand, Contact, Social
// ---------------------------------------------------------------------------

export const brand = {
  name: STRINGS.brand.name,
  legalName: STRINGS.brand.legalName,
  tagline: STRINGS.brand.tagline,
  description: STRINGS.brand.description,
  logoPath: IMAGES.brand.logo,
} as const;

export const contact = {
  phone: contactConfig.phone,
  whatsapp: contactConfig.whatsapp,
  email: contactConfig.email,
  address: {
    property: contactConfig.address.property,
    street: contactConfig.address.street,
    locality: contactConfig.address.locality,
    city: contactConfig.address.city,
    state: contactConfig.address.state,
    pincode: contactConfig.address.pincode,
    country: contactConfig.address.country,
    landmark: contactConfig.address.landmark,
    fullAddressDisplay: contactConfig.address.fullAddressDisplay,
    note: contactConfig.address.note,
  },
  googleMapsUrl: contactConfig.maps.googleMapsSearchUrl,
  googleMapsEmbed: contactConfig.maps.puneCityEmbedUrl,
  social: contactConfig.social,
} as const;

export const social = STRINGS.contact.social;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navLinks: NavLink[] = STRINGS.nav.links.map((link) => ({
  label: link.label,
  href: link.href,
}));

// ---------------------------------------------------------------------------
// Rooms
// ---------------------------------------------------------------------------

export const rooms: Room[] = roomsList.map((r) => ({
  id: r.id,
  name: r.name,
  category: r.category,
  description: r.fullDescription,
  shortDescription: r.shortDescription,
  natureViewHighlight: r.natureViewHighlight,
  amenities: [...r.amenities],
  keyFeatures: [...r.keyFeatures],
  bedType: r.bedType,
  maxOccupancy: r.maxOccupancy,
  image: r.image || IMAGES.rooms[r.id] || '/images/rooms/premium_room.jpg',
  priceLabel: r.priceDisplay,
  pricingNote: r.pricingNote,
  availabilityLabel: r.availabilityDisplay,
}));

// ---------------------------------------------------------------------------
// Facilities & Why Choose
// ---------------------------------------------------------------------------

export const facilities: Facility[] = allFacilitiesAndServices.map((f) => ({
  id: f.id,
  icon: f.icon,
  title: f.title,
  category: f.category,
  description: f.shortDescription,
  fullDescription: f.fullDescription,
  availability: f.availability,
}));

export const whyChooseFeatures = STRINGS.home.whyChoose.features.map((w) => ({
  icon: w.icon,
  title: w.title,
  description: w.description,
}));

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export const galleryImages: GalleryImage[] = IMAGES.gallery.map((g) => ({
  src: g.src,
  alt: g.alt,
  category: g.category,
}));

// ---------------------------------------------------------------------------
// Nearby Establishments (Pune)
// ---------------------------------------------------------------------------

export const nearbyAttractions: NearbyAttraction[] = contactConfig.nearbyCategories.map(
  (item) => ({
    name: item.category,
    distance: item.statusText,
    description: item.description,
    icon: item.icon,
  })
);

// ---------------------------------------------------------------------------
// Guest Information
// ---------------------------------------------------------------------------

export const guestInfo = STRINGS.guestInfo;

// ---------------------------------------------------------------------------
// SEO Config
// ---------------------------------------------------------------------------

export const seoConfig = {
  siteUrl: STRINGS.seo.siteUrl,
  defaultTitle: STRINGS.seo.defaultTitle,
  titleTemplate: STRINGS.seo.titleTemplate,
  defaultDescription: STRINGS.seo.defaultDescription,
  defaultKeywords: [...STRINGS.seo.defaultKeywords],
} as const;

export { hotelInfo, roomsList, allFacilitiesAndServices, contactConfig };