'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BriefcaseIcon, 
  GlobeAltIcon, 
  DocumentCheckIcon, 
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Work Visas',
    description: 'Expert assistance for work visa applications across multiple countries. We handle everything from documentation to interview preparation.',
    icon: BriefcaseIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
  {
    title: 'Visit Visas',
    description: 'Smooth processing of visit visa applications for tourism, business meetings, and family visits.',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-purple-600',
    darkColor: 'from-purple-400 to-purple-500',
  },
  {
    title: 'Documentation',
    description: 'Comprehensive documentation support including visa applications, passport renewal, and legal paperwork.',
    icon: DocumentCheckIcon,
    color: 'from-green-500 to-green-600',
    darkColor: 'from-green-400 to-green-500',
  },
  {
    title: 'Family Sponsorship',
    description: 'Complete guidance for family sponsorship visa applications and reunification processes.',
    icon: UserGroupIcon,
    color: 'from-red-500 to-red-600',
    darkColor: 'from-red-400 to-red-500',
  },
  {
    title: 'Business Immigration',
    description: 'Specialized services for business immigration, including investor visas and business establishment.',
    icon: BuildingOfficeIcon,
    color: 'from-yellow-500 to-yellow-600',
    darkColor: 'from-yellow-400 to-yellow-500',
  },
  {
    title: 'Student Visas',
    description: 'End-to-end support for student visa applications and educational institution selection.',
    icon: AcademicCapIcon,
    color: 'from-indigo-500 to-indigo-600',
    darkColor: 'from-indigo-400 to-indigo-500',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive immigration solutions tailored to your needs. 
            We handle every aspect of your visa application process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Service Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} dark:${service.darkColor} 
                                 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 
                               transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 
                                dark:from-primary-400/0 dark:via-primary-400/5 dark:to-primary-400/0
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Explore All Services
            <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 