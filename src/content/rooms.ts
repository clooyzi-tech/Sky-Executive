/**
 * Rooms Content & Configuration — liv.inn (Pune)
 * 
 * Sourced directly from verified developer document:
 * LivInn_Hotel_Chatbot_Information.docx
 * 
 * - Room category: Premium rooms (Double Bed)
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
      'A 200 sq. ft. refined, peaceful room with serene nature views, comfortable double bed (queen-size), modern en-suite bathroom with 24/7 hot water, and dedicated in-room dining.',
    fullDescription:
      'liv.inn features uniform double bed rooms thoughtfully arranged for quiet privacy and tranquil comfort. Each 200 sq. ft. room includes a plush double bed, attached en-suite bathroom with 24/7 hot water, individual air conditioning, smart TV, high-speed Wi-Fi, dedicated work desk, and refreshing nature-facing views.',
    natureViewHighlight: 'Pleasant nature-oriented view facing tranquil greenery',
    totalRooms: 0,
    distribution: 'Private, quiet layout (Double Bed Rooms)',
    bedType: 'Double Bed (Queen Size)',
    maxOccupancy: 3,
    extraBedInfo: 'Complimentary extra bed available upon request at no extra charge',
    amenities: [
      '200 sq. ft. Room Layout',
      'Comfortable Double Bed (Queen Size)',
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
      'Identical Double Bed Rooms with nature views',
      'Peaceful floor layout for quiet privacy',
      'Plush Double Bed (Queen Size)',
      'Accommodates 2 + 1 Guests (Extra bed free)',
      'Direct nature-facing greenery view',
      'Modern guest elevator access',
      '100% full power backup',
    ],
    priceStatus: 'tbc',
    priceDisplay: 'Pricing to be confirmed upon enquiry',
    pricingNote: 'Official tariffs and taxes are confirmed directly by front desk upon enquiry. Contact us for current seasonal rates.',
    availabilityStatus: 'subject_to_confirmation',
    availabilityDisplay: 'Enquire for Dates',
    image: '/images/rooms/double_bed_room.webp',
  },
];

export const roomsOverview = {
  title: 'Premium Rooms',
  subtitle: 'Thoughtfully designed spaces with tranquil nature views',
  totalInventoryBadge: 'Premium Rooms • Nature Views • Cloud Kitchen',
  description:
    'liv.inn offers premium rooms curated for guests seeking a peaceful stay in Pune. Enjoy an uncluttered, quiet atmosphere with verdant views.',
  natureHighlightBadge: 'Nature-Oriented Views',
};
