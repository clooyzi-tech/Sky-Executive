'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Star, FileText, Images, MessageSquareText, Phone, MessageCircle,
  Shield, HeartPulse, Flame, ChevronDown, ChevronUp, Tag, Briefcase,
  Wifi, Car, UtensilsCrossed, Building, Zap, ShieldCheck, Heart, Shirt,
  Sparkles, Clock, ExternalLink,
} from 'lucide-react';
import { InstagramIcon } from '@/config/icons';
import hotelInfoData from '@/data/hotel-info.json';
import { useRoom } from './RoomContext';

const facilityIcons: Record<string, React.ElementType> = {
  Wifi, Car, UtensilsCrossed, Building, Zap, ShieldCheck, Heart, Shirt, Sparkles, Clock,
};

const offerIcons: Record<string, React.ElementType> = {
  Tag, Briefcase,
};

const emergencyIcons: Record<string, React.ElementType> = {
  Phone, Shield, HeartPulse, Flame,
};

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

function AccordionBlock({ item, isOpen, onToggle }: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <div className="rounded-xl border border-border-light bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted">
            <Icon className="h-4 w-4 text-accent" />
          </div>
          <span className="text-sm font-semibold text-foreground">{item.title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-slate-medium" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-medium" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border-light px-4 pb-4 pt-3">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MoreSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { callReceptionUrl, generateWhatsAppUrl } = useRoom();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsApp = () => {
    const url = generateWhatsAppUrl('General Enquiry', undefined, 'I need assistance');
    window.open(url, '_blank');
  };

  const accordionItems: AccordionItem[] = [
    {
      id: 'info',
      title: 'Hotel Information',
      icon: Building2,
      content: (
        <div className="space-y-2">
          <p className="text-xs text-slate-medium">{hotelInfoData.about}</p>
          <p className="text-[11px] font-medium text-accent-dark">{hotelInfoData.tagline}</p>
        </div>
      ),
    },
    {
      id: 'facilities',
      title: 'Facilities',
      icon: Sparkles,
      content: (
        <div className="grid grid-cols-1 gap-2">
          {hotelInfoData.facilities.map((f) => {
            const FIcon = facilityIcons[f.icon] || Sparkles;
            return (
              <div key={f.title} className="flex items-center gap-2.5 rounded-lg bg-cream/50 p-2.5">
                <FIcon className="h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-foreground">{f.title}</p>
                  <p className="text-[10px] text-slate-medium">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: 'offers',
      title: 'Offers',
      icon: Star,
      content: (
        <div className="space-y-2">
          {hotelInfoData.offers.filter((o) => o.active).map((offer) => {
            const OIcon = offerIcons[offer.icon] || Tag;
            return (
              <div key={offer.title} className="flex items-start gap-2.5 rounded-lg bg-cream/50 p-3">
                <OIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold text-foreground">{offer.title}</p>
                  <p className="text-[10px] text-slate-medium">{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: 'policies',
      title: 'Policies',
      icon: FileText,
      content: (
        <div className="space-y-2">
          {hotelInfoData.policies.map((policy) => (
            <div key={policy.title} className="rounded-lg bg-cream/50 p-3">
              <p className="text-xs font-semibold text-foreground">{policy.title}</p>
              <p className="mt-0.5 text-[11px] text-slate-medium">{policy.content}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'gallery',
      title: 'Gallery',
      icon: Images,
      content: (
        <div className="grid grid-cols-2 gap-2">
          {hotelInfoData.gallery.images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="h-24 w-full object-cover"
                loading="lazy"
              />
              <p className="bg-cream/50 py-1 text-center text-[10px] text-slate-medium">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'feedback',
      title: 'Guest Feedback',
      icon: MessageSquareText,
      content: (
        <div className="space-y-3">
          <p className="text-xs text-slate-medium">{hotelInfoData.feedback.description}</p>
          <a
            href={hotelInfoData.feedback.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-charcoal px-4 py-2.5 text-xs font-medium text-white transition-all active:scale-95"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Leave a Google Review
          </a>
        </div>
      ),
    },
    {
      id: 'emergency',
      title: 'Emergency Contacts',
      icon: Shield,
      content: (
        <div className="space-y-2">
          {hotelInfoData.emergency.contacts.map((contact) => {
            const EIcon = emergencyIcons[contact.icon] || Phone;
            return (
              <a
                key={contact.name}
                href={`tel:${contact.number}`}
                className="flex items-center justify-between rounded-lg bg-cream/50 p-3 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <EIcon className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{contact.name}</p>
                    <p className="text-[10px] text-slate-medium">{contact.available}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-foreground">{contact.number}</span>
              </a>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      {/* Header */}
      <div>
        <h2 className="text-lg font-serif font-semibold text-foreground">More</h2>
        <p className="mt-1 text-xs text-slate-medium">Hotel details, policies, and contacts</p>
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {accordionItems.map((item) => (
          <AccordionBlock
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>

      {/* Contact Reception */}
      <div className="mt-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-foreground">Contact Reception</h3>
        <div className="flex gap-2">
          <a
            href={callReceptionUrl}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-charcoal px-4 py-3 text-xs font-semibold text-white transition-all active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <button
            onClick={handleWhatsApp}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
        </div>

        {/* Social */}
        {hotelInfoData.contact.instagram && (
          <a
            href={hotelInfoData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-border-light py-2.5 text-xs font-medium text-slate-medium transition-all active:scale-95"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow us on Instagram
          </a>
        )}
      </div>
    </div>
  );
}
