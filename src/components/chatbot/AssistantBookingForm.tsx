'use client';

import React, { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, X, AlertCircle, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import { BRAND, ASSISTANT, BOOKING_FORM } from '@/config/strings';

// ─── LocalStorage Key ────────────────────────────────────────────────────────
const LS_KEY = 'livinn_assistant_guest';

interface SavedGuest {
  name: string;
  phone: string;
  email: string;
  remark: string;
}

function loadFromStorage(): SavedGuest {
  if (typeof window === 'undefined') return { name: '', phone: '', email: '', remark: '' };
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as SavedGuest;
  } catch {}
  return { name: '', phone: '', email: '', remark: '' };
}

function saveToStorage(data: SavedGuest) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch {}
}

export interface AssistantBookingFormProps {
  previousTab?: string;
  selectedServices: Record<string, boolean> | string[];
  onBack: () => void;
  onSubmitSuccess: () => void;
  isPopup?: boolean;
  onClose?: () => void;
  roomId?: string;
  roomKey?: string;
}

export default function AssistantBookingForm({
  previousTab = 'home', selectedServices, onBack, onSubmitSuccess, isPopup = false, onClose, roomId, roomKey
}: AssistantBookingFormProps) {

  const [name,         setName]         = useState('');
  const [phone,        setPhone]        = useState('');
  const [email,        setEmail]        = useState('');
  const [remark,       setRemark]       = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors,       setErrors]       = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved.name)   setName(saved.name);
    if (saved.phone)  setPhone(saved.phone);
    if (saved.email)  setEmail(saved.email);
    if (saved.remark) setRemark(saved.remark);
  }, []);

  const selectedList = Array.isArray(selectedServices) ? selectedServices : Object.keys(selectedServices).filter((k) => selectedServices[k]);
  const phoneDigits  = phone.replace(/\D/g, '');
  const phoneValid   = phoneDigits.length === 10;

  const validate = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim())       newErrors.name  = BOOKING_FORM.nameErrorRequired;
    if (!phone.trim())      newErrors.phone = BOOKING_FORM.phoneErrorRequired;
    else if (!phoneValid)   newErrors.phone = BOOKING_FORM.phoneErrorLength;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange  = (v: string) => { setName(v);  if (errors.name)  setErrors((p) => ({ ...p, name:  undefined })); };
  const handlePhoneChange = (v: string) => { const c = v.replace(/[^\d]/g, '').slice(0, 10); setPhone(c); if (errors.phone) setErrors((p) => ({ ...p, phone: undefined })); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    saveToStorage({ name: name.trim(), phone: phone.trim(), email: email.trim(), remark: remark.trim() });
    setIsSubmitting(true);
    const serviceSummary    = selectedList.length > 0 ? selectedList.join(', ') : 'General Assistance';
    const formattedCategory = previousTab ? previousTab.toUpperCase() : 'ASSISTANT';
    const roomInfo = roomId ? `Room: ${roomId} (Key: ${roomKey})` : 'Unknown Room';
    const fullMessage       = `[Chatbot Assistant Request - ${formattedCategory}]\n${roomInfo}\n\nSelected Services:\n${serviceSummary}\n\nGuest Remarks:\n${remark.trim() || 'None'}`;
    try {
      await fetch('/api/assistant', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: name.trim(), 
          phone: `+91 ${phone.trim()}`, 
          email: email.trim() || `${phoneDigits || 'guest'}@guest.hotelskyexecutive.in`, 
          roomId,
          roomKey,
          services: serviceSummary,
          message: fullMessage 
        }),
      });
    } catch (err) { console.error('Error submitting assistant request:', err); }
    finally { setIsSubmitting(false); onSubmitSuccess(); }
  };

  const inputBase = 'w-full text-sm px-4 py-3.5 rounded-xl border bg-white focus:outline-none transition-all duration-200 placeholder:text-[#B8AB98]';
  const inputOk   = `${inputBase} border-[#DCD3C3] focus:border-[#B38E46] focus:ring-2 focus:ring-[#B38E46]/15`;
  const inputBad  = `${inputBase} border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 bg-red-50/30`;

  return (
    <motion.div key="form-overlay" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ duration: 0.22, ease: 'easeOut' }} className="absolute inset-0 z-50 flex flex-col bg-[#FAF7F2] overflow-hidden">

      {/* FIXED HEADER */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#EBE4D5] bg-white shadow-sm shrink-0 z-10">
        <div className="flex flex-col">
          <Link href="/" className="group inline-flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#2A241C] group-hover:text-[#A67C37] transition-colors leading-none">{BRAND.name}</span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-widest text-[#9C8F7E] font-medium uppercase mt-0.5">{BRAND.tagline}</span>
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="text-right">
            <h4 className="text-xs font-semibold text-[#2A241C] leading-tight">{ASSISTANT.name}</h4>
            <p className="text-[10px] text-[#8C7E6D]">{ASSISTANT.role}</p>
          </div>
          <a href={`tel:${BRAND.phoneNumber}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#A67C37] transition-all hover:bg-[#A67C37] hover:text-white shadow-sm" title={ASSISTANT.callTitle}>
            <Phone className="h-3.5 w-3.5" />
          </a>
          {isPopup && onClose && (
            <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#7E7465] transition-all hover:bg-[#EAE2D2] hover:text-[#2A241C] cursor-pointer" aria-label={ASSISTANT.closeLabel}>
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </header>

      {/* SCROLLABLE BODY */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        <form id="assistant-booking-form" onSubmit={handleSubmit} noValidate>
          <div className="px-4 pt-5 pb-3 space-y-4">

            {/* Title */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="h-px w-10 bg-[#B38E46]" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67C37]">{BOOKING_FORM.sectionTitle}</h2>
                <span className="h-px w-10 bg-[#B38E46]" />
              </div>
              <p className="text-[11px] text-[#7E7465] leading-relaxed">{BOOKING_FORM.sectionSubtitle}</p>
            </div>

            {/* Selected services chips */}
            {selectedList.length > 0 && (
              <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#E8DFC8]">
                <span className="text-[9px] font-bold text-[#8C6D2D] uppercase tracking-wider block mb-2">{BOOKING_FORM.selectedRequestsLabel}</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedList.map((service) => (
                    <span key={service} className="inline-flex items-center gap-1 text-[10.5px] bg-white border border-[#E0D5C1] text-[#2A241C] px-2.5 py-1 rounded-lg font-medium shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-[#B38E46] shrink-0" />{service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="ab-name" className="flex items-center gap-1.5 text-xs font-semibold text-[#2A241C] mb-1.5">
                <User className="w-3.5 h-3.5 text-[#B38E46]" /><span>{BOOKING_FORM.nameLabel}</span>
                <span className="text-red-500 text-[10px] font-medium">{BOOKING_FORM.nameRequired}</span>
              </label>
              <input id="ab-name" type="text" value={name} onChange={(e) => handleNameChange(e.target.value)} placeholder={BOOKING_FORM.namePlaceholder} autoComplete="name" className={errors.name ? inputBad : inputOk} />
              {errors.name && <div className="flex items-center gap-1.5 mt-1.5"><AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /><span className="text-[10.5px] text-red-600 font-medium">{errors.name}</span></div>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="ab-phone" className="flex items-center gap-1.5 text-xs font-semibold text-[#2A241C] mb-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B38E46]" /><span>{BOOKING_FORM.phoneLabel}</span>
                <span className="text-red-500 text-[10px] font-medium">{BOOKING_FORM.phoneRequired}</span>
              </label>
              <div className={`flex rounded-xl border overflow-hidden transition-all duration-200 ${errors.phone ? 'border-red-400 ring-2 ring-red-400/20' : phoneValid ? 'border-emerald-400 ring-1 ring-emerald-400/20' : 'border-[#DCD3C3] focus-within:border-[#B38E46] focus-within:ring-2 focus-within:ring-[#B38E46]/15'}`}>
                <span className="inline-flex items-center gap-1 px-3.5 text-sm font-semibold bg-[#F5EFE4] text-[#6E6454] border-r border-[#DCD3C3] shrink-0 leading-none">{BOOKING_FORM.phonePrefix}</span>
                <input id="ab-phone" type="tel" inputMode="numeric" maxLength={10} value={phone} onChange={(e) => handlePhoneChange(e.target.value)} placeholder={BOOKING_FORM.phonePlaceholder} autoComplete="tel-national" className="flex-1 text-sm px-3.5 py-3.5 bg-white focus:outline-none min-w-0 placeholder:text-[#B8AB98]" />
              </div>
              {errors.phone ? (
                <div className="flex items-center gap-1.5 mt-1.5"><AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /><span className="text-[10.5px] text-red-600 font-medium">{errors.phone}</span></div>
              ) : phoneValid ? (
                <div className="flex items-center gap-1.5 mt-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /><span className="text-[10.5px] text-emerald-600 font-medium">{BOOKING_FORM.phoneValidHint}</span></div>
              ) : phone.length > 0 ? (
                <div className="flex items-center gap-1.5 mt-1.5"><span className="text-[10px] text-[#9E9180]">{BOOKING_FORM.phoneProgressHint(phoneDigits.length)}</span></div>
              ) : null}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="ab-email" className="flex items-center gap-1.5 text-xs font-semibold text-[#2A241C] mb-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B38E46]" /><span>{BOOKING_FORM.emailLabel}</span>
                <span className="text-[#9E9180] text-[10px] font-normal">{BOOKING_FORM.emailOptional}</span>
              </label>
              <input id="ab-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={BOOKING_FORM.emailPlaceholder} autoComplete="email" className={inputOk} />
            </div>

            {/* Remark */}
            <div>
              <label htmlFor="ab-remark" className="flex items-center gap-1.5 text-xs font-semibold text-[#2A241C] mb-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#B38E46]" /><span>{BOOKING_FORM.remarkLabel}</span>
                <span className="text-[#9E9180] text-[10px] font-normal">{BOOKING_FORM.remarkOptional}</span>
              </label>
              <textarea id="ab-remark" rows={3} value={remark} onChange={(e) => setRemark(e.target.value)} placeholder={BOOKING_FORM.remarkPlaceholder} className={`${inputOk} resize-none leading-relaxed`} />
            </div>

          </div>
        </form>
      </div>

      {/* FIXED BOTTOM BAR */}
      <div className="shrink-0 border-t border-[#EBE4D5] bg-[#FAF7F2] px-4 pt-3 pb-2 space-y-2">
        <button type="submit" form="assistant-booking-form" disabled={isSubmitting} className="w-full py-3.5 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {isSubmitting ? (<><svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>{BOOKING_FORM.submittingButtonLabel}</>) : BOOKING_FORM.submitButtonLabel}
        </button>
        <button type="button" onClick={onBack} className="w-full py-2.5 rounded-full border border-[#E0D5C1] bg-white text-[#7E7465] hover:text-[#2A241C] hover:bg-[#FAF5EC] text-[11px] font-medium cursor-pointer transition-all">
          {BOOKING_FORM.backButtonPrefix} {previousTab.charAt(0).toUpperCase() + previousTab.slice(1)}
        </button>
        <div className="text-center py-1">
          <span className="text-[9px] text-[#B8AB98] tracking-wide">{BRAND.developerBy} </span>
          <span className="text-[9px] font-bold text-[#A67C37]">{BRAND.developer}</span>
        </div>
      </div>

    </motion.div>
  );
}