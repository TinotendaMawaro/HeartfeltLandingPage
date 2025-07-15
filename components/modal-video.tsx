"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  youtubeId: string;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  youtubeId,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative">
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2 opacity-40"
        aria-hidden="true"
      >
        <Image
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Decoration"
        />
      </div>

      {/* Thumbnail Button */}
      <button
        className="group relative flex items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
<figure className="relative w-full -mt-5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900/80 before:via-indigo-700/30 before:to-gray-900/80 before:z-10">
          <Image
            className="w-full grayscale opacity-60 transition-all duration-300 group-hover:opacity-80 group-hover:grayscale-0"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>

        {/* Play Button */}
        <span className="absolute z-20 flex items-center gap-3 rounded-full bg-gray-950/80 px-4 py-2 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          <svg
            className="animate-pulse"
            width={22}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="playGrad" x1={0} y1={0} x2={0} y2={20}>
                <stop stopColor="#818CF8" />
                <stop offset="1" stopColor="#6366F1" stopOpacity=".8" />
              </linearGradient>
            </defs>
            <circle cx={11} cy={11} r={10} fill="url(#playGrad)" />
            <path d="M14.5 11L9.5 7.5v7L14.5 11Z" fill="#fff" />
          </svg>
          <span className="text-sm font-medium text-white">Watch Live</span>
        </span>
      </button>

      {/* Modal Video Dialog */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="aspect-video w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-indigo-400/20 bg-black">
            <iframe
              ref={videoRef}
              className="h-full w-full"
              src={`https://www.youtube.com/embed/Dtwk2hKbHPA`}
              title="Heartfelt Live Service"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
