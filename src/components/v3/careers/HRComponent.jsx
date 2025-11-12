'use client';

import { useRef, useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';

const gotham = localFont({
  src: '../../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const gothamLight = localFont({
  src: "../../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function HRComponent() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    { id: 1, src: '/career/award-1.png', alt: 'Award 1' },
    { id: 2, src: '/career/award-2.png', alt: 'Award 2' },
    { id: 3, src: '/career/award-3.png', alt: 'Award 3' },
    { id: 4, src: '/career/award-4.png', alt: 'Award 4' },
    { id: 5, src: '/career/award-5.png', alt: 'Award 5' },
  ];

  // Mouse events for desktop dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    
    // Prevent default to avoid text selection
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 1.5; // Reduced multiplier for smoother scrolling
    
    requestAnimationFrame(() => {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    });
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.touches[0].clientX - rect.left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const walk = (x - startX) * 1.5;
    
    requestAnimationFrame(() => {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add cursor styles when dragging
  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    }

    return () => {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging]);

  // Add global mouse up listener to handle dragging outside the container
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-2">
        {/* Breadcrumb */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className={`text-[#36465e] text-[14px] sm:text-[16px] ${gothamLight.className}`}>
            <Link href="/v3" className="">
              HOME
            </Link>{' '} / CAREERS
          </h6>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side */}
          <div className="lg:flex-1">
            {/* Image */}
            <div className="md:h-[290px] w-full mb-6">
              <img 
                src="/career/award.png" 
                alt="HR Awards" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Title and Line */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className={`${gotham.className} text-2xl md:text-3xl font-bold text-[#05183A] whitespace-nowrap`}>
                HR Awards
              </h2>
              <div className="w-full h-px bg-gray-300"></div>
            </div>

            {/* Horizontal Scrollable Images with Drag Support */}
            <div 
              ref={scrollContainerRef}
              className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="flex-shrink-0 md:w-[100px] md:h-[100px] w-20 h-20 transition-transform duration-200 hover:scale-105"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-200"
                    draggable="false"
                  />
                </div>
              ))}
            </div>

            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Right Side */}
          <div className="lg:flex-1 flex flex-col justify-center">
            <div className={`${sora.className} text-gray-600 space-y-4`}>
              <p className="text-sm md:text-[14px] leading-relaxed">
              At BDB, we believe that our people are our greatest strength.
              From global diamond trading opportunities to industry-defining innovation,
              we provide a platform where professionals can thrive and make an impact on an international stage.
              Our 20-acre campus is more than a workplace – it is a vibrant ecosystem designed to inspire collaboration,
              growth, and excellence.
              </p>
              
              <p className="text-sm md:text-[14px] leading-relaxed">
              Bharat Diamond Bourse (BDB) is the world's largest and most prestigious diamond trading hub,
              uniting over 2,500 member companies across 100+ countries. More than just a workplace, 
              BDB is a global ecosystem where professionals connect, 
              innovate, and shape the future of the diamond and jewellery industry.
              </p>

              <p className="text-sm md:text-[14px] leading-relaxed">
              Working at BDB means becoming part of a vibrant community that drives the growth of India's diamond
              and jewellery industry while maintaining the highest global standards of security, transparency,
              and trust.
              </p>
            </div>

            {/* Read More Button */}
            <button className="group flex items-center gap-2 bg-[#05183A] text-white px-6 py-3 rounded-lg hover:bg-[#0a2a5a] transition-colors duration-300 w-fit mt-6">
              <span className={`${gothamLight.className} text-sm font-semibold`}>
              Discover your next role
              </span>
              <FaArrowRight className="text-white text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}