'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { sendEmail } from '../../src/utils/email';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Log when the form is open/closed for debugging
  useEffect(() => {
    if (isOpen) {
      console.log('Consultation form opened');
    } else {
      console.log('Consultation form closed');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await sendEmail({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || 'No additional message provided.',
      });

      if (response.success) {
        setSubmitStatus({ success: true, message: 'Thank you! We will contact you shortly.' });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus({ 
          success: false, 
          message: response.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div 
              className="w-full max-w-lg bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - more prominent and larger hit area */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white z-10 bg-white/80 dark:bg-dark-800/80 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-200"
                aria-label="Close dialog"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Header with visual separation */}
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 pb-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Get Free Consultation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Fill out the form below and our visa experts will get back to you within 24 hours
                </p>
              </div>

              {/* Form with better spacing and layout */}
              <div className="p-5 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Two column layout for desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="input-field"
                        placeholder="John"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="input-field"
                        placeholder="Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email ID*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                      placeholder="+91 9650XXXXX"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Requirements (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field min-h-[100px] resize-y"
                      placeholder="Tell us about your visa requirements or any questions you have..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="pt-2">
                    {submitStatus && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg mb-4 ${
                          submitStatus.success 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' 
                            : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                        }`}
                      >
                        {submitStatus.message}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3.5 rounded-lg font-semibold shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                      By submitting this form, you agree to our <a href="#" className="text-primary-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-500 hover:underline">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 