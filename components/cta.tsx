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

      <section className="relative overflow-hidden py-20 md:py-32 bg-[linear-gradient(to_right,#F3F4F6,#E5E7EB,#D1D5DB,#E5E7EB,#F3F4F6)] bg-[length:200%_auto] animate-[moving-gradient_10s_linear_infinite]">
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
          <div className="mx-auto max-w-4xl text-center">
            {/* Header Tagline */}
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
              <span className="inline-flex bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                Join Us for Our Events
              </span>
            </div>

            {/* Headline */}
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[64px] tracking-[-0.01em] drop-shadow-md"
              data-aos="fade-up"
            >
              Register Now for Our Upcoming Event
            </h2>

            {/* Description */}
            <p
              className="mb-10 max-w-2xl mx-auto text-gray-900 text-base sm:text-lg md:text-xl font-['Roboto Condensed'] opacity-80"
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
                className="btn w-full rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 px-6 py-3 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 sm:w-auto"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Register Now
              </button>

              {/* Learn More Link */}
              <a
                href="/event-details"
                className="btn w-full rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 px-6 py-3 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 sm:ml-4 sm:w-auto"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}