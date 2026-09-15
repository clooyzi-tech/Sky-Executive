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
    'A contemporary boutique hotel in Pune offering 25 premium rooms with calming nature-oriented views, dedicated cloud kitchen, and 24/7 guest support.',
  fullDescription:
    'liv.inn is a modern boutique hotel located in Pune, Maharashtra. Designed with an emphasis on comfort, cleanliness, and thoughtful hospitality, the property features 25 premium rooms distributed evenly across 5 floors (5 rooms per floor), each offering pleasant nature-oriented views. Guests enjoy modern amenities including high-speed Wi-Fi, on-site parking, an in-house cloud kitchen, laundry services, and 24/7 guest assistance.',
  location: {
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    region: 'Western Maharashtra',
    displayLocation: 'Upper Kharadi, Wagholi, Pune',
  },
  inventory: {
    totalRooms: 25,
    roomDistribution: '5 rooms on each floor across 5 floors',
    floors: 5,
    roomsPerFloor: 5,
    primaryCategory: 'Premium rooms',
    viewType: 'Nature-oriented view',
  },
  timings: {
    providedTiming: '11:00 AM to 10:00 AM',
    note: 'Timing provided as 11:00 AM to 10:00 AM. Exact check-in and check-out order to be confirmed by hotel management.',
    status: 'pending_confirmation',
    checkInPlaceholder: 'To be confirmed (e.g. 11:00 AM)',
    checkOutPlaceholder: 'To be confirmed (e.g. 10:00 AM)',
  },
  highlights: [
    {
      title: 'Boutique Scale (25 Rooms)',
      description: 'An intimate property with just 5 rooms per floor, ensuring quiet comfort and personalized guest care.',
      icon: 'Building2',
    },
    {
      title: 'Nature-Oriented Views',
      description: 'Every floor enjoys peaceful, verdant nature-facing vistas away from typical city congestion.',
      icon: 'Trees',
    },
    {
      title: 'Cloud Kitchen Facility',
      description: 'Freshly prepared food service delivered directly through our dedicated in-house cloud kitchen.',
      icon: 'UtensilsCrossed',
    },
    {
      title: '24/7 Guest Assistance',
      description: 'Round-the-clock service support and dedicated staff ready to assist at any hour.',
      icon: 'Clock',
    },
    {
      title: 'Complimentary Wi-Fi',
      description: 'Reliable, seamless wireless connectivity provided complimentary throughout the hotel.',
      icon: 'Wifi',
    },
    {
      title: 'On-Site Parking',
      description: 'Convenient and secure parking facilities available directly on property for staying guests.',
      icon: 'Car',
    },
  ],
  story: {
    title: 'About liv.inn',
    paragraphs: [
      'liv.inn is conceptualized as a modern sanctuary in Pune, crafted for travellers who value tranquility, clean spaces, and genuine hospitality. With an intimate footprint of 25 premium rooms spread evenly across 5 floors, the hotel delivers a personal, boutique stay experience.',
      'A defining hallmark of liv.inn is its nature-oriented setting. Guests awake to serene greenery and refreshing natural perspectives, providing a welcome pause from daily routine while remaining well-connected to Pune’s key hubs.',
      'From our round-the-clock guest support and in-house cloud kitchen to meticulous daily housekeeping, every aspect of liv.inn is organized to make your stay in Pune effortless, comfortable, and memorable.',
    ],
  },
  values: [
    {
      title: 'Uncompromised Cleanliness',
      description: 'Meticulous housekeeping routines and hygiene protocols maintained across all 25 guest rooms and shared spaces.',
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
