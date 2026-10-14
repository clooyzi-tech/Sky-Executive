'use client';

import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Info } from '@/config/icons';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send your enquiry. Please try again.');
      }

      setSubmitting(false);
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitting(false);
      const message =
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred while submitting. Please try again.';
      setError(message);
    }
  };

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="flex flex-col items-center gap-4 rounded-[6px] border border-[var(--gold)] bg-white p-10 text-center shadow-[var(--shadow-card)] sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--cream-deep)] text-[var(--gold)]">
            <CheckCircle className="h-9 w-9 text-[var(--gold)]" />
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--navy-ink)] uppercase">
            {formStrings.successTitle}
          </h3>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[var(--ink)]">
            {formStrings.successMessage}
          </p>

          <div className="rounded-[6px] border border-[var(--line-gold)] bg-[var(--cream)] p-4 text-xs text-[var(--ink-muted)] max-w-md">
            <p>
              <strong className="text-[var(--brown-gold)]">Please Note:</strong> An enquiry is not an immediate reservation confirmation. Our reservations desk will verify room availability and provide confirmed pricing.
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="btn-primary-gold mt-2 cursor-pointer"
            id="contact-send-another"
          >
            {formStrings.sendAnotherBtn}
          </button>
        </div>
      </AnimatedSection>
    );
  }

  const inputClass =
    'h-[56px] w-full rounded-[6px] border border-[var(--line-gold)] bg-white px-4 text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 text-sm transition-all duration-200 focus:border-2 focus:border-[var(--gold)] focus:outline-none focus:ring-4 focus:ring-[var(--gold)]/18';
  const labelClass = 'block text-[13px] font-bold uppercase tracking-wider text-[var(--brown-gold)] mb-2 font-display';

  return (
    <AnimatedSection>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[6px] border border-[var(--gold)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-10"
        noValidate
      >
        {/* Error Alert Banner */}
        {error && (
          <div className="flex items-center gap-3 rounded-[6px] border border-[var(--red-spark)] bg-red-50 p-4 text-xs text-[var(--red-spark)]">
            <AlertCircle className="h-5 w-5 shrink-0 text-[var(--red-spark)]" />
            <span>{error}</span>
          </div>
        )}

        {/* Guest Name + Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              {formStrings.nameLabel} <span className="text-[var(--red-spark)]">{required}</span>
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
              {formStrings.emailLabel} <span className="text-[var(--red-spark)]">{required}</span>
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

        {/* Room Category */}
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
              Premium Room (Nature-Oriented View)
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
            className="w-full rounded-[6px] border border-[var(--line-gold)] bg-white p-4 text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 text-sm transition-all duration-200 focus:border-2 focus:border-[var(--gold)] focus:outline-none focus:ring-4 focus:ring-[var(--gold)]/18 resize-none"
          />
        </div>

        {/* Submission Disclaimer */}
        <div className="flex items-start gap-2.5 rounded-[6px] bg-[var(--cream)] p-4 text-xs text-[var(--ink-muted)] border border-[var(--line-gold)]">
          <Info className="h-4 w-4 shrink-0 text-[var(--gold)] mt-0.5" />
          <p>{formStrings.disclaimer}</p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            id="contact-submit"
            className="btn-primary-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{formStrings.submittingBtn}</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>{formStrings.submitBtn}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
}
