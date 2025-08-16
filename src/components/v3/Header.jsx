'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const gotham = localFont({
  src: '../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'French' },
  { code: 'HI', label: 'Hindi' },
];

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0].code);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect on load + resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // choose slides per device (same sets you had)
  const slideSources = isMobile
    ? ['/building2.jpg', '/Hero-Banner.jpg', '/building1.jpg'] // mobile
    : ['/building2.jpg', '/Hero-Banner.jpg', '/Bdb-hero-2.png']; // desktop

  // carousel controls
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideSources.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slideSources.length) % slideSources.length);

  // single interval controller (no duplicates)
  const intervalRef = useRef(null);
  const clearAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const startAuto = () => {
    clearAuto();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideSources.length);
    }, 5000);
  };

  // start/refresh auto when slides change (e.g., resize) and on mount
  useEffect(() => {
    setCurrent(0); // reset index when the slide set changes
    startAuto();
    return () => clearAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // manual controls should reset the timer to avoid double-step timing
  const handleNext = () => {
    clearAuto();
    nextSlide();
    startAuto();
  };
  const handlePrev = () => {
    clearAuto();
    prevSlide();
    startAuto();
  };

  const IMAGE_HEIGHT = 720;

  useEffect(() => setIsLoaded(true), []);

  // sticky navbar after hero
  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY >= IMAGE_HEIGHT);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar after hero */}
      {showStickyNav && (
        <nav
          className={`hidden md:flex fixed top-0 left-0 w-full bg-white shadow-md py-2 px-12 z-50 ${sora.className}`}
          style={{ transform: 'translateY(0)', transition: 'transform .4s ease-out' }}
        >
          <div className="flex items-center justify-between w-full">
            <Image src="/BDB-LOGO.png" alt="BDB Logo" width={120} height={50} />
            <ul className="flex space-x-8 text-[14px] font-medium text-[#0b2a57]">
              <li className="hover:text-blue-700">Home</li>
              <li className="hover:text-blue-700">About Us</li>
              <li className="hover:text-blue-700">Our Facilities ▾</li>
              <li className="hover:text-blue-700">BDB Circulars</li>
              <li className="hover:text-blue-700">Board Members ▾</li>
            </ul>
            <button
              className={[
                'ml-6 group inline-flex items-center justify-between',
                'rounded-[8px] px-5 py-3.5',
                'bg-[#0E234E]',
                `${gotham.className}`,
                'text-white hover:text-[#EAF0FA] active:text-[#DDE6F5] uppercase text-[13px] font-[600] tracking-[0.5px]',
                'transition-all duration-200 hover:-translate-y-px',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
              ].join(' ')}
            >
              START YOUR BUSINESS
              <Arrow color="#FFFFFF" size={16} stroke={2} className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </nav>
      )}

      {/* Mobile Hamburger */}
      <div className="absolute top-0 left-0 w-full bg-white shadow-md z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Image src="/BDB-LOGO.png" alt="BDB Logo" width={100} height={40} />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-gray-800">
            {mobileMenuOpen ? <IoClose /> : <FiMenu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <ul className="px-4 pb-4 space-y-3 text-[15px] font-semibold text-gray-800 bg-white">
            <li className="hover:text-[#0b2a57] cursor-pointer">Home</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">About Us</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">Our Facilities</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">BDB Circulars</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">Photo Gallery</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">Board Members</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">News & Events</li>
            <li className="hover:text-[#0b2a57] cursor-pointer">Contact Us</li>
          </ul>
        )}
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[720px] overflow-hidden">
        {/* Carousel */}
        <div
          className={`absolute inset-0 flex transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isLoaded ? 'animate-slideDown' : ''
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slideSources.map((src, idx) => (
            <div key={idx} className="relative w-full flex-shrink-0 h-full">
              <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/25 to-transparent pointer-events-none z-10" />

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-black/50 p-2 rounded-r-lg z-20 backdrop-blur-md"
        >
          <IoIosArrowRoundBack className="text-white text-2xl" />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-black/50 p-2 rounded-l-lg z-20 backdrop-blur-md"
        >
          <IoIosArrowRoundForward className="text-white text-2xl" />
        </button>

        {/* ORIGINAL NAVBAR OVER IMAGE */}
        <nav
          className={`hidden md:flex flex-col absolute top-0 left-0 w-full px-12 py-1 z-30 text-white ${sora.className} select-none`}
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          <div className="flex justify-end items-center space-x-6 text-[12px] mt-2 select-none">
            <ul className="flex space-x-6 text-[11px] uppercase cursor-pointer">
              <li className="hover:text-[#0b2a57]">News</li>
              <li className="hover:text-[#0b2a57]">Gallery</li>
              <li className="hover:text-[#0b2a57]">Help center</li>
            </ul>
            <div className="relative w-24 text-white">
              <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xs pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-6 text-[11px] rounded-sm border-b border-white border-opacity-50 bg-transparent py-0.5 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-transparent border border-white border-opacity-50 rounded-sm text-white text-[12px] py-0.5 px-2 cursor-pointer focus:outline-none"
            >
              {languages.map(({ code }) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex-shrink-0 mb-1">
              <Image src="/bdb-logo-white.png" alt="BDB Logo" width={135} height={140} />
            </div>
            <ul className="flex space-x-8 text-[14px] font-normal cursor-pointer mx-auto">
              <li className="hover:text-[#0b2a57]">Home</li>
              <li className="hover:text-[#0b2a57]">About Us</li>
              <li className="hover:text-[#0b2a57]">Our Facilities ▾</li>
              <li className="hover:text-[#0b2a57]">BDB Circulars</li>
              <li className="hover:text-[#0b2a57]">Board Members ▾</li>
            </ul>
            <button
              className={[
                'ml-6 group inline-flex items-center justify-between',
                'rounded-[8px] px-5 py-3.5',
                'bg-[#0E234E]',
                `${sora.className} ${gotham.className}`,
                'text-white hover:text-[#EAF0FA] active:text-[#DDE6F5] uppercase text-[13px] font-[600] tracking-[0.5px]',
                'transition-all duration-200 hover:-translate-y-px',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
              ].join(' ')}
            >
              START YOUR BUSINESS
              <Arrow color="#FFFFFF" size={16} stroke={2} className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </nav>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 px-4 md:bottom-[-29px]">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
            className="text-white text-[clamp(28px,5vw,80px)] font-extrabold tracking-wide whitespace-nowrap drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]"
          >
            WORLD’S DIAMOND HUB
          </motion.h1>
        </div>
      </div>
    </>
  );
}

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};
