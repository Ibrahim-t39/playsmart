import { CalendarDays, Users, Clock } from 'lucide-react';

const workshops = [
  {
    title: "Advanced Sports Analytics",
    date: "July 15, 2023",
    time: "2:00 PM - 4:00 PM EST",
    instructor: "Dr. Sarah Johnson",
    description: "Dive deep into the world of sports analytics. Learn how to use advanced statistical methods to analyze player performance and team strategies.",
  },
  {
    title: "Biomechanics in Action",
    date: "July 22, 2023",
    time: "1:00 PM - 3:00 PM EST",
    instructor: "Prof. Michael Chen",
    description: "Explore the principles of biomechanics and how they apply to various sports. Includes practical demonstrations and analysis techniques.",
  },
  {
    title: "Sports Technology Innovation",
    date: "August 5, 2023",
    time: "3:00 PM - 5:00 PM EST",
    instructor: "Eng. Emily Rodriguez",
    description: "Discover the latest technological innovations in sports equipment and performance monitoring. Includes a showcase of cutting-edge sports tech.",
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 mb-12">
          Upcoming Workshops
        </h1>

        <div className="grid gap-12">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-4">{workshop.title}</h2>
                <div className="flex flex-col md:flex-row md:items-center mb-4 space-y-2 md:space-y-0 md:space-x-6">
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-green-400" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-400" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    <span>{workshop.instructor}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{workshop.description}</p>
                <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-transform transform hover:scale-105">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
