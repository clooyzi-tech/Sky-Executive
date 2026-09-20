'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  X,
  Check,
  Star,
  ChevronDown,
  Share2,
  ExternalLink,
  Sparkles,
  UtensilsCrossed,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import chatbotConfig from '@/data/chatbot-config.json';
import hotelInfo from '@/data/hotel-info.json';
import AssistantBookingForm from './AssistantBookingForm';

// --- SVG Icons matching Canva Design ---

function NamasteHandsIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 6C32 6 28 16 28 26C28 32 30 38 32 44C34 38 36 32 36 26C36 16 32 6 32 6Z"
        fill="#B88E4B"
        fillOpacity="0.18"
      />
      <path
        d="M26 12C26 12 21 21 22 30C23 35 26 40 29 45L32 44C30 38 28 32 28 26C28 18 31 10 32 6C30 7 28 9 26 12Z"
        fill="#B88E4B"
        fillOpacity="0.3"
      />
      <path
        d="M38 12C38 12 43 21 42 30C41 35 38 40 35 45L32 44C34 38 36 32 36 26C36 18 33 10 32 6C34 7 36 9 38 12Z"
        fill="#B88E4B"
        fillOpacity="0.3"
      />
      <path
        d="M32 8L32 46M25 15C25 15 22 24 23 32C24 37 28 43 32 46M39 15C39 15 42 24 41 32C40 37 36 43 32 46M19 22C19 22 17 29 18 36C19 41 24 48 32 50M45 22C45 22 47 29 46 36C45 41 40 48 32 50M32 50V56M24 56H40"
        stroke="#A67C37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle floral accents */}
      <path
        d="M12 42C14 38 19 39 20 43C21 47 16 49 13 47C11.5 46 11 44 12 42Z"
        stroke="#C5A265"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M52 42C50 38 45 39 44 43C43 47 48 49 51 47C52.5 46 53 44 52 42Z"
        stroke="#C5A265"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BroomCleaningIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m14 10 6.5-6.5a1.5 1.5 0 0 0-2-2L12 8" />
      <path d="M7 15l-3 3a2 2 0 0 0 3 3l3-3" />
      <path d="M8.5 13.5l5 5a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8l-5-5" />
    </svg>
  );
}

function WashingMachineIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 10a3 3 0 0 1 3 3" />
      <circle cx="7" cy="5.5" r=".5" fill="currentColor" />
      <circle cx="10" cy="5.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function BedIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v3" />
    </svg>
  );
}

function ShoeIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 18c0-3 3-5 7-5h3l4 3 4-1v4H3v-1Z" />
      <path d="M10 13l2-4h3l1 4" />
      <path d="M14 9l1-3h3" />
    </svg>
  );
}

function LuggageIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="14" x="4" y="7" rx="2" />
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <path d="M9 21v1" />
      <path d="M15 21v1" />
      <path d="M9 11v6" />
      <path d="M15 11v6" />
    </svg>
  );
}

function WaterBottleIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 2h4v3H7z" />
      <path d="M6 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
      <path d="M15 2h4v3h-4z" />
      <path d="M14 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

function TowelIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="6" x="3" y="4" rx="2" />
      <rect width="18" height="6" x="3" y="10" rx="2" />
      <rect width="18" height="6" x="3" y="16" rx="2" />
    </svg>
  );
}

function SprayIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 2h4" />
      <path d="M12 2v4" />
      <path d="M8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
      <path d="M6 8l-2 1" />
      <path d="M4 11h2" />
    </svg>
  );
}

function TrashIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

function IronIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 18h18a2 2 0 0 0 2-2c0-5.5-4.5-9-10-9H7a4 4 0 0 0-4 4v7Z" />
      <path d="M17 11a2 2 0 0 1 2 2" />
      <circle cx="8" cy="14" r="1" />
    </svg>
  );
}

function BabyCribIcon({ className = 'w-5 h-5 text-[#A67C37]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 6v14" />
      <path d="M20 6v14" />
      <rect width="16" height="10" x="4" y="7" rx="1" />
      <path d="M8 7v10" />
      <path d="M12 7v10" />
      <path d="M16 7v10" />
    </svg>
  );
}

function GoogleLogoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// --- Tab Types ---
type ActiveTab =
  | 'home'
  | 'housekeeping'
  | 'laundry'
  | 'extrabed'
  | 'shoecare'
  | 'luggage'
  | 'food'
  | 'social'
  | 'review'
  | 'form'
  | 'thankyou';

interface LivinnAssistantProps {
  isPopup?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function LivinnAssistant({
  isPopup = false,
  onClose,
  className = '',
}: LivinnAssistantProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [previousTab, setPreviousTab] = useState<ActiveTab>('home');
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});

  // Feedback State
  const [rating, setRating] = useState<number>(5);
  const [reaction, setReaction] = useState<'excellent' | 'good' | 'improvement'>('excellent');

  // Service-selection gate error
  const [noServiceError, setNoServiceError] = useState(false);

  // Toggle Checkbox helper
  const toggleService = (title: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
    setNoServiceError(false); // clear gate error when user taps a service
  };

  // Navigate to Form — requires at least one service selected
  const handleProceedToForm = (currentTab: ActiveTab) => {
    const anySelected = Object.values(selectedServices).some(Boolean);
    if (!anySelected) {
      setNoServiceError(true);
      return;
    }
    setNoServiceError(false);
    setPreviousTab(currentTab);
    setActiveTab('form');
  };

  // Reset to Home
  const handleReset = () => {
    setActiveTab('home');
    setSelectedServices({});
    setNoServiceError(false);
  };

  // Active bottom button calculation
  const getSelectedBottomButton = (): string => {
    if (['housekeeping', 'laundry', 'extrabed', 'shoecare', 'luggage', 'food', 'social', 'review'].includes(activeTab)) {
      return activeTab;
    }
    if (activeTab === 'form' || activeTab === 'thankyou') {
      return previousTab;
    }
    return '';
  };

  const currentActiveButton = getSelectedBottomButton();

  // Bottom 8 Navigation Buttons definition
  const navButtons = [
    { id: 'food', label: 'Food Menu', icon: UtensilsCrossed },
    { id: 'housekeeping', label: 'Housekeeping', icon: BroomCleaningIcon },
    { id: 'laundry', label: 'Laundry Services', icon: WashingMachineIcon },
    { id: 'extrabed', label: 'Extra Bed & Baby Cot', icon: BedIcon },
    { id: 'shoecare', label: 'Shoe Care', icon: ShoeIcon },
    { id: 'luggage', label: 'Luggage Handling', icon: LuggageIcon },
    { id: 'social', label: 'Our Social Media', icon: Share2 },
    { id: 'review', label: 'Review us', icon: Star },
  ];

  return (
    <div
      className={`relative flex flex-col h-full w-full select-none overflow-hidden bg-[#FAF7F2] font-sans text-[#2A241C] ${className}`}
    >

      {/* ============================================================ */}
      {/* FULL-PAGE OVERLAY: PERSONAL ASSISTANT FORM (SCREEN 10)       */}
      {/* Now rendered via standalone AssistantBookingForm component   */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeTab === 'form' && (
          <AssistantBookingForm
            previousTab={previousTab}
            selectedServices={selectedServices}
            onBack={() => setActiveTab(previousTab)}
            onSuccess={() => setActiveTab('thankyou')}
            isPopup={isPopup}
            onClose={onClose}
          />
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* FULL-PAGE OVERLAY: THANK YOU SCREEN (SCREEN 11)              */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeTab === 'thankyou' && (
          <motion.div
            key="thankyou-overlay"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-0 z-50 flex flex-col bg-[#FAF7F2] overflow-hidden"
          >
            {/* Overlay Header */}
            <header className="flex items-center justify-between px-4 py-3 border-b border-[#EBE4D5] bg-white shadow-2xs shrink-0">
              <div className="flex flex-col">
                <Link href="/" className="group inline-flex flex-col">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#2A241C] group-hover:text-[#A67C37] transition-colors leading-none">
                    LIV.INN
                  </span>
                  <span className="text-[7.5px] sm:text-[8.5px] tracking-widest text-[#9C8F7E] font-medium uppercase mt-0.5">
                    STAY IN COMFORT, LIVE THE MOMENT.
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="text-right">
                  <h4 className="text-xs font-semibold text-[#2A241C] leading-tight">Miss. Maya</h4>
                  <p className="text-[10px] text-[#8C7E6D]">Your Personal assistant</p>
                </div>
                <a
                  href="tel:+918007724646"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#A67C37] transition-all hover:bg-[#A67C37] hover:text-white shadow-2xs"
                  title="Call Front Desk"
                >
                  <Phone className="h-3.5 w-3.5" />
                </a>
                {isPopup && onClose && (
                  <button
                    onClick={onClose}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#7E7465] transition-all hover:bg-[#EAE2D2] hover:text-[#2A241C] cursor-pointer"
                    aria-label="Close assistant"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </header>

            {/* Thank You Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="text-center mb-3">
                <h2 className="text-sm font-bold tracking-widest text-[#A67C37] uppercase">
                  — THANK YOU —
                </h2>
                <p className="text-[11px] font-semibold text-[#2A241C] mt-1">
                  Your Request has been submitted
                </p>
              </div>

              {/* Google Review Box */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFC8] mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E0D5C1] mb-2">
                  <GoogleLogoIcon className="w-3 h-3" />
                  <span className="text-[9px] font-bold text-[#A67C37]">Google Review</span>
                </div>
                <h4 className="text-xs font-bold text-[#2A241C]">How was your stay?</h4>
                <p className="text-[9.5px] text-[#7E7465]">We&apos;d love to hear from you</p>

                {/* Star Rating */}
                <div className="flex justify-center gap-2 my-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="cursor-pointer transition-transform hover:scale-110 p-0.5"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'fill-transparent text-[#D1C7B4]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Reactions */}
                <div className="grid grid-cols-3 gap-2 my-2">
                  {[
                    { id: 'excellent', emoji: '🤩', title: 'Excellent', subtitle: 'Loved stay' },
                    { id: 'good', emoji: '😊', title: 'Good', subtitle: 'Great' },
                    { id: 'improvement', emoji: '😐', title: 'Needs Impr.', subtitle: 'Let us know' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setReaction(item.id as typeof reaction)}
                      className={`p-2 rounded-xl border text-center cursor-pointer transition-all ${
                        reaction === item.id
                          ? 'bg-[#FAF5EC] border-[#B38E46]'
                          : 'bg-white border-[#EFE8DD]'
                      }`}
                    >
                      <span className="text-xl block leading-none">{item.emoji}</span>
                      <span className="text-[9px] font-bold text-[#2A241C] block mt-1">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Google Button */}
                <a
                  href="https://www.google.com/maps/place/liv.inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-[11px] font-semibold shadow-xs transition-all flex flex-col items-center justify-center cursor-pointer"
                >
                  <span>Review us on Google →</span>
                  <span className="text-[8.5px] text-[#FAF5EC]/80 font-normal">
                    Share Your Experience
                  </span>
                </a>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/918007724646?text=${encodeURIComponent(
                    `Hello liv.inn Reception, I submitted a service request for: ${Object.keys(selectedServices).filter((k) => selectedServices[k]).join(', ') || 'Guest Assistance'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 text-[10.5px] font-semibold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  <span>💬 WhatsApp Desk</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#8C6D2D] hover:bg-[#F2EADB] text-[10.5px] font-semibold flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Start New</span>
                </button>
              </div>
            </div>

            {/* Developed by footer */}
            <div className="shrink-0 py-2 text-center">
              <span className="text-[9px] text-[#B8AB98] tracking-wider">developed by</span>
              <span className="text-[9px] font-bold text-[#A67C37] ml-1">JAYAASI Technologies</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 1. TOP HEADER */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#EBE4D5] bg-white shadow-2xs z-20 shrink-0">
        {/* Left: Brand Logo & Slogan */}
        <div className="flex flex-col">
          <Link href="/" className="group inline-flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#2A241C] group-hover:text-[#A67C37] transition-colors leading-none">
              LIV.INN
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-widest text-[#9C8F7E] font-medium uppercase mt-0.5">
              STAY IN COMFORT, LIVE THE MOMENT.
            </span>
          </Link>
        </div>

        {/* Right: Personal Assistant & Phone / Close */}
        <div className="flex items-center gap-2.5">
          <div className="text-right">
            <h4 className="text-xs font-semibold text-[#2A241C] leading-tight">Miss. Maya</h4>
            <p className="text-[10px] text-[#8C7E6D]">Your Personal assistant</p>
          </div>

          <a
            href="tel:+918007724646"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#A67C37] transition-all hover:bg-[#A67C37] hover:text-white shadow-2xs"
            title="Call Front Desk"
          >
            <Phone className="h-3.5 w-3.5" />
          </a>

          {isPopup && onClose && (
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#7E7465] transition-all hover:bg-[#EAE2D2] hover:text-[#2A241C] cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </header>

      {/* 2. MAIN CENTER AREA: THE DYNAMIC DISPLAY BOX (NO SCROLL ACCUMULATION) */}
      <div className="flex-1 px-3.5 py-3 overflow-hidden flex flex-col justify-start">
        <div className="relative w-full flex-1 rounded-2xl bg-white border border-[#E8DFD0] shadow-sm overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            {/* --- SCREEN 1: HOME PAGE --- */}
            {activeTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-5 relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-[#FDFBF7]"
              >
                {/* Decorative background flourishes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6EEDF]/40 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F6EEDF]/40 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-[280px]">
                  {/* Namaste hands */}
                  <div className="mb-3 p-2 rounded-full bg-[#FAF5EC] border border-[#EADFCB] shadow-2xs">
                    <NamasteHandsIcon className="w-12 h-12" />
                  </div>

                  <span className="font-serif italic text-base sm:text-lg text-[#856834]">
                    Welcome to
                  </span>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A241C] tracking-wide mt-0.5 mb-1">
                    Liv.inn
                  </h1>
                  <p className="text-[9.5px] sm:text-[10.5px] tracking-[0.16em] uppercase font-semibold text-[#A67C37] mb-6">
                    STAY IN COMFORT, LIVE THE MOMENT.
                  </p>

                  <button
                    onClick={() => setActiveTab('housekeeping')}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white px-5 py-2 text-xs font-medium shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span>Tap what you need below</span>
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 2: HOUSEKEEPING PAGE --- */}
            {activeTab === 'housekeeping' && (
              <motion.div
                key="housekeeping"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      Housekeeping
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Select items needed</span>
                  </div>

                  {/* 2-Column Grid of 8 options */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: 'Room Cleaning', icon: BroomCleaningIcon },
                      { title: 'Emergency & Linen Changing', icon: BedIcon },
                      { title: 'Bathroom Cleaning & Sanitization', icon: SprayIcon },
                      { title: 'Towel Replacement', icon: TowelIcon },
                      { title: 'Balcony Cleaning', icon: BroomCleaningIcon },
                      { title: 'Garbage Removal', icon: TrashIcon },
                      { title: 'Drinking Water Refill', icon: WaterBottleIcon },
                      { title: 'On-Request Cleaning', icon: BroomCleaningIcon },
                    ].map((item) => {
                      const isChecked = !!selectedServices[item.title];
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleService(item.title)}
                          className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                              : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0 pr-1">
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                                isChecked ? 'bg-[#B38E46]/15' : 'bg-[#FAF7F2]'
                              }`}
                            >
                              <IconComponent className="w-3.5 h-3.5 text-[#A67C37]" />
                            </div>
                            <span className="text-[10.5px] font-medium text-[#2A241C] leading-snug line-clamp-2">
                              {item.title}
                            </span>
                          </div>
                          {/* Checkbox */}
                          <div
                            className={`h-4 w-4 shrink-0 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-[#B38E46] border-[#B38E46] text-white'
                                : 'bg-white border-[#C7BCA8]'
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('housekeeping')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'housekeeping' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 3: LAUNDRY SERVICES PAGE --- */}
            {activeTab === 'laundry' && (
              <motion.div
                key="laundry"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      laundry service
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Select garments care</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: 'Clothes Washing', icon: WashingMachineIcon },
                      { title: 'Drying', icon: WashingMachineIcon },
                      { title: 'Ironing / Pressing', icon: IronIcon },
                      { title: 'Folding', icon: TowelIcon },
                      { title: 'Dry Cleaning', icon: IronIcon },
                    ].map((item) => {
                      const isChecked = !!selectedServices[item.title];
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleService(item.title)}
                          className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                              : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0 pr-1">
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                                isChecked ? 'bg-[#B38E46]/15' : 'bg-[#FAF7F2]'
                              }`}
                            >
                              <IconComponent className="w-3.5 h-3.5 text-[#A67C37]" />
                            </div>
                            <span className="text-[11px] font-medium text-[#2A241C] leading-snug">
                              {item.title}
                            </span>
                          </div>
                          <div
                            className={`h-4 w-4 shrink-0 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-[#B38E46] border-[#B38E46] text-white'
                                : 'bg-white border-[#C7BCA8]'
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('laundry')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'laundry' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 4: EXTRA BED & BABY COT PAGE --- */}
            {activeTab === 'extrabed' && (
              <motion.div
                key="extrabed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      extra bed & baby cot
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Bedding setup</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        title: 'Extra Bed Setup',
                        desc: 'Comfortable extra bed for an additional guest.',
                        icon: BedIcon,
                      },
                      {
                        title: 'Baby Cot / Crib Setup',
                        desc: 'Safe and comfortable crib for your little one.',
                        icon: BabyCribIcon,
                      },
                      {
                        title: 'Extra Bedding, Pillows & Blankets',
                        desc: 'Fresh and clean bedding for added comfort.',
                        icon: TowelIcon,
                      },
                    ].map((item) => {
                      const isChecked = !!selectedServices[item.title];
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleService(item.title)}
                          className={`flex items-start justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                              : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                          }`}
                        >
                          <div className="flex items-start gap-2 min-w-0 pr-2">
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5 ${
                                isChecked ? 'bg-[#B38E46]/15' : 'bg-[#FAF7F2]'
                              }`}
                            >
                              <IconComponent className="w-4 h-4 text-[#A67C37]" />
                            </div>
                            <div>
                              <h4 className="text-[11px] font-semibold text-[#2A241C] leading-tight">
                                {item.title}
                              </h4>
                              <p className="text-[9.5px] text-[#7E7465] leading-normal mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`h-4 w-4 shrink-0 rounded-md flex items-center justify-center border mt-1 transition-colors ${
                              isChecked
                                ? 'bg-[#B38E46] border-[#B38E46] text-white'
                                : 'bg-white border-[#C7BCA8]'
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('extrabed')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'extrabed' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 5: SHOE CARE PAGE --- */}
            {activeTab === 'shoecare' && (
              <motion.div
                key="shoecare"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      Shoe Care
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Polishing service</span>
                  </div>

                  <div
                    onClick={() => toggleService('Shoe Cleaning & Polishing')}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedServices['Shoe Cleaning & Polishing']
                        ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                        : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EC] border border-[#E8DFC8]">
                        <ShoeIcon className="w-5 h-5 text-[#A67C37]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#2A241C]">
                          Shoe Cleaning & Polishing
                        </h4>
                        <p className="text-[10px] text-[#7E7465]">
                          Gentle care and shining for formal & casual footwear
                        </p>
                      </div>
                    </div>
                    <div
                      className={`h-5 w-5 shrink-0 rounded-md flex items-center justify-center border transition-colors ${
                        selectedServices['Shoe Cleaning & Polishing']
                          ? 'bg-[#B38E46] border-[#B38E46] text-white'
                          : 'bg-white border-[#C7BCA8]'
                      }`}
                    >
                      {selectedServices['Shoe Cleaning & Polishing'] && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('shoecare')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'shoecare' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 6: LUGGAGE HANDLING PAGE --- */}
            {activeTab === 'luggage' && (
              <motion.div
                key="luggage"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      Luggage Handling
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Bell desk assistance</span>
                  </div>

                  <div
                    onClick={() => toggleService('Luggage Carrying')}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedServices['Luggage Carrying']
                        ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                        : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EC] border border-[#E8DFC8]">
                        <LuggageIcon className="w-5 h-5 text-[#A67C37]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#2A241C]">
                          Luggage Carrying
                        </h4>
                        <p className="text-[10px] text-[#7E7465]">
                          Assistance to / from your room at check-in & check-out
                        </p>
                      </div>
                    </div>
                    <div
                      className={`h-5 w-5 shrink-0 rounded-md flex items-center justify-center border transition-colors ${
                        selectedServices['Luggage Carrying']
                          ? 'bg-[#B38E46] border-[#B38E46] text-white'
                          : 'bg-white border-[#C7BCA8]'
                      }`}
                    >
                      {selectedServices['Luggage Carrying'] && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('luggage')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'luggage' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 7: FOOD MENU PAGE --- */}
            {activeTab === 'food' && (
              <motion.div
                key="food"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      Food Menu & Dining
                    </h2>
                    <span className="text-[10px] text-[#9E9180]">Cloud Kitchen</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: 'Breakfast Order', desc: '7:30 AM – 10:30 AM' },
                      { title: 'Lunch & Thali Order', desc: '12:00 PM – 3:00 PM' },
                      { title: 'Dinner Order', desc: '7:00 PM – 10:30 PM' },
                      { title: 'Snacks & Beverages', desc: 'Tea, Coffee, Maggi' },
                      { title: 'In-Room Cloud Kitchen Delivery', desc: 'Delivered to room' },
                      { title: 'Special Diet / Jain Food', desc: 'Upon preparation request' },
                    ].map((item) => {
                      const isChecked = !!selectedServices[item.title];
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleService(item.title)}
                          className={`flex items-start justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                              : 'bg-white border-[#EFE8DD] hover:border-[#DFD5C4]'
                          }`}
                        >
                          <div className="min-w-0 pr-1">
                            <h4 className="text-[10.5px] font-semibold text-[#2A241C] leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[9px] text-[#7E7465] leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                          <div
                            className={`h-4 w-4 shrink-0 rounded-md flex items-center justify-center border mt-0.5 transition-colors ${
                              isChecked
                                ? 'bg-[#B38E46] border-[#B38E46] text-white'
                                : 'bg-white border-[#C7BCA8]'
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleProceedToForm('food')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Select &amp; click here</span>
                  </button>
                  {noServiceError && activeTab === 'food' && (
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[10.5px] text-amber-700 font-medium">Please select at least one service first.</span>
                    </div>
                  )}
                  <a
                    href="https://wa.me/918007724646?text=Hi!%20I%20would%20like%20to%20order%20food%20from%20the%20liv.inn%20Cloud%20Kitchen."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 rounded-full border border-[#E0D5C1] bg-[#FAF8F4] hover:bg-[#F2EADB] text-[#8C6D2D] text-[10.5px] font-medium transition-all flex items-center justify-center gap-1"
                  >
                    <span>Or Order directly via WhatsApp</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 8: OUR SOCIAL MEDIA PAGE --- */}
            {activeTab === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F0E9DC]">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-[#A67C37]">
                      Connect with Liv.inn
                    </h2>
                    <button
                      onClick={() => setActiveTab('home')}
                      className="text-[10px] text-[#A67C37] hover:underline cursor-pointer"
                    >
                      ← Home
                    </button>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/livinn69/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl border border-[#EFE8DD] bg-[#FAF8F5] hover:border-[#B38E46] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF0E1] text-[#A67C37]">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#2A241C]">
                            Instagram @livinn69
                          </h4>
                          <p className="text-[9.5px] text-[#7E7465]">Follow our updates & photos</p>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B38E46] group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://wa.me/918007724646?text=Hello%20liv.inn%20Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl border border-[#EFE8DD] bg-[#FAF8F5] hover:border-[#B38E46] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF0E1] text-[#A67C37]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#2A241C]">WhatsApp Support</h4>
                          <p className="text-[9.5px] text-[#7E7465]">+91 80077 24646</p>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B38E46] group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://www.google.com/maps/place/liv.inn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl border border-[#EFE8DD] bg-[#FAF8F5] hover:border-[#B38E46] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF0E1] text-[#A67C37]">
                          <GoogleLogoIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#2A241C]">Google Maps Location</h4>
                          <p className="text-[9.5px] text-[#7E7465]">Upper Kharadi, Wagholi, Pune</p>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B38E46] group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setActiveTab('review')}
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    Rate & Review Us
                  </button>
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 9: REVIEW US DIRECTLY --- */}
            {activeTab === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex-1 flex flex-col p-3.5 justify-between overflow-y-auto"
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] mb-1">
                    <GoogleLogoIcon className="w-3 h-3" />
                    <span className="text-[9.5px] font-semibold text-[#A67C37]">Google Review</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#2A241C]">How was your stay?</h3>
                  <p className="text-[10px] text-[#7E7465]">We&apos;d love to hear from you</p>

                  {/* 5 Stars */}
                  <div className="flex justify-center gap-1.5 my-2.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="cursor-pointer transition-transform hover:scale-110 p-0.5"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'fill-[#F59E0B] text-[#F59E0B]'
                              : 'fill-transparent text-[#D1C7B4]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Reactions */}
                  <div className="grid grid-cols-3 gap-1.5 my-2">
                    {[
                      { id: 'excellent', emoji: '🤩', title: 'Excellent', subtitle: 'Loved my stay' },
                      { id: 'good', emoji: '😊', title: 'Good', subtitle: 'Great experience' },
                      { id: 'improvement', emoji: '😐', title: 'Needs Improvement', subtitle: 'Let us know' },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setReaction(item.id as typeof reaction)}
                        className={`p-1.5 rounded-xl border text-center cursor-pointer transition-all ${
                          reaction === item.id
                            ? 'bg-[#FAF5EC] border-[#B38E46] shadow-2xs'
                            : 'bg-white border-[#EFE8DD]'
                        }`}
                      >
                        <span className="text-lg block leading-tight">{item.emoji}</span>
                        <span className="text-[10px] font-bold text-[#2A241C] block mt-0.5">
                          {item.title}
                        </span>
                        <span className="text-[8px] text-[#8C7E6D] block leading-none mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-1.5">
                  <a
                    href="https://www.google.com/maps/place/liv.inn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-semibold shadow-sm transition-all flex flex-col items-center justify-center cursor-pointer leading-tight"
                  >
                    <span>Review us on Google →</span>
                    <span className="text-[9px] text-[#FAF5EC]/80 font-normal">
                      Share Your Experience
                    </span>
                  </a>
                  <button
                    onClick={() => setActiveTab('social')}
                    className="w-full py-1.5 rounded-full border border-[#E0D5C1] bg-white text-[#7E7465] hover:text-[#2A241C] text-[10.5px] font-medium cursor-pointer"
                  >
                    Our Social Media
                  </button>
                </div>
              </motion.div>
            )}

            {/* --- SCREEN 10 & 11: Moved to full-page overlays at root level --- */}

            {/* --- SCREEN 11: Moved to full-page overlay at root level --- */}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. BOTTOM BUTTONS GRID: "TAP WHAT YOU NEED" */}
      <div className="px-3.5 pb-3.5 pt-1 z-10 shrink-0">
        <div className="text-center mb-1.5">
          <span className="text-[9px] sm:text-[10px] tracking-[0.18em] font-bold uppercase text-[#9C8F7E]">
            TAP WHAT YOU NEED
          </span>
        </div>

        {/* 2-Column Grid matching Canva reference */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {navButtons.map((btn) => {
            const isActive = currentActiveButton === btn.id;
            const IconComp = btn.icon;

            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => {
                  if (activeTab === btn.id) {
                    setActiveTab('home');
                  } else {
                    setActiveTab(btn.id as ActiveTab);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-left transition-all duration-150 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-[#B38E46] text-white border border-[#B38E46] shadow-sm scale-[1.02]'
                    : 'bg-white text-[#2A241C] border border-[#E5DEC9] hover:bg-[#FAF6EE] hover:border-[#D9CFB6]'
                }`}
              >
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    isActive ? 'text-white' : 'text-[#8C7449]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium truncate leading-none">
                  {btn.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
