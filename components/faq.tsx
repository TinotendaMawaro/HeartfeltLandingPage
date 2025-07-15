"use client";

import React from "react";

type FaqItem = {
  category: string;
  question: string;
  description: string;
  buttonText: string;
};

export const FaqSection: React.FC = () => {
  const faqData: FaqItem[] = [
    {
      category: "MEMBERSHIP",
      question: "HOW DO I BECOME A MEMBER?",
      description:
        "Click the button to register for membership. We will reach out to you.",
      buttonText: "Register",
    },
    {
      category: "LANGUAGE",
      question: "HOW DO I REQUEST A SHONA MESSAGE?",
      description:
        "Click the button to request a Shona message. We will translate and send it to you.",
      buttonText: "Shona Sermon",
    },
    {
      category: "PARTNERSHIP",
      question: "HOW DO I BECOME A PARTNER?",
      description:
        "Click the button to register for partnership. We will reach out to you.",
      buttonText: "Register",
    },
    {
      category: "DEPARTMENTS",
      question: "HOW TO JOIN A DEPARTMENT?",
      description: "Click the button to access our departments.",
      buttonText: "Read More",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/70 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/70">
            <span className="inline-flex bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              Find Answers to Common Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black animate-gradient-x">
            Need Help? We've Got You.
          </h2>
          <p className="text-gray-800 text-lg mt-4">
            Find answers to common questions and take your next step with Heartfelt International Ministries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="h-full rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 p-6 flex flex-col transition duration-300 hover:shadow-blue-400/40"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                  {faq.category}
                </p>
                <h3 className="text-gray-900 text-lg font-bold mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.description}</p>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 text-white text-sm font-semibold shadow-md transition hover:from-blue-500 hover:to-blue-700">
                  {faq.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Styles */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradientMove 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
