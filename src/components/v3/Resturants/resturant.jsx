'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEye, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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

// Mock data for the member cards
const memberData = [
  {
    id: 1,
    name: 'Ramesh Sandwich.',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/sandwich.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 2,
    name: 'Jai Hind',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/JaiHind.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 3,
    name: 'Western Venture (Amul Proucts)',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/amul.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 4,
    name: 'Ramesh Sandwich',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/sandwich.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 5,
    name: 'Jai Hind',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/JaiHind.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 6,
    name: 'Western Venture (Amul Proucts)',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/amul.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 7,
    name: 'Ramesh Sandwich',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/sandwich.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 8,
    name: 'Jai Hind',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/JaiHind.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  },
  {
    id: 9,
    name: 'Western Venture (Amul Proucts)',
    profession: 'Office No: GW6021',
    location: 'Tower G',
    image: '/amul.png',
    QBC1: "9584",
    QBC2: "26754288",
    officeNo: '+91 22 1234 5678',
    contactNo: '+91 98765 43210',
    email: 'AJAYSEVANTILALDHARU@bdb.com'
  }
];

export default function Resturant() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
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
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Member Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4"
          >
            {memberData.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-[#F2F4F6] border border-[#D9D9D9] transition-all rounded-md duration-300 overflow-hidden"
              >
                <div className='p-3'>
                {/* Member Image */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden p-5 sm:p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Member Details */}
                <div className="mt-4 space-y-1.5">
                  {/* Name */}
                  <h3 className={`text-[#05183A] text-xl sm:text-[20px] font-bold leading-tight ${gothamLight.className}`}>
                    {member.name}
                  </h3>

                  {/* Profession */}
                  <p className={`text-[#05183A] text-base uppercase sm:text-[13px] font-medium ${sora.className}`}>
                    CONTACT PERSON: {member.name}
                  </p>
                  <p className={`text-[#05183A] text-base uppercase sm:text-[13px] font-medium ${sora.className}`}>
                    CONTACT NUMBER: {member.contactNo}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#05183A] text-sm w-4 h-4" />
                    <span className={`text-[#05183A] text-sm sm:text-[12px] ${sora.className}`}>
                      ADDRESS: {member.location}
                    </span>
                  </div>

                  {/* View Details Button */}
                  {/* <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleViewDetails(member)}
                    className={`flex items-center gap-2 bg-[#05183A] text-white px-5 py-3 rounded-lg text-sm sm:text-[14px] font-semibold transition-colors duration-200 hover:bg-[#0a2a5a] w-full justify-center mt-4 ${sora.className}`}
                  >
                    View Details
                    <FaArrowRight className="text-sm" />
                  </motion.button> */}
                </div>
            </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 text-2xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ×
              </button>

              {/* White Card Container */}
              <div className="bg-white rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {/* Left Side - Image */}
                  <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center p-4 lg:p-6">
                    {/* Name */}
                    <h2 className={`text-[#05183A] text-2xl lg:text-3xl font-bold mb-4 ${gothamLight.className}`}>
                      {selectedMember.name}
                    </h2>

                    {/* Details Grid */}
                    <div className="space-y-3">
                      {/* Office No */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Office No:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.officeNo}
                        </span>
                      </div>

                      {/* Contact No */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Contact Person:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          QBC-1:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.QBC1}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          QBC-2:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.QBC2}
                        </span>
                      </div>

                      {/* Email */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Email:
                        </span>
                        <span className={`flex items-start text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.email}
                        </span>
                      </div>

                      {/* Profession */}
                      {/* <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Profession:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.profession}
                        </span>
                      </div> */}

                      {/* Location */}
                      <div className="flex justify-between items-start pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Address:
                        </span>
                        <div className="flex items-start max-w-[70%]">
                          <span className={`text-[#05183A] text-sm ${sora.className}`}>
                            {selectedMember.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}