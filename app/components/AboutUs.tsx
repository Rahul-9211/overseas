'use client';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-semibold mb-4"
          >
            About Us
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          >
            Your Trusted Immigration Partner
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Visa filling is India's Most Specialisation in Documentation. Having Pan India Associates and Established in 2020 our core competence is visa documentation expertise in providing job overseas.
              </p>
              
              <p className="text-lg leading-relaxed">
                We believe moving abroad is becoming self-reliant, resourceful and having better career prospects.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our service fee is affordable and we are paid only if we are successful. We offer flexible payment options to suit your budget, we provide transparent insights into all service fees, ensuring no unexpected costs.
              </p>
              
              <p className="text-lg leading-relaxed">
                Navigating immigration law can be overwhelming, but with the right immigration agent, you can approach the process with confidence. From understanding visa options to preparing and managing applications, we are your partners in making your immigration journey a success.
              </p>
              
              <p className="text-lg leading-relaxed">
                What our clients are comfortable with is the trust our brand exudes and the transparency of our process which is backed by a proper legal agreement including a clear refund policy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 