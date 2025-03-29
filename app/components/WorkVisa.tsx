'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, DocumentCheckIcon, ClockIcon, ArrowRightIcon, CheckCircleIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Work Permit Processing',
    description: 'Complete assistance in obtaining work permits for various countries including Canada, UK, USA, and more.',
    icon: BriefcaseIcon,
    image: '/work-visa/processing.jpg',
  },
  {
    name: 'Document Verification',
    description: 'Thorough verification of all required documents to ensure a smooth application process.',
    icon: DocumentCheckIcon,
    image: '/work-visa/verification.jpg',
  },
  {
    name: 'Fast Processing',
    description: 'Expedited processing times with regular updates on your application status.',
    icon: ClockIcon,
    image: '/work-visa/processing-time.jpg',
  },
];

const visaProcess = [
  {
    title: 'Initial Assessment',
    description: 'Free consultation to evaluate your eligibility and requirements',
    icon: CheckCircleIcon,
    details: [
      'Profile evaluation',
      'Document checklist',
      'Timeline planning',
      'Cost estimation'
    ]
  },
  {
    title: 'Document Collection',
    description: 'Guided assistance in gathering all necessary documents',
    icon: DocumentCheckIcon,
    details: [
      'Passport verification',
      'Educational documents',
      'Work experience proof',
      'Financial statements'
    ]
  },
  {
    title: 'Application Processing',
    description: 'Expert handling of your visa application',
    icon: GlobeAltIcon,
    details: [
      'Form filling assistance',
      'Document translation',
      'Application submission',
      'Status tracking'
    ]
  }
];

const visaCategories = [
  {
    name: 'Skilled Worker Visa',
    description: 'For professionals with specialized skills',
    icon: BuildingOfficeIcon,
    image: '/work-visa/skilled-worker.jpg',
    requirements: ['Bachelor\'s degree', '2+ years experience', 'Job offer letter']
  },
  {
    name: 'Business Visa',
    description: 'For entrepreneurs and business owners',
    icon: BriefcaseIcon,
    image: '/work-visa/business.jpg',
    requirements: ['Business plan', 'Investment proof', 'Company registration']
  },
  {
    name: 'Family Sponsorship',
    description: 'For family members of residents',
    icon: UserGroupIcon,
    image: '/work-visa/family.jpg',
    requirements: ['Family relationship proof', 'Sponsor\'s status', 'Financial support']
  }
];

export default function WorkVisa() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Work Visa Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Transform Your Career with<br />International Work Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Expert guidance for work visas across Canada, UK, USA, and more. Your trusted partner in international career development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <feature.icon className="absolute top-6 right-6 h-10 w-10 text-white bg-primary p-2 rounded-lg" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group">
                  <span className="text-lg font-semibold">Learn more about {feature.name}</span>
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-32">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Visa Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visaProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary/10 p-5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{step.description}</p>
                <ul className="space-y-4 text-left">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircleIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Work Visa Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visaCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <category.icon className="absolute top-6 right-6 h-10 w-10 text-white bg-primary p-2 rounded-lg" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.name}</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 dark:text-white">Requirements:</h5>
                    <ul className="space-y-3">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircleIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a href="/work-visa" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
            Start Your Visa Application <ArrowRightIcon className="h-6 w-6 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 