"use client";

import React from "react";

type EventCard = {
  title: string;
  image: string;
  bgPosition: string;
  overlayHeight: string;
  overlayTop: string;
  textAlign: string;
};

const EventsHighlightsSection: React.FC = () => {
  const events: EventCard[] = [
    {
      title: "CRUSADES",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-fashion-man-love-people-5875438--1@2x.png",
      bgPosition: "100% 100%",
      overlayHeight: "309px",
      overlayTop: "75px",
      textAlign: "text-center",
    },
    {
      title: "INTERNATIONAL DAY OF SPORTS",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-a-statue-holding-a-holy-book-561313-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-center",
    },
    {
      title: "TREE PLANTATION DAY",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-man-people-woman-connection-6276711-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-left",
    },
    {
      title: "HEARTFELT INSTITUTE GRADUATION",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-woman-in-blue-tank-top-and-man-in-r-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-left",
    },
  ];

  return (
    <section aria-label="Events Highlights Section" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/70 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/70">
            <span className="inline-flex bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              Join Us for Our Events
            </span>
          </div>
          <h2
            className="relative pb-6 font-nacelle text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black animate-gradient-x"
          >
            Events Highlights
          </h2>
          <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Join us as we celebrate and engage in transformative experiences through our highlighted events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden shadow-md bg-white transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-blue-400/40 group cursor-pointer"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: event.bgPosition,
              }}
            >
              {/* Overlay gradient: lighter and bluish for light background */}
              <div
                className="absolute left-0 w-full bg-gradient-to-t from-blue-900/70 to-transparent transition-opacity duration-500 group-hover:from-blue-900/90"
                style={{ top: event.overlayTop, height: event.overlayHeight }}
              />

              {/* Title */}
              <div
                className={`absolute bottom-20 left-6 w-[238px] font-['Montserrat',Helvetica] font-bold text-white text-lg transition-transform duration-500 group-hover:-translate-y-1 ${event.textAlign}`}
              >
                {event.title}
              </div>
            </div>
          ))}
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
  );
};

export default EventsHighlightsSection;
