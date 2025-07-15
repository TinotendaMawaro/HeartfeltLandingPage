"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Placeholder for the useMasonry hook.
// In your project, this would calculate and apply the masonry layout.
// For this complete code snippet, a placeholder is used to prevent errors.
const useMasonry = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // Masonry logic would go here
  }, []);
  return containerRef;
};

// =======================================================================
// Tailwind CSS Custom Animations
// Add the following to your tailwind.config.js file to enable the animations.
// =======================================================================
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'moving-gradient': 'moving-gradient 10s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        'moving-gradient': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'gradient': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      }
    }
  }
}
*/

// =======================================================================
// Component Data
// =======================================================================

// Define the categories for buttons in one place
const categories = [
  { id: 1, name: "View All" },
  { id: 2, name: "Events" },
  { id: 3, name: "Media" },
  { id: 4, name: "Home Group" },
  { id: 5, name: "Sound" },
];

// Content for the testimonial cards, updated to be relevant to each department
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

// =======================================================================
// Main Testimonials Component
// =======================================================================

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <section className="py-16 bg-[linear-gradient(to_right,#F3F4F6,#E5E7EB,#D1D5DB,#E5E7EB,#F3F4F6)] bg-[length:200%_auto] animate-[moving-gradient_10s_linear_infinite]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent relative font-['Roboto Condensed'] text-[32px] tracking-[-0.01em] leading-[64px] uppercase inline-block text-center mb-4">
            Partner with a Department
          </h2>
          <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed']">
            Join us in a divine partnership to empower the church with
            Spirit-led solutions. By serving and contributing to a department,
            you will not only help nurture faith, inspire transformation, and
            build vibrant, thriving communities that shine God’s light across
            the world, but you will also receive the blessing of God.
          </p>
        </div>

        {/* Category Buttons - Now dynamic from the categories array */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full border border-blue-200 transition-colors duration-200 ${
                category === cat.id
                  ? "bg-[#1e90ff] text-white"
                  : "text-[#1e90ff] hover:bg-[#d0e6ff]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              testimonial={testimonial}
              category={category}
            >
              {testimonial.content}
            </Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
}

// =======================================================================
// Testimonial Card Component
// =======================================================================

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`rounded-2xl border border-blue-200/50 p-6 bg-white transition-all duration-300 hover:shadow-lg hover:bg-blue-50/50 ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      } ${
        !testimonial.categories.includes(category)
          ? ""
          : "animate-fade-in-up"
      }`}
    >
      <div className="flex flex-col h-full justify-between gap-4">
        <p className="text-gray-600 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="mt-2 text-sm font-medium">
          <a href="#" className="text-sm font-medium text-[#1e90ff] hover:underline transition-colors duration-200">
            Click here to join a department
          </a>
        </div>
      </div>
    </article>
  );
}