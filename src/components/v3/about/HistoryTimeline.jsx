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
    year: 1984,
    title: "Foundation and Vision 💎",
    description: "The Bharat Diamond Bourse (BDB) was founded in August 1984 to support and strengthen India's emerging diamond industry. The vision was to create a thriving, inclusive ecosystem for every stakeholder. Diamond trading at the time was fragmented, taking place across Zaveri Bazaar, the Panchratna Building, and other open areas."
  },
  {
    year: 1990,
    title: "Early Collaboration and Inclusivity Focus 🤝",
    description: "BDB initially collaborated closely with MMTC (the designated custodian for diamond exports) to streamline import/export operations. This partnership eventually evolved into a joint custodianship. From its inception, BDB placed the highest importance on inclusiveness and equal opportunity."
  },
  {
    year: 1995,
    title: "Post-Blast Momentum and Land Acquisition 🚨",
    description: "The 1993 serial bomb blasts in Mumbai, including Zaveri Bazaar, underscored the urgent need for a safe, centralized trading environment. This moment gave fresh momentum to the idea of a dedicated diamond bourse. Industry leaders kept the vision alive despite logistical challenges , leading to the eventual securing of a 20-acre plot in the Bandra-Kurla Complex."
  },
  {
    year: 2000,
    title: "Design Phase and Symbolic Structure 🏗️",
    description: "Renowned architect Mr. B.V. Joshi was appointed to design a secure, functional, and inclusive campus. The structural design of BDB reflects its values ; the towers were named A to J, deliberately omitting 'I' to symbolize unity and a collective spirit over individualism.",
  },
  {
    year: 2005,
    title: "Fairness in Allotment and Specialized Facilities 🔑",
    description: "Office allotments were done via a lucky draw, ensuring transparency and fairness for all members. The campus design prioritized the smallest participants in the trade , housing a dedicated hall for new entrants (MDMA members) , a trading hall for small brokers , and safe vaults with lockers."
  },
  {
    year: 2010,
    title: "Nearing Operational Status 📈",
    description: "The campus became operational in 2010. Infrastructure was designed with the intent to empower and uplift the entire spectrum of the diamond industry. The managing committee, comprised of seasoned industry leaders, works entirely on an honorary basis to ensure constant innovation."
  },
  {
    year: 2015,
    title: "Global Hub Status Achieved 🌐",
    description: "By early 2012, most offices had relocated to the BDB campus. The seamless shift of customs operations helped accelerate occupancy. Today, BDB is the undisputed global hub of the diamond industry , and the largest diamond bourse in the world by physical scale and trade volume."
  },
  {
    year: 2020,
    title: "Scale and Governance 📊",
    description: "BDB has a daily footfall exceeding 45,000 people and an annual turnover in the range of $35-40 billion. It is where 14 out of every 15 cut and polished diamonds in the world pass through. BDB has emerged as a model institution in trade facilitation, dispute resolution, and social responsibility."
  },
  {
    year: 2025,
    title: "Security Benchmark and Global Navigation 🛡️🌐",
    description: "In 2025, the Bharat Diamond Bourse (BDB) reinforced its position as a global standard for corporate security by winning the prestigious 'Safe and Secure Corporate of the Year 2025' Award at the Secure India Summit. This recognition validates its rigorous security protocols and commitment to safeguarding its high-value ecosystem. Concurrently, BDB serves as the central platform for the industry to address complex economic issues. Through its Leadership Series events, the bourse convened global experts to discuss challenges such as US reciprocal tariffs leading to export drops, the coexistence of natural and lab-grown diamonds, and the integration of advanced technology like AI in grading and traceability to ensure long-term trust and transparency in the global diamond trade."
  },
  {
    year: 'Present',
    title: "Benchmark of Excellence ⭐",
    description: "BDB continues to operate as a pioneering institution built on the principles of inclusion, service, and excellence. It stands as a beacon for how industry-specific hubs can be developed in other sectors. It remains a testament to what unity, foresight, and selfless leadership can achieve."
  },
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
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
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