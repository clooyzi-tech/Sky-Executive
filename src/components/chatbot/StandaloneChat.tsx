'use client';

import React from 'react';
import LivinnAssistant from './LivinnAssistant';

export default function StandaloneChat() {
  return (
    <div className="w-full max-w-[430px] h-[100dvh] sm:h-[820px] sm:max-h-[92vh] flex flex-col overflow-hidden sm:rounded-3xl border border-[#E5DEC9] shadow-2xl bg-[#FAF7F2]">
      <LivinnAssistant isPopup={false} />
    </div>
  );
}
