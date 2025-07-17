"use client";

import Image from "next/image";
import React, { useState } from "react";
import BlurredShape from "@/public/images/blurred-shape.svg";
import RegisterModal from "./RegistrationModal";

export default function Cta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Register Modal */}
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative w-full min-h-[736px] flex items-center justify-center text-left font-['Montserrat'] overflow-hidden">
        {/* Full Background with Image and Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            className="object-cover"
            alt="Richland City during a conference"
            src="/images/dedication.jpg"
            layout="fill"
            quality={100}
          />
          <div className="image-overlay" />
        </div>

        {/* Decorative blurred shape - optional */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-20 -mb-24 ml-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>

        {/* Main Content Card */}
        <div className="relative max-w-5xl mx-auto z-10 px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center md:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 pb-3 justify-center md:justify-start before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
              <span className="bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent font-semibold uppercase text-sm sm:text-base">
                Join Us for Our Events
              </span>
            </div>

            {/* Headline */}
            <h2
              className="relative pb-10 font-nacelle text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black animate-gradient-x"
              data-aos="fade-up"
            >
              Register Now for Our Upcoming Event
            </h2>

            {/* Description */}
            <p
              className="mb-10 max-w-xl mx-auto md:mx-0 text-gray-900 text-base sm:text-lg md:text-xl font-['Roboto_Condensed'] opacity-90"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Don’t miss the chance to be part of a transformative spiritual experience. Secure your spot today!
            </p>

            {/* Buttons */}
            <div className="mx-auto flex max-w-sm flex-col gap-4 sm:flex-row sm:max-w-none sm:justify-start">
              {/* Register Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="btn w-full rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-3 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 sm:w-auto"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Register Now
              </button>

              {/* Learn More Link */}
              <a
                href="/events"
                className="btn w-full rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900 font-semibold border border-gray-200 shadow-md transition hover:from-gray-200 hover:to-gray-100 sm:ml-4 sm:w-auto flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Explore Events
              </a>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.2)
            );
            mix-blend-mode: soft-light;
          }

          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }

          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 6s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}