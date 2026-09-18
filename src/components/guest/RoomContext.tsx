'use client';

import React, { createContext, useContext, useMemo } from 'react';

interface RoomContextType {
  roomId: string;
  hotelName: string;
  whatsappNumber: string;
  generateWhatsAppUrl: (service: string, quantity?: number, note?: string) => string;
  callReceptionUrl: string;
}

const RoomContext = createContext<RoomContextType | null>(null);

export function useRoom() {
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error('useRoom must be used within RoomProvider');
  return ctx;
}

interface RoomProviderProps {
  roomId: string;
  children: React.ReactNode;
}

export function RoomProvider({ roomId, children }: RoomProviderProps) {
  const whatsappNumber = '918007724646';
  const hotelName = 'liv.inn';
  const callReceptionUrl = 'tel:+918007724646';

  const generateWhatsAppUrl = useMemo(() => {
    return (service: string, quantity?: number, note?: string) => {
      const now = new Date();
      const time = now.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      let message = `🏨 ${hotelName} | Room ${roomId} | Service: ${service}`;
      if (quantity && quantity > 0) message += ` | Qty: ${quantity}`;
      if (note && note.trim()) message += ` | Note: ${note.trim()}`;
      message += ` | Time: ${time}`;

      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };
  }, [roomId]);

  const value = useMemo(
    () => ({
      roomId,
      hotelName,
      whatsappNumber,
      generateWhatsAppUrl,
      callReceptionUrl,
    }),
    [roomId, generateWhatsAppUrl]
  );

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}
