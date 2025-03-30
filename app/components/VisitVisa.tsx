'use client';

import { motion } from 'framer-motion';
import { GlobeAltIcon, DocumentTextIcon, CurrencyDollarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Tourist Visas',
    description: 'Apply for tourist visas to explore destinations worldwide with our expert guidance.',
    icon: GlobeAltIcon,
    image: '/visit-visa/tourist.jpg',
  },
  {
    name: 'Business Visas',
    description: 'Professional assistance for business visa applications to conduct international business.',
    icon: DocumentTextIcon,
    image: '/visit-visa/business.jpg',
  },
  {
    name: 'Affordable Services',
    description: 'Competitive pricing with transparent fee structure for all visa services.',
    icon: CurrencyDollarIcon,
    image: '/visit-visa/affordable.jpg',
  },
];

const visaTypes = [
  {
    name: 'Tourist Visa',
    description: 'Perfect for leisure travel and sightseeing',
    duration: 'Up to 90 days',
    image: '/visit-visa/tourist-type.jpg',
  },
  {
    name: 'Business Visa',
    description: 'Ideal for business meetings and conferences',
    duration: 'Up to 180 days',
    image: '/visit-visa/business-type.jpg',
  },
  {
    name: 'Family Visit',
    description: 'Visit your loved ones abroad',
    duration: 'Up to 90 days',
    image: '/visit-visa/family.jpg',
  },
];

export default function   VisitVisa() {
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
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Visit Visa Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Explore the World with<br />Our Visit Visa Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Make your travel dreams come true with our comprehensive visit visa services and expert guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <feature.icon className="absolute top-4 right-4 h-8 w-8 text-white bg-primary/90 p-2 rounded-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group">
                  <span className="text-lg font-semibold">Learn more about {feature.name}</span>
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Types of Visit Visas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{type.name}</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                  <p className="text-primary font-semibold text-lg">Duration: {type.duration}</p>
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
          <a href="/visit-visa" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
            Explore Visit Visa Options <ArrowRightIcon className="h-6 w-6 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 