"use client";

import React, { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zone: "",    
    event: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", zone: "", event: "" });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 ease-in-out animate-fade-in-up">
        <button
          onClick={onClose}
          aria-label="Close registration modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          ×
        </button>

        <h2
          id="modal-title"
          className="text-3xl font-extrabold text-center mb-6 text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Event Registration
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold text-lg">
            🎉 Registration Successful!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Tinotenda Obrigado"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="heartfelt@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="+263 *** *** ***"
              />
            </div>

            {/* New Zone Field */}
            <div>
              <label
                htmlFor="zone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zone
              </label>
              <input
                id="zone"
                type="text"
                name="zone"
                required
                value={formData.zone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your zone or area"
              />
            </div>

            <div>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Event
              </label>
              <select
                id="event"
                name="event"
                required
                value={formData.event}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="" disabled>
                  Choose an event
                </option>
                <option value="Pastor Benny Hinn Conference">
                  Pastor Benny Hinn Conference
                </option>
                <option value="Men on Fire">Men on Fire Conference</option>
                <option value="Pioneers">Pioneers Conference</option>
                <option value="Success Camp">Success Camp</option>
                <option value="Christmas Carol">Christmas Carol Service</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-400"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
