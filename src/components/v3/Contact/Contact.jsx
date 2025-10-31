'use client';

import { useState } from 'react';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20">
        {/* Contact Form Section */}
        <div className="w-full bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="bg-white rounded-lg"
            >
              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#05183A] text-left mb-8 md:mb-12 ${gothamLight.className}`}
              >
                Let&apos;s Connect
              </motion.h1>

              {/* Contact Form Card */}
              <motion.div
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      />
                    </motion.div>

                    {/* Inquiry Type */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="inquiryType" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership Information</option>
                        <option value="trading">Trading & Operations</option>
                        <option value="facilities">Facilities & Services</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </motion.div>

                    {/* How did you hear about us */}
                    <motion.div variants={itemVariants} className="md:col-span-1">
                      <label htmlFor="hearAboutUs" className={`block text-sm font-medium text-[#364153] mb-2 ${sora.className}`}>
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="referral">Industry Referral</option>
                        <option value="website">BDB Website</option>
                        <option value="event">Industry Event</option>
                        <option value="existing-member">Existing Member</option>
                        <option value="media">News & Media</option>
                        <option value="other">Other</option>
                      </select>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05183A] focus:border-transparent transition-all duration-200 resize-none"
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
                      className="bg-[#05183A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0a2a5a] transition-colors duration-200 flex items-center gap-2"
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
     {/* Tabs Section - Made responsive and full width */}
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
        className="bg-[#F2F4F6] border border-[#D0D0D0] rounded-lg overflow-hidden h-auto lg:h-[400px]"
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
                  className="flex items-center gap-2 bg-white rounded-full p-3 shadow-sm border border-gray-100 w-full sm:flex-1"
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
                  className="flex items-center gap-2 bg-white rounded-full p-3 shadow-sm border border-gray-100 w-full sm:flex-1"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full">
                    <FaPhone className="text-[#05183A] text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs md:text-[12px] font-medium text-[#364153] truncate ${sora.className}`}>
                      {officeData.find(office => office.id === activeTab)?.phone}
                    </span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-2 bg-white rounded-full p-3 shadow-sm border border-gray-100 w-full sm:flex-1"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full">
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