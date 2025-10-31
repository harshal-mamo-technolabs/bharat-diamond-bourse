'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { BsCalendarDate } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
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
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type1'
  },
  {
    id: 2,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type2'
  },
  {
    id: 3,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type3'
  },
  {
    id: 4,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type1'
  },
  {
    id: 5,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type2'
  },
  {
    id: 6,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type3'
  },
  {
    id: 7,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type1'
  },
  {
    id: 8,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type2'
  },
  {
    id: 9,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type3'
  },
  {
    id: 10,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type1'
  },
  {
    id: 11,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type2'
  },
  {
    id: 12,
    date: '25 SEP 2025',
    eventRange: '21 SEP 2025-27 SEP 2025',
    title: 'Fragslip Event',
    description: 'Innovation hubs are transforming traditional business models',
    imageType: 'type3'
  }
];

// Local images from public/events directory
const getImageUrl = (type) => {
  switch (type) {
    case 'type1':
      return '/events/image-1.jpg';
    case 'type2':
      return '/events/image-2.jpg';
    case 'type3':
      return '/events/image-3.jpg';
    default:
      return '/events/image-1.jpg';
  }
};

export default function News() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const filters = ['All', 'News', 'Events', 'Obituary', 'Press Release'];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
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
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-6">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${sora.className} ${
                    activeFilter === filter
                      ? 'bg-[#05183A] text-white'
                      : 'bg-gray-200 text-[#05183A] hover:bg-gray-300'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Date Selectors - Updated for mobile responsiveness */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                {/* Sort Selector */}
                <div className="relative flex-1 min-w-[150px]">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className={`w-full px-4 py-3 border border-[#878787] rounded-lg text-sm appearance-none text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                  >
                    <option value="">Sort</option>
                    <option value="latest">By latest</option>
                    <option value="old">By old</option>
                  </select>
                  <BiSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                
                {/* Year Selector */}
                <div className="relative flex-1 min-w-[150px]">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className={`w-full px-4 py-3 border border-[#878787] rounded-lg text-sm appearance-none text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                  >
                    <option value="">Select Year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <BsCalendarDate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Month Selector */}
                <div className="relative flex-1 min-w-[150px]">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className={`w-full px-4 py-3 border border-[#878787] rounded-lg text-sm appearance-none text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                  >
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <BsCalendarDate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
                className="rounded-lg overflow-hidden transition-all duration-300 "
              >
                {/* Image Container */}
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={getImageUrl(card.imageType)}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target;
                        target.style.display = 'none';
                        if (target.nextElementSibling) {
                          target.nextElementSibling.classList.remove('hidden');
                        }
                      }}
                    />
                    {/* Fallback div if image doesn't load */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-semibold">Event Image</span>
                    </div>
                  </div>
                  
                  {/* Date Label */}
                  <div className="absolute top-3 right-3 bg-gray-100 px-3 py-1 rounded shadow-sm">
                    <span className={`text-black text-xs font-semibold ${sora.className}`}>{card.date}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Event Range */}
                  <p className={`text-xs text-gray-600 mb-2 font-medium ${gothamLight.className}`}>
                    {card.title} - {card.eventRange}
                  </p>

                  {/* Title */}
                  <h3 className={`text-[#05183A] text-[16px] font-semibold mb-2 leading-tight ${gothamLight.className}`}>
                    {card.description}
                  </h3>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#05183A"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 bg-[#05183A] text-white px-3 py-2 rounded-md text-[12px] font-medium transition-colors duration-200 ${sora.className}`}
                  >
                    Read More
                    <FaArrowRight className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}