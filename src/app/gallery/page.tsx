import type { Metadata } from 'next';
import { generatePageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GalleryClient from '@/components/gallery/GalleryClient';
import BookingCTA from '@/components/home/BookingCTA';
import CrownMark from '@/components/ui/CrownMark';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

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
      <section className="on-navy bg-[var(--navy-deep)] py-20 md:py-28 text-white select-none border-b border-[var(--gold)]/30">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold-bright)]/40 bg-[var(--navy-surface)] px-4 py-1.5 shadow-xs">
              <CrownMark size="nav" variant="gold-bright" />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[var(--gold-bright)]">
                Visual Preview • Lonikand, Pune
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase !text-white tracking-tight drop-shadow-sm">
              <span className="text-white">PHOTO & PROPERTY </span>
              <span className="gold-foil-text drop-shadow-[0_2px_10px_rgba(212,162,76,0.4)]">GALLERY</span>
            </h1>
            <GoldRuleDot width="sm" variant="gold-bright" className="my-4" />
            <p className="font-body mx-auto max-w-2xl text-base sm:text-lg text-[var(--on-navy)] font-medium leading-relaxed">
              {gallery.header.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
