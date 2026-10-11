/**
 * Global Color System for Hotel Sky Executive
 * 
 * Edit colors here or in src/app/globals.css to change them globally across the entire application.
 * Sourced from Brand Identity & Visual Theme:
 * - Deep Navy Blue: #0B2D46
 * - Warm Gold: #C69235
 * - Soft Ivory: #F8F2E8
 * - Pure White: #FFFFFF
 * - Charcoal: #343B40
 * - Champagne Gold: #E5D3B1
 */

export const colors = {
  // Brand Identity Palette
  deepNavy: '#0B2D46',          // Deep Navy Blue (Primary dark surface, headers, hero)
  warmGold: '#C69235',          // Warm Gold (Primary brand luxury accent)
  softIvory: '#F8F2E8',         // Soft Ivory (Primary page background)
  pureWhite: '#FFFFFF',         // Pure White (Surfaces, cards, navbar, modals)
  charcoal: '#343B40',          // Charcoal (High-contrast typography & body copy)
  champagneGold: '#E5D3B1',     // Champagne Gold (Subtle highlights, borders & tags)

  // Core Semantic Backgrounds
  background: '#F8F2E8',         // Primary page background (Soft Ivory)
  backgroundSecondary: '#F1E9DC',// Warm Cream for alternate sections
  surfaceWhite: '#FFFFFF',       // Pure White for navbar, cards & forms

  // Executive Navy System
  navy: '#0B2D46',
  navySurface: '#103957',
  navyCard: '#154568',

  // Luxury Gold System
  primaryGold: '#C69235',        // Primary Luxury Gold (main brand accent)
  secondaryGold: '#A67420',      // Deep Gold for borders & icons
  champagne: '#E5D3B1',          // Champagne Gold for highlights
  lightGold: '#E5D3B1',          // Alias for light/champagne gold
  goldMuted: 'rgba(198, 146, 53, 0.12)', // Tinted gold backdrop

  // Typography
  textPrimary: '#0B2D46',        // Deep Navy for primary headings
  textBody: '#343B40',           // Charcoal for readable body copy
  textSecondary: '#5A636A',      // Descriptions & supporting copy
  textMuted: '#848E97',          // Captions & subtitles
  textInverse: '#FFFFFF',        // Text on dark/gold surfaces

  // Borders & Dividers
  border: '#E2D7C5',             // Standard subtle luxury ivory border
  borderGold: '#C69235',         // Accent gold border
  borderLight: '#ECE2D3',        // Extra soft border

  // Dark Accents
  darkAccent: '#0B2D46',

  // Utility Brands
  brandWhatsApp: '#25D366',
  brandWhatsAppHover: '#1DA851',
  overlay: 'rgba(11, 45, 70, 0.70)',
  overlayLight: 'rgba(248, 242, 232, 0.96)',

  // Legacy raw palette aliases for developer compatibility
  app_000000: '#0B2D46',
  app_FFFFFF: '#FFFFFF',
  app_CCCCCC: '#E2D7C5',
  app_D6D6D6: '#E2D7C5',
  app_E05656: '#C69235',
  app_FCAFAF: '#E5D3B1',
  app_E9EDC9: '#F1E9DC',
  app_OVERLAY: 'rgba(11, 45, 70, 0.70)',
} as const;

export type Colors = typeof colors;

export default colors;
