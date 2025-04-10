'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import TouristVisa from './components/TouristVisa';
import EligibilityForm from './components/EligibilityForm';
import VisaImageSlider from './components/VisaImageSlider';
import LanguageCourses from './components/LanguageCourses';
import TravelCourses from './components/TravelCourses';
import AboutUs from './components/AboutUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <Hero />
      <Services />
      <TouristVisa />
      <EligibilityForm />
      <Features />
      <VisaImageSlider />
      <LanguageCourses />
      <TravelCourses />
      <Contact />
    </main>
  );
}
