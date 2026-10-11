import Hero from '@/components/home/Hero';
import TimelineServices from '@/components/home/TimelineServices';
import MomentsGallery from '@/components/home/MomentsGallery';
import AmenitiesCarousel from '@/components/home/AmenitiesCarousel';
import RoomsPreview from '@/components/home/RoomsPreview';
import WhyChoose from '@/components/home/WhyChoose';
import LocationPreview from '@/components/home/LocationPreview';
import { hotelJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelJsonLd()),
        }}
      />
      {/* 1. Hero Section with 5 Slides & Floating Booking Bar */}
      <Hero />

      {/* 2. Timeline Section: High Quality Services, 20+ Amenities, High Class Security */}
      <TimelineServices />

      {/* 3. Moments from Hotel Sky Executive: Dark Luxury Mosaic Gallery */}
      <MomentsGallery />

      {/* 4. Amenities Carousel: "Everything You Need" */}
      <AmenitiesCarousel />

      {/* 5. Signature Double Bed Room: "A Stay Designed for Your Comfort" */}
      <RoomsPreview />

      {/* 6. Guest Testimonials: "What Our Guests Say" */}
      <WhyChoose />

      {/* 7. Location & Directions Card */}
      <LocationPreview />
    </>
  );
}
