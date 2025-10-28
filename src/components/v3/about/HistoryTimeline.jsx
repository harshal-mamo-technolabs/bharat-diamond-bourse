'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// Timeline data for each year
const timelineData = [
  {
    year: 1985,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "1985 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 1990,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "1990 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 1995,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "1993 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2000,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2000 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2005,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2005 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2010,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2010 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2015,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2015 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2020,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2020 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2025,
    title: "Post-Blast Momentum and Land Acquisition",
    description: "2025 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  }
];

export default function HistoryTimeline() {
  const [currentIndex, setCurrentIndex] = useState(4); // Start at middle (2020)
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNext = () => {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get visible years (3 circles on mobile, 5 on tablet/desktop)
  const getVisibleYears = () => {
    const visibleCount = screenSize === 'mobile' ? 3 : 5;
    
    let start = Math.max(0, currentIndex - Math.floor(visibleCount / 2));
    let end = Math.min(timelineData.length, start + visibleCount);
    
    // Adjust if near boundaries
    if (end === timelineData.length) {
      start = Math.max(0, timelineData.length - visibleCount);
    }
    if (start === 0) {
      end = Math.min(visibleCount, timelineData.length);
    }
    
    return timelineData.slice(start, end);
  };

  const visibleYears = getVisibleYears();
  const currentYearData = timelineData[currentIndex];

  return (
    <section className="relative w-full bg-white py-8 xs:py-12 sm:py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        {/* Main Title */}
        <motion.h1 
          className={`${gothamLight.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05183A] text-center mb-8 xs:mb-12 sm:mb-14 md:mb-16`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          History of Bharat Diamond Bourse
        </motion.h1>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline Container */}
          <div className="relative flex items-center justify-between mb-8 xs:mb-12 sm:mb-14 md:mb-16">
            {/* Left Arrow */}
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full text-[#05183A] transition-all z-20 ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:text-[#05183A] hover:bg-gray-50'
              }`}
              whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Timeline Circles */}
            <div className="relative flex items-center justify-center flex-1 mx-3 xs:mx-4 sm:mx-6 md:mx-8">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#05183A] transform -translate-y-1/2 z-0"></div>
              
              {/* Circles Container */}
              <div className="relative flex items-center justify-between w-full max-w-7xl z-10">
                {visibleYears.map((item, index) => {
                  const globalIndex = timelineData.findIndex(d => d.year === item.year);
                  const positionIndex = index;
                  const isActive = globalIndex === currentIndex;
                  
                  let circleSize = '';
                  let textSize = '';
                  let circleStyle = '';
                  
                  if (screenSize === 'mobile') {
                    // Mobile sizes - 3 circles
                    if (positionIndex === 1) {
                      // Middle circle - Biggest on mobile
                      circleSize = 'w-22 h-22 xs:w-20 xs:h-20';
                      textSize = 'text-base xs:text-lg';
                      circleStyle = 'bg-[#05183A] text-white shadow-lg';
                    } else {
                      // Side circles - Smaller on mobile
                      circleSize = 'w-14 h-14 xs:w-14 xs:h-14';
                      textSize = 'text-sm xs:text-base';
                      circleStyle = 'bg-white border-2 border-[#05183A] shadow-md';
                    }
                  } else if (screenSize === 'tablet') {
                    // Tablet sizes - 5 circles with optimized sizes
                    if (positionIndex === 0 || positionIndex === 4) {
                      // First and last circles - Medium size for tablet
                      circleSize = 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28';
                      textSize = 'text-base sm:text-lg md:text-xl';
                      circleStyle = 'bg-[#05183A] text-white shadow-xl';
                    } else if (positionIndex === 1 || positionIndex === 3) {
                      // Second and fourth circles - Larger for tablet
                      circleSize = 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32';
                      textSize = 'text-lg sm:text-xl md:text-2xl text-[#05183A]';
                      circleStyle = 'bg-white border-2 border-[#05183A] shadow-lg';
                    } else if (positionIndex === 2) {
                      // Middle circle - Biggest for tablet
                      circleSize = 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36';
                      textSize = 'text-xl sm:text-2xl md:text-3xl';
                      circleStyle = 'bg-[#05183A] text-white shadow-2xl';
                    }
                  } else {
                    // Desktop sizes - 5 circles (EXACT SAME AS YOUR ORIGINAL)
                    if (positionIndex === 0 || positionIndex === 4) {
                      // First and last circles - Same size (Medium)
                      circleSize = 'w-[100px] h-[100px]';
                      textSize = 'text-lg';
                      circleStyle = 'bg-[#05183A] text-white shadow-2xl shadow-[#05183A]';
                    } else if (positionIndex === 1 || positionIndex === 3) {
                      // Second and fourth circles - Bigger than first/last
                      circleSize = 'w-[200px] h-[200px]';
                      textSize = 'text-[50px] text-[#05183A]';
                      circleStyle = 'bg-white border-2 border-[#05183A] shadow-lg';
                    } else if (positionIndex === 2) {
                      // Middle circle - Biggest
                      circleSize = 'w-[250px] h-[250px]';
                      textSize = 'text-[70px]';
                      circleStyle = 'bg-[#05183A] text-white shadow-2xl shadow-[#05183A]';
                    }
                  }

                  return (
                    <motion.div
                      key={item.year}
                      className={`flex flex-col items-center justify-center rounded-full transition-all duration-300 ${circleSize} ${circleStyle} cursor-pointer ${
                        isActive ? 'ring-2 ring-[#05183A] ring-offset-2' : ''
                      }`}
                      onClick={() => setCurrentIndex(globalIndex)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span 
                        className={`font-bold ${textSize} ${sora.className}`}
                        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
                      >
                        {item.year}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={handleNext}
              disabled={currentIndex === timelineData.length - 1}
              className={`flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full text-[#05183A] transition-all z-20 ${
                currentIndex === timelineData.length - 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:text-[#05183A] hover:bg-gray-50'
              }`}
              whileHover={{ scale: currentIndex === timelineData.length - 1 ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Current Year Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="text-center max-w-5xl mx-auto px-2 xs:px-3 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className={`${sora.className} text-lg xs:text-xl sm:text-2xl md:text-[18px] font-bold text-gray-700 mb-2 xs:mb-3 sm:mb-3 md:mb-1`}>
                {currentYearData.title}
              </h2>
              <p className={`text-xs xs:text-sm sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed ${sora.className}`}>
                {currentYearData.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}