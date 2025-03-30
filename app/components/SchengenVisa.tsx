'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, MapIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const schengenCountries = {
  euMembers: [
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Czech Republic', flag: '🇨🇿' },
    { name: 'Denmark', flag: '🇩🇰' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Latvia', flag: '🇱🇻' },
    { name: 'Lithuania', flag: '🇱🇹' },
    { name: 'Luxembourg', flag: '🇱🇺' },
    { name: 'Malta', flag: '🇲🇹' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Slovenia', flag: '🇸🇮' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Sweden', flag: '🇸🇪' }
  ],
  nonEuMembers: [
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'Liechtenstein', flag: '🇱🇮' },
    { name: 'Norway', flag: '🇳🇴' },
    { name: 'Switzerland', flag: '🇨🇭' }
  ]
};

const visaDetails = [
  {
    title: 'Short-Stay Visa',
    description: 'A Schengen visa is a short-stay visa, allowing you to stay in the Schengen area for a maximum of 90 days within any 180-day period.',
    icon: ClockIcon
  },
  {
    title: 'Purpose',
    description: 'Intended for short-term travel for purposes like tourism, business meetings, family visits, medical treatment, studies, or training placements lasting under 3 months.',
    icon: DocumentTextIcon
  },
  {
    title: 'Transit',
    description: 'Allows transit through the Schengen area and airports.',
    icon: MapIcon
  },
  {
    title: 'Not for Work',
    description: 'A Schengen visa does not grant the right to work within the Schengen area.',
    icon: CheckCircleIcon
  }
];

export default function SchengenVisa() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-semibold text-lg uppercase tracking-wider">Schengen Visa</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Your Gateway to European Travel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A Schengen visa allows non-EU nationals to enter and stay in the Schengen area (29 European countries) for short, temporary visits (up to 90 days in any 180-day period) for purposes like tourism, business, or visiting family, but not for work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {visaDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <detail.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">{detail.title}</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* EU Member States */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
              <span className="text-xl">🇪🇺</span>
            </div>
            EU Member States
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {schengenCountries.euMembers.map((country, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-teal-50 dark:from-dark-800 dark:to-teal-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-800/30 overflow-hidden min-w-[280px] flex-shrink-0 cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{country.flag}</span>
                      </div>
                      <div className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">EU Member</div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 mb-2">{country.name}</h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>Processing: 2-3 weeks</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Non-EU Member States */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-3">
              <span className="text-xl">🌍</span>
            </div>
            Non-EU Member States
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {schengenCountries.nonEuMembers.map((country, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-orange-50 dark:from-dark-800 dark:to-orange-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 dark:border-orange-800/30 overflow-hidden min-w-[280px] flex-shrink-0 cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{country.flag}</span>
                      </div>
                      <div className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Non-EU</div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300 mb-2">{country.name}</h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>Processing: 2-3 weeks</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 