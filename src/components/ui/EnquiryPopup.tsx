'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Loader2,
  CheckCircle,
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
  roomPreference: 'Executive Room',
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

  // Listen to open-booking-enquiry event from any CTA
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
      const hasSeen = sessionStorage.getItem('sky_executive_enquiry_popup_seen');
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem('sky_executive_enquiry_popup_seen', 'true');
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
          email: form.email.trim() || `${form.phone.replace(/\D/g, '') || 'guest'}@guest.skyexecutive.com`,
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

  const inputClass =
    'w-full text-xs px-3 py-2.5 rounded-[6px] border border-[var(--line-gold)] bg-white text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 focus:border-2 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/18';
  const labelClass = 'block text-[11px] font-bold uppercase tracking-wider text-[var(--brown-gold)] mb-1 font-display';

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
            className="fixed inset-0 bg-[var(--navy-deep)]/80 backdrop-blur-xs"
          />

          {/* Split Card Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[6px] border border-[var(--gold)] bg-white shadow-[var(--shadow-bar)] z-10 my-auto grid grid-cols-1 md:grid-cols-12"
          >
            {/* Top Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--cream)] border border-[var(--line-gold)] text-[var(--navy-ink)] transition-all hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] cursor-pointer shadow-xs"
              aria-label="Close enquiry popup"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left Column: Navy Luxury Panel */}
            <div className="hidden md:flex md:col-span-5 bg-[var(--navy-deep)] text-[var(--on-navy)] p-6 flex-col justify-between relative overflow-hidden border-r border-[var(--line-gold-navy)]">
              <div className="relative z-10">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[var(--gold-bright)] shadow-[0_0_12px_rgba(212,162,76,0.35)] mb-3 bg-[#0B1F3F]">
                  <Image
                    src="/SE_Logo.jpeg"
                    alt={`${STRINGS.brand.name} official logo`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold-bright)] block mt-3 mb-1 font-display">
                  Executive Hotel • Lonikand, Pune
                </span>
                <h3 className="font-display text-2xl font-extrabold text-white uppercase leading-tight">
                  Book Your Stay With Us
                </h3>
                <p className="text-xs text-[var(--on-navy)]/85 mt-2 leading-relaxed">
                  Executive rooms with 24/7 dining, high-speed Wi-Fi, and personalized front desk support.
                </p>
              </div>

              {/* Room photo at bottom - sharp corners */}
              <div className="relative h-36 w-full rounded-none overflow-hidden border border-[var(--gold)] shadow-md mt-6 z-10">
                <Image
                  src="/images/rooms/sky_executive_room.webp"
                  alt="Executive Room at Hotel Sky Executive"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-bold font-display uppercase tracking-wider text-white">
                  Executive Room (Queen Bed)
                </div>
              </div>
            </div>

            {/* Right Column: Clean Booking Form */}
            <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between max-h-[85vh] overflow-y-auto bg-white">
              {submitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 flex flex-col items-center text-center space-y-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cream-deep)] text-[var(--gold)] shadow-xs">
                    <CheckCircle className="h-8 w-8 text-[var(--gold)]" />
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-[var(--navy-ink)] uppercase">
                    Enquiry Received!
                  </h3>

                  <p className="text-xs text-[var(--ink)] max-w-sm leading-relaxed">
                    Thank you, <strong className="text-[var(--navy-ink)]">{form.name}</strong>. Our front desk has received your request and will contact you directly to confirm your booking.
                  </p>

                  <div className="flex flex-col gap-2 w-full pt-2">
                    <a
                      href={`https://wa.me/919209397362?text=${encodeURIComponent(
                        `Hi Hotel Sky Executive Front Desk, I submitted a booking enquiry for ${form.roomPreference} (Dates: ${form.checkIn || 'flexible'} to ${form.checkOut || 'flexible'}). Name: ${form.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-gold w-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Instant Confirm on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="btn-secondary-cream w-full py-2.5 text-xs font-semibold cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="mb-2">
                    <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[var(--brown-gold)] font-display">
                      <Sparkles className="h-3 w-3 text-[var(--gold)]" />
                      <span>Direct Best Rate</span>
                    </div>
                    <h2 className="font-display text-xl font-extrabold text-[var(--navy-ink)] uppercase">
                      Book Your Stay
                    </h2>
                  </div>

                  {error && (
                    <div className="rounded-[6px] border border-[var(--red-spark)] bg-red-50 p-2 text-xs text-[var(--red-spark)]">
                      {error}
                    </div>
                  )}

                  {/* Check-In & Check-Out */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className={labelClass}>
                        Check In
                      </label>
                      <input
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => updateField('checkIn', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Check Out
                      </label>
                      <input
                        type="date"
                        value={form.checkOut}
                        onChange={(e) => updateField('checkOut', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Room & Guests */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className={labelClass}>
                        Room
                      </label>
                      <select
                        value={form.roomPreference}
                        onChange={(e) => updateField('roomPreference', e.target.value)}
                        className={`${inputClass} truncate`}
                      >
                        <option value="Executive Room">Executive Room</option>
                        <option value="Double Bed Room">Double Bed Room</option>
                        <option value="Executive Room + Extra Bed">Executive Room + Extra Bed</option>
                        <option value="Multiple Rooms">Multiple Rooms</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => updateField('guests', e.target.value)}
                        className={inputClass}
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
                      <label className={labelClass}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Full Name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Phone *
                      </label>
                      <div className="flex rounded-[6px] border border-[var(--line-gold)] overflow-hidden focus-within:border-2 focus-within:border-[var(--gold)] bg-white">
                        <span className="inline-flex items-center px-2.5 text-[11px] font-bold font-display bg-[var(--cream)] text-[var(--navy-ink)] border-r border-[var(--line-gold)]">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="Phone number"
                          className="flex-1 text-xs px-2.5 py-2 bg-white text-[var(--ink)] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="email@example.com (optional)"
                      className={inputClass}
                    />
                  </div>

                  {/* Remark / Message */}
                  <div>
                    <label className={labelClass}>
                      Special Requests
                    </label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Arrival time, extra bed, diet requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary-gold w-full py-3 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
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
