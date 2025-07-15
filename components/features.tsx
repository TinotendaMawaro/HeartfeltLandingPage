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
    <section className="w-full px-4 py-16 bg-white text-[#111] font-['Montserrat']">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#1E90FF,#000000,#1E90FF)] bg-clip-text text-transparent tracking-[-0.01em] leading-tight">
          Who we are
        </h2>
        <p className="mt-4 text-base sm:text-lg opacity-80">
          Heartfelt International Ministries is a global Christian movement founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Rooted in a bold vision to raise a generation of Kingdom-minded believers, Heartfelt is a dynamic, Spirit-led church known for its vibrant worship, life-transforming teachings, and unwavering commitment to building God’s Kingdom across the nations.
        </p>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-full sm:w-[350px] ${i === 1 ? 'sm:w-[450px] sm:h-[600px]' : 'sm:h-[450px]'} h-[400px] rounded-[30px] overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer`}
          >
            <img src={img.src} alt={img.alt} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-xl mx-auto text-center">
        <div className="text-sm sm:text-base font-semibold uppercase animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#1E90FF,rgba(30,144,255,0.5),#1E90FF)] bg-clip-text text-transparent">
          Our Mission & Vision
        </div>
        <h3 className="mt-2 text-xl sm:text-2xl font-bold uppercase animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#1E90FF,rgba(30,144,255,0.5),#1E90FF)] bg-clip-text text-transparent">
          Celebrate WITH US
        </h3>
        <p className="mt-4 text-sm sm:text-base text-[#111] opacity-80">
          Heartfelt International Ministries is dedicated to raising a generation of believers rooted in faith, empowered by the Holy Spirit, and committed to impacting their world for Christ. Our mission is to spread the Gospel, nurture disciples, and build strong, vibrant communities
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#about" className="inline-block rounded-xl bg-gradient-to-r from-[#1e90ff] to-[#007bff] px-6 py-3 text-white text-base font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          OUR STORY
        </a>
      </div>
    </section>
  );
}
