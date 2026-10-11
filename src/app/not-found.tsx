import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IMAGES } from '@/config/image';
import { STRINGS } from '@/config/strings';
import { Home, BedDouble, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | Hotel Sky Executive Pune',
  description: 'The requested page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 bg-background text-foreground text-center">
      <div className="relative mb-6 h-20 w-20 rounded-full border-2 border-[#C9A227] bg-black p-2 shadow-xl flex items-center justify-center">
        <Image
          src={IMAGES.brand.logo}
          alt={STRINGS.brand.logoAlt}
          fill
          className="object-contain p-1.5"
        />
      </div>

      <span className="text-xs uppercase tracking-widest text-[#B38E46] font-semibold mb-2">
        404 — Page Not Found
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Lost in Your Journey?
      </h1>

      <p className="max-w-md text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us guide you back to peaceful comfort.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B38E46] hover:bg-[#9E7A36] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
        >
          <Home className="h-4 w-4" />
          <span>Return to Home</span>
        </Link>

        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#DED8CC] hover:border-[#B38E46] bg-white hover:bg-cream text-foreground text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-95"
        >
          <BedDouble className="h-4 w-4 text-[#B38E46]" />
          <span>Explore Rooms</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-transparent hover:border-[#DED8CC] text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium transition-all"
        >
          <Phone className="h-4 w-4" />
          <span>Contact Front Desk</span>
        </Link>
      </div>
    </div>
  );
}
