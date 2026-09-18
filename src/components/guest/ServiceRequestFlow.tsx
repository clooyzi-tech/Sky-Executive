'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, MessageCircle, CheckCircle, Phone } from 'lucide-react';
import { useRoom } from './RoomContext';

interface ServiceRequestFlowProps {
  service: {
    id: string;
    name: string;
    description: string;
    hasQuantity: boolean;
    defaultQuantity?: number;
    maxQuantity?: number;
    hasNote: boolean;
  };
  onBack: () => void;
}

export default function ServiceRequestFlow({ service, onBack }: ServiceRequestFlowProps) {
  const { generateWhatsAppUrl, callReceptionUrl, roomId } = useRoom();
  const [quantity, setQuantity] = useState(service.defaultQuantity || 1);
  const [note, setNote] = useState('');
  const [step, setStep] = useState<'configure' | 'confirm'>('configure');

  const maxQty = service.maxQuantity || 5;

  const handleConfirm = () => {
    setStep('confirm');
  };

  const handleSendWhatsApp = () => {
    const url = generateWhatsAppUrl(
      service.name,
      service.hasQuantity ? quantity : undefined,
      note || undefined
    );
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-medium text-slate-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </button>

      {step === 'configure' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border-light bg-white p-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
          <p className="mt-1 text-xs text-slate-medium">{service.description}</p>

          {/* Quantity Selector */}
          {service.hasQuantity && (
            <div className="mt-5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-medium">
                Quantity
              </label>
              <div className="mt-2 flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-cream transition-all disabled:opacity-40 active:scale-95"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-[2rem] text-center text-xl font-bold text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(maxQty, quantity + 1))}
                  disabled={quantity >= maxQty}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-cream transition-all disabled:opacity-40 active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Quick Note Presets & Input */}
          {service.hasNote && (
            <div className="mt-5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-medium">
                Quick Note (Tap to select)
              </label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[
                  'Deliver immediately',
                  'Leave outside room',
                  'Call before arriving',
                  'Fresh replacement',
                  'At your earliest',
                ].map((preset) => {
                  const isSelected = note === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setNote(isSelected ? '' : preset)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        isSelected
                          ? 'border border-accent bg-accent text-charcoal font-semibold'
                          : 'border border-border-light bg-cream/70 text-slate-deep hover:bg-cream active:scale-95'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {preset}
                    </button>
                  );
                })}
              </div>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Or type custom instructions (optional)..."
                rows={2}
                className="mt-2.5 w-full resize-none rounded-xl border border-border-light bg-cream/40 px-3.5 py-2.5 text-xs text-foreground placeholder:text-slate-medium/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
              />
            </div>
          )}

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.98]"
          >
            <CheckCircle className="h-4 w-4" />
            Proceed to Request
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-border-light bg-white p-5 shadow-sm"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>

          <h3 className="text-lg font-semibold text-foreground">Confirm Your Request</h3>
          <p className="mt-1 text-xs text-slate-medium">
            Review your request and send it to reception via WhatsApp.
          </p>

          {/* Summary */}
          <div className="mt-4 space-y-2 rounded-xl bg-cream/60 p-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-medium">Room</span>
              <span className="font-semibold text-foreground">{roomId}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-medium">Service</span>
              <span className="font-semibold text-foreground">{service.name}</span>
            </div>
            {service.hasQuantity && (
              <div className="flex justify-between text-xs">
                <span className="text-slate-medium">Quantity</span>
                <span className="font-semibold text-foreground">{quantity}</span>
              </div>
            )}
            {note && (
              <div className="flex justify-between text-xs">
                <span className="text-slate-medium">Note</span>
                <span className="max-w-[60%] text-right font-semibold text-foreground">
                  {note}
                </span>
              </div>
            )}
          </div>

          {/* WhatsApp Send Button */}
          <button
            onClick={handleSendWhatsApp}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Send via WhatsApp
          </button>

          {/* Direct Call Option */}
          <a
            href={callReceptionUrl}
            className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-charcoal bg-white py-2.5 text-center text-xs font-semibold text-charcoal transition-all active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            Or Call Front Desk Directly
          </a>

          {/* Edit */}
          <button
            onClick={() => setStep('configure')}
            className="mt-2 w-full rounded-xl border border-border-light bg-white py-2 text-center text-xs font-medium text-slate-medium transition-all active:scale-[0.98]"
          >
            Edit Request
          </button>
        </motion.div>
      )}
    </div>
  );
}
