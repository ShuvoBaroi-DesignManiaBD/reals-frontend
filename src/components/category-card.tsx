import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  href: string;
}

export function CategoryCard({ title, image, count, href }: CategoryCardProps) {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-[4/3] w-full relative">
        {image ? (
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-white/80 text-sm">{count} adventures</p>
          </div>
        </div>
      </div>
    </Link>
  );
}