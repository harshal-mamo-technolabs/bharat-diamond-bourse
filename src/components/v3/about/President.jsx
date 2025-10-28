'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function President() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Card with Gray Background */}
        <motion.div
          className="relative bg-[#F2F4F6] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Abstract Design on Top Right */}
          <motion.div
            className="absolute top-0 right-0 z-0"
            variants={fadeUp}
          >
            <Image
              src="/About/AbstractDesign.png"
              alt="Decorative Pattern"
              width={350}
              height={350}
              className="opacity-70 max-w-[80%] sm:max-w-[60%] md:max-w-[100%] h-auto"
            />
          </motion.div>

          {/* Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] gap-2 md:gap-6">

            {/* Right Side - Image first in responsive */}
            <motion.div
              className="order-1 lg:order-2 relative flex items-center justify-center p-4 sm:p-6"
              variants={fadeUp}
            >
              <div className="relative w-full h-full rounded-none overflow-hidden bg-gray-200">
                <Image
                  src="/About/president.png"
                  alt="Mr. Anoop V. Mehta - President of Bharat Diamond Bourse"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Left Side - Content */}
            <motion.div
              className="order-2 lg:order-1 bg-white rounded-none md:m-6 m-2 p-6 sm:p-8 md:p-16 relative flex flex-col"
              variants={fadeUp}
            >
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h2 className={`${gothamLight.className} text-xl sm:text-2xl md:text-4xl font-bold text-[#05183A]`}>
                    Mr. Anoop V. Mehta
                  </h2>
                  <p className={`${sora.className} text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 mt-2`}>
                    President Of Bharat Diamond Bourse
                  </p>
                </div>

                {/* Content */}
                <div className={`${sora.className} space-y-4 text-gray-700 leading-relaxed text-justify text-[12px] sm:text-[13px] md:text-[14px]`}>
                  <p>
                    It is a privilege and an honour to serve as the President of the 
                    Bharat Diamond Bourse — the pride of India&apos;s gem and 
                    jewellery industry and a shining symbol of our nation&apos;s 
                    craftsmanship, trust, and global leadership.
                  </p>
                  <p>
                    BDB is not merely an exchange; it is a vision brought to life — a 
                    community built on transparency, excellence, and innovation. 
                    Our commitment remains firm to uphold the highest 
                    standards of integrity, foster sustainable growth, and create 
                    opportunities that empower every stakeholder in our 
                    ecosystem.
                  </p>
                  <p>
                    Together, we continue to illuminate the world with the 
                    brilliance of Indian diamonds and the values that define us.
                  </p>
                </div>
              </div>

              {/* Bottom Button for Mobile/Tablets */}
              <motion.button
                className="mt-6 absolute lg:bottom-0 lg:right-0 w-auto bottom-0 right-0 lg:w-auto bg-[#05183A] text-white p-2.5 sm:p-5 md:p-7 rounded-br-2xl flex items-center justify-center hover:bg-[#0b214f] transition-all"
                variants={fadeUp}
              >
                <FaArrowRight className='w-4 sm:w-3 md:w-7 h-6 sm:h-3 md:h-7'/>
              </motion.button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
