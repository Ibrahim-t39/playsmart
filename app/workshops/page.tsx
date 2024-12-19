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
    location: "Virtual",
    description: "An engaging introduction to physics principles applied in sports.",
    type: "Regularly Scheduled",
  },
  {
    id: 2,
    title: "Biomechanics and Movement Efficiency",
    date: "2024-12-19",
    time: "2:00 PM - 4:00 PM",
    location: "STEMletics HQ",
    description: "Dive into biomechanics fundamentals for athletes.",
    type: "Ongoing",
  },
  {
    id: 3,
    title: "Sports Data Analytics Workshop",
    date: "2024-12-25",
    time: "11:00 AM - 1:00 PM",
    location: "Online Webinar",
    description: "Learn how to analyze sports data to improve performance.",
    type: "Happening This Week",
  },
  {
    id: 4,
    title: "Nutrition for Peak Performance",
    date: "2024-11-30",
    time: "9:00 AM - 11:00 AM",
    location: "Local Library",
    description: "Explore the impact of nutrition on athletic performance.",
    type: "Completed",
  },
  {
    id: 5,
    title: "Engineering Sports Equipment for Safety",
    date: "2025-01-10",
    time: "3:00 PM - 5:00 PM",
    location: "University Auditorium",
    description: "Discover the engineering behind modern sports gear.",
    type: "Upcoming",
  },
];

function categorizeWorkshops(workshops: Workshop[]) {
  const now = new Date();
  return {
    "Previous Workshops": workshops.filter((workshop) => new Date(workshop.date) < now),
    "Today's Workshops": workshops.filter((workshop) => {
      const workshopDate = new Date(workshop.date);
      return workshopDate.toDateString() === now.toDateString();
    }),
    "Upcoming (This Week)": workshops.filter(
      (workshop) =>
        new Date(workshop.date) > now &&
        new Date(workshop.date) <= new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
    ),
    "Future Workshops": workshops.filter(
      (workshop) => new Date(workshop.date) > new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
    ),
    "Recurring Workshops": workshops.filter((workshop) => workshop.type === "Recurring"),
  };
}

export default function WorkshopsPage() {
  const categorizedWorkshops = categorizeWorkshops(workshops);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gradient-to-br from-gray-800 to-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold text-green-400 mb-4">Workshops</h1>
          <p className="text-xl text-gray-300">
            Discover our expertly crafted workshops, tailored to your learning pace, categorized by past, current, and upcoming events.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(categorizedWorkshops).map(([category, workshops]) => (
            <div key={category} className="mb-16">
              <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-500 pb-2">
                {category}
              </h2>
              {workshops.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(workshops as Workshop[]).map((workshop) => (
                    <li
                      key={workshop.id}
                      className="flex flex-col bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-6 flex-1">
                        <h3 className="text-2xl font-bold text-green-400 mb-2">
                          {workshop.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                          {workshop.description}
                        </p>
                        <p className="text-sm text-gray-400 mb-1">
                          <strong>Date:</strong> {workshop.date}
                        </p>
                        <p className="text-sm text-gray-400 mb-1">
                          <strong>Time:</strong> {workshop.time}
                        </p>
                        <p className="text-sm text-gray-400 mb-4">
                          <strong>Location:</strong> {workshop.location}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-4 text-center">
                        <Link
                          href={`/workshops/${workshop.id}`}
                          className="bg-green-400 text-black px-6 py-2 rounded-full font-bold hover:bg-green-500 transition-transform transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No workshops in this category.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
