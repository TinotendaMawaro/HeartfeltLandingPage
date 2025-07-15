'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const departments = [
  { name: "Children's Ministry" },
  { name: "Heartfelt Music Ministry" },
  { name: "Media" },
  { name: "Sound" },
  { name: "Greeters" },
  { name: "Ushering" },
  { name: "Admin" },
  { name: "Security" },
  { name: "Hospitality" },
  { name: "Sanctuary Keepers" }
];

const DepartmentsPage = () => {
  const [search, setSearch] = useState('');

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Search Input */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search departments..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              aria-label="Search departments"
            />
            <svg
              className="w-5 h-5 text-indigo-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"></path>
            </svg>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.05] transform transition-transform duration-300 cursor-pointer flex items-center justify-center"
                title={dept.name}
              >
                <h2 className="text-center text-lg sm:text-xl font-semibold text-indigo-900 select-none">
                  {dept.name}
                </h2>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-indigo-600 col-span-full">
              No departments match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
