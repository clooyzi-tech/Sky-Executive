'use client';

import { usePathname } from 'next/navigation';
import { MessageCircle } from '@/config/icons';
import { STRINGS } from '@/config/strings';
import { whatsappUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <a
      href={whatsappUrl(STRINGS.contact.prefilledMessages.floatingWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={STRINGS.common.buttons.chatWhatsApp}
      id="whatsapp-float"
      className="fixed right-3.5 bottom-3.5 sm:right-5 sm:bottom-5 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
    >
      {/* Pulse ring */}
      <span className="absolute h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6 fill-current" />
    </a>
  );
}
