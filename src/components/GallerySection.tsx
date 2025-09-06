'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, ArrowRight } from 'lucide-react';
import SectionCTA from './SectionCTA';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
  orientation?: 'portrait' | 'landscape';
}

const GallerySection: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery data using real Figma images with mixed orientations
  const galleryItems: MediaItem[] = [
    {
      id: 1,
      type: 'video',
      src: '/mf6ed80v-ht0h353.png',
      alt: 'Bērniiem pasākumi balli',
      orientation: 'landscape'
    },
    {
      id: 2,
      type: 'video',
      src: '/mf6ed80v-mqe8acc.png',
      alt: 'Korporatīvie pasākumi',
      orientation: 'portrait'
    },
    {
      id: 3,
      type: 'image',
      src: '/mf6ed80v-7bboa38.png',
      alt: 'Piedzīvojumu aktivitātes',
      orientation: 'landscape'
    },
    {
      id: 4,
      type: 'image',
      src: '/mf6ed80v-2aa3s74.png',
      alt: 'Grupas aktivitātes',
      orientation: 'portrait'
    },
    {
      id: 5,
      type: 'image',
      src: '/mf6ed80v-t2fudma.png',
      alt: 'Āra izaicinājumi',
      orientation: 'landscape'
    },
    {
      id: 6,
      type: 'image',
      src: '/mf6ed80v-3ifdaqs.png',
      alt: 'Jautras komandas aktivitātes',
      orientation: 'portrait'
    },
    {
      id: 7,
      type: 'image',
      src: '/mf6ed80v-2aa3s74.png',
      alt: 'Grupas aktivitātes',
      orientation: 'portrait'
    },
    {
      id: 8,
      type: 'image',
      src: '/mf6ed80v-t2fudma.png',
      alt: 'Āra izaicinājumi',
      orientation: 'landscape'
    },
  ];

  const openModal = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Header */}
        <h2 
          className="font-['Poppins'] text-[60px] leading-[67px] text-black text-center"
          style={{ 
            margin: '0px 0px 0px 113px',
          }}
        >
          Pasākumi bildēs un video
        </h2>
        
        <p 
          className="font-['Poppins'] text-[18px] leading-[25px] text-black text-center"
          style={{
            margin: '25px 0px 0px 28px',
          }}
        >
          Ieskaties mūsu pasākumu sajūtās – prieks, kustība, komanda un īsti cilvēki.<br />
          Šeit atradīsi foto un video no pasākumiem, kas notikuši skolās, uzņēmumos un ģimenēs visā Latvijā.
        </p>

        {/* Responsive Gallery Grid */}
        <div 
          className="mx-auto px-4"
          style={{
            margin: '60px auto 0',
          }}
        >
          <div 
            className="responsive-gallery-grid gap-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(var(--grid-cols, 3), 1fr)',
              gridAutoRows: '300px',
              maxWidth: '100%',
            }}
          >
            {galleryItems.map((item,index) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer overflow-hidden bg-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 ${
                  item.orientation === 'landscape' && index <= 1
                    ? 'col-span-2 row-span-2' 
                    : 'col-span-1 row-span-2'
                }`}
                style={{
                  gridColumn: item.orientation === 'landscape' && index <= 1? 'span 2' : 'span 1',
                  gridRow: (item.orientation === 'portrait' || item.orientation === 'landscape') && index <= 1 ? 'span 2' : 'span 1',
                  // minHeight: item.orientation === 'portrait' && index <= 1 ? '600px' : '300px'
                }}
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.type === 'video' ? (item.thumbnail || item.src) : item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes={item.orientation === 'landscape' 
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                    : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  }
                />
                
                {/* Video Play Button Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="rounded-full flex items-center justify-center duration-300">
                      <Image
                        src="/icons/video_play.svg"
                        alt="Play video"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
        {/* Call to action section */}
        <SectionCTA
          iconType="skyBlue"
          title="Laiks piedzīvojumam!"
          description="Izvēlies savu programmu vai ļauj mums to radīt kopā ar Tevi."
          buttonText="pieteikt pasākumu"
        />
      </div>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Media Content */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                </div>
              ) : (
                <video
                  className="w-full max-h-[80vh]"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Media Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-lg font-medium mb-2">{selectedMedia.alt}</h3>
              <p className="text-gray-300 text-sm">
                {selectedMedia.type === 'video' ? 'Video' : 'Attēls'} • Reāls Piedzīvojums
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;