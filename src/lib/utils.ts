import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { contact } from './content';

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Build a WhatsApp URL with an optional pre-filled message.
 */
export function whatsappUrl(message?: string): string {
  const cleanNumber = (contact.whatsapp || '').replace(/[^0-9]/g, '');
  if (!cleanNumber) {
    // If WhatsApp number is pending confirmation, redirect to contact/enquiry
    return '/contact';
  }
  const base = `https://wa.me/${cleanNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format phone number as a tel: link.
 */
export function phoneUrl(phone?: string): string {
  const raw = phone ?? contact.phone;
  const digits = raw.replace(/[^0-9+]/g, '');
  if (!digits || digits === '+91' || digits.length < 8) {
    return '/contact';
  }
  return `tel:${digits}`;
}

/**
 * Format the display address for Pune property.
 */
export function formatAddress(): string {
  const a = contact.address;
  return a.fullAddressDisplay;
}
