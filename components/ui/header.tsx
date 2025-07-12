"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Events", href: "/events" },
    { label: "Institute", href: "/institute" },
  ];

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation Menu */}
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
          </nav>

          {/* Sign In/Register Buttons */}
          <ul className="flex items-center gap-3">
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
      </div>
    </header>
  );
}
