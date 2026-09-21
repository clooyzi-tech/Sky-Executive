'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Loader2,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  User,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { STRINGS } from '@/config/strings';

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomPreference: string;
  guests: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  roomPreference: 'Double Bed Room',
  guests: '2',
  message: '',
};

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();

  // Listen to open-booking-enquiry event from the Hero search bar or any CTA
  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{
        checkIn?: string;
        checkOut?: string;
        guests?: string;
        roomPreference?: string;
      }>;

      if (customEvent.detail) {
        setForm((prev) => ({
          ...prev,
          checkIn: customEvent.detail.checkIn || prev.checkIn,
          checkOut: customEvent.detail.checkOut || prev.checkOut,
          guests: customEvent.detail.guests || prev.guests,
          roomPreference: customEvent.detail.roomPreference || prev.roomPreference,
        }));
      }
      setIsOpen(true);
    };

    window.addEventListener('open-booking-enquiry', handleOpenBooking);
    return () => window.removeEventListener('open-booking-enquiry', handleOpenBooking);
  }, []);

  // Automatic popup on first load in session
  useEffect(() => {
    if (pathname?.startsWith('/guest') || pathname === '/chat') {
      return;
    }

    try {
      const hasSeen = sessionStorage.getItem('livinn_enquiry_popup_seen');
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem('livinn_enquiry_popup_seen', 'true');
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setError(null);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!form.phone.trim()) {
      setError('Please enter your contact phone number.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim() || `${form.phone.replace(/\D/g, '') || 'guest'}@guest.livinn.in`,
          phone: `+91 ${form.phone.trim()}`,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          roomPreference: form.roomPreference,
          guests: form.guests,
          message: form.message.trim() || 'Direct booking enquiry from website visitor.',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send your enquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred while sending your enquiry. Please try again.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs"
          />

          {/* Canva POPPIN DESIGN: Split Card Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E5DEC9] bg-white shadow-2xl z-10 my-auto grid grid-cols-1 md:grid-cols-12"
          >
            {/* Top Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 border border-[#E8DFC8] text-[#7E7465] transition-all hover:bg-[#EAE2D2] hover:text-[#2A241C] cursor-pointer shadow-xs"
              aria-label="Close enquiry popup"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left Column: Canva Dark Gold Luxury Panel */}
            <div className="hidden md:flex md:col-span-5 bg-[#17181D] text-white p-6 flex-col justify-between relative overflow-hidden border-r border-white/10">
              <div className="relative z-10">
                {/* Gold emblem */}
                <div className="relative h-16 w-16 mb-4 rounded-full border-2 border-[#DFB756] overflow-hidden">
                  <Image
                    src={STRINGS.brand.logoPath}
                    alt="liv.inn Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFB756] block mb-1">
                  Boutique Hotel Pune
                </span>
                <h3 className="font-serif text-2xl font-bold leading-tight">
                  Book Your Stay With Us
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Double Bed Rooms with scenic nature views, in-house cloud kitchen, and 24/7 front desk.
                </p>
              </div>

              {/* Room photo at bottom */}
              <div className="relative h-36 w-full rounded-2xl overflow-hidden border border-white/15 shadow-md mt-6 z-10">
                <Image
                  src="/images/rooms/premium_room.jpg"
                  alt="Double Bed Room at liv.inn"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-medium text-white/90">
                  Double Bed Room (200 sq.ft)
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Booking Form */}
            <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              {submitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 flex flex-col items-center text-center space-y-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2A241C]">
                    Enquiry Received!
                  </h3>

                  <p className="text-xs text-[#7E7465] max-w-sm leading-relaxed">
                    Thank you, <strong className="text-[#2A241C]">{form.name}</strong>. Our front desk has received your request at <span className="font-semibold text-[#A67C37]">help.livinn@gmail.com</span> and will respond to confirm your reservation.
                  </p>

                  <div className="flex flex-col gap-2 w-full pt-2">
                    <a
                      href={`https://wa.me/918007724646?text=${encodeURIComponent(
                        `Hi liv.inn Front Desk, I submitted a booking enquiry for ${form.roomPreference} (Dates: ${form.checkIn || 'flexible'} to ${form.checkOut || 'flexible'}). Name: ${form.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Instant Confirm on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full py-2.5 rounded-full border border-[#DCD3C3] bg-white text-[#2A241C] hover:bg-[#FAF5EC] text-xs font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="mb-2">
                    <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#B38E46]">
                      <Sparkles className="h-3 w-3" />
                      <span>Direct Best Rate</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-[#2A241C]">
                      Book Your Stay
                    </h2>
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-2 text-xs text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Check-In & Check-Out */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Check In
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={form.checkIn}
                          onChange={(e) => updateField('checkIn', e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Check Out
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={form.checkOut}
                          onChange={(e) => updateField('checkOut', e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Room & Guests */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Room
                      </label>
                      <select
                        value={form.roomPreference}
                        onChange={(e) => updateField('roomPreference', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] truncate"
                      >
                        <option value="Double Bed Room">Double Bed Room</option>
                        <option value="Double Bed Room + Extra Bed">Double Bed + Extra Bed</option>
                        <option value="Multiple Rooms">Multiple Rooms</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => updateField('guests', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Full Name"
                        className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                        Phone *
                      </label>
                      <div className="flex rounded-xl border border-[#DCD3C3] overflow-hidden focus-within:border-[#B38E46] bg-white">
                        <span className="inline-flex items-center px-2 text-[10px] font-semibold bg-[#F5EFE4] text-[#6E6454] border-r border-[#DCD3C3]">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="Phone number"
                          className="flex-1 text-xs px-2 py-1.5 bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="email@example.com (optional)"
                      className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                    />
                  </div>

                  {/* Remark / Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#9C8F7E] mb-1">
                      Special Requests
                    </label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Arrival time, extra bed, diet requirements..."
                      className="w-full text-xs px-2.5 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <span>Enquire Now</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
