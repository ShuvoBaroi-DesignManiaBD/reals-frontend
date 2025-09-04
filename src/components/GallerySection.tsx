'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

const GallerySection: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample gallery data - replace with actual media
  const galleryItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/images/gallery/gallery-1.jpg',
      alt: 'Team building activity outdoors'
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/gallery/video-1.mp4',
      thumbnail: '/images/gallery/video-thumb-1.jpg',
      alt: 'Corporate event highlights'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Adventure activities'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Group activities'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/gallery/gallery-4.jpg',
      alt: 'Outdoor challenges'
    },
    {
      id: 6,
      type: 'video',
      src: '/videos/gallery/video-2.mp4',
      thumbnail: '/images/gallery/video-thumb-2.jpg',
      alt: 'Team collaboration moments'
    },
    {
      id: 7,
      type: 'image',
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Fun team activities'
    },
    {
      id: 8,
      type: 'image',
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Corporate retreat'
    },
    {
      id: 9,
      type: 'image',
      src: '/images/gallery/gallery-7.jpg',
      alt: 'Adventure sports'
    }
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
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[44px] leading-[49px] tracking-[0.88px] font-['Poppins'] text-[#080808] mb-4">
            Pasākumi bildēs un video
          </h2>
          <p className="text-[18px] leading-[24px] font-['Poppins'] text-[#666666] max-w-2xl mx-auto">
            Apskatiet mūsu veiksmīgākos pasākumus un iedvesmojieties no mūsu komandas radītajiem piedzīvojumiem
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-[20px] aspect-[4/3] bg-gray-100"
              onClick={() => openModal(item)}
            >
              {/* Image/Video Thumbnail */}
              <div className="relative w-full h-full">
                <Image
                  src={item.type === 'video' ? (item.thumbnail || item.src) : item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Video Play Button Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="w-6 h-6 text-[#c347fc] ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Media Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? 'Video' : 'Foto'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#c347fc] hover:bg-[#b33ee8] text-white font-['Poppins'] font-medium px-8 py-3 rounded-[5px] transition-colors duration-300 uppercase tracking-[0.5px]">
            Skatīt vairāk
          </button>
        </div>
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