'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaBuilding, FaChartLine, FaAward } from 'react-icons/fa';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

const gotham = localFont({ src: '../../../public/fonts/Gotham.otf', weight: '400', style: 'normal' });
const gothamLight = localFont({
  src: "../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const StatsCard = () => {
  const statsData = [
    {
      id: 1,
      number: "#1",
      title: "Largest Diamond Bourse",
      description: "",
      icon: FaTrophy,
    },
    {
      id: 2,
      number: "2500+",
      title: "Diamond Offices",
      description: "",
      icon: FaBuilding,
    },
    {
      id: 3,
      number: "2 M+",
      title: "sq. ft. of Office Space",
      description: "",
      icon: FaChartLine,
    },
    {
      id: 4,
      number: "9",
      title: "Interconnected Towers",
      description: "",
      icon: FaAward,
    }
  ];

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
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white py-4 sm:py-10 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className={`${gothamLight.className} text-[#0E234E] leading-tight text-center text-xl sm:text-2xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 px-4`}>
            Take A Look At Our Bourse
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg border border-[#b9cada] p-6 sm:p-8 lg:p-9 h-[280px] sm:h-[320px] lg:h-[350px] flex flex-col relative group"
            >
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E234E] mb-2 ${gothamLight.className}`}
                >
                  {stat.number}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`text-lg sm:text-xl lg:text-2xl font-normal text-gray-400 mb-3 ${sora.className} leading-tight`}
                >
                  {stat.title}
                </motion.h3>
                
                {stat.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2"
                  >
                    {stat.description}
                  </motion.p>
                )}
              </div>

              {/* Icon with gradient border - Responsive positioning */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 lg:-bottom-6 lg:-right-6">
                <motion.div
                  variants={iconVariants}
                  className="relative"
                >
                  {/* Gradient border circle - Responsive sizing */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#0E234E]/10 from-20% to-[#0E234E] to-80% p-[2px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0E234E]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCard;