import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

export const metadata: Metadata = {
  title: 'Guest & Hotel Policies | liv.inn Pune',
  description: 'Guest and Hotel Policies for liv.inn Boutique Hotel, Pune.',
};

export default function PoliciesPage() {
  return (
    <LegalPageLayout 
      title="Guest & Hotel Policies" 
      markdownContent={LEGAL_DOCS.guestPolicies} 
    />
  );
}
