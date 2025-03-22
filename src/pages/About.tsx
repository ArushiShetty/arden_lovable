
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Philosophy from '@/components/Philosophy';

const About = () => {
  useEffect(() => {
    // Update the title
    document.title = "ARDEN | About Us";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-arden-darkBeige">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <Philosophy />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-arden-navy pt-20">
      <div className="arden-container text-center text-arden-cream">
        <span className="inline-block font-serif italic text-arden-cream/70 mb-4">Est. 2023</span>
        <h1 className="font-serif text-6xl md:text-7xl mb-6">Our Story</h1>
        <p className="max-w-2xl mx-auto text-arden-cream/80 font-light mb-8">
          Crafting timeless elegance for the modern connoisseur. Discover the story behind ARDEN.
        </p>
        <div className="w-16 h-[1px] bg-arden-gold mx-auto"></div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-24 bg-arden-darkBeige">
      <div className="arden-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-trigger">
            <span className="inline-block font-serif italic text-arden-cream/80 mb-4">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-arden-cream mb-6">A Commitment to Excellence</h2>
            <div className="w-16 h-[1px] bg-arden-gold mb-8"></div>
            <p className="text-arden-cream/90 font-light mb-6">
              Born from a passion for timeless design and exceptional craftsmanship, ARDEN was established with a simple yet profound mission: to create garments that transcend trends and embody the essence of old money aesthetic.
            </p>
            <p className="text-arden-cream/90 font-light mb-6">
              Our founder, with a background in traditional tailoring and a keen eye for detail, sought to bridge the gap between heritage techniques and contemporary sensibilities. The result is a brand that honors the past while embracing the present.
            </p>
            <p className="text-arden-cream/90 font-light">
              Each ARDEN piece is a testament to our commitment to quality, from the selection of premium materials to the meticulous finishing touches that distinguish our garments.
            </p>
          </div>
          
          <div className="relative h-[600px] bg-arden-beige scroll-trigger">
            <div className="absolute inset-0 flex items-center justify-center text-arden-navy">
              <p className="text-lg font-serif">Our Workshop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Alexandra Bennett",
      role: "Founder & Creative Director",
      bio: "With over 15 years in luxury fashion, Alexandra brings her vision of timeless elegance to life through ARDEN."
    },
    {
      name: "James Harrington",
      role: "Head of Design",
      bio: "Trained at prestigious fashion institutes, James combines traditional techniques with contemporary aesthetics."
    },
    {
      name: "Olivia Chen",
      role: "Production Manager",
      bio: "Ensuring the highest standards of craftsmanship, Olivia oversees every step of the production process."
    }
  ];

  return (
    <section className="py-24 bg-arden-beige">
      <div className="arden-container">
        <div className="text-center mb-16 scroll-trigger">
          <span className="inline-block font-serif italic text-arden-navy/70 mb-4">The People</span>
          <h2 className="font-serif text-4xl md:text-5xl text-arden-navy mb-6">Our Team</h2>
          <p className="max-w-2xl mx-auto text-arden-navy/80 font-light">
            Meet the passionate individuals behind ARDEN who bring their expertise and dedication to every garment we create.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="scroll-trigger bg-arden-cream p-8" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="h-60 bg-arden-navy mb-6 flex items-center justify-center text-arden-cream">
                <p className="text-lg font-serif">{member.name}</p>
              </div>
              <h3 className="font-serif text-xl text-arden-navy mb-2">{member.name}</h3>
              <div className="w-12 h-[1px] bg-arden-gold mb-4"></div>
              <p className="text-arden-navy/60 text-sm mb-4">{member.role}</p>
              <p className="text-arden-navy/80 font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
