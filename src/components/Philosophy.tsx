
import React from 'react';
import TransitionWrapper from './TransitionWrapper';
import { cn } from '@/lib/utils';

const principles = [
  {
    id: 1,
    title: "Simplicity",
    description: "Good design makes a product useful. It emphasizes the usefulness of a product while disregarding anything that could detract from it."
  },
  {
    id: 2,
    title: "Quality",
    description: "Good design is thorough down to the last detail. Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect for the user."
  },
  {
    id: 3,
    title: "Innovation",
    description: "Good design is innovative. Technological innovation offers an opportunity to develop inventive solutions that generate new experiences."
  },
  {
    id: 4,
    title: "Longevity",
    description: "Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated. It transcends changes in aesthetic preferences."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section bg-secondary/50">
      <div className="container-tight">
        <TransitionWrapper animation="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-background text-secondary-foreground rounded-full mb-3">
            Our Philosophy
          </span>
          <h2 className="mb-4">Guided by Principle</h2>
          <p className="max-w-2xl mx-auto">
            We believe that thoughtful design leads to better living. Our approach is rooted in timeless principles that prioritize function, clarity, and human experience.
          </p>
        </TransitionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <TransitionWrapper
              key={principle.id}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="glass p-8 rounded-lg h-full">
                <div className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
                  index % 2 === 0 ? "bg-primary/10" : "bg-primary/5"
                )}>
                  <span className="text-lg font-medium">{principle.id}</span>
                </div>
                <h3 className="text-xl mb-3">{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </TransitionWrapper>
          ))}
        </div>
        
        <TransitionWrapper animation="fade-in" delay={400} className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-light text-foreground max-w-3xl mx-auto">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <cite className="mt-4 block text-muted-foreground">A Design Philosophy</cite>
        </TransitionWrapper>
      </div>
    </section>
  );
}
