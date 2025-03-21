
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";
import TransitionWrapper from "@/components/TransitionWrapper";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <TransitionWrapper animation="slide-down" delay={100}>
          <span className="inline-block py-1 px-3 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            404 Error
          </span>
        </TransitionWrapper>
        
        <TransitionWrapper animation="slide-up" delay={300}>
          <h1 className="text-4xl sm:text-5xl font-medium mb-4">Page Not Found</h1>
        </TransitionWrapper>
        
        <TransitionWrapper animation="fade-in" delay={500} className="mb-8">
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </TransitionWrapper>
        
        <TransitionWrapper animation="zoom-in" delay={700}>
          <Link to="/">
            <AnimatedButton>Return to Home</AnimatedButton>
          </Link>
        </TransitionWrapper>
      </div>
      
      <div className="absolute bottom-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Elegance. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;
