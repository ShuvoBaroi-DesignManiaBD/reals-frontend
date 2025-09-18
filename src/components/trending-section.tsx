'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AdventureCardV2 } from './adventure-card-v2';

interface Adventure {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  category: string;
}

export function TrendingSection() {
  // Sample data - in a real app, this would come from an API
  const trendingAdventures: Adventure[] = [
    {
      id: '1',
      title: 'Mountain Hiking Expedition',
      location: 'Rocky Mountains, Colorado',
      image: '/images/adventures/mountain-hiking.jpg',
      rating: 4.8,
      reviewCount: 124,
      price: 89,
      duration: '1 Day',
      category: 'hiking',
    },
    {
      id: '2',
      title: 'Corporate Team Building',
      location: 'Urban Adventure Center',
      image: '/images/adventures/team-building.jpg',
      rating: 4.6,
      reviewCount: 87,
      price: 65,
      duration: '4-8 Hours',
      category: 'team building',
    },
    {
      id: '3',
      title: 'White Water Rafting',
      location: 'Colorado River, Arizona',
      image: '/images/adventures/rafting.jpg',
      rating: 4.9,
      reviewCount: 156,
      price: 120,
      duration: '3 Hours',
      category: 'water sports',
    },
    {
      id: '4',
      title: 'Forest Survival Skills',
      location: 'National Forest Reserve',
      image: '/images/adventures/survival.jpg',
      rating: 4.7,
      reviewCount: 92,
      price: 199,
      duration: '2 Days',
      category: 'survival',
    },
    {
      id: '5',
      title: 'Mountain Biking Tour',
      location: 'Sierra Nevada Trails',
      image: '/images/adventures/biking.jpg',
      rating: 4.5,
      reviewCount: 78,
      price: 75,
      duration: '4 Hours',
      category: 'cycling',
    },
    {
      id: '6',
      title: 'Rock Climbing Experience',
      location: 'Joshua Tree National Park',
      image: '/images/adventures/climbing.jpg',
      rating: 4.8,
      reviewCount: 104,
      price: 110,
      duration: '5 Hours',
      category: 'extreme',
    },
  ];

  const [activeTab, setActiveTab] = useState('all');

  const filteredAdventures = activeTab === 'all' 
    ? trendingAdventures 
    : trendingAdventures.filter(adventure => adventure.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-16 bg-white dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Trending This Week
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Our most popular adventures right now
            </p>
          </div>
          <Link 
            href="/adventures"
            className="text-primary hover:text-primary/90 font-medium flex items-center transition-colors"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="flex space-x-2">
            {['all', 'hiking', 'water sports', 'team building', 'survival', 'cycling', 'extreme'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${activeTab === tab 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Adventure cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAdventures.map((adventure) => (
            <AdventureCardV2 
              key={adventure.id} 
              id={adventure.id}
              title={adventure.title}
              location={adventure.location}
              image={adventure.image}
              rating={adventure.rating}
              reviewCount={adventure.reviewCount}
              price={adventure.price}
              duration={adventure.duration}
              category={adventure.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}