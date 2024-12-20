"use client";

import Image from "next/image";
import { Star, Calendar, Info, XCircle, Lock } from "lucide-react";
import { useState } from "react";

type Mentor = {
  name: string;
  expertise: string;
  image: string;
  rating: number;
  bio: string;
  details: string[];
};

const mentors: Mentor[] = [
  {
    name: "Dr. Alex Thompson",
    expertise: "Sports Biomechanics",
    image: "/mentorship/alex",
    rating: 4.9,
    bio: "Dr. Thompson is a leading expert in sports biomechanics with over 15 years of experience in analyzing and improving athletic performance.",
    details: [
      "Worked with Olympic teams to optimize athletic performance.",
      "Developed innovative tools for injury prevention and recovery.",
      "Conducts workshops on biomechanics and sports performance.",
    ],
  },
  {
    name: "Prof. Maria Garcia",
    expertise: "Sports Data Science",
    image: "/mentorship/maria",
    rating: 4.8,
    bio: "Prof. Garcia specializes in applying advanced data science techniques to sports analytics, helping teams and athletes gain a competitive edge.",
    details: [
      "Consulted for major sports leagues on predictive analytics.",
      "Developed AI-based models for talent scouting and performance.",
      "Runs data-driven workshops on machine learning in sports.",
    ],
  },
  {
    name: "Eng. David Webb",
    expertise: "Sports Technology",
    image: "/mentorship/david",
    rating: 4.7,
    bio: "Eng. Webb is at the forefront of sports technology innovation, developing cutting-edge equipment and performance monitoring systems.",
    details: [
      "Designed wearable devices for tracking athlete performance.",
      "Developed smart sensors for real-time sports data analysis.",
      "Collaborates with tech firms on sports technology innovation.",
    ],
  },
  {
    name: "Dr. Emily Johnson",
    expertise: "Athlete Psychology",
    image: "/mentorship/emily",
    rating: 4.9,
    bio: "Dr. Johnson is a renowned psychologist focusing on mental performance strategies for elite athletes.",
    details: [
      "Helps athletes overcome performance anxiety and mental blocks.",
      "Develops tailored mental training programs for optimal focus.",
      "Works with professional teams on mental resilience strategies.",
    ],
  },
];

export default function MentorshipPage() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const closeModal = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Mentorship Program
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Connect with industry experts to gain personalized guidance and accelerate your STEM-Sports career. Unlock premium access for exclusive sessions.
          </p>
        </section>

        {/* Mentor Cards Section */}
        <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-2">{mentor.name}</h2>
                <p className="text-sm font-semibold text-gray-300 mb-4">{mentor.expertise}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">{mentor.rating}/5.0</span>
                </div>
                <div className="flex items-center mb-4">
                  <Lock className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm">Premium</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-green-500 transition-transform transform hover:scale-105 flex items-center justify-center"
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    <Info className="w-5 h-5 mr-2" />
                    View Details
                  </button>
                  <button
                    className="bg-blue-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-500 transition-transform transform hover:scale-105 flex items-center justify-center"
                    onClick={() => (window.location.href = "/pricing")}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Unlock Premium
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Mentor Details Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-full max-w-lg text-white relative">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={closeModal}
            >
              <XCircle className="w-6 h-6" />
            </button>
            <Image
              src={selectedMentor.image}
              alt={selectedMentor.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-green-400 mb-4">{selectedMentor.name}</h2>
            <p className="text-lg text-gray-300 mb-6">{selectedMentor.bio}</p>

            <h3 className="text-2xl font-bold text-blue-400 mb-4">Key Details</h3>
            <ul className="space-y-3">
              {selectedMentor.details.map((detail, index) => (
                <li
                  key={index}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md"
                >
                  {detail}
                </li>
              ))}
            </ul>

            <button
              className="mt-6 bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-transform transform hover:scale-105 w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
