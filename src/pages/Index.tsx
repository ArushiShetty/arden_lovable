
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize animation observer for elements with animate-on-scroll class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  // Update the title
  useEffect(() => {
    document.title = "ARDEN | Timeless Elegance";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-arden-cream">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Categories />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  );
};

// Categories section
const Categories = () => {
  return (
    <section className="bg-arden-navy py-24">
      <div className="arden-container">
        <div className="text-center mb-16 scroll-trigger">
          <span className="inline-block font-serif italic text-arden-cream/70 mb-4">Browse By</span>
          <h2 className="font-serif text-4xl md:text-5xl text-arden-cream mb-6">Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Outerwear', 'Tailoring', 'Knitwear'].map((category, index) => (
            <CategoryCard key={index} name={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ name, index }: { name: string; index: number }) => (
  <a href={`/category/${name.toLowerCase()}`} className="scroll-trigger group relative h-80 overflow-hidden bg-arden-beige block" style={{ transitionDelay: `${index * 100}ms` }}>
    <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
      <p className="text-lg font-serif">{name}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-arden-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
      <div>
        <h3 className="text-arden-cream font-serif text-2xl">{name}</h3>
        <p className="text-arden-cream/80 font-light mb-4">Explore our collection</p>
        <div className="w-12 h-[1px] bg-arden-gold"></div>
      </div>
    </div>
  </a>
);

// New Arrivals section
const NewArrivals = () => {
  const products = [
    "Heritage Blazer", 
    "Oxford Shirt", 
    "Academy Trousers", 
    "Merino Sweater"
  ];

  return (
    <section className="bg-arden-beige py-24">
      <div className="arden-container">
        <div className="text-center mb-16 scroll-trigger">
          <span className="inline-block font-serif italic text-arden-navy/70 mb-4">Latest Additions</span>
          <h2 className="font-serif text-4xl md:text-5xl text-arden-navy mb-6">New Arrivals</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} name={product} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center scroll-trigger">
          <a 
            href="/shop" 
            className="arden-button font-serif uppercase tracking-widest text-sm px-8 py-3 bg-arden-navy text-arden-cream hover:bg-arden-navy/90 transition-colors"
          >
            Shop All
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, index }: { name: string; index: number }) => (
  <a href={`/product/${index}`} className="scroll-trigger group block" style={{ transitionDelay: `${index * 100}ms` }}>
    <div className="relative overflow-hidden bg-arden-cream h-72 mb-4">
      <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
        <p className="text-lg font-serif">{name}</p>
      </div>
      <div className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105">
        {/* This would be replaced with an actual image */}
      </div>
    </div>
    <h3 className="font-serif text-lg text-arden-navy">{name}</h3>
    <p className="text-arden-navy/70 font-light">$295.00</p>
  </a>
);

export default Index;
