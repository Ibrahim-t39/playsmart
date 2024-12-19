"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h1 className="text-6xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-6">
            Where Sports Meet Innovation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover how STEM and sports collide to create the future of education.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/courses"
              className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-transform transform hover:scale-105"
            >
              Explore Courses
            </Link>
            <Link
              href="/about"
              className="bg-blue-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 text-center mb-12">
            Featured Courses
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Physics in Sports",
                image: "/course-physics.jpg",
                description:
                  "Explore the principles of physics through sports scenarios and real-world applications.",
              },
              {
                title: "Sports Medicine Fundamentals",
                image: "/course-medicine.jpg",
                description:
                  "Learn about injury analysis, prevention, and recovery techniques in sports.",
              },
              {
                title: "Data Science in Athletics",
                image: "/course-data-science.jpg",
                description:
                  "Dive into performance metrics and predictive analysis to enhance athletic outcomes.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <Link
                    href="/courses"
                    className="text-blue-400 hover:underline font-bold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400 mb-8">
            What Our Students Say
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "High School Student",
                quote:
                  "STEMletics has transformed my view of science. I never thought physics could be so exciting!",
              },
              {
                name: "Michael Chen",
                role: "College Athlete",
                quote:
                  "The sports medicine course gave me invaluable insights into injury prevention and recovery.",
              },
              {
                name: "Emily Rodriguez",
                role: "Aspiring Data Scientist",
                quote:
                  "Learning data science through sports analytics has been incredibly engaging and practical.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-400 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Start Your STEM Journey?
          </h2>
          <p className="text-lg mb-8">
            Join STEMletics today and unlock your potential where sports and science intersect!
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 hover:text-blue-700 transition-transform transform hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        &copy; {new Date().getFullYear()} STEMletics. All rights reserved.
      </footer>
    </div>
  );
}
