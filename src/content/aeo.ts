/**
 * AEO (Answer Engine Optimization) & Verified FAQ Content
 * Hotel Sky Executive (Lonikand, Pune)
 * 
 * Strictly verified first-party facts only.
 * Single source of truth for Answer Blocks, Visible FAQs, and Structured Data.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AnswerBlockHighlight {
  label: string;
  value: string;
}

export interface AnswerBlockData {
  badge: string;
  title: string;
  directAnswer: string;
  highlights: AnswerBlockHighlight[];
  ctaText?: string;
  ctaHref?: string;
}

export interface PageAEOData {
  answerBlock: AnswerBlockData;
  faqs: FAQItem[];
}

export const AEO_CONTENT: Record<'home' | 'rooms' | 'location' | 'contact' | 'guestInfo', PageAEOData> = {
  home: {
    answerBlock: {
      badge: 'Direct Answer • Executive Boutique Hotel',
      title: 'At a Glance: Hotel Sky Executive in Lonikand, Pune',
      directAnswer:
        'Hotel Sky Executive is an executive boutique hotel situated at Jaywant Towers on Pune–Nagar Road, Lonikand. We provide modern air-conditioned Executive Double Bed Rooms (200 sq. ft), an in-house cloud kitchen delivering fresh meals directly to guest rooms, free 24/7 on-site parking, an elevator, and 100% generator power backup. Our 24-hour reception desk welcomes corporate travelers, highway transit guests, couples, and pet owners.',
      highlights: [
        {
          label: 'Location & Transit',
          value:
            'Jaywant Towers, Lonikand — ~15 km from Pune Airport, 2 km from Wagholi, with direct highway access to Sanaswadi MIDC.',
        },
        {
          label: 'In-Room Comforts',
          value:
            'Plush Queen bed, en-suite bathroom with 24/7 hot water, high-speed Wi-Fi, smart TV, and dedicated work desk.',
        },
        {
          label: 'Dining & Payments',
          value:
            'In-house cloud kitchen with room delivery (Veg & Non-Veg). UPI, Credit/Debit Cards, Net Banking & Cash accepted.',
        },
        {
          label: 'Guest Inquiries',
          value:
            'Live room availability and tariffs confirmed instantly via front desk phone (+91 80077 24646) or WhatsApp.',
        },
      ],
      ctaText: 'Explore Executive Rooms',
      ctaHref: '/rooms',
    },
    faqs: [
      {
        question: 'What amenities are provided at Hotel Sky Executive Pune?',
        answer:
          'Our verified property amenities include free high-speed Wi-Fi across all floors, 24/7 on-site secure parking, an elevator serving all rooms, 100% full generator power backup, 24-hour front desk reception, CCTV security, in-room cloud kitchen dining, and complimentary pet-friendly accommodation.',
      },
      {
        question: 'Where is Hotel Sky Executive located and how do I reach it?',
        answer:
          'Hotel Sky Executive is located at Jaywant Towers, Pune–Nagar Road, near Jaywant Warehouse, Lonikand, Pune (Pin: 412216). We are approximately 15 km (25 minutes) from Pune International Airport and 2 km past Wagholi along State Highway 27.',
      },
      {
        question: 'Does the hotel have an in-house restaurant?',
        answer:
          'We operate a dedicated in-house cloud kitchen that prepares freshly cooked Vegetarian and Non-Vegetarian meals (Breakfast, Lunch, and Dinner) delivered directly to your room. There is no public walk-in dining hall.',
      },
      {
        question: 'Are couples and families welcome at Hotel Sky Executive?',
        answer:
          'Yes. Hotel Sky Executive is couple-friendly and family-friendly. All adult guests must present a valid government-issued photo ID (Aadhaar, Passport, Driving License, or Voter ID) at check-in. Local Pune IDs are accepted.',
      },
    ],
  },

  rooms: {
    answerBlock: {
      badge: 'Direct Answer • Executive Accommodation',
      title: 'Executive Double Bed Room Specifications & Amenities',
      directAnswer:
        'Our Executive Double Bed Room provides 200 sq. ft of private, air-conditioned living space equipped with a plush Queen-size bed, attached en-suite bathroom with 24/7 hot water, high-speed Wi-Fi, and a dedicated executive work desk. Stays accommodate up to 3 guests (2 adults + 1 extra guest with a complimentary extra bed provided on request). Fresh meals from our in-house cloud kitchen are delivered directly to your room.',
      highlights: [
        {
          label: 'Room Size & Bed',
          value:
            '200 sq. ft living area with Queen double bed, premium fresh linen, and a tranquil nature view.',
        },
        {
          label: 'En-Suite Bathroom',
          value:
            'Attached private bathroom equipped with 24/7 hot water supply and complimentary bath toiletries.',
        },
        {
          label: 'Occupancy & Extra Bed',
          value:
            'Accommodates 2 Adults + 1 Extra Guest. Complimentary extra bed provided on request at no extra charge.',
        },
        {
          label: 'Tariff & Availability',
          value:
            'Tariffs confirmed directly upon enquiry (starting guidance from ₹1,499/night). Instant booking via 24/7 reception.',
        },
      ],
      ctaText: 'Enquire for Room Booking',
      ctaHref: '/contact',
    },
    faqs: [
      {
        question: 'What is the size and bed setup of the Executive Double Bed Room?',
        answer:
          'The Executive Double Bed Room measures 200 sq. ft and features a comfortable Queen-size double bed with fresh premium linen, individual air conditioning, and a tranquil nature view.',
      },
      {
        question: 'Can an extra guest or child stay in the room?',
        answer:
          'Yes. Rooms comfortably accommodate up to 3 guests (2 adults + 1 extra guest). A complimentary extra bed is available upon request at no additional room surcharge (advance notice recommended).',
      },
      {
        question: 'What are the check-in and check-out timings for rooms?',
        answer:
          'Standard check-in begins at 11:00 AM and check-out is at 10:00 AM. Our reception desk is open 24/7 to accommodate late-night arrivals.',
      },
      {
        question: 'Is room service available for breakfast, lunch, and dinner?',
        answer:
          'Yes. Fresh meals from our in-house cloud kitchen are served directly to your room. Breakfast is served from 7:30 AM to 10:30 AM, lunch from 12:00 PM to 3:00 PM, and dinner from 7:00 PM to 10:30 PM (both Veg and Non-Veg).',
      },
    ],
  },

  location: {
    answerBlock: {
      badge: 'Direct Answer • Pune–Nagar Road Connectivity',
      title: 'Official Address & Highway Transit Distances',
      directAnswer:
        'Hotel Sky Executive is located directly on State Highway 27 (Pune–Nagar Road) at Jaywant Towers, adjacent to Jaywant Warehouse in Lonikand, Pune (Pin: 412216). We are situated 15 km (~25 minutes) from Pune International Airport, 20 km from Pune Junction Railway Station, 2 km from Wagholi, and within easy commuting distance of Sanaswadi MIDC and Kharadi IT Park.',
      highlights: [
        {
          label: 'Driving Landmark',
          value:
            'Jaywant Towers on main Pune–Nagar Road with wide roadside entry into free 24/7 secure on-site parking.',
        },
        {
          label: 'Airport & Station',
          value:
            '~15 km (25 mins) from Pune International Airport; ~20 km (35 mins) from Pune Junction Railway Station.',
        },
        {
          label: 'Industrial & IT Hubs',
          value:
            '2 km from Wagholi, ~4–5 km from Kharadi EON Free Zone, and direct corridor access to Sanaswadi MIDC.',
        },
        {
          label: 'Transit Support',
          value:
            '24/7 reception desk assists with local cab, taxi, and auto-rickshaw arrangements.',
        },
      ],
      ctaText: 'Contact Front Desk for Directions',
      ctaHref: '/contact',
    },
    faqs: [
      {
        question: 'How far is Hotel Sky Executive from Pune International Airport?',
        answer:
          'Hotel Sky Executive is approximately 15 km from Pune International Airport (Lohegaon), taking about 20 to 25 minutes via the Pune–Nagar Road corridor depending on traffic.',
      },
      {
        question: 'What is the nearest landmark to locate the hotel on Pune–Nagar Road?',
        answer:
          'The hotel is situated in Jaywant Towers, directly next to Jaywant Warehouse on the main Pune–Nagar Road in Lonikand.',
      },
      {
        question: 'Is secure on-site parking available for private cars and two-wheelers?',
        answer:
          'Yes. We provide free, 24-hour on-premises secure parking with CCTV surveillance for all staying guests.',
      },
      {
        question: 'How far is Hotel Sky Executive from the Sanaswadi Industrial Area and Kharadi IT Park?',
        answer:
          'The Sanaswadi MIDC industrial manufacturing belt is approximately 10 to 12 km further down the Pune–Nagar Highway, while the Kharadi IT Park and EON Free Zone are roughly 4 to 5 km towards Pune city.',
      },
    ],
  },

  contact: {
    answerBlock: {
      badge: 'Direct Answer • 24/7 Front Desk Hotline',
      title: 'Instant Reservations & Guest Support Details',
      directAnswer:
        'To contact Hotel Sky Executive for room reservations, corporate bookings, or immediate assistance, call our 24/7 front desk at +91 80077 24646 or message us on WhatsApp at +91 80077 24646. You can also email help.skyexecutive@gmail.com or submit our online stay enquiry form. Reception is staffed 24 hours a day at Jaywant Towers, Pune–Nagar Road, Lonikand.',
      highlights: [
        {
          label: 'Direct Phone Hotline',
          value:
            '+91 80077 24646 (Monitored 24 hours a day for instant room booking and guest care).',
        },
        {
          label: 'Instant WhatsApp',
          value:
            '+91 80077 24646 (Fast messaging channel for location, tariffs, and room availability).',
        },
        {
          label: 'Payment Modes',
          value:
            'UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash accepted.',
        },
        {
          label: 'Check-in ID Policy',
          value:
            'Valid government-issued photo ID required at check-in (Local Pune IDs accepted).',
        },
      ],
      ctaText: 'Call Front Desk Now',
      ctaHref: 'tel:+918007724646',
    },
    faqs: [
      {
        question: 'What is the direct phone number and WhatsApp number for Hotel Sky Executive?',
        answer:
          'You can reach our front desk 24 hours a day by phone at +91 80077 24646 and via WhatsApp at +91 80077 24646.',
      },
      {
        question: 'How quickly does the hotel respond to online stay enquiries?',
        answer:
          'Web enquiry forms are reviewed by our reservations team promptly. For instant same-day confirmation, we recommend calling or messaging on WhatsApp directly.',
      },
      {
        question: 'What payment methods are accepted at Hotel Sky Executive?',
        answer:
          'We accept UPI (Google Pay, PhonePe, Paytm), Visa/Mastercard Credit and Debit Cards, Net Banking, and Cash.',
      },
      {
        question: 'Can I check in late at night if my flight or drive is delayed?',
        answer:
          'Yes. Our reception desk is staffed 24/7. Please notify us of your estimated arrival time via phone or WhatsApp so our night team can keep your room ready.',
      },
    ],
  },

  guestInfo: {
    answerBlock: {
      badge: 'Direct Answer • Stay Guidelines & Policies',
      title: 'Guest Portal Summary & Operational Timings',
      directAnswer:
        'Hotel Sky Executive operates a 24-hour reception desk at Jaywant Towers, Lonikand. Standard check-in begins at 11:00 AM and check-out is by 10:00 AM. Staying guests enjoy complimentary high-speed Wi-Fi (credentials provided at front desk), free 24/7 on-site parking, an elevator, 100% generator power backup, and in-room meal service from our cloud kitchen. A valid government photo ID is required for all adult guests at check-in.',
      highlights: [
        {
          label: 'Front Desk Hotline',
          value:
            'Dial +91 80077 24646 anytime for housekeeping, extra linen, or room service.',
        },
        {
          label: 'Wi-Fi Network Access',
          value:
            'Complimentary high-speed Wi-Fi; secure credentials issued at reception during check-in.',
        },
        {
          label: 'Cloud Kitchen Hours',
          value:
            'Breakfast: 7:30–10:30 AM | Lunch: 12:00–3:00 PM | Dinner: 7:00–10:30 PM (Veg & Non-Veg).',
        },
        {
          label: 'House Policies',
          value:
            '100% smoke-free indoors | Pets stay free | Quiet hours observed after 10:00 PM.',
        },
      ],
      ctaText: 'Call Reception Desk',
      ctaHref: 'tel:+918007724646',
    },
    faqs: [
      {
        question: 'How do staying guests connect to the complimentary hotel Wi-Fi?',
        answer:
          'High-speed Wi-Fi is complimentary throughout the property. For network security, your unique Wi-Fi network credentials are provided directly at the front desk upon check-in.',
      },
      {
        question: 'What is the pet policy at Hotel Sky Executive?',
        answer:
          'Hotel Sky Executive is 100% pet-friendly. Pets stay completely free of charge with no additional deposit or cleaning fee.',
      },
      {
        question: 'What are the in-room cloud kitchen delivery hours?',
        answer:
          'Fresh meals are delivered to your room during three service windows: Breakfast from 7:30 AM to 10:30 AM, Lunch from 12:00 PM to 3:00 PM, and Dinner from 7:00 PM to 10:30 PM.',
      },
      {
        question: 'What is the hotel\'s smoking and quiet hours policy?',
        answer:
          'Hotel Sky Executive is a 100% smoke-free indoor facility. To ensure restful sleep for all guests, quiet hours are observed from 10:00 PM to 7:00 AM.',
      },
    ],
  },
};
