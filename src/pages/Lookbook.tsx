
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { ArrowLeft, Image, Book } from 'lucide-react';

const Lookbook = () => {
  // Update the title
  useEffect(() => {
    document.title = "Lookbook | ARDEN";
  }, []);

  const lookbooks = [
    { name: "Autumn Heritage", year: "2023", images: 12 },
    { name: "Winter Classics", year: "2023", images: 15 },
    { name: "Spring Academia", year: "2024", images: 10 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-arden-darkBeige">
      <Header />
      <main>
        <section className="pt-32 pb-24 bg-arden-navy text-arden-cream">
          <div className="arden-container">
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <AnimatedButton 
                  href="/" 
                  className="flex items-center text-arden-cream hover:text-arden-gold"
                  variant="ghost"
                  size="sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </AnimatedButton>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Lookbook</h1>
              <div className="w-16 h-[1px] bg-arden-gold mb-8"></div>
              <p className="max-w-2xl text-arden-cream/70 font-light">
                Step into the world of ARDEN through our seasonal lookbooks, showcasing our collections
                in carefully curated settings that embody our aesthetic and vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {lookbooks.map((book, index) => (
                <a 
                  key={index}
                  href={`/lookbook/${book.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="group relative overflow-hidden bg-arden-beige/10 p-8 border border-arden-cream/20 hover:border-arden-gold transition-colors duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <Book className="h-8 w-8 text-arden-gold" />
                    <span className="text-arden-cream/50 text-sm">{book.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-arden-gold transition-colors">{book.name}</h3>
                  <p className="text-arden-cream/70 font-light mb-6">{book.images} images</p>
                  <div className="flex items-center text-arden-gold text-sm">
                    <span>View Lookbook</span>
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-16 border-t border-arden-cream/10">
              <h2 className="font-serif text-3xl mb-12 text-center">Featured Lookbook</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div 
                    key={index}
                    className="aspect-[3/4] bg-arden-beige/10 relative group overflow-hidden animate-on-scroll"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image className="h-8 w-8 text-arden-cream/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-arden-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-arden-cream font-serif text-lg">Autumn Heritage</h3>
                        <p className="text-arden-cream/70 font-light text-sm">Shot in the Scottish Highlands</p>
                      </div>
                    </div>
                  </div>
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

export default Lookbook;
