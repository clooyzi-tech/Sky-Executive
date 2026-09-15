/**
 * Facilities & Guest Services — liv.inn (Pune)
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
    fullDescription: 'Stay seamlessly connected for business or leisure. Fast, reliable Wi-Fi coverage is provided complimentary for all registered guests across all 5 floors.',
    availability: 'Available 24/7 across property',
    status: 'verified',
  },
  {
    id: 'parking',
    icon: 'Car',
    title: 'Parking Facility',
    category: 'facility',
    shortDescription: 'Convenient on-site vehicular parking provided for staying guests.',
    fullDescription: 'Safe and hassle-free parking spaces allocated on the property premises, making private transit and self-drive trips into Pune simple and stress-free.',
    availability: 'Available on-site for guests',
    status: 'verified',
  },
  {
    id: 'cloud-kitchen',
    icon: 'UtensilsCrossed',
    title: 'Cloud Kitchen & Food Facility',
    category: 'facility',
    shortDescription: 'Dedicated in-house cloud kitchen delivering freshly prepared meals directly to your room.',
    fullDescription: 'Enjoy wholesome dining without having to step outside. Our dedicated cloud kitchen prepares flavorful meals on order for guest dining convenience.',
    availability: 'Operating hours to be confirmed',
    status: 'verified',
  },
  {
    id: 'laundry',
    icon: 'Shirt',
    title: 'Laundry Service',
    category: 'service',
    shortDescription: 'Professional laundry and garment care services available for hotel guests.',
    fullDescription: 'Keep your attire crisp and fresh throughout your stay in Pune with our reliable laundry and clothes pressing assistance.',
    availability: 'Available on request',
    status: 'verified',
  },
  {
    id: 'housekeeping',
    icon: 'Sparkles',
    title: 'Housekeeping & Cleanliness',
    category: 'service',
    shortDescription: 'Rigorous daily room cleaning and property hygiene protocols.',
    fullDescription: 'We place pristine cleanliness at the core of our hospitality. Rooms, linens, and communal spaces receive thorough daily housekeeping and maintenance.',
    availability: 'Daily service',
    status: 'verified',
  },
  {
    id: 'assistance-24-7',
    icon: 'Clock',
    title: '24/7 Guest Assistance',
    category: 'service',
    shortDescription: 'Round-the-clock service support and dedicated staff on call for any need.',
    fullDescription: 'Whether an early morning request, a late arrival, or local guidance in Pune, our attentive guest assistance team is on standby 24 hours a day.',
    availability: '24 Hours / 7 Days',
    status: 'verified',
  },
];

export const facilitiesSectionConfig = {
  title: 'Facilities & Services',
  subtitle: 'Everything you need for a relaxed and comfortable stay in Pune',
  description:
    'liv.inn combines boutique tranquility with essential everyday conveniences. From high-speed Wi-Fi and parking to our cloud kitchen and 24/7 support, your comfort is prioritized.',
};
