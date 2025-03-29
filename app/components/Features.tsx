'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized guidance throughout your immigration journey.',
    icon: CheckCircleIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
  {
    title: 'Fast Processing',
    description: 'Efficient and timely processing of your visa applications with regular updates.',
    icon: ClockIcon,
    color: 'from-purple-500 to-purple-600',
    darkColor: 'from-purple-400 to-purple-500',
  },
  {
    title: 'Secure Process',
    description: 'Your data and documents are handled with the highest level of security and confidentiality.',
    icon: ShieldCheckIcon,
    color: 'from-green-500 to-green-600',
    darkColor: 'from-green-400 to-green-500',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 support from our dedicated team to address all your queries and concerns.',
    icon: UserGroupIcon,
    color: 'from-red-500 to-red-600',
    darkColor: 'from-red-400 to-red-500',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear and competitive pricing with no hidden costs or surprise fees.',
    icon: CurrencyDollarIcon,
    color: 'from-yellow-500 to-yellow-600',
    darkColor: 'from-yellow-400 to-yellow-500',
  },
  {
    title: 'Regular Updates',
    description: 'Stay informed with regular updates about your application status.',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-indigo-500 to-indigo-600',
    darkColor: 'from-indigo-400 to-indigo-500',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the difference with our comprehensive immigration services 
            and dedicated support system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Feature Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} dark:${feature.darkColor} 
                                 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 
                               transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
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
            Get Started Today
            <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 