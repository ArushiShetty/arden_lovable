
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-arden-navy text-arden-cream">
      <div className="arden-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest mb-6 inline-block">
              ARDEN
            </Link>
            <p className="text-arden-cream/70 max-w-xs mb-6 font-light">
              Timeless elegance reimagined for the modern connoisseur. Crafted with passion and attention to detail.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Instagram} label="Instagram" />
              <SocialIcon Icon={Facebook} label="Facebook" />
              <SocialIcon Icon={Twitter} label="Twitter" />
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <FooterLink to="/collections">Collections</FooterLink>
              <FooterLink to="/lookbook">Lookbook</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/shipping">Shipping & Returns</FooterLink>
              <FooterLink to="/care">Garment Care</FooterLink>
              <FooterLink to="/size-guide">Size Guide</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-arden-gold shrink-0 mt-0.5" />
                <span className="text-arden-cream/70 font-light">123 Fashion Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-arden-gold shrink-0" />
                <span className="text-arden-cream/70 font-light">+1 (212) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-arden-gold shrink-0" />
                <span className="text-arden-cream/70 font-light">contact@arden-clothing.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-arden-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-serif text-lg mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-arden-cream/70 text-sm font-light mb-4">Be the first to know about new collections and exclusive offers.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-arden-navy border border-arden-cream/30 px-4 py-2 text-arden-cream placeholder:text-arden-cream/50 focus:outline-none focus:ring-1 focus:ring-arden-gold"
                />
                <AnimatedButton className="bg-arden-gold text-arden-navy hover:bg-arden-gold/90">
                  Subscribe
                </AnimatedButton>
              </div>
            </div>
            
            <div className="text-center md:text-right mt-8 md:mt-0">
              <img src="/placeholder.svg" alt="Payment methods" className="h-6 mb-4 opacity-70" />
              <p className="text-sm text-arden-cream/50 font-light">
                © {currentYear} Arden. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, label }: { Icon: React.ElementType; label: string }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full border border-arden-cream/30 flex items-center justify-center text-arden-cream hover:bg-arden-gold hover:text-arden-navy hover:border-arden-gold transition-colors"
      aria-label={`Follow us on ${label}`}
    >
      <span className="sr-only">{label}</span>
      <Icon className="w-4 h-4" />
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-arden-cream/70 hover:text-arden-cream font-light transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
