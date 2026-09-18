'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera, Building, UtensilsCrossed, ShoppingBag, HeartPulse, MapPin,
  Navigation, ChevronRight,
} from 'lucide-react';
import explorePlacesData from '@/data/explore-places.json';

const categoryIcons: Record<string, React.ElementType> = {
  Camera, Building, UtensilsCrossed, ShoppingBag, HeartPulse, MapPin,
};

export default function ExploreSection() {
  const [activeCategory, setActiveCategory] = useState(
    explorePlacesData.categories[0]?.id || ''
  );

  const activeCat = explorePlacesData.categories.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-serif font-semibold text-foreground">
          {explorePlacesData.title}
        </h2>
        <p className="mt-1 text-xs text-slate-medium">{explorePlacesData.subtitle}</p>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {explorePlacesData.categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = categoryIcons[cat.icon] || MapPin;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'border border-border-light bg-white text-slate-medium'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Places List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-2"
        >
          {activeCat?.places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-border-light bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{place.name}</h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-medium">
                    {place.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span className="text-[11px] font-medium text-accent-dark">
                      {place.distance}
                    </span>
                  </div>
                </div>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-1 rounded-lg bg-charcoal px-3 py-2 text-[11px] font-medium text-white transition-all active:scale-95"
                >
                  <Navigation className="h-3 w-3" />
                  Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
