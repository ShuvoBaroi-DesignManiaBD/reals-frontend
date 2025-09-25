"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselConfig {
  autoSlideInterval: number;
  transitionDuration: number;
}

interface ClientsSectionProps {
  className?: string;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Configurable carousel settings
  const carouselConfig: CarouselConfig = {
    autoSlideInterval: 5000, // 5 seconds
    transitionDuration: 700  // 0.7 seconds
  };
  
  const clientLogos = [
    {
      name: "Swedbank",
      src: "/images/swedbank.png",
      width: 267,
      height: 267,
      className: "w-[134px] h-[134px]"
    },
    {
      name: "DNB",
      src: "/images/dnb.png",
      width: 121,
      height: 83,
      className: "w-[121px] h-[83px]"
    },
    {
      name: "Kiilto",
      src: "/images/kiilto.png",
      width: 83,
      height: 83,
      className: "w-[83px] h-[83px]"
    },
    {
      name: "Kreiss",
      src: "/images/kreiss.png",
      width: 231,
      height: 83,
      className: "w-[231px] h-[83px]"
    },
    {
      name: "Balticovo",
      src: "/images/balticovo.png",
      width: 146,
      height: 83,
      className: "w-[146px] h-[83px]"
    },
    {
      name: "LDZ",
      src: "/images/ldz.png",
      width: 204,
      height: 83,
      className: "w-[204px] h-[83px]"
    },
    {
      name: "LAU",
      src: "/images/lau.png",
      width: 179,
      height: 179,
      className: "w-[179px] h-[179px]"
    },
    {
      name: "Lindström",
      src: "/images/lindstrom.png",
      width: 305,
      height: 65,
      className: "w-[305px] h-[65px]"
    },
    {
      name: "JYSK",
      src: "/images/jysk.png",
      width: 182,
      height: 83,
      className: "w-[182px] h-[83px]"
    },
    {
      name: "Mediju Tilts",
      src: "/images/mt-logo.png",
      width: 205,
      height: 83,
      className: "w-[205px] h-[83px]"
    },
    {
      name: "Beaphar",
      src: "/images/beaphar.png",
      width: 202,
      height: 202,
      className: "w-[101px] h-[101px]"
    },
    {
      name: "Medlex",
      src: "/images/medlex.png",
      width: 324,
      height: 83,
      className: "w-[324px] h-[83px]"
    },
    {
      name: "Certex",
      src: "/images/certex.png",
      width: 254,
      height: 127,
      className: "w-[254px] h-[127px]"
    },
    {
      name: "Roche",
      src: "/images/roche.png",
      width: 146,
      height: 76,
      className: "w-[146px] h-[76px]"
    }
  ];

  // Create multiple slides by duplicating the logo data
  const logosPerSlide = 14;
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]; // Triple the data for demonstration
  const totalSlides = Math.ceil(duplicatedLogos.length / logosPerSlide);
  
  const getSlideLogos = (slideIndex: number) => {
    const startIndex = slideIndex * logosPerSlide;
    const slideLogos = duplicatedLogos.slice(startIndex, startIndex + logosPerSlide);
    
    return {
      row1: slideLogos.slice(0, 5),
      row2: slideLogos.slice(5, 10),
      row3: slideLogos.slice(10, 14)
    };
  };
  
  // Auto-slide functionality with configurable timing
  useEffect(() => {
    if (!isHovered && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, carouselConfig.autoSlideInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, totalSlides, carouselConfig.autoSlideInterval]);
  
  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
      // Reset auto-slide timer when manually navigating
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  return (
    <section className={`py-20 bg-white rounded-[50px] my-20 ${className}`}>
      <div className="relative">
        {/* Title */}
        <h2 className="text-[44px] leading-[49px] tracking-[0.88px] text-[#121212] font-['Poppins'] text-center pb-16">
          Mums uzticās
        </h2>
        
        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transitionDuration: `${carouselConfig.transitionDuration}ms`
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const slideLogos = getSlideLogos(slideIndex);
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="space-y-[20px]">
                      {/* Row 1 */}
                      <div className="flex items-center justify-center gap-x-[80px] w-full">
                        {slideLogos.row1.map((logo, index) => (
                          <div key={`${slideIndex}-row1-${index}`} className="flex items-center justify-center">
                            <div className="flex items-center justify-center h-[120px] hover:scale-110 transition-transform duration-300">
                              <Image
                                src={logo.src}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className={`${logo.className} object-contain filter transition-all duration-300`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Row 2 */}
                      <div className="flex items-center justify-center gap-x-[80px] w-full">
                        {slideLogos.row2.map((logo, index) => (
                          <div key={`${slideIndex}-row2-${index}`} className="flex items-center justify-center">
                            <div className="flex items-center justify-center h-[120px] hover:scale-110 transition-transform duration-300">
                              <Image
                                src={logo.src}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className={`${logo.className} object-contain filter transition-all duration-300`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Row 3 */}
                      <div className="flex items-center justify-center gap-x-[80px] w-full">
                        {slideLogos.row3.map((logo, index) => (
                          <div key={`${slideIndex}-row3-${index}`} className="flex items-center justify-center">
                            <div className="flex items-center justify-center h-[120px] hover:scale-110 transition-transform duration-300">
                              <Image
                                src={logo.src}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className={`${logo.className} object-contain filter transition-all duration-300`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-[50px] space-x-3">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#109afc] scale-125' 
                      : 'bg-[#D9D9D9] hover:bg-[#109afc] hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        

      </div>
    </section>
  );
};

export default ClientsSection;