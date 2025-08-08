'use client';

import Image from 'next/image';
import backgroundHero from '../public/Hero-Banner.png';
import logo from '../public/BDB-LOGO.png';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Header() {
  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image */}
      <Image src={backgroundHero} alt="Hero Background" fill className="object-cover" priority />

      {/* Top Center Card */}
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-[55%] bg-white rounded-[12px] shadow-md z-10">
        <div className="px-5 py-4 mt-3">
          <div className="flex items-stretch">

            {/* PART 1: Logo */}
            <div className="flex items-center pr-4 mr-4 border-r border-gray-300">
              <Image src={logo} alt="BDB Logo" width={130} height={60} />
            </div>

            {/* PART 2: Middle section */}
            <div className="flex-1 flex flex-col justify-center">
              
              {/* Contact row */}
              <div className="flex items-center gap-3 flex-wrap text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#0b2a57]" />
                  <span>+91 22 3392 1500</span>
                </div>

                <div className="h-5 border-l border-gray-300" />

                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-[#0b2a57]" />
                  <span>support@bdbindia.org</span>
                </div>

                <div className="h-5 border-l border-gray-300" />

                <div className="flex items-center gap-5 text-[14px]">
                  <FaInstagram className="cursor-pointer" />
                  <FaLinkedinIn className="cursor-pointer" />
                  <FaFacebookF className="cursor-pointer" />
                  <FaTwitter className="cursor-pointer" />
                </div>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-200 my-2" />

              {/* Address row */}
              <div className="flex items-start gap-2 text-[13px] text-gray-700 leading-snug">
                <FaMapMarkerAlt className="text-[#0b2a57] mt-1" />
                <span>
                  G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                </span>
              </div>
            </div>

            {/* PART 3: Divider + Button */}
            <div className="flex items-center pl-2 ml-2 border-l border-gray-300">
              <button
                className="px-6 py-3 text-xs font-semibold leading-tight rounded-lg text-white
                           bg-[#05183A] shadow-lg text-center"
              >
                START YOUR<br />BUSINESS
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
