
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { ArrowLeft } from 'lucide-react';

const Collections = () => {
  // Update the title
  useEffect(() => {
    document.title = "Collections | ARDEN";
  }, []);

  const categories = [
    { name: "Heritage Collection", items: 12 },
    { name: "Academy Series", items: 8 },
    { name: "Equestrian Line", items: 10 },
    { name: "Evening Attire", items: 6 },
    { name: "Weekend Casual", items: 9 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-arden-cream">
      <Header />
      <main>
        <section className="pt-32 pb-24 bg-arden-cream">
          <div className="arden-container">
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <AnimatedButton 
                  href="/" 
                  className="flex items-center text-arden-navy hover:text-arden-gold"
                  variant="ghost"
                  size="sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </AnimatedButton>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-arden-navy mb-6">Our Collections</h1>
              <div className="w-16 h-[1px] bg-arden-gold mb-8"></div>
              <p className="max-w-2xl text-arden-navy/70 font-light">
                Explore our meticulously curated collections, each embodying the essence of timeless elegance
                and refined luxury that defines the ARDEN experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
                <a 
                  key={index}
                  href={`/collections/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="group relative overflow-hidden h-80 bg-arden-beige block animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
                    <p className="text-lg font-serif">{category.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-arden-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div>
                      <h3 className="text-arden-cream font-serif text-2xl">{category.name}</h3>
                      <p className="text-arden-cream/80 font-light mb-4">{category.items} pieces</p>
                      <div className="w-12 h-[1px] bg-arden-gold"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="py-16">
              <h2 className="font-serif text-3xl text-arden-navy mb-10 text-center">Featured Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Oxford Tailored Blazer", "Academy Trousers", "Silk Evening Shirt", "Merino Cardigan"].map((product, index) => (
                  <a 
                    key={index}
                    href={`/product/${index}`} 
                    className="group block animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-arden-beige h-72 mb-4">
                      <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
                        <p className="text-lg font-serif">{product}</p>
                      </div>
                      <div className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105">
                        {/* This would be replaced with an actual image */}
                      </div>
                    </div>
                    <h3 className="font-serif text-lg text-arden-navy">{product}</h3>
                    <p className="text-arden-navy/70 font-light">$295.00</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
