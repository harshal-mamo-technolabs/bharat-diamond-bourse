"use client";

import { useState } from "react";
import {
  BanknotesIcon,
  TruckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaUtensils, FaMicroscope, FaUsers } from "react-icons/fa";
import { GiCutDiamond, GiTrade } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(null);

  const facilities = [
    { icon: <BanknotesIcon className="w-8 h-8" />, title: "BANK", desc: "Multiple national and international banks are located within the BDB complex, offering secure and convenient financial services to support seamless trading." },
    { icon: <MdTravelExplore className="w-8 h-8" />, title: "TRAVEL AGENTS", desc: "On-site travel agencies provide members and visitors with comprehensive travel planning, ticketing, and visa support for both domestic and international travel." },
    { icon: <GlobeAltIcon className="w-8 h-8" />, title: "INTERNET & TELECOM", desc: "High-speed internet and telecom services ensure uninterrupted communication, digital connectivity, and operational efficiency across the Bourse." },
    { icon: <FaUtensils className="w-8 h-8" />, title: "RESTAURANT", desc: "A variety of food courts and restaurants serve hygienic, multi-cuisine meals—ensuring comfort and convenience for traders and visitors throughout the day." },
    { icon: <GiTrade className="w-8 h-8" />, title: "TRADING", desc: "BDB offers a secure and structured environment for diamond trading with state-of-the-art infrastructure that supports transparency, accountability." },
    { icon: <TruckIcon className="w-8 h-8" />, title: "BUS SERVICES", desc: "Regular and well-organized bus services provide easy and timely transport for members and employees commuting to and from the complex." },
    { icon: <FaMicroscope className="w-8 h-8" />, title: "TESTING LABORATORIES", desc: "Accredited gemological labs are available on-site for authenticating and grading diamonds and gemstones, ensuring quality and buyer confidence." },
    { icon: <GiCutDiamond className="w-8 h-8" />, title: "DIAMOND EQUIPMENTS", desc: "Specialized shops and services for diamond tools, machinery, and accessories are accessible within the complex to support day-to-day trade and craftsmanship." },
    { icon: <FaUsers className="w-8 h-8" />, title: "TRADING HALL", desc: "The central trading hall is the heart of BDB—designed with modern amenities to accommodate large-scale trading activities in a secure and professional setting." },
  ];

  return (
    <div className="bg-white py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold mb-4">
        ~ Our World-Class Facilities ~
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
        From cutting-edge trading halls to essential on-site services, every facility
        at Bharat Diamond Bourse is designed to support efficiency, security, and
        seamless business operations.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {facilities.map((facility, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer border border-gray-200 rounded-2xl p-6 shadow-sm transition-all
                ${isActive ? "bg-blue-900 text-white" : "bg-white hover:shadow-md"}`}
            >
              {/* Row: Icon on left, Title + Desc on right */}
              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`p-4 rounded-lg flex items-center justify-center h-fit
                    ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {facility.icon}
                </div>

                {/* Text content */}
                <div>
                  <h3
                    className={`font-serif font-semibold text-lg mb-1
                      ${isActive ? "text-white" : "text-[#1a2b5f]"}`}
                  >
                    {facility.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed
                      ${isActive ? "text-white" : "text-gray-600"}`}
                  >
                    {facility.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
