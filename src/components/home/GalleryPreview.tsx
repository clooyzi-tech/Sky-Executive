'use client';

import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import CTAButton from '@/components/ui/CTAButton';

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="bg-cream/40 py-20 md:py-28" id="gallery-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="A Glimpse Inside"
            subtitle="Take a peek at our thoughtfully curated spaces"
          />
        </AnimatedSection>

        {/* 2×3 editorial grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewImages.map((img, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <div className="group overflow-hidden rounded-xl">
                <ImagePlaceholder
                  alt={img.alt}
                  aspectRatio={i === 0 || i === 5 ? 'square' : 'video'}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <CTAButton href="/gallery" variant="outline" id="gallery-view-all">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
