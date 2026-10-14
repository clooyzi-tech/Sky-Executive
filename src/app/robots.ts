import type { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/content';

/**
 * Robots configuration for Hotel Sky Executive Pune.
 * 
 * Policy:
 * - Allows full access to search engines and AI retrieval bots (Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, Applebot).
 * - Disallows non-search aggressive scrapers (CCBot, Bytespider).
 * - Protects internal API routes (/api/).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
