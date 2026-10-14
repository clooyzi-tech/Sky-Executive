import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Home, BedDouble, Phone } from 'lucide-react';
import GoldRuleDot from '@/components/ui/GoldRuleDot';

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
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 bg-[var(--cream)] text-[var(--ink)] text-center">
      <div className="mb-4">
        <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-[var(--gold)] shadow-[0_6px_20px_rgba(212,162,76,0.25)] mx-auto bg-[#0B1F3F]">
          <Image
            src="/SE_Logo.jpeg"
            alt="Hotel Sky Executive logo"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      </div>

      <span className="text-xs uppercase tracking-widest text-[var(--brown-gold)] font-bold font-display mb-2">
        404 — Page Not Found
      </span>

      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy-ink)] uppercase mb-3">
        Lost in Your Journey?
      </h1>

      <div className="flex justify-center mb-4">
        <GoldRuleDot width="240px" />
      </div>

      <p className="max-w-md text-sm sm:text-base text-[var(--ink)] mb-8 leading-relaxed">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us guide you back to peaceful comfort.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="btn-primary-gold inline-flex items-center gap-2 text-xs sm:text-sm"
        >
          <Home className="h-4 w-4" />
          <span>Return to Home</span>
        </Link>

        <Link
          href="/rooms"
          className="btn-secondary-cream inline-flex items-center gap-2 text-xs sm:text-sm"
        >
          <BedDouble className="h-4 w-4 text-[var(--gold)]" />
          <span>Explore Rooms</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--navy-ink)] hover:text-[var(--gold)] text-xs sm:text-sm font-bold uppercase tracking-wider font-display transition-all"
        >
          <Phone className="h-4 w-4" />
          <span>Contact Front Desk</span>
        </Link>
      </div>
    </div>
  );
}
