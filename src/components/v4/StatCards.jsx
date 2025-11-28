'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaBuilding, FaRulerCombined, FaLink, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';

const gotham = localFont({ src: '../../../public/fonts/Gotham.otf', weight: '400', style: 'normal' });
const gothamLight = localFont({
  src: "../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const StatsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedStates, setFlippedStates] = useState([false, false, false, false]);
  const scrollContainerRef = useRef(null);

  const statsData = [
    {
      id: 1,
      number: "#1",
      title: "Largest Diamond Bourse",
      description: "",
      icon: FaCrown,
    },
    {
      id: 2,
      number: "2500+",
      title: "Diamond Offices",
      description: "",
      icon: FaBuilding,
    },
    {
      id: 3,
      number: "2 M+",
      title: "sq. ft. of Office Space",
      description: "",
      icon: FaRulerCombined,
    },
    {
      id: 4,
      number: "9",
      title: "Interconnected Towers",
      description: "",
      icon: FaLink,
    }
  ];

  // Auto flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedStates(prev => {
        const newState = [...prev];
        const currentFlippedIndex = newState.findIndex(state => state);
        
        if (currentFlippedIndex === -1) {
          // Start with first card
          newState[0] = true;
        } else {
          // Flip current card back
          newState[currentFlippedIndex] = false;
          
          // Flip next card after a delay
          setTimeout(() => {
            setFlippedStates(prev => {
              const nextState = [...prev];
              const nextIndex = (currentFlippedIndex + 1) % statsData.length;
              nextState[nextIndex] = true;
              return nextState;
            });
          }, 600); // Wait for flip back animation to complete
        }
        
        return newState;
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [statsData.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const flipVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    }
  };

  return (
    <div className="py-4 sm:py-10 lg:py-10">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className={`${gothamLight.className} text-[#0E234E] leading-tight text-center text-3xl sm:text-[40px] lg:text-[50px] mb-2 sm:mb-2 lg:mb-2 px-4`}>
            Take A Look At Our Bourse
          </h2>
        </motion.div>

        {/* Swipe Instructions - Only visible on mobile */}
        <div className="lg:hidden flex items-center justify-between mb-4 px-4">
          <div className="flex items-center gap-2">
          <FaArrowLeft className="text-[#0E234E] text-sm" />
          <FaArrowRight className="text-[#0E234E] text-sm" />
          <span className={`text-[15px] text-gray-600 ${sora.className}`}>Swipe</span> 
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className="h-[280px] sm:h-[320px] lg:h-[350px]"
                style={{ perspective: 1000 }}
              >
                {/* Flip Card Container */}
                <motion.div
                  className="w-full h-full"
                  variants={flipVariants}
                  animate={flippedStates[index] ? "back" : "front"}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side - Original Card EXACTLY as it was */}
                  <motion.div
                    className="absolute inset-0 h-[280px] sm:h-[320px] lg:h-[350px] bg-white rounded-lg border border-[#b9cada] p-6 sm:p-8 lg:p-9 flex flex-col relative group backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#0E234E] mb-2 ${gothamLight.className}`}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`text-lg sm:text-xl lg:text-[23px] font-normal text-gray-400 mb-3 ${sora.className} leading-tight`}
                      >
                        {stat.title}
                      </motion.h3>
                      
                      {stat.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2"
                        >
                          {stat.description}
                        </motion.p>
                      )}
                    </div>

                    {/* Icon with gradient border */}
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 lg:-bottom-6 lg:-right-6">
                      <motion.div
                        variants={iconVariants}
                        className="relative"
                      >
                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#0E234E]/10 from-20% to-[#0E234E] to-80% p-[2px]">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0E234E]" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Back Side - Flipped Card */}
                  <motion.div
                    className="absolute inset-0 rounded-lg p-6 sm:p-8 lg:p-9 flex items-center justify-center backface-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      backgroundColor: "#0E234E"
                    }}
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <stat.icon className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-white" />
                      </div>
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 ${gothamLight.className}`}>
                        {stat.number}
                      </h3>
                      <p className={`text-lg sm:text-xl lg:text-2xl font-normal text-white/80 ${sora.className}`}>
                        {stat.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Swipeable Cards - Only visible on mobile */}
        <div className="lg:hidden relative">
          <motion.div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="relative w-[280px] snap-center rounded-lg h-[220px] sm:h-[280px] flex-shrink-0"
                style={{ perspective: 1000 }}
              >
                {/* Flip Card Container */}
                <motion.div
                  className="w-full h-full"
                  variants={flipVariants}
                  animate={flippedStates[index] ? "back" : "front"}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side - Original Card EXACTLY as it was */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-lg border border-[#b9cada] p-8 flex flex-col relative group backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-3xl font-bold text-[#0E234E] mb-2 ${gothamLight.className}`}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`text-2xl font-normal text-gray-400 mb-3 ${sora.className} leading-tight`}
                      >
                        {stat.title}
                      </motion.h3>
                      
                      {stat.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-gray-600 text-sm leading-relaxed mt-2"
                        >
                          {stat.description}
                        </motion.p>
                      )}
                    </div>

                    {/* Icon with gradient border */}
                    <div className="absolute -bottom-4 -right-4">
                      <motion.div
                        variants={iconVariants}
                        className="relative"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0E234E]/10 from-20% to-[#0E234E] to-80% p-[2px]">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-[#0E234E]" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Back Side - Flipped Card */}
                  <motion.div
                    className="absolute inset-0 rounded-lg p-8 flex items-center justify-center backface-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      backgroundColor: "#0E234E"
                    }}
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <stat.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold text-white mb-2 ${gothamLight.className}`}>
                        {stat.number}
                      </h3>
                      <p className={`text-xl font-normal text-white/80 ${sora.className}`}>
                        {stat.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default StatsCard;