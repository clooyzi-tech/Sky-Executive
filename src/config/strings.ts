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
  name:       'Miss. Reena',
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

// --- Legal Documents ----------------------------------------------------------
export const LEGAL_DOCS = {
  privacyPolicy: `

__Effective Date:__20 September 2026

Welcome to __Liv\.inn__\. This Privacy Policy explains how Liv\.inn collects, uses, stores, and protects personal information when you visit our website, contact us, submit an enquiry, use our Digital Concierge, or request hotel services\.

By using our website and services, you acknowledge that you have read and understood this Privacy Policy\.

<a id="about-liv.inn"></a>## 1\. About Liv\.inn

__Liv\.inn__ is a hotel and accommodation property located at:

__Plot No\-31, Lane No\-4, Infinity Greens Society, Near VTP Altair Phase\-1, Gat No\-1251, Upper Kharadi, Wagholi, Pune, Maharashtra - 412207, India\.__

__Phone:__ 8007724646  
__WhatsApp:__ 8007724646  
__Email:__ [help\.livinn@gmail\.com](mailto:help.livinn@gmail.com)

Liv\.inn provides accommodation and related guest services including housekeeping, room service, laundry, food service, and other hotel facilities\.

<a id="information-we-may-collect"></a>## 2\. Information We May Collect

Depending on how you use our website, we may collect information such as:

- Guest name
- Phone number
- Email address, where provided
- Service request details
- Booking or enquiry information
- Requested service
- Preferred date and time
- Room number or room identifier when using the Digital Concierge
- Communications submitted through our website
- Information necessary to respond to your enquiry or service request

We only request information that is reasonably relevant to the service or purpose for which it is collected\.

<a id="how-we-use-your-information"></a>## 3\. How We Use Your Information

We may use the information you provide to:

- Respond to enquiries\.
- Process accommodation\-related enquiries or bookings\.
- Process Digital Concierge service requests\.
- Provide housekeeping, room service, food, laundry, maintenance or other requested services\.
- Contact you regarding your enquiry or service request\.
- Provide customer support\.
- Maintain records of enquiries and service requests\.
- Improve our website and guest services\.
- Meet applicable legal, regulatory, accounting or record\-keeping requirements\.

<a id="digital-concierge-and-room-information"></a>## 4\. Digital Concierge and Room Information

Liv\.inn may provide a QR\-based Digital Concierge for guests\.

When a guest accesses the Digital Concierge through a room\-specific QR code, the system may identify the associated room or room identifier so that service requests can be associated with the appropriate room\.

Guests should not share room\-specific QR codes or access links with unauthorized persons\.

<a id="sharing-of-information"></a>## 5\. Sharing of Information

Liv\.inn may share relevant information only where reasonably necessary to provide services, operate the website, respond to requests, or comply with legal obligations\.

Information may be shared with:

- Authorized Liv\.inn staff\.
- Service personnel responsible for fulfilling a guest request\.
- Technology or communication service providers used to operate website functionality\.
- Payment providers, if payment services are introduced\.
- Government authorities or other parties where disclosure is required by applicable law\.

Liv\.inn does not intend to sell personal information to third parties\.

<a id="data-security"></a>## 6\. Data Security

Liv\.inn takes reasonable measures to protect information submitted through the website against unauthorized access, misuse, alteration, disclosure or loss\.

However, no internet transmission or electronic storage system can be guaranteed to be completely secure\.

<a id="data-retention"></a>## 7\. Data Retention

Liv\.inn may retain personal information for as long as reasonably necessary for the purpose for which it was collected, including providing services, maintaining business records, resolving disputes, complying with legal obligations, and protecting the legitimate interests of the hotel\.

When information is no longer reasonably required and there is no legal or legitimate reason to retain it, it may be deleted or securely disposed of\.

<a id="cookies-and-similar-technologies"></a>## 8\. Cookies and Similar Technologies

Our website may use cookies or similar technologies where required for website functionality, analytics, security or service improvement\.

Where applicable, information about such technologies and their purposes will be provided to users\.

<a id="third-party-websites"></a>## 9\. Third\-Party Websites

Our website may contain links to third\-party services such as Google Maps, Google Reviews, social\-media platforms or other external websites\.

These third\-party websites operate under their own privacy policies and terms\. Liv\.inn is not responsible for the privacy practices of external websites\.

<a id="guest-privacy-requests"></a>## 10\. Guest Privacy Requests

If you have a question, concern, or request relating to your personal information or this Privacy Policy, you may contact Liv\.inn using the contact details below\.

__Email:__ [help\.livinn@gmail\.com](mailto:help.livinn@gmail.com)  
__Phone/WhatsApp:__ 8007724646

We will consider and respond to requests in accordance with applicable law\.

<a id="childrens-information"></a>## 11\. Childrens Information

Guests and users should provide personal information only where they are authorized to do so\.

Where information relating to a child is required for a legitimate hotel service or legal requirement, it should be provided by or with the involvement of the appropriate parent or lawful guardian, as applicable\.

<a id="changes-to-this-privacy-policy"></a>## 12\. Changes to This Privacy Policy

Liv\.inn may update this Privacy Policy from time to time to reflect changes in our services, website functionality, technology, or applicable legal requirements\.

The updated version will be published on this page with an updated effective date\.

<a id="contact-us"></a>## 13\. Contact Us

For privacy\-related questions or concerns:

__Liv\.inn__  
Plot No\-31, Lane No\-4, Infinity Greens Society,  
Near VTP Altair Phase\-1, Gat No\-1251, Upper Kharadi,  
Wagholi, Pune, Maharashtra - 412207, India

__Phone:__ 8007724646  
__WhatsApp:__ 8007724646  
__Email:__ [help\.livinn@gmail\.com](mailto:help.livinn@gmail.com)

__Last Updated:__20 September 2026`,
  termsAndConditions: `

__Effective Date:__ 20 September 2026

Welcome to __Liv\.inn__\.

These Terms & Conditions govern your use of the Liv\.inn website and your interaction with our hotel services, enquiries, Digital Concierge and service\-request features\.

By accessing or using the website, you agree to comply with these Terms & Conditions\.

<a id="about-liv.inn"></a>## 1\. About Liv\.inn

Liv\.inn is a hotel and accommodation property located at:

__Plot No\-31, Lane No\-4, Infinity Greens Society, Near VTP Altair Phase\-1, Gat No\-1251, Upper Kharadi, Wagholi, Pune, Maharashtra - 412207, India\.__

Liv\.inn currently operates __25 rooms__ and provides accommodation and related guest services\.

<a id="use-of-the-website"></a>## 2\. Use of the Website

You agree to use the Liv\.inn website only for lawful purposes\.

You must not:

- Provide false or misleading information\.
- Attempt to gain unauthorized access to any part of the website\.
- Misuse room\-specific Digital Concierge access\.
- Interfere with website operation or security\.
- Submit fraudulent, abusive or unlawful requests\.
- Use the website to harm Liv\.inn, its guests, employees or service providers\.

<a id="hotel-information"></a>## 3\. Hotel Information

We make reasonable efforts to keep hotel information accurate and useful\.

Information displayed on the website may include:

- Room information
- Hotel facilities
- Services
- Food services
- Hotel timings
- Location information
- Contact information

Hotel services, facilities, timings and availability may change when necessary\.

<a id="room-and-accommodation-information"></a>## 4\. Room and Accommodation Information

Liv\.inn provides accommodation across its available rooms\.

The hotel currently records:

- 25 rooms
- Approximate room size: 200 sq\. ft\.
- Queen\-size bed configuration where applicable
- Attached bathroom
- Hot water
- TV
- Wi\-Fi
- Wardrobe
- Table/chair
- Room service
- Housekeeping
- Towels
- Toiletries
- Balcony/window
- Extra\-bed availability

Actual availability and applicable room arrangements are subject to the hotels current availability and confirmed reservation details\.

<a id="booking-and-enquiries"></a>## 5\. Booking and Enquiries

Website users may contact Liv\.inn regarding accommodation or services\.

A booking or enquiry submitted through the website is not necessarily a confirmed reservation unless Liv\.inn confirms it through the applicable booking/confirmation process\.

Guests should rely on the confirmation provided by Liv\.inn for final reservation details\.

<a id="payment-methods"></a>## 6\. Payment Methods

The hotel documentation currently identifies the following payment methods:

- UPI
- Cash
- Card
- Bank transfer

Where a particular payment method is unavailable for a specific transaction, the hotel may provide an alternative payment option\.

<a id="check-in-and-check-out"></a>## 7\. Check\-in and Check\-out

The currently specified hotel timings are:

__Check\-in:__ 11:00 AM  
__Check\-out:__ 10:00 AM

A valid ID is required for guests\.

The hotel has a 24\-hour reception\.

Any request for arrangements outside standard check\-in or check\-out times is subject to hotel availability and applicable hotel rules\.

<a id="digital-concierge"></a>## 8\. Digital Concierge

Liv\.inn may provide a QR\-based Digital Concierge through which guests can access hotel information and request services\.

Available services may include:

- Housekeeping
- Room service
- Food service
- Laundry
- Maintenance assistance
- Other available guest services

Submitting a service request does not automatically guarantee immediate fulfilment\. Requests are subject to availability and hotel operating conditions\.

<a id="hotel-facilities"></a>## 9\. Hotel Facilities

Liv\.inn currently provides or identifies the following facilities/services:

- Parking
- Security
- Wi\-Fi
- Laundry
- Power backup
- Housekeeping
- Room service
- Reception
- Food service
- Breakfast
- Lunch
- Dinner
- Cloud kitchen
- Lift/elevator
- CCTV
- Hot water

Availability and operating conditions may vary\.

<a id="food-and-dining"></a>## 10\. Food and Dining

Liv\.inn provides food service through its hotel/cloud\-kitchen operation\.

The current hotel information identifies:

- Breakfast
- Lunch
- Dinner
- Room service
- Vegetarian food
- Non\-vegetarian food
- Cloud kitchen

The property does not currently provide a dine\-in restaurant according to the hotel information provided\.

Food availability, menu items, prices and service timings may vary\.

<a id="guest-responsibilities"></a>## 11\. Guest Responsibilities

Guests are expected to:

- Provide accurate information\.
- Present valid identification when required\.
- Respect hotel property\.
- Follow applicable hotel rules\.
- Respect other guests and hotel staff\.
- Use hotel facilities responsibly\.
- Follow applicable safety requirements\.

Guests may be responsible for damage or loss caused by their actions, subject to applicable law and the hotels policies\.

<a id="external-links"></a>## 12\. External Links

The website may contain links to third\-party services such as Google Maps, Google Reviews or social\-media platforms\.

Liv\.inn does not control third\-party websites and is not responsible for their content, availability, privacy practices or terms\.

<a id="website-availability"></a>## 13\. Website Availability

Liv\.inn will make reasonable efforts to keep the website available, but temporary interruptions may occur because of maintenance, technical issues, network problems or circumstances outside the hotels control\.

<a id="changes-to-information"></a>## 14\. Changes to Information

Liv\.inn may update website content, hotel facilities, service information, timings and other information from time to time\.

The information applicable to a confirmed booking or service request will be based on the terms communicated by Liv\.inn at the relevant time\.

<a id="limitation-of-liability"></a>## 15\. Limitation of Liability

Liv\.inn will take reasonable care in providing its services and maintaining the website\.

Nothing in these Terms & Conditions is intended to exclude or limit any rights or remedies that cannot lawfully be excluded or limited under applicable law\.

<a id="governing-law"></a>## 16\. Governing Law

These Terms & Conditions shall be governed by the applicable laws of India\.

Any dispute shall be subject to the jurisdiction of the courts or competent authorities applicable to the location of the hotel, subject to applicable law\.

<a id="changes-to-these-terms"></a>## 17\. Changes to These Terms

Liv\.inn may update these Terms & Conditions when necessary\.

The latest version will be published on this page with the applicable effective date\.

<a id="contact-us"></a>## 18\. Contact Us

__Liv\.inn__  
Plot No\-31, Lane No\-4, Infinity Greens Society,  
Near VTP Altair Phase\-1, Gat No\-1251, Upper Kharadi,  
Wagholi, Pune, Maharashtra - 412207, India

__Phone:__ 8007724646  
__WhatsApp:__ 8007724646  
__Email:__ [help\.livinn@gmail\.com](mailto:help.livinn@gmail.com)

__Last Updated:__ 20 September 2026`,
  guestPolicies: `

__Effective Date:__ 20 September 2026

These Guest & Hotel Policies provide important information and rules for guests staying at __Liv\.inn__\.

<a id="check-in-and-check-out"></a>## 1\. Check\-in and Check\-out

__Check\-in:__ 11:00 AM  
__Check\-out:__ 10:00 AM

Guests are required to provide valid identification during the check\-in process\.

Liv\.inn provides __24\-hour reception assistance__\.

Requests for early check\-in or late check\-out are subject to availability and applicable hotel conditions\.

<a id="identification-policy"></a>## 2\. Identification Policy

A valid ID is required for guests staying at Liv\.inn\.

__Local IDs are accepted\.__

Guests are responsible for providing valid and accurate identification information during check\-in\.

<a id="guest-policy"></a>## 3\. Guest Policy

Liv\.inn is a __couple\-friendly property__\.

__Unmarried couples are allowed\.__

Guests must provide valid identification as required by the hotel\.

Guests are expected to respect the property, other guests and hotel staff throughout their stay\.

<a id="room-occupancy"></a>## 4\. Room Occupancy

Guests must use rooms only according to the occupancy and arrangements confirmed by the hotel\.

Extra beds are available\.

__Extra\-bed charges:__ No additional charge according to the current hotel information\.

Any additional occupancy arrangement remains subject to hotel availability and applicable hotel rules\.

<a id="smoking-policy"></a>## 5\. Smoking Policy

Smoking is __not permitted__ at the hotel\.

Liv\.inn does not provide smoking rooms\.

No designated smoking area is currently provided\.

Guests are expected to comply with applicable smoking restrictions and hotel safety requirements\.

<a id="pet-policy"></a>## 6\. Pet Policy

__Pets are allowed\.__

No additional pet charge is currently specified in the hotel information\.

Guests are responsible for ensuring that pets do not cause damage, disturbance or safety concerns to other guests or hotel property\.

<a id="hotel-property-and-damage"></a>## 7\. Hotel Property and Damage

Guests are expected to take reasonable care of hotel property, furniture, equipment, fixtures and other items provided during their stay\.

Guests may be responsible for damage or loss caused by intentional, negligent or improper use, subject to applicable law\.

<a id="noise-and-guest-conduct"></a>## 8\. Noise and Guest Conduct

Guests must behave respectfully and avoid conduct that may disturb other guests, hotel employees or nearby residents\.

Activities that create unreasonable noise, disturbance, harassment, threats or unsafe conditions are not permitted\.

<a id="safety-and-security"></a>## 9\. Safety and Security

Liv\.inn provides security measures including CCTV and hotel security\.

Guests should:

- Follow hotel safety instructions\.
- Keep personal belongings secure\.
- Inform reception of safety or security concerns\.
- Contact reception in case of an emergency or urgent assistance\.

Liv\.inn cannot be responsible for circumstances beyond its reasonable control, subject to applicable law\.

<a id="housekeeping"></a>## 10\. Housekeeping

Housekeeping services are available at Liv\.inn\.

Guests may request housekeeping assistance through the hotel or the Digital Concierge where available\.

Requests are subject to staff availability and hotel operating conditions\.

<a id="room-service"></a>## 11\. Room Service

Room service is available\.

Guests may request available services through the hotel or the Digital Concierge\.

Service availability, timing and applicable charges may vary\.

<a id="food-service"></a>## 12\. Food Service

Liv\.inn provides food service through its cloud\-kitchen operation\.

The current services include:

- Breakfast
- Lunch
- Dinner
- Room service
- Vegetarian food
- Non\-vegetarian food

The property currently does not provide a dine\-in restaurant\.

Food availability and service timings may vary\.

<a id="laundry-and-dry-cleaning"></a>## 13\. Laundry and Dry Cleaning

Laundry service is available\.

Dry\-cleaning service is also available\.

Guests should contact the hotel for applicable service details, pricing and arrangements\.

<a id="parking"></a>## 14\. Parking

Parking is available\.

The currently documented parking arrangement is:

__Charges:__ Free  
__Availability:__ Subject to available capacity\.

Guests should follow the hotels parking and safety instructions\.

<a id="wi-fi"></a>## 15\. Wi\-Fi

Wi\-Fi is available for guests\.

Access details may be provided by the hotel during the stay\.

Guests must not use the hotels internet connection for unlawful activities\.

<a id="power-backup"></a>## 16\. Power Backup

Power backup is available at the property\.

The availability and coverage of backup power may depend on the nature and duration of a power interruption\.

<a id="hot-water"></a>## 17\. Hot Water

Hot water is available for guests\.

<a id="lift-elevator"></a>## 18\. Lift / Elevator

A lift/elevator is available at the property\.

Guests should follow posted safety instructions and capacity limits\.

<a id="digital-concierge"></a>## 19\. Digital Concierge

Liv\.inn provides a room\-based Digital Concierge system where available\.

Guests can use the room QR code to access available services and information\.

Services may include:

- Housekeeping
- Food/room service
- Extra towels
- Water
- Other guest services
- Maintenance assistance
- Contacting reception

Service requests are subject to availability and hotel operating conditions\.

<a id="guest-service-requests"></a>## 20\. Guest Service Requests

Guests should provide accurate information when submitting a service request\.

A request submitted through the Digital Concierge should not be considered completed until the hotel confirms or fulfils the request\.

Guests may contact reception if an urgent request requires immediate assistance\.

<a id="lost-and-found"></a>## 21\. Lost and Found

Guests who lose an item at the hotel should contact reception as soon as possible\.

Any found property should be handed to hotel staff\.

Lost\-and\-found items will be handled according to the hotels applicable procedures and legal requirements\.

<a id="prohibited-conduct"></a>## 22\. Prohibited Conduct

Guests must not:

- Engage in unlawful activities\.
- Damage hotel property\.
- Create unreasonable disturbance\.
- Misuse hotel facilities\.
- Attempt unauthorized access to hotel systems or services\.
- Use the Digital Concierge or hotel services for fraudulent or abusive purposes\.
- Engage in conduct that threatens the safety of guests or staff\.

<a id="compliance-with-hotel-policies"></a>## 23\. Compliance With Hotel Policies

By staying at Liv\.inn, guests are expected to comply with these policies and reasonable instructions provided by hotel staff\.

Where a guest violates hotel policies, Liv\.inn may take appropriate action in accordance with applicable law\.

<a id="policy-updates"></a>## 24\. Policy Updates

Liv\.inn may update these Guest & Hotel Policies from time to time\.

The latest version will be made available on the website\.

<a id="contact-reception"></a>## 25\. Contact Reception

For assistance during your stay:

__Phone / WhatsApp:__ 8007724646  
__Email:__ [help\.livinn@gmail\.com](mailto:help.livinn@gmail.com)

__Reception:__ 24 hours

__Liv\.inn__  
Plot No\-31, Lane No\-4, Infinity Greens Society,  
Near VTP Altair Phase\-1, Gat No\-1251, Upper Kharadi,  
Wagholi, Pune, Maharashtra - 412207, India

__Last Updated:__ 20 September 2026`
} as const;
