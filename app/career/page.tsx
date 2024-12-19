import { Briefcase, MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    title: "Sports Data Analyst",
    company: "AthleteMetrics Inc.",
    location: "New York, NY",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Seeking a talented Sports Data Analyst to join our team. The ideal candidate will have a strong background in statistics and experience with sports analytics.",
  },
  {
    title: "Biomechanics Research Assistant",
    company: "SportsTech Labs",
    location: "Boston, MA",
    type: "Part-time",
    posted: "1 week ago",
    description:
      "Join our cutting-edge research team as a Biomechanics Research Assistant. This role involves conducting experiments and analyzing data related to athletic performance.",
  },
  {
    title: "Sports Technology Engineer",
    company: "InnoSport Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We're looking for an innovative Sports Technology Engineer to help develop next-generation sports equipment and performance monitoring systems.",
  },
];

const resources = [
  {
    title: "Resume Writing Guide",
    description: "Learn how to craft a compelling resume for STEM-Sports careers.",
  },
  {
    title: "Interview Preparation",
    description:
      "Tips and strategies for acing your job interviews in the sports technology field.",
  },
  {
    title: "Networking in STEM-Sports",
    description:
      "Discover effective ways to build your professional network in the STEM-Sports industry.",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Career Center
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Empowering your career journey in STEM-Sports innovation.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Job Listings
            </h2>
            <div className="space-y-8">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-green-400" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                      {job.posted}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 text-white font-bold rounded-md hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Career Resources */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400">
              Career Resources
            </h2>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
              {resources.map((resource, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <p className="text-gray-400 mt-2">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Start exploring STEM-Sports careers or enhance your skills today.
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 text-white font-bold rounded-md hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105">
          Browse More Resources
        </button>
      </div>
    </div>
  );
}
