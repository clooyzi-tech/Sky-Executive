'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Bell, UtensilsCrossed, BookOpen, Compass, Phone } from 'lucide-react';
import { useRoom } from './RoomContext';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  action: 'tab' | 'call' | 'whatsapp';
  tabTarget?: string;
  section?: string;
}

const actions: QuickAction[] = [
  {
    id: 'wifi',
    label: 'Wi-Fi & Room',
    icon: Wifi,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    action: 'tab',
    section: 'wifi',
  },
  {
    id: 'services',
    label: 'Guest Services',
    icon: Bell,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    action: 'tab',
    tabTarget: 'services',
  },
  {
    id: 'food',
    label: 'Food & Lounge',
    icon: UtensilsCrossed,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    action: 'tab',
    section: 'food',
  },
  {
    id: 'guide',
    label: 'Hotel Guide',
    icon: BookOpen,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    action: 'tab',
    section: 'guide',
  },
  {
    id: 'explore',
    label: 'Nearby Places',
    icon: Compass,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    action: 'tab',
    tabTarget: 'explore',
  },
  {
    id: 'call',
    label: 'Call Reception',
    icon: Phone,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    action: 'call',
  },
];

interface QuickActionsProps {
  onTabChange: (tab: string) => void;
  onSectionChange: (section: string) => void;
}

export default function QuickActions({ onTabChange, onSectionChange }: QuickActionsProps) {
  const { callReceptionUrl } = useRoom();

  const handleAction = (action: QuickAction) => {
    if (action.action === 'call') {
      window.open(callReceptionUrl, '_self');
    } else if (action.action === 'tab' && action.tabTarget) {
      onTabChange(action.tabTarget);
    } else if (action.action === 'tab' && action.section) {
      onSectionChange(action.section);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-medium">
        Quick Actions
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              onClick={() => handleAction(action)}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border-light bg-white p-4 shadow-sm transition-all active:scale-95"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.bgColor}`}>
                <Icon className={`h-5 w-5 ${action.color}`} />
              </div>
              <span className="text-center text-[11px] font-medium leading-tight text-foreground">
                {action.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
