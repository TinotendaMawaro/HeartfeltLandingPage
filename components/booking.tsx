'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    seats: 1,
    carPark: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      user_name: form.name,
      email: form.email,
      booking_date: form.date,
      time: form.time,
      seats: form.seats,
      car_park: form.carPark ? 'Yes' : 'No',
    };

    try {
      await emailjs.send(
        'service_csipwys',
        'template_und1c56',
        emailParams,
        'zf-2f_7UwVBsXndWh'
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send confirmation email.');
    }
  };

  return (
    <div className="text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Book Your Seat & Car Park
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-xl mx-auto mb-12 text-gray-600 text-base sm:text-lg"
      >
        Fill out the form to reserve your seat and car park for the next service.
      </motion.p>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block font-medium text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-sm sm:text-base">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-sm sm:text-base">Service Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-sm sm:text-base">Time Slot</label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
              >
                <option value="">Select Time</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <label className="block font-medium text-sm sm:text-base">Number of Seats</label>
              <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                min={1}
                required
                className="w-full border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <input
                type="checkbox"
                name="carPark"
                checked={form.carPark}
                onChange={handleChange}
                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="text-sm font-medium">Need Car Park?</label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition w-full sm:w-auto"
          >
            Submit Booking
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-green-600 font-semibold text-lg"
        >
          ✅ Thank you! Your booking has been received.
        </motion.div>
      )}
    </div>
  );
};

export default Booking;
