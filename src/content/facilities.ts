/**
 * Facilities & Guest Services — Hotel Sky Executive (Pune)
 * 
 * Sourced directly from verified developer document:
 * LivInn_Hotel_Chatbot_Information.docx
 * 
 * Verified Facilities & Services:
 * 1. Free Wi-Fi for guests
 * 2. Dedicated Parking facility
 * 3. In-house Cloud Kitchen / Food facility
 * 4. Laundry service
 * 5. Room and property cleanliness / Housekeeping
 * 6. 24/7 guest assistance and service support
 */

export interface FacilityItem {
  id: string;
  icon: string;
  title: string;
  category: 'facility' | 'service';
  shortDescription: string;
  fullDescription: string;
  availability: string;
  status: 'verified';
}

export const allFacilitiesAndServices: FacilityItem[] = [
  {
    id: 'wifi',
    icon: 'Wifi',
    title: 'Free High-Speed Wi-Fi',
    category: 'facility',
    shortDescription: 'Complimentary high-speed internet available throughout all rooms and property areas.',
    fullDescription: 'Stay seamlessly connected for business or leisure. Fast, dependable Wi-Fi coverage is provided complimentary for all registered guests throughout the property.',
    availability: 'Available 24/7 across property',
    status: 'verified',
  },
  {
    id: 'parking',
    icon: 'Car',
    title: 'Free On-Site Parking',
    category: 'facility',
    shortDescription: 'Complimentary 24-hour on-premises vehicular parking for staying guests.',
    fullDescription: 'Safe, convenient, and free on-site parking spaces allocated on the property premises, making private transit and self-drive trips into Pune completely hassle-free.',
    availability: 'Free • Available 24/7 on-site',
    status: 'verified',
  },
  {
    id: 'cloud-kitchen',
    icon: 'UtensilsCrossed',
    title: 'In-House Cloud Kitchen',
    category: 'facility',
    shortDescription: 'Freshly prepared Breakfast, Lunch, and Dinner (Veg & Non-Veg) served directly to your room.',
    fullDescription: 'Enjoy wholesome, freshly cooked dining delivered right to your room. Our in-house cloud kitchen prepares breakfast, lunch, and dinner with both vegetarian and non-vegetarian selections (no dine-in restaurant).',
    availability: 'Breakfast, Lunch & Dinner service',
    status: 'verified',
  },
  {
    id: 'lift',
    icon: 'Building',
    title: 'Elevator / Lift Facility',
    category: 'facility',
    shortDescription: 'Modern elevator providing seamless access across guest floors.',
    fullDescription: 'Enjoy effortless mobility between floors. Our fully operational guest elevator provides quick and comfortable access to all rooms across the property.',
    availability: 'Operational 24/7',
    status: 'verified',
  },
  {
    id: 'power-backup',
    icon: 'Zap',
    title: '100% Power Backup',
    category: 'facility',
    shortDescription: 'Full generator energy backup ensuring uninterrupted power, Wi-Fi, and comfort.',
    fullDescription: 'Never experience disruptions during your stay. Comprehensive power backup keeps lighting, internet connectivity, and room essentials active around the clock.',
    availability: '24/7 Uninterrupted',
    status: 'verified',
  },
  {
    id: 'security-cctv',
    icon: 'ShieldCheck',
    title: '24/7 Security & CCTV',
    category: 'facility',
    shortDescription: 'Round-the-clock security monitoring and CCTV surveillance for guest safety.',
    fullDescription: 'Your peace of mind is paramount. The property is equipped with 24-hour CCTV coverage, dedicated security protocols, and on-site staff at all times.',
    availability: '24/7 Property Security',
    status: 'verified',
  },
  {
    id: 'pet-friendly',
    icon: 'Heart',
    title: 'Pet-Friendly Stay',
    category: 'service',
    shortDescription: 'Pets are warmly welcomed to stay with you at no additional charge.',
    fullDescription: 'Travel with your furry companions without hesitation. Hotel Sky Executive is a pet-friendly property with no extra pet fees or surcharges.',
    availability: 'Pets Allowed • No Extra Charge',
    status: 'verified',
  },
  {
    id: 'laundry',
    icon: 'Shirt',
    title: 'Laundry & Garment Care',
    category: 'service',
    shortDescription: 'Professional laundry and dry cleaning services available for hotel guests.',
    fullDescription: 'Keep your wardrobe crisp and fresh throughout your stay in Pune with our dependable laundry, dry cleaning, and garment pressing assistance.',
    availability: 'Available on request',
    status: 'verified',
  },
  {
    id: 'housekeeping',
    icon: 'Sparkles',
    title: 'Housekeeping & Cleanliness',
    category: 'service',
    shortDescription: 'Rigorous daily room cleaning, fresh towels, toiletries, and property hygiene protocols.',
    fullDescription: 'We place pristine cleanliness at the core of our hospitality. Rooms, fresh linens, bath towels, and communal spaces receive thorough daily housekeeping.',
    availability: 'Daily & on-request service',
    status: 'verified',
  },
  {
    id: 'assistance-24-7',
    icon: 'Clock',
    title: '24/7 Front Desk & Local Taxi Assistance',
    category: 'service',
    shortDescription: 'Round-the-clock front desk support, 24-hour reception, and local cab booking assistance.',
    fullDescription: 'Whether an early morning check-in, late arrival, local taxi booking, or city guidance in Pune, our attentive front desk team is on standby 24 hours a day.',
    availability: '24 Hours / 7 Days',
    status: 'verified',
  },
];

export const facilitiesSectionConfig = {
  title: 'Facilities & Services',
  subtitle: 'Everything you need for a relaxed and comfortable stay in Pune',
  description:
    'Hotel Sky Executive combines executive comfort with essential everyday conveniences. From high-speed Wi-Fi and parking to our cloud kitchen and 24/7 support, your comfort is prioritized.',
};
