'use client';

import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

const gotham = localFont({
  src: '../../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});


const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Mission() {

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
    <section className="w-full py-10 bg-white">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >

        {/* LEFT side */}
        <motion.div className="relative pl-6 md:pl-6" variants={fadeUp}>
          {/* Top Dot */}
          <div className="w-3 h-3 rounded-full border-2 border-[#05183A] absolute left-0 top-0" />
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-3 h-[150px] sm:h-[180px] w-[2px] bg-gradient-to-b from-[#05183A] to-transparent"></div>

          <h2 className={`text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-[#05183A] mb-4 ${gotham.className}`}>
            Who We Are
          </h2>
          <p className={`text-gray-600 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] ${sora.className}`}>
            To establish Bharat Diamond Bourse as the most trusted,
            efficient, and transparent diamond trading centre in
            the world, setting benchmarks for infrastructure, security,
            and ethical trade practices.
          </p>
        </motion.div>

        {/* RIGHT side */}
        <motion.div className="pl-6 md:pl-6 relative" variants={fadeUp}>
          {/* Top Dot + Line */}
          <div className="w-3 h-3 rounded-full border-2 border-[#05183A] absolute left-0 top-0" />
          <div className="absolute left-[5px] top-3 h-[150px] sm:h-[180px] w-[2px] bg-gradient-to-b from-[#05183A] to-transparent"></div>

          <h2 className={`text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-[#05183A] mb-4 ${gotham.className}`}>
            Mission & Vision
          </h2>
          <ul className={`space-y-2 text-gray-600 leading-relaxed ${sora.className}`}>
            <li className="flex items-start gap-2">
              <BsDot className="text-[#05183A] text-[13px] flex-shrink-0" />
              <span className='text-[13px] sm:text-[14px]'>To provide a world-class trading environment for members and international buyers.</span>
            </li>

            <li className="flex items-start gap-2">
              <BsDot className="text-[#05183A] text-[13px] flex-shrink-0" />
              <span className='text-[13px] sm:text-[14px]'>To ensure security, trust, and transparency in all transactions.</span>
            </li>

            <li className="flex items-start gap-2">
              <BsDot className="text-[#05183A] text-[13px] flex-shrink-0" />
              <span className='text-[13px] sm:text-[14px]'>To serve as the gateway of India’s diamond industry to the global market.</span>
            </li>

            <li className="flex items-start gap-2">
              <BsDot className="text-[#05183A] text-[13px] flex-shrink-0" />
              <span className='text-[13px] sm:text-[14px]'>To promote sustainable and responsible business practices.</span>
            </li>
          </ul>
        </motion.div>

      </motion.div>
      </div>
    </section>
  );
};
