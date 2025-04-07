'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DirectorsSection = () => {
  const directors = [
    {
      name: "Komal Selwal",
      role: "Director",
      image: "https://img.freepik.com/free-vector/businesswoman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      description: "With extensive experience in immigration and visa services, Komal Selwal has been instrumental in helping thousands of clients achieve their dreams of working and living abroad. Her expertise in documentation and visa processing has made her a trusted name in the industry.",
      achievements: [
        "Expert in visa documentation and processing",
        "Extensive network of global immigration partners",
        "Successfully processed thousands of visa applications"
      ]
    },
    {
      name: "Vijay Selwal",
      role: "Co-Founder",
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      description: "Vijay Selwal brings a unique perspective to the immigration process, combining technical expertise with a deep understanding of client needs. His innovative approach has revolutionized how we handle visa applications.",
      achievements: [
        "Pioneered efficient visa processing methods",
        "Developed streamlined documentation systems",
        "Built strong international partnerships"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-2">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Our experienced leadership team brings together decades of expertise in immigration and visa services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="p-4 flex items-start space-x-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-primary-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white">
                      {director.name}
                    </h3>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs font-medium">
                      {director.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {director.description}
                  </p>
                  <ul className="space-y-1">
                    {director.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                        <svg
                          className="w-3 h-3 mr-1 text-primary-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection; 