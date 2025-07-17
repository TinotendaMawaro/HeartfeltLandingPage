"use client";

import { useState, useRef, useEffect } from "react";

const useMasonry = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // Masonry logic could go here
  }, []);
  return containerRef;
};

const categories = [
  { id: 1, name: "View All" },
  { id: 2, name: "Events" },
  { id: 3, name: "Media" },
  { id: 4, name: "Home Group" },
  { id: 5, name: "Sound" },
];

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

export default function Testimonials() {
  const [category, setCategory] = useState<number>(1);
  const masonryContainer = useMasonry();

  return (
    <section className="bg-white font-['Inter'] text-base text-black py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
            Partner with a Department
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            Join us in a divine partnership to empower the church with Spirit-led solutions. By serving and contributing to a department, you will not only help nurture faith, inspire transformation, and build vibrant, thriving communities that shine God’s light across the world, but you will also receive the blessing of God.
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

        {/* Testimonials Grid */}
        <div
          ref={masonryContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: { content: string; categories: number[] };
  category: number;
  children: React.ReactNode;
}) {
  const isVisible = testimonial.categories.includes(category);

  return (
    <article
      className={`rounded-2xl border border-blue-200 p-6 bg-white transition-all duration-300 ease-in-out transform ${
        isVisible
          ? "opacity-100 animate-fade-in-up hover:shadow-lg hover:-translate-y-1"
          : "opacity-30 pointer-events-none"
      }`}
    >
      <div className="flex flex-col justify-between h-full gap-4">
        <p className="text-gray-600 text-base leading-relaxed before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="mt-2">
          <a
            href="/departments"
            className="text-sm font-semibold text-blue-600 hover:underline transition"
          >
            Click here to join a department
          </a>
        </div>
      </div>
    </article>
  );
}
