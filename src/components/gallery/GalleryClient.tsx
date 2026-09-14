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
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {gallery.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-accent text-white'
                : 'bg-cream text-slate-deep hover:bg-cream-dark'
            }`}
            id={`gallery-filter-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <AnimatedSection key={`${img.alt}-${i}`} delay={0.05 * (i % 6)}>
            <button
              onClick={() => openLightbox(i)}
              className="mb-4 block w-full overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              aria-label={`View ${img.alt}`}
            >
              <ImagePlaceholder
                src={img.src}
                alt={img.alt}
                aspectRatio={i % 3 === 0 ? 'portrait' : i % 3 === 1 ? 'square' : 'video'}
              />
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label={gallery.lightbox.close}
              id="lightbox-close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label={gallery.lightbox.prev}
              id="lightbox-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Nav next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label={gallery.lightbox.next}
              id="lightbox-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-[90vw]"
            >
              <ImagePlaceholder
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                aspectRatio="video"
                className="max-h-[80vh] w-auto rounded-xl"
              />
              <p className="mt-3 text-center text-sm text-white/70">
                {filtered[lightboxIndex].alt} —{' '}
                {gallery.lightbox.counter(lightboxIndex + 1, filtered.length)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
