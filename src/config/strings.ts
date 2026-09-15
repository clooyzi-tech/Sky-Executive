/**
 * Centralized Strings Configuration for liv.inn (Pune)
 * 
 * Synchronized directly with verified domain content under src/content/
 * - Single source of truth
 * - Zero references to other properties or Mumbai
 * - Strictly verified information from developer document
 */

import {
  hotelInfo,
  roomsList,
  allFacilitiesAndServices,
  contactConfig,
} from '@/content';

export const STRINGS = {
  // ---------------------------------------------------------------------------
  // Brand Identity
  // ---------------------------------------------------------------------------
  brand: {
    name: hotelInfo.name,
    legalName: hotelInfo.legalName,
    tagline: hotelInfo.tagline,
    description: hotelInfo.shortDescription,
    logoAlt: 'liv.inn Boutique Hotel — Pune',
    logoPath: '/livinn_logo.jpg',
  },

  // ---------------------------------------------------------------------------
  // Common UI Strings & Actions
  // ---------------------------------------------------------------------------
  common: {
    buttons: {
      enquireNow: 'Enquire Now',
      exploreRooms: 'Explore Rooms',
      viewAllRooms: 'Explore Premium Rooms',
      viewFullGallery: 'View Gallery',
      getDirections: 'View Pune Area',
      moreDetails: 'More Details',
      chatWhatsApp: 'Enquire on WhatsApp',
      callNow: 'Call Front Desk',
      callReception: 'Call Reception',
      sendEnquiry: 'Submit Stay Enquiry',
      sending: 'Submitting Enquiry...',
      sendAnotherEnquiry: 'Submit Another Enquiry',
    },
    labels: {
      checkIn: 'Check-in (11:00 AM — To be confirmed)',
      checkOut: 'Check-out (10:00 AM — To be confirmed)',
      timing: 'Timings (11:00 AM to 10:00 AM — To be confirmed)',
      amenities: 'Room Amenities',
      facilities: 'Verified Amenities',
      hotelFacilities: 'Hotel Facilities & Services',
      houseRules: 'Guest Guidelines',
      services: 'Guest Services',
      nearby: 'Nearby Establishments',
      guests: 'Guests',
      guest: 'Guest',
      upTo: 'Up to',
      more: 'more',
      required: '*',
      tbcBadge: 'To be confirmed',
      verifiedBadge: 'Verified',
      natureViewBadge: 'Nature-Oriented View',
      inventoryBadge: '25 Rooms • 5 Floors',
    },
    badges: {
      welcomeTo: 'Welcome to liv.inn',
      city: 'Pune, Maharashtra',
      natureView: 'Nature-Oriented Views',
      roomDistribution: '5 Rooms on Each Floor',
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
      { label: 'Contact & Enquiry', href: '/contact' },
    ],
    aria: {
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },

  // ---------------------------------------------------------------------------
  // Contact & Connectivity
  // ---------------------------------------------------------------------------
  contact: {
    phone: contactConfig.phone,
    whatsapp: contactConfig.whatsapp,
    email: contactConfig.email,
    address: {
      line1: contactConfig.address.property,
      line2: contactConfig.address.street,
      locality: contactConfig.address.locality,
      city: contactConfig.address.city,
      state: contactConfig.address.state,
      pincode: '412207',
      country: contactConfig.address.country,
      landmark: contactConfig.address.landmark,
      full: contactConfig.address.fullAddressDisplay,
      note: contactConfig.address.note,
    },
    googleMapsUrl: contactConfig.maps.googleMapsSearchUrl,
    googleMapsEmbed: contactConfig.maps.puneCityEmbedUrl,
    social: {
      instagram: contactConfig.social.instagram,
      facebook: '',
    },
    cards: {
      whatsapp: {
        title: 'WhatsApp',
        subtitle: 'Direct enquiry & chat',
      },
      call: {
        title: 'Front Desk',
        subtitle: '24/7 Guest Assistance',
      },
      email: {
        title: 'Email Enquiry',
        subtitle: 'We reply promptly to all inquiries',
      },
      address: {
        title: 'Location',
        viewMap: 'View Pune Overview',
      },
    },
    prefilledMessages: {
      heroEnquiry: 'Hi! I would like to make a stay enquiry at liv.inn in Pune.',
      bookingCTA: 'Hi! I would like to check room availability and rates for liv.inn Pune.',
      floatingWhatsApp: 'Hi! I would like to know more about liv.inn Hotel in Pune.',
      roomEnquiry: (roomName: string) =>
        `Hi! I'm interested in the ${roomName} at liv.inn Pune. Could you share availability and details?`,
      roomEnquiryShort: (roomName: string) =>
        `Hi! I'm interested in the ${roomName} at liv.inn Pune.`,
      guestAssistance: 'Hi, I am a guest at liv.inn Pune and need assistance.',
      contactPageEnquiry: "Hi! I'd like to enquire about staying at liv.inn Pune.",
    },
  },

  // ---------------------------------------------------------------------------
  // Home Page
  // ---------------------------------------------------------------------------
  home: {
    hero: {
      badge: 'Boutique Hotel in Pune • 25 Premium Rooms',
      title: 'A Serene, Nature-Oriented Stay in Pune',
      description:
        'Experience calm comfort at liv.inn — an intimate 25-room boutique hotel in Pune with 5 rooms on each floor, scenic nature views, in-house cloud kitchen, and 24/7 guest assistance.',
      ctaEnquire: 'Enquire Now',
      ctaExplore: 'Explore Rooms',
      stats: [
        { label: 'Total Rooms', value: '25' },
        { label: 'Rooms Per Floor', value: '5' },
        { label: 'Setting', value: 'Nature Views' },
        { label: 'Guest Support', value: '24/7' },
      ],
    },
    introduction: {
      title: 'Welcome to liv.inn',
      subtitle: 'Where peaceful nature views meet thoughtful boutique hospitality',
      p1: hotelInfo.story.paragraphs[0],
      p2: hotelInfo.story.paragraphs[1],
    },
    experience: {
      stamp: ['COMFORT', 'IN EVERY', 'DETAIL'],
      script: 'Stay Relax Recharge',
      eyebrow: 'THE LIV.INN EXPERIENCE',
      title: 'More Than a Stay, A Better Experience',
      subtitle:
        'Thoughtfully curated services and facilities to make your stay comfortable, convenient and memorable.',
      heroRoom: {
        category: 'ROOMS & ACCOMMODATION',
        title: 'Comfortable Rooms',
        description:
          'Thoughtfully designed rooms with modern amenities to make your stay relaxing and memorable.',
        linkText: 'EXPLORE ROOMS',
        href: '/rooms',
        image: '/images/rooms/premium_room.jpg',
      },
      housekeeping: {
        category: 'HOUSEKEEPING',
        title: 'Daily Housekeeping',
        description:
          'Careful daily housekeeping to keep your space fresh, clean and comfortable throughout your stay.',
        linkText: 'LEARN MORE',
        href: '/rooms#facilities',
        image: '/images/services/housekeeping.jpg',
      },
      gridServices: [
        {
          id: 'assistance',
          category: 'GUEST SUPPORT',
          title: '24/7 Guest Assistance',
          description:
            'Our team is always available to assist you whenever you need support during your stay.',
          linkText: 'LEARN MORE',
          href: '/contact',
          icon: 'Users',
          image: '/images/services/reception.jpg',
        },
        {
          id: 'wifi',
          category: 'CONNECTIVITY',
          title: 'High-Speed Wi-Fi',
          description:
            'Stay connected with reliable and high-speed internet access throughout the hotel.',
          linkText: 'LEARN MORE',
          href: '/rooms#facilities',
          icon: 'Wifi',
          image: '/images/services/wifi_desk.jpg',
        },
        {
          id: 'parking',
          category: 'PARKING',
          title: 'Convenient Parking',
          description:
            'Easy and secure parking facilities for guests arriving by car.',
          linkText: 'LEARN MORE',
          href: '/location',
          icon: 'Car',
          image: '/images/services/parking.jpg',
        },
        {
          id: 'dining',
          category: 'DINING',
          title: 'Room Service',
          description:
            'Enjoy delicious meals and refreshments from the comfort of your room.',
          linkText: 'LEARN MORE',
          href: '/rooms#facilities',
          icon: 'Bell',
          image: '/images/property/cloud_kitchen.jpg',
        },
        {
          id: 'hotwater',
          category: 'HOT WATER',
          title: 'Always Refreshing',
          description:
            'Enjoy a comfortable and refreshing experience with reliable hot water.',
          linkText: 'LEARN MORE',
          href: '/rooms#facilities',
          icon: 'Droplets',
          image: '/images/services/bathroom.jpg',
        },
        {
          id: 'ac',
          category: 'AIR CONDITIONING',
          title: 'Cool Comfort',
          description:
            'Relax in a comfortable environment maintained at the temperature you prefer.',
          linkText: 'LEARN MORE',
          href: '/rooms#facilities',
          icon: 'Wind',
          image: '/images/services/ac.jpg',
        },
        {
          id: 'cloudkitchen',
          category: 'DINING & KITCHEN',
          title: 'In-House Cloud Kitchen',
          description:
            'Wholesome meals and breakfast prepared on order and delivered directly to your room.',
          linkText: 'LEARN MORE',
          href: '/contact',
          icon: 'UtensilsCrossed',
          image: '/images/property/cloud_kitchen.jpg',
        },
        {
          id: 'nature',
          category: 'ENVIRONMENT',
          title: 'Nature-Oriented Views',
          description:
            'Restful green panoramas and open fresh air perspectives overlooking Pune scenery.',
          linkText: 'LEARN MORE',
          href: '/gallery',
          icon: 'Trees',
          image: '/images/property/nature_view.jpg',
        },
        {
          id: 'luggage',
          category: 'CONCIERGE',
          title: 'Luggage & Front Desk Care',
          description:
            'Secure luggage storage and seamless assistance for early check-ins or late departures.',
          linkText: 'LEARN MORE',
          href: '/contact',
          icon: 'Luggage',
          image: '/images/services/reception.jpg',
        },
      ],
      banner: {
        title: 'Experience Comfort at Every Step',
        subtitle:
          'Discover all the services and facilities designed for your perfect stay at Liv.inn.',
        btnText: 'VIEW ALL SERVICES',
        href: '/rooms#facilities',
        image: '/images/services/banner.jpg',
      },
      highlights: [
        { icon: 'MapPin', label: 'A Boutique Stay in Pune' },
        { icon: 'Bed', label: 'Comfortable & Clean Spaces' },
        { icon: 'Heart', label: 'Warm Hospitality' },
        { icon: 'Sparkles', label: 'Memorable Experiences' },
      ],
    },
    roomsPreview: {
      title: 'Our Premium Rooms',
      subtitle: '25 thoughtfully designed rooms with 5 rooms on each floor for quiet comfort',
      ctaEnquire: 'Enquire About This Room',
      ctaViewAll: 'View Rooms & Facilities',
    },
    galleryPreview: {
      title: 'A Glimpse of liv.inn',
      subtitle: 'Explore our premium rooms, green surroundings, and verified amenities in Pune',
      ctaViewAll: 'View Full Gallery',
    },
    natureHighlight: {
      badge: 'Tranquil Environment',
      title: 'Nature-Oriented Surroundings',
      description:
        'Unlike crowded city stays, liv.inn provides a refreshing perspective with pleasant nature-facing views. Wake up to natural daylight and verdant scenery that restores balance to your travels in Pune.',
      bulletPoints: [
        'Green, nature-oriented perspectives from rooms',
        'Quiet atmosphere with only 5 rooms per floor',
        'Abundant natural daylight and fresh ventilation',
        'A peaceful retreat after a busy day in Pune',
      ],
    },
    whyChoose: {
      title: 'Why Choose liv.inn',
      subtitle: 'Verified amenities and services designed around your comfort',
      features: [
        {
          icon: 'Trees',
          title: 'Nature-Oriented Views',
          description:
            'Tranquil greenery views designed to provide a restful stay away from city noise.',
        },
        {
          icon: 'Building2',
          title: 'Boutique Exclusivity',
          description:
            'Only 25 rooms total, with 5 rooms per floor ensuring privacy and personalized attention.',
        },
        {
          icon: 'UtensilsCrossed',
          title: 'In-House Cloud Kitchen',
          description:
            'Freshly prepared meals and dining convenience made accessible directly to your room.',
        },
        {
          icon: 'Clock',
          title: '24/7 Guest Assistance',
          description:
            'Dedicated front desk and service support available around the clock for any request.',
        },
        {
          icon: 'Wifi',
          title: 'Complimentary High-Speed Wi-Fi',
          description:
            'Fast and dependable Wi-Fi connection throughout the hotel for work and relaxation.',
        },
        {
          icon: 'Car',
          title: 'On-Site Parking',
          description:
            'Dedicated on-premises parking space for guests arriving by personal vehicle.',
        },
      ],
    },
    servicesOverview: {
      badge: 'Dedicated Care',
      title: 'Guest Services & Amenities',
      subtitle: 'Verified facilities provided to enhance every aspect of your stay in Pune',
    },
    locationPreview: {
      title: 'Location & Connectivity',
      subtitle: 'Situated in Upper Kharadi, Wagholi, Pune with peaceful green surroundings',
      ctaDirections: 'Open Google Maps',
      ctaDetails: 'View Landmark Details',
      mapTitle: 'liv.inn Hotel Location — Wagholi, Pune',
      addressNotice: 'Plot No-31, Lane No-4, Infinity Greens Society, Near VTP Altair Phase-1, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207',
    },
    bookingCTA: {
      title: 'Plan Your Stay at liv.inn',
      description:
        'Submit a stay enquiry or reach out directly to check room availability, arrival arrangements, or group requirements. Our team is here 24/7 to assist you.',
      whatsappBtn: 'Enquire on WhatsApp',
      callBtn: 'Call Front Desk',
      enquireBtn: 'Submit Stay Enquiry',
    },
  },

  // ---------------------------------------------------------------------------
  // About Page
  // ---------------------------------------------------------------------------
  about: {
    header: {
      title: 'About liv.inn',
      subtitle: 'Intimate boutique hospitality and nature-oriented comfort in Pune',
    },
    story: {
      title: hotelInfo.story.title,
      p1: hotelInfo.story.paragraphs[0],
      p2: hotelInfo.story.paragraphs[1],
      p3: hotelInfo.story.paragraphs[2],
    },
    overviewStats: [
      { label: 'Total Rooms', value: '25 Rooms' },
      { label: 'Distribution', value: '5 Rooms per Floor' },
      { label: 'Floors', value: '5 Floors' },
      { label: 'Primary Category', value: 'Premium Rooms' },
      { label: 'View Type', value: 'Nature-Oriented' },
      { label: 'Location', value: 'Wagholi, Pune' },
    ],
    values: {
      title: 'Our Commitments',
      subtitle: 'The principles guiding every guest interaction at liv.inn',
      items: hotelInfo.values.map((v) => ({
        title: v.title,
        text: v.description,
      })),
    },
    facilities: {
      title: 'Verified Facilities',
      subtitle: 'Practical, reliable amenities curated for staying guests',
    },
  },

  // ---------------------------------------------------------------------------
  // Rooms Page
  // ---------------------------------------------------------------------------
  rooms: {
    header: {
      title: 'Premium Rooms',
      subtitle: '25 thoughtfully appointed rooms with tranquil nature-oriented views',
    },
    amenitiesTitle: 'Verified In-Room Amenities',
    guestsSuffix: 'guests',
    facilitiesTitle: 'Property Facilities & Services',
    facilitiesSubtitle: 'Everything available to make your time in Pune effortless',
    list: roomsList.map((r) => ({
      id: r.id,
      name: r.name,
      category: r.category,
      description: r.fullDescription,
      shortDescription: r.shortDescription,
      natureViewHighlight: r.natureViewHighlight,
      amenities: [...r.amenities],
      keyFeatures: [...r.keyFeatures],
      bedType: r.bedType,
      maxOccupancy: r.maxOccupancy,
      priceLabel: r.priceDisplay,
      pricingNote: r.pricingNote,
      availabilityLabel: r.availabilityDisplay,
    })),
  },

  // ---------------------------------------------------------------------------
  // Facilities & Services
  // ---------------------------------------------------------------------------
  facilities: allFacilitiesAndServices.map((f) => ({
    id: f.id,
    icon: f.icon,
    title: f.title,
    category: f.category,
    description: f.shortDescription,
    fullDescription: f.fullDescription,
    availability: f.availability,
  })),

  // ---------------------------------------------------------------------------
  // Gallery Page
  // ---------------------------------------------------------------------------
  gallery: {
    header: {
      title: 'Property Gallery',
      subtitle: 'A preview of liv.inn, our premium rooms, and peaceful Pune surroundings',
    },
    categories: ['All', 'Property', 'Rooms', 'Nature', 'Dining'] as const,
    lightbox: {
      close: 'Close preview',
      prev: 'Previous',
      next: 'Next',
      counter: (current: number, total: number) => `${current} / ${total}`,
    },
  },

  // ---------------------------------------------------------------------------
  // Location Page
  // ---------------------------------------------------------------------------
  location: {
    header: {
      title: 'Location & Connectivity',
      subtitle: 'Located in Pune, Maharashtra with serene nature views and city accessibility',
    },
    findUs: {
      title: 'Property Location',
      addressLabel: 'Official Address',
      phoneLabel: 'Front Desk',
      emailLabel: 'Email Enquiry',
      ctaDirections: 'Open Google Maps',
      mapTitle: 'liv.inn Hotel Location Map — Wagholi, Pune',
      note: 'Situated near VTP Altair Phase-1 in Infinity Greens Society, Gat No- 1251, Upper Kharadi, Wagholi, Pune-412207, Wagholi 412207.',
    },
    attractions: {
      title: 'Nearby Establishments & Connectivity',
      subtitle: 'Convenient connectivity across Upper Kharadi, Wagholi, and East Pune',
      items: contactConfig.nearbyCategories.map((c) => ({
        name: c.category,
        distance: c.statusText,
        description: c.description,
        icon: c.icon,
      })),
    },
  },

  // ---------------------------------------------------------------------------
  // Contact & Enquiry Page
  // ---------------------------------------------------------------------------
  contactPage: {
    header: {
      title: 'Contact & Enquiry',
      subtitle: 'Enquire about room availability, rates, or property details in Pune',
    },
    sidebar: {
      title: 'Reach Out to Us',
      description:
        'Have a question about staying at liv.inn? Send an enquiry or connect with our team. We respond promptly with verified details.',
    },
    form: {
      nameLabel: contactConfig.formStrings.nameLabel,
      namePlaceholder: contactConfig.formStrings.namePlaceholder,
      emailLabel: contactConfig.formStrings.emailLabel,
      emailPlaceholder: contactConfig.formStrings.emailPlaceholder,
      phoneLabel: contactConfig.formStrings.phoneLabel,
      phonePlaceholder: contactConfig.formStrings.phonePlaceholder,
      checkInLabel: contactConfig.formStrings.checkInLabel,
      checkOutLabel: contactConfig.formStrings.checkOutLabel,
      roomPrefLabel: 'Room Category',
      noPrefOption: 'Premium Room (25 Rooms Total)',
      guestsLabel: contactConfig.formStrings.guestsLabel,
      guestSingular: 'Guest',
      guestPlural: 'Guests',
      messageLabel: contactConfig.formStrings.messageLabel,
      messagePlaceholder: contactConfig.formStrings.messagePlaceholder,
      submitBtn: contactConfig.formStrings.submitBtn,
      submittingBtn: contactConfig.formStrings.submittingBtn,
      successTitle: contactConfig.formStrings.successTitle,
      successMessage: contactConfig.formStrings.successMessage,
      disclaimer: contactConfig.formStrings.disclaimer,
      sendAnotherBtn: contactConfig.formStrings.sendAnotherBtn,
    },
  },

  // ---------------------------------------------------------------------------
  // Guest Information Page
  // ---------------------------------------------------------------------------
  guestInfo: {
    header: {
      title: 'Guest Information',
      subtitle: 'Helpful details and verified amenities for your stay at liv.inn',
    },
    quickContact: {
      whatsapp: 'WhatsApp Front Desk',
      call: 'Call Front Desk (24/7)',
    },
    timing: {
      title: 'Timings (To Be Confirmed)',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      providedTiming: hotelInfo.timings.providedTiming,
      checkInTime: '11:00 AM (To be confirmed)',
      checkOutTime: '10:00 AM (To be confirmed)',
      note: hotelInfo.timings.note,
    },
    wifi: {
      title: 'Complimentary Wi-Fi',
      description:
        'High-speed Wi-Fi is provided complimentary throughout all 5 floors of the property. Network credentials are provided upon arrival.',
    },
    services: {
      title: 'Verified Property Services',
      items: [
        { name: '24/7 Guest Assistance', availability: 'Available round the clock' },
        { name: 'In-House Cloud Kitchen', availability: 'Meal service available' },
        { name: 'Laundry Service', availability: 'Available on request' },
        { name: 'Housekeeping & Cleanliness', availability: 'Daily service' },
        { name: 'On-Site Parking', availability: 'Available for registered guests' },
      ],
    },
    houseRules: {
      title: 'Guest Guidelines',
      items: [
        'Valid government-issued photo ID is required for all adult guests at arrival.',
        'Smoking is strictly prohibited inside the guest rooms.',
        'Please maintain quiet hours after 10:00 PM to ensure restful comfort for all 5 rooms per floor.',
        'Contact the 24/7 front desk for any housekeeping, dining, or assistance requirements.',
      ],
    },
    nearby: {
      title: 'Nearby Establishments (Pune)',
    },
    footerNote: {
      line1: 'For any assistance during your stay in Pune, our front desk team is ready to help 24/7.',
      line2: 'We wish you a pleasant and restful stay at liv.inn.',
    },
  },

  // ---------------------------------------------------------------------------
  // Privacy Policy & Terms
  // ---------------------------------------------------------------------------
  privacy: {
    header: {
      title: 'Privacy Policy',
      subtitle: 'How liv.inn handles and protects your personal information',
    },
    lastUpdated: 'Last updated: September 2026',
    intro:
      'liv.inn ("we", "us", "our") is dedicated to protecting the privacy of our guests and website visitors. This policy outlines how enquiry information is collected and processed for our Pune property.',
  },

  terms: {
    header: {
      title: 'Terms & Conditions',
      subtitle: 'General policies for staying at liv.inn, Pune',
    },
    lastUpdated: 'Last updated: September 2026',
    intro:
      'By submitting an enquiry or residing at liv.inn, guests agree to the following guidelines. Detailed booking terms and cancellation policies will be confirmed prior to reservation confirmation.',
  },

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: {
    quickLinks: 'Navigation',
    contact: 'Contact & Location',
    legal: 'Information & Policies',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    guestInformation: 'Guest Information',
    copyright: (year: number, brandName: string) =>
      `© ${year} ${brandName} Hotel, Pune. All rights reserved.`,
    instagramAria: 'Follow liv.inn on Instagram',
  },

  // ---------------------------------------------------------------------------
  // SEO Metadata Strings
  // ---------------------------------------------------------------------------
  seo: {
    siteUrl: 'https://livinn.in',
    defaultTitle: 'liv.inn — Boutique Hotel in Pune | Nature-Oriented Stay',
    titleTemplate: '%s | liv.inn — Boutique Hotel in Pune',
    defaultDescription:
      'liv.inn is a 25-room boutique hotel in Pune offering premium rooms with tranquil nature views, 5 rooms per floor, cloud kitchen, free Wi-Fi, on-site parking, and 24/7 guest assistance.',
    defaultKeywords: [
      'hotel in Pune',
      'boutique hotel Pune',
      'liv.inn Pune',
      'livinn hotel',
      'nature view hotel Pune',
      'premium rooms Pune',
      'cloud kitchen hotel Pune',
      'hotel with parking Pune',
      'peaceful stay Pune',
    ],
    pages: {
      about: {
        title: 'About',
        description:
          'Learn about liv.inn — a modern 25-room boutique hotel in Pune with 5 rooms per floor, serene nature views, and dedicated 24/7 hospitality.',
      },
      rooms: {
        title: 'Premium Rooms & Facilities',
        description:
          'Discover our 25 premium rooms in Pune featuring serene nature-oriented views, modern en-suite amenities, free Wi-Fi, and 24/7 guest care.',
      },
      gallery: {
        title: 'Property Preview',
        description:
          'Explore images of liv.inn Pune, our premium rooms, green surroundings, and verified amenities.',
      },
      location: {
        title: 'Location in Pune',
        description:
          'Find liv.inn in Pune, Maharashtra. Explore our nature-oriented setting and connectivity to hospitals, corporate hubs, and schools.',
      },
      contact: {
        title: 'Contact & Stay Enquiry',
        description:
          'Submit a stay enquiry for liv.inn Pune. Check room availability, group requests, and verified hotel information.',
      },
      guestInfo: {
        title: 'Guest Information',
        description:
          'Essential guest guidance for staying at liv.inn Pune: Wi-Fi, cloud kitchen, laundry, parking, and 24/7 front desk support.',
      },
      privacy: {
        title: 'Privacy Policy',
        description: 'Privacy Policy for liv.inn hotel in Pune.',
      },
      terms: {
        title: 'Terms & Conditions',
        description: 'Terms and conditions for guest stays and enquiries at liv.inn Pune.',
      },
    },
  },
} as const;

export type Strings = typeof STRINGS;
export default STRINGS;
