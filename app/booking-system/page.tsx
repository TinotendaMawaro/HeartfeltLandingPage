'use client';

import React from 'react';
import Booking from '@/components/booking';
import { motion } from 'framer-motion';

const BookingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 sm:px-6 lg:px-8 py-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        {/* Intro Section */}
        <div className="mb-12 text-center">
          <div className="mt-6">
            <motion.img
              src="/images/page-illustration.svg"
              alt="Booking Illustration"
              className="mx-auto w-64 sm:w-72 md:w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </div>
        </div>

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
  );
};

export default BookingPage;
