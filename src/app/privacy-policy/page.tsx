import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { LEGAL_DOCS } from '@/config/strings';

export const metadata: Metadata = {
  title: 'Privacy Policy | liv.inn Pune',
  description: 'Privacy Policy of liv.inn Boutique Hotel, Pune.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      markdownContent={LEGAL_DOCS.privacyPolicy} 
    />
  );
}
