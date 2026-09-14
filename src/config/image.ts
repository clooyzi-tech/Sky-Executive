/**
 * Centralized Image Configuration for Liv.inn
 * 
 * All image assets, paths, fallbacks, and metadata are managed here.
 * When real photography or assets are added, update them in this file.
 */

export type GalleryCategory = 'hotel' | 'rooms' | 'interiors' | 'exterior';

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width?: number;
  height?: number;
}

export interface RoomImages {
  standard: string;
  deluxe: string;
  premium: string;
  [key: string]: string;
}

export const IMAGES = {
  brand: {
    logo: '', // Path to logo e.g. '/assets/images/logo.png'
    logoAlt: 'Liv.inn Boutique Hotel Mumbai',
    favicon: '/favicon.ico',
    ogImage: '', // OpenGraph preview image for social sharing
  },
  patterns: {
    heroDots: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
    accentDots: 'radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)',
    ctaDots: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
  },
  rooms: {
    standard: '', // Room imagery paths
    deluxe: '',
    premium: '',
  } as RoomImages,
  gallery: [
    { id: 'ext-1', src: '', alt: 'Hotel exterior view', category: 'exterior' },
    { id: 'hot-1', src: '', alt: 'Hotel lobby and reception', category: 'hotel' },
    { id: 'rom-1', src: '', alt: 'Standard room interior', category: 'rooms' },
    { id: 'rom-2', src: '', alt: 'Deluxe room with workspace', category: 'rooms' },
    { id: 'rom-3', src: '', alt: 'Premium room with king bed', category: 'rooms' },
    { id: 'int-1', src: '', alt: 'Modern bathroom amenities', category: 'interiors' },
    { id: 'int-2', src: '', alt: 'Corridor and hallway design', category: 'interiors' },
    { id: 'ext-2', src: '', alt: 'Building facade at night', category: 'exterior' },
    { id: 'int-3', src: '', alt: 'Comfortable seating area', category: 'interiors' },
    { id: 'rom-4', src: '', alt: 'Room details and furnishing', category: 'rooms' },
    { id: 'ext-3', src: '', alt: 'Front entrance of Liv.inn', category: 'exterior' },
    { id: 'hot-2', src: '', alt: 'Reception desk close-up', category: 'hotel' },
  ] as GalleryImageItem[],
} as const;

/**
 * Get room image path by room id, with fallback
 */
export function getRoomImage(roomId: string): string {
  return IMAGES.rooms[roomId] || '';
}

/**
 * Get gallery images, optionally filtered by category
 */
export function getGalleryImages(category?: GalleryCategory | 'all'): GalleryImageItem[] {
  if (!category || category === 'all') {
    return [...IMAGES.gallery];
  }
  return IMAGES.gallery.filter((img) => img.category === category);
}

export default IMAGES;
