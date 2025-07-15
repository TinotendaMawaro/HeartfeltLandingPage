'use client';

import Image from "next/image";
import ZonesPage from "@/components/zones";
import Footer from "@/components/ui/footer";
import WebLandingImage from "@/public/images/web-landing-.jpg"; // Update to your actual zones image

export default function Page() {
  return (
    <>
      {/* Hero Header with Background Image */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="Zones Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Heartfelt Zones
          </h1>
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-base md:text-lg">
            Discover all Heartfelt zones across Zimbabwe, South Africa, Malawi, and beyond.
          </p>
        </div>
      </section>

      {/* Zones Section */}
      <section>
        <ZonesPage />
      </section>

      <Footer />
    </>
  );
}
