'use client';

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  UserGroupIcon, 
  CheckCircleIcon, 
  DocumentCheckIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const steps = [
  {
    title: 'Initial Consultation',
    description: 'Schedule a free consultation with our immigration experts to discuss your goals and options.',
    icon: UserGroupIcon,
    color: 'bg-blue-500',
    details: [
      'Personalized assessment',
      'Visa program selection',
      'Timeline planning'
    ]
  },
  {
    title: 'Document Collection',
    description: 'Gather and organize all required documents with our comprehensive checklist.',
    icon: DocumentTextIcon,
    color: 'bg-purple-500',
    details: [
      'Document verification',
      'Translation services',
      'Notarization support'
    ]
  },
  {
    title: 'Application Preparation',
    description: 'Our experts prepare your application with attention to every detail.',
    icon: ClipboardDocumentCheckIcon,
    color: 'bg-green-500',
    details: [
      'Form completion',
      'Document review',
      'Quality assurance'
    ]
  },
  {
    title: 'Application Submission',
    description: 'We submit your application to the relevant authorities.',
    icon: PaperAirplaneIcon,
    color: 'bg-orange-500',
    details: [
      'Online submission',
      'Physical submission',
      'Tracking setup'
    ]
  },
  {
    title: 'Follow-up & Updates',
    description: 'Stay informed about your application status with regular updates.',
    icon: DocumentCheckIcon,
    color: 'bg-pink-500',
    details: [
      'Status tracking',
      'Response handling',
      'Additional requirements'
    ]
  },
  {
    title: 'Visa Approval',
    description: 'Celebrate your visa approval and prepare for your journey.',
    icon: CheckCircleIcon,
    color: 'bg-teal-500',
    details: [
      'Visa collection',
      'Travel planning',
      'Settlement guidance'
    ]
  }
];

export default function ApplicationSteps() {
  const router = useRouter();
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Application Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Journey to Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow our proven process to make your immigration journey smooth and successful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircleIcon className="w-4 h-4 mr-2 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                            dark:from-primary/0 dark:via-primary/5 dark:to-primary/0
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button onClick={() => router.push('/appointment')} className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center mx-auto group">
            Start Your Application
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 