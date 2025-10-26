'use client';

import { motion } from 'framer-motion';
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

const FacilitiesSection = () => {
  const [activeTab, setActiveTab] = useState('trading-hall');

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Content for different tabs
  const tabContent = {
    'trading-hall': {
      title: "Trading Hall",
      subtitle: "Sewage Treatment Plant (STP)",
      description: [
        "BDB is committed to sustainability. A state-of-the-art STP recycles wastewater to keep the campus gardens lush and green while reducing environmental impact.",
        "The treated water nurtures verdant gardens and reduces ecological impact, reflecting our commitment to green progress."
      ],
      image: "/facilities/trading-hall.jpg"
    },
    'convention-hall': {
      title: "Convention Hall",
      subtitle: "Modern Event Space",
      description: [
        "Our state-of-the-art convention hall hosts international diamond conferences, exhibitions, and corporate events with world-class facilities.",
        "Equipped with advanced audio-visual technology and flexible seating arrangements for events of all scales."
      ],
      image: "/facilities/trading-hall.jpg"
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="w-full bg-[#F2F4F6] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Section */}
        <motion.div
          className="flex border-b border-transparent mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {['trading-hall', 'convention-hall'].map((tab) => (
            <motion.button
              key={tab}
              className={`flex-1 py-4 md:py-6 text-center font-semibold text-lg md:text-3xl transition-all duration-300 ${gothamLight.className} ${
                activeTab === tab
                  ? 'text-[#0E234E] border-b-4 border-[#0E234E]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab(tab)}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab === 'trading-hall' ? 'Trading Hall' : 'Convention Hall'}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            variants={containerVariants}
          >
            {/* <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              {currentContent.title}
            </motion.h1> */}
            
            <motion.h2 
              className={`text-xl md:text-2xl lg:text-3xl font-semibold text-[0E234E] leading-relaxed ${gothamLight.className}`}
              variants={itemVariants}
            >
              {currentContent.subtitle}
            </motion.h2>

            <motion.div 
              className={`space-y-4 text-[#364153] text-base md:text-[14px] text-justify leading-relaxed ${sora.className}`}
              variants={containerVariants}
            >
              {currentContent.description.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={imageVariants}
          >
            <div className="relative h-64 sm:h-80 lg:h-[300px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={currentContent.image}
                alt={`${currentContent.title} - ${currentContent.subtitle}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;