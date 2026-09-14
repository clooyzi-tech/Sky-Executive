/* ==========================================================================
   Liv.inn — Centralized Content Configuration
   
   All hotel-specific data lives here. Update these values to customize the
   website for the property. Fields marked with TODO need real data.
   ========================================================================== */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  bedType: string;
  maxOccupancy: number;
  image: string;
  /** Short label shown on cards, e.g. "From ₹2,500/night" — leave empty to hide */
  priceLabel: string;
}

export interface Facility {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'hotel' | 'rooms' | 'interiors' | 'exterior';
}

export interface NavLink {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------

export const brand = {
  name: 'Liv.inn',
  tagline: 'Your Stay, Made Comfortable',
  description:
    'A modern boutique hotel in Mumbai offering comfortable stays, warm hospitality, and a convenient location for business and leisure travellers.',
  /* TODO: Update with actual logo path once available */
  logoPath: '',
} as const;

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  /* TODO: Update with actual phone number */
  phone: '+91 98765 43210',
  /* TODO: Update with actual WhatsApp number */
  whatsapp: '+919876543210',
  /* TODO: Update with actual email */
  email: 'stay@livinn.in',
  address: {
    /* TODO: Update with actual address */
    line1: 'Liv.inn Hotel',
    line2: 'Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400053',
    country: 'India',
  },
  /* TODO: Update with actual Google Maps URL */
  googleMapsUrl: 'https://maps.google.com/?q=Mumbai+Andheri+West',
  /* TODO: Update with actual Google Maps embed URL */
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.83!3d19.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzQ4LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1',
} as const;

// ---------------------------------------------------------------------------
// Social
// ---------------------------------------------------------------------------

export const social = {
  instagram: 'https://www.instagram.com/livinn69/',
  /* TODO: Add Facebook page URL when available */
  facebook: '',
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms & Facilities', href: '/rooms' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
];

// ---------------------------------------------------------------------------
// Rooms
// ---------------------------------------------------------------------------

/* TODO: Replace with actual room data */
export const rooms: Room[] = [
  {
    id: 'standard',
    name: 'Standard Room',
    description:
      'A well-appointed room designed for comfort and convenience, featuring modern amenities and a serene ambience perfect for a restful stay.',
    amenities: [
      'Air Conditioning',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Attached Bathroom',
      'Daily Housekeeping',
      'Wardrobe',
    ],
    bedType: 'Double Bed',
    maxOccupancy: 2,
    image: '',
    priceLabel: '',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description:
      'Spacious and elegantly furnished, our Deluxe Room offers an elevated experience with premium bedding, a work desk, and thoughtful touches throughout.',
    amenities: [
      'Air Conditioning',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Attached Bathroom',
      'Daily Housekeeping',
      'Wardrobe',
      'Work Desk',
      'Mini Fridge',
      'Complimentary Toiletries',
    ],
    bedType: 'Queen Bed',
    maxOccupancy: 2,
    image: '',
    priceLabel: '',
  },
  {
    id: 'premium',
    name: 'Premium Room',
    description:
      'Our finest accommodation, the Premium Room combines luxury with functionality — featuring a king-size bed, premium furnishings, and a curated in-room experience.',
    amenities: [
      'Air Conditioning',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Attached Bathroom',
      'Daily Housekeeping',
      'Wardrobe',
      'Work Desk',
      'Mini Fridge',
      'Complimentary Toiletries',
      'Bathrobe & Slippers',
      'In-room Safe',
      'Tea/Coffee Maker',
    ],
    bedType: 'King Bed',
    maxOccupancy: 3,
    image: '',
    priceLabel: '',
  },
];

// ---------------------------------------------------------------------------
// Facilities
// ---------------------------------------------------------------------------

/* TODO: Update with actual hotel facilities */
export const facilities: Facility[] = [
  {
    icon: 'Wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet throughout the property.',
  },
  {
    icon: 'ShieldCheck',
    title: '24/7 Security',
    description: 'Round-the-clock security and CCTV surveillance for your peace of mind.',
  },
  {
    icon: 'ConciergeBell',
    title: '24-Hour Front Desk',
    description: 'Our friendly staff is available around the clock to assist with your needs.',
  },
  {
    icon: 'Car',
    title: 'Parking',
    description: 'Convenient parking space available for guests.',
  },
  {
    icon: 'Sparkles',
    title: 'Daily Housekeeping',
    description: 'Immaculately maintained rooms with daily housekeeping service.',
  },
  {
    icon: 'Luggage',
    title: 'Luggage Storage',
    description: 'Secure luggage storage facility for early arrivals or late departures.',
  },
];

// ---------------------------------------------------------------------------
// Why Choose (Homepage Features)
// ---------------------------------------------------------------------------

export const whyChooseFeatures = [
  {
    icon: 'MapPin',
    title: 'Prime Location',
    description: 'Centrally located in Mumbai with easy access to business hubs, shopping, and entertainment.',
  },
  {
    icon: 'Heart',
    title: 'Warm Hospitality',
    description: 'Experience genuine care and personalised attention from our dedicated team.',
  },
  {
    icon: 'Shield',
    title: 'Safe & Secure',
    description: 'Your safety is our priority with 24/7 security, CCTV, and secure access.',
  },
  {
    icon: 'Sparkles',
    title: 'Spotless Rooms',
    description: 'Meticulously maintained rooms that meet the highest hygiene standards.',
  },
  {
    icon: 'Wifi',
    title: 'Stay Connected',
    description: 'Complimentary high-speed Wi-Fi to keep you connected throughout your stay.',
  },
  {
    icon: 'IndianRupee',
    title: 'Great Value',
    description: 'Premium comfort and service at competitive rates — the best value in the neighbourhood.',
  },
];

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

/* TODO: Replace with actual hotel photos */
export const galleryImages: GalleryImage[] = [
  { src: '', alt: 'Hotel exterior view', category: 'exterior' },
  { src: '', alt: 'Hotel lobby and reception', category: 'hotel' },
  { src: '', alt: 'Standard room interior', category: 'rooms' },
  { src: '', alt: 'Deluxe room with workspace', category: 'rooms' },
  { src: '', alt: 'Premium room with king bed', category: 'rooms' },
  { src: '', alt: 'Modern bathroom amenities', category: 'interiors' },
  { src: '', alt: 'Corridor and hallway design', category: 'interiors' },
  { src: '', alt: 'Building facade at night', category: 'exterior' },
  { src: '', alt: 'Comfortable seating area', category: 'interiors' },
  { src: '', alt: 'Room details and furnishing', category: 'rooms' },
  { src: '', alt: 'Front entrance of Liv.inn', category: 'exterior' },
  { src: '', alt: 'Reception desk close-up', category: 'hotel' },
];

// ---------------------------------------------------------------------------
// Nearby Attractions
// ---------------------------------------------------------------------------

/* TODO: Update with actual nearby attractions */
export const nearbyAttractions: NearbyAttraction[] = [
  {
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    distance: '5 km',
    description: 'Quick and easy access to Mumbai\'s international airport.',
  },
  {
    name: 'Andheri Railway Station',
    distance: '1.5 km',
    description: 'Major western line railway station with local and long-distance trains.',
  },
  {
    name: 'Infinity Mall',
    distance: '2 km',
    description: 'Popular shopping and entertainment destination.',
  },
  {
    name: 'Versova Beach',
    distance: '4 km',
    description: 'A peaceful beach getaway, perfect for evening walks.',
  },
];

// ---------------------------------------------------------------------------
// Guest Information (QR page)
// ---------------------------------------------------------------------------

export const guestInfo = {
  checkInTime: '12:00 PM',
  checkOutTime: '11:00 AM',
  houseRules: [
    'Valid government-issued photo ID is mandatory at check-in.',
    'Smoking is strictly prohibited inside the rooms.',
    'Outside food is allowed in rooms.',
    'Visitors must register at the front desk.',
    'Please maintain silence after 10:00 PM for the comfort of all guests.',
    'Any damage to hotel property will be charged to the guest.',
  ],
  /* TODO: Update with actual services */
  services: [
    { name: 'Room Service', availability: 'Available on request' },
    { name: 'Laundry Service', availability: 'Available on request' },
    { name: 'Wake-up Call', availability: 'Available 24/7' },
    { name: 'Travel Assistance', availability: 'Available at front desk' },
    { name: 'Medical Assistance', availability: 'Available on request' },
  ],
} as const;

// ---------------------------------------------------------------------------
// SEO Config
// ---------------------------------------------------------------------------

export const seoConfig = {
  /* TODO: Update with actual production URL */
  siteUrl: 'https://livinn.in',
  defaultTitle: 'Liv.inn — Boutique Hotel in Mumbai',
  titleTemplate: '%s | Liv.inn — Hotel in Mumbai',
  defaultDescription:
    'Liv.inn is a modern boutique hotel in Mumbai offering comfortable rooms, warm hospitality, and a prime location for business and leisure travellers.',
  defaultKeywords: [
    'hotel in Mumbai',
    'boutique hotel Mumbai',
    'Andheri hotel',
    'Liv.inn',
    'Livinn hotel',
    'budget hotel Mumbai',
    'hotel near Mumbai airport',
    'hotel Andheri West',
    'comfortable stay Mumbai',
  ],
} as const;