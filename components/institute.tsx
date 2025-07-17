"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Our Mission",
    content: `
      Heartfelt Institute of Ministry exists to raise trans-generational champions of the Gospel
      through biblically saturated, spiritually vibrant, and practically oriented ministry training.
      We empower believers to walk in both knowledge and demonstration of God’s power.`,
    imageUrl: "/images/missions.jpg", 
  },
  {
    title: "Core Values",
    content: `
      1. Spirit-led teaching  
      2. Biblical integrity  
      3. Community and mentorship  
      4. Kingdom impact`,
    imageUrl: "/images/theology.jpg",
  },
  {
    title: "Campus Life",
    content: `
      Experience life-on-life discipleship through purposeful fellowship, worship sessions,
      mentoring, and hands-on ministry.`,
    imageUrl: "/images/lilian.png",
  },
];

const courses = [
  "Ministerial Leadership Diploma",
  "Biblical Studies Certificate",
  "Prophetic Ministry Program",
  "Online Learning Options",
];

const testimonials = [
  {
    text: "“This course changed my life and my walk with God. I now lead a cell group with confidence.”",
    name: "Jane Doe",
    role: "Alumnus, 2024",
  },
  {
    text: "“Heartfelt Institute’s training grounded me in scripture and equipped me for ministry.”",
    name: "John Smith",
    role: "Alumnus, 2023",
  },
];

const HeartfeltInstitute = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {sections.map(({ title, content, imageUrl }, idx) => (
        <motion.section
          key={title}
          className={`flex flex-col md:flex-row items-center py-16 px-6 ${
            idx % 2 === 0 ? "bg-white" : "bg-white"
          }`}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">{title}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{content}</p>
          </div>
          <div className="md:w-1/2 px-4 mt-6 md:mt-0 flex justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </motion.section>
      ))}

      {/* Courses */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]"
        >
          Courses We Offer
        </motion.h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold mb-2">{course}</h4>
              <p className="text-sm text-gray-600">
                Brief overview of {course}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite] text-center"
        >
          What Our Students Say
        </motion.h3>
        <div className="max-w-4xl mx-auto space-y-6">
          {testimonials.map(({ text, name, role }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow"
            >
              <p className="italic mb-4">"{text}"</p>
              <p className="text-right font-bold">
                – {name}, <span className="font-normal">{role}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Enroll */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-600 to-black mb-4 animate-[gradient_6s_linear_infinite]">
            Ready to Begin Your Journey?
          </h3>
          <p className="mb-6 text-lg text-gray-700">
            Applications are now open for the upcoming intake.
          </p>
          <a
            href="https://heartfeltcollege.org/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default HeartfeltInstitute;