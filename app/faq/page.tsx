export const metadata = {
  title: "FAQs - Heartfelt International Ministries",
  description: "Get answers to common questions about HIM, membership, partnership, events, giving, and more.",
};

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import FaqSectionFull from "@/components/FaqPage";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import WebLandingImage from "@/public/images/web-landing-.jpg"; // You can use another relevant image here

export default function FaqPage() {
  return (
    <>

      {/* Hero Header with Background Image */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="FAQs Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-4xl z-10">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-base md:text-lg">
            Find answers to the most common questions about Heartfelt International Ministries.
          </p>
        </div>
      </section>

      {/* FAQ Section with Categories and Questions */}
      <section>
        <FaqSectionFull />
      </section>

      {/* Call to Action */}
      <section >
        <Cta />
      </section>

      <Footer />
    </>
  );
}
