'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Do not show on guest portal or dedicated chat page
    if (pathname?.startsWith('/guest') || pathname === '/chat') {
      return;
    }

    // Check if user has already seen the popup in this session
    try {
      const hasSeen = sessionStorage.getItem('livinn_enquiry_popup_seen');
      if (!hasSeen) {
        // Show after a subtle delay for optimal initial page rendering
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem('livinn_enquiry_popup_seen', 'true');
        }, 1200);

        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback for private browsing if sessionStorage is restricted
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
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

    // Validation
    if (!form.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!form.phone.trim()) {
      setError('Please enter your contact phone number.');
      return;
    }
    if (form.checkIn && form.checkOut && new Date(form.checkOut) < new Date(form.checkIn)) {
      setError('Check-out date must be on or after the check-in date.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: `+91 ${form.phone.trim()}`,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          roomPreference: form.roomPreference,
          guests: form.guests,
          message: form.message.trim() || 'Direct popup enquiry from website visitor.',
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#E5DEC9] bg-[#FAF7F2] shadow-2xl z-10 my-auto"
          >
            {/* Top Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-[#E8DFC8] text-[#7E7465] transition-all hover:bg-[#EAE2D2] hover:text-[#2A241C] cursor-pointer shadow-2xs"
              aria-label="Close enquiry popup"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#2A241C] via-[#3B3428] to-[#2A241C] px-5 py-4 text-white">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#DFB756] mb-1">
                <Sparkles className="h-3 w-3" />
                <span>Direct Booking Enquiry</span>
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
                Plan Your Stay at liv.inn Pune
              </h2>
              <p className="text-[11px] sm:text-xs text-white/75 mt-0.5 leading-snug">
                Connect with our front desk for availability, direct rates & instant support.
              </p>
            </div>

            <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 flex flex-col items-center text-center space-y-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-2xs">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2A241C]">
                    Enquiry Received!
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7E7465] max-w-sm leading-relaxed">
                    Thank you, <strong className="text-[#2A241C]">{form.name}</strong>. Our front desk has received your request at <span className="font-semibold text-[#A67C37]">help.livinn@gmail.com</span> and will respond to you promptly.
                  </p>

                  <div className="rounded-xl border border-[#E8DFC8] bg-white p-3 text-[11px] text-[#7E7465] max-w-sm">
                    <p>
                      <strong>Need immediate confirmation?</strong> Connect with our 24/7 reception desk on WhatsApp:
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xs pt-2">
                    <a
                      href={`https://wa.me/918007724646?text=${encodeURIComponent(
                        `Hi liv.inn Reception, I submitted an enquiry for ${form.roomPreference || 'stay'} (Dates: ${form.checkIn || 'flexible'} to ${form.checkOut || 'flexible'}). Name: ${form.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="py-2.5 px-4 rounded-full border border-[#DCD3C3] bg-white text-[#2A241C] hover:bg-[#F5EFE4] text-xs font-semibold transition-all cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700 leading-snug">
                      {error}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#9E9180]" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Phone Number *
                      </label>
                      <div className="flex rounded-xl border border-[#DCD3C3] overflow-hidden focus-within:border-[#B38E46] bg-white">
                        <span className="inline-flex items-center px-2 text-[10.5px] font-semibold bg-[#F5EFE4] text-[#6E6454] border-r border-[#DCD3C3]">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="98765 43210"
                          className="flex-1 text-xs px-2.5 py-2 bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Room */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#9E9180]" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="name@example.com"
                          className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Room Preference
                      </label>
                      <select
                        value={form.roomPreference}
                        onChange={(e) => updateField('roomPreference', e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] transition-colors"
                      >
                        <option value="Double Bed Room">Double Bed Room (Nature View)</option>
                        <option value="Double Bed Room + Extra Bed">Double Bed Room + Extra Bed</option>
                        <option value="Multiple Rooms Group Stay">Multiple Rooms / Group Stay</option>
                      </select>
                    </div>
                  </div>

                  {/* Check-In & Check-Out */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Check-in Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[#9E9180]" />
                        <input
                          type="date"
                          value={form.checkIn}
                          onChange={(e) => updateField('checkIn', e.target.value)}
                          className="w-full text-[11px] pl-7 pr-2 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                        Check-out Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[#9E9180]" />
                        <input
                          type="date"
                          value={form.checkOut}
                          onChange={(e) => updateField('checkOut', e.target.value)}
                          className="w-full text-[11px] pl-7 pr-2 py-1.5 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[10.5px] font-semibold text-[#2A241C] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Let us know your arrival time, number of guests, or dietary preferences..."
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#DCD3C3] bg-white focus:outline-none focus:border-[#B38E46] resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust badge */}
                  <p className="text-[10px] text-center text-[#9E9180] pt-0.5">
                    🔒 Best Direct Rates Guaranteed • 24/7 Front Desk Support • Pune
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
