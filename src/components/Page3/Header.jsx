"use client";

import { useEffect, useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Playfair_Display_SC } from "next/font/google";

const playfairSC = Playfair_Display_SC({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowSticky(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Sticky Navbar (after scroll) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 
        ${showSticky ? "translate-y-0" : "-translate-y-full"} 
        bg-white/20 backdrop-blur-lg shadow-lg`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo (hidden in responsive) */}
          <img
            src="/example3/bdb-logo.png"
            alt="Bharat Diamond Bourse"
            className="h-20 object-contain hidden md:block"
          />

          {/* Nav Links (hidden in responsive) */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Facilities</li>
            <li className="hover:text-blue-400 cursor-pointer">Members</li>
            <li className="hover:text-blue-400 cursor-pointer">BDB Circulars</li>
            <li className="hover:text-blue-400 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-400 cursor-pointer">News & Events</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>

          {/* Hamburger Menu (only in responsive) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1E4A79] text-white z-[60] p-6 
        transform transition-transform duration-300 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          <MdClose />
        </button>
        <ul className="mt-12 space-y-6 text-lg">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">About Us</li>
          <li className="hover:text-blue-300 cursor-pointer">Facilities</li>
          <li className="hover:text-blue-300 cursor-pointer">Members</li>
          <li className="hover:text-blue-300 cursor-pointer">BDB Circulars</li>
          <li className="hover:text-blue-300 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-300 cursor-pointer">News & Events</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Original Header */}
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="bg-gradient-to-b from-black/60 to-transparent px-8 pt-4">
          <div className="flex items-stretch">
            {/* Left: Logo (hidden in responsive) */}
            <div className="flex items-center pr-6 hidden md:flex">
              <img
                src="/example3/bdb-logo.png"
                alt="Bharat Diamond Bourse"
                className="h-26 object-contain"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between flex-1">
              {/* Top row */}
              <div className="hidden md:flex items-center justify-end gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full p-2">
                    <IoCall className="text-black" size={16} />
                  </div>
                  <span>+91 22 3392 1500</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full p-2">
                    <MdEmail className="text-black" size={16} />
                  </div>
                  <span>support@bdbindia.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                    <FaYoutube className="text-black" size={14} />
                  </a>
                  <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                    <FaLinkedinIn className="text-black" size={14} />
                  </a>
                  <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                    <FaFacebookF className="text-black" size={14} />
                  </a>
                </div>
              </div>

              <div className="border-b border-white/40 my-3 hidden md:block"></div>

              {/* Bottom row nav (hidden in responsive) */}
              <nav className="hidden md:block">
                <ul className="flex justify-end gap-8 text-white text-sm font-medium">
                  <li className="hover:text-blue-400 cursor-pointer">Home</li>
                  <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                  <li className="hover:text-blue-400 cursor-pointer">Facilities</li>
                  <li className="hover:text-blue-400 cursor-pointer">Members</li>
                  <li className="hover:text-blue-400 cursor-pointer">BDB Circulars</li>
                  <li className="hover:text-blue-400 cursor-pointer">Gallery</li>
                  <li className="hover:text-blue-400 cursor-pointer">News & Events</li>
                  <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/example3/bg.png"
          alt="Bharat Diamond Bourse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Arrows */}
        <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black">
          <MdArrowBack size={24} />
        </button>
        <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black">
          <MdArrowForward size={24} />
        </button>

        {/* Bottom Banner */}
<div
  className={`absolute bottom-0 left-1/2 -translate-x-1/2 
  bg-gradient-to-b from-[#1E4A79] to-[#1D305E] 
  text-white px-10 py-8 rounded-t-[2.5rem] tracking-wide ${playfairSC.className}
  md:text-[43px] w-auto md:w-auto 
  md:rounded-t-[2.5rem] md:px-10 md:py-8
  w-full text-2xl text-center md:text-left`}
>
  WORLD’S LARGEST BOURSE
</div>

      </div>
    </div>
  );
}
