"use client"; // Add this directive at the very top

import React from 'react';

// Placeholder for Image component from 'next/image'
// In a real Next.js environment, this would handle image optimization.
// For this preview, we'll use a simple img tag.
const Image = ({ src, width, height, alt, className }) => (
  <img src={src} width={width} height={height} alt={alt} className={className} />
);

// Placeholder for Spotlight component
// Based on the usage, it seems to be a wrapper that applies some mouse-tracking effects.
// For this preview, we'll make it a simple div.
const Spotlight = ({ children, className }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {children}
    </div>
  );
};


export default function App() {
  return (
    <>
      {/* Define the keyframe animation for the gradient */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <Workflows />
    </>
  );
}

function Workflows() {
  // Placeholder image paths for the preview.
  // In a real Next.js app, these would resolve from "@/public".
  const WorflowImg01 = "https://placehold.co/350x288/0047AB/FFFFFF?text=Find+A+Zone";
  const WorflowImg02 = "https://placehold.co/350x288/0047AB/FFFFFF?text=Upcoming+Events";
  const WorflowImg03 = "https://placehold.co/350x288/0047AB/FFFFFF?text=Get+Involved";

  return (
    <section className="bg-white font-['Inter'] text-base text-black py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[64px] tracking-[-0.01em]">
              <span className="text-transparent">ONE CHURCH </span>
              <span className="text-transparent">MANY</span>
              <span className="text-transparent"> LOCATIONS</span>
            </h2>
            <p className="text-lg text-gray-700 font-['Roboto Condensed']">
              Discover your place in our vibrant community — whether you're finding a Heartfelt zone near you, staying updated with powerful upcoming events, or getting involved through service. There’s always a way to connect, grow, and belong.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1: Find a Zone */}
            <a
              className="group/card relative h-[403.9px] w-full max-w-[411px] mx-auto overflow-hidden rounded-[70px] bg-transparent p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-b from-[#1E90FF] to-[rgba(30,144,255,0.5)]"> {/* Blue gradient */}
                {/* Image */}
                <Image
                  className="inline-flex absolute top-[98.92px] left-1/2 -translate-x-1/2 w-[42px] h-[42px] object-cover"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" // Placeholder for icons8-location-32 1.png, changed to white icon
                  width={42}
                  height={42}
                  alt="Location Icon"
                />
                {/* Content */}
                <div className="p-6 absolute top-[161.57px] left-1/2 -translate-x-1/2 w-[251px] h-[131.8px] text-center font-['Roboto Condensed']">
                  <div className="text-white mb-3 text-[32px] uppercase leading-[44px] tracking-[-0.01em] font-['Roboto Condensed']"> {/* Added font-['Roboto Condensed'] */}
                    Find a Zone
                  </div>
                  <p className="text-white text-[16px] leading-[24px]">
                    There is a zone near you.
                  </p>
                </div>
                {/* Bottom line */}
                <div className="absolute right-0 bottom-0 h-[17px] w-full rounded-[70px] bg-[#1E90FF]" />
                {/* Button */}
                <span className="absolute top-[322.07px] left-1/2 -translate-x-1/2 text-white text-sm leading-[100%] inline-block w-[78px] h-[17px]">
                  Click Here
                </span>
              </div>
            </a>

            {/* Card 2: Upcoming Events */}
            <a
              className="group/card relative h-[403.9px] w-full max-w-[410px] mx-auto overflow-hidden rounded-[70px] bg-transparent p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-b from-[#1E90FF] to-[rgba(30,144,255,0.5)]"> {/* Blue gradient */}
                {/* Image */}
                <Image
                  className="inline-flex absolute top-[85.03px] left-1/2 -translate-x-1/2 w-[48px] h-[51px]"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar.png" // Placeholder for Icon.svg, changed to white icon
                  width={48}
                  height={51}
                  alt="Icon"
                />
                {/* Content */}
                <div className="p-6 absolute top-[161.57px] left-1/2 -translate-x-1/2 w-[252px] h-[140.3px] text-center font-['Roboto Condensed']">
                  <div className="text-white mb-3 text-[32px] uppercase leading-[44px] tracking-[-0.01em] font-['Roboto Condensed']"> {/* Added font-['Roboto Condensed'] */}
                    Upcoming Events
                  </div>
                  <p className="text-white text-[16px] leading-[24px]">
                    It&#39;s always powerful, please don&#39;t miss.
                  </p>
                </div>
                {/* Bottom line */}
                <div className="absolute right-0 bottom-0 h-[17px] w-full rounded-[70px] bg-[#1E90FF]" />
                {/* Button */}
                <span className="absolute top-[328.45px] left-1/2 -translate-x-1/2 text-white text-sm leading-[100%] inline-block w-[78px] h-[17px] font-['Inter']">
                  Click Here
                </span>
              </div>
            </a>

            {/* Card 3: Get Involved */}
            <a
              className="group/card relative h-[403.9px] w-full max-w-[411px] mx-auto overflow-hidden rounded-[70px] bg-transparent p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gradient-to-b from-[#1E90FF] to-[rgba(30,144,255,0.5)]"> {/* Blue gradient */}
                {/* Image */}
                <Image
                  className="inline-flex absolute top-[85.03px] left-1/2 -translate-x-1/2 w-[48px] h-[51px]"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/handshake.png" // Placeholder for Icon.svg, changed to white icon
                  width={48}
                  height={51}
                  alt="Icon"
                />
                {/* Content */}
                <div className="p-6 absolute top-[161.57px] left-1/2 -translate-x-1/2 w-[251px] h-[131.8px] text-center font-['Roboto Condensed']">
                  <div className="text-white mb-3 text-[32px] uppercase leading-[44px] tracking-[-0.01em] font-['Roboto Condensed']"> {/* Added font-['Roboto Condensed'] */}
                    Get Involved
                  </div>
                  <p className="text-white text-[16px] leading-[24px]">
                    You are important, we value your contribution.
                  </p>
                </div>
                {/* Bottom line */}
                <div className="absolute right-0 bottom-0 h-[17px] w-full rounded-[70px] bg-[#1E90FF]" />
                {/* Button */}
                <span className="absolute top-[327.38px] left-1/2 -translate-x-1/2 text-white text-sm leading-[100%] inline-block w-[78px] h-[17px]">
                  Click Here
                </span>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
