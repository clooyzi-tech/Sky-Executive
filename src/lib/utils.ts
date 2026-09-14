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
  const base = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format phone number as a tel: link.
 */
export function phoneUrl(phone?: string): string {
  const number = (phone ?? contact.phone).replace(/[^0-9+]/g, '');
  return `tel:${number}`;
}

/**
 * Format the full address as a single string.
 */
export function formatAddress(): string {
  const a = contact.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}, ${a.country}`;
}
