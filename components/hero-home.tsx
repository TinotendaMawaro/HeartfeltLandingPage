"use client";

import Image from "next/image";
import Logo from "@/public/images/logos-04.png";
import VideoThumb from "@/public/images/web-landing-.jpg";
import ModalVideo from "@/components/modal-video";
import BgImage from "@/public/images/web-landing-.jpg"; // <-- Static import for background

export default function HeroHome() {
  return (
    <section className="relative w-full min-h-[720px] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/30" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 sm:py-32 max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="mb-6 flex items-center gap-3" data-aos="fade-up">
          <img
            src="https://c.animaapp.com/nd94gfJc/img/line.svg"
            alt="Line"
            className="w-6 h-0.5"
          />
          <p className="text-sm sm:text-base text-white/80 tracking-wide">
            Transforming Lives, Building Legacies,{" "}
            <span className="text-[#2c76de] font-semibold">
              Igniting Destinies
            </span>
            .
          </p>
        </div>

        {/* Headings */}
        <div
          className="space-y-4 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[4rem] bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            BECOME A PART OF OUR COMMUNITY
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-white/90">
            WELCOME TO HEARTFELT INTERNATIONAL MINISTRIES
          </h2>
        </div>

        {/* Watch Online Button */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.youtube.com/@ApostleTavongaVutabwashe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-app-primary px-8 py-4 text-white text-sm sm:text-base font-medium hover:bg-indigo-700 transition"
          >
            WATCH ONLINE
          </a>
        </div>
      </div>

      {/* Modal Video */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-[120px] sm:pt-[140px] pb-16"
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
    </section>
  );
}
