import Image from 'next/image';
import Link from 'next/link';

interface AdventureCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  price: number;
  currency?: string;
}

export function AdventureCard({
  id,
  title,
  description,
  image,
  category,
  duration,
  difficulty,
  price,
  currency = '€',
}: AdventureCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Moderate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Challenging':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Extreme':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        {/* Placeholder for image - in production, use actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
        {/* <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        /> */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-gray-800 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-lg font-bold text-primary dark:text-primary-foreground">
            {currency}{price}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">{duration}</span>
          </div>
          
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        
        <Link 
          href={`/adventures/${id}`}
          className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}