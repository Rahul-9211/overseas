'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const languages = [
  {
    name: 'JAPANESE',
    description: 'Business Japanese with cultural immersion',
    icon: '🇯🇵'
  },
  {
    name: 'FRENCH',
    description: 'Professional French with work experience',
    icon: '🇫🇷'
  },
  {
    name: 'SPANISH',
    description: 'Business Spanish and cultural exchange',
    icon: '🇪🇸'
  },
  {
    name: 'GERMAN',
    description: 'Technical German with job placement',
    icon: '🇩🇪'
  },
  {
    name: 'KOREAN',
    description: 'Business Korean with cultural training',
    icon: '🇰🇷'
  }
];

export default function LanguageCourses() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-semibold mb-4"
          >
            Language Training
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          >
            LANGUAGE COURSES WITH INTERNSHIP
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="inline-block text-2xl group-hover:scale-110 transition-transform duration-200">
                  {language.icon}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {language.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 