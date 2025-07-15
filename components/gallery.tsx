'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/1 (2).jpg',
  '/images/1 (3).jpg',
  '/images/1 (4).jpg',
  '/images/1 (5).jpg',
  '/images/1 (6).jpg',
  '/images/1 (7).jpg',
  '/images/1 (8).jpg',
  '/images/1 (9).jpg',
  '/images/1 (10).jpg',
  '/images/1 (11).jpg',
  '/images/1 (12).jpg',
  '/images/1 (13).jpg',
  '/images/1 (14).jpg',
  '/images/1 (15).jpg',
  '/images/1 (16).jpg',
  '/images/1 (17).jpg',
  '/images/1 (18).jpg',
  '/images/1 (19).jpg',
  '/images/1 (20).jpg',
  '/images/1 (21).jpg',
  '/images/1 (22).jpg',
  '/images/1 (23).jpg',
  '/images/1 (24).jpg',
  '/images/1 (25).jpg',
  '/images/1 (26).jpg',
  '/images/1 (27).jpg',
  '/images/1 (28).jpg',
  '/images/1 (29).jpg',
  '/images/1 (30).jpg',
  '/images/2 (1).jpg',
  '/images/2 (2).jpg',
  '/images/2 (3).jpg',
  '/images/2 (4).jpg',
  '/images/2 (5).jpg',
  '/images/2 (6).jpg',
  '/images/2 (7).jpg',
  '/images/2 (8).jpg',
  '/images/2 (9).jpg',
  '/images/2 (10).jpg',
  '/images/2 (11).jpg',
  '/images/2 (12).jpg',
  '/images/2 (13).jpg',
  '/images/2 (14).jpg',
];



const GalleryPage = () => {
  return (
    <>

      {/* Gallery Section */}
      <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-indigo-800">
            Moments Captured
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
