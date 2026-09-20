'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';
import LivinnAssistant from './LivinnAssistant';
import { ROOM_KEYS } from '@/config/roomKeys';

function StandaloneChatInner() {
  const searchParams = useSearchParams();
  const roomKey = searchParams.get('key');

  const roomId = roomKey ? ROOM_KEYS[roomKey] : undefined;

  if (!roomId || !roomKey) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 border border-red-100">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-xl font-bold text-[#1e234c] mb-2 font-serif">Invalid Room Access</h2>
        <p className="text-sm text-[#7E7465] mb-8">
          The room key provided is invalid or missing. Please scan the QR code located in your room to access the assistant.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-sm font-semibold shadow-sm transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Return to Home Page
        </Link>
      </div>
    );
  }

  return <LivinnAssistant isPopup={false} roomId={roomId} roomKey={roomKey} />;
}

export default function StandaloneChat() {
  return (
    <div className="w-full max-w-[430px] h-[100dvh] sm:h-[820px] sm:max-h-[92vh] flex flex-col overflow-hidden sm:rounded-3xl border border-[#E5DEC9] shadow-2xl bg-[#FAF7F2]">
      <Suspense fallback={<div className="flex-1 flex items-center justify-center text-[#B38E46]">Loading Assistant...</div>}>
        <StandaloneChatInner />
      </Suspense>
    </div>
  );
}
