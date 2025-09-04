import Link from 'next/link';
import Image from 'next/image';

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cta-bg.jpg" 
          alt="Adventure background" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join us for an unforgettable experience that will challenge you and create lasting memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adventures"
              className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Adventures
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Adventures</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}