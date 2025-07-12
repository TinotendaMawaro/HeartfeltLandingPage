import React from "react";

type EventCard = {
  title: string;
  image: string;
  bgPosition: string;
  overlayHeight: string;
  overlayTop: string;
  textAlign: string;
};

const EventsHighlightsSection: React.FC = () => {
  const events: EventCard[] = [
    {
      title: "CRUSADES",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-fashion-man-love-people-5875438--1@2x.png",
      bgPosition: "100% 100%",
      overlayHeight: "309px",
      overlayTop: "75px",
      textAlign: "text-center",
    },
    {
      title: "INTERNATIONAL DAY OF SPORTS",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-a-statue-holding-a-holy-book-561313-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-center",
    },
    {
      title: "TREE PLANTATION DAY",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-man-people-woman-connection-6276711-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-left",
    },
    {
      title: "HEARTFELT INSTITUTE GRADUATION",
      image:
        "https://c.animaapp.com/nd94gfJc/img/https---www-pexels-com-photo-woman-in-blue-tank-top-and-man-in-r-1@2x.png",
      bgPosition: "50% 50%",
      overlayHeight: "187px",
      overlayTop: "197px",
      textAlign: "text-left",
    },
  ];

  return (
    <section
      aria-label="Events Highlights Section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Join Us for Our Events 
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Events Highlights
          </h2>
          <p className="mt-4 text-indigo-200/65">
            Join us as we celebrate and engage in transformative experiences through our highlighted events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-black/20 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-indigo-500/30 group"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: event.bgPosition,
              }}
            >
              <div
                className="absolute left-0 w-full bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover:from-black/90"
                style={{ top: event.overlayTop, height: event.overlayHeight }}
              />

              <div
                className={`absolute bottom-20 left-6 w-[238px] font-['Montserrat',Helvetica] font-bold text-white text-lg transition-transform duration-500 group-hover:translate-y-[-2px] ${event.textAlign}`}
              >
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsHighlightsSection;
