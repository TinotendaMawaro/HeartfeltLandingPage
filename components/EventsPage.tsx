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
      "A significant component of the conference is dedicated to prayer, for national issues & breakthroughs",
    image: "/images/events/event1.jpg",
  },
  {
    title: "Pastor Benny Hinn Conference",
    date: "October 10-12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Online via Zoom",
    description:
      "Don't miss the electrifying Zimbabwe Conference with Pastor Ben Hinn and Apostle Tavonga Vutabwashe!",
    image: "/images/events/event2.jpg",
  },
  {
    title: "Men on Fire Conference",
    date: "December 1, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Richland City, Mhondoro",
    description:
      "It serves as a platform for intense worship, powerful sermons, and spiritual impartation.",
    image: "/images/events/event3.jpg",
  },
  {
    title: "Pioneers Conference",
    date: "December 8, 2025",
    time: "All Day",
    location: "Various City Locations",
    description:
      "Join us as we reach out to the community, offering support and spreading hope.",
    image: "/images/events/event4.jpg",
  },
  {
    title: "Success Camp",
    date: "December 14, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Uganda",
    description:
      "An evening dedicated to worship and intercessory prayer for our community and nation.",
    image: "/images/events/event5.jpg",
  },
  {
    title: "Christmas Carol Service",
    date: "December 24, 2025",
    time: "5:00 PM - 6:30 PM",
    location: "Church Sanctuary",
    description:
      "Celebrate the festive season with heartwarming carols and a special Christmas message.",
    image: "/images/events/event6.jpg",
  },
];

const EventsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative bg-gradient-to-b from-indigo-900/60 via-indigo-900/30 to-indigo-900/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pt-16 pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Join Us for Our Events
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Events Highlights
            </h2>
            <p className="mt-4 text-indigo-200/65">
              Join us as we celebrate and engage in transformative experiences through our highlighted events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg bg-black/20 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-indigo-500/30 group"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute left-0 w-full bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover:from-black/90 h-1/2 bottom-0" />

                <div className="absolute bottom-24 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-indigo-200">{event.description}</p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-center gap-2">
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
    </>
  );
};

export default EventsPage;
