import type { MetadataRoute } from 'next';
import { STRINGS } from '@/config/strings';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: STRINGS.brand.name,
    short_name: 'Sky Executive',
    description: STRINGS.brand.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1F3F',
    theme_color: '#0B1F3F',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
