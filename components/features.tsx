"use client";
<<<<<<< HEAD
=======

import React from "react";
import Image from "next/image";
>>>>>>> origin/master

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
<<<<<<< HEAD
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
=======
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-300 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-300">
            <span className="inline-flex bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className="animate-gradient-x bg-[linear-gradient(to_right,#000000,#444,#000000)] bg-clip-text bg-[length:200%_auto] text-3xl md:text-4xl font-bold text-transparent mb-4">
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
          <h2 className="animate-gradient-x bg-[linear-gradient(to_right,#000000,#444,#000000)] bg-clip-text bg-[length:200%_auto] text-3xl md:text-4xl font-bold text-transparent mb-4">
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
>>>>>>> origin/master
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

      {/* Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-gradient-x {
          animation: gradientMove 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
