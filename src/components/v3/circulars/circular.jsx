'use client';

import { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaEye, FaDownload, FaFilter, FaChevronDown, FaSearch } from 'react-icons/fa';
import { BsCalendarDate } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
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

// Custom Dropdown Component
function CustomDropdown({ 
  options, 
  value, 
  onChange, 
  placeholder, 
  icon: Icon, 
  className = '' 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedLabel = value 
    ? options.find(opt => opt.value === value)?.label || value
    : placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-2 sm:px-4 py-2 sm:py-3 border border-[#878787] rounded-md text-xs sm:text-sm text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent flex items-center justify-between ${sora.className}`}
      >
        <span className="truncate">{selectedLabel}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {Icon && <Icon className="text-gray-400 text-xs sm:text-sm" />}
          <FaChevronDown 
            className={`text-gray-400 text-xs sm:text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white border border-[#878787] rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm hover:bg-[#F2F4F6] transition-colors duration-150 ${
                  value === option.value 
                    ? 'bg-[#F2F4F6] text-[#05183A] font-medium' 
                    : 'text-[#666666]'
                } ${sora.className} first:rounded-t-md last:rounded-b-md`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const cardsPerPage = 6;

  const categories = [
    { value: 'News', label: 'News' },
    { value: 'Events', label: 'Events' },
    { value: 'Obituary', label: 'Obituary' },
    { value: 'Press Release', label: 'Press Release' }
  ];

  const years = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' }
  ];

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

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

  // Calculate pagination
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear, selectedMonth, selectedCategory, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="relative w-full bg-white py-10">
      {/* White background with top border radius */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-md -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20 w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
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
            </Link>{' '} / CIRCULARS
          </h6>
        </motion.div>

        {/* Main content container */}
        <motion.div 
          className="bg-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Top Filter Bar - CENTERED */}
          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Search Bar and Filters Container */}
            <div className="w-full max-w-4xl">
              {/* Mobile: Search bar above, filters below */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                {/* Search Bar */}
                <div className="w-full sm:w-auto sm:flex-[1.5] sm:max-w-[420px]">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search"
                      className={`w-full px-10 py-2 sm:py-3 border border-[#878787] rounded-md text-xs sm:text-sm text-[#666666] bg-white focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent ${sora.className}`}
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs sm:text-sm" />
                  </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-row gap-2 sm:gap-6 w-full sm:w-auto sm:flex-1 sm:justify-center">
                  {/* SELECT - Category filter with icon */}
                  <div className="flex-[0.9] sm:flex-none sm:w-[200px] min-w-0">
                    <CustomDropdown
                      options={categories}
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      placeholder="All"
                      icon={FaFilter}
                    />
                  </div>
                  
                  {/* Month Selector */}
                  <div className="flex-[1.1] sm:flex-none sm:w-[200px] min-w-0">
                    <CustomDropdown
                      options={months}
                      value={selectedMonth}
                      onChange={setSelectedMonth}
                      placeholder="Month"
                      icon={BsCalendarDate}
                    />
                  </div>
                  
                  {/* Year Selector */}
                  <div className="flex-1 sm:flex-none sm:w-[200px] min-w-0">
                    <CustomDropdown
                      options={years}
                      value={selectedYear}
                      onChange={setSelectedYear}
                      placeholder="Year"
                      icon={BsCalendarDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 items-start"
          >
            {currentCards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-[#F2F4F6] border border-[#D9D9D9] rounded-md transition-all duration-300 overflow-hidden"
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

                  {/* Date and Actions Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    {/* Date with Icon */}
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#05183A] text-xs sm:text-[11px]" />
                      <span className={`text-[#05183A] text-xs sm:text-[13px] font-medium ${sora.className}`}>
                        {card.date}
                      </span>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      {/* View Link */}
                      <button
                        className={`flex items-center gap-1.5 text-[#05183A] text-xs sm:text-[12px] font-medium transition-all duration-200 hover:text-[#0a2a5a] hover:-translate-y-0.5 active:text-[#0a2a5a] active:-translate-y-0.5 ${sora.className}`}
                      >
                        <FaEye className="text-xs sm:text-sm" />
                        <span>View</span>
                      </button>

                      {/* Divider */}
                      <span className="text-gray-300">|</span>

                      {/* Download Link */}
                      <button
                        className={`flex items-center gap-1.5 text-[#05183A] text-xs sm:text-[12px] font-medium transition-all duration-200 hover:text-[#0a2a5a] hover:-translate-y-0.5 active:text-[#0a2a5a] active:-translate-y-0.5 ${sora.className}`}
                      >
                        <FaDownload className="text-xs sm:text-sm" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
              {/* Previous Button */}
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-[#878787] text-[#666666] hover:bg-[#F2F4F6] hover:text-[#05183A]'
                } ${sora.className}`}
                whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
              >
                Previous
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <motion.button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-[#05183A] text-white'
                        : 'bg-white border border-[#878787] text-[#666666] hover:bg-[#F2F4F6] hover:text-[#05183A]'
                    } ${sora.className}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-[#878787] text-[#666666] hover:bg-[#F2F4F6] hover:text-[#05183A]'
                } ${sora.className}`}
                whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
              >
                Next
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}