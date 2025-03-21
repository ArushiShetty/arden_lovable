
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-medium tracking-tight mb-4 inline-block">
              Elegance
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              We create minimal, thoughtfully designed products that balance form and function.
            </p>
            <div className="flex space-x-4">
              <SocialIcon name="twitter" />
              <SocialIcon name="instagram" />
              <SocialIcon name="facebook" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <FooterLink href="#products">Products</FooterLink>
              <FooterLink href="#philosophy">Philosophy</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates about new products and design insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary/50 border-border/50 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <AnimatedButton size="sm">Subscribe</AnimatedButton>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Elegance. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
      aria-label={`Follow us on ${name}`}
    >
      <span className="sr-only">{name}</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
