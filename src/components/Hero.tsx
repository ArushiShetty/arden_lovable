
import React from 'react';
import TransitionWrapper from './TransitionWrapper';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>
      
      <div className="container-tight text-center">
        <TransitionWrapper animation="fade-in" delay={300} className="mb-6">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
            Beautifully Crafted Products
          </span>
        </TransitionWrapper>
        
        <TransitionWrapper animation="slide-up" delay={500} className="mb-6">
          <h1 className="font-medium">
            Experience True <br className="sm:hidden" />
            <span className="relative inline-block">
              Elegance
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </span>
          </h1>
        </TransitionWrapper>
        
        <TransitionWrapper animation="slide-up" delay={700} className="max-w-2xl mx-auto mb-10">
          <p className="text-lg sm:text-xl">
            Discover our collection of thoughtfully designed products that blend minimalist aesthetics with exceptional functionality.
          </p>
        </TransitionWrapper>
        
        <TransitionWrapper animation="zoom-in" delay={900} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <AnimatedButton size="lg">Explore Collection</AnimatedButton>
          <AnimatedButton size="lg" variant="outline">Learn More</AnimatedButton>
        </TransitionWrapper>
        
        <TransitionWrapper animation="fade-in" delay={1200} className="mt-16">
          <div className="relative h-[40vh] sm:h-[50vh] max-h-[500px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden glass p-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40"></div>
            {/* This would be replaced with an actual image */}
            <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
              <p className="text-lg font-medium">Premium Product Display</p>
            </div>
          </div>
        </TransitionWrapper>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#products" 
          className="text-foreground/60 hover:text-foreground p-2 transition-colors"
          aria-label="Scroll to products"
        >
          <svg 
            className="w-6 h-6 animate-float" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
