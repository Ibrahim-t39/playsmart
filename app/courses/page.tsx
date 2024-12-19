"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Star, Trophy, Clock, Lock } from "lucide-react";

// Define a type for courses
type Course = {
  id: number;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced"; // Restrict levels to valid options
  premium: boolean;
  details: string;
};

// Sample course data
const allCourses: Course[] = [
  {
    id: 1,
    title: "Physics in Sports",
    category: "Physics",
    level: "Intermediate",
    premium: false,
    details:
      "Dive into the principles of physics that govern sports, including projectile motion, energy transfer, and real-life examples like basketball shots and soccer kicks.",
  },
  {
    id: 2,
    title: "Biomechanics Fundamentals",
    category: "Biology",
    level: "Beginner",
    premium: false,
    details:
      "Understand the basics of biomechanics, focusing on human movement, energy efficiency, and injury prevention in sports.",
  },
  {
    id: 4,
    title: "Nutrition for Athletes",
    category: "Health",
    level: "Beginner",
    premium: false,
    details:
      "Explore the fundamentals of nutrition tailored for athletic performance, including meal planning, hydration strategies, and recovery tips.",
  },
  {
    id: 5,
    title: "Introduction to Sports Psychology",
    category: "Psychology",
    level: "Beginner",
    premium: false,
    details:
      "Learn how mental health and motivation influence sports performance and how to develop a winning mindset.",
  },
  {
    id: 3,
    title: "Sports Data Analytics",
    category: "Data Science",
    level: "Advanced",
    premium: true,
    details:
      "Learn to analyze sports data, uncover trends, and create predictive models using tools like Python, R, and Tableau.",
  },
  {
    id: 6,
    title: "Engineering in Sports Equipment",
    category: "Engineering",
    level: "Intermediate",
    premium: true,
    details:
      "Design and optimize sports equipment for enhanced safety and performance, such as shock-resistant helmets and aerodynamic running shoes.",
  },
  {
    id: 7,
    title: "Psychology of Peak Performance",
    category: "Psychology",
    level: "Intermediate",
    premium: true,
    details:
      "Discover how mental training, motivation, and psychological principles drive peak performance in sports and life.",
  },
  {
    id: 8,
    title: "Machine Learning in Sports Analytics",
    category: "Data Science",
    level: "Advanced",
    premium: true,
    details:
      "Explore machine learning techniques to predict player performance, optimize strategies, and analyze large-scale sports data.",
  },
];

// CourseCard component with typed props
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const getLevelColor = (level: Course["level"]) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-500";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500";
      case "Advanced":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Physics":
        return <Star className="w-4 h-4" />;
      case "Psychology":
        return <Trophy className="w-4 h-4" />;
      case "Data Science":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Premium Badge */}
      {course.premium && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full">
          <Lock className="w-3 h-3" />
          <span className="text-xs font-semibold">Premium</span>
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            {getCategoryIcon(course.category)}
            {course.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 flex-grow">{course.details}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
              course.level
            )}`}
          >
            {course.level}
          </span>

          <Link
            href={course.premium ? "/pricing" : `/courses/${course.id}`}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              course.premium
                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            }`}
          >
            {course.premium ? "Unlock Course" : "Start Learning"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function CoursesPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("All Categories");

  const filteredCourses = allCourses.filter((course) => {
    return (
      categoryFilter === "All Categories" || course.category === categoryFilter
    );
  });

  const categories = [
    "All Categories",
    ...new Set(allCourses.map((course) => course.category)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Explore Our Courses
          </span>
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover our comprehensive collection of courses designed to enhance
          your understanding of sports science and performance.
        </p>

        {/* Filters */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categoryFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
