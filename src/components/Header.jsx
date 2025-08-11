'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const slides = ['/Hero-Banner.jpg', '/building2.jpg', '/Bdb-hero-2.png'];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // <-- added sticky state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect on load + resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile
    ? ['/building2.jpg', '/Hero-Banner.jpg', '/building1.jpg'] // no /Bdb-hero-2.png on mobile
    : ['/Hero-Banner.jpg', '/building2.jpg', '/Bdb-hero-2.png'];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides]); // depends on slides

  const IMAGE_HEIGHT = 720;
  const SHOW_SCROLL = IMAGE_HEIGHT * 0.5; // 360px - 50%
  const HIDE_SCROLL = IMAGE_HEIGHT * 0.35; // 252px - 35%

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show/hide navbar as before
      if (scrollY >= SHOW_SCROLL) {
        setShowNavbar(true);
      } else if (scrollY < HIDE_SCROLL) {
        setShowNavbar(false);
      }

      // Sticky toggle when navbar reaches top (adjust threshold as needed)
      if (scrollY >= IMAGE_HEIGHT + 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsLoaded(true), []);

  return (
    <>
      {/* Mobile Hamburger - At very top */}
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
          {slides.map((src, idx) => (
            <div key={idx} className="relative w-full flex-shrink-0 h-full">
              <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/25 to-transparent pointer-events-none z-10"></div>

        {/* Arrows - Hidden on Mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-black/50 p-2 rounded-r-lg z-20 transition backdrop-blur-md"
        >
          <IoIosArrowRoundBack className="text-white text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-black/50 p-2 rounded-l-lg z-20 transition backdrop-blur-md"
        >
          <IoIosArrowRoundForward className="text-white text-2xl" />
        </button>

        {/* Top White Info Card - Hidden on Mobile */}
        <div
          className={`hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-[55%] bg-white rounded-b-[12px] shadow-md z-30 overflow-hidden ${sora.className}`}
        >
          <div className="px-5 py-4">
            <div className="flex items-stretch flex-wrap">
              {/* Logo */}
              <div className="flex items-center pr-4 mr-4 border-r border-gray-300">
                <Image src="/BDB-LOGO.png" alt="BDB Logo" width={130} height={60} />
              </div>

              {/* Contact + Socials */}
              <div className="flex-1 flex flex-col justify-center min-w-[250px]">
                <div className="flex items-center gap-3 flex-wrap text-sm text-gray-800">
                  <div className="flex items-center gap-2 text-[11px]">
                    <FaPhoneAlt className="text-[#0b2a57]" />
                    <span>+91 22 3392 1500</span>
                  </div>
                  <div className="h-5 border-l border-gray-300" />
                  <div className="flex items-center gap-2 text-[11px]">
                    <FaEnvelope className="text-[#0b2a57]" />
                    <span>support@bdbindia.org</span>
                  </div>
                  <div className="h-5 border-l border-gray-300" />
                  <div className="flex items-center gap-5">
                    <Image src="/footer/twitter-icon.png" width={20} height={20} alt="Twitter" />
                    <Image src="/footer/instagram-icon.png" width={20} height={20} alt="Instagram" />
                    <Image src="/footer/linkedin-icon.png" width={20} height={20} alt="LinkedIn" />
                    <Image src="/footer/facebook-icon.png" width={20} height={20} alt="Facebook" />
                  </div>
                </div>
                <div className="border-b border-gray-200 my-2" />
                <div className="flex items-start gap-2 text-[11px] text-gray-700 leading-snug">
                  <FaMapMarkerAlt className="text-[#0b2a57] mt-1" />
                  <span>G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</span>
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center pl-2 ml-2 border-l border-gray-300">
                <button
                  className="px-6 py-3 text-xs font-semibold leading-tight rounded-lg text-white
                             bg-[#0E234E] shadow-[0_0_12px_rgba(14,35,78,0.6)]
                             transition-all duration-200 hover:-translate-y-px
                             hover:shadow-[0_0_16px_rgba(14,35,78,0.7)]
                             focus:outline-none focus-visible:ring-2
                             focus-visible:ring-white/40 text-center"
                >
                  START YOUR<br />BUSINESS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Title Overlay - Mobile: inside image, bottom stuck */}
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

      {/* Navbar below the image */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            key="navbar"
            className={`hidden md:flex left-0 w-full mt-0 bg-white shadow-md z-50 justify-center ${
              isSticky ? 'fixed top-0 left-0 mt-0' : ''
            }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideFromRight}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-center h-20 w-full ${sora.className}`}>
              <ul className="flex items-center space-x-8 text-[15px] font-semibold text-gray-800">
                <li className="hover:text-[#0b2a57] cursor-pointer">Home</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">About Us</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">Our Facilities ▾</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">BDB Circulars</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">Photo Gallery</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">Board Members ▾</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">News & Events</li>
                <li className="hover:text-[#0b2a57] cursor-pointer">Contact Us</li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Motion variants outside the component
const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};
