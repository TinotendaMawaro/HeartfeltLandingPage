"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeartfeltInstitute = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">About the Institute</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Heartfelt Institute is committed to developing Kingdom leaders
            who walk in faith, wisdom, and spiritual maturity. Through a
            Spirit-filled learning environment, we equip believers to fulfill
            their calling in ministry, leadership, and daily life.
          </p>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-8 text-center"
          >
            Courses Offered
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Ministry & Leadership", "Faith Foundations", "Prophetic Training"].map(
              (course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition"
                >
                  <h4 className="font-bold text-lg mb-2">{course}</h4>
                  <p className="text-gray-600 text-sm">
                    A transformative course designed to deepen your walk with
                    God and prepare you for ministry impact.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Enroll Now Section */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to grow in your calling?
          </h3>
          <p className="mb-6 text-gray-700">
            Register for the next intake and step into your purpose.
          </p>
          <a
            href="/register"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Enroll Now
          </a>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-8 text-center"
          >
            What Our Students Say
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: n * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic mb-2">
                  “This course changed my life and my walk with God. I now lead
                  a cell group with confidence.”
                </p>
                <p className="text-sm font-bold text-gray-900">– Student Name</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-4"
          >
            Get in Touch
          </motion.h3>
          <p className="mb-6 text-gray-600">
            Questions about the Heartfelt Institute? Reach out via our contact
            form or call us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeartfeltInstitute;
