"use client";

import React, { useState, useEffect } from "react";
import RegisterModalComponent from "./regitser";

// Inline modal component stays unchanged
export default function FeaturedEventSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  const eventDate = new Date("2025-10-10T00:00:00Z").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);


 const handleShare = async () => {
  const youtubeShareLink = "https://www.youtube.com/watch?v=Iko36M5eBpY";
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSfQxp12jX7xwTBnc98mkZIC82TTq2h80hPK4l6PzbrzzSvCeg/viewform";
  
  const eventDetails = `🇿🇼 Benny Hinn Zimbabwe Conference 2025 🇿🇼

Join Apostle Tavonga Vutabwashe, Pastor Benny Hinn, Pastor Robert Kayanja, and Pastor Jessica Kayanja for a powerful move of God!

📅 Date: October 10–12, 2025  
📍 Venue: Harare, Zimbabwe

📺 Watch live on YouTube: ${youtubeShareLink}  
📝 Register now: ${registrationLink}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Zimbabwe Conference 2025",
        text: eventDetails,
        // Removed `url` so the `text` is not ignored
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    try {
      await navigator.clipboard.writeText(eventDetails);
      alert("Event details copied to clipboard!");
    } catch {
      alert("Sharing is not supported on this browser.");
    }
  }

  // Optional: Open WhatsApp
  const encodedText = encodeURIComponent(eventDetails);
  const whatsappURL = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappURL, "_blank");
};



  const handleRegisterClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      {/* Inline animated white background style */}
      <style>
        {`
          .white-shimmer-bg {
            background: linear-gradient(
              to right,
              #ffffff,
              #f5f5f5,
              #eaeaea,
              #f5f5f5,
              #ffffff
            );
            background-size: 200% auto;
            animation: shimmerBg 10s linear infinite;
          }

          @keyframes shimmerBg {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 200% 0%;
            }
          }
        `}
      </style>

      {/* Register Modal */}
      <RegisterModalComponent
        isOpen={modalOpen}
        onClose={() => {
        setModalOpen(false);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 5000); // optional auto-hide
        }}

      />

      <section className="white-shimmer-bg w-full min-h-screen py-16 md:py-24">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
              Upcoming Event
            </h2>
            <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed'] max-w-3xl mx-auto">
              Don't miss the electrifying{" "}
              <b className="font-bold text-blue-600">Zimbabwe</b> Conference with
              the renowned Pastor{" "}
              <b className="font-bold text-blue-600">
                Benny Hinn , Pastor Robert Kayanja
              </b>{" "}
              and the inspiring Apostle{" "}
              <b className="font-bold text-blue-600">Apostle Tavonga Vutabwashe!</b>{" "}
              Get ready for a life-changing revival experience!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap text-center">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => {
              const value = timeLeft[label.toLowerCase() as keyof typeof timeLeft];
              return (
                <div
                  key={label}
                  className="bg-blue-600 text-white rounded-xl px-6 py-4 w-20 sm:w-24 md:w-28 flex flex-col items-center shadow-lg"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Montserrat']">
                    {value}
                  </span>
                  <span className="uppercase text-xs sm:text-sm mt-1 font-['Roboto Condensed']">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Video and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/50"
              style={{
                left: 0,
                width: "100%",
                height: 0,
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Iko36M5eBpY?rel=0"
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  border: 0,
                }}
                allowFullScreen
                scrolling="no"
                allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                title="YouTube video player"
              ></iframe>
            </div>

            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-blue-300/50 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/50">
              <div>
                <h3 className="text-gray-900 text-xl font-bold font-['Montserrat'] mb-2">
                  Pastor Ben Hinn |Pastor Robert Kayanja| Zimbabwe Conference | Apostle Tavonga Vutabwashe
                </h3>
                <p className="text-gray-700 text-sm font-['Roboto Condensed'] mb-4">
                  <span className="font-bold">156,987 views</span> • October 10-12, 2023
                </p>
                <div className="flex flex-wrap gap-2 text-blue-600 text-sm font-medium">
                  <a href="https://www.youtube.com/hashtag/apostle" target="_blank" rel="noopener noreferrer" className="hover:underline">#Apostle</a>
                  <a href="https://www.youtube.com/hashtag/tavongavutabwashe" target="_blank" rel="noopener noreferrer" className="hover:underline">#TavongaVutabwashe</a>
                  <a href="https://www.youtube.com/hashtag/live" target="_blank" rel="noopener noreferrer" className="hover:underline">#Live</a>
                  <a href="https://www.youtube.com/hashtag/21dothg" target="_blank" rel="noopener noreferrer" className="hover:underline">#21DOTHG</a>
                  <a href="https://www.youtube.com/hashtag/revival" target="_blank" rel="noopener noreferrer" className="hover:underline">#Revival</a>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={handleShare}
                  className="px-6 py-3 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white text-sm font-semibold shadow-md transition hover:from-blue-500 hover:to-blue-700 hover:scale-105"
                >
                  Share Event
                </button>
                <button
                  onClick={handleRegisterClick}
                  className="px-6 py-3 rounded-xl bg-gradient-to-b from-green-600 to-green-700 text-white text-sm font-semibold shadow-md transition hover:from-green-500 hover:to-green-800 hover:scale-105"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Registration Message */}
          <div className="text-center mt-20 p-8 bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl border border-blue-300/50 transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/50 max-w-3xl mx-auto">
            {showThankYou ? (
              <div className="text-green-700 font-bold text-xl md:text-2xl font-['Montserrat']">
                Thank you for registering! We look forward to seeing you at the event.
              </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
                  Register Today And Secure Your Spot
                </h2>
                <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed'] max-w-3xl mx-auto">
                  Don’t miss this incredible opportunity to be part of a life-changing spiritual experience. Register now to secure your spot and receive important updates about the event!
                </p>
                <button
                  onClick={handleRegisterClick}
                  className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white font-semibold text-lg shadow-md transition hover:from-blue-500 hover:to-blue-700 hover:scale-105"
                >
                  Register for Event
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
