"use client";

import React, { useState } from "react";
import Image from "next/image";
import RegisterModal from "./RegistrationModal"; // Assuming you have this component

export default function FeaturedEventSection() {
  const [modalOpen, setModalOpen] = useState(false);
  
  // The share link remains the same, as it's for sharing the video, not embedding
  const youtubeShareLink = "https://www.youtube.com/watch?v=Iko36M5eBpY";
  // New registration form URL
  const registrationFormUrl = "https://forms.gle/ttZTwYRFw1kgnot58";

  const handleShare = () => {
    // Using document.execCommand for clipboard due to potential iframe limitations
    document.execCommand('copy', false, youtubeShareLink);
    alert("YouTube link copied to clipboard!");
  };

  // Function to open the registration form in a new tab
  const handleRegisterClick = () => {
    window.open(registrationFormUrl, "_blank");
    // If you still want to use the modal for other purposes, you can uncomment the line below
    // setModalOpen(true); 
  };

  return (
    <>
      {/* Register Modal */}
      {/* Ensure RegisterModal component is defined and available */}
      {/* If you want to use the modal, uncomment the line below and ensure the component is imported correctly */}
      {/* <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}

<section className="w-full min-h-screen py-16 md:py-24 bg-[linear-gradient(to_right,#F3F4F6,#E5E7EB,#D1D5DB,#E5E7EB,#F3F4F6)] bg-[length:200%_auto] animate-[moving-gradient_10s_linear_infinite]">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[64px] tracking-[-0.01em] drop-shadow-md mb-4">
              Upcoming Event
            </h2>
            <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed'] max-w-3xl mx-auto">
              Don't miss the electrifying <b className="font-bold text-blue-600">Zimbabwe</b> Conference with the renowned Pastor <b className="font-bold text-blue-600">Benny Hinn , Pastor Robert Kayanja</b> and the inspiring Apostle <b className="font-bold text-blue-600">Apostle Tavonga Vutabwashe!</b> Get ready for a life-changing revival experience!
            </p>
          </div>

          {/* Video Player and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
            {/* YouTube Video Player - Replaced with user's provided embed code */}
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/50" style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.youtube.com/embed/Iko36M5eBpY?rel=0" 
                style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }} 
                allowFullScreen 
                scrolling="no" 
                allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                title="YouTube video player"
              ></iframe>
            </div>

            {/* Video Details and Share */}
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
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleShare}
                  className="px-6 py-3 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white text-sm font-semibold shadow-md transition hover:from-blue-500 hover:to-blue-700 hover:scale-105"
                >
                  Share Event
                </button>
              </div>
            </div>
          </div>

          {/* Register Event Section */}
          <div className="text-center mt-20 p-8 bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl border border-blue-300/50 transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/50">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[64px] tracking-[-0.01em] drop-shadow-md mb-4">
              Register Today And Secure Your Spot
            </h2>
            <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed'] max-w-3xl mx-auto">
              Don’t miss this incredible opportunity to be part of a life-changing spiritual experience. Register now to secure your spot and receive important updates about the event!
            </p>
            <button
              onClick={handleRegisterClick} // Updated to open the Google Form
              className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white font-semibold text-lg shadow-md transition hover:from-blue-500 hover:to-blue-700 hover:scale-105"
            >
              Register for Event
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
