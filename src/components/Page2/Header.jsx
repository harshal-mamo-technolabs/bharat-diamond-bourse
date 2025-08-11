'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdClose } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { HiMenuAlt3 } from 'react-icons/hi';
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function Header() {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show sticky navbar after hero fully scrolled (height of hero div)
      const heroHeight = window.innerHeight * 0.8; // matches h-[80vh]
      setShowSticky(window.scrollY > heroHeight);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Facilities', href: '#' },
    { label: 'BDB Circulars', href: '#' },
    { label: 'News & Events', href: '#' },
    { label: 'Blogs', href: '#' },
  ];

  return (
    <>
      {/* Top White Bar + Hero background remain unchanged */}
      <header
        className="relative text-white"
        style={{
          backgroundImage: "url('/example2/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Top White Bar */}
        <div className="relative bg-white text-gray-800 text-sm border-b z-10 hidden md:block">
          <div className="mx-auto flex justify-between items-center px-12 py-2">
            {/* Left */}
            <div className={`flex items-center space-x-6 ${spaceGrotesk.className}`}>
              <div className="flex items-center space-x-1">
                <FaPhoneAlt className="w-4 h-4 text-yellow-500" />
                <span>+91 22 3392 1500</span>
              </div>
              <div className="flex items-center space-x-1">
                <MdEmail className="w-4 h-4 text-yellow-500" />
                <span>support@bdbindia.org</span>
              </div>
              <div className="flex items-center space-x-1">
                <GoLocation className="w-4 h-4 text-yellow-500" />
                <span>G Block BKC, Bandra Kurla Complex, Mumbai</span>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center">
              {[FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, idx) => (
                <div key={idx} className="flex items-center">
                  <Icon className="w-4 h-4 text-gray-800 hover:text-yellow-500 cursor-pointer" />
                  {idx < 2 && <div className="h-4 w-px bg-gray-400 mx-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative bg-black/20 backdrop-blur-sm z-10 hidden md:block">
          <div className="mx-auto flex justify-between items-center px-12 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/example2/logo.png" alt="Logo" width={100} height={100} />
            </div>

            {/* Menu */}
            <nav className={`hidden md:flex space-x-8 text-white ${spaceGrotesk.className}`}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-yellow-500">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <button
              className={`border border-white text-white px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition ${spaceGrotesk.className}`}
            >
              Contact Us →
            </button>
          </div>
        </div>

        {/* Hero Section */}
<div className="relative h-[80vh] flex items-center justify-center z-10">
  <div className="relative flex flex-col md:block items-center md:items-start">
    {/* Outer rectangles */}
    <div className="hidden md:block">
      <div className="absolute inset-0 border border-yellow-500 w-[590px] h-[290px] mx-auto -left-17 -top-19"></div>
      <div className="absolute inset-0 border border-yellow-500 w-[750px] h-[200px] mx-auto -top-8 -left-36"></div>
    </div>

    {/* Mobile stacked rectangles */}
    <div className="flex flex-col items-center gap-4 md:hidden">
      <div className="border border-yellow-500 w-[85%] h-[100px]"></div>
      <div className="border border-yellow-500 w-[85%] h-[100px]"></div>
    </div>

    {/* Text */}
    <h1
      className={`relative z-10 text-center md:text-left text-2xl md:text-4xl font-semibold tracking-wide w-[85%] md:w-[450px] mt-4 md:mt-0 ${carentro.className}`}
    >
      POWERING THE FUTURE <br className="hidden md:block" /> OF DIAMOND TRADE
    </h1>
  </div>
</div>

      </header>

      {/* Sticky Navbar for md+ screens */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-500 ${
          showSticky ? 'translate-y-0' : '-translate-y-full'
        } hidden md:flex items-center justify-between px-12 py-3`}
        style={{ animation: showSticky ? 'slideDown 0.3s ease forwards' : 'none' }}
      >
        {/* Logo Left */}
        <div className="flex items-center">
          <Image src="/example2/logo.png" alt="Logo" width={90} height={90} />
        </div>

        {/* Navlinks Center */}
        <nav className="flex space-x-10 font-medium text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-yellow-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Us Button Right */}
        <button className="border border-gray-800 text-gray-800 px-5 py-2 hover:bg-yellow-500 hover:text-white transition rounded">
          Contact Us
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between px-6 py-4 shadow">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/example2/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-gray-800 text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-60 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-gray-800 text-3xl"
          >
            <MdClose />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 p-6 font-medium text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500"
            >
              {link.label}
            </a>
          ))}
          <button className="border border-gray-800 text-gray-800 px-4 py-2 hover:bg-yellow-500 hover:text-white rounded mt-4">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Slide Down Animation Keyframes */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
