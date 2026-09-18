'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { RoomProvider } from '@/components/guest/RoomContext';
import GuestTabBar, { type GuestTab } from '@/components/guest/GuestTabBar';
import WelcomeHeader from '@/components/guest/WelcomeHeader';
import QuickActions from '@/components/guest/QuickActions';
import WiFiCard from '@/components/guest/WiFiCard';
import FoodSection from '@/components/guest/FoodSection';
import HotelGuide from '@/components/guest/HotelGuide';
import ExploreSection from '@/components/guest/ExploreSection';
import ServicesSection from '@/components/guest/ServicesSection';
import MoreSection from '@/components/guest/MoreSection';

type HomeSection = 'main' | 'wifi' | 'food' | 'guide';

export default function GuestPortalPage() {
  const params = useParams();
  const roomId = (params?.roomId as string) || '000';
  const [activeTab, setActiveTab] = useState<GuestTab>('home');
  const [homeSection, setHomeSection] = useState<HomeSection>('main');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as GuestTab);
  };

  const handleSectionChange = (section: string) => {
    setHomeSection(section as HomeSection);
  };

  const handleBackToHome = () => {
    setHomeSection('main');
  };

  const renderHomeContent = () => {
    switch (homeSection) {
      case 'wifi':
        return (
          <div>
            <button
              onClick={handleBackToHome}
              className="mb-3 text-xs font-medium text-accent"
            >
              ← Back to Home
            </button>
            <WiFiCard />
          </div>
        );
      case 'food':
        return (
          <div>
            <button
              onClick={handleBackToHome}
              className="mb-3 text-xs font-medium text-accent"
            >
              ← Back to Home
            </button>
            <FoodSection />
          </div>
        );
      case 'guide':
        return (
          <div>
            <button
              onClick={handleBackToHome}
              className="mb-3 text-xs font-medium text-accent"
            >
              ← Back to Home
            </button>
            <HotelGuide />
          </div>
        );
      default:
        return (
          <>
            <WelcomeHeader />
            <QuickActions
              onTabChange={handleTabChange}
              onSectionChange={handleSectionChange}
            />
          </>
        );
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeContent();
      case 'explore':
        return <ExploreSection />;
      case 'services':
        return <ServicesSection />;
      case 'more':
        return <MoreSection />;
      default:
        return null;
    }
  };

  return (
    <RoomProvider roomId={roomId}>
      <div className="mx-auto min-h-screen max-w-lg bg-background">
        {/* Content area with bottom padding for tab bar */}
        <div className="px-4 pb-24 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${homeSection}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {renderTab()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fixed bottom tab bar */}
        <GuestTabBar activeTab={activeTab} onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') setHomeSection('main');
        }} />
      </div>
    </RoomProvider>
  );
}
