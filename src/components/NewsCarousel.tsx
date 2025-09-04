'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  image: string;
  alt: string;
}

interface NewsCarouselProps {
  newsItems?: NewsItem[];
}

const defaultNewsItems: NewsItem[] = [
  {
    id: 1,
    image: '/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4 8.png',
    alt: 'Rafting piedzīvojums - Aktualitāte Nr.1 šomēnes'
  },
  {
    id: 2,
    image: '/images/komandas_saliedesana_teambuilding_www.realspiedzivojums.lv_3a.png',
    alt: 'Korporatīvie pasākumi - Aktualitāte Nr.2'
  },
  {
    id: 3,
    image: '/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_15.png',
    alt: 'Ģimenes aktivitātes - Aktualitāte Nr.3'
  }
];

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsItems = defaultNewsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, newsItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? newsItems.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === newsItems.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <section 
      className="max-w-screen-xl mx-auto py-16 bg-white"
      aria-labelledby="news-carousel-heading"
      role="region"
    >
      <div className="mx-auto px-4">
        <div className="flex items-start justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start flex-shrink-0 mt-3">
            {/* AKTUALITĀTES Title */}
            <h2 
              id="news-carousel-heading"
              className="w-full text-[26px] font-medium leading-[29px] tracking-[0.78px] text-black font-['Poppins'] uppercase mb-[60px]"
            >
              aktualitātes
            </h2>
            
            {/* Main Heading */}
            <h3 className="w-[376px] text-[44px] leading-[49px] tracking-[0.88px] text-black font-['Poppins'] mb-[45px]">
              Aktualitāte Nr.1 šomēnes
            </h3>
            
            {/* Number */}
            <p className="w-[146px] text-[60px] font-medium leading-[67px] text-[#c347fc] font-['Poppins'] mb-[3px]">
              483
            </p>
            
            {/* Description */}
            <p className="text-[18px] leading-[25px] text-black font-['Poppins'] mb-[68px]">
              "Reāls Piedzīvojums" draudzības dāvanu!
            </p>
            
            {/* Button */}
            <button 
              className="flex items-center justify-center bg-[#c347fc] hover:bg-[#b83ee0] transition-colors duration-300 rounded-[5px] px-[72px] py-[15px] focus:ring-4 focus:ring-purple-300 focus:outline-none"
              aria-label="Saņemt draudzības dāvanu"
            >
              <span className="text-[15px] font-medium leading-[17px] text-white font-['Nunito_Sans'] uppercase">
                Saņemt draudzības dāvanu!
              </span>
            </button>
            
            {/* Clients Text */}
            <p className="absolute top-[265px] left-[118px] w-[249px] h-[27px] text-right text-[22px] leading-[31px] text-black font-['Poppins']">
              klienti jau saņēmuši
            </p>
          </div>
          
          {/* Right Content - Carousel */}
          <div className="flex flex-col items-start flex-grow">
            {/* Image Carousel Container */}
            <div className="relative w-full h-[455px] overflow-hidden rounded-lg">
              {/* Navigation Buttons - Styled to match Figma design */}
              <button
                onClick={goToPrevious}
                className="absolute bottom-6 right-24 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-300 focus:ring-2 focus:ring-white focus:outline-none opacity-80 hover:opacity-100"
                aria-label="Iepriekšējā aktualitāte"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" aria-hidden="true" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute bottom-6 right-6 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-300 focus:ring-2 focus:ring-white focus:outline-none opacity-80 hover:opacity-100"
                aria-label="Nākamā aktualitāte"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" aria-hidden="true" />
              </button>
              
              {/* Carousel Images */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {newsItems.map((item, index) => (
                  <div key={item.id} className="w-full h-full flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex items-center justify-between mt-[29px] ml-[184px] mr-[632px] min-w-[57px] h-[13px]">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[13px] h-[13px] rounded-full transition-colors duration-300 focus:ring-4 focus:ring-purple-300 focus:outline-none ${
                    index === currentIndex ? 'bg-[#b454ff]' : 'bg-[#d9d9d9] hover:bg-[#c9c9c9]'
                  }`}
                  aria-label={`Iet uz aktualitāti ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;