'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';
import { useState } from 'react';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

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

const SportsFacilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const facilities = [
    {
      title: "CONVENTION HALL",
      image: "/facilities/sport-1.jpg"
    },
    {
      title: "SPORTS & RECREATION GROUND",
      image: "/facilities/sport-2.jpg"
    },
    {
      title: "CENTRAL TRADING HALL",
      image: "/facilities/sport-3.jpg"
    },
    {
      title: "SAFE LOCKER VAULTS",
      image: "/facilities/sport-4.jpg"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Slide animation variants for cards
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8
    })
  };

  // Professional button animation variants
  const buttonVariants = {
    initial: { 
      scale: 1,
      backgroundColor: "#F2F4F6",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#E5E7EB",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: { 
      scale: 0.95,
      backgroundColor: "#D1D5DB",
      boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Function to handle navigation with direction
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  // For 4 images, we'll create a rotating array
  const getRotatedFacilities = () => {
    const rotated = [];
    for (let i = 0; i < facilities.length; i++) {
      const index = (i + currentIndex) % facilities.length;
      rotated.push(facilities[index]);
    }
    return rotated;
  };

  const rotatedFacilities = getRotatedFacilities();

  return (
    <section className="w-full bg-white py-10">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 md:mb-12"
            variants={containerVariants}
          >
            {/* Left Side - Title */}
            <motion.h1 
              className={`text-3xl md:text-4xl lg:text-4xl font-bold text-[0E234E] mb-4 lg:mb-0 ${gothamLight.className}`}
              variants={itemVariants}
            >
              Our Sport Facilities
            </motion.h1>

            {/* Right Side - Subtitle */}
            {/* <motion.p 
              className={`text-[12px] md:text-[14px] text-gray-600 max-w-lg leading-relaxed ${sora.className}`}
              variants={itemVariants}
            >
              Our team is built on a foundation of collaborative excellence, combining diverse talents and expertise to deliver outstanding results
            </motion.p> */}
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-full h-px bg-gray-300 my-8 md:my-12"
            variants={itemVariants}
          />

          {/* Facilities Grid */}
          <motion.div 
            className="mb-8 md:mb-5"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <AnimatePresence mode="popLayout" custom={direction}>
                {rotatedFacilities.map((facility, index) => (
                  <motion.div
                    key={`${facility.title}-${currentIndex}-${index}`}
                    className="relative group cursor-pointer"
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 25 }
                    }}
                  >
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Facility Title - Bottom Left */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className={`text-white font-medium text-sm md:text-[12px] leading-tight ${sora.className}`}>
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Footer Section */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-between"
            variants={containerVariants}
          >
            {/* Know More Button */}
            <motion.button
              className={`bg-[#05183A] text-white text-[11px] px-4 py-2 rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors mb-4 sm:mb-0 w-full sm:w-auto ${sora.className}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <span>KNOW MORE</span>
              <FaArrowRight className='w-3 h-3 justify-center'/>
            </motion.button>

            {/* Navigation Arrows - Hidden on mobile and tablet */}
            <motion.div 
              className="hidden lg:flex space-x-3"
              variants={itemVariants}
            >
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 bg-[#F2F4F6] text-[#05183A] rounded-md flex items-center justify-center shadow-lg"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                 <FaArrowLeft className='w-3 h-3 justify-center'/>
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 bg-[#F2F4F6] text-[#05183A] rounded-md flex items-center justify-center shadow-lg"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                 <FaArrowRight className='w-3 h-3 justify-center'/>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsFacilities;