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
  roomSize?: string;
  shortDescription: string;
  fullDescription: string;
  natureViewHighlight: string;
  totalRooms: number;
  distribution: string;
  bedType: string;
  maxOccupancy: number;
  extraBedInfo?: string;
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
    roomSize: '200 sq. ft.',
    shortDescription:
      'A 200 sq. ft. refined, peaceful room with serene nature views, queen-size bed (180 cm wide), modern en-suite bathroom with 24/7 hot water, and dedicated room service.',
    fullDescription:
      'Our Premium Rooms are thoughtfully arranged across all five floors of liv.inn, with five rooms per floor (comprising 6 single rooms and 19 double rooms) to maintain quiet comfort and privacy. Each 200 sq. ft. room features a queen-size bed (180 cm wide) or single bed configuration, balcony/window nature view, attached bathroom with round-the-clock hot water, work table, wardrobe, Wi-Fi, air conditioning, and access to our in-house cloud kitchen room service.',
    natureViewHighlight: 'Pleasant nature-oriented view facing tranquil greenery',
    totalRooms: 25,
    distribution: '5 rooms per floor across 5 floors (6 Single Bed & 19 Double Bed rooms)',
    bedType: 'Queen Size (180 cm wide) / Single Bed',
    maxOccupancy: 3,
    extraBedInfo: 'Complimentary extra bed available upon request at no extra charge',
    amenities: [
      '200 sq. ft. Room Layout',
      'Queen-Size Bed (180 cm wide)',
      'Nature-Facing Balcony / Window View',
      'Attached Bathroom with 24/7 Hot Water',
      'Complimentary High-Speed Wi-Fi',
      'Air Conditioning & Climate Control',
      'Flat-Screen Television',
      'Wardrobe & Clothes Storage',
      'Work Table & Seating Chair',
      'Daily Housekeeping & Fresh Towels',
      'Complimentary Toiletries',
      'In-House Cloud Kitchen Room Service (Breakfast, Lunch & Dinner)',
      'Extra Bed Available (No Additional Charge)',
      '24/7 Front Desk Assistance Support',
    ],
    keyFeatures: [
      '200 sq. ft. room with Queen Bed (180 cm)',
      'Accommodates 2 + 1 Guests (Extra bed free)',
      '25 rooms total inventory across 5 floors',
      '6 Single & 19 Double rooms configuration',
      'Direct nature-facing greenery view',
      'Elevator access across all 5 floors',
      '100% full power backup',
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
