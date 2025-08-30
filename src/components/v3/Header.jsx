'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
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
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1); // 1: details, 2: OTP
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const closeTimerRef = useRef(null);
  const otpRefs = useRef([]);
  const heroVideoRef = useRef(null);

  // detect on load + resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // autoplay hero video on mount
  useEffect(() => {
    const el = heroVideoRef.current;
    if (!el) return;
    const play = async () => {
      try { await el.play(); }
      catch { try { el.muted = true; await el.play(); } catch {}
      }
    };
    play();
  }, []);

  const IMAGE_HEIGHT = 720;

  // no image loading state needed with background video

  // sticky navbar after hero
  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY >= IMAGE_HEIGHT);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  // Auto-open when URL contains ?start=1
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('start') === '1') {
      openModal();
    }
  }, []);

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
      {/* Sticky Navbar after hero */}
      {showStickyNav && (
        <nav
          className={`hidden md:flex fixed top-0 left-0 w-full bg-white shadow-md py-2 px-12 z-50 ${sora.className}`}
          style={{ transform: 'translateY(0)', transition: 'transform .4s ease-out' }}
        >
          <div className="flex items-center justify-between w-full">
            <Image src="/bdb-logo-black-font.png" alt="BDB Logo" width={120} height={50} />
            <ul className="flex space-x-8 text-[14px] font-medium text-black">
              <li className="hover:text-blue-700">Home</li>
              <li className="hover:text-blue-700">About Us</li>
              <li className="hover:text-blue-700">Facilities</li>
              <li className="hover:text-blue-700">News & Events</li>
              <li className="hover:text-blue-700">Sustainability</li>
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
              onClick={openModal}
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
            <li className="hover:text-blue-700">Home</li>
              <li className="hover:text-blue-700">About Us</li>
              <li className="hover:text-blue-700">Facilities</li>
              <li className="hover:text-blue-700">News & Events</li>
              <li className="hover:text-blue-700">Sustainability</li>
          </ul>
        )}
      </div>
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

      {/* HERO SECTION */}
      <div className="relative w-full h-[720px] overflow-hidden">
        {/* Background video */}
        <video
          ref={heroVideoRef}
          src="/BDB.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/25 to-transparent pointer-events-none z-10" />

        {/* Removed carousel arrows for video */}

        {/* ORIGINAL NAVBAR OVER IMAGE */}
        <nav
          className={`hidden md:flex flex-col absolute top-0 left-0 w-full px-12 py-1 z-30 bg-white/80 text-white ${sora.className} select-none`}
          
        >
          <div className="flex justify-end items-center space-x-6 text-[12px] mt-2 select-none">
            <ul className="flex space-x-6 text-[11px] uppercase cursor-pointer">
              <li className="text-black">Circulars</li>
              <li className="text-black">Member's directory</li>
              <li className="text-black">Contact us</li>
              <li className="text-black">careers</li>
            </ul>
            <div className="relative w-24 text-black">
              <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-xs pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-6 text-[11px] rounded-sm border-b border-black border-opacity-50 bg-transparent py-0.5 text-black placeholder-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-transparent border border-black border-opacity-50 rounded-sm text-black text-[12px] py-0.5 px-2 cursor-pointer focus:outline-none"
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
              <Image src="/bdb-logo-black-font.png" alt="BDB Logo" width={135} height={140} />
            </div>
            <ul className="flex space-x-8 text-[14px] font-normal cursor-pointer mx-auto">
              <li className="text-black">Home</li>
              <li className="text-black">About Us</li>
              <li className="text-black">Facilities ▾</li>
              <li className="text-black">News & Events</li>
              <li className="text-black">Sustainability</li>
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
              onClick={openModal}
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
