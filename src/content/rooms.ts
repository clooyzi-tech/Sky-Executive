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
    id: 'double-room',
    name: 'Double Bed Room',
    category: 'Premium Accommodation',
    roomSize: '200 sq. ft.',
    shortDescription:
      'A 200 sq. ft. refined, peaceful room with serene nature views, comfortable double bed (queen-size 180 cm), modern en-suite bathroom with 24/7 hot water, and dedicated in-room dining.',
    fullDescription:
      'liv.inn features 25 uniform double bed rooms thoughtfully arranged with only five rooms per floor across five floors, ensuring quiet privacy and tranquil comfort. Each 200 sq. ft. room includes a plush double bed, attached en-suite bathroom with 24/7 hot water, individual air conditioning, smart TV, high-speed Wi-Fi, dedicated work desk, and refreshing nature-facing views.',
    natureViewHighlight: 'Pleasant nature-oriented view facing tranquil greenery',
    totalRooms: 25,
    distribution: '5 rooms per floor across 5 floors (All 25 Double Bed Rooms)',
    bedType: 'Double Bed (Queen Size - 180 cm)',
    maxOccupancy: 3,
    extraBedInfo: 'Complimentary extra bed available upon request at no extra charge',
    amenities: [
      '200 sq. ft. Room Layout',
      'Comfortable Double Bed (180 cm Queen)',
      'Nature-Facing Window View',
      'Attached Bathroom with 24/7 Hot Water',
      'Complimentary High-Speed Wi-Fi',
      'Individual Air Conditioning',
      'Smart TV with Streaming Apps',
      'Wardrobe & Luggage Storage',
      'Work Table & Ergonomic Seating',
      'Daily Housekeeping & Fresh Linen',
      'Complimentary Bath Toiletries',
      'In-Room Cloud Kitchen Service (Breakfast, Lunch & Dinner)',
      'Extra Bed Available (Complimentary)',
      '24/7 Front Desk & WhatsApp Assistance',
    ],
    keyFeatures: [
      '25 identical Double Bed Rooms across 5 floors',
      '5 rooms on each floor for quiet privacy',
      'Plush Double Bed (180 cm wide)',
      'Accommodates 2 + 1 Guests (Extra bed free)',
      'Direct nature-facing greenery view',
      'Elevator access across all 5 floors',
      '100% full power backup',
    ],
    priceStatus: 'tbc',
    priceDisplay: 'Pricing to be confirmed upon enquiry',
    pricingNote: 'Official tariffs and taxes are confirmed directly by front desk upon enquiry. Contact us for current seasonal rates.',
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
