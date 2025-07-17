"use client";

import React, { useState } from "react";
// Using a custom Image component as per previous interactions
// If you are using Next.js, you might replace this with 'next/image' and adjust props accordingly.
// import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

// Custom Image component to handle object-fit and fill behavior
function Image({ src, alt, className, fill, priority, width, height }: ImageProps) {
  const sizeClasses = fill ? "w-full h-full" : "";
  const objectFitClass = className?.includes('object-contain') ? 'object-contain' : 'object-cover'; // Default to cover if not specified

  return (
    <img
      src={src}
      alt={alt}
      width={width} // Pass width for explicit sizing if not 'fill'
      height={height} // Pass height for explicit sizing if not 'fill'
      className={`${objectFitClass} ${sizeClasses} ${className || ''}`}
    />
  );
}

const AboutUsPage = () => {
  const [showFamily, setShowFamily] = useState<number | null>(null);

  const ministriesSections = [
    {
      title: "HEARTFELT INTERNATIONAL MINISTRIES",
      image: "ministry1.jpg",
      text: "Over the years, Heartfelt International Ministries has achieved monumental milestones with more than 6000 seating auditorium in Harare, and its headquarters in Arlington Park. Heartfelt International Ministries is a dynamic, Spirit-led church known for its vibrant worship, life-transforming teachings, and unwavering commitment to building God’s Kingdom across the nations.",
    },
    {
      title: "SIGNIFICANT PROGRESS",
      image: "FlameBridge.jpg",
      text: "God's anointing is abundant in our commission, with mass manifestations, precise prophecies, and undeniable breakthroughs across regions. The potent presence of the Holy Spirit continues to transform lives and circumstances. Our renowned 'Catch the Fire' (CTF) conferences serve as powerful platforms for incredible divine encounters, spiritual revivals, and profound transformations. Throughout this remarkable journey, God's faithfulness and our commitment to holistic community development have been our guiding light, marking each step with prophetic significance.",
    },
    {
      title: "INTERNATIONAL OVERFLOW CENTER",
      image: "ApostleCrowd.jpg",
      text: "The Ministry is truly blessed with a magnificent 6000-seater auditorium situated on land acquired in Ash Down Park, Harare, which was developed and completed within a remarkable two months. This stands as a great testimony to the ministry's rapid progress and divine favor.",
    },
    {
      title: "RICHLAND CITY",
      image: "richland.jpg",
      text: "Richland City is a visionary leadership of Apostle T. Vutabwashe and Pastor C. Vutabwashe. We have embarked on the ambitious task of building Richland City in Marondera, Zimbabwe, a sprawling Christian city spanning more than 600 hectares of farmland. This incredible endeavor serves as the exclusive venue for our annual 'Catch the Fire' conferences and is designed to feature state-of-the-art modern housing, reliable Wi-Fi, and facilities for the holistic development of believers. Richland City truly stands as a testament to God's faithfulness and our unwavering commitment to holistic community development.",
    },
  ];

  return (
    <>
      <div className="bg-white min-h-screen font-inter"> {/* Added font-inter here */}
        {/* Welcome Section */}
        <section className="max-w-5xl mx-auto text-center px-4 py-16 sm:px-6 lg:px-8 animate-fade-in-up">
          <p className="text-xs uppercase mb-2 text-gray-600">WELCOME TO OUR CHURCH</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-gradient-to-r from-black via-[#1E90FF] to-black bg-clip-text text-transparent">
            ONE CHURCH MANY LOCATIONS
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
            Heartfelt International Ministries is a global Christian movement founded by Apostle T. Vutabwashe and Pastor C. Vutabwashe. Rooted in a bold vision to raise a generation of Kingdom-minded believers, Heartfelt is a dynamic, Spirit-led church known for its vibrant worship, life-transforming teachings, and unwavering commitment to building God's Kingdom across the nations.
          </p>

          {/* Images Row - Adjusted sizes for responsiveness and added hover effect to middle image */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-20">
            {/* Left Image */}
            <div className="w-full sm:w-[486px] h-[604px] relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/feature2.png"
                alt="Apostle speaking"
                fill
                priority
              />
            </div>
            {/* Middle Image - Wider by default and hover effect, increased height */}
            <div className="w-full sm:w-[668px] h-[822px] relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 z-10">
              <Image
                src="/images/feature1.png"
                alt="Pastor preaching"
                fill
                priority
              />
            </div>
            {/* Right Image */}
            <div className="w-full sm:w-[486px] h-[604px] relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/feature3.png"
                alt="Prayer session"
                fill
                priority
              />
            </div>
          </div>

          {/* Vision statements - `items-end` aligns the entire content block to the bottom of the grid cell */}
          <div className="max-w-4xl mx-auto grid gap-8 md:gap-12 md:grid-cols-2 items-end animate-fade-in-up">
            {/* Vision 1 */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                OUR VISION
              </p>
              <h2 className="font-extrabold text-lg md:text-xl mb-4 text-[#1E90FF] leading-snug">
                STRIVING FOR A BETTER TOMORROW
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To perpetuate the ministry of Christ on earth by obeying the great commission and balancing high spirituality and high professionalism, creating a home for races where gifts and skills are discovered, developed and celebrated.
              </p>
            </div>

            {/* Vision 2 - Added mt-8 for top margin on mobile, md:mt-0 to reset on larger screens */}
            <div className="mt-8 md:mt-0">
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                OUR VISION
              </p>
              <h2 className="font-extrabold text-lg md:text-xl mb-4 text-[#1E90FF] leading-snug">
                BRINGING PEACE AND JOY TO THE WORLD
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To minister in the power of the HOLY SPIRIT, to promote righteousness, love, peace, respect and personal development in the LORD; celebrating unity and embracing diversity in the church and the nation whilst transforming the world through Bible-based teachings.
              </p>
            </div>
          </div>
        </section>

        {/* Ministries Section - Updated to match the screenshot layout */}
        <section className="bg-gray-50 py-16 px-6 font-inter">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold uppercase text-blue-600 mb-2">Our Story</h2>
              <h1 className="text-4xl md:text-5xl font-montserrat animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-gradient-to-r from-black via-[#1E90FF] to-black bg-clip-text text-transparent">WHO WE ARE</h1>
            </div>

            <div className="space-y-20">
              {ministriesSections.map((item, index) => (
                <div
                  key={index}
                  // Conditional order for image to match screenshot:
                  // Index 0 (HEARTFELT): Text left, Image right (image is md:order-last)
                  // Index 1 (SIGNIFICANT): Image left, Text right (image is default order)
                  // Index 2 (INTERNATIONAL): Text left, Image right (image is md:order-last)
                  // Index 3 (RICHLAND): Image left, Text right (image is default order)
                  className={`grid gap-8 items-center md:grid-cols-2 animate-fade-in-up ${index % 2 === 0 ? 'md:grid-flow-col-dense' : ''}`}
                >
                  <div className={`${index % 2 === 0 ? 'md:order-last' : ''}`}> {/* Image column */}
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.title}
                      width={500} // Based on .nIcon width from provided CSS
                      height={320} // Based on .nIcon height from provided CSS
                      className="rounded-3xl shadow-md w-full h-auto object-cover" // Ensure object-cover and responsive
                      priority={index === 0}
                    />
                  </div>

                  <div> {/* Text content column */}
                    <h3 className="text-2xl font-bold mb-3 text-black font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed opacity-75">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leaders Section */}
        <section className="py-20 px-6 font-inter pt-30 pb-30"> {/* Added font-inter here */}
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
                familyImages: [
                  "family1.jpg",
                  "family2.jpg",
                  "family3.jpg",
                  "family4.jpg",
                  "family5.jpg",
                  "family6.jpg",
                  "family7.jpg",
                  "family8.jpg",
                  "family9.jpg",
                  "family10.jpg",
                  "family11.jpg",
                  "family12.jpg",
                  "family13.jpg",
                ],
                title: "Apostle",
                socials: {
                  facebook: "https://www.facebook.com/ApostleTavongaVutabwashe",
                  twitter: "https://x.com/T_Vutabwashe",
                  instagram: "https://www.instagram.com/apostletvutabwashe/",
                },
              },
              {
                name: "Chipo Vutabwashe",
                images: ["pastor.png", "pastor1.jpg", "pastor2.jpg", "pastor3.jpg"],
                familyImages: [
                  "family1.jpg",
                  "family2.jpg",
                  "family3.jpg",
                  "family4.jpg",
                  "family5.jpg",
                  "family6.jpg",
                  "family7.jpg",
                  "family8.jpg",
                  "family9.jpg",
                  "family10.jpg",
                  "family11.jpg",
                  "family12.jpg",
                  "family13.jpg",
                ],
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
                    className="rounded-full shadow z-10 animate-fade-in transition-all duration-700 ease-in-out"
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
                        className="rounded-lg shadow-md animate-fade-in"
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
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
        .animate-fade-in-up {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-fade {
          animation: textFadeIn 1.8s ease-in-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s ease forwards;
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
