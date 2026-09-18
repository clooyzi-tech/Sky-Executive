'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Bath, Bed, GlassWater, Droplets, Shirt, Wrench, SprayCan,
  BedDouble, MessageSquare,
} from 'lucide-react';
import servicesData from '@/data/services.json';
import ServiceRequestFlow from './ServiceRequestFlow';

const serviceIcons: Record<string, React.ElementType> = {
  Sparkles, Bath, Bed, GlassWater, Droplets, Shirt, Wrench, SprayCan,
  BedDouble, MessageSquare,
};

interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  hasQuantity: boolean;
  defaultQuantity?: number;
  maxQuantity?: number;
  hasNote: boolean;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  if (selectedService) {
    return (
      <ServiceRequestFlow
        service={selectedService}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-serif font-semibold text-foreground">
          {servicesData.title}
        </h2>
        <p className="mt-1 text-xs text-slate-medium">{servicesData.subtitle}</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-3">
        {servicesData.services.map((service, index) => {
          const Icon = serviceIcons[service.icon] || Sparkles;
          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04, duration: 0.25 }}
              onClick={() => setSelectedService(service as ServiceItem)}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border-light bg-white p-4 shadow-sm transition-all active:scale-95"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground">{service.name}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-slate-medium">
                  {service.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
