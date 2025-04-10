'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlobeAltIcon, DocumentCheckIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useConsultation } from '../../src/utils/ConsultationContext';

const stats = [
  {
    name: 'Countries Covered',
    value: '50+',
    icon: GlobeAltIcon,
  },
  {
    name: 'Visa Types',
    value: '20+',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Success Rate',
    value: '98%',
    icon: ChartBarIcon,
  },
];

export default function Hero() {
  const { openForm } = useConsultation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      }))
    );
  }, []);

  return (
    <div className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 md:pt-0">
      {/* Background Effects - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        
        {/* Animated Orbs - Adjusted for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-400/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Floating Particles - Reduced for mobile performance */}
        <div className="absolute inset-0 hidden sm:block">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/20 rounded-full dark:bg-primary-400/20"
              initial={{ x: particle.x, y: particle.y }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              What we can {' '}
              <span className="inline md:block">do for you?</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                VisaFilling.com
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert immigration consultancy services for work and visit visas. 
              We make your international dreams a reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={openForm}
                className="btn-primary inline-flex items-center px-5 sm:px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Get Free Consultation <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 ml-2" />
              </button>
              <Link 
                href="/contact" 
                className="btn-outline inline-flex items-center px-5 sm:px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="glass glass-stats p-4 md:p-6 rounded-xl text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-primary-500 dark:text-primary-400" />
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 gradient-text">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">{stat.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile devices */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-500/20 dark:border-primary-400/20 rounded-full p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
} 