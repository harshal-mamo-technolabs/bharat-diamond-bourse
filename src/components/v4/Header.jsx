'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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

// Subnav items for Facilities
const facilitiesSubnavItems = [
  'Banks',
  'Internet Telecom',
  'Resturants',
  'Online Trading',
  'Bus Services',
  'Testing Laboratories',
  'Diamond Equipments',
  'Trading Hall',
  'Travel Agents',
];

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Animated Link Component with Underline
const AnimatedLink = ({ href, label, isActive, onClick, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      className={`relative inline-block pb-1 transition-colors duration-200 ${className} ${
        isActive 
          ? 'text-[#05183A] font-semibold' 
          : 'text-gray-800 hover:text-[#05183A]'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      {/* Animated underline - full width from left to right */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-[#05183A]"
        initial={false}
        animate={{ 
          width: isActive || isHovered ? '100%' : '0%'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  );
};

// Mobile Animated Link Component with Double Tap Logic
const MobileAnimatedLink = ({ 
  href, 
  label, 
  isActive, 
  onClick, 
  className = '', 
  hasSubnav = false,
  isSubnavOpen = false,
  onSubnavToggle = () => {}
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const lastTapRef = useRef(0);
  const tapTimeoutRef = useRef(null);
  const router = useRouter();

  const handleClick = (e) => {
    if (!hasSubnav) {
      // Navigate to the page AND close mobile menu
      router.push(href);
      onClick();
      return;
    }
  
    e.preventDefault();
    
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapRef.current;
    
    if (tapLength < 300 && tapLength > 0) {
      // Double tap detected - navigate to main page
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
      router.push(href);
      onClick(); // Close mobile menu
    } else {
      // Single tap - toggle subnav
      lastTapRef.current = currentTime;
      
      // Set a timeout to clear the double tap if no second tap comes
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
      tapTimeoutRef.current = setTimeout(() => {
        lastTapRef.current = 0;
      }, 300);
      
      onSubnavToggle();
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        onClick={handleClick}
        className={`relative inline-block pb-1 transition-colors duration-200 ${className} ${
          isActive || isSubnavOpen
            ? 'text-[#05183A] font-semibold' 
            : 'text-gray-800 hover:text-[#05183A]'
        } cursor-pointer select-none`}
      >
        <div className="flex items-center">
          <span>{label}</span>
        </div>
        {/* Animated underline - full width from left to right */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-[#05183A]"
          initial={false}
          animate={{ 
            width: isActive || isHovered || isSubnavOpen ? '100%' : '0%'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0].code);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1); // 1: details, 2: OTP
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFacilitiesSubnav, setShowFacilitiesSubnav] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const otpRefs = useRef([]);
  const heroVideoRef = useRef(null);
  const lastScrollY = useRef(0);
  const searchInputRef = useRef(null);
  const facilitiesRef = useRef(null);
  const facilitiesTimeoutRef = useRef(null);

  // Navigation items
  const navItems = [
    { href: '/v4', label: 'Home' },
    { href: '/v3/about', label: 'About Us' },
    { 
      href: '/v3/facilities', 
      label: 'Facilities',
      hasSubnav: true 
    },
    { href: '/v3/news&events', label: 'News & Events' },
    { href: '/v3/sustainability', label: 'Sustainability' },
  ];

  // Top navigation items (Circulars, Member's directory, Contact us, Careers)
  const topNavItems = [
    { href: '/v3/circulars', label: 'Circulars' },
    { href: '/v3/members-directory', label: 'Member\'s directory' },
    { href: '/v3/contact-us', label: 'Contact us' },
    { href: '/v3/careers', label: 'Careers' },
  ];

  // Group facilities items into 2 columns with 2 items each (2x2 layout)
  const groupedFacilitiesItems = [];
  const itemsPerColumn = Math.ceil(facilitiesSubnavItems.length / 2);

  for (let i = 0; i < facilitiesSubnavItems.length; i += itemsPerColumn) {
    groupedFacilitiesItems.push(facilitiesSubnavItems.slice(i, i + itemsPerColumn));
  }

  // Check if current path matches nav item
  const isActive = (href) => {
    if (href === '/v3' && pathname === '/v3') return true;
    if (href !== '/v3' && pathname.startsWith(href)) return true;
    return false;
  };

  // Handle facilities hover with delay
  const handleFacilitiesMouseEnter = () => {
    if (facilitiesTimeoutRef.current) {
      clearTimeout(facilitiesTimeoutRef.current);
    }
    setShowFacilitiesSubnav(true);
  };

  const handleFacilitiesMouseLeave = () => {
    facilitiesTimeoutRef.current = setTimeout(() => {
      setShowFacilitiesSubnav(false);
    }, 300);
  };

  // Handle mobile facilities toggle
  const handleMobileFacilitiesToggle = () => {
    setMobileFacilitiesOpen(!mobileFacilitiesOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileFacilitiesOpen(false);
  };

  // detect on load + resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Mobile: < 768px
      // Medium: 768px - 1162px  
      // Large: > 1162px
      setIsMobile(width < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (facilitiesTimeoutRef.current) {
        clearTimeout(facilitiesTimeoutRef.current);
      }
    };
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

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Simple scroll handler - fixed version
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollingDown = scrollY > lastScrollY.current;
          lastScrollY.current = scrollY;
          
          // Simple logic: show top nav only when at very top
          const newIsScrolled = scrollY > 10;
          setIsScrolled(newIsScrolled);
          
          // Close search when scrolled
          if (newIsScrolled && searchOpen) {
            setSearchOpen(false);
            setSearchQuery('');
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchOpen]); // Added searchOpen dependency

  // Close facilities subnav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFacilitiesSubnav(false);
      // Also close search on scroll
      if (searchOpen) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchOpen]); // Added searchOpen dependency

  // Close search on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) {
          setSearchOpen(false);
          setSearchQuery('');
        } else {
          setShowModal(false);
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen]);

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
      // You can add your search logic here
    }
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* HEADER COMPONENT */}
      <header className="relative z-50">
        {/* Mobile Hamburger - Improved for md, sm, and below screens */}
        <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
        }`}>
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/v3">
              <Image 
                src="/bdb-logo-black-font.png" 
                alt="BDB Logo" 
                width={120} 
                height={48}
                className="object-contain"
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              {/* Mobile Search Icon */}
              <button 
                onClick={handleSearchToggle}
                className="text-gray-800 hover:text-[#05183A] transition-colors duration-200 p-2"
              >
                <FaSearch className="text-xl" />
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-2xl text-gray-800 p-1"
              >
                {mobileMenuOpen ? <IoClose /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-4 bg-white border-t border-gray-200 overflow-hidden"
              >
                <form onSubmit={handleSearch} className="py-3">
                  <div className="relative">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-[#EFF3F6] rounded-lg px-4 py-3 pr-12 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#05183A]/30 transition-all duration-300"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={handleSearchToggle}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1"
                      >
                        <IoClose className="text-xl" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-4 pb-6 bg-white border-t border-gray-200 overflow-hidden"
              >
                {/* Top Navigation Items */}
                <div className="mb-6 pt-4">
                  <h3 className="text-[13px] font-semibold text-gray-500 uppercase mb-3">Quick Links</h3>
                  <ul className="space-y-3">
                    {topNavItems.map((item) => (
                      <li key={item.href}>
                        <AnimatedLink
                          href={item.href}
                          label={item.label}
                          isActive={isActive(item.href)}
                          onClick={closeMobileMenu}
                          className="text-[15px] font-medium"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Navigation Items */}
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-500 uppercase mb-3">Main Navigation</h3>
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <MobileAnimatedLink
                          href={item.href}
                          label={item.label}
                          isActive={isActive(item.href)}
                          onClick={closeMobileMenu}
                          hasSubnav={item.hasSubnav}
                          isSubnavOpen={item.hasSubnav && mobileFacilitiesOpen}
                          onSubnavToggle={handleMobileFacilitiesToggle}
                          className="text-[16px] font-semibold"
                        />
                        
                        {/* Mobile Subnav for Facilities - Updated 2x2 Grid */}
                        {item.hasSubnav && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: mobileFacilitiesOpen ? 1 : 0, 
                              height: mobileFacilitiesOpen ? "auto" : 0 
                            }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-3 overflow-hidden"
                          >
                            {/* 2x2 Grid Layout */}
                            <div className="grid grid-cols-2 gap-2 border-l-2 border-[#05183A] pl-4">
                              {facilitiesSubnavItems.map((subItem, index) => (
                                <Link
                                  key={index}
                                  href={`/v3/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-[14px] text-gray-600 hover:text-[#05183A] py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Navigation - Improved responsive design */}
        <nav
          className={`hidden md:flex flex-col w-full bg-white text-white ${sora.className} select-none transition-all duration-300 ${
            isScrolled 
              ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-2.5' 
              : 'relative py-4'
          }`}
        >
          {/* Container with responsive padding */}
          <div className={`w-full mx-auto ${
            isScrolled 
              ? 'px-4 md:px-8 lg:px-16 xl:px-32' 
              : 'px-4 md:px-8 lg:px-16 xl:px-32'
          }`}>
            {/* Top Navigation Items with Search Overlay */}
            <div className="relative">
              {/* Top Navigation Items */}
              <div className={`flex justify-end items-center space-x-4 md:space-x-6 text-[12px] select-none ${
                isScrolled 
                  ? 'h-0 opacity-0 overflow-hidden mb-0' 
                  : 'h-auto opacity-100 -mb-4'
              }`}>
                <ul className="flex space-x-4 md:space-x-6 text-[11px] uppercase cursor-pointer">
                  {topNavItems.map((item) => (
                    <li key={item.href} className="relative">
                      <AnimatedLink
                        href={item.href}
                        label={item.label}
                        isActive={isActive(item.href)}
                        className="text-black hover:text-[#05183A] font-semibold text-[11px] md:text-[12px]"
                      />
                    </li>
                  ))}
                </ul>
                
                {/* Search Icon */}
                <button 
                  onClick={handleSearchToggle}
                  className="relative w-8 md:w-10 text-black hover:text-[#05183A] transition-colors duration-200"
                >
                  <FaSearch className="absolute left-1 top-1/2 -translate-y-1/2 text-black text-[16px] md:text-[18px]" />
                </button>
              </div>

              {/* Search Bar */}
              <AnimatePresence>
                {searchOpen && !isScrolled && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute -top-1 right-0 z-10 overflow-hidden"
                  >
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-80 md:w-96 lg:w-130 bg-[#EFF3F6] rounded-md px-4 py-1.5 pr-10 text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-[#05183A]/30 transition-all duration-300"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                        <FaSearch className="text-gray-500 text-[16px]" />
                        <button
                          type="button"
                          onClick={handleSearchToggle}
                          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                          <IoClose className="text-[20px]" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Main Navigation Items */}
            <div className={`flex ${isScrolled ? 'items-center' : 'items-end'} justify-between transition-all duration-300`}>
              {/* Logo */}
              <div className={`flex items-center justify-center ${isScrolled ? 'mt-0' : '-mt-2 md:-mt-4'}`}>
                <Link href="/v3">
                  <Image 
                    src="/bdb-logo-black-font.png" 
                    alt="BDB Logo" 
                    width={isScrolled ? 120 : 150} 
                    height={isScrolled ? 48 : 60}
                    className="transition-all duration-300"
                  />
                </Link>
              </div>
              
              {/* Centered Navigation Items */}
              <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 text-[14px] md:text-[16px] font-medium cursor-pointer relative">
                {navItems.map((item) => (
                  <li 
                    key={item.href}
                    className="relative"
                    onMouseEnter={item.hasSubnav ? handleFacilitiesMouseEnter : undefined}
                    onMouseLeave={item.hasSubnav ? handleFacilitiesMouseLeave : undefined}
                    ref={item.hasSubnav ? facilitiesRef : null}
                  >
                    <AnimatedLink
                      href={item.href}
                      label={item.label}
                      isActive={isActive(item.href)}
                      className={`${
                        isActive(item.href) 
                          ? 'text-[#05183A] font-semibold' 
                          : 'text-black hover:text-[#05183A]'
                      }`}
                    />
                  </li>
                ))}
              </ul>
              
              {/* Empty space where the button was */}
              <div className="w-20 md:w-32 lg:w-40"></div>
            </div>
          </div>

          {/* Facilities Subnav Dropdown - Updated 2x2 Grid */}
          <AnimatePresence>
            {showFacilitiesSubnav && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden z-40"
                onMouseEnter={handleFacilitiesMouseEnter}
                onMouseLeave={handleFacilitiesMouseLeave}
              >
                <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
                  {/* 2x2 Grid Layout */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {groupedFacilitiesItems.map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-3 md:space-y-4">
                        {column.map((item, itemIndex) => (
                          <div key={itemIndex} className="relative">
                            <AnimatedLink
                              href={`/v3/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              label={item}
                              isActive={false}
                              className="text-gray-800 hover:text-[#05183A] text-[14px] md:text-[15px] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 block"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* SPACER for when navbar is fixed - Only for desktop */}
      {isScrolled && !isMobile && <div className="h-16" />}

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          ref={heroVideoRef}
          src="/video-bdb.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </section>

      {/* MODAL */}
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
                  <button onClick={submitOtp} className={`group inline-flex items-center gap-2 rounded-[10box] px-5 py-2.5 bg-[#0E234E] text-white ${gotham.className} text-[13px] font-[600] tracking-[0.5px] hover:-translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E]/40`}>
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

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};