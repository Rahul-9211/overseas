'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, GlobeAltIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import ThemeToggle from './ThemeToggle';
import { useEffect, useRef } from 'react';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const stats = [
  { name: 'Countries Covered', value: '50+', icon: GlobeAltIcon },
  { name: 'Visa Types', value: '20+', icon: BriefcaseIcon },
  { name: 'Success Rate', value: '98%', icon: ArrowRightIcon },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Auto-rotate the globe
    const globe = document.querySelector('.globe-container');
    if (globe) {
      globe.setAttribute('autoRotate', 'true');
      globe.setAttribute('autoRotateSpeed', '0.5');
    }
  }, []);

  return (
    <div ref={containerRef} className="relative isolate overflow-hidden min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <ThemeToggle />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <motion.a
              href="#"
              className="inline-flex space-x-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm">
                Global Immigration Solutions
              </span>
            </motion.a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">
              Your Gateway to Global Opportunities
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Expert immigration consultancy services for work and visit visas. We help you navigate the complex world of international travel and work opportunities.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <motion.a
              href="/contact"
              className="relative inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="/services"
              className="text-sm font-semibold leading-6 text-white hover:text-primary-400 transition-colors"
              whileHover={{ x: 5 }}
            >
              Learn more <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative h-[400px] w-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
              <Globe
                className="globe-container"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                atmosphereColor="#3B82F6"
                atmosphereAltitude={0.1}
                width={600}
                height={400}
                pointColor="#3B82F6"
                pointAltitude={0.1}
                pointRadius={0.5}
                pointsMerge={true}
                pointLabel="d => d.name"
                onGlobeReady={() => {
                  // Add any globe initialization here
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="text-base leading-7 text-gray-300">{stat.name}</div>
                <div className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 