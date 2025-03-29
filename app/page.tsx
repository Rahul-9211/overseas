import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkVisa from './components/WorkVisa';
import VisitVisa from './components/VisitVisa';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkVisa />
      {/* <VisitVisa /> */}
      <Features />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      {/* Additional sections will be added here */}
    </main>
  );
}
