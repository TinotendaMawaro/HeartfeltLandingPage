"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ModalVideo from "@/components/modal-video";
import BgImage from "@/public/images/hero 3.jpg";
import BgImage2 from "@/public/images/web-landing-.jpg";
import VideoThumb from "@/public/images/web-landing-.jpg";

const HeroHome = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const isWide = window.innerWidth >= 1280;
      setIsDesktop(isWide);
      if (!isWide) setShowDesktop(false);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const timeout = setTimeout(() => {
        setShowDesktop(true);
      }, 3000); // Increased transition delay
      return () => clearTimeout(timeout);
    }
  }, [isDesktop]);

  return (
    <section className="relative w-full text-white mt-20 min-h-[200px] sm:min-h-[450px] lg:min-h-[860px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile image with floating effect */}
        <Image
          src={BgImage}
          alt="Mobile Background"
          fill
          className={`object-cover transition-opacity duration-[3000ms] ease-in-out ${
            showDesktop ? "opacity-0" : "opacity-100 float-ripple"
          }`}
          priority
        />

        {/* Desktop image */}
        <Image
          src={BgImage2}
          alt="Desktop Background"
          fill
          className={`object-cover transition-opacity duration-[3000ms] ease-in-out ${
            showDesktop ? "opacity-100" : "opacity-0"
          }`}
          priority
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-20 sm:pt-28 lg:pt-40 max-w-7xl mx-auto">
        <div className="mb-6 flex items-center gap-3 animate-bounce-slow" data-aos="fade-up">
          <img
            src="https://c.animaapp.com/nd94gfJc/img/line.svg"
            alt="Line"
            className="w-6 h-0.5"
          />
          <p className="text-xs sm:text-sm md:text-base text-white/80 tracking-wide">
            Transforming Lives, Building Legacies,{" "}
            <span className="text-[#2c76de] font-semibold">Igniting Destinies</span>.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-bold transition-all duration-1000 animate-bounce-slow">
            WELCOME HOME,YOU ARE OUR FAMILY
          </h1>
          <h2 className="text-xs sm:text-base md:text-lg transition-all duration-1000 animate-bounce-slow">
            WELCOME TO HEARTFELT INTERNATIONAL MINISTRIES
          </h2>
        </div>

        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.youtube.com/@ApostleTavongaVutabwashe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-app-primary px-8 py-4 text-white text-xs sm:text-sm md:text-base font-medium hover:bg-indigo-700 transition animate-bounce-slow"
          >
            WATCH ONLINE
          </a>
        </div>
      </div>

      {/* Modal Video */}
      <div
        className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-8 pt-20"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1104}
          thumbHeight={576}
          thumbAlt="Heartfelt International Ministries Video"
          youtubeId="Dtwk2hKbHPA"
        />
      </div>

      {/* Style Block */}
      <style jsx>{`
        /* Floating + Ripple Animation */
        .float-ripple::before,
        .float-ripple::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          border-radius: inherit;
        }

        .float-ripple::before {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 15%, transparent 70%);
          animation: ripple1 6s infinite ease-in-out, float 7s infinite;
        }

        .float-ripple::after {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 20%, transparent 75%);
          animation: ripple2 8s infinite ease-in-out 3s, float 9s infinite 1.5s;
        }

        @keyframes ripple1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes ripple2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.25;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        /* Bounce Slow */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroHome;
