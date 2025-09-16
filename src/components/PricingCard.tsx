"use client";

import React from "react";
import Image from "next/image";

// Types and Interfaces
export interface PricingFeature {
  text: string;
  subHeading?: string;
  included: boolean;
}

export interface PricingCardProps {
  /** The name/title of the pricing tier */
  name: string;
  /** The price text to display */
  price: string;
  subHeading?: string;
  /** Additional note about the price (e.g., "per participant") */
  priceNote: string;
  /** Array of features with inclusion status */
  features: PricingFeature[];
  /** Primary color for the tier (hex color) */
  color: string;
  /** Whether this tier should be highlighted/featured */
  highlighted?: boolean;
  /** Badge text to display (e.g., "MOST POPULAR") */
  badge?: string;
  /** Index of the card in the list (affects styling) */
  index?: number;
  /** Custom CSS classes to apply to the container */
  className?: string;
  /** Custom styling options */
  variant?: 'default' | 'compact' | 'featured';
  /** Icon configuration for features */
  iconConfig?: {
    included: string;
    includedHighlighted: string;
    excluded: string;
  };
}

// Default icon configuration
const defaultIconConfig = {
  included: "/icons/mfi9icat-ynhvbr1.svg",
  includedHighlighted: "/icons/Group 12619.svg",
  excluded: "/icons/mfi9icaw-i1dxcw1.svg"
};

/**
 * PricingCard - A reusable pricing tier card component
 * 
 * @param props - PricingCardProps
 * @returns JSX.Element
 */
export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  subHeading,
  price,
  priceNote,
  features,
  color,
  highlighted = false,
  badge,
  index = 0,
  className = "",
  variant = 'default',
  iconConfig = defaultIconConfig
}) => {
  // Determine if this is the middle/featured card (typically index 1)
  const isFeaturedPosition = index === 1;
  
  // Generate dynamic classes based on props
  const getCardClasses = () => {
    const baseClasses = "w-full flex flex-col items-stretch bg-white rounded-[20px] flex-1 relative";
    
    // Shadow classes based on highlighted state
    const shadowClasses = highlighted
      ? "shadow-[4px_4px_28px_9px_#d151ff33]"
      : "shadow-[1px_4px_28px_9px_#25a0dd33] bg-[#fffffff2]";
    
    // Padding and positioning based on variant and position
    const positionClasses = variant === 'featured' || isFeaturedPosition
      ? "mt-0 p-[80px_20px] self-stretch border border-primary"
      : "p-[40px_20px] self-center border border-secondary";
    
    return `${baseClasses} ${shadowClasses} ${positionClasses} ${className}`;
  };

  // Get the appropriate icon for a feature
  const getFeatureIcon = (feature: PricingFeature): string => {
    if (!feature.included) {
      return iconConfig.excluded;
    }
    
    // Use highlighted icon for featured cards or highlighted tiers
    return (highlighted || isFeaturedPosition) 
      ? iconConfig.includedHighlighted 
      : iconConfig.included;
  };

  // Get text color classes for features
  const getFeatureTextClasses = (feature: PricingFeature): string => {
    const baseClasses = "text-[14px] leading-[20px] font-['Poppins'] ml-[9px] flex-1";
    
    if (feature.included) {
      return `${baseClasses} text-black`;
    }
    
    return `${baseClasses} text-[#949292]`;
  };

  return (
    <div className="w-full">
      <div className={getCardClasses()}>
        {/* Badge for highlighted/featured tier */}
        {badge && (
          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_#d151ff40] px-[28px] py-[13px]">
              <span className="text-[15px] font-light uppercase tracking-[1.35px] text-black font-['Poppins']">
                {badge}
              </span>
            </div>
          </div>
        )}

        {/* Tier Name */}
        <h3
          className="text-[44px] pb-2 leading-[49px] tracking-[0.88px] font-['Poppins']"
          style={{ color }}
        >
          {name}
        </h3>
        <h4 className="text-body leading-[20px] font-['Poppins'] !font-medium text-text uppercase">
          {subHeading}
        </h4>

        {/* Features List */}
        <div className="space-y-3 my-8">
          {features.map((feature, featureIndex) => (
            <div
              key={`${name}-feature-${featureIndex}`}
              className="flex items-start justify-between"
            >
              <Image
                src={getFeatureIcon(feature)}
                alt={feature.included ? "Included" : "Not included"}
                width={17}
                height={17}
                className="mt-[2px] flex-shrink-0"
              />
              <span className={getFeatureTextClasses(feature)}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Price Section */}
        <div className="text-center">
          <p
            className="text-[35px] leading-[39px] tracking-[0.7px] font-['Poppins'] mb-[13px]"
            style={{ color }}
          >
            {price}
          </p>
          <p className="text-[14px] leading-[15px] text-black font-light font-['Poppins']">
            {priceNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;