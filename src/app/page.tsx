import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import RoomsPreview from '@/components/home/RoomsPreview';
import WhyChoose from '@/components/home/WhyChoose';
import GalleryPreview from '@/components/home/GalleryPreview';
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
      <RoomsPreview />
      <WhyChoose />
      <GalleryPreview />
      <LocationPreview />
      <BookingCTA />
    </>
  );
}
