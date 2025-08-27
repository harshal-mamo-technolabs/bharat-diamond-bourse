'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const slides = ['/bdb-1-hero.png', '/bdb-2-hero.png'];

const gotham = localFont({
  src: '../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // <-- added sticky state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1); // 1: details, 2: OTP
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const closeTimerRef = useRef(null);
  const otpRefs = useRef([]);


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
    ? ['/bdb-1-hero.png', '/bdb-2-hero.png'] 
    : ['/bdb-1-hero.png', '/bdb-2-hero.png'];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

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
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => clearAuto();
  }, [slides]);

  const IMAGE_HEIGHT = 720;
  const SHOW_SCROLL = IMAGE_HEIGHT * 0.5; // 360px - 50%
  const HIDE_SCROLL = IMAGE_HEIGHT * 0.35; // 252px - 35%

  // Manual controls should reset the auto timer to prevent double steps
  const handleNext = () => {
    clearAuto();
    setCurrent((prev) => (prev + 1) % slides.length);
    startAuto();
  };

  const handlePrev = () => {
    clearAuto();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startAuto();
  };

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

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [showModal]);

  const openModal = () => {
    setError('');
    setModalStep(1);
    setShowModal(true);
  };

  const goToOtp = () => {
    const emailOk = /.+@.+\..+/.test(email.trim());
    const phoneOk = /^\+?\d{7,15}$/.test(phone.trim());
    if (!emailOk) return setError('Please enter a valid email.');
    if (!phoneOk) return setError('Please enter a valid phone number.');
    setError('');
    setModalStep(2);
  };

  const submitOtp = () => {
    const complete = otp.every((d) => d && /\d/.test(d));
    if (!complete) return setError('Please enter the 6-digit OTP.');
    setError('');
    setModalStep(3);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setShowModal(false);
      setModalStep(1);
      setEmail('');
      setPhone('');
      setOtp(['', '', '', '', '', '']);
    }, 2000);
  };

  const updateOtp = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const onOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        e.preventDefault();
        const next = [...otp];
        next[index - 1] = '';
        setOtp(next);
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const onOtpPaste = (e, startIndex = 0) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = [...otp];
    for (let i = 0; i < text.length && startIndex + i < next.length; i++) {
      next[startIndex + i] = text[i];
    }
    setOtp(next);
    const focusIndex = Math.min(startIndex + text.length, otpRefs.current.length) - 1;
    if (focusIndex >= 0) otpRefs.current[focusIndex]?.focus();
  };

  useEffect(() => {
    if (showModal && modalStep === 2) {
      // focus first OTP box when step 2 opens
      setTimeout(() => otpRefs.current[0]?.focus(), 0);
    }
  }, [showModal, modalStep]);

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
              <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-fill" priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/25 to-transparent pointer-events-none z-10"></div>

        {/* Arrows - Hidden on Mobile */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-black/50 p-2 rounded-r-lg z-20 transition backdrop-blur-md"
        >
          <IoIosArrowRoundBack className="text-white text-2xl" />
        </button>
        <button
          onClick={handleNext}
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
                             onClick={openModal}
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
      {showModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <button aria-label="Close" className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className={`relative mx-4 w-full max-w-md rounded-[14px] bg-white p-6 shadow-xl ${sora.className}`}>
            <button onClick={() => setShowModal(false)} className="absolute right-3 top-3 text-[#0E234E]/70 hover:text-[#0E234E]" aria-label="Close">✕</button>
            <h3 className={`${gotham.className} text-[#0E234E] text-[20px] font-semibold mb-1`}>Start Your Business</h3>
            {modalStep < 3 && (
              <p className="text-[13px] text-[#0E1425]/70 mb-4">Step {modalStep} of 2</p>
            )}
            {modalStep === 1 ? (
              <div>
                <label className="block text-[13px] text-[#0E1425]/80 mb-1">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[10px] border border-[#E1E6EF] px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#0E234E]/30" placeholder="you@example.com" />
                <label className="block mt-3 text-[13px] text-[#0E1425]/80 mb-1">Phone number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[10px] border border-[#E1E6EF] px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#0E234E]/30" placeholder="+91 98765 43210" />
                {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}
                <div className="mt-5 flex justify-end">
                  <button onClick={goToOtp} className={`group inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 bg-[#0E234E] text-white ${gotham.className} text-[13px] font-[600] tracking-[0.5px] hover:-translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E]/40`}>
                    Continue
                    <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ) : modalStep === 2 ? (
              <div>
                <p className="text-[13px] text-[#0E1425]/80 mb-3">Enter the 6-digit OTP sent to your email/phone.</p>
                <div className="flex items-center justify-between gap-2">
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      inputMode="numeric"
                      maxLength={1}
                      value={d}
                      onChange={(e) => updateOtp(i, e.target.value)}
                      onKeyDown={(e) => onOtpKeyDown(i, e)}
                      onPaste={(e) => onOtpPaste(e, i)}
                      className="w-10 h-11 text-center rounded-[10px] border border-[#E1E6EF] text-[16px] outline-none focus:ring-2 focus:ring-[#0E234E]/30"
                    />
                  ))}
                </div>
                {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}
                <div className="mt-5 flex justify-between">
                  <button onClick={() => setModalStep(1)} className="rounded-[10px] px-4 py-2 text-[13px] text-[#0E234E] border border-[#0E234E]/30 hover:bg-[#0E234E]/5">Back</button>
                  <button onClick={submitOtp} className={`group inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 bg-[#0E234E] text-white ${gotham.className} text-[13px] font-[600] tracking-[0.5px] hover:-translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E]/40`}>
                    Submit
                    <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 text-[#0E234E]">
                  <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h4 className={`${gotham.className} text-[#0E234E] text-[18px] font-semibold`}>Thank you!</h4>
                <p className="mt-1 text-[13px] text-[#0E1425]/70">Your details have been submitted.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Motion variants outside the component
const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};
