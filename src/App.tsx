
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import Lookbook from "./pages/Lookbook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Add a class to the body when the location changes
  useEffect(() => {
    document.body.classList.add('page-transition');
    
    // Remove the class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 600);
    
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove('page-transition');
    };
  }, [location]);

  return <>{children}</>;
};

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/lookbook" element={<Lookbook />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
