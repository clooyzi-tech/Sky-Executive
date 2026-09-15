import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import ExperienceSection from '@/components/home/ExperienceSection';
import RoomsPreview from '@/components/home/RoomsPreview';
import NatureViewSection from '@/components/home/NatureViewSection';
import WhyChoose from '@/components/home/WhyChoose';
import LocationPreview from '@/components/home/LocationPreview';
import BookingCTA from '@/components/home/BookingCTA';
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
      <Hero />
      <Introduction />
      <ExperienceSection />
      <RoomsPreview />
      <NatureViewSection />
      <WhyChoose />
      <LocationPreview />
      <BookingCTA />
    </>
  );
}
