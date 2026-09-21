/**
 * Hotel Core Content & Specifications — liv.inn (Pune)
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
  name: 'liv.inn',
  legalName: 'liv.inn Hotel',
  tagline: 'A Serene, Nature-Oriented Stay in Pune',
  shortDescription:
    'A contemporary boutique hotel in Pune offering premium rooms with calming nature-oriented views, dedicated cloud kitchen, and 24/7 guest support.',
  fullDescription:
    'liv.inn is a modern boutique hotel located in Pune, Maharashtra. Designed with an emphasis on comfort, cleanliness, and thoughtful hospitality, the property features premium rooms, each offering pleasant nature-oriented views. Guests enjoy modern amenities including high-speed Wi-Fi, on-site parking, an in-house cloud kitchen, laundry services, and 24/7 guest assistance.',
  location: {
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    region: 'Western Maharashtra',
    displayLocation: 'Upper Kharadi, Wagholi, Pune',
  },
  inventory: {
    totalRooms: 0,
    roomDistribution: 'Thoughtfully arranged Double Bed rooms',
    floors: 0,
    roomsPerFloor: 0,
    primaryCategory: 'Premium rooms (200 sq. ft., Queen bed)',
    viewType: 'Nature-oriented view',
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
      title: 'Boutique Scale',
      description: 'An intimate property ensuring quiet comfort and personalized guest care.',
      icon: 'Building2',
    },
    {
      title: 'Nature-Oriented Views',
      description: 'Every floor enjoys peaceful, verdant nature-facing vistas away from typical city congestion.',
      icon: 'Trees',
    },
    {
      title: 'Elevator / Lift Access',
      description: 'Effortless guest accessibility with a modern elevator facility.',
      icon: 'Building',
    },
    {
      title: '100% Power Backup',
      description: 'Continuous energy and power backup ensuring uninterrupted lighting, Wi-Fi, and comfort.',
      icon: 'Zap',
    },
    {
      title: 'In-House Cloud Kitchen',
      description: 'Freshly prepared Breakfast, Lunch, and Dinner (Veg & Non-Veg) served directly to your room.',
      icon: 'UtensilsCrossed',
    },
    {
      title: '24/7 Guest Assistance',
      description: 'Round-the-clock front desk support, security surveillance, and dedicated service at any hour.',
      icon: 'Clock',
    },
    {
      title: 'Complimentary Wi-Fi',
      description: 'Reliable, seamless wireless connectivity provided complimentary throughout the hotel.',
      icon: 'Wifi',
    },
    {
      title: 'Free On-Site Parking',
      description: 'Convenient 24-hour on-premises vehicular parking for staying guests at no charge.',
      icon: 'Car',
    },
  ],
  story: {
    title: 'About liv.inn',
    paragraphs: [
      'liv.inn is conceptualized as a modern sanctuary in Pune, crafted for travellers who value tranquility, clean spaces, and genuine hospitality. With an intimate boutique footprint, the hotel delivers a personal, boutique stay experience.',
      'A defining hallmark of liv.inn is its nature-oriented setting. Guests awake to serene greenery and refreshing natural perspectives, providing a welcome pause from daily routine while remaining well-connected to Pune’s key hubs.',
      'From our round-the-clock guest support and in-house cloud kitchen to meticulous daily housekeeping, every aspect of liv.inn is organized to make your stay in Pune effortless, comfortable, and memorable.',
    ],
  },
  values: [
    {
      title: 'Uncompromised Cleanliness',
      description: 'Meticulous housekeeping routines and hygiene protocols maintained across all guest rooms and shared spaces.',
    },
    {
      title: 'Attentive 24/7 Support',
      description: 'Always-available assistance to handle guest requests, check-in inquiries, and service needs promptly.',
    },
    {
      title: 'Nature & Serenity',
      description: 'A peaceful environment with scenic green views that encourage rest, relaxation, and focus.',
    },
    {
      title: 'Transparent Hospitality',
      description: 'Clear communication, accurate information, and honest guest care without misleading claims.',
    },
  ],
};
