'use client';

import React from 'react';
import Booking from '@/components/booking';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/footer';
import Image from 'next/image';
import WebLandingImage from '@/public/images/hero 5.jpg'; // Replace with your actual image if needed

const BookingPage = () => {
  return (
    <>
      {/* Hero Header */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="Booking Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Book a Visit or Consultation
          </h1>
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-base md:text-lg">
            Easily schedule your session with our pastoral or administrative teams.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10 md:p-12"
          >
            <Booking />
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
};

export default BookingPage;
