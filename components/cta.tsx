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

      <section className="relative overflow-hidden bg-white">
        {/* Background Shape */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              {/* Header Tagline */}
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/70 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/70">
                <span className="inline-flex bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                  Join Us for Our Events
                </span>
              </div>

              {/* Headline */}
              <h2
                className="relative pb-10 font-nacelle text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black animate-gradient-x"
                data-aos="fade-up"
              >
                Register Now for Our Upcoming Event
              </h2>

              {/* Description */}
              <p
                className="mb-10 max-w-2xl mx-auto text-gray-900 text-base sm:text-lg md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Don’t miss the chance to be part of a transformative spiritual experience. Secure your spot today!
              </p>

              {/* Buttons */}
              <div className="mx-auto flex max-w-sm flex-col gap-4 sm:flex-row sm:max-w-none sm:justify-center">
                {/* Register Button (opens modal) */}
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
                  href="/event-details"
                  className="btn w-full rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-3 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 sm:ml-4 sm:w-auto"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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
