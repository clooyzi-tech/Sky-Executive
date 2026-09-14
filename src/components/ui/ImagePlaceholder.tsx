import { cn } from '@/lib/utils';
import { PlaceholderImageIcon } from '@/config/icons';
import { IMAGES } from '@/config/image';

interface ImagePlaceholderProps {
  alt: string;
  src?: string;
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
  src,
  className,
  aspectRatio = 'video',
  icon,
}: ImagePlaceholderProps) {
  // If a valid image source exists, render the image
  if (src && src.trim().length > 0) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-xl bg-cream',
          aspects[aspectRatio],
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

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
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: IMAGES.patterns.accentDots,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-accent/40">
        {icon ?? <PlaceholderImageIcon className="h-10 w-10 stroke-1" />}
        <span className="max-w-[200px] text-center text-xs font-medium uppercase tracking-wider">
          {alt}
        </span>
      </div>
    </div>
  );
}
