'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const appointmentTypes = [
  {
    title: 'Initial Consultation',
    description: 'Free consultation to discuss your visa requirements and eligibility.',
    duration: '30 minutes'
  },
  {
    title: 'Document Review',
    description: 'Comprehensive review of your documents and application materials.',
    duration: '1 hour'
  },
  {
    title: 'Application Assistance',
    description: 'Guided assistance in completing your visa application forms.',
    duration: '1.5 hours'
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interview sessions and guidance for visa interviews.',
    duration: '1 hour'
  }
];

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '+91 9650733930' ,
    description: 'Call us for immediate assistance'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: 'info@visaconsultancy.com',
    description: 'Send us your queries'
  },
  {
    icon: MapPinIcon,
    title: 'Address',
    details: '123 Visa Street, Immigration City, IC 12345',
    description: 'Visit our office'
  }
];

export default function Appointment() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Book an Appointment</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Schedule Your Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Book a consultation with our immigration experts to discuss your visa requirements and get personalized guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {appointmentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <CalendarIcon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{type.title}</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Duration: {type.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <info.icon className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{info.title}</h4>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">{info.details}</p>
              <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
            Book Your Appointment Now
          </button>
        </motion.div>
      </div>
    </section>
  );
} 