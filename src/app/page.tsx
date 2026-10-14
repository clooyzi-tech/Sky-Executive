import Hero from '@/components/home/Hero';
import TimelineServices from '@/components/home/TimelineServices';
import MomentsGallery from '@/components/home/MomentsGallery';
import AmenitiesCarousel from '@/components/home/AmenitiesCarousel';
import RoomsPreview from '@/components/home/RoomsPreview';
import WhyChoose from '@/components/home/WhyChoose';
import LocationPreview from '@/components/home/LocationPreview';
import AnswerBlock from '@/components/ui/AnswerBlock';
import FAQSection from '@/components/ui/FAQSection';
import { AEO_CONTENT } from '@/content/aeo';
import { homepageJsonLd } from '@/lib/seo';

export default function Home() {
  const { home } = AEO_CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd(home.faqs)),
        }}
      />
      {/* 1. Hero Section with 5 Slides & Floating Booking Bar */}
      <Hero />

      {/* 2. Direct Answer Block (AEO Answer First) */}
      <AnswerBlock data={home.answerBlock} />

      {/* 3. Timeline Section: High Quality Services, 20+ Amenities, High Class Security */}
      <TimelineServices />

      {/* 4. Moments from Hotel Sky Executive: Dark Luxury Mosaic Gallery */}
      <MomentsGallery />

      {/* 5. Amenities Carousel: "Everything You Need" */}
      <AmenitiesCarousel />

      {/* 6. Signature Double Bed Room: "A Stay Designed for Your Comfort" */}
      <RoomsPreview />

      {/* 7. Guest Testimonials: "What Our Guests Say" */}
      <WhyChoose />

      {/* 8. Visible FAQ Section (Pre-booking, Amenities, Location) */}
      <FAQSection
        faqs={home.faqs}
        title="Frequently Asked Questions"
        subtitle="Verified answers about Hotel Sky Executive facilities, location, and guest policies."
      />

      {/* 9. Location & Directions Card */}
      <LocationPreview />
    </>
  );
}
