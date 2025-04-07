'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, GlobeAltIcon, ClockIcon, DocumentTextIcon, UserGroupIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import usa from '../../public/images/usa.jpg';
import france from '../../public/images/france.jpg';
import serbia from '../../public/images/serbia.jpg';
import germany from '../../public/images/germany.jpg';
import canada from '../../public/images/canada.jpg';
import australia from '../../public/images/australia.jpg';

const popularDestinations = [
  {
    country: 'USA (B1/B2)',
    description: 'Business and tourist visa for visiting the United States. Perfect for business meetings, tourism, and family visits.',
    duration: '5 years',
    processingTime: '30 days',
    image: usa
  },
  {
    country: 'Schengen Visa',
    description: 'Access to 29 European countries with a single visa. Ideal for tourism, business, and family visits across Europe.',
    duration: '1 month - 3 years',
    processingTime: '45 days',
    image: france
  },
  {
    country: 'Serbia Work Visa',
    description: 'Work permit for employment opportunities in Serbia. Includes job search and work authorization.',
    duration: '2 years',
    processingTime: '4 months',
    image: serbia
  },
  {
    country: 'Germany Job Seeker',
    description: '6-month visa to search for employment opportunities in Germany. Perfect for skilled professionals.',
    duration: '6 months',
    processingTime: '3 months',
    image: germany
  },
  {
    country: 'Canada PR',
    description: 'Permanent residency pathway to Canada. Includes work rights, healthcare, and social benefits.',
    duration: '5 years',
    processingTime: '11 months',
    image: canada
  },
  {
    country: 'Australia PR',
    description: 'Permanent residency in Australia with full work rights, healthcare, and social security benefits.',
    duration: '5 years',
    processingTime: '10 months',
    image: australia
  }
];

const visaRequirements = [
  {
    title: 'Valid Passport',
    description: 'Must be valid for at least 6 months beyond your intended stay',
    icon: DocumentTextIcon
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for the duration of your stay',
    icon: CheckCircleIcon
  },
  {
    title: 'Financial Documents',
    description: 'Bank statements and proof of sufficient funds',
    icon: DocumentTextIcon
  },
  {
    title: 'Accommodation Details',
    description: 'Hotel bookings or host invitation letter',
    icon: MapPinIcon
  },
  {
    title: 'Travel Itinerary',
    description: 'Detailed plan of your activities and destinations',
    icon: GlobeAltIcon
  },
  {
    title: 'Photographs',
    description: 'Recent passport-sized photos meeting specific requirements',
    icon: DocumentTextIcon
  }
];

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Dubai', flag: '🇦🇪' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Bahrain', flag: '🇧🇭' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Belgium', flag: '🇧🇪' }
];

export default function TouristVisa() {
  const router = useRouter();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        {/* Animated Countries Marquee */}
        {/* <div className="relative overflow-hidden mb-16 pb-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-4 px-8 py-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-dark-800"></div>
                </div>
                <div className="flex flex-col ml-4">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{country.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full">Tourist Visa</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Processing: 2-3 weeks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Immigration Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
          Our Popular Visas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our most sought-after visa options and find the perfect pathway for your immigration journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {popularDestinations.map((destination, index) => (
            <motion.div
              key={destination.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
            >
              <div className="relative h-40">
                <Image
                  src={destination.image}
                  alt={destination.country}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.country}</h3>
                  <p className="text-white/90 text-sm mb-2 line-clamp-2">{destination.description}</p>
                  <div className="flex items-center text-white/80 text-sm">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="mr-3">Duration: {destination.duration}</span>
                    <span>Processing: {destination.processingTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Required Documents
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaRequirements.map((requirement, index) => (
            <motion.div
              key={requirement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-3">
                <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <requirement.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">{requirement.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{requirement.description}</p>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button onClick={() => router.push('/appointment')} className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center mx-auto group">
            <UserGroupIcon className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
            Start Your Application
            <ArrowRightIcon className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 