'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  href: string;
}

function CategoryCard({ title, image, count, href }: CategoryCardProps) {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Image placeholder - in production, use actual images */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-105 transition-transform duration-500" />
      {/* <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      /> */}
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/80">{count} adventures</p>
      </div>
    </Link>
  );
}

export function CategorySection() {
  // Sample data with updated structure
  const categories = [
    { id: '1', title: 'Mountain Hiking', image: '/images/categories/hiking.jpg', count: 24, slug: 'mountain-hiking' },
    { id: '2', title: 'Water Sports', image: '/images/categories/water-sports.jpg', count: 18, slug: 'water-sports' },
    { id: '3', title: 'Camping', image: '/images/categories/camping.jpg', count: 12, slug: 'camping' },
    { id: '4', title: 'Wildlife Safari', image: '/images/categories/safari.jpg', count: 9, slug: 'wildlife-safari' },
    { id: '5', title: 'Rock Climbing', image: '/images/categories/climbing.jpg', count: 15, slug: 'rock-climbing' },
    { id: '6', title: 'Winter Sports', image: '/images/categories/winter-sports.jpg', count: 21, slug: 'winter-sports' },
    { id: '7', title: 'Cycling Tours', image: '/images/categories/cycling.jpg', count: 17, slug: 'cycling-tours' },
    { id: '8', title: 'Extreme Sports', image: '/images/categories/extreme.jpg', count: 14, slug: 'extreme-sports' },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            Explore by Category
          </h2>
          <Link 
            href="/categories" 
            className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors"
          >
            View All Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
              href={`/category/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}