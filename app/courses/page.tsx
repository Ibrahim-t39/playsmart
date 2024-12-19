import Link from "next/link";

const courses = [
  { id: 1, title: "Physics in Sports", category: "Physics", level: "Intermediate" },
  { id: 2, title: "Biomechanics Fundamentals", category: "Biology", level: "Beginner" },
  { id: 3, title: "Sports Data Analytics", category: "Data Science", level: "Advanced" },
  { id: 4, title: "Nutrition for Athletes", category: "Health", level: "Beginner" },
  { id: 5, title: "Engineering in Sports Equipment", category: "Engineering", level: "Intermediate" },
  { id: 6, title: "Psychology of Peak Performance", category: "Psychology", level: "Intermediate" },
];

export default function CoursesPage() {
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
            <select className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>All Categories</option>
              <option>Physics</option>
              <option>Biology</option>
              <option>Data Science</option>
              <option>Health</option>
              <option>Engineering</option>
              <option>Psychology</option>
            </select>
            <select className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative p-6">
                {/* Background Icon */}
                <div className="absolute top-3 right-3 text-green-400 opacity-10 text-8xl font-extrabold">
                  {course.category.charAt(0)}
                </div>

                {/* Content */}
                <h3 className="font-bold text-2xl mb-4 text-green-400">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${
                    {
                      Physics: "bg-blue-500",
                      Biology: "bg-green-500",
                      "Data Science": "bg-purple-500",
                      Health: "bg-yellow-500",
                      Engineering: "bg-red-500",
                      Psychology: "bg-pink-500",
                    }[course.category]
                  } text-black`}>
                    {course.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-700 text-gray-300 rounded-lg">
                    {course.level}
                  </span>
                </div>
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
      </div>
    </div>
  );
}
