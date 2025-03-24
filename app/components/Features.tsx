'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Guidance',
    description: 'Our experienced consultants provide personalized guidance throughout your visa application process.',
  },
  {
    name: 'High Success Rate',
    description: 'We maintain a high success rate in visa applications through our thorough preparation and attention to detail.',
  },
  {
    name: 'Fast Processing',
    description: 'Efficient document processing and submission to ensure timely visa approvals.',
  },
  {
    name: 'Transparent Process',
    description: 'Clear communication and regular updates about your application status.',
  },
  {
    name: 'Document Verification',
    description: 'Comprehensive document verification to ensure all requirements are met.',
  },
  {
    name: 'Post-Visa Support',
    description: 'Continued support even after visa approval to help with your transition.',
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We provide comprehensive visa solutions with a focus on quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 