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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
            <span className="inline-flex bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              Find Answers to Common Questions
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent relative font-['Roboto Condensed'] text-[32px] tracking-[-0.01em] leading-[64px] uppercase inline-block text-center">
            Need Help? We've Got You.
          </h2>
          <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed']">
            Find answers to common questions and take your next step with Heartfelt International Ministries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="h-full rounded-2xl overflow-hidden shadow-md bg-white border border-blue-200/50 p-6 flex flex-col transition duration-300 hover:shadow-lg hover:bg-blue-50/50"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                  {faq.category}
                </p>
                <h3 className="text-gray-900 text-lg font-bold mb-4 font-['Montserrat']">
                  {faq.question}
                </h3>
                <p className="text-gray-900 text-sm opacity-80 font-['Roboto Condensed']">{faq.description}</p>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-b from-[#1e90ff] to-blue-600 text-white text-sm font-semibold shadow-md transition hover:from-blue-500 hover:to-blue-700">
                  {faq.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;