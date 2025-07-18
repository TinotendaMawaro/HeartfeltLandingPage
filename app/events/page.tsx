export const metadata = {
  title: "Events - Heartfelt International Ministries",
  description: "Explore upcoming conferences, revivals, and ministry programs.",
};

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import EventsHighlightsSection from "@/components/events";
import EventsPageFull from "@/components/EventsPage";
import Footer from "@/components/ui/footer";
import WebLandingImage from "@/public/images/hero 5.jpg"; 

export default function EventsPage() {
  return (
    <>

      {/* Hero Header with Background Image */}
    <section className="relative w-full min-h-[600px] flex items-center justify-center text-center text-white animate-float-ripple ">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="About Background"
            fill
            className="object-cover
            "
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Upcoming Events & Conferences
          </h1>
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-base md:text-lg">
            Join us in our upcoming Spirit-filled gatherings that transform lives, build faith, and strengthen fellowship.
          </p>
        </div>
      </section>

      {/* Events Highlights Section (cards) */}
      <section>
        <EventsHighlightsSection />
      </section>

      {/* Full Events Page Section */}
      <section >
        <EventsPageFull />
      </section>

      <Footer />
    </>
  );
}
