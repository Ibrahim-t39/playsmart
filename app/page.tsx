"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Interactive Courses",
      description:
        "Engaging learning modules that blend sports with STEM concepts. Master biomechanics, physics, and data analytics while earning certifications.",
      icon: "/icons/courses.svg",
      image: "/images/courses.jpg",
    },
    {
      title: "Virtual Workshops",
      description:
        "Join live interactive sessions with industry experts. Learn directly from STEM professionals in sports and participate in hands-on activities.",
      icon: "/icons/workshops.svg",
      image: "/images/workshops.jpg",
    },
    {
      title: "Career Development",
      description:
        "Access exclusive internship opportunities, scholarships, and connections with leading sports organizations and academic institutions.",
      icon: "/icons/career-center.svg",
      image: "/images/career.jpg",
    },
    {
      title: "Expert Mentorship",
      description:
        "Connect one-on-one with industry professionals. Regular guidance sessions to help shape your future in sports and STEM.",
      icon: "/icons/mentorship.svg",
      image: "/images/mentorship.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-5xl px-6 py-16 rounded-2xl backdrop-blur-sm bg-black/30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              PlaySmart
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-200 mb-8">
            Where Sports Excellence Meets STEM Innovation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/courses"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg text-white font-bold shadow-lg hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300"
            >
              Start Learning
            </Link>
            <Link
              href="/about"
              className="bg-gray-800 px-8 py-4 rounded-lg text-gray-200 font-bold shadow-lg hover:bg-gray-700 transform transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Why Choose PlaySmart?
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                  hoveredFeature === index 
                    ? "bg-blue-600/20 shadow-lg shadow-blue-500/20" 
                    : "bg-gray-800/50"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Ready to Transform Your Game?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join PlaySmart today and discover how STEM can elevate your athletic performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/auth"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg text-white font-bold shadow-lg hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300"
            >
              Join Now
            </Link>
            <Link
              href="/courses"
              className="bg-gray-800 px-8 py-4 rounded-lg text-gray-200 font-bold shadow-lg hover:bg-gray-700 transform transition-all duration-300"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}