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
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Find Answers to Common Questions
            </span>
          </div> 
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold font-nacelle pb-4">
            Need Help? We've Got You.
          </h2>
          <p className="text-indigo-200/70 text-lg">
            Find answers to common questions and take your next step with Heartfelt International Ministries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="h-full rounded-2xl overflow-hidden shadow-md bg-black/20 backdrop-blur-lg border border-indigo-100/10 p-6 flex flex-col transition hover:shadow-indigo-500/30"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent mb-2 uppercase tracking-wide">
                  {faq.category}
                </p>
                <h3 className="text-white text-lg font-bold mb-4">
                  {faq.question}
                </h3>
                <p className="text-indigo-100/80 text-sm">
                  {faq.description}
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="px-6 py-3 bg-app-primary text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition duration-300">
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
