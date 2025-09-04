'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'Discover Adventure',
      subtitle: 'Experience the thrill of outdoor activities',
      description: 'Join us for exciting adventures that will create lasting memories. From team building to extreme sports, we have something for everyone.',
      image: '/images/hero-1.jpg',
      alt: 'People enjoying outdoor adventure activities',
    },
    {
      id: 2,
      title: 'Team Building',
      subtitle: 'Strengthen your team bonds',
      description: 'Our team building activities are designed to improve communication, build trust, and enhance collaboration among team members.',
      image: '/images/hero-2.jpg',
      alt: 'Team building activities',
    },
    {
      id: 3,
      title: 'Water Adventures',
      subtitle: 'Dive into excitement',
      description: 'Experience the thrill of water sports and activities. From kayaking to sailing, we offer a variety of water adventures.',
      image: '/images/hero-3.jpg',
      alt: 'Water sports activities',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative h-full w-full">
              {/* Placeholder for image - in production, use actual images */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
              {/* <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              /> */}
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90 mb-6 animate-fadeIn animation-delay-300">
                  {slide.subtitle}
                </h2>
                <p className="max-w-2xl mx-auto text-white/80 mb-8 animate-fadeIn animation-delay-500">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-700">
                  <Link 
                    href="/adventures" 
                    className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                  >
                    Explore Adventures
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-full backdrop-blur-sm transition-colors border border-white/30"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === activeSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}