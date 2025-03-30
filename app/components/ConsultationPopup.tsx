'use client';

import { useState, useEffect } from 'react';
import ConsultationForm from './ConsultationForm';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ConsultationForm
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
} 