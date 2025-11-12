'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaTrain, FaPlane, FaCar } from 'react-icons/fa';
import { MdDirectionsTransit, MdFlight, MdDirectionsCar } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

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
        className={`w-full px-4 py-3 border border-[#878787] rounded-md text-sm text-[#666666] bg-white cursor-pointer focus:outline-none focus:border-[#05183A] flex items-center justify-between ${sora.className}`}
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
            className="absolute z-50 w-full mt-1 bg-white border border-[#878787] rounded-md max-h-60 overflow-auto"
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
                } ${sora.className} first:rounded-md last:rounded-md`}
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
    title: "BDB Admin Office",
    location: "G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    subtitle: "BDB Admin Office",
    description: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "support@bdbindia.org",
    phone: "+9122 33921500",
    city: "Mumbai",
    lat: 19.0676,
    lng: 72.8679
  },
  {
    id: 2,
    title: "How to reach us?",
    location: "G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    subtitle: "Client Services & Support Hub",
    description: "Our Member's Relations Center serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "support@bdbindia.org",
    phone: "+9122 33921500",
    city: "Mumbai",
    lat: 19.0676,
    lng: 72.8679,
    directions: {
      byTrain: {
        title: "By Train",
        icon: FaTrain,
        steps: [
          "Take the Mumbai Suburban Railway (Western Line or Central Line)",
          "Get down at Bandra Station (Western Line) or Kurla Station (Central Line)",
          "From Bandra Station: Take auto-rickshaw or taxi (5-7 minutes) to BKC",
          "From Kurla Station: Take auto-rickshaw or taxi (8-10 minutes) to BKC",
          "Alight at G Block, Bandra Kurla Complex"
        ],
        nearestStation: "Bandra Station / Kurla Station",
        distance: "5-10 minutes by auto/taxi",
        originLat: 19.0600, // Bandra Station approximate coordinates
        originLng: 72.8350,
        originName: "Bandra Station"
      },
      byAirplane: {
        title: "By Airplane",
        icon: FaPlane,
        steps: [
          "Arrive at Chhatrapati Shivaji Maharaj International Airport (CSMIA)",
          "From Terminal 2 (T2): Take the airport shuttle or taxi",
          "From Terminal 1 (T1): Take the airport shuttle or taxi",
          "Travel via Western Express Highway (WEH) towards Bandra",
          "Take the BKC exit and follow signs to G Block",
          "Total travel time: 25-35 minutes depending on traffic"
        ],
        nearestAirport: "Chhatrapati Shivaji Maharaj International Airport",
        distance: "25-35 minutes by car/taxi",
        originLat: 19.0896, // Mumbai Airport approximate coordinates
        originLng: 72.8656,
        originName: "Mumbai Airport (CSMIA)"
      },
      byRoad: {
        title: "By Road",
        icon: FaCar,
        getSteps: (userLocation) => {
          if (userLocation) {
            return [
              `Start from ${userLocation}`,
              "Take the Western Express Highway (WEH) towards Bandra",
              "Take the Bandra Kurla Complex (BKC) exit",
              "Follow the signs to G Block",
              "Parking facilities available on-site"
            ];
          }
          return [
            "Enter your starting location to get personalized directions",
            "Take the Western Express Highway (WEH) towards Bandra",
            "Take the Bandra Kurla Complex (BKC) exit",
            "Follow the signs to G Block",
            "Parking facilities available on-site"
          ];
        },
        majorRoutes: "Western Express Highway (WEH) / Eastern Express Highway",
        parking: "Available on-site",
        defaultOriginLat: 19.0750, // A point on WEH near BKC
        defaultOriginLng: 72.8770,
        defaultOriginName: "Western Express Highway"
      }
    }
  }
];

// Dynamic import for Map component to avoid SSR issues
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-md">
      <div className="text-gray-400">Loading map...</div>
    </div>
  )
});

export default function Contact() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTransport, setSelectedTransport] = useState('byTrain'); // Default to train
  const [roadLocation, setRoadLocation] = useState(''); // User's starting location for road directions
  const [roadLocationCoords, setRoadLocationCoords] = useState({ lat: null, lng: null }); // Coordinates for road location
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

  // Reset transport selection when switching tabs
  useEffect(() => {
    if (activeTab === 2) {
      setSelectedTransport('byTrain');
      setRoadLocation('');
      setRoadLocationCoords({ lat: null, lng: null });
    }
  }, [activeTab]);

  // Function to geocode user's location (simplified - in production, use a geocoding service)
  const handleRoadLocationChange = async (location) => {
    setRoadLocation(location);
    // In a real implementation, you would use a geocoding API here
    // For now, we'll use a placeholder that updates when user enters a location
    if (location && location.trim()) {
      // Placeholder coordinates - in production, geocode the location
      setRoadLocationCoords({
        lat: 19.0750 + (Math.random() * 0.01 - 0.005), // Small variation for demo
        lng: 72.8770 + (Math.random() * 0.01 - 0.005)
      });
    } else {
      setRoadLocationCoords({ lat: null, lng: null });
    }
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
          <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
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
                className="bg-white border border-gray-200 rounded-md p-6 md:p-8"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#05183A] transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#05183A] transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#05183A] transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#05183A] transition-all duration-200"
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
                        Message
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#05183A] transition-all duration-200 resize-none"
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
                        className="w-4 h-4 text-[#05183A] border-gray-300 rounded-md focus:outline-none focus:border-[#05183A]"
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
          <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
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

              {/* Office Card - Conditional rendering based on activeTab */}
              {activeTab === 1 ? (
                // BDB Admin Office - Original Design
              <motion.div
                key={activeTab}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                  className="bg-[#F2F4F6] border border-[#D0D0D0] rounded-md overflow-hidden h-auto lg:h-[400px]"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] h-full">
                  {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-center order-2 lg:order-1 bg-white lg:bg-[#F2F4F6]">
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
                      className="h-[300px] md:h-[350px] lg:h-full w-full order-1 lg:order-2 relative overflow-hidden rounded-md lg:rounded-l-none lg:rounded-r-md"
                    >
                      <div className="absolute inset-0 rounded-md lg:rounded-l-none lg:rounded-r-md overflow-hidden border border-gray-200">
                        <MapComponent
                          key={activeTab}
                          lat={officeData.find(office => office.id === activeTab)?.lat || 19.0676}
                          lng={officeData.find(office => office.id === activeTab)?.lng || 72.8679}
                          title={officeData.find(office => office.id === activeTab)?.title || ''}
                          location={officeData.find(office => office.id === activeTab)?.location || ''}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                // Member's Relations Center - New Directions UI
                <motion.div
                  key={activeTab}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-md overflow-hidden"
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mb-8"
                    >
                      <h3 className={`text-2xl md:text-3xl font-bold text-[#05183A] mb-2 ${gothamLight.className}`}>
                        How to Reach Us
                      </h3>
                      <p className={`text-[#364153] text-sm md:text-base ${sora.className}`}>
                        {officeData.find(office => office.id === activeTab)?.location}
                      </p>
                    </motion.div>

                    {/* Transport Selector - Icon Only */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8"
                    >
                      <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        {officeData.find(office => office.id === activeTab)?.directions && Object.entries(officeData.find(office => office.id === activeTab)?.directions || {}).map(([key, direction]) => {
                          const IconComponent = direction.icon;
                          const isSelected = selectedTransport === key;
                          return (
                            <motion.button
                              key={key}
                              onClick={() => setSelectedTransport(key)}
                              className={`relative w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center transition-all duration-300 ${
                                isSelected
                                  ? 'bg-[#05183A] text-white'
                                  : 'bg-[#F2F4F6] text-[#05183A] hover:bg-[#E1E6EF]'
                              }`}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title={direction.title}
                            >
                              <IconComponent className="text-xl md:text-2xl" />
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#05183A] rounded-md border-2 border-white flex items-center justify-center"
                                >
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Content and Map in Horizontal Layout */}
                    {officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport] && (
                      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-8">
                        {/* Left Side - Content */}
                        <motion.div
                          key={selectedTransport}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {(() => {
                            const direction = officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport];
                            const steps = direction?.getSteps ? direction.getSteps(roadLocation) : direction?.steps || [];
                            
                            return (
                              <div className="bg-white border border-[#E1E6EF] rounded-md p-6 md:p-8 lg:p-10 relative overflow-hidden h-full">
                                {/* Decorative Accent */}
                                <div className="absolute top-0 left-0 right-0 h-1"></div>
                                
                                {/* Title */}
                                <div className="mb-6">
                                  <h4 className={`text-2xl md:text-3xl font-bold mb-2 text-[#05183A] ${gothamLight.className}`}>
                                    {direction?.title}
                                  </h4>
                                    {direction?.nearestStation && (
                                      <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-sm text-[#05183A]" />
                                        <span className={`text-sm font-semibold text-[#364153] ${sora.className}`}>
                                          {direction.nearestStation}
                                        </span>
                                      </div>
                                    )}
                                    {direction?.nearestAirport && (
                                      <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-sm text-[#05183A]" />
                                        <span className={`text-sm font-semibold text-[#364153] ${sora.className}`}>
                                          {direction.nearestAirport}
                                        </span>
                                      </div>
                                    )}
                                    {direction?.majorRoutes && (
                                      <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-sm text-[#05183A]" />
                                        <span className={`text-sm font-semibold text-[#364153] ${sora.className}`}>
                                          {direction.majorRoutes}
                                        </span>
                                      </div>
                                    )}
                                </div>

                                {/* Location Input for Road */}
                                {selectedTransport === 'byRoad' && (
                                  <div className="mb-6">
                                    <label className={`block text-sm font-semibold mb-2 text-[#05183A] ${sora.className}`}>
                                      Enter Your Starting Location:
                                    </label>
                                    <div className="flex gap-2">
                                      <input
                                        type="text"
                                        value={roadLocation}
                                        onChange={(e) => handleRoadLocationChange(e.target.value)}
                                        placeholder="e.g., Andheri, Mumbai"
                                        className={`flex-1 px-4 py-3 rounded-md bg-[#F2F4F6] border border-[#E1E6EF] text-[#05183A] placeholder-[#364153]/50 focus:outline-none focus:border-[#05183A] ${sora.className}`}
                                      />
                                    </div>
                                  </div>
                                )}

                                {/* Steps */}
                                <div>
                                  <h5 className={`text-lg font-semibold mb-4 text-[#05183A] ${gothamLight.className}`}>Directions:</h5>
                                  <ul className="space-y-4">
                                    {steps.map((step, index) => (
                                      <li key={index} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#05183A] to-[#0E234E] text-white rounded-md flex items-center justify-center text-sm font-semibold mt-0.5">
                                          {index + 1}
                                        </span>
                                        <span className={`text-base md:text-lg leading-relaxed flex-1 text-[#364153] ${sora.className}`}>
                                          {step}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-8 pt-6 border-t border-[#E1E6EF]">
                                  {direction?.distance && (
                                    <p className={`text-base md:text-lg text-[#364153] mb-2 ${sora.className}`}>
                                      <span className="font-semibold text-[#05183A]">Travel Time: </span>
                                      {direction.distance}
                                    </p>
                                  )}
                                  {direction?.parking && (
                                    <p className={`text-base md:text-lg text-[#364153] ${sora.className}`}>
                                      <span className="font-semibold text-[#05183A]">Parking: </span>
                                      {direction.parking}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })()}
                        </motion.div>

                        {/* Right Side - Map */}
                        <motion.div
                          key={`${selectedTransport}-${roadLocation}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="rounded-md overflow-hidden border border-gray-200 h-[400px] md:h-[500px] lg:h-full"
                        >
                          <MapComponent
                            key={`${activeTab}-${selectedTransport}-${roadLocation}`}
                            lat={officeData.find(office => office.id === activeTab)?.lat || 19.0676}
                            lng={officeData.find(office => office.id === activeTab)?.lng || 72.8679}
                            title={officeData.find(office => office.id === activeTab)?.title || ''}
                            location={officeData.find(office => office.id === activeTab)?.location || ''}
                            originLat={
                              selectedTransport === 'byRoad' && roadLocationCoords.lat
                                ? roadLocationCoords.lat
                                : officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.originLat ||
                                  officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.defaultOriginLat
                            }
                            originLng={
                              selectedTransport === 'byRoad' && roadLocationCoords.lng
                                ? roadLocationCoords.lng
                                : officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.originLng ||
                                  officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.defaultOriginLng
                            }
                            originName={
                              selectedTransport === 'byRoad' && roadLocation
                                ? roadLocation
                                : officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.originName ||
                                  officeData.find(office => office.id === activeTab)?.directions?.[selectedTransport]?.defaultOriginName
                            }
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}