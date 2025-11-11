'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaBuilding, FaChartLine, FaAward } from 'react-icons/fa';

const StatsCard = () => {
  const statsData = [
    {
      id: 1,
      number: "2",
      title: "Years in a row",
      description: "Financial Times' fDI's Global Knowledge Zone and 9-time winner of the Global Free Zone of the Year award",
      icon: FaTrophy,
      gradient: "from-blue-500 to-blue-100"
    },
    {
      id: 2,
      number: "26,000+",
      title: "Registered companies",
      description: "",
      icon: FaBuilding,
      gradient: "from-blue-600 to-blue-200"
    },
    {
      id: 3,
      number: "87",
      title: "Residential and commercial towers",
      description: "",
      icon: FaChartLine,
      gradient: "from-blue-700 to-blue-300"
    },
    {
      id: 4,
      number: "15%",
      title: "of Dubai's annual FDI",
      description: "",
      icon: FaAward,
      gradient: "from-blue-800 to-blue-400"
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
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Take a look at Bourse
          </h1>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-md border border-gray-200 p-8 h-[350px] flex flex-col relative"
            >
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl font-bold text-gray-900 mb-4"
                >
                  {stat.number}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl font-semibold text-gray-800 mb-3"
                >
                  {stat.title}
                </motion.h3>
                
                {stat.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {stat.description}
                  </motion.p>
                )}
              </div>

              {/* Gradient Border Icon - Positioned Outside Card */}
              <div className="absolute -bottom-6 -right-6">
                <motion.div
                  variants={iconVariants}
                  className="relative"
                >
                  {/* White background circle */}
                  <div className="w-20 h-20 rounded-full bg-white" />
                  
                  {/* Gradient border */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${stat.gradient} p-1`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.gradient.split(' ')[0]} ${stat.gradient.split(' ')[1]} bg-clip-text text-blue`} />
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