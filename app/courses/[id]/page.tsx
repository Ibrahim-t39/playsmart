"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Physics in Sports",
    category: "Physics",
    level: "Intermediate",
    details: "Dive into the principles of physics that govern sports, from projectile motion to energy transfer.",
    pathway: "Engineering, Physical Sciences",
    whatYouLearn: [
      "Understand projectile motion and how it applies to sports.",
      "Analyze the energy transfer in athletic movements.",
      "Explore case studies of physics in real-world sports.",
    ],
    instructor: {
      name: "Dr. John Smith",
      bio: "PhD in Physics with over 15 years of experience in applying physics principles to sports science.",
      image: "/instructors/john-smith.jpg",
    },
    content: [
      { title: "Introduction to Physics in Sports", duration: "10m" },
      { title: "Projectile Motion in Sports", duration: "20m" },
      { title: "Energy and Power in Athletics", duration: "15m" },
    ],
    reviews: [
      { name: "Jane Doe", comment: "Amazing course! Learned so much about physics in sports.", rating: 5 },
      { name: "Mark P.", comment: "Very detailed and engaging content.", rating: 4 },
    ],
    price: "Free",
  },
  {
    id: 2,
    title: "Biomechanics Fundamentals",
    category: "Biology",
    level: "Beginner",
    details: "Understand the basics of biomechanics, focusing on human movement and efficiency in sports.",
    pathway: "Biological Sciences, Physical Therapy",
    whatYouLearn: [
      "Understand key biomechanical principles.",
      "Analyze human motion in sports contexts.",
      "Learn about efficiency and injury prevention techniques.",
    ],
    instructor: {
      name: "Dr. Emily Davis",
      bio: "Expert in biomechanics with over a decade of experience in sports research.",
      image: "/instructors/emily-davis.jpg",
    },
    content: [
      { title: "Introduction to Biomechanics", duration: "12m" },
      { title: "Human Motion in Sports", duration: "18m" },
      { title: "Injury Prevention Techniques", duration: "15m" },
    ],
    reviews: [
      { name: "Alice R.", comment: "Great introduction to biomechanics in sports.", rating: 5 },
      { name: "James T.", comment: "Very informative and practical.", rating: 4 },
    ],
    price: "Free",
  },
  {
    id: 3,
    title: "Sports Data Analytics",
    category: "Data Science",
    level: "Advanced",
    details: "Learn to analyze sports data, uncover trends, and make predictive models for performance improvement.",
    pathway: "Data Science, Machine Learning",
    whatYouLearn: [
      "Understand basic data science principles in sports.",
      "Create predictive models for sports performance.",
      "Analyze trends in real-world sports data.",
    ],
    instructor: {
      name: "Dr. Alan Turing",
      bio: "Data scientist with extensive experience in sports analytics and predictive modeling.",
      image: "/instructors/alan-turing.jpg",
    },
    content: [
      { title: "Introduction to Sports Analytics", duration: "15m" },
      { title: "Predictive Modeling Basics", duration: "25m" },
      { title: "Analyzing Real-World Data", duration: "20m" },
    ],
    reviews: [
      { name: "Robert G.", comment: "Excellent for anyone interested in sports data.", rating: 5 },
      { name: "Samantha V.", comment: "Very technical but worth it.", rating: 4 },
    ],
    price: "$29.99",
  },
  {
    id: 4,
    title: "Nutrition for Athletes",
    category: "Health",
    level: "Beginner",
    details: "Explore the fundamentals of nutrition tailored for athletic performance and recovery.",
    pathway: "Health Sciences, Sports Nutrition",
    whatYouLearn: [
      "Understand macronutrients and their role in sports.",
      "Learn how to plan an athlete's diet.",
      "Explore case studies in nutrition science.",
    ],
    instructor: {
      name: "Dr. Clara Barton",
      bio: "Nutritionist specializing in athletic performance with over 10 years of experience.",
      image: "/instructors/clara-barton.jpg",
    },
    content: [
      { title: "Introduction to Sports Nutrition", duration: "10m" },
      { title: "Macronutrients and Performance", duration: "20m" },
      { title: "Case Studies in Nutrition", duration: "15m" },
    ],
    reviews: [
      { name: "Michael J.", comment: "Very practical insights on athlete diets.", rating: 5 },
      { name: "Lisa P.", comment: "Simple and effective tips for nutrition.", rating: 4 },
    ],
    price: "Free",
  },
  {
    id: 7,
    title: "Engineering in Sports Equipment",
    category: "Engineering",
    level: "Intermediate",
    details: "Design and optimize sports equipment to enhance safety and performance.",
    pathway: "Engineering, Industrial Design",
    whatYouLearn: [
      "Understand the principles of sports equipment design.",
      "Learn about material science in sports engineering.",
      "Explore case studies in equipment innovation.",
    ],
    instructor: {
      name: "Dr. Nikola Tesla",
      bio: "Innovator in sports engineering and material science with a focus on safety.",
      image: "/instructors/nikola-tesla.jpg",
    },
    content: [
      { title: "Introduction to Equipment Design", duration: "10m" },
      { title: "Material Science in Sports", duration: "25m" },
      { title: "Case Studies in Equipment", duration: "20m" },
    ],
    reviews: [
      { name: "Jordan B.", comment: "Revolutionary insights into sports gear.", rating: 5 },
      { name: "Taylor W.", comment: "A must-take for sports engineers.", rating: 4 },
    ],
    price: "$27.99",
  },
  {
    id: 6,
    title: "Psychology of Peak Performance",
    category: "Psychology",
    level: "Intermediate",
    details: "Discover how mental training and psychological principles lead to peak performance in sports.",
    pathway: "Psychology, Performance Coaching",
    whatYouLearn: [
      "Understand the basics of sports psychology.",
      "Learn techniques for mental conditioning.",
      "Analyze real-life examples of peak performance.",
    ],
    instructor: {
      name: "Dr. Carl Jung",
      bio: "Renowned sports psychologist specializing in performance coaching.",
      image: "/instructors/carl-jung.jpg",
    },
    content: [
      { title: "Introduction to Sports Psychology", duration: "12m" },
      { title: "Techniques for Mental Conditioning", duration: "18m" },
      { title: "Analyzing Real-Life Examples", duration: "20m" },
    ],
    reviews: [
      { name: "Katie H.", comment: "Transformed my mental game.", rating: 5 },
      { name: "Chris F.", comment: "Practical and motivating content.", rating: 4 },
    ],
    price: "$21.99",
  },
  {
    "id": 5,
    "title": "Introduction to Sports Psychology",
    "category": "Psychology",
    "level": "Beginner",
    "details": "Learn how mental health and motivation influence sports performance and how to develop a winning mindset.",
    "pathway": "Psychology, Sports Coaching",
    "whatYouLearn": [
        "Understand how mental health affects sports performance.",
        "Discover techniques to build motivation and resilience.",
        "Learn the basics of developing a winning mindset.",
        "Explore case studies of athletes overcoming mental barriers."
    ],
    "instructor": {
        "name": "Dr. Emily Carter",
        "bio": "Certified sports psychologist with 10+ years of experience working with athletes to improve mental performance.",
        "image": "/instructors/emily-carter.jpg"
    },
    "content": [
        { "title": "Introduction to Sports Psychology", "duration": "15m" },
        { "title": "The Role of Mental Health in Sports", "duration": "20m" },
        { "title": "Motivation and Resilience Techniques", "duration": "18m" },
        { "title": "Developing a Winning Mindset", "duration": "22m" },
        { "title": "Case Studies: Overcoming Mental Barriers", "duration": "25m" }
    ],
    "reviews": [
        { "name": "Alex J.", "comment": "This course gave me practical tips to improve my performance!", "rating": 5 },
        { "name": "Taylor M.", "comment": "Great introduction to sports psychology with relatable examples.", "rating": 4 }
    ],
    "price": "Free"
}
];

export default function CourseDetailsPage() {
  const params = useParams();
  const id = params?.id;
  const courseId = typeof id === "string" ? parseInt(id, 10) : null;
  const course = courseId ? courses.find((c) => c.id === courseId) : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-24">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <Link href="/courses" className="text-green-400 underline mt-4">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-800 to-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
          {/* Left: Course Overview */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-green-400 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-300 mb-4">{course.details}</p>
            <div className="flex items-center gap-4 mb-6">
              <span
                className={`px-3 py-1 text-sm font-medium rounded-lg ${
                  {
                    Physics: "bg-blue-500",
                    Biology: "bg-green-500",
                    "Data Science": "bg-purple-500",
                    Health: "bg-yellow-500",
                    Engineering: "bg-red-500",
                    Psychology: "bg-pink-500",
                  }[course.category]
                } text-black`}
              >
                {course.category}
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-300 rounded-lg">
                {course.level}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">What You Will Learn</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              {course.whatYouLearn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right: Pricing Box */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-sm">
            <h3 className="text-3xl font-bold text-green-400 mb-4">{course.price}</h3>
            <p className="text-gray-300 mb-6">
              Get lifetime access to this course, including updates and bonus content.
            </p>
            <div className="flex flex-col gap-4">
              <button className="w-full bg-green-400 text-black py-3 rounded-lg font-bold hover:bg-green-500 transition">
                Enroll Now
              </button>
              <Link
                href="/courses"
                className="w-full text-center bg-gray-700 text-gray-300 py-3 rounded-lg font-bold hover:bg-gray-600 transition"
              >
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Course Content</h2>
          <ul className="divide-y divide-gray-700">
            {course.content.map((section, index) => (
              <li key={index} className="py-4 flex justify-between">
                <span className="text-gray-300">{section.title}</span>
                <span className="text-gray-400">{section.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.instructor.image}
            alt={course.instructor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-green-400"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-200">{course.instructor.name}</h2>
            <p className="text-gray-400 mt-2">{course.instructor.bio}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Student Reviews</h2>
          <ul className="space-y-6">
            {course.reviews.map((review, index) => (
              <li key={index} className="bg-gray-900 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-300">{review.name}</h3>
                <p className="text-gray-400 mt-2">{review.comment}</p>
                <span className="text-yellow-400 mt-2">{"⭐".repeat(review.rating)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
