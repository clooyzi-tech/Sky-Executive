import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for liv.inn Boutique Hotel, Pune.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPageLayout 
      title="Terms & Conditions" 
      markdownContent={LEGAL_DOCS.termsAndConditions} 
    />
  );
}
