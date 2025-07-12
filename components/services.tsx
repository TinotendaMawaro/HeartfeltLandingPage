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
  ];

  return (
   <section> 
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Worship With Us
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our Service Times
          </h2>
          <p className="text-lg text-indigo-200/65">
            Heartfelt International Ministries invites you to experience Spirit-led, transformative encounters through our weekly and daily services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-black/20 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-indigo-500/30 group"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
              <div className="absolute bottom-20 left-6 font-['Montserrat',Helvetica] font-bold text-white text-lg transition-transform duration-500 group-hover:translate-y-[-2px]">
                {service.title}
              </div>
              <div className="absolute bottom-8 left-6 text-indigo-200/80 font-medium text-sm transition-transform duration-500 group-hover:translate-y-[-2px]">
                {service.time}
              </div>
            </div>
          ))}
        </div>

        <div
            className="flex justify-center mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
            >
            <a
                href="https://www.youtube.com/@ApostleTavongaVutabwashe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-app-primary px-8 py-4 text-white text-sm sm:text-base font-medium hover:bg-indigo-700 transition"
            >
                WATCH ONLINE
            </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceTimesSection;
