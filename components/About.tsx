"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUsPage = () => {
  const [showFamily, setShowFamily] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Welcome Section */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-sm uppercase mb-2 animate-text-fade">
            Welcome To Our Church
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            ONE CHURCH <span className="text-black">MANY LOCATIONS</span>
          </h3>
          <p className="text-gray-800 max-w-3xl mx-auto mb-12 animate-text-fade">
            Heartfelt International Ministries is a global Christian movement
            founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Heartfelt
            is a Spirit-led church renowned for its vibrant worship,
            life-transforming teachings, and commitment to building God's
            Kingdom across the nations.
          </p>

          {/* Vision Section */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                title: "OUR MISSION",
                subtitle: "BRINGING PEACE AND JOY TO THE WORLD",
                text: "To promote righteousness, love, peace, and personal development in the LORD.",
              },
              {
                alt: "Vision 3",
                src: "/images/Crusade1.jpg",
                title: "OUR CORE VALUES",
                subtitle: "UNITY IN DIVERSITY",
                text: "Embracing diversity across nations, building a unified, Spirit-led generation.",
              },
            ].map(({ alt, src, title, subtitle, text }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center animate-fade-in"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover mb-4 animate-scale-in"
                  priority={i === 0}
                />

                <h4 className="text-blue-600 font-semibold text-lg">{title}</h4>
                <p className="text-sm font-bold mt-1 mb-2 text-gray-700">{subtitle}</p>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ministries Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-20">
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
                className={`grid gap-8 items-center md:grid-cols-2 animate-fade-in`}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md w-full animate-fade-in"
                  priority={index === 0}
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
    <p className="text-black uppercase animate-text-fade">The Visionaries</p>
    <h2 className="text-3xl font-bold text-blue-600">
      OUR <span className="text-black">LEADERS</span>
    </h2>
  </div>
  <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2">
    {[
      {
        name: "Tavonga Vutabwashe",
        images: ["apostle.png", "apostle11.jpg", "apostle12.jpg", "apostle13.jpg"],
        familyImages: ["family1.jpg", "family2.jpg", "family3.jpg"],
        title: "Apostle",
        socials: {
          facebook: "https://www.facebook.com/apostletvutabwashe",
          twitter: "https://x.com/T_Vutabwashe",
          instagram: "https://www.instagram.com/apostletvutabwashe/",
        },
      },
      {
        name: "Chipo Vutabwashe",
        images: ["pastor.png","pastor1.jpg", "pastor2.jpg", "pastor3.jpg"],
        familyImages: ["family1.jpg", "family2.jpg", "family3.jpg"],
        title: "Pastor",
        socials: {
          facebook: "https://www.facebook.com/PastorCVutabwashe",
          twitter: "https://x.com/CVutabwashe",
          instagram: "https://www.instagram.com/chipovutabwashe/",
        },
      },
    ].map(({ name, images, familyImages, title, socials }, i) => {
      const [mainIndex, setMainIndex] = useState(0);
      const [familyIndex, setFamilyIndex] = useState(0);

      // Rotate leader images
      React.useEffect(() => {
        const interval = setInterval(() => {
          setMainIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [images.length]);

      // Rotate family images only when visible
      React.useEffect(() => {
        if (showFamily === i) {
          const interval = setInterval(() => {
            setFamilyIndex((prev) => (prev + 1) % familyImages.length);
          }, 3000);
          return () => clearInterval(interval);
        }
      }, [showFamily, familyImages.length, i]);

      return (
        <div
          key={i}
          className="relative flex flex-col items-center bg-white rounded-xl shadow-lg p-6 animate-text-fade"
          onClick={() => setShowFamily(showFamily === i ? null : i)}
        >
          {/* Leader Slideshow Image */}
          <Image
            src={`/images/${images[mainIndex]}`}
            alt={name}
            width={200}
            height={200}
            className="rounded-full shadow object-cover z-10 animate-fade-in transition-all duration-700 ease-in-out"
            priority
          />
          <h4 className="text-xl font-semibold mt-4 text-black">{name}</h4>
          <p className="text-sm text-gray-700">{title}</p>
          <div className="flex gap-3 mt-3 text-blue-600 text-xl z-10">
            <a href={socials.facebook} target="_blank" aria-label="Facebook">
              <FaFacebook className="hover:scale-110 transition" />
            </a>
            <a href={socials.twitter} target="_blank" aria-label="Twitter">
              <FaTwitter className="hover:scale-110 transition" />
            </a>
            <a href={socials.instagram} target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:scale-110 transition" />
            </a>
          </div>

          {/* Family Slideshow on Click */}
          {showFamily === i && (
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 rounded-xl flex flex-col items-center justify-center animate-scale-in z-20 transition">
              <Image
                src={`/images/${familyImages[familyIndex]}`}
                alt={`${name} family`}
                width={250}
                height={200}
                className="rounded-lg shadow-md object-cover animate-fade-in"
              />
              <p className="mt-3 text-sm text-gray-700">Family of {name}</p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        .animate-text-fade {
          animation: textFadeIn 1.8s ease-in-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s ease forwards;
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

        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsPage;
