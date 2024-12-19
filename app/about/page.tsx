import Image from "next/image";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  { name: "Dr. Emily Chen", role: "Founder & CEO", image: "/placeholder.svg" },
  { name: "Michael Johnson", role: "CTO", image: "/placeholder.svg" },
  { name: "Sarah Thompson", role: "Head of Education", image: "/placeholder.svg" },
  { name: "David Rodriguez", role: "Lead Data Scientist", image: "/placeholder.svg" },
];

const milestones = [
  { year: 2018, event: "STEMletics founded" },
  { year: 2019, event: "Launched first online course" },
  { year: 2020, event: "Partnered with major sports organizations" },
  { year: 2021, event: "Introduced mentorship program" },
  { year: 2022, event: "Reached 100,000 students" },
  { year: 2023, event: "Expanded to international markets" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">
          About STEMletics
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Empowering the next generation of athletes, scientists, and engineers through sports and STEM.
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                At STEMletics, we bridge the gap between physical activity and academic excellence through innovative
                learning experiences. Our mission is to inspire and empower the next generation of leaders in STEM and
                sports.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">What We Do</h3>
              <ul className="space-y-4">
                {[
                  "Provide cutting-edge STEM-Sports integrated courses",
                  "Offer mentorship from industry experts",
                  "Facilitate career opportunities in sports technology",
                  "Foster a community of like-minded learners and professionals",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Our Impact</h3>
              <ul className="text-lg text-gray-300 space-y-3">
                <li>Over 100,000 students enrolled</li>
                <li>Partnerships with 50+ sports organizations</li>
                <li>90% of graduates employed in STEM-Sports fields</li>
                <li>20+ innovative research projects completed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 font-bold text-xl text-blue-400">{milestone.year}</div>
                <div className="flex-grow bg-gray-800 rounded-lg shadow-lg p-4 text-gray-300">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
