export const metadata = {
  title: "Heartfelt International Ministries",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ServiceTimesSection from "@/components/services";
import EventsHighlightsSection from "@/components/events";
import FaqSection from "@/components/faq";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <ServiceTimesSection />
      <EventsHighlightsSection />
      <Cta />
      <FaqSection />
    </>
  );
}
