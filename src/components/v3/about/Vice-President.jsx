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

export default function VicePresident() {
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
    <section className="relative w-full bg-white py-8 md:py-10">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Main Card with Gray Background */}
        <motion.div
          className="relative bg-[#F2F4F6] overflow-hidden rounded-md"
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
              width={300}
              height={300}
              className="opacity-70 w-[180px] sm:w-[220px] md:w-[300px] h-auto"
            />
          </motion.div>

          {/* Grid */}
          <div className="rounded-md relative z-10 grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] 2xl:grid-cols-[4.5fr_2fr] gap-2 md:gap-4">

            {/* Right Side - Image first in responsive */}
            <motion.div
              className="order-1 lg:order-2 relative flex items-center justify-center p-2 sm:p-4"
              variants={fadeUp}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] max-h-[500px] rounded-md overflow-hidden bg-gray-200">
                  <Image
                    src="/About/mehul-shah.jpg"
                    alt="Mr. Mehul N. Shah - Vice-President of Bharat Diamond Bourse"
                    fill
                    className="object-cover object-top rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Left Side - Content */}
            <motion.div
              className="order-2 lg:order-1 bg-white rounded-md md:m-4 m-2 p-4 sm:p-6 md:p-8 lg:p-10 relative flex flex-col"
              variants={fadeUp}
            >
              <div className="space-y-4 md:space-y-5">
                {/* Title */}
                <div className="mb-2">
                  <h2 className={`${gothamLight.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#05183A] leading-tight`}>
                    Mr. Mehul N. Shah
                  </h2>
                  <p className={`${sora.className} text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 mt-1 md:mt-2`}>
                    Vice-President Of Bharat Diamond Bourse
                  </p>
                </div>

                {/* Content */}
                <div className={`${sora.className} mt-5 space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-justify text-xs sm:text-sm md:text-base lg:text-base xl:text-base`}>
                  <p className="leading-snug md:leading-relaxed">
                    It is a privilege and an honour to serve as the Vice-President of the 
                    Bharat Diamond Bourse — the pride of India&apos;s gem and 
                    jewellery industry and a shining symbol of our nation&apos;s 
                    craftsmanship, trust, and global leadership.
                  </p>
                  <p className="leading-snug md:leading-relaxed">
                    BDB is not merely an exchange; it is a vision brought to life — a 
                    community built on transparency, excellence, and innovation. 
                    Our commitment remains firm to uphold the highest 
                    standards of integrity, foster sustainable growth, and create 
                    opportunities that empower every stakeholder in our 
                    ecosystem.
                  </p>
                  <p className="leading-snug md:leading-relaxed">
                    Together, we continue to illuminate the world with the 
                    brilliance of Indian diamonds and the values that define us.
                  </p>
                </div>
              </div>

              {/* Bottom Right Corner Button */}
              <motion.button
                className="mt-6 md:mt-8 absolute bottom-0 right-0 bg-[#05183A] text-white p-3 sm:p-4 md:p-5 rounded-br-md rounded-tl-md hover:bg-[#0b214f] transition-all flex items-center justify-center"
                variants={fadeUp}
                aria-label="Read more about vice-president"
              >
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}