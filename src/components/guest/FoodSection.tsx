'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, UtensilsCrossed, Moon, Leaf, Drumstick, MessageCircle } from 'lucide-react';
import foodMenuData from '@/data/food-menu.json';
import { useRoom } from './RoomContext';

const mealIcons: Record<string, React.ElementType> = {
  Coffee, UtensilsCrossed, Moon,
};

export default function FoodSection() {
  const [activeCategory, setActiveCategory] = useState(foodMenuData.categories[0]?.id || '');
  const { generateWhatsAppUrl } = useRoom();

  const activeItems = foodMenuData.categories.find((c) => c.id === activeCategory)?.items || [];

  const handleOrderWhatsApp = () => {
    const url = generateWhatsAppUrl('Food Order', undefined, 'I would like to order food from the cloud kitchen');
    window.open(url, '_blank');
  };

  const handleOrderItem = (itemName: string, itemPrice: string) => {
    const url = generateWhatsAppUrl(
      'Cloud Kitchen Food Order',
      1,
      `1x ${itemName} (${itemPrice})`
    );
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-serif font-semibold text-foreground">{foodMenuData.title}</h2>
        <p className="mt-1 text-xs text-slate-medium">{foodMenuData.subtitle}</p>
      </div>

      {/* Meal Timings */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {foodMenuData.mealTimings.map((meal) => {
          const Icon = mealIcons[meal.icon] || Coffee;
          return (
            <div
              key={meal.meal}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-border-light bg-white px-3 py-2"
            >
              <Icon className="h-4 w-4 text-accent" />
              <div>
                <p className="text-[10px] font-semibold text-foreground">{meal.meal}</p>
                <p className="text-[10px] text-slate-medium">{meal.timing}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {foodMenuData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-charcoal text-white'
                : 'border border-border-light bg-white text-slate-medium'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {activeItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04 }}
            className="flex items-center justify-between rounded-xl border border-border-light bg-white p-3 gap-2"
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                item.type === 'veg'
                  ? 'border-green-600'
                  : 'border-red-600'
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full ${
                  item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'
                }`} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{item.name}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-medium line-clamp-1">{item.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-foreground">{item.price}</span>
              <button
                type="button"
                onClick={() => handleOrderItem(item.name, item.price)}
                className="rounded-lg bg-accent/20 hover:bg-accent text-charcoal px-2.5 py-1 text-[11px] font-semibold transition-all active:scale-95"
              >
                Order
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order CTA */}
      <button
        onClick={handleOrderWhatsApp}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" />
        Order Full Meal via WhatsApp
      </button>

      {/* External links (if enabled) */}
      {foodMenuData.ordering.showExternalLinks && (
        <div className="flex gap-2">
          {foodMenuData.ordering.swiggyUrl && (
            <a
              href={foodMenuData.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-border-light bg-white py-2.5 text-center text-xs font-medium text-foreground transition-all active:scale-[0.98]"
            >
              Order on Swiggy
            </a>
          )}
          {foodMenuData.ordering.zomatoUrl && (
            <a
              href={foodMenuData.ordering.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-border-light bg-white py-2.5 text-center text-xs font-medium text-foreground transition-all active:scale-[0.98]"
            >
              Order on Zomato
            </a>
          )}
        </div>
      )}
    </div>
  );
}
