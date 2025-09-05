'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Adventure Enthusiast',
      avatar: '/images/testimonials/avatar-1.jpg',
      quote: 'The hiking tour was absolutely breathtaking! Our guide was knowledgeable and made sure everyone was comfortable throughout the journey. I can\'t wait to book my next adventure!',
      rating: 5,
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Travel Blogger',
      avatar: '/images/testimonials/avatar-2.jpg',
      quote: 'As someone who has traveled extensively, I can confidently say this was one of the best organized adventures I\'ve experienced. The attention to detail and personalized service was exceptional.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'First-time Adventurer',
      avatar: '/images/testimonials/avatar-3.jpg',
      quote: 'I was nervous about trying rock climbing for the first time, but the instructors were patient and encouraging. They made me feel safe while pushing me to challenge myself. Highly recommend!',
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Adventurers Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Hear from people who have experienced our adventures firsthand
            </p>
          </div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                {testimonials[activeIndex].avatar ? (
                  <Image 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <div className="flex mb-3 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-600'}`} 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-300" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}