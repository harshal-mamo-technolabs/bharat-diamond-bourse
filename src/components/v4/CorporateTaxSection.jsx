'use client';

import { motion } from 'framer-motion';
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function BDBInfoNote() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-10">
      <div className="">
        <motion.div 
          className="flex flex-col sm:flex-row mx-auto px-4 md:px-8 lg:px-16 xl:px-32 items-start gap-4 sm:gap-6 lg:gap-10 bg-[#ecf3f7] p-4 sm:p-6 lg:p-8 rounded-md relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Side - Small Info Icon */}
          <div className="flex-shrink-0 flex justify-start md:justify-center sm:justify-start w-full sm:w-auto mb-2 sm:mb-0">
            <FaInfoCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#030e21]" />
          </div>

          {/* Right Side - Small Paragraph */}
          <div className="flex-1 sm:mb-0 lg:mb-12">
            <p className={`text-[#05183A] text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed text-justify ${sora.className}`}>
              Bharat Diamond Bourse (BDB) is the world's largest diamond bourse located in Mumbai, India and has defined area in a qualified free zone for the purposes of the India Corporate Tax Law (Federal Decree-Law No. 47 of 2022 on Taxation of Corporations and Businesses and its amendments). This allows businesses operating in the Free Zone to benefit from a 0% Corporate Tax rate on qualifying income as specified by the relevant Corporate Tax Cabinet and Ministerial decisions. For the benefits of operating in the Free Zone: <a href="https://bdbindia.com" target="_blank" rel="noopener noreferrer" className="text-[#000000] font-semibold hover:underline">Bharat Diamond Bourse - Official Website (bdbindia.com)</a>
            </p>
          </div>

          {/* Bottom Right Button */}
          <button className="absolute bottom-2 md:bottom-4 md:right-32 right-4 bg-white text-[#05183A] hover:bg-[#05183A] hover:text-white p-4 rounded-none">
            <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}