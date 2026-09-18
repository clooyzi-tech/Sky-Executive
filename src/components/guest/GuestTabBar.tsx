'use client';

import React from 'react';
import { Home, Compass, Bell, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export type GuestTab = 'home' | 'explore' | 'services' | 'more';

interface GuestTabBarProps {
  activeTab: GuestTab;
  onTabChange: (tab: GuestTab) => void;
}

const tabs: { id: GuestTab; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'services', label: 'Services', icon: Bell },
  { id: 'more', label: 'More', icon: MoreHorizontal },
];

export default function GuestTabBar({ activeTab, onTabChange }: GuestTabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-light bg-white/95 backdrop-blur-xl safe-area-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-1 flex-col items-center gap-0.5 py-2 transition-colors"
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="guest-tab-indicator"
                  className="absolute -top-1 h-0.5 w-8 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? 'text-accent' : 'text-slate-medium'
                }`}
              />
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-accent' : 'text-slate-medium'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
