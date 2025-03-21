
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import TransitionWrapper from './TransitionWrapper';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-arden-cream pt-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-arden-navy z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-arden-beige z-0"></div>
      
      <div className="relative z-10 arden-container grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
        <div className="flex flex-col justify-center text-arden-cream px-6 lg:px-12">
          <TransitionWrapper animation="slide-up" delay={300} className="mb-4">
            <div className="w-16 h-[1px] bg-arden-gold mb-8"></div>
            <span className="inline-block font-serif italic">Autumn Collection 2023</span>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up" delay={500} className="mb-6">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight mb-4">
              <span data-text="Timeless" className="text-glitch">Timeless</span>
              <br />Elegance
            </h1>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up" delay={700} className="max-w-md mb-10">
            <p className="text-arden-cream/80 font-light">
              Crafted with precision and designed for those who appreciate the finer details. Our latest collection embodies the essence of old money aesthetic.
            </p>
          </TransitionWrapper>
          
          <TransitionWrapper animation="fade-in" delay={900}>
            <div className="flex flex-wrap gap-4">
              <AnimatedButton 
                href="/collections" 
                size="lg" 
                className="arden-button bg-arden-cream text-arden-navy hover:bg-arden-gold hover:text-arden-cream"
              >
                Explore Collection
              </AnimatedButton>
              <AnimatedButton 
                href="/lookbook" 
                size="lg" 
                className="arden-button border border-arden-cream text-arden-cream hover:bg-arden-cream/10"
              >
                View Lookbook
              </AnimatedButton>
            </div>
          </TransitionWrapper>
        </div>
        
        <div className="hidden lg:flex items-center justify-center overflow-hidden pl-12">
          <div className="scroll-trigger relative h-[70vh] w-full overflow-hidden rounded-sm">
            <div className="absolute inset-0 group cursor-pointer overflow-hidden">
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 bg-arden-beige flex items-center justify-center">
                <p className="text-lg font-serif text-arden-navy">Featured Collection Image</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-arden-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-arden-cream font-serif text-2xl">Autumn Heritage</h3>
                <p className="text-arden-cream/80 font-light">Sophisticated designs for the modern elite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a 
          href="#collections" 
          className="text-arden-cream p-2 transition-all hover:translate-y-1"
          aria-label="Scroll to collections"
        >
          <ArrowDown className="w-6 h-6 animate-float" />
        </a>
      </div>
      
      {/* Marquee text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-arden-navy text-arden-cream py-3 z-10">
        <div className="marquee-container">
          <div className="marquee-content">
            {Array(5).fill(
              "ARDEN • TIMELESS ELEGANCE • SUSTAINABLE LUXURY • CRAFTED WITH PASSION • "
            ).map((text, index) => (
              <span key={index} className="mx-4 uppercase text-xs tracking-[0.3em] font-light">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
