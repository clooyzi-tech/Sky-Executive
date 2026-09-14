/* ==========================================================================
   Liv.inn — Content Layer
   
   Synchronized with centralized src/config/ (strings.ts, image.ts, icons.ts).
   Provides backward compatibility and structured typings for existing utilities.
   ========================================================================== */

import { STRINGS } from '@/config/strings';
import { IMAGES, type GalleryCategory } from '@/config/image';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  bedType: string;
  maxOccupancy: number;
  image: string;
  /** Short label shown on cards, e.g. "From ₹2,500/night" — leave empty to hide */
  priceLabel: string;
}

export interface Facility {
  icon: string; // lucide-react icon name or identifier
  title: string;
  description: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
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
  tagline: STRINGS.brand.tagline,
  description: STRINGS.brand.description,
  logoPath: IMAGES.brand.logo,
} as const;

export const contact = {
  phone: STRINGS.contact.phone,
  whatsapp: STRINGS.contact.whatsapp,
  email: STRINGS.contact.email,
  address: STRINGS.contact.address,
  googleMapsUrl: STRINGS.contact.googleMapsUrl,
  googleMapsEmbed: STRINGS.contact.googleMapsEmbed,
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

export const rooms: Room[] = STRINGS.rooms.list.map((r) => ({
  id: r.id,
  name: r.name,
  description: r.description,
  amenities: [...r.amenities],
  bedType: r.bedType,
  maxOccupancy: r.maxOccupancy,
  image: IMAGES.rooms[r.id] || '',
  priceLabel: r.priceLabel,
}));

// ---------------------------------------------------------------------------
// Facilities & Why Choose
// ---------------------------------------------------------------------------

export const facilities: Facility[] = STRINGS.facilities.map((f) => ({
  icon: f.icon,
  title: f.title,
  description: f.description,
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
// Nearby Attractions
// ---------------------------------------------------------------------------

export const nearbyAttractions: NearbyAttraction[] =
  STRINGS.location.attractions.items.map((item) => ({
    name: item.name,
    distance: item.distance,
    description: item.description,
  }));

// ---------------------------------------------------------------------------
// Guest Information (QR page)
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