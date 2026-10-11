/**
 * Hotel Core Content & Specifications — Hotel Sky Executive (Pune)
 * 
 * Sourced directly from verified developer document:
 * LivInn_Hotel_Chatbot_Information.docx
 * 
 * Single source of truth for UI and future chatbot integration.
 */

export interface HotelInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  location: {
    city: string;
    state: string;
    country: string;
    region: string;
    displayLocation: string;
  };
  inventory: {
    totalRooms: number;
    roomDistribution: string;
    floors: number;
    roomsPerFloor: number;
    primaryCategory: string;
    viewType: string;
  };
  timings: {
    providedTiming: string;
    note: string;
    status: 'pending_confirmation' | 'verified';
    checkInPlaceholder: string;
    checkOutPlaceholder: string;
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  story: {
    title: string;
    paragraphs: string[];
  };
  values: {
    title: string;
    description: string;
  }[];
}

export const hotelInfo: HotelInfo = {
  name: 'Hotel Sky Executive',
  legalName: 'Hotel Sky Executive',
  tagline: 'Executive Comfort. Exceptional Hospitality.',
  shortDescription:
    'A contemporary executive hotel located at Jaywant Towers, Pune–Nagar Road, Lonikand, offering elegantly appointed rooms, high-speed Wi-Fi, 24/7 dining, and personalized hospitality.',
  fullDescription:
    'Hotel Sky Executive is a premier hotel strategically situated at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune. Designed for both business executives and leisure travelers, the property delivers modern comforts, dedicated guest support, cloud kitchen dining, seamless Wi-Fi, and round-the-clock front desk assistance.',
  location: {
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    region: 'Pune–Nagar Road',
    displayLocation: 'Lonikand, Pune–Nagar Road, Pune',
  },
  inventory: {
    totalRooms: 0,
    roomDistribution: 'Thoughtfully appointed Executive & Double Bed rooms',
    floors: 0,
    roomsPerFloor: 0,
    primaryCategory: 'Executive & Premium rooms (Queen bed)',
    viewType: 'City & skyline views',
  },
  timings: {
    providedTiming: 'Check-in: 11:00 AM | Check-out: 10:00 AM',
    note: 'Check-in time is 11:00 AM and check-out time is 10:00 AM. Front desk reception is open 24 hours.',
    status: 'verified',
    checkInPlaceholder: '11:00 AM',
    checkOutPlaceholder: '10:00 AM',
  },
  highlights: [
    {
      title: 'Executive Comfort',
      description: 'Refined rooms tailored for business and leisure guests with quiet comfort and premium hospitality.',
      icon: 'Building2',
    },
    {
      title: 'Prime Pune–Nagar Road Location',
      description: 'Conveniently located at Jaywant Towers, Lonikand, with quick transit along the Pune–Nagar highway corridor.',
      icon: 'MapPin',
    },
    {
      title: 'Elevator / Lift Access',
      description: 'Effortless guest accessibility across all floors with a modern elevator facility.',
      icon: 'Building',
    },
    {
      title: '100% Power Backup',
      description: 'Continuous energy backup ensuring uninterrupted air conditioning, lighting, and Wi-Fi.',
      icon: 'Zap',
    },
    {
      title: 'In-House Dining',
      description: 'Freshly prepared Breakfast, Lunch, and Dinner (Veg & Non-Veg) served directly to your room.',
      icon: 'UtensilsCrossed',
    },
    {
      title: '24/7 Guest Assistance',
      description: 'Round-the-clock front desk support, security surveillance, and dedicated service at any hour.',
      icon: 'Clock',
    },
    {
      title: 'Complimentary High-Speed Wi-Fi',
      description: 'Reliable, seamless wireless connectivity provided complimentary throughout the hotel.',
      icon: 'Wifi',
    },
    {
      title: 'Secure On-Site Parking',
      description: 'Convenient 24-hour on-premises vehicular parking for staying guests at no charge.',
      icon: 'Car',
    },
  ],
  story: {
    title: 'About Hotel Sky Executive',
    paragraphs: [
      'Hotel Sky Executive is conceptualized as an executive sanctuary on Pune–Nagar Road, crafted for travelers who value efficiency, clean spaces, and genuine warmth in hospitality.',
      'Strategically located at Jaywant Towers in Lonikand, our property offers prime connectivity for guests travelling along the Pune–Nagar corridor while providing a peaceful and comfortable haven to relax and recharge.',
      'From our 24/7 guest support and dedicated in-house dining to meticulous daily housekeeping, every detail at Hotel Sky Executive is designed to make your stay effortless, comfortable, and memorable.',
    ],
  },
  values: [
    {
      title: 'Executive Hospitality',
      description: 'Prompt, courteous, and personalized service tailored to the needs of modern travelers.',
    },
    {
      title: 'Uncompromised Cleanliness',
      description: 'Meticulous housekeeping routines and hygiene protocols maintained across all guest rooms and shared spaces.',
    },
    {
      title: 'Attentive 24/7 Support',
      description: 'Always-available assistance to handle guest requests, check-in inquiries, and service needs promptly.',
    },
    {
      title: 'Transparent Pricing & Care',
      description: 'Clear communication, accurate information, and honest guest care without hidden surprises.',
    },
  ],
};
