import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  icon?: React.ReactNode;
}

const aspects = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[2/1]',
};

export default function ImagePlaceholder({
  alt,
  className,
  aspectRatio = 'video',
  icon,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream to-cream-dark',
        aspects[aspectRatio],
        className
      )}
      role="img"
      aria-label={alt}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }} />
      <div className="relative flex flex-col items-center gap-3 text-accent/40">
        {icon ?? (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
        <span className="max-w-[200px] text-center text-xs font-medium uppercase tracking-wider">
          {alt}
        </span>
      </div>
    </div>
  );
}
