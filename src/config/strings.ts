/**
 * Centralized Strings Configuration for Liv.inn
 * 
 * All UI strings, labels, headers, copy, buttons, forms, and message templates
 * are centralized here for full globalization (i18n ready) and optimization.
 */

export const STRINGS = {
  // ---------------------------------------------------------------------------
  // Brand
  // ---------------------------------------------------------------------------
  brand: {
    name: 'Liv.inn',
    tagline: 'Your Stay, Made Comfortable',
    description:
      'A modern boutique hotel in Mumbai offering comfortable stays, warm hospitality, and a convenient location for business and leisure travellers.',
    logoAlt: 'Liv.inn Boutique Hotel',
  },

  // ---------------------------------------------------------------------------
  // Common UI Strings & Actions
  // ---------------------------------------------------------------------------
  common: {
    buttons: {
      enquireNow: 'Enquire Now',
      exploreRooms: 'Explore Rooms',
      viewAllRooms: 'View All Rooms & Facilities',
      viewFullGallery: 'View Full Gallery',
      getDirections: 'Get Directions',
      moreDetails: 'More Details',
      chatWhatsApp: 'Chat on WhatsApp',
      callNow: 'Call Now',
      callReception: 'Call Reception',
      sendEnquiry: 'Send Enquiry',
      sending: 'Sending...',
      sendAnotherEnquiry: 'Send Another Enquiry',
    },
    labels: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      timing: 'Timing',
      amenities: 'Amenities',
      facilities: 'Facilities',
      hotelFacilities: 'Hotel Facilities',
      houseRules: 'House Rules',
      services: 'Hotel Services',
      nearby: 'Nearby',
      guests: 'Guests',
      guest: 'Guest',
      upTo: 'Up to',
      more: 'more',
      required: '*',
    },
    badges: {
      welcomeTo: 'Welcome to',
    },
  },

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Rooms & Facilities', href: '/rooms' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Location', href: '/location' },
      { label: 'Contact', href: '/contact' },
    ],
    aria: {
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },

  // ---------------------------------------------------------------------------
  // Contact & Social
  // ---------------------------------------------------------------------------
  contact: {
    phone: '+91 98765 43210',
    whatsapp: '+919876543210',
    email: 'stay@livinn.in',
    address: {
      line1: 'Liv.inn Hotel',
      line2: 'Andheri West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400053',
      country: 'India',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Mumbai+Andheri+West',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.83!3d19.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzQ4LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1',
    social: {
      instagram: 'https://www.instagram.com/livinn69/',
      facebook: '',
    },
    cards: {
      whatsapp: {
        title: 'WhatsApp',
        subtitle: 'Tap to chat — instant response',
      },
      call: {
        title: 'Call Us',
        subtitle: 'Available 24/7',
      },
      email: {
        title: 'Email',
        subtitle: 'We reply within 24 hours',
      },
      address: {
        title: 'Address',
        viewMap: 'View on Google Maps',
      },
    },
    prefilledMessages: {
      heroEnquiry: 'Hi! I would like to make a booking enquiry at Liv.inn.',
      bookingCTA: 'Hi! I would like to check room availability at Liv.inn.',
      floatingWhatsApp: 'Hi! I would like to know more about Liv.inn Hotel.',
      roomEnquiry: (roomName: string) =>
        `Hi! I'm interested in the ${roomName} at Liv.inn. Could you share availability and pricing?`,
      roomEnquiryShort: (roomName: string) =>
        `Hi! I'm interested in the ${roomName} at Liv.inn.`,
      guestAssistance: 'Hi, I am a guest at Liv.inn and need assistance.',
      contactPageEnquiry: "Hi! I'd like to enquire about rooms at Liv.inn.",
    },
  },

  // ---------------------------------------------------------------------------
  // Home Page
  // ---------------------------------------------------------------------------
  home: {
    hero: {
      badge: 'Welcome to Liv.inn',
      title: 'Your Stay, Made Comfortable',
      description:
        'A modern boutique hotel in Mumbai offering comfortable stays, warm hospitality, and a convenient location for business and leisure travellers.',
      ctaEnquire: 'Enquire Now',
      ctaExplore: 'Explore Rooms',
    },
    introduction: {
      title: 'Welcome to Liv.inn',
      subtitle: 'A place where comfort meets convenience',
      p1: "Nestled in the vibrant heart of Mumbai, Liv.inn is more than just a hotel — it's your home away from home. We believe that every traveller deserves a comfortable, clean, and welcoming space, whether you're visiting for business, leisure, or just passing through.",
      p2: 'Our thoughtfully designed rooms, attentive service, and prime location make Liv.inn the ideal choice for discerning guests who value quality without compromise. From the moment you step through our doors, expect nothing less than genuine warmth and modern comfort.',
    },
    roomsPreview: {
      title: 'Our Rooms',
      subtitle: 'Thoughtfully designed spaces for a restful stay',
      ctaEnquire: 'Enquire About This Room',
      ctaViewAll: 'View All Rooms & Facilities',
    },
    whyChoose: {
      title: 'Why Choose Liv.inn',
      subtitle: 'Everything you need for a perfect stay',
      features: [
        {
          icon: 'MapPin',
          title: 'Prime Location',
          description:
            'Centrally located in Mumbai with easy access to business hubs, shopping, and entertainment.',
        },
        {
          icon: 'Heart',
          title: 'Warm Hospitality',
          description:
            'Experience genuine care and personalised attention from our dedicated team.',
        },
        {
          icon: 'Shield',
          title: 'Safe & Secure',
          description:
            'Your safety is our priority with 24/7 security, CCTV, and secure access.',
        },
        {
          icon: 'Sparkles',
          title: 'Spotless Rooms',
          description:
            'Meticulously maintained rooms that meet the highest hygiene standards.',
        },
        {
          icon: 'Wifi',
          title: 'Stay Connected',
          description:
            'Complimentary high-speed Wi-Fi to keep you connected throughout your stay.',
        },
        {
          icon: 'IndianRupee',
          title: 'Great Value',
          description:
            'Premium comfort and service at competitive rates — the best value in the neighbourhood.',
        },
      ],
    },
    galleryPreview: {
      title: 'A Glimpse Inside',
      subtitle: 'Take a peek at our thoughtfully curated spaces',
      ctaViewAll: 'View Full Gallery',
    },
    locationPreview: {
      title: 'Find Us',
      subtitle: 'Centrally located for your convenience',
      ctaDirections: 'Get Directions',
      ctaDetails: 'More Details',
      mapTitle: 'Liv.inn Hotel Location',
    },
    bookingCTA: {
      title: 'Planning Your Stay?',
      description:
        "Get in touch with us to check availability, request a quote, or make a reservation. We're always happy to help.",
      whatsappBtn: 'Chat on WhatsApp',
      callBtn: 'Call Now',
    },
  },

  // ---------------------------------------------------------------------------
  // About Page
  // ---------------------------------------------------------------------------
  about: {
    header: {
      title: 'About Liv.inn',
      subtitle: 'Our story, our values, and what makes us different',
    },
    story: {
      title: 'Our Story',
      p1: 'Liv.inn was born from a simple yet powerful idea: every traveller deserves a space that feels like home — clean, comfortable, and genuinely welcoming. In a city as dynamic as Mumbai, we saw an opportunity to create a hotel that blends modern comfort with the warmth of Indian hospitality.',
      p2: 'Our property has been thoughtfully designed to cater to both business and leisure travellers. Every detail, from the quality of our bedding to the efficiency of our service, reflects our commitment to making your stay exceptional.',
      p3: "Whether you're in Mumbai for a conference, exploring the city's rich culture, or simply need a comfortable place to rest, Liv.inn is here to ensure you feel at ease from the moment you arrive.",
    },
    values: {
      title: 'What We Stand For',
      subtitle: 'The values that guide everything we do',
      items: [
        {
          title: 'Genuine Hospitality',
          text: 'We treat every guest like family. Our team goes above and beyond to ensure your comfort and satisfaction.',
        },
        {
          title: 'Uncompromising Cleanliness',
          text: 'Hygiene is non-negotiable. Our rooms are meticulously cleaned and maintained to the highest standards.',
        },
        {
          title: 'Thoughtful Design',
          text: 'Every space in our hotel is designed with purpose — to provide functionality, comfort, and aesthetic appeal.',
        },
        {
          title: 'Local Connection',
          text: 'We help guests experience the best of Mumbai through curated local recommendations and travel assistance.',
        },
        {
          title: 'Transparent Service',
          text: 'No hidden charges, no surprises. We believe in honest pricing and transparent communication.',
        },
        {
          title: 'Continuous Improvement',
          text: 'We actively seek guest feedback to refine our services and stay ahead of expectations.',
        },
      ],
    },
    facilities: {
      title: 'Our Facilities',
      subtitle: 'Everything you need under one roof',
    },
  },

  // ---------------------------------------------------------------------------
  // Rooms & Facilities
  // ---------------------------------------------------------------------------
  rooms: {
    header: {
      title: 'Rooms & Facilities',
      subtitle: 'Thoughtfully designed spaces equipped with modern amenities',
    },
    amenitiesTitle: 'Amenities',
    guestsSuffix: 'guests',
    facilitiesTitle: 'Hotel Facilities',
    facilitiesSubtitle: 'Everything you need for a comfortable stay',
    list: [
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
        priceLabel: '',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Facilities
  // ---------------------------------------------------------------------------
  facilities: [
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
  ],

  // ---------------------------------------------------------------------------
  // Gallery Page
  // ---------------------------------------------------------------------------
  gallery: {
    header: {
      title: 'Gallery',
      subtitle: 'A glimpse into the Liv.inn experience',
    },
    categories: ['All', 'Hotel', 'Rooms', 'Interiors', 'Exterior'] as const,
    lightbox: {
      close: 'Close lightbox',
      prev: 'Previous image',
      next: 'Next image',
      counter: (current: number, total: number) => `${current} / ${total}`,
    },
  },

  // ---------------------------------------------------------------------------
  // Location Page
  // ---------------------------------------------------------------------------
  location: {
    header: {
      title: 'Our Location',
      subtitle: 'Conveniently located in the heart of Mumbai',
    },
    findUs: {
      title: 'Find Us',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      ctaDirections: 'Get Directions',
      mapTitle: 'Liv.inn location on Google Maps',
    },
    attractions: {
      title: 'Nearby Attractions',
      subtitle: "Explore what's around us",
      items: [
        {
          name: 'Chhatrapati Shivaji Maharaj International Airport',
          distance: '5 km',
          description: "Quick and easy access to Mumbai's international airport.",
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
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Contact Page & Form
  // ---------------------------------------------------------------------------
  contactPage: {
    header: {
      title: 'Contact Us',
      subtitle: "We'd love to hear from you — reach out anytime",
    },
    sidebar: {
      title: 'Get in Touch',
      description:
        'Whether you have a question about availability, pricing, or anything else, our team is ready to help.',
    },
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+91 98765 43210',
      checkInLabel: 'Check-in Date',
      checkOutLabel: 'Check-out Date',
      roomPrefLabel: 'Room Preference',
      noPrefOption: 'No preference',
      guestsLabel: 'Number of Guests',
      guestSingular: 'Guest',
      guestPlural: 'Guests',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your requirements, special requests, or questions...',
      submitBtn: 'Send Enquiry',
      submittingBtn: 'Sending...',
      successTitle: 'Thank You!',
      successMessage:
        "We've received your enquiry and will get back to you within 24 hours. For urgent queries, please call or WhatsApp us directly.",
      sendAnotherBtn: 'Send Another Enquiry',
    },
  },

  // ---------------------------------------------------------------------------
  // Guest Information Page
  // ---------------------------------------------------------------------------
  guestInfo: {
    header: {
      title: 'Welcome to Liv.inn',
      subtitle: 'Everything you need to know during your stay',
    },
    quickContact: {
      whatsapp: 'WhatsApp',
      call: 'Call Reception',
    },
    timing: {
      title: 'Timing',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      checkInTime: '12:00 PM',
      checkOutTime: '11:00 AM',
    },
    wifi: {
      title: 'Wi-Fi',
      description:
        'Complimentary high-speed Wi-Fi is available throughout the property. Ask at the front desk for the network name and password.',
    },
    services: {
      title: 'Hotel Services',
      items: [
        { name: 'Room Service', availability: 'Available on request' },
        { name: 'Laundry Service', availability: 'Available on request' },
        { name: 'Wake-up Call', availability: 'Available 24/7' },
        { name: 'Travel Assistance', availability: 'Available at front desk' },
        { name: 'Medical Assistance', availability: 'Available on request' },
      ],
    },
    houseRules: {
      title: 'House Rules',
      items: [
        'Valid government-issued photo ID is mandatory at check-in.',
        'Smoking is strictly prohibited inside the rooms.',
        'Outside food is allowed in rooms.',
        'Visitors must register at the front desk.',
        'Please maintain silence after 10:00 PM for the comfort of all guests.',
        'Any damage to hotel property will be charged to the guest.',
      ],
    },
    nearby: {
      title: 'Nearby',
    },
    footerNote: {
      line1: "For any assistance during your stay, please don't hesitate to contact us.",
      line2: 'We hope you have a wonderful experience at Liv.inn!',
    },
  },

  // ---------------------------------------------------------------------------
  // Privacy Policy
  // ---------------------------------------------------------------------------
  privacy: {
    header: {
      title: 'Privacy Policy',
      subtitle: 'How we handle and protect your information',
    },
    lastUpdated: 'Last updated: September 2026',
    intro:
      'Liv.inn ("we", "us", "our") is committed to protecting the privacy of our guests and website visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or stay at our hotel.',
  },

  // ---------------------------------------------------------------------------
  // Terms & Conditions
  // ---------------------------------------------------------------------------
  terms: {
    header: {
      title: 'Terms & Conditions',
      subtitle: 'Please review our policies before your stay',
    },
    lastUpdated: 'Last updated: September 2026',
    intro:
      'By making a reservation at or staying at Liv.inn ("the Hotel"), you agree to the following terms and conditions. Please read them carefully.',
  },

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: {
    quickLinks: 'Quick Links',
    contact: 'Contact',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    guestInformation: 'Guest Information',
    copyright: (year: number, brandName: string) => `© ${year} ${brandName}. All rights reserved.`,
    instagramAria: 'Follow us on Instagram',
  },

  // ---------------------------------------------------------------------------
  // SEO Metadata Strings
  // ---------------------------------------------------------------------------
  seo: {
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
    pages: {
      about: {
        title: 'About',
        description:
          'Learn about Liv.inn — a modern boutique hotel in Mumbai dedicated to providing comfortable stays, warm hospitality, and excellent service.',
      },
      rooms: {
        title: 'Rooms & Facilities',
        description:
          'Explore the rooms and facilities at Liv.inn. Choose from Standard, Deluxe, and Premium rooms — all designed for comfort and equipped with modern amenities.',
      },
      gallery: {
        title: 'Gallery',
        description:
          'Explore photos of Liv.inn — our rooms, interiors, amenities, and building exterior in Mumbai.',
      },
      location: {
        title: 'Location',
        description:
          'Find Liv.inn in Mumbai. Get directions, view our address, and explore nearby attractions.',
      },
      contact: {
        title: 'Contact',
        description:
          'Get in touch with Liv.inn. Send an enquiry, call us, or message us on WhatsApp for room availability and bookings.',
      },
      guestInfo: {
        title: 'Guest Information',
        description:
          'Essential information for guests staying at Liv.inn — services, facilities, house rules, and contact details.',
      },
      privacy: {
        title: 'Privacy Policy',
        description:
          'Privacy Policy for Liv.inn. Learn how we collect, use, and protect your personal information.',
      },
      terms: {
        title: 'Terms & Conditions',
        description:
          'Terms and Conditions for staying at Liv.inn. Read our booking, cancellation, and property policies.',
      },
    },
  },
} as const;

export type Strings = typeof STRINGS;

export default STRINGS;
