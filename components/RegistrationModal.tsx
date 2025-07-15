"use client";

import React, { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  firstTime?: boolean; // <-- New prop to handle first-time users
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  firstTime = false,
}) => {
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
    console.log("Form submitted:", formData, "First Time:", firstTime);
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
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in-up transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close registration modal"
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          ×
        </button>

        {/* Title */}
        <h2
          id="modal-title"
          className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {firstTime ? "Welcome to Heartfelt!" : "Event Registration"}
        </h2>

        {/* Confirmation Message */}
        {submitted ? (
          <p className="text-green-600 text-center font-semibold text-lg">
            🎉 {firstTime ? "Thanks for joining us!" : "Registration Successful!"}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
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
                placeholder="Tinotenda Obrigado"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="heartfelt@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
                placeholder="+263 *** *** ***"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

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
                placeholder="Enter your zone or area"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="" disabled>
                  Choose an event
                </option>
                <option value="Catch the Fire Conference">
                  Catch the Fire Conference
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
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform focus:ring-4 focus:ring-blue-300"
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
