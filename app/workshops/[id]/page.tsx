"use client";

import { useParams, useRouter } from "next/navigation";

const workshops = [
  {
    id: 1,
    title: "Intro to Physics in Sports",
    date: "2024-12-15",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual",
    description: "An engaging introduction to physics principles applied in sports.",
    type: "Regularly Scheduled",
    details:
      "This workshop explores the physics behind sports like basketball, soccer, and baseball, providing insights into how athletes maximize performance using physics principles. Great for sports enthusiasts and STEM students!",
  },
  {
    id: 2,
    title: "Biomechanics and Movement Efficiency",
    date: "2024-12-19",
    time: "2:00 PM - 4:00 PM",
    location: "STEMletics HQ",
    description: "Dive into biomechanics fundamentals for athletes.",
    type: "Ongoing",
    details:
      "Learn how biomechanics improve performance and reduce injuries. This workshop covers topics like gait analysis, force distribution, and joint efficiency.",
  },
  {
    id: 3,
    title: "Sports Data Analytics Workshop",
    date: "2024-12-25",
    time: "11:00 AM - 1:00 PM",
    location: "Online Webinar",
    description: "Learn how to analyze sports data to improve performance.",
    type: "Happening This Week",
    details:
      "Discover how to use tools like Python and Excel to analyze player statistics, game strategies, and team performance in real time.",
  },
  {
    id: 4,
    title: "Nutrition for Peak Performance",
    date: "2024-11-30",
    time: "9:00 AM - 11:00 AM",
    location: "Local Library",
    description: "Explore the impact of nutrition on athletic performance.",
    type: "Completed",
    details:
      "Understand the role of macronutrients, hydration, and recovery in sports. Ideal for athletes and fitness enthusiasts.",
  },
  {
    id: 5,
    title: "Engineering Sports Equipment for Safety",
    date: "2025-01-10",
    time: "3:00 PM - 5:00 PM",
    location: "University Auditorium",
    description: "Discover the engineering behind modern sports gear.",
    type: "Upcoming",
    details:
      "This workshop delves into material science, design principles, and safety testing for sports equipment.",
  },
];

export default function WorkshopDetails() {
  const params = useParams(); // Fetch route parameters
  const router = useRouter(); // Navigation

  const id = parseInt(params.id as string, 10);
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Workshop not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-800 to-black py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-green-400 mb-6">{workshop.title}</h1>
          <p className="text-gray-300 mb-4">{workshop.description}</p>
          <p className="text-sm text-gray-400">
            <strong>Type:</strong> {workshop.type}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Workshop Details</h2>
          <p className="text-gray-300 mb-6">{workshop.details}</p>
          <div className="text-gray-400 mb-4">
            <p className="mb-2">
              <strong>Date:</strong> {workshop.date}
            </p>
            <p className="mb-2">
              <strong>Time:</strong> {workshop.time}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {workshop.location}
            </p>
          </div>
          <button
            onClick={() => router.push("/workshops")}
            className="bg-green-400 text-black px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-transform transform hover:scale-105"
          >
            Back to Workshops
          </button>
        </div>
      </div>
    </div>
  );
}
