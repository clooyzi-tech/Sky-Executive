/**
 * Centralized Icons Configuration for Liv.inn
 * 
 * All icons (Lucide icons and custom SVGs) are managed and exported here.
 * Any screen or component can import icons directly from this config.
 */

import React from 'react';
import {
  ArrowRight,
  Bed,
  Users,
  Wifi,
  ShieldCheck,
  ConciergeBell,
  Car,
  Sparkles,
  Luggage,
  Check,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ExternalLink,
  Train,
  Plane,
  ShoppingBag,
  Waves,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Send,
  Loader2,
  Clock,
  AlertCircle,
  Coffee,
  Shirt,
  Bell,
  Heart,
  Shield,
  IndianRupee,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

/**
 * Custom SVG: Instagram Icon (Pure TS createElement)
 */
export function InstagramIcon({ className = 'h-4 w-4', ...props }: React.SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      className,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      ...props,
    },
    React.createElement('rect', { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
    React.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
    React.createElement('line', { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 })
  );
}

/**
 * Custom SVG: Image Placeholder Fallback Icon (Pure TS createElement)
 */
export function PlaceholderImageIcon({ className = 'w-12 h-12', ...props }: React.SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      className,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props,
    },
    React.createElement('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
    React.createElement('circle', { cx: 8.5, cy: 8.5, r: 1.5 }),
    React.createElement('polyline', { points: '21 15 16 10 5 21' })
  );
}

/**
 * Dictionary of all centralized icons
 */
export const Icons = {
  // Navigation & Directional
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Navigation,
  ExternalLink,
  Menu,
  Close: X,
  X,

  // Communication & Contact
  Phone,
  Mail,
  MapPin,
  WhatsApp: MessageCircle,
  MessageCircle,
  Instagram: InstagramIcon,

  // Hotel & Amenities
  Bed,
  Users,
  Wifi,
  ShieldCheck,
  Shield,
  ConciergeBell,
  Car,
  Sparkles,
  Luggage,
  Coffee,
  Shirt,
  Bell,

  // Attractions & Nearby
  Train,
  Plane,
  Airport: Plane,
  Railway: Train,
  ShoppingBag,
  Mall: ShoppingBag,
  Waves,
  Beach: Waves,

  // Status & Utility
  Check,
  CheckCircle,
  Clock,
  AlertCircle,
  Send,
  Loader2,
  Heart,
  Rupee: IndianRupee,
  IndianRupee,
  Image: PlaceholderImageIcon,
} as const;

/**
 * Facility Icon resolver
 */
export function getFacilityIcon(name: string, className: string = 'h-6 w-6'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    Wifi,
    ShieldCheck,
    ConciergeBell,
    Car,
    Sparkles,
    Luggage,
  };
  const IconComp = map[name] ?? Sparkles;
  return React.createElement(IconComp, { className });
}

/**
 * Why Choose Us Icon resolver
 */
export function getWhyChooseIcon(name: string, className: string = 'h-6 w-6'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    MapPin,
    Heart,
    Shield,
    Sparkles,
    Wifi,
    IndianRupee,
  };
  const IconComp = map[name] ?? Sparkles;
  return React.createElement(IconComp, { className });
}

/**
 * Hotel Guest Service Icon resolver
 */
export function getServiceIcon(serviceName: string, className: string = 'h-5 w-5'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    'Room Service': Coffee,
    'Laundry Service': Shirt,
    'Wake-up Call': Bell,
    'Travel Assistance': MapPin,
    'Medical Assistance': Shield,
  };
  const IconComp = map[serviceName] ?? ConciergeBell;
  return React.createElement(IconComp, { className });
}

/**
 * Nearby Attraction Icon resolver
 */
export function getAttractionIcon(attractionName: string, className: string = 'h-5 w-5'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    'Chhatrapati Shivaji Maharaj International Airport': Plane,
    'Andheri Railway Station': Train,
    'Infinity Mall': ShoppingBag,
    'Versova Beach': Waves,
  };
  const IconComp = map[attractionName] ?? MapPin;
  return React.createElement(IconComp, { className });
}

// Re-export individual Lucide components for convenience
export {
  ArrowRight,
  Bed,
  Users,
  Wifi,
  ShieldCheck,
  ConciergeBell,
  Car,
  Sparkles,
  Luggage,
  Check,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ExternalLink,
  Train,
  Plane,
  ShoppingBag,
  Waves,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Send,
  Loader2,
  Clock,
  AlertCircle,
  Coffee,
  Shirt,
  Bell,
  Heart,
  Shield,
  IndianRupee,
  type LucideIcon,
  type LucideProps,
};

export default Icons;
