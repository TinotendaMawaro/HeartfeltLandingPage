"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";

type CountdownMap = {
  [key: string]: string;
};

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdowns, setCountdowns] = useState<CountdownMap>({});

  const events = [
    {
      title: "Catch The Fire Conference",
      date: new Date("2025-08-25T00:00:00"),
      slug: "catch-the-fire",
      image: "/images/ctf-logo.png",
    },
    {
      title: "Benny Hinn Crusade",
      date: new Date("2025-10-10T00:00:00"),
      slug: "benny-hinn-crusade",
      image: "/images/BennyHinn.png",
    },
  ];

  const extraPages = [
    "Departments",
    "Zones",
    "Booking System",
    "Him Library",
    "Media and Feedback",
    "Gallery",
    "Partnership",
    "Vision & Mission",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updates: CountdownMap = {};
      events.forEach((event) => {
        const distance = event.date.getTime() - now.getTime();
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((distance / (1000 * 60)) % 60);
          updates[event.slug] = `${days}d ${hours}h ${minutes}m`;
        }
      });
      setCountdowns(updates);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Events", href: "/events" },
    { label: "Institute", href: "/institute" },
  ];

  return (
    <header className="z-30 w-full bg-gray-900/90 backdrop-blur-md shadow-md fixed top-0 left-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-white hover:scale-105"
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition flex items-center select-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                More
                <svg
                  className={`ml-1 inline h-4 w-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.18l3.71-3.95a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-3 w-80 rounded-xl bg-gray-800/90 shadow-lg backdrop-blur-lg py-4 px-5 z-50 animate-fade-down space-y-4"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {/* Countdown Event Cards */}
                  {events.map(
                    (event) =>
                      event.date > new Date() && (
                        <Link
                          key={event.slug}
                          href={`/events/${event.slug}`}
                          className="block rounded-lg p-3 bg-gray-700/40 hover:bg-gray-700 transition duration-200 flex gap-3 items-center"
                        >
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                            loading="lazy"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-white">
                              {event.title}
                            </span>
                            <span
                              className="text-xs text-indigo-400 animate-pulse tracking-wide font-mono"
                              aria-live="polite"
                            >
                              Starts in {countdowns[event.slug] || "Soon"}
                            </span>
                          </div>
                        </Link>
                      )
                  )}

                  <hr className="border-indigo-400/30" />

                  {/* Extra Pages */}
                  {extraPages.map((page, i) => (
                    <Link
                      key={i}
                      href={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-1 text-sm text-indigo-100 hover:text-white transition"
                    >
                      {page}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Auth Buttons */}
          <ul className="hidden md:flex items-center gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 text-sm text-gray-300 rounded-md transition hover:bg-gray-700"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 px-4 py-2 text-sm text-white rounded-md shadow hover:from-indigo-700 hover:to-indigo-600"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-900/90 backdrop-blur-md rounded-b-2xl mt-2 px-4 py-4 shadow-lg animate-fade-down">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block text-gray-300 text-base font-medium hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Mobile "More" dropdown */}
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left text-gray-300 hover:text-white font-medium flex items-center justify-between"
                >
                  More
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.18l3.71-3.95a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-4 border-l border-indigo-400/30">
                    {events.map(
                      (event) =>
                        event.date > new Date() && (
                          <li key={event.slug}>
                            <Link
                              href={`/events/${event.slug}`}
                              className="flex items-center gap-3 text-indigo-100 hover:text-white"
                              onClick={() => {
                                setDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                                loading="lazy"
                              />
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold">
                                  {event.title}
                                </span>
                                <span className="text-xs text-indigo-400 font-mono tracking-wide animate-pulse">
                                  Starts in {countdowns[event.slug] || "Soon"}
                                </span>
                              </div>
                            </Link>
                          </li>
                        )
                    )}

                    {extraPages.map((page, i) => (
                      <li key={i}>
                        <Link
                          href={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-indigo-100 hover:text-white"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>

      <style jsx>{`
        .animate-fade-down {
          animation: fadeDown 0.3s ease forwards;
        }
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
