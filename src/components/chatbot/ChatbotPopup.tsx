'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LivinnAssistant from './LivinnAssistant';

export default function ChatbotPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed bottom-20 right-3 z-[60] flex h-[620px] max-h-[88vh] w-[calc(100vw-24px)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-[#E5DEC9] bg-[#FAF7F2] shadow-2xl sm:right-6 sm:w-[400px]"
    >
      <LivinnAssistant isPopup={true} onClose={onClose} />
    </motion.div>
  );
}
