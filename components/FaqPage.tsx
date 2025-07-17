"use client";

import React, { useState } from "react";

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
  {
    title: "Bible School",
    icon: "📖",
    items: [
      {
        question: "How to Become a Pastor?",
        answer: (
          <>
            <p>
              Have you felt the call to ministry? Do you have a burning desire to serve God and lead His people? Becoming a pastor is a divine calling — and it all begins with the right foundation.
            </p>
            <p>
              At Heartfelt Institute, we believe in raising up strong, Spirit-filled leaders who are equipped with sound doctrine, spiritual maturity, and practical ministry skills. Our Bible school is more than just a place of learning — it's a launching pad for destiny.
            </p>
            <h3 className="text-lg font-semibold text-app-blue-800 mt-6">Why Choose Heartfelt Institute?</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Biblical & Practical Training:</strong> Learn the Word of God deeply while gaining real ministry experience.</li>
              <li><strong>Experienced Mentors:</strong> Be taught and guided by seasoned pastors and leaders who walk the talk.</li>
              <li><strong>Spiritual Growth:</strong> Develop not just knowledge, but character, faith, and a strong prayer life.</li>
              <li><strong>Ministry Readiness:</strong> Whether you want to pastor a church, plant ministries, or serve in leadership — we prepare you thoroughly.</li>
              <li><strong>Community & Fellowship:</strong> Join a passionate community of believers on fire for God.</li>
            </ul>
            <p className="mt-4">
              Your journey into full-time ministry begins with one step — enroll today and let us walk with you every step of the way.
            </p>
            <div className="mt-6">
              <a
                href="https://heartfeltcollege.org/index.php/contact-heartfelt-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-b from-app-blue-600 to-app-blue-700 text-white text-sm font-semibold shadow-md transition hover:from-app-blue-500 hover:to-app-blue-800"
              >
                Click here to enroll with Heartfelt Institute
              </a>
            </div>
          </>
        ),
      },
      {
        question: "What courses are offered at Heartfelt Institute?",
        answer:
          "Heartfelt Institute offers a comprehensive curriculum covering biblical studies, theology, leadership, and practical ministry skills. Our programs are designed to equip you for various aspects of Christian service. We offer flexible learning options, including full-time, part-time, and online courses, to accommodate your schedule and learning preferences. Our goal is to provide accessible, high-quality theological education that empowers you to fulfill your divine purpose.",
      },
      {
        question: "What are the admission requirements for Heartfelt Institute?",
        answer:
          "Admission requirements for Heartfelt Institute typically include a completed application form, academic transcripts, a personal testimony, and letters of recommendation. Specific requirements may vary by program, so please refer to the Institute's official website for detailed information.",
      },
    ],
  },
  {
    title: "Baptism",
    icon: "💧",
    items: [
      {
        question: "How to be Baptized?",
        answer: (
          <>
            <p>
              To learn more about water baptism and how to get baptized at Heartfelt International Ministries, please contact us.
            </p>
            <p className="mt-2">
              <strong>Contact Number:</strong> <a href="tel:+263779156452" className="text-app-blue-600 hover:underline">+263 77 915 6452</a>
            </p>
            <p className="mt-2">
              Our team will guide you through the process and answer any questions you may have.
            </p>
          </>
        ),
      },
      {
        question: "What is Baptism?",
        answer: (
          <>
            <p>
              Baptism is a symbolic act of obedience to God, signifying a believer's identification with the death, burial, and resurrection of Jesus Christ. It is an outward declaration of an inward decision to follow Christ.
            </p>
            <p className="mt-2">
              While not a requirement for salvation, it is an important step of faith for every believer.
            </p>
          </>
        ),
      },
      {
        question: "Who can be baptized?",
        answer: (
          <>
            <p>
              Baptism is for believers who have made a personal decision to follow Jesus Christ. It is a public declaration of faith and commitment. If you have accepted Jesus as your Lord and Savior, you are eligible for baptism.
            </p>
          </>
        ),
      },
      {
        question: "When and where do baptisms take place?",
        answer: (
          <>
            <p>
              Baptism services are regularly scheduled throughout the year at various Heartfelt International Ministries locations. Please contact us at the number provided above or check our events calendar for upcoming dates and venues. We encourage you to register in advance to ensure proper arrangements.
            </p>
          </>
        ),
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
      <main className="min-h-screen py-10 px-4 sm:px-6 bg-white font-inter">
        <div className="max-w-7xl mx-auto">
          <section className="text-center">
            <div className="inline-flex justify-center items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-app-blue-300/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-app-blue-300/50 mx-auto">
              <span className="inline-flex bg-gradient-to-r from-app-blue-600 to-app-blue-300 bg-clip-text text-transparent font-semibold">
                FAQ Section
              </span>
            </div>
            <h1 className="text-4xl font-extrabold mb-2 animate-[gradient_8s_linear_infinite] bg-[length:500%_auto] bg-gradient-to-r from-black via-[#1E90FF] to-black bg-clip-text text-transparent">
              Need Help? We've Got You.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-gray-700">
              Find answers to common questions about Heartfelt International Ministries, our services, membership, and more.
            </p>
          </section>

          <div className="flex flex-col lg:flex-row mt-16 gap-10">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4">
              <div className="bg-app-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-app-blue-800">Categories</h3>
                <ul className="space-y-2">
                  {faqCategories.map((cat) => (
                    <li key={cat.title}>
                      <a
                        href={`#${cat.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-sm text-app-blue-700 hover:text-app-blue-900 transition-colors"
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
                  <h2 className="text-xl font-semibold mb-5 flex items-center gap-2 text-app-blue-800">
                    <span className="text-2xl">{cat.icon}</span> {cat.title}
                  </h2>
                  <div className="space-y-4">
                    {cat.items.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-app-blue-300 rounded-md overflow-hidden bg-app-blue-50 shadow-sm"
                      >
                        <button
                          className="w-full text-left p-4 bg-app-blue-100 hover:bg-app-blue-200 flex justify-between items-center text-app-blue-900 transition-colors"
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
                            className="p-4 bg-app-blue-50 text-sm text-app-blue-800"
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <div className="mt-12 border-t border-app-blue-300 pt-6">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-app-blue-300/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-app-blue-300/50">
                  <span className="inline-flex bg-gradient-to-r from-app-blue-600 to-app-blue-300 bg-clip-text text-transparent font-semibold">
                    Tailored For You
                  </span>
                </div>
                <h3 className="text-sm text-app-blue-800 mb-3">Explore Topics</h3>
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
                    "Bible School",
                    "Baptism",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="bg-app-blue-200 hover:bg-app-blue-300 text-sm text-app-blue-900 px-3 py-1 rounded-full cursor-pointer transition-colors"
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700&family=Roboto+Condensed:wght@400;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .font-['Montserrat'] {
          font-family: 'Montserrat', sans-serif;
        }

        .font-['Roboto Condensed'] {
          font-family: 'Roboto Condensed', sans-serif;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 1s ease-out forwards;
        }

        /* Custom Tailwind Colors based on #1E90FF */
        .bg-app-blue-50 { background-color: #EBF5FF; }
        .bg-app-blue-100 { background-color: #D6EAF8; }
        .bg-app-blue-200 { background-color: #BEE3F8; }
        .bg-app-blue-300 { background-color: #90CAF9; }
        .bg-app-blue-500 { background-color: #42A5F5; }
        .bg-app-blue-600 { background-color: #1E90FF; }
        .bg-app-blue-700 { background-color: #1976D2; }
        .bg-app-blue-800 { background-color: #1565C0; }
        .bg-app-blue-900 { background-color: #0D47A1; }

        .text-app-blue-600 { color: #1E90FF; }
        .text-app-blue-700 { color: #1976D2; }
        .text-app-blue-800 { color: #1565C0; }
        .text-app-blue-900 { color: #0D47A1; }

        .border-app-blue-300 { border-color: #90CAF9; }

        .hover\\:bg-app-blue-200:hover { background-color: #BEE3F8; }
        .hover\\:bg-app-blue-300:hover { background-color: #90CAF9; }
        .hover\\:from-app-blue-500:hover { --tw-gradient-from: #42A5F5 var(--tw-gradient-from-position); }
        .hover\\:to-app-blue-800:hover { --tw-gradient-to: #1565C0 var(--tw-gradient-to-position); }
        .hover\\:text-app-blue-900:hover { color: #0D47A1; }
      `}</style>
    </>
  );
}
