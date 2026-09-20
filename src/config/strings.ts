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
    logoAlt: 'liv.inn Boutique Hotel â€” Pune',
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
      checkIn: 'Check-in: 11:00 AM',
      checkOut: 'Check-out: 10:00 AM',
      timing: 'Check-in: 11:00 AM â€¢ Check-out: 10:00 AM (24/7 Front Desk)',
      amenities: 'Room Amenities',
      facilities: 'Verified Amenities',
      hotelFacilities: 'Hotel Facilities & Services',
      houseRules: 'Guest Guidelines & Policies',
      services: 'Guest Services',
      nearby: 'Nearby Landmarks & Connectivity',
      guests: 'Guests',
      guest: 'Guest',
      upTo: 'Up to',
      more: 'more',
      required: '*',
      tbcBadge: 'To be confirmed',
      verifiedBadge: 'Verified',
      natureViewBadge: 'Nature-Oriented View',
      inventoryBadge: '25 Rooms â€¢ 5 Floors â€¢ 200 sq.ft',
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
      badge: 'Boutique Hotel in Pune â€¢ 25 Premium Rooms',
      title: 'A Serene, Nature-Oriented Stay in Pune',
      description:
        'Experience calm comfort at liv.inn â€” an intimate 25-room boutique hotel in Pune with 5 rooms on each floor, scenic nature views, in-house cloud kitchen, and 24/7 guest assistance.',
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
      eyebrow: 'OUR PREMIUM ROOMS',
      title: 'Stay in Comfort. Wake Up Refreshed.',
      subtitle:
        'Thoughtfully designed spaces that combine modern comfort, quiet surroundings and everything you need for a memorable stay.',
      stamp: ['A STAY', 'BEYOND', 'ORDINARY'],
      rooms: [
        {
          id: 'double-room',
          number: '01',
          name: 'Double Bed Room',
          category: 'BOUTIQUE ACCOMMODATION',
          description:
            'A spacious 200 sq. ft. room thoughtfully equipped with a plush double bed (180 cm queen-size), attached en-suite bathroom with 24/7 hot water, individual air conditioning, smart TV, high-speed Wi-Fi, work table, and scenic nature-facing views. Arranged with only 5 rooms per floor across 5 floors for guaranteed privacy.',
          tagBadge: '25 ROOMS TOTAL | 200 SQ. FT. | DOUBLE BED | NATURE VIEW',
          occupancyText: 'Accommodates 2 + 1 Guests (Extra Bed Available)',
          image: '/images/rooms/premium_room.jpg',
          amenities: [
            { icon: 'Bed', label: 'Double Bed (180cm)' },
            { icon: 'Bath', label: 'Attached Bath (24/7 Hot Water)' },
            { icon: 'Wind', label: 'Air Conditioning' },
            { icon: 'Wifi', label: 'High-Speed Wi-Fi' },
            { icon: 'Tv', label: 'Smart TV' },
            { icon: 'Laptop', label: 'Work Table & Chair' },
            { icon: 'Coffee', label: 'In-Room Cloud Kitchen' },
            { icon: 'Armchair', label: 'Scenic Nature View' },
            { icon: 'Sparkles', label: 'Daily Housekeeping' },
          ],
        },
      ],
      consultationBanner: {
        title: 'Planning a Stay or Group Booking in Pune?',
        subtitle:
          'Connect with our front desk team for live availability, current seasonal tariffs, and corporate bookings.',
        btnText: 'CONTACT FRONT DESK',
        href: '/contact',
      },
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
      mapTitle: 'liv.inn Hotel Location â€” Wagholi, Pune',
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
      mapTitle: 'liv.inn Hotel Location Map â€” Wagholi, Pune',
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
      title: 'Check-in & Check-out Timings',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      providedTiming: hotelInfo.timings.providedTiming,
      checkInTime: '11:00 AM',
      checkOutTime: '10:00 AM',
      receptionTime: '24 Hours Front Desk',
      note: 'Check-in begins at 11:00 AM and check-out is at 10:00 AM. Front desk reception is available 24 hours to assist you.',
    },
    wifi: {
      title: 'Complimentary Wi-Fi',
      description:
        'High-speed Wi-Fi is provided complimentary throughout all 5 floors of the property. Network credentials are provided upon arrival.',
    },
    services: {
      title: 'Verified Property Facilities & Services',
      items: [
        { name: '24/7 Front Desk & Local Taxi Assistance', availability: 'Available round the clock' },
        { name: 'In-House Cloud Kitchen', availability: 'Breakfast, Lunch & Dinner service' },
        { name: 'Elevator / Lift Facility', availability: 'Operational across all 5 floors' },
        { name: '100% Power Backup', availability: '24/7 Uninterrupted supply' },
        { name: 'Pet-Friendly Stay', availability: 'Pets allowed â€¢ No extra fee' },
        { name: 'Free On-Site Parking', availability: 'Complimentary 24/7 on premises' },
        { name: 'Laundry & Garment Care', availability: 'Available on request' },
        { name: 'Housekeeping & Cleanliness', availability: 'Daily service & fresh linen' },
      ],
    },
    houseRules: {
      title: 'Guest Guidelines & Policies',
      items: [
        'Check-in: 11:00 AM | Check-out: 10:00 AM. Front desk reception is open 24 hours.',
        'Valid government-issued photo ID is required for all adult guests (Local IDs accepted).',
        'Couple-friendly property welcoming couples and families.',
        'Pets are welcome to stay with you at no additional charge.',
        '100% smoke-free property: Smoking is strictly prohibited inside all guest rooms and indoor areas.',
        'Accepted payment methods: UPI (Google Pay, PhonePe, Paytm), Cash, Credit/Debit Cards, and Bank Transfer.',
        'Complimentary extra bed is available upon request (subject to advance notice).',
        'Please maintain quiet hours after 10:00 PM for restful comfort across all 5 rooms per floor.',
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
      `Â© ${year} ${brandName} Hotel, Pune. All rights reserved.`,
    instagramAria: 'Follow liv.inn on Instagram',
  },

  // ---------------------------------------------------------------------------
  // SEO Metadata Strings
  // ---------------------------------------------------------------------------
  seo: {
    siteUrl: 'https://livinn.in',
    defaultTitle: 'liv.inn â€” Boutique Hotel in Pune | Nature-Oriented Stay',
    titleTemplate: '%s | liv.inn â€” Boutique Hotel in Pune',
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
          'Learn about liv.inn â€” a modern 25-room boutique hotel in Pune with 5 rooms per floor, serene nature views, and dedicated 24/7 hospitality.',
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

// ---------------------------------------------------------------------------
// Chatbot & Assistant Strings
// ---------------------------------------------------------------------------
// --- Brand --------------------------------------------------------------------
export const BRAND = {
  name:        'LIV.INN',
  tagline:     'STAY IN COMFORT, LIVE THE MOMENT.',
  developerBy: 'developed by',
  developer:   'Clooyzi Technologies',
  phoneNumber: '+918007724646',
  phoneDisplay:'+91 8007724646',
} as const;

// --- Miss. Maya Personal Assistant Header -------------------------------------
export const ASSISTANT = {
  name:       'Miss. Maya',
  role:       'Your Personal assistant',
  callTitle:  'Call Front Desk',
  closeLabel: 'Close assistant',
} as const;

// --- Booking Form ("GET IN TOUCH") -------------------------------------------
export const BOOKING_FORM = {
  // Section title
  sectionTitle:    'GET IN TOUCH',
  sectionSubtitle: "We're here to help you a comfortable stay at LIV.INN.",

  // Selected services chip area
  selectedRequestsLabel: 'Your Selected Requests:',

  // Name field
  nameLabel:       'Name',
  nameRequired:    '* required',
  namePlaceholder: 'Enter your full name',
  nameEmoji:       '👤',
  nameErrorRequired: 'Name is required.',

  // Phone field
  phoneLabel:       'Phone Number',
  phoneRequired:    '* 10 digits',
  phonePlaceholder: '10-digit mobile number',
  phoneEmoji:       '📱',
  phonePrefix:      '🇮🇳 +91',
  phoneErrorRequired: 'Phone number is required.',
  phoneErrorLength:   'Phone number must be exactly 10 digits.',
  phoneValidHint:     'Valid number ✓',
  phoneProgressHint:  (entered: number) => `${entered}/10 digits entered`,

  // Email field
  emailLabel:       'Email ID',
  emailOptional:    'optional',
  emailPlaceholder: 'Enter your email address',
  emailEmoji:       '✉️',

  // Remark / message field
  remarkLabel:       'Remark',
  remarkOptional:    'optional',
  remarkPlaceholder: '"Write your message and preferred date & time."',
  remarkEmoji:       '💬',

  // Action buttons
  submitButtonLabel:     'SUBMIT',
  submittingButtonLabel: 'Submitting...',
  backButtonPrefix:      '← Back to',

} as const;

// --- Service Selection Gate (validation) -------------------------------------
export const SERVICE_GATE = {
  /** Inline alert shown below each service tab CTA when nothing is selected */
  noServiceSelectedError: 'Please select at least one service first.',
} as const;

// --- CTA Button --------------------------------------------------------------
export const CTA = {
  /** Primary action button on every service tab */
  selectAndProceed: 'Select & click here',
} as const;

// --- Thank You Screen ---------------------------------------------------------
export const THANK_YOU = {
  heading:           '— THANK YOU —',
  subheading:        'Your Request has been submitted',

  // Google Review box
  googleReviewBadge: 'Google Review',
  googleReviewTitle: 'How was your stay?',
  googleReviewSubtitle: "We'd love to hear from you!",
  googleReviewButton:   'Review us on Google →',
  googleReviewShare:    'Share Your Experience',
  googleMapsUrl:        'https://www.google.com/maps/place/18%C2%B033\'03.6%22N+73%C2%B058\'26.3%22E/@18.5511055,73.9702936,1240m/data=!3m1!1e3!4m4!3m3!8m2!3d18.5510123!4d73.9739785?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',

  // Reaction options
  reactions: [
    { id: 'excellent',   emoji: '😊', title: 'Excellent',   subtitle: 'Loved my stay!'  },
    { id: 'good',        emoji: '😐', title: 'Good',        subtitle: 'It was a pleasant stay.' },
    { id: 'improvement', emoji: '😞', title: 'Needs Improvement', subtitle: 'We can do better.' },
  ] as const,

  // Action buttons
  whatsappLabel: '💬 WhatsApp Desk',
  startNewLabel: 'Start New',

  // WhatsApp message template
  whatsappMessage: (services: string) =>
    `Hello liv.inn Reception, I submitted a service request for: ${services}`,
} as const;

