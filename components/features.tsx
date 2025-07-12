import Image from "next/image";
import Spotlight from "@/components/spotlight";

export default function Features() {
  const images = [
    {
      src: "https://c.animaapp.com/nd94gfJc/img/492355698-1071470515026925-4038722175147103859-n@2x.png",
      alt: "Event 1",
    },
    {
      src: "https://c.animaapp.com/nd94gfJc/img/485308310-1048516330655677-7640881663807573349-n.png",
      alt: "Event 2",
    },
    {
      src: "https://c.animaapp.com/nd94gfJc/img/480501558-1025684062938904-5734784264997205442-n@2x.png",
      alt: "Event 3",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Who We Are
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Heartfelt International Ministries
            </h2>
            <p className="text-lg text-indigo-200/65">
              Heartfelt International Ministries is a global Christian movement founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Rooted in a bold vision to raise a generation of Kingdom-minded believers, Heartfelt is a dynamic, Spirit-led church known for its vibrant worship, life-transforming teachings, and unwavering commitment to building God&apos;s Kingdom across the nations.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-wrap items-end justify-center gap-6 pb-12">
            {images.map((image, index) => (
              <img
                key={index}
                className="rounded-xl object-cover shadow-lg w-[293px] h-96 sm:w-[390px] sm:h-[512px] transition-transform duration-500 hover:scale-105"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

          {/* Mission and Vision Styled as Section Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Mission & Vision
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Celebrate With Us
            </h2>
            <p className="text-lg text-indigo-200/65">
              Heartfelt International Ministries is dedicated to raising a generation of believers rooted in faith, empowered by the Holy Spirit, and committed to impacting their world for Christ. Our mission is to spread the Gospel, nurture disciples, and build strong, vibrant communities.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-2xl border border-indigo-400 bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}