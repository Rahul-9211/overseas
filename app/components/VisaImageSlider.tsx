'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const visaImages = [
  {
    url: '/images/visa1.png',
    alt: 'USA B1/B2 Visa Document'
  },
  {
    url: '/images/visa2.png',
    alt: 'Schengen Visa Document'
  },
  {
    url: '/images/visa3.png',
    alt: 'Serbia Work Visa Document'
  },
]


export default function VisaImageSlider() {
  return (
    <section className="py-16 relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="container relative mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            SUCCESSFUL VISAS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Continuous Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {[...visaImages, ...visaImages].map((image, index) => (
              <div
                key={index}
                className="flex-none w-[500px] mx-4"
              >
                <div className="relative h-[320px] rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-contain bg-white dark:bg-gray-800"
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 