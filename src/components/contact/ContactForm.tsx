'use client';

import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { rooms } from '@/lib/content';

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
  roomPreference: '',
  guests: '1',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission — replace with actual API call
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border-light bg-white p-12 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-charcoal">
            Thank You!
          </h3>
          <p className="max-w-md text-slate-deep">
            We&apos;ve received your enquiry and will get back to you within 24 hours.
            For urgent queries, please call or WhatsApp us directly.
          </p>
          <CTAButton
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            variant="outline"
            className="mt-4"
            id="contact-send-another"
          >
            Send Another Enquiry
          </CTAButton>
        </div>
      </AnimatedSection>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-white px-4 py-3 text-charcoal placeholder:text-slate-medium/60 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';
  const labelClass = 'block text-sm font-medium text-charcoal mb-1.5';

  return (
    <AnimatedSection>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-border-light bg-white p-6 shadow-sm sm:p-8"
      >
        {/* Name + Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Dates */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-checkin" className={labelClass}>
              Check-in Date
            </label>
            <input
              id="contact-checkin"
              type="date"
              value={form.checkIn}
              onChange={(e) => update('checkIn', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-checkout" className={labelClass}>
              Check-out Date
            </label>
            <input
              id="contact-checkout"
              type="date"
              value={form.checkOut}
              onChange={(e) => update('checkOut', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Room + Guests */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-room" className={labelClass}>
              Room Preference
            </label>
            <select
              id="contact-room"
              value={form.roomPreference}
              onChange={(e) => update('roomPreference', e.target.value)}
              className={inputClass}
            >
              <option value="">No preference</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-guests" className={labelClass}>
              Number of Guests
            </label>
            <select
              id="contact-guests"
              value={form.guests}
              onChange={(e) => update('guests', e.target.value)}
              className={inputClass}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Tell us about your requirements, special requests, or questions..."
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <CTAButton type="submit" id="contact-submit" className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Enquiry
            </>
          )}
        </CTAButton>
      </form>
    </AnimatedSection>
  );
}
