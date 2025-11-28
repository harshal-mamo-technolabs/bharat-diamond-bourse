'use client';

import Image from 'next/image';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import StartBusinessModal from '../v3/StartBusinessModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

const gotham = localFont({
  src: '../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const gothamLight = localFont({
  src: "../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);
  const building1Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const building2Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <section className="w-full py-10 sm:py-10">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Main heading */}
        {/* <div className="text-left mb-8">
          <h1
            className={`text-3xl md:text-3xl font-bold text-[#1D3156] leading-tight mx-auto ${gothamLight.className}`}
          >
            <span className="block xl:inline">BDB: Shaping The Future </span>
            <span className="block xl:inline">Of Diamond Trade</span>
          </h1>
        </div> */}

        {/* Card container */}
        <div className="relative mb-0">
          <div className="rounded-md sm:pt-10 relative mb-0 overflow-visible">
            {/* Grid for lg+ screens, stacked for mobile and tablet */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-2 items-start">
              {/* WHO WE ARE */}
              <div className="max-w-7xl">
                <h2 className={`text-3xl lg:text-5xl font-bold text-[#1D3156] mb-4 ${gothamLight.className}`}>
                  Who We Are
                </h2>
                <p className={`text-gray-700 leading-relaxed text-[16px] mb-3 text-justify ${sora.className}`}>
                  Bharat Diamond Bourse located at Bandra Kurla Complex in Mumbai is the worlds largest and most sophisticated diamond exchange. Operational since the year twenty ten, BDB houses more than four thousand member companies engaged in the import, export, manufacturing and marketing of rough and polished diamonds.
                </p>
                <p className={`text-gray-700 leading-relaxed text-[16px] text-justify ${sora.className}`}>
                  Spread across twenty acres with nearly two million square feet of constructed area along with almost one million square feet of basements, the bourse integrates trading halls, walk in vaults, twenty four thousand five hundred safe deposit boxes, customs clearance, banks, laboratories and essential services, all in one location.
                </p>
                <Link
                  href="/v3/about"
                  className={[
                    'group relative inline-flex items-center justify-between mt-2',
                    'rounded-[6px] px-1 py-3.5',
                    `${gotham.className}`,
                    'text-[#0E234E] hover:text-[#0E234E] active:text-[#0E234E] font-carentro uppercase text-[13px] font-[600] tracking-[0.5px]',
                    'transition-all duration-200 hover:-translate-y-px',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                    'w-max',
                  ].join(' ')}
                >
                  <span>Learn More</span>
                  <Arrow
                    color="#0E234E"
                    size={18}
                    stroke={2}
                    className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Building 1 image - Smaller but fully visible on md+ screens */}
              <motion.div
                className="group flex justify-center lg:justify-end items-end relative -mt-4 sm:-mt-10 lg:mt-15 mb-8 sm:mb-4 lg:mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={building1Variants}
              >
                <div
                  className="relative rounded-[6px] overflow-hidden transform-gpu transition-transform duration-300 group-hover:-translate-y-2"
                  style={{
                    // Responsive sizing - smaller on md+ screens but fully visible
                    width: '100%',
                    maxWidth: '425px', // Reduced from 650px
                    height: '235px', // Reduced from 350px
                    borderRadius: '6px',
                  }}
                >
                  <Image
                    src="/About/bdb-about.png"
                    alt="Modern skyscrapers viewed from below"
                    fill
                    style={{ 
                      objectFit: 'cover', 
                      borderRadius: '0px',
                      objectPosition: 'center' // Ensure the image is properly centered
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 500px"
                    priority
                  />
                </div>
              </motion.div>              
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <StartBusinessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}