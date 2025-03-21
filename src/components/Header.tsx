
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedButton from './AnimatedButton';

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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4',
      scrolled ? 'bg-arden-cream/95 backdrop-blur-lg py-2 shadow-sm' : 'bg-transparent'
    )}>
      <div className="arden-container flex items-center justify-between">
        {/* Left navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/lookbook">Lookbook</NavLink>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
        
        {/* Logo (centered) */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-serif tracking-widest">
          <div className="relative group">
            <span className="block transform transition-transform duration-500 group-hover:scale-110">ARDEN</span>
            <span className="block text-xs font-sans tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ESTABLISHED 2023
            </span>
          </div>
        </Link>
        
        {/* Right navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-arden-navy text-arden-cream text-[10px] flex items-center justify-center">0</span>
          </button>
        </nav>
        
        {/* Mobile navigation */}
        <div className={cn(
          'md:hidden fixed inset-0 bg-arden-cream/98 backdrop-blur-lg z-40 transition-transform duration-500 ease-out pt-20',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <nav className="flex flex-col items-center space-y-8 p-8">
            <NavLink to="/collections" onClick={() => setMenuOpen(false)}>Collections</NavLink>
            <NavLink to="/lookbook" onClick={() => setMenuOpen(false)}>Lookbook</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Cart (0)</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="arden-hover-link font-sans text-sm uppercase tracking-widest transition-colors hover:text-arden-navy"
    >
      {children}
    </Link>
  );
}
