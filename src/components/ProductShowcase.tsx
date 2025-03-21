
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

const collections = [
  {
    id: 1,
    name: "Heritage Collection",
    description: "Timeless pieces inspired by aristocratic lineage and old world charm.",
    category: "Formal Wear",
    position: "right",
  },
  {
    id: 2,
    name: "Academy Series",
    description: "Elegant attire reminiscent of prestigious institutions and scholarly pursuits.",
    category: "Smart Casual",
    position: "left",
  },
  {
    id: 3,
    name: "Equestrian Line",
    description: "Sophisticated designs influenced by the refined world of equestrian sports.",
    category: "Outdoor Apparel",
    position: "right",
  }
];

export default function ProductShowcase() {
  // Initialize scroll trigger effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-trigger');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="collections" className="bg-arden-cream py-24">
      <div className="arden-container">
        <div className="text-center mb-20 scroll-trigger">
          <div className="w-16 h-[1px] bg-arden-navy/50 mx-auto mb-8"></div>
          <span className="inline-block font-serif italic text-arden-navy/70 mb-4">Our Signature</span>
          <h2 className="font-serif text-4xl md:text-5xl text-arden-navy mb-6">Curated Collections</h2>
          <p className="max-w-2xl mx-auto text-arden-navy/70 font-light">
            Each piece in our collection is meticulously crafted to embody the timeless elegance and understated luxury that defines the old money aesthetic.
          </p>
        </div>
        
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <CollectionItem 
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center scroll-trigger">
          <AnimatedButton 
            href="/collections" 
            className="arden-button bg-arden-navy text-arden-cream hover:bg-arden-navy/90 group"
          >
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

interface CollectionItemProps {
  collection: {
    id: number;
    name: string;
    description: string;
    category: string;
    position: string;
  };
  index: number;
}

function CollectionItem({ collection, index }: CollectionItemProps) {
  const isImageRight = collection.position === "right";
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      className={cn(
        "flex flex-col scroll-trigger",
        isImageRight ? "md:flex-row" : "md:flex-row-reverse"
      )}
      ref={sectionRef}
    >
      {/* Text content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-10 md:p-12 lg:p-16">
        <span className="text-arden-navy/50 font-serif text-sm mb-2">
          {String(collection.id).padStart(2, '0')} — {collection.category}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-arden-navy mb-4">
          {collection.name}
        </h3>
        <div className="w-16 h-[1px] bg-arden-gold mb-6"></div>
        <p className="text-arden-navy/70 mb-8 font-light">
          {collection.description}
        </p>
        <div>
          <a 
            href={`/collections/${collection.id}`} 
            className="arden-hover-link uppercase tracking-widest text-sm font-light text-arden-navy flex items-center"
          >
            Discover Collection
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Image */}
      <div className="flex-1 relative h-[500px] bg-arden-beige">
        <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
          <p className="text-lg font-serif">{collection.name}</p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {/* This would be replaced with an actual image */}
          <div className="absolute inset-0 group cursor-pointer transition-transform duration-700 hover:scale-105">
            {/* Placeholder for actual image */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-arden-navy text-arden-cream py-1 px-3 text-xs uppercase tracking-widest font-light">
                New Season
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
