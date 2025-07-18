'use client';

import Image from 'next/image';
import Gallery from '@/components/gallery';
import Footer from '@/components/ui/footer';
import WebLandingImage from '@/public/images/hero 5.jpg'; // Replace with your gallery hero image

export default function GalleryPage() {
  return (
    <>
      {/* Hero Header with Background Image */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="Gallery Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our Gallery
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-gray-100 to-purple-200 text-base md:text-lg">
            Explore the beauty of fellowship, worship, and outreach through our shared memories.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <Gallery />
      </section>

      <Footer />
    </>
  );
}
