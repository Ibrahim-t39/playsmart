"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  { name: "Thabo Ibrahim Traore", role: "Co-Founder", image: "/team/me.JPG" },
  { name: "Solomon Agyire", role: "Co-Founder", image: "/team/solo.jpeg" },
  { name: "Sunday Ochigbo", role: "Co-Founder", image: "/team/sunday.jpeg" },
  { name: "Amarachi Ezekiel", role: "Co-Founder", image: "/team/amarachi.jpeg" },
];

const milestones = [
  { year: 2023, event: "PlaySmart concept developed" },
  { year: 2024, event: "Initial team assembled and pilot programs planned" },
  { year: 2025, event: "Expected platform launch and first online courses" },
  { year: 2026, event: "Goal: Partner with key sports organizations" },
  { year: 2027, event: "Goal: Reach 50,000 students enrolled" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold tracking-wide text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">
          About PlaySmart
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Bridging sports and STEM to empower the leaders of tomorrow.
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                PlaySmart aims to inspire a new generation of leaders by connecting physical activity with academic
                innovation. Through a STEM-Sports integrated approach, we strive to make learning engaging and impactful.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Focus</h3>
              <ul className="space-y-4">
                {[
                  "Launching accessible STEM-Sports online courses",
                  "Building a strong mentorship network with industry experts",
                  "Developing partnerships with sports organizations",
                  "Providing career pathways in sports technology",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Our 2025 Vision</h3>
              <ul className="text-lg text-gray-300 space-y-3">
                <li>Launch our first integrated STEM-Sports courses</li>
                <li>Secure partnerships with 5+ organizations</li>
                <li>Begin mentorship opportunities with industry leaders</li>
                <li>Establish a foundational community of learners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-800 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-900 rounded-lg p-6 hover:shadow-lg hover:scale-105 transform transition duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 border-4 border-blue-400"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
            Our Journey
          </h2>
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center mb-6 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-gray-300">
                    <h3 className="text-lg font-bold mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">Year: {milestone.year}</p>
                  </div>
                </div>
                <div className="sm:w-1/2 w-full flex justify-center sm:justify-start mt-4 sm:mt-0">
                  <div
                    className={`h-4 w-4 rounded-full bg-green-400 ${
                      index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
