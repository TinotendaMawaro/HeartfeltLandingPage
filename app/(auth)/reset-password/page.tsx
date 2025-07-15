
import Link from "next/link";
import Image from "next/image";
import ResetBg from "@/public/images/sign-in.jpg"; // Use the same or a custom image

export const metadata = {
  title: "Reset Password - Open PRO",
  description: "Page description",
};

export default function ResetPassword() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Panel */}
      <div className="relative w-full h-64 lg:h-auto lg:w-1/2">
        <Image
          src={ResetBg}
          alt="Reset password background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form Side */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 sm:px-10 py-12 bg-gradient-to-tr from-[#eaf2fb] to-[#f5f9ff]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Reset your password
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your email to receive a reset link.
          </p>

          <form className="space-y-6">
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
                placeholder="Your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            Remembered your password?{" "}
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
