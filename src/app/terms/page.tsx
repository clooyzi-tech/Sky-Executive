import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

export const metadata: Metadata = {
  title: 'Terms & Conditions | liv.inn Pune',
  description: 'Terms and Conditions for liv.inn Boutique Hotel, Pune.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout 
      title="Terms & Conditions" 
      markdownContent={LEGAL_DOCS.termsAndConditions} 
    />
  );
}
