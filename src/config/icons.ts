/**
 * Centralized Icons Configuration for liv.inn (Pune)
 * 
 * All icons (Lucide icons and custom SVGs) are managed and exported here.
 * Re-exports clean Lucide icons and resolvers for verified facilities and Pune categories.
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
  Droplets,
  Tv,
  Bath,
  Armchair,
  Maximize2,
  Laptop,
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
  Info,
  Coffee,
  Shirt,
  Bell,
  Heart,
  Shield,
  IndianRupee,
  UtensilsCrossed,
  Building2,
  Trees,
  Sun,
  Wind,
  Eye,
  HeartPulse,
  Building,
  GraduationCap,
  Compass,
  Play,
  Pause,
  Calendar,
  Star,
  Zap,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

/**
 * Custom SVG: Instagram Icon
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
      ...props,
    },
    React.createElement('rect', { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
    React.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
    React.createElement('line', { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 })
  );
}

/**
 * Custom SVG: Facebook Icon
 */
export function FacebookIcon({ className = 'h-4 w-4', ...props }: React.SVGProps<SVGSVGElement>) {
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
    React.createElement('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })
  );
}

/**
 * Custom SVG: TripAdvisor Icon
 */
export function TripAdvisorIcon({ className = 'h-4 w-4', ...props }: React.SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      className,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      ...props,
    },
    React.createElement('circle', { cx: 6.5, cy: 13.5, r: 3.5 }),
    React.createElement('circle', { cx: 17.5, cy: 13.5, r: 3.5 }),
    React.createElement('path', { d: 'M12 5c-3.5 0-6.5 2-8 5 1.5 3 4.5 5 8 5s6.5-2 8-5c-1.5-3-4.5-5-8-5z' }),
    React.createElement('circle', { cx: 6.5, cy: 13.5, r: 1.2, fill: 'currentColor' }),
    React.createElement('circle', { cx: 17.5, cy: 13.5, r: 1.2, fill: 'currentColor' }),
    React.createElement('path', { d: 'M12 9v3' })
  );
}

/**
 * Custom SVG: Placeholder Image Icon
 */
export function PlaceholderImageIcon({ className = 'h-10 w-10', ...props }: React.SVGProps<SVGSVGElement>) {
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
    React.createElement('rect', { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
    React.createElement('circle', { cx: 9, cy: 9, r: 2 }),
    React.createElement('path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' })
  );
}

export const Icons = {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Navigation,
  ExternalLink,
  Menu,
  Close: X,
  X,
  Phone,
  Mail,
  MapPin,
  WhatsApp: MessageCircle,
  MessageCircle,
  Instagram: InstagramIcon,
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
  UtensilsCrossed,
  Building2,
  Trees,
  Sun,
  Wind,
  Eye,
  HeartPulse,
  Building,
  GraduationCap,
  Compass,
  Check,
  CheckCircle,
  Clock,
  AlertCircle,
  Send,
  Loader2,
  Heart,
  IndianRupee,
  Image: PlaceholderImageIcon,
} as const;

/**
 * Facility Icon resolver
 */
export function getFacilityIcon(name: string, className: string = 'h-6 w-6'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    Wifi,
    Car,
    UtensilsCrossed,
    Shirt,
    Sparkles,
    Clock,
    ShieldCheck,
    Shield,
    ConciergeBell,
    Luggage,
    Trees,
    Building2,
    Building,
    Zap,
    Heart,
  };
  const IconComp = map[name] ?? Sparkles;
  return React.createElement(IconComp, { className });
}

/**
 * Why Choose Us Icon resolver
 */
export function getWhyChooseIcon(name: string, className: string = 'h-6 w-6'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    Trees,
    Building2,
    Building,
    UtensilsCrossed,
    Clock,
    Wifi,
    Car,
    MapPin,
    Heart,
    Shield,
    Sparkles,
    Zap,
  };
  const IconComp = map[name] ?? Sparkles;
  return React.createElement(IconComp, { className });
}

/**
 * Hotel Guest Service Icon resolver
 */
export function getServiceIcon(serviceName: string, className: string = 'h-5 w-5'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    '24/7 Guest Assistance': Clock,
    'In-House Cloud Kitchen': UtensilsCrossed,
    'Laundry Service': Shirt,
    'Housekeeping & Cleanliness': Sparkles,
    'On-Site Parking': Car,
    'Complimentary Wi-Fi': Wifi,
    'Elevator / Lift Facility': Building,
    '100% Power Backup': Zap,
    'Pet-Friendly Stay': Heart,
    'Security & CCTV': ShieldCheck,
  };
  const IconComp = map[serviceName] ?? ConciergeBell;
  return React.createElement(IconComp, { className });
}

/**
 * Nearby Establishment Category Icon resolver (Pune)
 */
export function getAttractionIcon(categoryOrIconName: string, className: string = 'h-5 w-5'): React.ReactNode {
  const map: Record<string, LucideIcon> = {
    HeartPulse,
    Building,
    GraduationCap,
    Compass,
    Plane,
    Train,
    'Pune International Airport': Plane,
    'Railway Station': Train,
    'Hospitals & Healthcare': HeartPulse,
    'Corporate Offices & MNC Hubs': Building,
    'Schools & Educational Institutions': GraduationCap,
    'Other Nearby Establishments': Compass,
  };
  const IconComp = map[categoryOrIconName] ?? MapPin;
  return React.createElement(IconComp, { className });
}

export {
  ArrowRight,
  Bed,
  Users,
  Wifi,
  ShieldCheck,
  ConciergeBell,
  Car,
  Droplets,
  Tv,
  Bath,
  Armchair,
  Maximize2,
  Laptop,
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
  Info,
  Coffee,
  Shirt,
  Bell,
  Heart,
  Shield,
  IndianRupee,
  UtensilsCrossed,
  Building2,
  Trees,
  Sun,
  Wind,
  Eye,
  HeartPulse,
  Building,
  GraduationCap,
  Compass,
  Play,
  Pause,
  Calendar,
  Star,
  Zap,
  type LucideIcon,
  type LucideProps,
};

export default Icons;
