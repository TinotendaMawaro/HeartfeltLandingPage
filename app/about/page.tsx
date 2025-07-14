export const metadata = {
  title: "About - Heartfelt International Ministries",
  description:
    "Discover the vision, leadership, and mission of Heartfelt International Ministries.",
};

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";
import WebLandingImage from "@/public/images/web-landing-.jpg";
import AboutUsPage from "@/components/About";

export default function AboutPage() {
  return (
    <>
      <PageIllustration />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={WebLandingImage}
            alt="About Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-10 max-w-3xl z-10">
          <h1 className="animate-[fadeInUp_1s_ease-out] text-3xl md:text-5xl font-bold text-white">
            Serving the World Around Us
          </h1>
        </div>
      </section>

      <AboutUsPage />

      <Footer />

    </>
  );
}
