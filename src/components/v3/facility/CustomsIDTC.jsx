'use client';

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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const CustomsIDTC = () => {
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1
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
        delay: i * 0.2 + 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative w-full bg-white py-10">
      {/* White background with top border radius */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20 px-4 md:px-8 lg:px-16 xl:px-32">
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
            </Link>{' '} / FACILITIES
          </h6>
        </motion.div>
        {/* Main content card */}
        <motion.div 
          className="p-0 sm:p-0 md:p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image - comes second on mobile/tablet, first on desktop */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={imageVariants}
            >
              <div className="relative overflow-hidden shadow-none rounded-none">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[300px] w-full">
                  <Image
                    src="/facilities/IDTC.jpg"
                    alt="Customs & IDTC Center - Diamond Trading Facility"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right side - Content - comes first on mobile/tablet, second on desktop */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={contentVariants}
            >
              {/* Title - Always visible */}
              <motion.h2
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-[52px] font-bold text-[#05183A] leading-tight ${gothamLight.className}`}
                variants={contentVariants}
              >
                Customs & IDTC
              </motion.h2>

              {/* Description & Features - Hidden on mobile/tablet (will be shown after image) */}
              <motion.div className="hidden lg:block space-y-5">
                <motion.p
                  className={`text-base md:text-[12px] lg:text-lg text-gray-700 leading-relaxed text-justify ${sora.className}`}
                  variants={contentVariants}
                >
                  BOB houses a full-fledged customs clearance centre and the India Diamond Trading Centre (IDTC) – a secure zone where leading global mining companies like De Beers and ALROSA showcase rough diamonds.
                </motion.p>

                {/* Features List */}
                <motion.ul
                  className="space-y-6"
                  variants={containerVariants}
                >
                  {[
                    "Import/export clearance in hours, not days",
                    "X-ray scanners, sealing desks, and electronic filing on campus",
                    "Duty \"parking\" benefit until deals are finalised"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      custom={index}
                      variants={listItemVariants}
                    >
                      <div className="flex-shrink-0 w-1 h-1 bg-[#05183A] rounded-none mt-2 mr-4"></div>
                      <span className={`text-gray-700 font-medium text-[12px] lg:text-[14px] ${sora.className}`}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile/Tablet only - Description and features after image */}
          <motion.div 
            className="block lg:hidden mt-8 space-y-5"
            variants={contentVariants}
          >
            <motion.p
              className={`text-[13px] md:text-[12px] text-gray-700 leading-relaxed text-justify ${sora.className}`}
              variants={contentVariants}
            >
              BOB houses a full-fledged customs clearance centre and the India Diamond Trading Centre (IDTC) – a secure zone where leading global mining companies like De Beers and ALROSA showcase rough diamonds.
            </motion.p>

            {/* Features List */}
            <motion.ul
              className="space-y-6"
              variants={containerVariants}
            >
              {[
                "Import/export clearance in hours, not days",
                "X-ray scanners, sealing desks, and electronic filing on campus",
                "Duty \"parking\" benefit until deals are finalised"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 w-1 h-1 bg-[#05183A] rounded-none mt-2 mr-4"></div>
                  <span className={`text-gray-700 font-medium text-[12px] ${sora.className}`}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomsIDTC;