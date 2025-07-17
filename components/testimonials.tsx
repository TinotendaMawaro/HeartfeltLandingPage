"use client";

import { useState } from "react";

// Define the categories for buttons in one place
const categories = [
  { id: 1, name: "View All" },
  { id: 2, name: "Events" },
  { id: 3, name: "Media" },
  { id: 4, name: "Home Group" },
  { id: 5, name: "Sound" },
];

// Content for the testimonial cards
const testimonials = [
  {
    content:
      "Our Events Department is the backbone of our community life, responsible for bringing every aspect of our calendar to life.",
    categories: [1, 2],
  },
  {
    content:
      "The Media Department is the digital heartbeat of our church, unifying our community with a consistent message and worship.",
    categories: [1, 3],
  },
  {
    content:
      "Homegroups are where our large church becomes a close-knit family, providing a vital space for spiritual and emotional growth.",
    categories: [1, 4],
  },
  {
    content:
      "Live Stream & Broadcast: We manage the live production of services, ensuring high-quality video and audio are delivered seamlessly.",
    categories: [1, 3],
  },
  {
    content:
      "Reaching the Lost: We coordinate outreach events that share the Gospel with our wider community in creative and impactful ways.",
    categories: [1, 2],
  },
  {
    content:
      "By joining this department, you'll use your gifts to serve God, helping us create a welcoming and engaging environment for everyone.",
    categories: [1, 2, 3, 4, 5],
  },
  {
    content:
      "The Media Department is not just a team of technicians; we are a group of passionate creators and storytellers.",
    categories: [1, 3],
  },
  {
    content:
      "By partnering with us, you'll be on the front lines of a digital ministry that connects our church's many locations and unites our international zones.",
    categories: [1, 3],
  },
  {
    content:
      "Ready to get involved? Sign up today to start your journey and help us make every event a blessed one.",
    categories: [1, 2, 3, 4, 5],
  },
];

// Main Testimonials Component
export default function Testimonials() {
  const [category, setCategory] = useState<number>(1);

  return (
    <section className="bg-white font-['Inter'] text-base text-black py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4">
            Partner with a Department
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            Join us in a divine partnership to empower the church with Spirit-led solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors duration-200 ${
                category === cat.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "border-blue-300 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials
            .filter((t) => t.categories.includes(category))
            .map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-200 p-6 bg-white transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
