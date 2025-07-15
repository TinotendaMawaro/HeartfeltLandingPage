"use client";

import React, { useState } from "react";
import Head from "next/head";

const faqCategories = [
  {
    title: "General Checks",
    icon: "🧐",
    items: [
      {
        question: "What is Heartfelt International Ministries?",
        answer:
          "Heartfelt International Ministries is a Spirit-led Christian ministry founded on the Word of God, focused on transforming lives and building a global family of believers through love, prayer, and discipleship.",
      },
      {
        question: "Where are your main service locations?",
        answer:
          "Our headquarters is in Harare, Zimbabwe. However, we have multiple campuses and online streaming options to reach believers around the world.",
      },
      {
        question: "How can I get involved?",
        answer:
          "You can get involved by attending our services, joining a department, becoming a member or partner, and participating in our outreach programs.",
      },
    ],
  },
  {
    title: "Membership",
    icon: "🪪",
    items: [
      {
        question: "How do I become a member?",
        answer:
          "Visit the Membership section on our website and register. You will receive guidance on the next steps, including a welcome session.",
      },
      {
        question: "What are the benefits of membership?",
        answer:
          "As a member, you gain spiritual covering, pastoral support, discipleship opportunities, and access to members-only events and training.",
      },
      {
        question: "Can I transfer my membership from another church?",
        answer:
          "Yes. We welcome believers who wish to join our ministry. Kindly inform our office or indicate it during registration for proper guidance.",
      },
    ],
  },
  {
    title: "Partnership",
    icon: "🤝",
    items: [
      {
        question: "What is partnership?",
        answer:
          "Partnership is a covenant relationship where you support the vision and mission of Heartfelt International Ministries through prayer, giving, and active engagement.",
      },
      {
        question: "How do I become a partner?",
        answer:
          "You can become a partner by registering through our website or contacting our Partnership Desk. Regular communication and spiritual updates are provided to all partners.",
      },
      {
        question: "What are the different partnership levels?",
        answer:
          "Our partnership levels include Monthly Seed, Project Partner, Kingdom Builder, and Visionary Partner. Each level represents a specific commitment and impact.",
      },
    ],
  },
  {
    title: "Events & Programs",
    icon: "📅",
    items: [
      {
        question: "How do I register for events?",
        answer:
          "Event registration can be done through our website or mobile app. Simply select the event and follow the registration steps.",
      },
      {
        question: "Are events open to non-members?",
        answer:
          "Yes. Most of our events are open to everyone. However, some leadership and training sessions may be limited to members or partners.",
      },
      {
        question: "How can I stay updated on upcoming events?",
        answer:
          "Subscribe to our newsletter, follow our social media channels, or regularly visit the Events page on our website.",
      },
    ],
  },
  {
    title: "Giving & Donations",
    icon: "💸",
    items: [
      {
        question: "How can I give financially to the ministry?",
        answer:
          "You can give via mobile money, bank transfer, or our secure online portal. Details are available on our Giving page.",
      },
      {
        question: "Is my giving tax-deductible?",
        answer:
          "Depending on your country’s tax regulations and our local registration, some donations may be tax-deductible. Please consult your tax advisor.",
      },
      {
        question: "What are tithes and offerings?",
        answer:
          "Tithes are 10% of your increase, returned to God as obedience. Offerings are freewill gifts given to support ministry work and express gratitude.",
      },
    ],
  },
  {
    title: "Technical Support & Career Opportunities",
    icon: "⚙️",
    items: [
      {
        question: "I am having trouble accessing my account. What should I do?",
        answer:
          "Try resetting your password or contact our technical support team through the Help Center on the website.",
      },
      {
        question: "The website is not loading correctly. What's wrong?",
        answer:
          "Clear your browser cache, ensure your internet connection is stable, or try using a different browser. Contact support if issues persist.",
      },
      {
        question: "How can I update my personal information?",
        answer:
          "Log into your account, navigate to 'My Profile' and update your details. For further help, contact our admin team.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<Record<string, number | null>>({});

  const toggle = (title: string, i: number) => {
    setOpen((prev) => ({
      ...prev,
      [title]: prev[title] === i ? null : i,
    }));
  };

  return (
    <>
      <Head>
        <title>FAQ - Heartfelt International Ministries</title>
      </Head>

      <main className="min-h-screen py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <section className="text-center">
            <div className="inline-flex justify-center items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50 mx-auto">
              <span className="inline-flex bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-semibold">
                FAQ Section
              </span>
            </div>
            <h1 className="text-4xl font-extrabold mb-2 animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-gradient-to-r from-black via-blue-500 to-black bg-clip-text text-transparent">
              Need Help? We've Got You.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-gray-700">
              Find answers to common questions about Heartfelt International Ministries, our services, membership, and more.
            </p>
          </section>

          <div className="flex flex-col lg:flex-row mt-16 gap-10">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">Categories</h3>
                <ul className="space-y-2">
                  {faqCategories.map((cat) => (
                    <li key={cat.title}>
                      <a
                        href={`#${cat.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-sm text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* FAQ Content */}
            <div className="w-full lg:w-3/4 space-y-8">
              {faqCategories.map((cat, ci) => (
                <section
                  key={ci}
                  id={cat.title.replace(/\s+/g, "-").toLowerCase()}
                  className="mb-10 animate-fade-in-up"
                >
                  <h2 className="text-xl font-semibold mb-5 flex items-center gap-2 text-blue-800">
                    <span className="text-2xl">{cat.icon}</span> {cat.title}
                  </h2>
                  <div className="space-y-4">
                    {cat.items.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-blue-300 rounded-md overflow-hidden bg-blue-50 shadow-sm"
                      >
                        <button
                          className="w-full text-left p-4 bg-blue-100 hover:bg-blue-200 flex justify-between items-center text-blue-900 transition-colors"
                          onClick={() => toggle(cat.title, i)}
                          aria-expanded={open[cat.title] === i}
                          aria-controls={`${cat.title}-${i}-answer`}
                        >
                          <span>{faq.question}</span>
                          <span className="text-2xl select-none">
                            {open[cat.title] === i ? "−" : "+"}
                          </span>
                        </button>
                        {open[cat.title] === i && (
                          <div
                            id={`${cat.title}-${i}-answer`}
                            className="p-4 bg-blue-50 text-sm text-blue-800"
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <div className="mt-12 border-t border-blue-300 pt-6">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
                  <span className="inline-flex bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-semibold">
                    Tailored For You
                  </span>
                </div>
                <h3 className="text-sm text-blue-800 mb-3">Explore Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "General Checks",
                    "Membership",
                    "Partnership",
                    "Events & Programs",
                    "Giving & Donations",
                    "Technical Support",
                    "Vision & Mission",
                    "Service Times",
                    "Children’s Ministry",
                    "Pioneers",
                    "HIM Institute",
                    "Contact Us",
                    "Zimbabwe Zones",
                    "Shona Message",
                    "History",
                    "Departments",
                    "International Zones",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="bg-blue-200 hover:bg-blue-300 text-sm text-blue-900 px-3 py-1 rounded-full cursor-pointer transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
