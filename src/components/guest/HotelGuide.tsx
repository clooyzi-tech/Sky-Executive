'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, UtensilsCrossed, Car, Building, Heart, Moon, CreditCard, BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import guestPortalData from '@/data/guest-portal.json';

const guideIcons: Record<string, React.ElementType> = {
  Clock, UtensilsCrossed, Car, Building, Heart, Moon, CreditCard, BadgeCheck,
};

export default function HotelGuide() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { hotelGuide } = guestPortalData;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-serif font-semibold text-foreground">{hotelGuide.title}</h2>

      <div className="space-y-2">
        {hotelGuide.sections.map((section) => {
          const Icon = guideIcons[section.icon] || Clock;
          const isOpen = expandedId === section.title;

          return (
            <div
              key={section.title}
              className="rounded-xl border border-border-light bg-white shadow-sm"
            >
              <button
                onClick={() => setExpandedId(isOpen ? null : section.title)}
                className="flex w-full items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{section.title}</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 text-slate-medium transition-transform ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border-light px-4 pb-4 pt-3">
                      <p className="text-xs leading-relaxed text-slate-medium">{section.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
