import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GalleryClient from '@/components/gallery/GalleryClient';

export const metadata: Metadata = generatePageMetadata({
  title: STRINGS.seo.pages.gallery.title,
  description: STRINGS.seo.pages.gallery.description,
  path: '/gallery',
});

export default function GalleryPage() {
  const { gallery } = STRINGS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: gallery.header.title, href: '/gallery' }])
          ),
        }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-accent-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
              {gallery.header.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              {gallery.header.subtitle}
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
