'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  id?: string;
  type?: 'button' | 'submit';
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30',
  secondary:
    'bg-cream text-charcoal hover:bg-cream-dark',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  ghost:
    'text-accent hover:bg-accent-muted',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  id,
  type = 'button',
}: CTAButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          id={id}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} id={id} type={type}>
      {children}
    </button>
  );
}
