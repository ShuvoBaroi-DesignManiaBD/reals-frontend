"use client";

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProgramMenu from '@/components/ProgramMenu';
import { 
  heroData, 
  programMenuData, 
  tabCategories, 
  programItems,
  ProgramItem 
} from '@/data/programData';

const UznemumiemuUnPasvaldibamPage = () => {
  const handleHeroButtonClick = () => {
    // Scroll to program menu or handle CTA action
    const programSection = document.getElementById('program-menu');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProgramClick = (program: ProgramItem) => {
    // Handle program card click - could navigate to program details
    console.log('Program clicked:', program);
  };

  const handleCtaClick = (buttonIndex: number) => {
    // Handle CTA button clicks
    if (buttonIndex === 0) {
      // "Apskatīt visus pasākumus" - could navigate to all programs page
      console.log('View all programs clicked');
    } else {
      // "pieteikt pasākumu" - could open contact form or navigate to booking
      console.log('Book event clicked');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        buttonText={heroData.buttonText}
        backgroundImage={heroData.backgroundImage}
        onButtonClick={handleHeroButtonClick}
      />

      {/* Program Menu Section */}
      <div id="program-menu">
        <ProgramMenu
          title={programMenuData.title}
          description={programMenuData.description}
          tabCategories={tabCategories}
          programItems={programItems}
          ctaTitle={programMenuData.ctaTitle}
          ctaDescription={programMenuData.ctaDescription}
          ctaButtons={programMenuData.ctaButtons.map(button => ({
            ...button,
            variant: button.variant as "primary" | "secondary"
          }))}
          onProgramClick={handleProgramClick}
          onCtaClick={handleCtaClick}
        />
      </div>
    </div>
  );
};

export default UznemumiemuUnPasvaldibamPage;