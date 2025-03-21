
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface TransitionWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'zoom-in';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function TransitionWrapper({
  children,
  animation = 'fade-in',
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
}: TransitionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [once, threshold]);

  return (
    <div 
      ref={ref} 
      className={cn(
        'opacity-0',
        {
          'animate-fade-in': animation === 'fade-in' && isInView,
          'animate-slide-up': animation === 'slide-up' && isInView,
          'animate-slide-down': animation === 'slide-down' && isInView,
          'animate-zoom-in': animation === 'zoom-in' && isInView,
        },
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
