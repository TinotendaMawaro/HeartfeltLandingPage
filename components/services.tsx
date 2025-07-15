import React from "react";

type ServiceCard = {
  title: string;
  time: string;
  backgroundImage: string;
};

const ServiceTimesSection: React.FC = () => {
  const serviceCards: ServiceCard[] = [
    {
      title: "SUNDAY SERVICE",
      time: "0900hrs to 1300hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-fashion-man-love-people-5875438-@2x.png",
    },
    {
      title: "DAILY HOLY GHOST REVIVAL SERVICES",
      time: "1800hrs to 2030hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-a-statue-holding-a-holy-book-561313@2x.png",
    },
    {
      title: "MONDAY PRAYER ALTAR",
      time: "1000hrs to 1200hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-man-people-woman-connection-6276711@2x.png",
    },
    {
      title: "DAILY FRESH MANNA",
      time: "0500hrs to 0600hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-woman-in-blue-tank-top-and-man-in-r@2x.png",
    },
    {
      title: "DISCIPLESHIP CLASS",
      time: "Monday 1600hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/pexels-monstera-6238059@2x.png",
    },
    {
      title: "YOUNG FOUNDERS",
      time: "Tuesday 1200hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/pexels-thirdman-7256681@2x.png",
    },
    {
      title: "ONE WORD",
      time: "Wednesday 1500hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/pexels-kampus-5920772@2x.png",
    },
    {
      title: "INTERNATIONAL HOMEGROUPS",
      time: "Thursday 1300hrs (CAT)",
      backgroundImage:
        "https://c.animaapp.com/nd94gfJc/img/pexels-pavel-danilyuk-8005395@2x.png",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
            <span className="inline-flex bg-gradient-to-r from-[#1E90FF] to-[#A3D1FF] bg-clip-text text-transparent font-semibold">
              Worship With Us
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0.5),#1E90FF,rgba(0,0,0,0.5),#000000)] bg-[length:200%_auto] bg-clip-text text-transparent font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[64px] tracking-[-0.01em] drop-shadow-md">
            Our Service Times
          </h2>
          <p className="text-gray-900 mt-4 text-base sm:text-lg opacity-80 font-['Roboto Condensed']">
            Heartfelt International Ministries invites you to experience Spirit-led, transformative encounters through our weekly and daily services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-100 transition-transform hover:scale-[1.02] group"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition duration-500" />
              <div className="absolute bottom-20 left-6 font-bold text-white text-lg group-hover:translate-y-[-2px] transition">
                {service.title}
              </div>
              <div className="absolute bottom-8 left-6 text-[#d0e6ff] text-sm font-medium group-hover:translate-y-[-2px] transition">
                {service.time}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.youtube.com/@ApostleTavongaVutabwashe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-gradient-to-r from-[#1e90ff] to-blue-500 px-8 py-4 text-white text-sm sm:text-base font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            WATCH ONLINE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimesSection;