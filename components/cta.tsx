"use client";

import Image from "next/image";
import React, { useState } from "react";
import RegisterModal from "./RegistrationModal";

export default function Cta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[736px] flex items-center justify-center text-left font-['Montserrat']">
      {/* Register Modal */}
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Full Background with Image and Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover"
          alt="Richland City during a conference"
          src="/images/dedication.png"
          layout="fill"
          quality={100}
        />
        <div className="image-overlay" />
      </div>

      {/* Main Content Card - Responsive Layout */}
      <div className="relative max-w-5xl mx-auto z-10 px-6 sm:px-8 lg:px-12">
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content and Button */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50 mx-auto md:mx-0">
                <span className="bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent font-semibold uppercase text-sm">
                  Our Events
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-gray-900 mt-2">
                Our Conferences
              </h2>
              <p className="mt-4 text-gray-700 leading-6 font-['Roboto_Condensed'] opacity-80">
                At Heartfelt International Ministries, our major conferences are exclusively hosted at the magnificent Richland City in Mhondoro, Zimbabwe. This sprawling project, spanning over 400 hectares, isn't just a location; it's a vibrant hub of divine activity and a testament to God's faithfulness.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4 mx-auto md:mx-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white font-semibold shadow-md transition hover:from-blue-500 hover:to-blue-700"
                >
                  Register Now
                </button>
                <button className="px-6 py-3 rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900 font-semibold border border-gray-200 shadow-md transition hover:from-gray-200 hover:to-gray-100">
                  EXPLORE EVENTS
                </button>
              </div>
            </div>

            {/* Right Side - Visuals or Spacer */}
            <div className="hidden md:flex justify-end items-center">
              {/* This space can be used for other visuals if needed, or simply as a spacer */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
          mix-blend-mode: soft-light;
        }
      `}</style>
    </section>
  );
}