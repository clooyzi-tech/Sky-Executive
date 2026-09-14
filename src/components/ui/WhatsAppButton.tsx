'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('Hi! I would like to know more about Liv.inn Hotel.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      id="whatsapp-float"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
    >
      {/* Pulse ring */}
      <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle className="relative h-6 w-6 fill-current" />
    </a>
  );
}
