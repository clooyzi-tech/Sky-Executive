/**
 * Centralized Fonts Configuration for Liv.inn
 * 
 * All typography definitions, font loaders, and CSS variables are managed here.
 */

import { Inter, Playfair_Display } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

/**
 * Combined font variable classes to attach to the root <html> element
 */
export const fontVariables = `${fontInter.variable} ${fontPlayfair.variable}`;

export const FONTS = {
  inter: fontInter,
  playfair: fontPlayfair,
  variables: fontVariables,
  families: {
    sans: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    serif: 'var(--font-playfair), Georgia, serif',
  },
} as const;

export default FONTS;
