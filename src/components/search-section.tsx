'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin } from 'lucide-react';

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery, 'in location:', location);
  };

  const featuredCategories = [
    { name: 'Hiking', href: '/category/hiking' },
    { name: 'Water Sports', href: '/category/water-sports' },
    { name: 'Camping', href: '/category/camping' },
    { name: 'Cycling', href: '/category/cycling' },
    { name: 'Extreme', href: '/category/extreme' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Adventure background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Explore thousands of exciting adventures around the world
          </p>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search for adventures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div className="relative flex-grow">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-white/80">Popular:</span>
            {featuredCategories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-white hover:text-primary transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}