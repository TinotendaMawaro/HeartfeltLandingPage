"use client";

import React, { useState } from "react";
import Image from "next/image";
import RegisterModal from "@/components/RegistrationModal";

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

  return (
    <>
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative bg-gradient-to-b from-indigo-900/60 via-indigo-900/30 to-indigo-900/10 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pt-16 pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-200">
                Join Us for Our Events
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text gradient-text">
              Upcoming Events 
            </h2>
            <p className="mt-4 text-indigo-200/65">
              Celebrate and engage in transformative experiences through our highlighted events.
            </p>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transition duration-500 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-indigo-500/30 group bg-black/20"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="absolute object-cover inset-0 z-0"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10 transition group-hover:from-black/90" />

                {/* Text content */}
                <div className="absolute bottom-24 left-6 right-6 z-20 text-white fade-in">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-indigo-200 slide-up">{event.description}</p>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap justify-between items-center gap-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
                  >
                    Register Now
                  </button>
                  <button className="rounded-full border border-indigo-400 px-5 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-700/20">
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
        .gradient-text {
          background-image: linear-gradient(
            to right,
            #e5e7eb,
            #c7d2fe,
            #f9fafb,
            #a5b4fc,
            #e5e7eb
          );
          background-size: 200% auto;
          background-clip: text;
          animation: gradientMove 6s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
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
