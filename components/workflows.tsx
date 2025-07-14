import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

const workflows = [
  {
    title: "Find A Zone",
    description: "Join us at one of our many zones across the country.",
    image: WorflowImg01,
    href: "#0",
  },
  {
    title: "Upcoming Events",
    description: "Stay connected with our latest services and special events.",
    image: WorflowImg02,
    href: "#0",
  },
  {
    title: "Get Involved",
    description: "Discover ways to serve and connect with our community.",
    image: WorflowImg03,
    href: "#0",
  },
];

export default function Workflows() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-400 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-400">
              <span className="inline-flex bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-semibold">
                Tailored For You
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,black,blue,black)] bg-[length:200%_auto] bg-clip-text text-transparent font-nacelle text-3xl font-semibold md:text-4xl">
              One Church Many Locations
            </h2>
            <p className="text-lg text-gray-600">
              Discover your place in our vibrant community — whether you're finding a Heartfelt zone near you, staying updated with powerful upcoming events, or getting involved through service. There’s always a way to connect, grow, and belong.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {workflows.map((workflow, index) => (
              <a
                key={index}
                href={workflow.href}
                className="group/card relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit]">
                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-blue-300 bg-blue-100 text-blue-600 opacity-0 transition-opacity group-hover/card:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                      <path
                        fill="currentColor"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src={workflow.image}
                    width={350}
                    height={288}
                    alt={workflow.title}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-200 transition">
                        {workflow.title}
                      </span>
                    </div>
                    <p className="text-gray-600">{workflow.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
