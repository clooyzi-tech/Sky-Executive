  /**
 * Centralized Fonts Configuration for Hotel Sky Executive
 * Royal Navy + Antique Gold + Warm Cream Design Theme
 * 
 * Display: Montserrat (600, 700, 800)
 * Tagline/Script: Playfair Display Italic (400, 500)
 * Body: Source Sans 3 (400, 600)
 */

import { Montserrat, Playfair_Display, Source_Sans_3 } from 'next/font/google';

export const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-playfair',
  display: 'swap',
});

export const fontSourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

/**
 * Combined font variable classes to attach to the root <html> element
 */
export const fontVariables = `${fontMontserrat.variable} ${fontPlayfair.variable} ${fontSourceSans.variable}`;

export const FONTS = {
  display: fontMontserrat,
  script: fontPlayfair,
  serif: fontPlayfair,
  body: fontSourceSans,
  variables: fontVariables,
  families: {
    display: 'var(--font-montserrat), "Segoe UI", Arial, sans-serif',
    script: 'var(--font-playfair), Georgia, serif',
    body: 'var(--font-source-sans), system-ui, sans-serif',
  },
} as const;

export default FONTS;
