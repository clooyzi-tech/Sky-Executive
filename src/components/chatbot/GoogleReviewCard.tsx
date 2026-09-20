import React, { useState } from 'react';
import { Star, Share2, Smile, Meh, Frown } from 'lucide-react';
import { THANK_YOU } from '@/config/strings';

function GoogleLogoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

export default function GoogleReviewCard() {
  const [rating, setRating] = useState<number>(5);
  const [reaction, setReaction] = useState<'excellent' | 'good' | 'improvement'>('excellent');

  return (
    <div className="p-4 rounded-xl bg-white border-[1.5px] border-[#7C3AED] mb-5 shadow-[0_4px_12px_rgba(124,58,237,0.06)] text-center relative overflow-hidden">
      <p className="text-[10px] font-extrabold text-[#1e234c] tracking-wide mb-1">
        {THANK_YOU.googleReviewBadge}
      </p>
      <h3 className="text-xl font-extrabold text-[#1e234c] mb-0.5">
        {THANK_YOU.googleReviewTitle}
      </h3>
      <p className="text-[10px] text-[#7E7465] mb-3">
        {THANK_YOU.googleReviewSubtitle}
      </p>

      {/* Google Logo with sparkles */}
      <div className="relative flex justify-center items-center mb-4 mt-2">
        <div className="bg-white rounded-full p-2.5 shadow-sm border border-gray-100 relative">
          <GoogleLogoIcon className="w-7 h-7" />
          {/* Sparkles */}
          <svg className="absolute -top-2 -right-4 w-6 h-6 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/>
          </svg>
          <svg className="absolute top-4 -right-5 w-4 h-4 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/>
          </svg>
        </div>
      </div>

      <p className="text-[11px] font-bold text-[#1e234c] mb-2">Rate Your Stay</p>
      
      {/* 5 Stars */}
      <div className="flex justify-center items-center gap-1.5 mb-2 relative">
        {/* Left lines */}
        <div className="flex flex-col gap-1 mr-1">
          <div className="w-3 h-[1.5px] bg-[#F59E0B] rotate-45 transform origin-right"></div>
          <div className="w-4 h-[1.5px] bg-[#F59E0B]"></div>
          <div className="w-3 h-[1.5px] bg-[#F59E0B] -rotate-45 transform origin-right"></div>
        </div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="cursor-pointer transition-transform hover:scale-110 p-0.5"
          >
            <Star
              className={`w-7 h-7 ${
                star <= rating
                  ? 'fill-[#F59E0B] text-[#F59E0B]'
                  : 'fill-transparent text-[#E5E7EB]'
              }`}
            />
          </button>
        ))}
        {/* Right lines */}
        <div className="flex flex-col gap-1 ml-1">
          <div className="w-3 h-[1.5px] bg-[#F59E0B] -rotate-45 transform origin-left"></div>
          <div className="w-4 h-[1.5px] bg-[#F59E0B]"></div>
          <div className="w-3 h-[1.5px] bg-[#F59E0B] rotate-45 transform origin-left"></div>
        </div>
      </div>
      
      <p className="text-[9.5px] text-[#7E7465] mb-5">Your feedback means a lot to us.</p>

      {/* Reactions */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {THANK_YOU.reactions.map((item) => {
            const isSelected = reaction === item.id;
            return (
            <div
              key={item.id}
              onClick={() => setReaction(item.id as typeof reaction)}
              className={`py-2 px-1 rounded-xl border-[1.5px] flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#FFF8E7] border-[#F59E0B]'
                  : 'bg-white border-[#F3F4F6] hover:border-[#E5E7EB]'
              }`}
            >
              <span className="flex justify-center items-center relative mb-2">
                {item.id === 'excellent' && <Smile className={`w-8 h-8 ${isSelected ? 'text-[#F59E0B]' : 'text-gray-400'}`} />}
                {item.id === 'good' && <Meh className={`w-8 h-8 ${isSelected ? 'text-[#F59E0B]' : 'text-gray-400'}`} />}
                {item.id === 'improvement' && <Frown className={`w-8 h-8 ${isSelected ? 'text-[#F59E0B]' : 'text-gray-400'}`} />}
                
                {isSelected && item.id === 'excellent' && (
                  <svg className="absolute -top-1 -right-1 w-4 h-4 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/>
                  </svg>
                )}
              </span>
              <span className="text-[10px] font-extrabold text-[#1e234c] block leading-tight">
                {item.title}
              </span>
              <span className="text-[8px] text-[#9CA3AF] block mt-0.5 leading-tight">
                {item.subtitle}
              </span>
            </div>
            );
        })}
      </div>

      {/* Google Button */}
      <a
        href={THANK_YOU.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-full bg-[#A67C37] hover:bg-[#8C6D2D] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mb-2.5"
      >
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
          <GoogleLogoIcon className="w-3.5 h-3.5" />
        </div>
        <span>{THANK_YOU.googleReviewButton}</span>
      </a>
      

    </div>
  );
}
