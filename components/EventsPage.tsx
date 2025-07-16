"use client";

import React, { useState } from "react";
import Image from "next/image";
import RegisterModal from "@/components/RegistrationModal";
import FeaturedEventSection from "./FeaturedEventSection";

const events = [
  {
    title: "Catch the Fire Conference",
    date: "August 25-31, 2025",
    time: "5:00 AM - 10:00 PM",
    location: "Richland City, Mhondoro",
    description:
      "A significant component of the conference is dedicated to prayer, for national issues & breakthroughs.",
    image: "/images/CTF.jpg",
  },
  {
    title: "Pastor Benny Hinn Conference",
    date: "October 10-12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Online via Zoom",
    description:
      "Don't miss the electrifying Zimbabwe Conference with Pastor Ben Hinn and Apostle Tavonga Vutabwashe!",
    image: "/images/BennyHinn.png",
  },
  {
    title: "Men on Fire Conference",
    date: "December 1, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Richland City, Mhondoro",
    description:
      "It serves as a platform for intense worship, powerful sermons, and spiritual impartation.",
    image: "/images/MOF.jpg",
  },
  {
    title: "Pioneers Conference",
    date: "December 8, 2025",
    time: "All Day",
    location: "Various City Locations",
    description:
      "Join us as we reach out to the community, offering support and spreading hope.",
    image: "/images/Pioneers.jpg",
  },
  {
    title: "Success Camp",
    date: "December 14, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Uganda",
    description:
      "An evening dedicated to worship and intercessory prayer for our community and nation.",
    image: "/images/Success.jpg",
  },
  {
    title: "Christmas Carol Service",
    date: "December 24, 2025",
    time: "5:00 PM - 6:30 PM",
    location: "Church Sanctuary",
    description:
      "Celebrate the festive season with heartwarming carols and a special Christmas message.",
    image: "/images/Carol.jpg",
  },
];

const EventsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  const handleFirstTimeClick = () => {
    setFirstTime(true);
    setModalOpen(true);
  };

  const handleRegisterClick = () => {
    setFirstTime(false);
    setModalOpen(true);
  };

  return (
    <>
      <RegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        firstTime={firstTime}
      />

      <section className="relative bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pt-16 pb-6 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/70 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/70">
              <span className="inline-block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                Join Us for Our Events
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black animate-gradient-x">
              Upcoming Events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-900 text-base sm:text-lg md:text-xl">
              Celebrate and engage in transformative experiences through our highlighted events.
            </p>
          </div>

          {/* Insert FeaturedEventSection here */}
          <FeaturedEventSection />

          {/* First Time CTA */}
          <div className="text-center mb-12">
            <button
              onClick={handleFirstTimeClick}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text animate-pulse hover:scale-105 hover:text-blue-800 transition-transform duration-300"
            >
              <svg
                className="w-5 h-5 text-blue-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.75 20.5 2.5 16.25 2.5 11S6.75 1.5 12 1.5 21.5 5.75 21.5 11 17.25 20.5 12 20.5z"
                />
              </svg>
              First time? Please click here.
            </button>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-md transition-transform duration-500 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-blue-400/40 group cursor-pointer"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="absolute object-cover inset-0 z-0"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-900/70 to-transparent z-10 transition group-hover:from-blue-900/90" />

                {/* Text content */}
                <div className="absolute bottom-24 left-6 right-6 z-20 text-white fade-in">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-blue-200 slide-up">{event.description}</p>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap justify-between items-center gap-2">
                  <button
                    onClick={handleRegisterClick}
                    className="rounded-full bg-gradient-to-b from-blue-400 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:from-blue-500 hover:to-blue-700"
                  >
                    Register Now
                  </button>
                  <button className="rounded-full border border-blue-400 px-5 py-2 text-sm font-semibold text-blue-400 transition hover:bg-blue-700/20">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local styles */}
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
          background-size: 200% auto;
          animation: gradientMove 6s linear infinite;
        }
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .slide-up {
          animation: slideUp 0.7s ease-out;
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default EventsPage;
