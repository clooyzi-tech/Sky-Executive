/**
 * Contact, Location & Connectivity Configuration — Hotel Sky Executive (Pune)
 * 
 * Verified Property Details:
 * - Phone: +91 80077 24646 (Call & WhatsApp)
 * - Address: Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1,
 *   Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207
 */

export interface ContactConfig {
  phone: string;
  phoneRaw: string;
  phoneStatus: 'verified';
  whatsapp: string;
  whatsappStatus: 'verified';
  email: string;
  emailStatus: 'verified' | 'tbc';
  social: {
    instagram: string;
    instagramNote: string;
  };
  address: {
    property: string;
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    fullAddressDisplay: string;
    status: 'verified';
    note: string;
  };
  maps: {
    puneCityEmbedUrl: string;
    googleMapsSearchUrl: string;
    disclaimer: string;
  };
  nearbyCategories: {
    id: string;
    category: string;
    icon: string;
    statusText: string;
    description: string;
    samplePlaceholder: string;
  }[];
  formStrings: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    checkInLabel: string;
    checkOutLabel: string;
    guestsLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    disclaimer: string;
    sendAnotherBtn: string;
  };
}

export const contactConfig: ContactConfig = {
  // Official Verified Phone & WhatsApp
  phone: '+91 80077 24646',
  phoneRaw: '+918007724646',
  phoneStatus: 'verified',

  whatsapp: '+918007724646',
  whatsappStatus: 'verified',

  email: 'help.livinn@gmail.com',
  emailStatus: 'verified',

  social: {
    instagram: 'https://www.instagram.com/livinn69/',
    instagramNote: 'Official Hotel Sky Executive Instagram profile',
  },

  address: {
    property: 'Hotel Sky Executive',
    street: 'Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse',
    locality: 'Lonikand',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '412216',
    country: 'India',
    landmark: 'Near Jaywant Warehouse, Pune–Nagar Road',
    fullAddressDisplay:
      'Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216',
    status: 'verified',
    note: 'Conveniently situated at Jaywant Towers on Pune–Nagar Road in Lonikand with prime highway accessibility.',
  },

  maps: {
    puneCityEmbedUrl:
      'https://maps.google.com/maps?q=Jaywant+Towers+Pune+Nagar+Road+Lonikand+Pune+412216&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=Jaywant+Towers+Pune+Nagar+Road+Lonikand+Pune+412216',
    disclaimer:
      'Exact address: Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune – 412216.',
  },

  nearbyCategories: [
    {
      id: 'airport',
      category: 'Pune International Airport',
      icon: 'Plane',
      statusText: '~15 km (~25 mins)',
      description: 'Convenient highway transit to Pune International Airport via Nagar Road corridor.',
      samplePlaceholder: 'Approx. 15 km drive. Taxi booking assistance available at front desk.',
    },
    {
      id: 'railway',
      category: 'Pune Railway Station',
      icon: 'Train',
      statusText: '~20 km (~35 mins)',
      description: 'Direct rail transit access located within smooth highway connection.',
      samplePlaceholder: 'Approx. 20 km for rail connections with cab assistance available.',
    },
    {
      id: 'mnc-offices',
      category: 'Industrial & Business Hubs',
      icon: 'Building',
      statusText: 'Lonikand, Sanaswadi & Kharadi',
      description: 'Prime proximity to Lonikand business belt, Sanaswadi industrial zone, and Kharadi IT corridor.',
      samplePlaceholder: 'Ideal stay for corporate executives visiting Lonikand & Pune–Nagar industrial belt.',
    },
    {
      id: 'hospitals',
      category: 'Hospitals & Healthcare',
      icon: 'HeartPulse',
      statusText: 'Nearby Lonikand / Wagholi',
      description: 'Multi-specialty healthcare facilities and emergency centres along Pune–Nagar Road.',
      samplePlaceholder: 'Accessible medical facilities within short driving distance.',
    },
    {
      id: 'conveniences',
      category: 'Highway Transit & Local Conveniences',
      icon: 'Compass',
      statusText: 'Pune–Nagar Road, Lonikand',
      description: 'Fuel stations, ATMs, dining outlets, and 24-hour transport access on Pune–Nagar highway.',
      samplePlaceholder: 'Daily travel essentials and transit options immediately accessible.',
    },
  ],

  formStrings: {
    title: 'Reservation & Stay Enquiry',
    subtitle: 'Send your stay dates and requirements for Hotel Sky Executive on Pune–Nagar Road, Lonikand. We respond promptly.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'e.g. 8007724646',
    checkInLabel: 'Preferred Check-in Date',
    checkOutLabel: 'Preferred Check-out Date',
    guestsLabel: 'Number of Guests',
    messageLabel: 'Message or Special Requests',
    messagePlaceholder: 'Please share your preferred room setup, arrival time notes, or any questions...',
    submitBtn: 'Submit Enquiry',
    submittingBtn: 'Submitting Enquiry...',
    successTitle: 'Enquiry Received',
    successMessage:
      'Your enquiry has been submitted. Our team will contact you shortly with availability and details.',
    disclaimer:
      'Please note: Submitting an enquiry does not constitute a confirmed booking. Our team will verify room availability and contact you directly.',
    sendAnotherBtn: 'Submit Another Enquiry',
  },
};
