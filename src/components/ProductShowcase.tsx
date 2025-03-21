
import React from 'react';
import TransitionWrapper from './TransitionWrapper';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: "Minimalist Speaker",
    description: "Exceptional sound quality meets understated design in our flagship speaker.",
    imagePosition: "right",
  },
  {
    id: 2,
    name: "Elegant Timepiece",
    description: "A watch that embodies precision engineering and timeless aesthetics.",
    imagePosition: "left",
  },
  {
    id: 3,
    name: "Essential Desk Lamp",
    description: "Focused illumination with clean lines and intuitive controls.",
    imagePosition: "right",
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="section">
      <div className="container-tight">
        <TransitionWrapper animation="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-3">
            Our Products
          </span>
          <h2 className="mb-4">Crafted with Purpose</h2>
          <p className="max-w-2xl mx-auto">
            Every object is thoughtfully designed to serve its function beautifully while maintaining visual harmony with its surroundings.
          </p>
        </TransitionWrapper>
        
        <div className="space-y-32">
          {products.map((product, index) => (
            <ProductItem 
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    imagePosition: string;
  };
  index: number;
}

function ProductItem({ product, index }: ProductItemProps) {
  const isImageRight = product.imagePosition === "right";
  
  return (
    <div className={cn(
      "flex flex-col items-center gap-8",
      isImageRight ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      {/* Text content */}
      <TransitionWrapper 
        animation="slide-up" 
        className="flex-1"
        delay={index * 100}
      >
        <div className="max-w-lg">
          <span className="inline-block mb-2 text-sm font-medium text-muted-foreground">
            {String(product.id).padStart(2, '0')}
          </span>
          <h3 className="mb-4">{product.name}</h3>
          <p className="mb-6">{product.description}</p>
          <AnimatedButton>View Details</AnimatedButton>
        </div>
      </TransitionWrapper>
      
      {/* Image */}
      <TransitionWrapper 
        animation="fade-in"
        className="flex-1"
        delay={100 + index * 100}
      >
        <div className="relative h-[400px] w-full rounded-lg glass overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
          <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
            <p className="text-lg font-medium">{product.name}</p>
          </div>
        </div>
      </TransitionWrapper>
    </div>
  );
}
