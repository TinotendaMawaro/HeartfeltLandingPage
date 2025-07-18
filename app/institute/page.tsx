'use client';

import React from 'react';
import Image from 'next/image';
import HeartfeltInstitute from '@/components/institute';
import Footer from '@/components/ui/footer';
import WebLandingImage from '@/public/images/school1.jpg'; // Replace with a more institute-relevant image if available

const InstitutePage = () => {
  return (
    <>
      {/* Hero Header with Background Image */}
   <section className="relative w-full min-h-[600px] flex items-center justify-center text-center text-white animate-float-ripple ">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="Heartfelt Institute Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Heartfelt Institute
          </h1>
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-base md:text-lg">
            Empowering leaders, ministers, and members through sound biblical education and training.
          </p>
        </div>
      </section>

      {/* Institute Section */}
      <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <HeartfeltInstitute />
      </main>

      <Footer />
    </>
  );
};

export default InstitutePage;