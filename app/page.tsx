'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import SchengenVisa from './components/SchengenVisa';
import TouristVisa from './components/TouristVisa';
import WorkVisa from './components/WorkVisa';
import Appointment from './components/Appointment';
import ConsultationForm from './components/ConsultationForm';
import EligibilityForm from './components/EligibilityForm';
import VisitVisa from './components/VisitVisa';
import ApplicationSteps from './components/ApplicationSteps';
import Testimonials from './components/Testimonials';
import VisaImageSlider from './components/VisaImageSlider';
import LanguageCourses from './components/LanguageCourses';
import TravelCourses from './components/TravelCourses';
import AboutUs from './components/AboutUs';

export default function Home() {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <Hero onConsultationClick={() => setIsConsultationFormOpen(true)} />
      <Services />
      {/* <SchengenVisa /> */}
      <TouristVisa />
      <EligibilityForm />
      <Features />
      {/* <ApplicationSteps /> */}
      <VisaImageSlider />
      <LanguageCourses />
      <TravelCourses />
      {/* <WorkVisa /> */}
      {/* <Testimonials /> */}
      {/* <VisitVisa /> */}
      {/* <Appointment /> */}
      <Contact />
      {/* <Footer /> */}
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
    </main>
  );
}
