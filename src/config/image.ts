/**
 * Centralized Image Configuration for Hotel Sky Executive (Pune)
 * 
 * Manages all image assets, brand logo, room photography, and gallery previews.
 * Brand identity uses the official Hotel Sky Executive logo in /SE_Logo.jpeg.
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
    logo: '/SE_Logo.jpeg',
    logoAlt: 'Hotel Sky Executive — Lonikand, Pune',
    favicon: '/favicon.ico',
    ogImage: '/SE_Logo.jpeg',
  },
  patterns: {
    heroDots: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
    accentDots: 'radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)',
    ctaDots: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)',
  },
  hero: '/images/property/sky_building_exterior.webp',
  building: '/images/property/sky_building_exterior.webp',
  interior: '/images/services/reception.jpg',
  hero1: '/hero1.avif',
  natureView: '/images/property/nature_view.jpg',
  cloudKitchen: '/images/property/cloud_kitchen.jpg',
  peacefulAmbience: '/images/property/peaceful_ambience.jpg',
  videos: {
    heroMp4: '/videos/hero-resort.mp4',
    heroWebm: '/videos/hero-resort.webm',
  },
  services: {
    rooms: '/images/rooms/sky_executive_room.webp',
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
    'premium-room': '/images/rooms/sky_executive_room.webp',
    'double-room': '/images/rooms/sky_executive_room.webp',
    deluxe: '/images/rooms/sky_executive_room.webp',
    executive: '/images/rooms/executive_room.jpg',
    twin: '/images/rooms/twin_room.jpg',
    suite: '/images/rooms/suite_room.jpg',
    standard: '/images/rooms/sky_executive_room.webp',
  } as Record<string, string>,
  gallery: [
    {
      id: 'prop-1',
      src: '/images/property/sky_building_exterior.webp',
      alt: 'Hotel Sky Executive Jaywant Tower Building Exterior in Lonikand, Pune',
      category: 'property',
    },
    {
      id: 'prop-2',
      src: '/images/services/reception.jpg',
      alt: '24/7 Front Desk Reception and Executive Hospitality at Hotel Sky Executive',
      category: 'property',
    },
    {
      id: 'rom-1',
      src: '/images/rooms/sky_executive_room.webp',
      alt: 'Hotel Sky Executive Double Bed Room with Plush Bed and Ample Space',
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
