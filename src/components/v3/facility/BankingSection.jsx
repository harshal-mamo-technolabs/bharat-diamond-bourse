'use client';

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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const BankingSection = () => {
  const banks = [
    {
      name: "ICICI BANK",
      logo: "/facilities/icici-bank.png"
    },
    {
        name: "HDFC BANK",
        logo: "/facilities/hdfc-bank.png"
    },
    {
      name: "AXIS BANK",
      logo: "/facilities/axis-bank.png"
    },
    {
      name: "YES BANK",
      logo: "/facilities/yes-bank.png"
    },
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Main Card with Blue Border */}
          <motion.div
            className="bg-white border-3 border-[#05183A] rounded-3xl p-6 md:p-4"
            variants={cardVariants}
          >
            {/* Title Section */}
            <motion.div
              className="text-center mb-8 md:mb-1"
              variants={containerVariants}
            >
              <motion.h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 ${gothamLight.className}`}
                variants={itemVariants}
              >
                Banking & Finance
              </motion.h1>
            </motion.div>

            {/* Bank Logos Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {banks.map((bank, index) => (
                <motion.div
                  key={bank.name}
                  className="relative group"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="p-0 sm:p-6transition-colors duration-300 h-full flex items-center justify-center">
                    <div className="relative w-full h-20 sm:h-24 md:h-36">
                      <Image
                        src={bank.logo}
                        alt={`${bank.name} Logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BankingSection;