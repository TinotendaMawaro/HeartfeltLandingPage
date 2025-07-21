"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// HotLinkBanner Component
function HotLinkBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const lastClosedTimestamp = localStorage.getItem("event_closed_timestamp");
      const currentTime = Date.now();
      const oneHour = 60 * 60 * 1000; // One hour in milliseconds

      // If no timestamp exists, or if more than one hour has passed since last close
      if (!lastClosedTimestamp || (currentTime - parseInt(lastClosedTimestamp, 10) > oneHour)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility(); // Check visibility on component mount

    // Optional: Set up an interval to re-check visibility, though typically page refresh handles this for banners
    // const intervalId = setInterval(checkVisibility, oneHour);
    // return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  // Function to handle closing the banner and saving the current timestamp to localStorage
  const handleClose = () => {
    localStorage.setItem("event_closed_timestamp", Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render if not visible

  return (
    <>
      {/* Custom CSS for the gradient animation */}
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-gradient-animated {
          background: linear-gradient(90deg, rgba(79, 70, 229, 0.7), rgba(129, 140, 248, 0.7), rgba(79, 70, 229, 0.7)); /* Indigo shades with transparency */
          background-size: 200% 200%;
          animation: gradient-move 10s ease infinite;
        }
      `}</style>
      <div className="fixed bottom-4 right-4 w-full max-w-xs sm:max-w-sm z-50 text-white p-4 flex flex-col items-center sm:flex-row justify-between shadow-lg bg-gradient-animated rounded-lg"> {/* Changed positioning and added rounded corners */}
        <p className="text-sm text-center sm:text-left mb-2 sm:mb-0 flex-grow">
          Experience the **Pastor Benny Hinn Healing Crusade!** Join thousands for **Catch The Fire 2025** and step into Greater Exploits.
        </p>
        <div className="flex gap-3 items-center flex-shrink-0 mt-2 sm:mt-0"> {/* Added margin top for mobile */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQxp12jX7xwTBnc98mkZIC82TTq2h80hPK4l6PzbrzzSvCeg/viewform?embedded=true" // Updated registration link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-700 font-bold px-3 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register Today
          </a>
          <button onClick={handleClose} className="text-sm hover:underline px-3 py-1">
            Close
          </button>
        </div>
      </div>
    </>
  );
}


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
            <p className="text-sm sm:text-base">
              Have you felt the call to ministry? Do you have a burning desire to serve God and lead His people? Becoming a pastor is a divine calling — and it all begins with the right foundation.
            </p>
            <p className="text-sm sm:text-base">
              At Heartfelt Institute, we believe in raising up strong, Spirit-filled leaders who are equipped with sound doctrine, spiritual maturity, and practical ministry skills. Our Bible school is more than just a place of learning — it's a launching pad for destiny.
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-app-blue-800 mt-4 sm:mt-6">Why Choose Heartfelt Institute?</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li><strong>Biblical & Practical Training:</strong> Learn the Word of God deeply while gaining real ministry experience.</li>
              <li><strong>Experienced Mentors:</strong> Be taught and guided by seasoned pastors and leaders who walk the talk.</li>
              <li><strong>Spiritual Growth:</strong> Develop not just knowledge, but character, faith, and a strong prayer life.</li>
              <li><strong>Community & Fellowship:</strong> Join a passionate community of believers on fire for God.</li>
            </ul>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base">
              Your journey into full-time ministry begins with one step — enroll today and let us walk with you every step of the way.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="https://heartfeltcollege.org/index.php/contact-heartfelt-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-b from-indigo-600 to-indigo-800 text-white text-xs sm:text-sm font-semibold shadow-md transition hover:from-indigo-500 hover:to-indigo-900"
              >
                Click here to enroll with Heartfelt Institute
              </a>
            </div>
          </>
        ),
      },
      {
        question: "What courses are offered at Heartfelt Institute?",
        answer: (
          <>
            <p className="text-sm sm:text-base mb-2">
              Heartfelt Institute offers a comprehensive curriculum designed to equip you for various aspects of Christian service. Our programs cover a range of essential topics, including:
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>Biblical Studies</li>
              <li>History</li>
              <li>Integral Missions</li>
              <li>Law and Legal Studies</li>
              <li>Religious Studies</li>
              <li>Theologies</li>
            </ul>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base">
              Our flexible learning options, including full-time, part-time, and online courses, are designed to accommodate your schedule and learning preferences. Our goal is to provide accessible, high-quality theological education that empowers you to fulfill your divine purpose.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="https://heartfeltcollege.org/index.php/our-courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-b from-indigo-600 to-indigo-800 text-white text-xs sm:text-sm font-semibold shadow-md transition hover:from-indigo-500 hover:to-indigo-900"
              >
                Courses
              </a>
            </div>
          </>
        ),
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
        question: "Do you want to receive Jesus Christ?",
        answer: (
          <>
            <p className="text-sm sm:text-base">
              Receiving Jesus Christ as your Lord and Savior is the most important decision you can make! If you are ready to make this life-changing commitment, or if you have recently made it and would like guidance on the next steps, including **water baptism**, we are here to support you.
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">
              Please call us at: <a href="tel:+263779156452" className="text-app-blue-600 hover:underline">**+263 77 915 6452**</a>.
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">
              Our team will be delighted to pray with you, answer your questions, and guide you on your new journey of faith!
            </p>
          </>
        ),
      },
      {
        question: "Do you want to be baptized?", // Changed question
        answer: (
          <>
            <p className="text-sm sm:text-base">
              Water baptism is a significant step in your faith journey, publicly declaring your commitment to Jesus Christ. If you desire to be baptized, we celebrate with you!
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">
              To learn more about water baptism and to register for an upcoming service, please contact us directly.
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">
              **Contact Number:** <a href="tel:+263779156452" className="text-app-blue-600 hover:underline">+263 77 915 6452</a>
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">
              Our team will guide you through the process and answer any questions you may have. We look forward to celebrating this important milestone with you!
            </p>
          </>
        ),
      },
      {
        question: "How do I register to be baptized?", // Changed question
        answer: (
          <>
            <p className="text-sm sm:text-base">
              To register for water baptism at Heartfelt International Ministries, please follow these simple steps:
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 mt-1 sm:mt-2 text-sm sm:text-base">
              <li>**Contact Us:** Reach out to our ministry office directly to express your interest in baptism.</li>
              <li>**Provide Information:** Our team will guide you on any necessary information or forms.</li>
              <li>**Attend a Brief Session (Optional):** You may be invited to a short preparatory session to understand the meaning of baptism more deeply.</li>
              <li>**Schedule Your Baptism:** Once registered, we will help you choose an upcoming baptism service date and location that works for you.</li>
            </ul>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base">
              You can contact us at: <a href="tel:+263779156452" className="text-app-blue-600 hover:underline">**+263 77 915 6452**</a>. We are excited to assist you with this important step of faith!
            </p>
          </>
        ),
      },
      {
        question: "When and where do baptisms take place?",
        answer: (
          <>
            <p className="text-sm sm:text-base">
              Baptism services are regularly scheduled throughout the year at various Heartfelt International Ministries locations. Please contact us at <a href="tel:+263779156452" className="text-app-blue-600 hover:underline">+263 77 915 6452</a> or check our events calendar for upcoming dates and venues. We encourage you to register in advance to ensure proper arrangements.
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
      <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-white font-inter">
        <div className="max-w-7xl mx-auto">
          <section className="text-center">
            <div className="inline-flex justify-center items-center gap-2 sm:gap-3 pb-2 sm:pb-3 before:h-px before:w-6 sm:before:w-8 before:bg-gradient-to-r before:from-transparent before:to-app-blue-300/50 after:h-px after:w-6 sm:after:w-8 after:bg-gradient-to-l after:from-transparent after:to-app-blue-300/50 mx-auto">
              <span className="inline-flex bg-gradient-to-r from-app-blue-600 to-app-blue-300 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                FAQ Section
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 animate-[gradient_8s_linear_infinite] bg-[length:500%_auto] bg-gradient-to-r from-black via-[#1E90FF] to-black bg-clip-text text-transparent">
              Need Help? We've Got You.
            </h1>
            <p className="max-w-xl mx-auto text-sm sm:text-lg text-gray-700">
              Find answers to common questions about Heartfelt International Ministries, our services, membership, and more.
            </p>
          </section>

          <div className="flex flex-col lg:flex-row mt-10 sm:mt-16 gap-6 sm:gap-10">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4">
              <div className="bg-app-blue-50 p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-app-blue-800">Categories</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {faqCategories.map((cat) => (
                    <li key={cat.title}>
                      <a
                        href={`#${cat.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-xs sm:text-sm text-app-blue-700 hover:text-app-blue-900 transition-colors"
                      >
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* FAQ Content */}
            <div className="w-full lg:w-3/4 space-y-6 sm:space-y-8">
              {faqCategories.map((cat, ci) => (
                <section
                  key={ci}
                  id={cat.title.replace(/\s+/g, "-").toLowerCase()}
                  className="mb-6 sm:mb-10 animate-fade-in-up"
                >
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 flex items-center gap-1 sm:gap-2 text-app-blue-800">
                    <span className="text-xl sm:text-2xl">{cat.icon}</span> {cat.title}
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {cat.items.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-app-blue-300 rounded-md overflow-hidden bg-app-blue-50 shadow-sm"
                      >
                        <button
                          className="w-full text-left p-3 sm:p-4 bg-app-blue-100 hover:bg-app-blue-200 flex justify-between items-center text-app-blue-900 transition-colors text-sm sm:text-base"
                          onClick={() => toggle(cat.title, i)}
                          aria-expanded={open[cat.title] === i}
                          aria-controls={`${cat.title}-${i}-answer`}
                        >
                          <span>{faq.question}</span>
                          <span className="text-xl sm:text-2xl select-none">
                            {open[cat.title] === i ? "−" : "+"}
                          </span>
                        </button>
                        {open[cat.title] === i && (
                          <div
                            id={`${cat.title}-${i}-answer`}
                            className="p-3 sm:p-4 bg-app-blue-50 text-xs sm:text-sm text-app-blue-800"
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <div className="mt-8 sm:mt-12 border-t border-app-blue-300 pt-4 sm:pt-6">
                <div className="inline-flex justify-center items-center gap-2 sm:gap-3 pb-2 sm:pb-3 before:h-px before:w-6 sm:before:w-8 before:bg-gradient-to-r before:from-transparent before:to-app-blue-300/50 after:h-px after:w-6 sm:after:w-8 after:bg-gradient-to-l after:from-transparent after:to-app-blue-300/50">
                  <span className="inline-flex bg-gradient-to-r from-app-blue-600 to-app-blue-300 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                    Tailored For You
                  </span>
                </div>
                <h3 className="text-sm sm:text-base text-app-blue-800 mb-2 sm:mb-3">Explore Topics</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                      className="bg-app-blue-200 hover:bg-app-blue-300 text-xs sm:text-sm text-app-blue-900 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
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
      <HotLinkBanner /> {/* Added the HotLinkBanner component here */}
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

        /* Custom CSS for the bounce-once animation (merged) */
        @keyframes bounce-once {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 1s ease-out 1;
        }
      `}</style>
    </>
  );
}
