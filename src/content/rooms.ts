/**
 * Rooms Content & Configuration — liv.inn (Pune)
 * 
 * Sourced directly from verified developer document:
 * LivInn_Hotel_Chatbot_Information.docx
 * 
 * Verified:
 * - Total rooms: 25
 * - Room distribution: 5 rooms on each floor (across 5 floors)
 * - Room category: Premium rooms
 * - View: Nature-oriented view
 * - Prices: Marked as "To be confirmed" (not published)
 * 
 * Built with a reusable architecture so additional categories can be added
 * easily in the future without redesigning UI components.
 */

export interface RoomItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  natureViewHighlight: string;
  totalRooms: number;
  distribution: string;
  bedType: string;
  maxOccupancy: number;
  amenities: string[];
  keyFeatures: string[];
  priceStatus: 'tbc' | 'verified';
  priceDisplay: string;
  pricingNote: string;
  availabilityStatus: 'subject_to_confirmation' | 'available' | 'sold_out';
  availabilityDisplay: string;
  image: string;
}

export const roomsList: RoomItem[] = [
  {
    id: 'premium-room',
    name: 'Premium Room',
    category: 'Premium Accommodation',
    shortDescription:
      'A refined, calm living space featuring peaceful nature-oriented views, comfortable bedding, and dedicated amenities designed for restful stays in Pune.',
    fullDescription:
      'Our Premium Rooms are thoughtfully arranged across all five floors of liv.inn, with five rooms per floor to maintain privacy and tranquility. Each room is positioned to offer pleasant nature-oriented views, bringing natural light and verdant serenity indoors. Equipped with high-speed Wi-Fi, air conditioning, modern en-suite bathroom, and dedicated room care.',
    natureViewHighlight: 'Pleasant nature-oriented view facing tranquil greenery',
    totalRooms: 25,
    distribution: '5 rooms on each floor (Floors 1 to 5)',
    bedType: 'King / Queen Bed',
    maxOccupancy: 2,
    amenities: [
      'Nature-Oriented Greenery View',
      'Complimentary High-Speed Wi-Fi',
      'Air Conditioning & Climate Control',
      'Private En-Suite Bathroom',
      'Daily Housekeeping & Linen Refresh',
      'Laundry Service Available',
      'Flat-Screen Television',
      'Work Desk & Seating Area',
      '24/7 Guest Assistance Support',
      'Cloud Kitchen In-Room Dining Access',
    ],
    keyFeatures: [
      '25 rooms total inventory',
      '5 rooms per floor intimacy',
      'Direct nature outlook',
      'Quiet, clean ambiance',
    ],
    priceStatus: 'tbc',
    priceDisplay: 'Pricing to be confirmed upon enquiry',
    pricingNote: 'Official tariffs and taxes will be confirmed by hotel management. Enquire for current seasonal rates.',
    availabilityStatus: 'subject_to_confirmation',
    availabilityDisplay: 'Enquire for Dates',
    image: '/images/rooms/premium_room.jpg',
  },
];

export const roomsOverview = {
  title: 'Premium Rooms',
  subtitle: 'Thoughtfully designed spaces with tranquil nature views',
  totalInventoryBadge: '25 Rooms • 5 Floors • 5 Rooms per Floor',
  description:
    'liv.inn offers 25 premium rooms curated for guests seeking a peaceful stay in Pune. With five rooms situated on each floor, enjoy an uncluttered, quiet atmosphere with verdant views.',
  natureHighlightBadge: 'Nature-Oriented Views on Every Floor',
};
