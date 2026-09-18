import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest Portal | liv.inn — Boutique Hotel in Pune',
  description:
    'Welcome to liv.inn Guest Portal. Access Wi-Fi details, request services, explore nearby places, and contact reception — all from your phone.',
  robots: { index: false, follow: false },
};

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground safe-area-bottom">
      {children}
    </div>
  );
}

