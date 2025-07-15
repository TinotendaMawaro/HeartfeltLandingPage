"use client";

import Link from "next/link";
import Image from "next/image";
import SignUpBg from "@/public/images/sign-up.jpg"; // Use same image as sign-in or change if needed

export default function SignUp() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2">
        <Image
          src={SignUpBg}
          alt="Sign up background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form Side */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 sm:px-10 py-12 bg-gradient-to-tr from-[#eaf2fb] to-[#f5f9ff]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Create an account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Join our community and stay connected
          </p>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your residential address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="At least 10 characters"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
            >
              Register
            </button>
          </form>

          {/* OR divider */}
          <div className="my-6 flex items-center gap-4 text-sm text-gray-400">
            <hr className="flex-grow border-t border-gray-300" />
            OR
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google button */}
          <div>
            <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Image
                src="/images/Google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-sm text-gray-700">Sign Up with Google</span>
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
