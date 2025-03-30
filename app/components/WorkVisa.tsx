'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, DocumentCheckIcon, UserGroupIcon, ClockIcon, CurrencyDollarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const workVisaTypes = [
  {
    title: 'Skilled Worker Visa',
    description: 'For professionals with specific skills and qualifications in demand.',
    requirements: [
      'Job offer from a licensed sponsor',
      'Minimum salary threshold',
      'English language proficiency',
      'Required skill level'
    ]
  },
  {
    title: 'Intra-Company Transfer',
    description: 'For employees transferring to a branch of their current company.',
    requirements: [
      'Existing employment with company',
      'Minimum salary threshold',
      'Required skill level',
      'Sponsorship from UK branch'
    ]
  },
  {
    title: 'Global Talent Visa',
    description: 'For leaders and potential leaders in academia, research, arts, and digital technology.',
    requirements: [
      'Endorsement from approved body',
      'Exceptional talent or promise',
      'Field-specific achievements',
      'Contribution to UK'
    ]
  }
];

const applicationProcess = [
  {
    step: '1',
    title: 'Initial Assessment',
    description: 'We evaluate your qualifications and work experience to determine the most suitable visa category.'
  },
  {
    step: '2',
    title: 'Document Preparation',
    description: 'We help you gather and prepare all required documents, including certificates, references, and financial records.'
  },
  {
    step: '3',
    title: 'Application Submission',
    description: 'We submit your application with all necessary supporting documents to the relevant authorities.'
  },
  {
    step: '4',
    title: 'Interview Preparation',
    description: 'We provide guidance and practice sessions for your visa interview.'
  }
];

export default function WorkVisa() {
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
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Work Visa</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Pursue Your Career Abroad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our work visa services help professionals secure employment opportunities abroad with comprehensive support throughout the application process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workVisaTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{type.title}</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{type.description}</p>
              <div className="space-y-3">
                {type.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start">
                    <DocumentCheckIcon className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{req}</span>
                  </div>
                ))}
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
            Application Process
          </motion.h3>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {applicationProcess.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{process.title}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <ClockIcon className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Processing Time</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Typically 3-4 weeks for standard applications</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Visa Fees</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Varies by visa type and processing time</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-6 w-6 text-primary mr-3" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Qualifications</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Minimum education and experience requirements apply</p>
          </motion.div>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center mx-auto">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            Start Your Application
          </button>
        </motion.div>
      </div>
    </section>
  );
} 