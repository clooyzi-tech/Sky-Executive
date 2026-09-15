/**
 * Centralized Colors Configuration for Liv.inn
 * 
 * Sourced directly from Rules.md:
 * - Primary Background: #FAF8F3 (Warm Ivory / Off White)
 * - Secondary Background: #F3EFE6 (Soft Champagne / Cream)
 * - Pure White: #FFFFFF
 * - Primary Luxury Gold: #C9A227 (Main brand accent)
 * - Secondary Gold: #B88A2A (Subtle borders & secondary accents)
 * - Light Gold: #E7D39A (Hover states & highlights)
 * - Primary Text: #1C1C1C (Headings & important text)
 * - Secondary Text: #5F5A50 (Descriptions & supporting copy)
 * - Muted Text: #8A8478
 * - Dark Accent: #151515 (Used sparingly, never full dark website)
 * - Border: #DED8CC
 */

export const colors = {
  // Core Backgrounds
  background: '#FAF8F3',         // Primary Warm Ivory / Off White
  backgroundSecondary: '#F3EFE6',// Soft Champagne / Cream for alternate sections
  surfaceWhite: '#FFFFFF',       // Pure White for navbar, cards & forms

  // Luxury Gold System
  primaryGold: '#C9A227',        // Primary Luxury Gold (main brand accent)
  secondaryGold: '#B88A2A',      // Secondary Gold for borders & icons
  lightGold: '#E7D39A',          // Light Gold for hover highlights & subtle tags
  goldMuted: 'rgba(201, 162, 39, 0.12)', // Tinted gold backdrop

  // Typography
  textPrimary: '#1C1C1C',        // Main heading & high contrast text
  textSecondary: '#5F5A50',      // Body copy & descriptions
  textMuted: '#8A8478',          // Captions & subtitles
  textInverse: '#FFFFFF',        // Text on dark/gold surfaces

  // Borders & Dividers
  border: '#DED8CC',             // Standard subtle luxury border
  borderGold: '#C9A227',         // Accent gold border
  borderLight: '#F3EFE6',        // Extra soft border

  // Dark Accents (Used sparingly)
  darkAccent: '#151515',
  charcoal: '#1C1C1C',

  // Utility Brands
  brandWhatsApp: '#25D366',
  brandWhatsAppHover: '#1DA851',
  overlay: 'rgba(0, 0, 0, 0.4)',
  overlayLight: 'rgba(250, 248, 243, 0.95)',

  // Legacy raw palette aliases for developer compatibility
  app_000000: '#1C1C1C',
  app_FFFFFF: '#FFFFFF',
  app_CCCCCC: '#DED8CC',
  app_D6D6D6: '#DED8CC',
  app_E05656: '#C9A227',
  app_FCAFAF: '#E7D39A',
  app_E9EDC9: '#F3EFE6',
  app_OVERLAY: 'rgba(0, 0, 0, 0.4)',
} as const;

export type Colors = typeof colors;

export default colors;
