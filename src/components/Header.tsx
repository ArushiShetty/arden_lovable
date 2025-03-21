
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4',
      scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="container-tight flex items-center justify-between">
        <Link to="/" className="text-2xl font-medium tracking-tight transition-opacity hover:opacity-80">
          Elegance
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={cn(
              'absolute h-0.5 w-full bg-foreground rounded-sm transition-all duration-300',
              menuOpen ? 'top-2 rotate-45' : 'top-0'
            )} />
            <span className={cn(
              'absolute h-0.5 w-full bg-foreground rounded-sm transition-opacity duration-300',
              menuOpen ? 'opacity-0' : 'opacity-100',
              'top-2'
            )} />
            <span className={cn(
              'absolute h-0.5 w-full bg-foreground rounded-sm transition-all duration-300',
              menuOpen ? 'top-2 -rotate-45' : 'top-4'
            )} />
          </div>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#philosophy">Philosophy</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <AnimatedButton size="sm" variant="outline">Get Started</AnimatedButton>
        </nav>
        
        {/* Mobile navigation */}
        <div className={cn(
          'md:hidden fixed inset-0 bg-background/98 backdrop-blur-sm z-40 transition-transform duration-300 ease-out pt-20',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <nav className="flex flex-col items-center space-y-8 p-8">
            <NavLink href="#products" onClick={() => setMenuOpen(false)}>Products</NavLink>
            <NavLink href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</NavLink>
            <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <AnimatedButton size="md" variant="outline" onClick={() => setMenuOpen(false)}>
              Get Started
            </AnimatedButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="relative text-foreground py-2 overflow-hidden group transition-colors hover:text-primary"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
    </a>
  );
}
