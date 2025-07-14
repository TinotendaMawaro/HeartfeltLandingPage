"use client";

import React from "react";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      {/* White background wrapper */}
      <div className="bg-white min-h-screen">

        {/* Introduction Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-center text-sm uppercase mb-2 animate-text-fade">
            Welcome To Our Church
          </h2>
          <h3 className="text-center text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            ONE CHURCH <span className="text-black">MANY LOCATIONS</span>
          </h3>
          <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12 animate-text-fade">
            Heartfelt International Ministries is a global Christian movement
            founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Heartfelt
            is a Spirit-led church renowned for its vibrant worship,
            life-transforming teachings, and commitment to building God's
            Kingdom across the nations.
          </p>

          {/* Vision Section */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                alt: "Vision 1",
                src: "/images/ApostleGown.jpg",
                title: "OUR VISION",
                subtitle: "STRIVING FOR A BETTER TOMORROW",
                text: "To obey the great commission while balancing high spirituality and high professionalism.",
              },
              {
                alt: "Vision 2",
                src: "/images/MrManyeruke.jpg",
                title: "OUR VISION",
                subtitle: "BRINGING PEACE AND JOY TO THE WORLD",
                text: "To promote righteousness, love, peace, and personal development in the LORD.",
              },
              {
                alt: "Vision 3",
                src: "/images/Crusade1.jpg",
                title: "OUR VISION",
                subtitle: "UNITY IN DIVERSITY",
                text: "Embracing diversity across nations, building a unified, Spirit-led generation.",
              },
            ].map(({ alt, src, title, subtitle, text }, i) => (
              <div key={i} className="text-center animate-text-fade">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto"
                  priority={i === 0} // prioritize first image loading
                />
                <h4 className="font-bold text-lg mt-4">{title}</h4>
                <p className="text-sm font-semibold">{subtitle}</p>
                <p className="text-sm text-gray-700 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ministries Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {[
              {
                title: "HEARTFELT INTERNATIONAL MINISTRIES",
                image: "ministry1.jpg",
                text: "Over the years, Heartfelt International Ministries has achieved monumental milestones with more than 6000 seating auditorium in Harare, and its headquarters in Arlington Park.",
              },
              {
                title: "SIGNIFICANT PROGRESS",
                image: "flameBridge.jpg",
                text: "God's anointing is abundant in our commission, with mass manifestations, precise prophecies, and undeniable breakthroughs across regions.",
              },
              {
                title: "INTERNATIONAL OVERFLOW CENTER",
                image: "ApostleCrowd.jpg",
                text: "A 6000-seater facility developed in just two months — a remarkable testament to divine favor.",
              },
              {
                title: "RICHLAND CITY",
                image: "richland.jpg",
                text: "A model Christian city with modern housing, reliable Wi-Fi, and facilities for holistic development of believers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`grid gap-10 items-center md:grid-cols-2 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } animate-text-fade`}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                  priority={index === 0} // prioritize first image loading
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-800">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       {/* Leaders Section */}
        <section className="py-20 px-6">
        <div className="text-center mb-12">
            <p className="text-black uppercase animate-text-fade">
            The Visionaries
            </p>
            <h2 className="text-3xl font-bold text-blue-600">
            OUR <span className="text-black">LEADERS</span>
            </h2>
        </div>
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
            {[
            {
                name: "Tavonga Vutabwashe",
                image: "apostle.png",
                title: "Apostle",
                socials: {
                facebook: "https://www.facebook.com/apostletvutabwashe",
                twitter: "https://x.com/T_Vutabwashe",
                instagram: "https://www.instagram.com/apostletvutabwashe/",
                },
            },
            {
                name: "Chipo Vutabwashe",
                image: "pastor.png",
                title: "Pastor",
                socials: {
                facebook: "https://www.facebook.com/PastorCVutabwashe",
                twitter: "https://x.com/CVutabwashe",
                instagram: "https://www.instagram.com/chipovutabwashe/",
                },
            },
            ].map(({ name, image, title, socials }, i) => (
            <div
                key={i}
                className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 animate-text-fade"
            >
                <Image
                src={`/images/${image}`}
                alt={name}
                width={200}
                height={200}
                className="rounded-full shadow"
                priority
                />
                <h4 className="text-xl font-semibold mt-4 text-black">{name}</h4>
                <p className="text-sm text-gray-700">{title}</p>
                {/* Blue buttons for social icons */}
                <div className="flex gap-4 mt-3 text-blue-600 text-lg">
                <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Facebook`}
                >
                    <button className="bg-blue-600 hover:bg-blue-700 transition rounded px-3 py-1 text-white shadow">
                    Facebook
                    </button>
                </a>
                <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Twitter`}
                >
                    <button className="bg-blue-600 hover:bg-blue-700 transition rounded px-3 py-1 text-white shadow">
                    X(Twitter)
                    </button>
                </a>
                <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Instagram`}
                >
                    <button className="bg-blue-600 hover:bg-blue-700 transition rounded px-3 py-1 text-white shadow">
                    Instagram
                    </button>
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>

      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-fade {
          animation: textFadeIn 2s ease-out forwards;
          color: black;
        }
        @keyframes textFadeIn {
          0% {
            opacity: 0;
            color: transparent;
          }
          100% {
            opacity: 1;
            color: black;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsPage;
