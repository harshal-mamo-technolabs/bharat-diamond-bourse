'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const RestaurantsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1e40af",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
    className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gray-100"
    style={{
      backgroundImage: "url('/facilities/design.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 1 // keep normal opacity
    }}
  >
  

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 md:gap-2 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Left Side - Content */}
          <motion.div 
            className="order-1 lg:order-1"
            variants={containerVariants}
          >
            {/* Title - Always visible */}
            <motion.h1 
              className={`text-3xl md:text-3xl lg:text-4xl font-bold text-[#05183A] leading-tight ${gothamLight.className}`}
              variants={itemVariants}
            >
              RESTAURANTS
            </motion.h1>

            {/* Description & Button - Hidden on mobile/tablet (will be shown after image) */}
            <motion.div className="hidden lg:block space-y-2">
              <motion.div 
                className={`space-y-4 text-[#364153] text-base md:text-[14px] text-justify leading-relaxed ${sora.className}`}
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  At the Bharat Diamond Bourse, we believe that good food complements good business. Our restaurants and cafés offer a diverse range of cuisines — from authentic Indian dishes to international favorites — all served in a comfortable and hygienic environment.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  Designed for both relaxation and connection, these dining spaces provide the perfect setting for members and visitors to unwind, network, or enjoy a refreshing meal between meetings. Whether it&apos;s a quick coffee or a hearty lunch, BDB&apos;s restaurants bring together taste, convenience, and community.
                </motion.p>
              </motion.div>

              {/* Read More Button - DESKTOP VERSION */}
              <Link href="/v3/resturants">
                <motion.button
                  className="bg-[#05183A] text-white px-3 py-3 rounded-xl text-[12px] font-semibold flex items-center justify-center space-x-2 mt-4 w-full sm:w-auto"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>OUR RESTURANTS</span>
                  <FaArrowRight className='w-3 h-3'/>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image - comes second on mobile/tablet */}
          <motion.div 
            className="order-2 lg:order-2 flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm">
              <div className="relative h-64 sm:h-72 lg:h-[350px] lg:w-[350px] rounded-none overflow-hidden">
                <Image
                  src="/facilities/resturants-1.png"
                  alt="BDB Restaurant Dining Area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 250px"
                  priority
                />
                </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile/Tablet only - Description and button after image */}
        <motion.div 
          className="block lg:hidden mt-8 space-y-2"
          variants={containerVariants}
        >
          <motion.div 
            className={`space-y-4 text-[#364153] text-base md:text-[14px] text-justify leading-relaxed ${sora.className}`}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              At the Bharat Diamond Bourse, we believe that good food complements good business. Our restaurants and cafés offer a diverse range of cuisines — from authentic Indian dishes to international favorites — all served in a comfortable and hygienic environment.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Designed for both relaxation and connection, these dining spaces provide the perfect setting for members and visitors to unwind, network, or enjoy a refreshing meal between meetings. Whether it&apos;s a quick coffee or a hearty lunch, BDB&apos;s restaurants bring together taste, convenience, and community.
            </motion.p>
          </motion.div>

          {/* Read More Button - MOBILE/TABLET VERSION */}
          <Link href="/v3/resturants" className="w-full sm:w-auto">
            <motion.button
              className="bg-[#05183A] text-white px-3 py-3 rounded-xl text-[12px] font-semibold flex items-center justify-center space-x-2 mt-4 w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>OUR RESTURANTS</span>
              <FaArrowRight className="w-3 h-3" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;