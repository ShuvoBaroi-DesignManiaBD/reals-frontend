"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
  onButtonClick
}) => {
  return (
    <section 
      className="relative w-full h-[461px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528b2] to-transparent"
        style={{
          background: 'linear-gradient(359.98deg, #081528 0.04%, #08152800 99.96%)'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 max-w-[1099px] mx-auto">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-white text-lg leading-relaxed mb-12 max-w-[1099px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {description}
        </p>
        
        {/* CTA Button */}
        <Button
          onClick={onButtonClick}
          className="bg-[#c347fc] hover:bg-[#b33ee8] text-white font-medium text-sm uppercase tracking-wide px-12 py-3 rounded-md transition-colors duration-200"
          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;