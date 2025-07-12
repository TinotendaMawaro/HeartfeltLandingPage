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
      {/* Decoration Illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Decoration"
        />
      </div>

      {/* Thumbnail Trigger */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-3 focus-visible:ring-indigo-200"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="opacity-50 grayscale"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        <span className="absolute pointer-events-none p-2.5 before:absolute before:inset-0 before:bg-gray-950 before:rounded-full before:transition-transform group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="playGrad" x1={0} y1={0} x2={0} y2={20}>
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#6366F1" stopOpacity=".72" />
                </linearGradient>
              </defs>
              <circle cx={10} cy={10} r={10} fill="url(#playGrad)" />
              <path
                d="M13.5 10L8.5 6.5v7L13.5 10Z"
                fill="#fff"
              />
            </svg>
            <span className="text-sm font-medium leading-tight text-gray-300">
              Live Service
            </span>
          </span>
        </span>
      </button>

      {/* Modal Dialog with Embedded YouTube */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
            <iframe
              ref={videoRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
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
