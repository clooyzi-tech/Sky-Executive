'use client';

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from '@/config/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export default function GalleryClient() {
  const { gallery } = STRINGS;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? IMAGES.gallery
      : IMAGES.gallery.filter(
          (img) => img.category === activeCategory.toLowerCase()
        );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      {/* Filters: Pill, 40px high */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {gallery.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-[40px] rounded-full px-5 text-xs font-bold uppercase tracking-wider font-display transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[var(--navy-deep)] text-[var(--gold-bright)] border border-[var(--gold-bright)] shadow-sm'
                : 'bg-white text-[var(--navy-ink)] border border-[var(--line-gold)] hover:bg-[var(--cream-deep)]'
            }`}
            id={`gallery-filter-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid: 4px gaps, sharp corners */}
      <div className="mt-10 columns-1 gap-1 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <AnimatedSection key={`${img.alt}-${i}`} delay={0.05 * (i % 6)}>
            <button
              onClick={() => openLightbox(i)}
              className="mb-1 block w-full overflow-hidden rounded-none transition-transform duration-300 hover:scale-[1.02] cursor-pointer border border-[var(--line-gold)]/40"
              aria-label={`View ${img.alt}`}
            >
              <ImagePlaceholder
                src={img.src}
                alt={img.alt}
                aspectRatio={i % 3 === 0 ? 'portrait' : i % 3 === 1 ? 'square' : 'video'}
                className="rounded-none object-cover"
              />
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox: Navy 92% overlay, gold close icon, arrows */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--navy-deep)]/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[var(--gold)] text-[var(--navy-deep)] transition-colors hover:bg-[var(--gold-bright)] cursor-pointer shadow-lg"
              aria-label={gallery.lightbox.close}
              id="lightbox-close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-5 z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/10 border border-[var(--gold-bright)]/50 text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] cursor-pointer"
              aria-label={gallery.lightbox.prev}
              id="lightbox-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Nav next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-5 z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/10 border border-[var(--gold-bright)]/50 text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] cursor-pointer"
              aria-label={gallery.lightbox.next}
              id="lightbox-next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-[90vw] border-2 border-[var(--gold)] rounded-none overflow-hidden shadow-2xl"
            >
              <ImagePlaceholder
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                aspectRatio="video"
                className="max-h-[80vh] w-auto rounded-none"
              />
              <div className="bg-[var(--navy-deep)] py-3 px-4 text-center border-t border-[var(--line-gold-navy)]">
                <p className="text-sm text-[var(--on-navy)] font-medium">
                  {filtered[lightboxIndex].alt} —{' '}
                  <span className="text-[var(--gold-bright)]">
                    {gallery.lightbox.counter(lightboxIndex + 1, filtered.length)}
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
