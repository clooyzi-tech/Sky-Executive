import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { brand } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GalleryClient from '@/components/gallery/GalleryClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery',
  description: `Explore photos of ${brand.name} — our rooms, interiors, amenities, and building exterior in Mumbai.`,
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: 'Gallery', href: '/gallery' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              A glimpse into the {brand.name} experience
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
