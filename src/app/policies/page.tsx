import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Guest & Hotel Policies',
  description: 'Guest and Hotel Policies for liv.inn Boutique Hotel, Pune.',
  path: '/policies',
});

export default function PoliciesPage() {
  return (
    <LegalPageLayout 
      title="Guest & Hotel Policies" 
      markdownContent={LEGAL_DOCS.guestPolicies} 
    />
  );
}
