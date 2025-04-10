'use client';

import { useEffect } from 'react';
import ConsultationForm from './ConsultationForm';
import { motion } from 'framer-motion';
import { useConsultation } from '../../src/utils/ConsultationContext';

export default function ConsultationPopup() {
  // WhatsApp contact number and message
  const whatsappNumber = "+919650733930"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Hello, I'd like to inquire about visa services.";
  
  // Use our global consultation context
  const { isFormOpen, openForm, closeForm } = useConsultation();
  
  // Create WhatsApp URL
  const getWhatsAppUrl = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };
  
  // Create a global function to open the form from anywhere 
  // (including direct script calls and browser console)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.openConsultationForm = openForm;
    }
    
    // Force open popup immediately if URL has a specific parameter
    if (typeof window !== 'undefined' && window.location.search.includes('showForm=true')) {
      setTimeout(() => {
        openForm();
      }, 500);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        delete window.openConsultationForm;
      }
    };
  }, [openForm]);
  
  // Ensure the form opens on page load (fallback mechanism)
  useEffect(() => {
    // Force open the form after 2 seconds if it's not already open
    // This is a fallback in case the context provider's effect doesn't work
    const timer = setTimeout(() => {
      if (!document.cookie.includes('formShown=true')) {
        console.log('Opening form from popup component...');
        openForm();
        // Set a cookie to track that we've shown the form
        document.cookie = "formShown=true; max-age=3600; path=/";
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [openForm]);

  return (
    <>
      <ConsultationForm
        isOpen={isFormOpen}
        onClose={closeForm}
      />
      
      {/* Floating WhatsApp button (always available when popup is closed) */}
      {!isFormOpen && (
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      )}
      
      {/* Always have a hidden button to allow scripts to find and click it */}
      <button
        onClick={openForm}
        className="hidden"
        aria-label="Open consultation form"
        id="consultation-form-opener"
      />
    </>
  );
} 