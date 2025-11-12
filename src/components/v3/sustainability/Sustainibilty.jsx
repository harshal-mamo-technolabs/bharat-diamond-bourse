'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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

// Data for the 5 sections
const sectionData = [
  {
    id: 1,
    title: "Environmental Initiatives",
    description: "We are committed to ethical and environmentally responsible diamond sourcing practices that prioritize both people and the planet.",
    image: "/sustainibility/sust-1.png",
    points: [
      "A 1 MW solar power plant on our rooftops reduces dependence on the city's grid.",
      "More than 15% of our energy needs are met through renewable sources.",
      "This significantly cuts carbon emissions, making BDB one of the greenest trade hubs in the world."
    ]
  },
  {
    id: 2,
    title: "Water Recycling & Conservation",
    description: "Our state-of-the-art facilities incorporate sustainable design principles and energy-efficient technologies.",
    image: "/sustainibility/sust-2.png",
    points: [
      "Our Sewage Treatment Plant (STP) recycles wastewater to maintain lush green gardens across the campus.",
      "Rooftop rainwater harvesting ensures minimal wastage of natural resources.",
      "Recycled water is used for horticulture and landscaping, helping us conserve thousands of litres daily."
    ]
  },
  {
    id: 3,
    title: "Gardening & Horticulture",
    description: "Building strong relationships with local communities through education, healthcare, and economic development initiatives.",
    image: "/sustainibility/sust-3.png",
    points: [
      "Over 400+ trees and landscaped gardens make BDB a natural, healthy environment for members and visitors.",
      "Rooftop herb plantations and zero-plastic composting units reinforce our eco-conscious approach.",
      "Our green campus is proof that business and nature can thrive together."
    ]
  },
  {
    id: 4,
    title: "Smart Energy & Building Management",
    description: "Pioneering new technologies and processes to reduce our environmental footprint and enhance sustainability.",
    image: "/sustainibility/sust-4.png",
    points: [
      "A centralised chilling plant ensures energy-efficient air-conditioning for 20 towers.",
      "Modern LED lighting and energy-efficient systems reduce overall consumption.",
      "All towers are managed with integrated surveillance and smart access control systems, optimising resource use while ensuring maximum safety."
    ]
  },
  {
    id: 5,
    title: "Parking Management",
    description: "Adhering to international sustainability standards and continuously improving our environmental performance.",
    image: "/sustainibility/sust-5.png",
    points: [
      "A multi-level parking facility provides organized and hassle-free vehicle management for members and visitors.",
      "Smart entry and exit systems ensure smooth traffic flow and enhanced security throughout the premises.",
      "Designated areas for cars, two-wheelers, and service vehicles optimize space utilization while maintaining convenience and order across the campus."
    ]
  }
];

export default function Sustainability() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'News', 'Events', 'Obituary', 'Press Release'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      x: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 20 
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      {/* White background with top border radius - KEPT AS REQUESTED */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-2">
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
            </Link>{' '} / SUSTAINABILITY
          </h6>
        </motion.div>
        {/* Main content container */}
        <motion.div 
          className="bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* Alternating Image-Content Sections */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {sectionData.map((section, index) => {
              const isImageLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={section.id}
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
                >
                  {/* Content Section - Title only for mobile/tablet */}
                  <motion.div 
                    className={`order-1 lg:hidden ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                    variants={contentVariants}
                  >
                    {/* Title - Mobile/Tablet only */}
                    <motion.h2
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#05183A] leading-tight mb-4 sm:mb-6 ${gothamLight.className}`}
                      variants={itemVariants}
                    >
                      {section.title}
                    </motion.h2>
                  </motion.div>

                  {/* Image Section */}
                  <motion.div 
                    className={`order-2 lg:order-1 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                    variants={imageVariants}
                  >
                    <div className="relative h-64 sm:h-72 md:h-80 lg:h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content Section - Full content for desktop, points only for mobile/tablet */}
                  <motion.div 
                    className={`order-3 space-y-4 sm:space-y-5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                    variants={contentVariants}
                  >
                    {/* Title - Desktop only */}
                    <motion.h2
                      className={`hidden lg:block text-2xl sm:text-3xl md:text-4xl font-bold text-[#05183A] leading-tight ${gothamLight.className}`}
                      variants={itemVariants}
                    >
                      {section.title}
                    </motion.h2>

                    {/* Points List */}
                    <motion.ul
                      className="space-y-3 sm:space-y-4"
                      variants={containerVariants}
                    >
                      {section.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="flex items-start"
                          custom={pointIndex}
                          variants={listItemVariants}
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#05183A] rounded-full mt-2 mr-3 sm:mr-4"></div>
                          <span className={`text-[#364153] font-medium text-[14px] sm:text-[15px] leading-relaxed ${sora.className}`}>
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}