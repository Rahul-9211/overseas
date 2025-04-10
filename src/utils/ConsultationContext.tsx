'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

interface ConsultationContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Handle first render and hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Set the initial popup to show automatically after 2 seconds
  useEffect(() => {
    // Only run this effect on the client side after mounting
    if (!mounted) return;
    
    let timer: NodeJS.Timeout;
    
    try {
      const hasUserClosedPopup = sessionStorage.getItem('hasClosedPopup');
      
      // Always show the form after 2 seconds if it hasn't been closed before
      if (hasUserClosedPopup !== 'true') {
        timer = setTimeout(() => {
          console.log('Opening consultation form...');
          setIsFormOpen(true);
        }, 2000);
      }
    } catch (error) {
      // In case sessionStorage is not available (e.g., in private browsing)
      console.error('Error accessing sessionStorage:', error);
      timer = setTimeout(() => {
        setIsFormOpen(true);
      }, 2000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [mounted]);
  
  const openForm = () => {
    setIsFormOpen(true);
  };
  
  const closeForm = () => {
    setIsFormOpen(false);
    try {
      // Remember that the user has closed the popup in this session
      sessionStorage.setItem('hasClosedPopup', 'true');
    } catch (error) {
      console.error('Error setting sessionStorage:', error);
    }
  };
  
  return (
    <ConsultationContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
} 