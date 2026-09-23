import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for liv.inn Boutique Hotel, Pune.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      markdownContent={LEGAL_DOCS.privacyPolicy} 
    />
  );
}
