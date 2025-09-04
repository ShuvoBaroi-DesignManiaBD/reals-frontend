'use client';

import { useState } from 'react';
import { AdventureCard } from './adventure-card';

export function PopularAdventuresSection() {
  // Sample data - in a real app, this would come from an API
  const adventures = [
    {
      id: '1',
      title: 'Mountain Hiking Expedition',
      description: 'Experience the thrill of hiking through beautiful mountain trails with breathtaking views. Our experienced guides will lead you through safe paths while sharing knowledge about local flora and fauna.',
      image: '/images/adventures/mountain-hiking.jpg',
      category: 'Hiking',
      duration: '1 Day',
      difficulty: 'Moderate' as const,
      price: 89,
    },
    {
      id: '2',
      title: 'Corporate Team Building',
      description: 'Strengthen your team bonds with our specially designed team building activities. These exercises promote communication, trust, and collaboration in a fun and engaging environment.',
      image: '/images/adventures/team-building.jpg',
      category: 'Team Building',
      duration: '4-8 Hours',
      difficulty: 'Easy' as const,
      price: 65,
    },
    {
      id: '3',
      title: 'White Water Rafting',
      description: 'Navigate through exciting rapids on this adrenaline-pumping white water rafting adventure. Perfect for thrill-seekers looking for an unforgettable water experience.',
      image: '/images/adventures/rafting.jpg',
      category: 'Water Sports',
      duration: '3 Hours',
      difficulty: 'Challenging' as const,
      price: 120,
    },
    {
      id: '4',
      title: 'Forest Survival Skills',
      description: 'Learn essential survival skills in the wilderness. This adventure teaches fire-making, shelter building, navigation, and identifying edible plants in a real forest environment.',
      image: '/images/adventures/survival.jpg',
      category: 'Survival',
      duration: '2 Days',
      difficulty: 'Challenging' as const,
      price: 199,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(adventures.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Popular Adventures
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Discover our most sought-after experiences and find your next adventure with Reals Piedzivojums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.slice(0, visibleCount).map((adventure) => (
            <AdventureCard key={adventure.id} {...adventure} />
          ))}
        </div>

        {visibleCount < adventures.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMore}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Show More Adventures
            </button>
          </div>
        )}
      </div>
    </section>
  );
}