"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  // Define the type of hoveredFeature to allow number or null
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Interactive Courses",
      description:
        "Gamified modules teaching STEM through sports applications: biomechanics, physics of trajectories, and more. Earn credits and certifications!",
      icon: "/icons/courses.svg",
      image: "/images/courses.jpg",
    },
    {
      title: "Virtual Workshops",
      description:
        "Live sessions with STEM professionals in sports. Gain real-world insights and mentorship.",
      icon: "/icons/workshops.svg",
      image: "/images/workshops.jpg",
    },
    {
      title: "Career Center",
      description:
        "Apply for internships, scholarships, and scouting opportunities with top sports brands and universities.",
      icon: "/icons/career-center.svg",
      image: "/images/career.jpg",
    },
    {
      title: "Mentorship Hub",
      description:
        "One-on-One mentorship with STEM professionals and monthly Q&A sessions to guide your career.",
      icon: "/icons/mentorship.svg",
      image: "/images/mentorship.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-5xl bg-gradient-to-br from-black/70 via-black/50 to-transparent p-12 rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            STEMletics: Innovate, Excel, Dominate
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-gray-300">
            Where Sports Passion Meets STEM Innovation.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/courses"
              className="bg-blue-500 px-10 py-5 rounded-full text-black font-bold shadow-lg hover:bg-blue-600 hover:scale-105 transform transition-transform"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="bg-purple-500 px-10 py-5 rounded-full text-black font-bold shadow-lg hover:bg-purple-600 hover:scale-105 transform transition-transform"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore Our Features
          </motion.h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-10 rounded-xl shadow-lg transform transition-all ${
                  hoveredFeature === index ? "bg-teal-600 scale-105" : "bg-gray-800"
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
                    className="opacity-50"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <Image src={feature.icon} alt={feature.title} width={80} height={80} />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-300 mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-center text-white">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold">Step Into the Future</h2>
          <p className="mt-6 text-lg">
            Unlock your potential with STEMletics. Your journey begins here.
          </p>
          <div className="mt-10 flex justify-center gap-8">
            <Link
              href="/signup"
              className="bg-white text-indigo-700 px-10 py-5 rounded-full font-bold shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform"
            >
              Join Now
            </Link>
            <Link
              href="/learn-more"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-indigo-700 hover:scale-105 transition-transform"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
