'use client';

import React from 'react';
import { Wifi, ShieldCheck, Phone, MessageCircle, Lock } from 'lucide-react';
import guestPortalData from '@/data/guest-portal.json';
import { useRoom } from './RoomContext';

export default function WiFiCard() {
  const { wifi } = guestPortalData;
  const { callReceptionUrl, generateWhatsAppUrl } = useRoom();

  const handleWhatsAppWifi = () => {
    const url = generateWhatsAppUrl('Wi-Fi Access', undefined, 'I need Wi-Fi login details for my stay');
    window.open(url, '_blank');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm">
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Wifi className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-charcoal">
              {wifi.title}
            </h3>
            <p className="text-xs text-slate-medium">High-speed guest connection</p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Active</span>
        </div>
      </div>

      {/* Security Note Box */}
      <div className="mt-4 rounded-xl border border-border-light bg-[#FAF8F3] p-4 space-y-2.5">
        <div className="flex items-start gap-2.5">
          <Lock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="text-xs font-semibold text-charcoal">Secure Guest Network</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-medium">
              {wifi.note}
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-border-light" />

        <ul className="space-y-1.5 pt-0.5">
          {wifi.instructions.map((inst, i) => (
            <li key={i} className="flex items-center gap-2 text-[11px] text-slate-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{inst}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 1-Tap Contact Buttons for Wi-Fi */}
      <div className="mt-4 flex gap-2">
        <a
          href={callReceptionUrl}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-charcoal py-2.5 text-xs font-semibold text-white transition-all active:scale-[0.98]"
        >
          <Phone className="h-3.5 w-3.5 text-accent" />
          Call Reception
        </a>
        <button
          type="button"
          onClick={handleWhatsAppWifi}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-semibold text-white transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Ask on WhatsApp
        </button>
      </div>
    </div>
  );
}

