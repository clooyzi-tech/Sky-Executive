import type { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const entries: {
    route: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  }[] = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/rooms', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/location', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/gallery', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/guest-information', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/policies', priority: 0.5, changeFrequency: 'yearly' },
    { route: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.5, changeFrequency: 'yearly' },
  ];

  return entries.map((entry) => ({
    url: `${baseUrl}${entry.route}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
