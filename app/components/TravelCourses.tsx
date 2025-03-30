'use client';

import { motion } from 'framer-motion';
import { PaperAirplaneIcon, TicketIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const courses = [
  {
    name: 'AVIATION AND TRAVEL MANAGEMENT',
    icon: PaperAirplaneIcon,
    description: 'Flight operations and travel industry management training'
  },
  {
    name: 'TICKETING',
    icon: TicketIcon,
    description: 'Master travel ticketing and reservation systems'
  },
  {
    name: 'TOUR AND TRAVEL CONSULTANT',
    icon: GlobeAltIcon,
    description: 'Professional travel consultant training'
  },
  {
    name: 'VISA FILLING',
    icon: DocumentTextIcon,
    description: 'Visa application and documentation expertise'
  }
];

export default function TravelCourses() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-semibold mb-4"
          >
            Professional Training
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          >
            TOUR AND TRAVEL COURSES
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="inline-block p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <course.icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 