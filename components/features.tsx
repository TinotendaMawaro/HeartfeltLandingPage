"use client";

import React from 'react';

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const Image = ({ src, width, height, alt, className, fill, priority }: ImageProps) => (
  <img src={src} alt={alt} className={className} style={fill ? { width: '100%', height: '100%', objectFit: 'cover' } : {}} />
);

export default function App() {
  return (
    <>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <Features />
    </>
  );
}

function Features() {
  const images = [
    {
      src: "/images/feature2.png",
      alt: "Event 2",
    },
    {
      src: "/images/feature3.png",
      alt: "Event 3",
    },
    {
      src: "/images/feature1.png",
      alt: "Event 1",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-300 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-300">
            <span className="inline-flex bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
            Heartfelt International Ministries
          </h2>
          <p className="text-lg text-gray-600">
            Heartfelt International Ministries is a global Christian movement founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Rooted in a bold vision to raise a generation of Kingdom-minded believers, Heartfelt is a dynamic, Spirit-led church known for its vibrant worship, life-transforming teachings, and unwavering commitment to building God&apos;s Kingdom across the nations.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center items-end gap-6 pb-12">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl object-cover shadow-md w-[280px] h-96 sm:w-[360px] sm:h-[500px] transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-300 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-300">
            <span className="inline-flex bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold">
              Our Mission & Vision
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
            Celebrate With Us
          </h2>
          <p className="text-lg text-gray-600">
            Heartfelt International Ministries is dedicated to raising a generation of believers rooted in faith, empowered by the Holy Spirit, and committed to impacting their world for Christ. Our mission is to spread the Gospel, nurture disciples, and build strong, vibrant communities.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700"
          >
            OUR STORY
          </a>
        </div>
      </div>

    
  
    </section>
  );
}
