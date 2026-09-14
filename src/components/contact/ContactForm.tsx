'use client';

import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from '@/config/icons';
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
  roomPreference: '',
  guests: '1',
  message: '',
};

export default function ContactForm() {
  const { form: formStrings } = STRINGS.contactPage;
  const { list: roomsList } = STRINGS.rooms;
  const { required } = STRINGS.common.labels;

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
            {formStrings.successTitle}
          </h3>
          <p className="max-w-md text-slate-deep">
            {formStrings.successMessage}
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
            {formStrings.sendAnotherBtn}
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

        {/* Phone */}
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

        {/* Dates */}
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

        {/* Room + Guests */}
        <div className="grid gap-6 sm:grid-cols-2">
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
              <option value="">{formStrings.noPrefOption}</option>
              {roomsList.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
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

        {/* Submit */}
        <CTAButton type="submit" id="contact-submit" className="w-full sm:w-auto">
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
      </form>
    </AnimatedSection>
  );
}
