"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Zones", href: "#" },
  { label: "Events", href: "/events" },
  { label: "Heartfelt Institute", href: "#" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/HeartfeltTV/photos",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://x.com/HeartfeltTV",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://www.instagram.com/apostletvutabwashe/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.youtube.com/@ApostleTavongaVutabwashe",
    label: "YouTube",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-bl text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        {/* Grid layout for footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16 text-sm sm:text-base">
          {/* Contact and Logo */}
          <div className="space-y-4 sm:space-y-5">
            <Logo />
            <p className="leading-relaxed text-xs sm:text-sm md:text-base">
              01, Sandy Lane, Ashdown Park, Harare, Zimbabwe
            </p>
            <p className="text-xs sm:text-sm md:text-base">+263 77 915 6452</p>
            <p className="text-xs sm:text-sm md:text-base">
              testimonies@heartfeltonline.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4 items-center">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-indigo-400 transition text-xl sm:text-2xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-xs sm:text-sm md:text-base">
              Get the latest updates and news.
            </p>
            <form
              className="flex flex-col sm:flex-row items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-white text-black placeholder-gray-600 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                type="submit"
                className="bg-app-primary text-white rounded-md px-6 py-2 hover:bg-indigo-700 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-4 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Heartfelt Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
