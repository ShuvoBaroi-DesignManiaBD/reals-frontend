"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  image,
  onClick
}) => {
  return (
    <div 
      className="relative w-[315px] h-[307px] rounded-[20px] overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="315px"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#081528b2] to-transparent"
        style={{
          background: 'linear-gradient(180deg, #08152800 0%, #081528b2 100%)'
        }}
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        {/* Title */}
        <h3 className="text-white text-2xl lg:text-[34px] leading-tight max-w-[233px] flex items-end min-h-[122px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        
        {/* Arrow Icon */}
        <div className="flex-shrink-0 mt-auto">
          <ChevronRight 
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;