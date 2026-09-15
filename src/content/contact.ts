/**
 * Contact, Location & Connectivity Configuration — liv.inn (Pune)
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

  email: 'stay@livinn.in',
  emailStatus: 'verified',

  social: {
    instagram: 'https://www.instagram.com/livinn69/',
    instagramNote: 'Official liv.inn Instagram profile',
  },

  address: {
    property: 'liv.inn Hotel',
    street: 'Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251',
    locality: 'Upper Kharadi, Wagholi',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '412207',
    country: 'India',
    landmark: 'Near VTP Altair Phase-1, Infinity Greens Society',
    fullAddressDisplay:
      'Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207',
    status: 'verified',
    note: 'Conveniently situated in Upper Kharadi, Wagholi, near VTP Altair Phase-1 with serene nature-oriented surroundings.',
  },

  maps: {
    // Exact embedded map query for Infinity Greens Society / Wagholi Pune 412207
    puneCityEmbedUrl:
      'https://maps.google.com/maps?q=Infinity+Greens+Society+Wagholi+Pune+412207&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=Plot+No-31+Lane+No-4+Infinity+Greens+Society+Near+VTP+Altair+Phase-1+Gat+No-1251+Upper+Kharadi+Wagholi+Pune+412207',
    disclaimer:
      'Exact address: Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207.',
  },

  nearbyCategories: [
    {
      id: 'hospitals',
      category: 'Hospitals & Healthcare',
      icon: 'HeartPulse',
      statusText: 'Nearby',
      description: 'Multi-specialty hospitals and medical centres serving the Wagholi and Kharadi corridor.',
      samplePlaceholder: 'Accessible healthcare facilities located within convenient driving distance.',
    },
    {
      id: 'mnc-offices',
      category: 'Corporate Offices & MNC Hubs',
      icon: 'Building',
      statusText: 'Upper Kharadi IT Corridor',
      description: 'Strategic proximity to Upper Kharadi, EON Free Zone, World Trade Center Pune, and Wagholi business hubs.',
      samplePlaceholder: 'Ideal base for business travelers working in Kharadi & Wagholi corporate districts.',
    },
    {
      id: 'schools',
      category: 'Schools & Educational Institutions',
      icon: 'GraduationCap',
      statusText: 'Nearby Institutions',
      description: 'Reputed schools, colleges, and educational academies situated in and around Wagholi.',
      samplePlaceholder: 'Convenient transit to prominent educational institutes in East Pune.',
    },
    {
      id: 'conveniences',
      category: 'Local Conveniences & Transit',
      icon: 'Compass',
      statusText: 'Upper Kharadi / Wagholi',
      description: 'Supermarkets, pharmacies, dining spots, and easy access to Nagar Road and Pune Airport corridor.',
      samplePlaceholder: 'Daily guest essentials and local shopping easily accessible.',
    },
  ],

  formStrings: {
    title: 'Reservation & Stay Enquiry',
    subtitle: 'Send your stay dates and requirements for our Upper Kharadi, Wagholi property. We respond promptly.',
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
