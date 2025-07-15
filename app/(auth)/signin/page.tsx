"use client";

import Image from "next/image";
import Link from "next/link";
import SignInBg from "@/public/images/sign-in.jpg"; // replace with your image

export default function SignIn() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Side */}
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2">
        <Image
          src={SignInBg}
          alt="Sign in background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form Side */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 sm:px-10 py-12 bg-gradient-to-tr from-[#eaf2fb] to-[#f5f9ff]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Login to our app for more information
          </p>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link
                href="/reset-password"
                className="text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
            >
              Sign In
            </button>
          </form>

          {/* OR divider */}
          <div className="my-6 flex items-center gap-4 text-sm text-gray-400">
            <hr className="flex-grow border-t border-gray-300" />
            OR
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social buttons */}
          <div className="flex justify-between gap-3">
            <button className="flex-1 border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Image src="/images/Google.svg" alt="Google" width={20} height={20} />
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Image src="/images/Facebook.svg" alt="Facebook" width={20} height={20} />
              <span className="text-sm text-gray-700">Facebook</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Image src="/images/Apple.svg" alt="Apple" width={20} height={20} />
              <span className="text-sm text-gray-700">Apple</span>
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-6 text-sm text-center text-gray-600">
            Be part of us{" "}
            <Link
              href="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Create an account.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
