'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatbotPopup from './ChatbotPopup';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith('/guest') || pathname === '/chat') {
    return null;
  }

  return (
    <>
      {/* Chatbot Popup */}
      <AnimatePresence>
        {isOpen && <ChatbotPopup onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3.5 right-3.5 z-[61] flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #1A1B20, #23252B)'
            : 'linear-gradient(135deg, #C59B27, #DFB756)',
        }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-20" />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="relative h-5 w-5 text-white sm:h-6 sm:w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="relative h-5 w-5 text-white sm:h-6 sm:w-6" />
            </motion.span>
          ) }
        </AnimatePresence>
      </motion.button>
    </>
  );
}
