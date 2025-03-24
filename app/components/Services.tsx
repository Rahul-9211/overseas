'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, GlobeAltIcon, DocumentCheckIcon, UserGroupIcon, BuildingOfficeIcon, ClockIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Work Visas',
    description: 'Professional assistance for work visa applications to various countries worldwide.',
    icon: BriefcaseIcon,
    features: ['Employment-based visas', 'Business visas', 'Skilled worker visas'],
  },
  {
    name: 'Visit Visas',
    description: 'Expert guidance for tourist and business visit visa applications.',
    icon: GlobeAltIcon,
    features: ['Tourist visas', 'Business visit visas', 'Family visit visas'],
  },
  {
    name: 'Document Processing',
    description: 'Comprehensive document preparation and verification services.',
    icon: DocumentCheckIcon,
    features: ['Document verification', 'Translation services', 'Legalization'],
  },
  {
    name: 'Visa Consultation',
    description: 'Personalized consultation to help you choose the right visa type.',
    icon: UserGroupIcon,
    features: ['One-on-one consultation', 'Visa assessment', 'Strategy planning'],
  },
  {
    name: 'Corporate Immigration',
    description: 'Specialized immigration solutions for businesses and organizations.',
    icon: BuildingOfficeIcon,
    features: ['Corporate visas', 'Group applications', 'Business immigration'],
  },
  {
    name: 'Express Processing',
    description: 'Fast-track visa processing for urgent applications.',
    icon: ClockIcon,
    features: ['Priority processing', 'Express service', 'Urgent applications'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Immigration Services</h2>
            <p className="section-subtitle">
              Comprehensive immigration solutions tailored to your needs. We handle everything from application to approval.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="card group relative"
            >
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white group-hover:bg-primary-700 transition-colors">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-dark-900">{service.name}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-dark-600">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-3 text-sm text-dark-600">
                    <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#" className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 