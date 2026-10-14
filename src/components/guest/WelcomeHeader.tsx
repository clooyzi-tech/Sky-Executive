'use client';

import { motion } from 'framer-motion';
import { useRoom } from './RoomContext';

export default function WelcomeHeader() {
  const { roomId, hotelName } = useRoom();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal-surface to-charcoal-card p-6"
    >
      {/* Subtle gold accent glow */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/5 blur-2xl" />

      <div className="relative">
        {/* Hotel logo text */}
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
            <span className="text-sm font-bold text-accent-gold">L</span>
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold/80">
            {hotelName}
          </span>
        </div>

        {/* Welcome text */}
        <h1 className="mt-3 font-serif text-2xl font-semibold text-white">
          Welcome, Guest
        </h1>
        <p className="mt-1 text-sm text-white/60">
          We&apos;re delighted to have you. Enjoy your stay.
        </p>

        {/* Room badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-gold/70">
            Room
          </span>
          <span className="text-sm font-bold text-accent-gold">{roomId}</span>
        </div>
      </div>
    </motion.div>
  );
}
