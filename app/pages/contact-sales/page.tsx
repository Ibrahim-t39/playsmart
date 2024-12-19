"use client";

import { useState } from "react";

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Contact Our Sales Team
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Have questions about our plans or need a custom solution? Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">Thank You!</h2>
              <p className="text-gray-300">Your message has been successfully sent. We will be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-gray-300 font-medium mb-2">
                  Organization (Optional)
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter your organization name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-400 text-black rounded-lg font-bold text-lg hover:bg-green-500 transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
