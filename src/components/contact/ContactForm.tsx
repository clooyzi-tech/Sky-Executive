'use client';

import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Info } from '@/config/icons';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';
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
  roomPreference: 'Premium Room',
  guests: '2',
  message: '',
};

export default function ContactForm() {
  const { form: formStrings } = STRINGS.contactPage;
  const { required } = STRINGS.common.labels;

  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setError(null);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
    if (form.checkIn && form.checkOut && new Date(form.checkOut) < new Date(form.checkIn)) {
      setError('Check-out date must be on or after the check-in date.');
      return;
    }

    setSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((res) => setTimeout(res, 1000));
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      setError('An unexpected error occurred while submitting. Please try again.');
    }
  };

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-border-gold bg-white p-10 text-center shadow-lg sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle className="h-9 w-9" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            {formStrings.successTitle}
          </h3>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-deep">
            {formStrings.successMessage}
          </p>

          <div className="rounded-xl border border-border-light bg-cream/50 p-4 text-xs text-slate-medium max-w-md">
            <p>
              <strong>Please Note:</strong> An enquiry is not an immediate reservation confirmation. Our reservations desk will verify room availability and provide confirmed pricing.
            </p>
          </div>

          <CTAButton
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            variant="outline"
            className="mt-2"
            id="contact-send-another"
          >
            {formStrings.sendAnotherBtn}
          </CTAButton>
        </div>
      </AnimatedSection>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-charcoal placeholder:text-slate-medium/60 text-sm transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5';

  return (
    <AnimatedSection>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-border bg-white p-6 shadow-xs sm:p-10"
        noValidate
      >
        {/* Error Alert Banner */}
        {error && (
          <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Guest Name + Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              {formStrings.nameLabel} <span className="text-red-500">{required}</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder={formStrings.namePlaceholder}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              {formStrings.emailLabel} <span className="text-red-500">{required}</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder={formStrings.emailPlaceholder}
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone + Guests */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              {formStrings.phoneLabel}
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder={formStrings.phonePlaceholder}
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-guests" className={labelClass}>
              {formStrings.guestsLabel}
            </label>
            <select
              id="contact-guests"
              value={form.guests}
              onChange={(e) => update('guests', e.target.value)}
              className={inputClass}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? formStrings.guestSingular : formStrings.guestPlural}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Dates */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-checkin" className={labelClass}>
              {formStrings.checkInLabel}
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
              {formStrings.checkOutLabel}
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

        {/* Room Category (Static verified selection) */}
        <div>
          <label htmlFor="contact-room" className={labelClass}>
            {formStrings.roomPrefLabel}
          </label>
          <select
            id="contact-room"
            value={form.roomPreference}
            onChange={(e) => update('roomPreference', e.target.value)}
            className={inputClass}
          >
            <option value="Premium Room">
              Premium Room (Nature-Oriented View • 25 Rooms Total)
            </option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            {formStrings.messageLabel}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder={formStrings.messagePlaceholder}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submission Disclaimer */}
        <div className="flex items-start gap-2.5 rounded-xl bg-cream/50 p-3.5 text-xs text-slate-medium border border-border-light">
          <Info className="h-4 w-4 shrink-0 text-accent mt-0.5" />
          <p>{formStrings.disclaimer}</p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <CTAButton
            type="submit"
            id="contact-submit"
            className="w-full sm:w-auto bg-accent text-charcoal font-semibold hover:bg-accent-light"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {formStrings.submittingBtn}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {formStrings.submitBtn}
              </>
            )}
          </CTAButton>
        </div>
      </form>
    </AnimatedSection>
  );
}
