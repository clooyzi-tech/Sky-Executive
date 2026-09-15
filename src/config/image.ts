/**
 * Centralized Image Configuration for liv.inn (Pune)
 * 
 * Manages all image assets, brand logo, room photography, and gallery previews.
 * Brand identity uses the official liv.inn gold circular logo in /livinn_logo.jpg.
 */

export type GalleryCategory = 'property' | 'rooms' | 'nature' | 'dining';

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width?: number;
  height?: number;
}

export const IMAGES = {
  brand: {
    logo: '/livinn_logo.jpg',
    logoAlt: 'liv.inn Boutique Hotel — Pune',
    favicon: '/favicon.ico',
    ogImage: '/images/property/hero.jpg',
  },
  patterns: {
    heroDots: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
    accentDots: 'radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)',
    ctaDots: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)',
  },
  hero: '/images/property/hero.jpg',
  natureView: '/images/property/nature_view.jpg',
  cloudKitchen: '/images/property/cloud_kitchen.jpg',
  services: {
    rooms: '/images/rooms/premium_room.jpg',
    housekeeping: '/images/services/housekeeping.jpg',
    reception: '/images/services/reception.jpg',
    wifi: '/images/services/wifi_desk.jpg',
    parking: '/images/services/parking.jpg',
    dining: '/images/property/cloud_kitchen.jpg',
    bathroom: '/images/services/bathroom.jpg',
    ac: '/images/services/ac.jpg',
    banner: '/images/services/banner.jpg',
  },
  rooms: {
    'premium-room': '/images/rooms/premium_room.jpg',
    deluxe: '/images/rooms/premium_room.jpg',
    executive: '/images/rooms/executive_room.jpg',
    twin: '/images/rooms/twin_room.jpg',
    suite: '/images/rooms/suite_room.jpg',
    standard: '/images/rooms/premium_room.jpg',
  } as Record<string, string>,
  gallery: [
    {
      id: 'prop-1',
      src: '/images/property/hero.jpg',
      alt: 'liv.inn Boutique Hotel Exterior amidst Pune hills at twilight',
      category: 'property',
    },
    {
      id: 'rom-1',
      src: '/images/rooms/premium_room.jpg',
      alt: 'Premium Room with king bed, warm wood accents, and nature views',
      category: 'rooms',
    },
    {
      id: 'nat-1',
      src: '/images/property/nature_view.jpg',
      alt: 'Scenic morning nature-oriented view overlooking Pune greenery',
      category: 'nature',
    },
    {
      id: 'din-1',
      src: '/images/property/cloud_kitchen.jpg',
      alt: 'In-house Cloud Kitchen dining and fresh breakfast presentation',
      category: 'dining',
    },
  ] as GalleryImageItem[],
} as const;

/**
 * Get room image path by room id, with fallback
 */
export function getRoomImage(roomId: string): string {
  return IMAGES.rooms[roomId] || '/images/rooms/premium_room.jpg';
}

/**
 * Get gallery images, optionally filtered by category
 */
export function getGalleryImages(category?: string | 'all'): GalleryImageItem[] {
  if (!category || category === 'all') {
    return [...IMAGES.gallery];
  }
  return IMAGES.gallery.filter((img) => img.category === category);
}

export default IMAGES;
