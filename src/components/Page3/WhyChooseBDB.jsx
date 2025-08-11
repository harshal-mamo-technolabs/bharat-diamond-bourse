'use client';

import Image from "next/image";
import buildingImg from "../../../public/example3/building2.png"; // replace with your image path

export default function WhyChooseBDB() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            <span className="text-2xl">~</span> Why Choose BDB?
          </h2>
          <p className="text-gray-600 mb-8">
            As one of the world's largest and most secure diamond trading hubs, 
            BDB offers unmatched advantages to members, traders, and global partners.
          </p>

          {/* Stats container */}
          <div className="border rounded-xl overflow-hidden max-w-xl">
            <div className="grid grid-cols-2 border-b">
              <div className="flex flex-col items-center justify-center p-6 border-r">
                <span className="text-2xl font-bold italic text-blue-900">2,500</span>
                <span className="text-xs uppercase tracking-wide text-gray-700 mt-1">
                  Diamond Offices
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <span className="text-2xl font-bold italic text-blue-900">9</span>
                <span className="text-xs uppercase tracking-wide text-gray-700 mt-1">
                  Interconnected Towers
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center justify-center p-6 border-r">
                <span className="text-2xl font-bold italic text-blue-900">2</span>
                <span className="text-xs uppercase tracking-wide text-gray-700 mt-1 text-center">
                  Million Sq. Ft. Offices Ranging
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <span className="text-2xl font-bold italic text-blue-900">1</span>
                <span className="text-xs uppercase tracking-wide text-gray-700 mt-1 text-center">
                  Biggest Bourse in the World
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="rounded-2xl border-4 overflow-hidden h-72 lg:h-90">
          <Image
            src={buildingImg}
            alt="BDB Building"
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
