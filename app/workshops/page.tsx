"use client";
import Link from "next/link";

type Workshop = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
};

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Intro to Physics in Sports",
    date: "2024-12-15",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual Session",
    description: "An engaging introduction to physics principles applied in sports.",
    type: "Regularly Scheduled",
  },
  {
    id: 2,
    title: "Biomechanics and Movement Efficiency",
    date: "2024-12-19",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual Session",
    description: "Dive into biomechanics fundamentals for athletes.",
    type: "Ongoing",
  },
  {
    id: 3,
    title: "Sports Data Analytics Workshop",
    date: "2024-12-25",
    time: "11:00 AM - 1:00 PM",
    location: "Virtual Session",
    description: "Learn how to analyze sports data to improve performance.",
    type: "Happening This Week",
  },
  {
    id: 4,
    title: "Nutrition for Peak Performance",
    date: "2024-11-30",
    time: "9:00 AM - 11:00 AM",
    location: "Virtual Session",
    description: "Explore the impact of nutrition on athletic performance.",
    type: "Completed",
  },
  {
    id: 5,
    title: "Engineering Sports Equipment for Safety",
    date: "2025-01-10",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Session",
    description: "Discover the engineering behind modern sports gear.",
    type: "Upcoming",
  },
];

function categorizeWorkshops(workshops: Workshop[]) {
  const now = new Date();
  return {
    "Upcoming Workshops": workshops.filter(
      (workshop) => new Date(workshop.date) > now &&
      new Date(workshop.date) <= new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
    ),
    "Future Workshops": workshops.filter(
      (workshop) => new Date(workshop.date) > new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
    ),
    "Previous Workshops": workshops.filter((workshop) => new Date(workshop.date) < now),
  };
}

export default function WorkshopsPage() {
  const categorizedWorkshops = categorizeWorkshops(workshops);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              PlaySmart Workshops
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Join our interactive virtual workshops designed to blend sports and STEM education. 
            Learn from experts and connect with peers from anywhere in the world.
          </p>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {Object.entries(categorizedWorkshops).map(([category, workshops]) => (
            <div key={category} className="mb-20 last:mb-0">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">
                {category}
              </h2>
              {workshops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(workshops as Workshop[]).map((workshop) => (
                    <div
                      key={workshop.id}
                      className="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                          {workshop.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {workshop.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <p className="flex items-center gap-2">
                            <span className="font-semibold">Date:</span> 
                            {new Date(workshop.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-semibold">Time:</span> 
                            {workshop.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-semibold">Format:</span> 
                            {workshop.location}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-2">
                        <Link
                          href={`/workshops/${workshop.id}`}
                          className="block w-full py-2 text-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">
                  No workshops scheduled in this category at the moment.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}