import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Star } from 'lucide-react';

interface AdventureCardProps {
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

export function AdventureCardV2({ 
  id, 
  title, 
  location, 
  image, 
  rating, 
  reviewCount, 
  price, 
  duration, 
  category 
}: AdventureCardProps) {
  return (
    <Link 
      href={`/adventure/${id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="text-gray-500 dark:text-gray-400" size={14} />
          <span className="text-sm text-gray-500 dark:text-gray-400 truncate">{location}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={14} />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">({reviewCount} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1">
            <Clock className="text-gray-500 dark:text-gray-400" size={14} />
            <span className="text-sm text-gray-500 dark:text-gray-400">{duration}</span>
          </div>
          
          <div className="font-bold text-primary">
            ${price}
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400"> / person</span>
          </div>
        </div>
      </div>
    </Link>
  );
}