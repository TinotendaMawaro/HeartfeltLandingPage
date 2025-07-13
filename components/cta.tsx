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

      <section className="relative overflow-hidden">
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

        <div className="max-w6xl mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              {/* Header Tagline */}
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Join Us for Our Events
                </span>
              </div>

              {/* Headline */}
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                Register Now for Our Upcoming Event
              </h2>

              {/* Description */}
              <p
                className="mb-8 text-indigo-200/70"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Don’t miss the chance to be part of a transformative spiritual experience. Secure your spot today!
              </p>

              {/* Buttons */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                {/* Register Button (opens modal) */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-gray-700 sm:w-auto px-6 py-3 rounded-xl transition"
                  >
                    Register Now
                  </button>
                </div>

                {/* Learn More Link */}
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-gray-700 sm:ml-4 sm:w-auto px-6 py-3 rounded-xl transition"
                    href="/event-details"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
