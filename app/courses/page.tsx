"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

// All Courses
const allCourses = [
  { 
    id: 1, 
    title: "Physics in Sports", 
    category: "Physics", 
    level: "Intermediate", 
    premium: false, 
    details: "Dive into the principles of physics that govern sports, including projectile motion, energy transfer, and real-life examples like basketball shots and soccer kicks." 
  },
  { 
    id: 2, 
    title: "Biomechanics Fundamentals", 
    category: "Biology", 
    level: "Beginner", 
    premium: false, 
    details: "Understand the basics of biomechanics, focusing on human movement, energy efficiency, and injury prevention in sports." 
  },
  { 
    id: 4, 
    title: "Nutrition for Athletes", 
    category: "Health", 
    level: "Beginner", 
    premium: false, 
    details: "Explore the fundamentals of nutrition tailored for athletic performance, including meal planning, hydration strategies, and recovery tips." 
  },
  { 
    id: 5, 
    title: "Introduction to Sports Psychology", 
    category: "Psychology", 
    level: "Beginner", 
    premium: false, 
    details: "Learn how mental health and motivation influence sports performance and how to develop a winning mindset." 
  },
  { 
    id: 3, 
    title: "Sports Data Analytics", 
    category: "Data Science", 
    level: "Advanced", 
    premium: true, 
    details: "Learn to analyze sports data, uncover trends, and create predictive models using tools like Python, R, and Tableau." 
  },
  { 
    id: 6, 
    title: "Engineering in Sports Equipment", 
    category: "Engineering", 
    level: "Intermediate", 
    premium: true, 
    details: "Design and optimize sports equipment for enhanced safety and performance, such as shock-resistant helmets and aerodynamic running shoes." 
  },
  { 
    id: 7, 
    title: "Psychology of Peak Performance", 
    category: "Psychology", 
    level: "Intermediate", 
    premium: true, 
    details: "Discover how mental training, motivation, and psychological principles drive peak performance in sports and life." 
  },
  { 
    id: 8, 
    title: "Machine Learning in Sports Analytics", 
    category: "Data Science", 
    level: "Advanced", 
    premium: true, 
    details: "Explore machine learning techniques to predict player performance, optimize strategies, and analyze large-scale sports data." 
  },
];

export default function CoursesPage() {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  // Filter Courses by Category
  const filteredCourses = allCourses.filter((course) => {
    return categoryFilter === "All Categories" || course.category === categoryFilter;
  });

  // Separate Free and Premium Courses
  const freeCourses = filteredCourses.filter((course) => !course.premium);
  const premiumCourses = filteredCourses.filter((course) => course.premium);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <h1 className="text-5xl font-extrabold tracking-wide text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-12">
          Explore Our Courses
        </h1>

        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-center text-gray-300 mb-6">
            Filter Courses
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>All Categories</option>
              <option>Physics</option>
              <option>Biology</option>
              <option>Data Science</option>
              <option>Health</option>
              <option>Engineering</option>
              <option>Psychology</option>
            </select>
          </div>
        </div>

        {/* Free Courses */}
        {freeCourses.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-green-400 mb-8">
              Free Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {freeCourses.map((course) => (
                <div key={course.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative p-6">
                    <h3 className="font-bold text-2xl mb-4 text-green-400">{course.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{course.details}</p>
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-block bg-green-400 text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-green-500 transition-transform transform hover:scale-105"
                    >
                      View Course →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Premium Courses */}
        {premiumCourses.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-red-400 mb-8">
              Premium Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {premiumCourses.map((course) => (
                <div key={course.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative p-6">
                    <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold flex items-center gap-1">
                      <Lock className="w-4 h-4" /> Premium
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-green-400">{course.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{course.details}</p>
                    <Link
                      href="/pricing"
                      className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition-transform transform hover:scale-105"
                    >
                      Unlock Course →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
