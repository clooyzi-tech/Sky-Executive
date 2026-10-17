/**
 * Contact, Location & Connectivity Configuration — Hotel Sky Executive (Pune)
 * 
 * Verified Property Details:
 * - Phone: +91 92093 97362 (Call & WhatsApp)
 * - Address: Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse,
 *   Lonikand, Pune - 412216
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
  phone: '+91 92093 97362',
  phoneRaw: '+919209397362',
  phoneStatus: 'verified',

  whatsapp: '+919209397362',
  whatsappStatus: 'verified',

  email: 'help.skyexecutive@gmail.com',
  emailStatus: 'verified',

  social: {
    instagram: 'https://www.instagram.com/hotelskyexecutive/',
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
      'https://maps.google.com/maps?q=18.6081064,74.0152976&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsSearchUrl:
      'https://www.google.com/maps/place/FabHotel+Ace+Executive/@18.6081064,74.0152976,606a,61.9y,93.92h,82.97t/data=!3m7!1e1!3m5!1skvuYHWZgB7KHv7zVW_zR0A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.0305408619603185%26panoid%3DkvuYHWZgB7KHv7zVW_zR0A%26yaw%3D93.91966873906634!7i16384!8i8192!4m16!1m5!3m4!2zMTjCsDM2JzI4LjkiTiA3NMKwMDAnNTYuNSJF!8m2!3d18.6080278!4d74.0156944!3m9!1s0x3bc2c5005566b215:0x95868d957642246b!5m3!1s2026-11-24!4m1!1i2!8m2!3d18.6082!4d74.01528!16s%2Fg%2F11wqq5xlwm?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D',
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
    phonePlaceholder: 'e.g. 9209397362',
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
