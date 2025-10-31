'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaEye, FaDownload, FaSearch } from 'react-icons/fa';
import { BsCalendarDate } from "react-icons/bs";
import { motion } from 'framer-motion';
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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Mock data for the cards
const cardData = [
    {
      id: 1,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 2,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 3,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 4,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 5,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 6,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 7,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 8,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 9,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 10,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 11,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    },
    {
      id: 12,
      date: '9 Sep, 2025',
      title: 'Annual Leave Policy Update',
      subtitle: 'Important updates regarding annual leave policy effective from October.'
    }
  ];
  

export default function Circulars() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'News', 'Events', 'Obituary', 'Press Release'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      {/* White background with top border radius */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main content container */}
        <motion.div 
          className="bg-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Top Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
            {/* Updated Filters */}
            <div className="flex w-full gap-3 sm:gap-4">
              {/* SEARCH - First filter with left side search icon */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className={`w-full px-10 py-2 sm:py-3 border border-[#878787] rounded-lg text-sm text-[#666666] bg-white focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm" />
              </div>

              {/* CHOOSE DATE - Second filter with right side date icon */}
              <div className="relative flex-1">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#878787] rounded-lg text-sm text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                />
                {/* <BsCalendarDate className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" /> */}
              </div>

              {/* SELECT - Third filter with dropdown */}
              <div className="relative flex-1">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#878787] rounded-lg text-sm appearance-none text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                >
                  <option value="">Select</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6"
          >
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-[#F2F4F6] border border-[#D9D9D9] rounded-lg transition-all duration-300 overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-4 sm:p-5 space-y-3 sm:space-y-2">
                  {/* Title */}
                  <h3 className={`text-[#05183A] text-lg sm:text-[16px] font-bold leading-tight ${gothamLight.className}`}>
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-[#05183A] text-sm sm:text-[13px] leading-relaxed ${sora.className}`}>
                    {card.subtitle}
                  </p>

                  {/* Date with Icon */}
                  <div className="flex items-center gap-2 pt-0">
                    <FaCalendarAlt className="text-[#05183A] text-xs sm:text-[11px]" />
                    <span className={`text-[#05183A] text-xs sm:text-[13px] font-medium ${sora.className}`}>
                      {card.date}
                    </span>
                  </div>

                  {/* Buttons Container */}
                  <div className="flex gap-2 sm:gap-3 pt-3">
                    {/* View Button */}
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`flex items-center gap-2 border border-[#05183A] text-[#05183A] px-3 sm:px-4 py-3 rounded-lg text-xs sm:text-[12px] font-semibold transition-colors duration-200 hover:bg-[#05183A] hover:text-white flex-1 justify-center ${sora.className}`}
                    >
                      <FaEye className="text-xs sm:text-sm" />
                      View
                    </motion.button>

                    {/* Download Button */}
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`flex items-center gap-2 bg-[#05183A] text-white px-3 sm:px-4 py-3 rounded-lg text-xs sm:text-[12px] font-semibold transition-colors duration-200 hover:bg-[#0a2a5a] flex-1 justify-center ${sora.className}`}
                    >
                      <FaDownload className="text-xs sm:text-sm" />
                      Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}