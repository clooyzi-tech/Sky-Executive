import type { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const routes = [
    '',
    '/about',
    '/rooms',
    '/gallery',
    '/location',
    '/contact',
    '/guest-information',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/rooms' ? 0.9 : 0.7,
  }));
}
