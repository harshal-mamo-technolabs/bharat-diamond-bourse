'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
        className={`w-full px-4 py-3 border border-[#878787] rounded-md text-sm text-[#666666] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#05183A] focus:border-transparent flex items-center justify-between ${sora.className}`}
      >
        <span className="truncate">{selectedLabel}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {Icon && <Icon className="text-gray-400 text-sm" />}
          <FaChevronDown 
            className={`text-gray-400 text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
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
                className={`w-full px-4 py-2.5 sm:py-3 text-left text-sm hover:bg-[#F2F4F6] transition-colors duration-150 ${
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

// BDB Office data
const officeData = [
  {
    id: 1,
    title: "Main Headquaters",
    location: "G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    subtitle: "BDB Corporate Headquarters",
    description: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "support@bdbindia.org",
    phone: "+9122 33921500",
    city: "Mumbai",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.707238380752!2d72.84924257599756!3d19.06579858212625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a100bfffff%3A0x5f8fdb6f3f2a8b2e!2sBharat%20Diamond%20Bourse!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    id: 2,
    title: "Member's Relations Center",
    location: "G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    subtitle: "Client Services & Support Hub",
    description: "Our Member's Relations Center serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "support@bdbindia.org",
    phone: "+9122 33921500",
    city: "Mumbai",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.707238380752!2d72.84924257599756!3d19.06579858212625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a100bfffff%3A0x5f8fdb6f3f2a8b2e!2sBharat%20Diamond%20Bourse!5e0!3m2!1sen!2sin!4v1234567891"
  }
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    hearAboutUs: '',
    address: '',
    agree: false
  });

  const inquiryTypeOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'membership', label: 'Membership Information' },
    { value: 'trading', label: 'Trading & Operations' },
    { value: 'facilities', label: 'Facilities & Services' },
    { value: 'partnership', label: 'Partnership Opportunities' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      {/* White background with top border radius - ADDED BACK FROM OLD CODE */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-md -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20">
        {/* Contact Form Section */}
        <div className="w-full bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
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
                </Link>{' '} / CONTACT
              </h6>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="bg-white rounded-md"
            >
              {/* Title and Follow Us Section */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
                {/* Let's Connect Title */}
                <motion.h1
                  variants={itemVariants}
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#05183A] ${gothamLight.className}`}
                >
                  Let&apos;s Connect
                </motion.h1>

                {/* Follow Us Section */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-start lg:items-end gap-3"
                >
                  <h3 className={`text-lg md:text-xl font-semibold text-[#05183A] ${gothamLight.className}`}>
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4 text-[#0E234E]">
                    {/* YouTube Icon */}
                    <motion.a
                      href="https://youtube.com/@bharatdiamondbourse?si=Gmf8Og-vbMyfJ6-o"
                      aria-label="YouTube"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:opacity-80 transition-opacity duration-200"
                    >
                      <Image
                        src="/footer/you-tube.png"
                        alt="YouTube"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.a>
                    
                    {/* LinkedIn Icon */}
                    <motion.a
                      href="https://in.linkedin.com/company/bharat-diamond-bourse"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:opacity-80 transition-opacity duration-200"
                    >
                      <Image
                        src="/footer/linkedin-icon.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.a>
                    
                    {/* Instagram Icon */}
                    <motion.a
                      href="https://www.instagram.com/bharatdiamondbourse/?hl=en"
                      aria-label="Instagram"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:opacity-80 transition-opacity duration-200"
                    >
                      <Image
                        src="/footer/instagram-icon.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form Card */}
              <motion.div
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid layout for medium+ screens */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First Name */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="firstName" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </motion.div>

                    {/* Last Name */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="lastName" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="email" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="phone" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </motion.div>

                    {/* Inquiry Type */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="inquiryType" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Inquiry Type
                      </label>
                      <CustomDropdown
                        options={inquiryTypeOptions}
                        value={formData.inquiryType}
                        onChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                        placeholder="Select an option"
                      />
                    </motion.div>

                    {/* Address - Full width */}
                    <motion.div variants={itemVariants} className="md:col-span-3">
                      <label htmlFor="address" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Business Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200 resize-none"
                        required
                      />
                    </motion.div>
                  </div>

                  {/* Agreement and Submit */}
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#05183A] border-gray-300 rounded focus:ring-[#05183A]"
                        required
                      />
                      <label htmlFor="agree" className={`ml-2 text-sm text-[#364153] ${sora.className}`}>
                        I agree to the terms and conditions and privacy policy
                      </label>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#05183A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0a2a5a] transition-colors duration-200 flex items-center gap-2"
                    >
                      Submit Inquiry
                      <FaArrowRight className="text-sm" />
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Offices Section */}
        <section className="w-full bg-[#EFF3F6] py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Section Title */}
              <motion.h2
                variants={itemVariants}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#05183A] text-center mb-8 md:mb-12 ${gothamLight.className}`}
              >
                Discover Our Office Locations
              </motion.h2>

              {/* Tabs Section - Made responsive */}
              <motion.div
                className="flex flex-col sm:flex-row border-b border-transparent mb-8 md:mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {officeData.map((office) => (
                  <motion.button
                    key={office.id}
                    className={`flex-1 py-4 md:py-6 text-center font-semibold text-lg md:text-xl transition-all duration-300 ${gothamLight.className} ${
                      activeTab === office.id
                        ? 'text-[#0E234E] border-b-2 sm:border-b-4 border-[#0E234E]'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab(office.id)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {office.title}
                  </motion.button>
                ))}
              </motion.div>

              {/* Office Card - Made fully responsive */}
              <motion.div
                key={activeTab}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-[#F2F4F6] border border-[#D0D0D0] rounded-md overflow-hidden h-auto lg:h-[400px]"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] h-full">
                  {/* Content Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center order-2 lg:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-4"
                    >
                      <p className={`text-sm text-[#364153] font-medium ${sora.className}`}>
                        {officeData.find(office => office.id === activeTab)?.subtitle}
                      </p>
                      <h3 className={`text-xl md:text-2xl font-bold text-[#05183A] ${gothamLight.className}`}>
                        {officeData.find(office => office.id === activeTab)?.location}
                      </h3>
                      <p className={`text-[#364153] text-sm md:text-[12px] leading-relaxed ${sora.className}`}>
                        {officeData.find(office => office.id === activeTab)?.description}
                      </p>
                      
                      {/* Updated Contact Info - Made responsive */}
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6">
                        <motion.div 
                          className="flex items-center gap-2 p-3 w-full sm:flex-1"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                            <FaEnvelope className="text-[#05183A] text-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs md:text-[12px] font-medium text-[#364153] truncate ${sora.className}`}>
                              {officeData.find(office => office.id === activeTab)?.email}
                            </span>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-2 p-3w-full sm:flex-1"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-md">
                            <FaPhoneAlt className="text-[#05183A] text-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs md:text-[12px] font-medium text-[#364153] truncate ${sora.className}`}>
                              {officeData.find(office => office.id === activeTab)?.phone}
                            </span>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-2 p-3w-full sm:flex-1"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-md">
                            <FaMapMarkerAlt className="text-[#05183A] text-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs md:text-[12px] font-medium text-[#364153] truncate ${sora.className}`}>
                              {officeData.find(office => office.id === activeTab)?.city}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Map Side - Made responsive */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-[300px] md:h-[350px] lg:h-full w-full order-1 lg:order-2"
                  >
                    <iframe
                      src={officeData.find(office => office.id === activeTab)?.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}