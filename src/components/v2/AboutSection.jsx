'use client';

import Image from 'next/image';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  const building1Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const building2Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Main heading */}
        <div className="text-left mb-5">
          <h1
            className={`text-3xl sm:text-4xl font-bold text-[#1D3156] leading-tight max-w-6xl mx-auto ${gotham.className}`}
          >
            BDB: Shaping The Future
            <br className="hidden sm:block" />
            <span className="block sm:inline">Of Diamond Trade</span>
          </h1>
        </div>

        {/* Card container */}
        <div className="relative mb-10">
          <div className="bg-[#F2F4F6] rounded-3xl shadow-xl p-6 sm:p-10 sm:pt-20 relative mb-20 overflow-visible">
            {/* Grid for md+ screens, stacked for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-10 items-start">
              {/* WHO WE ARE */}
              <div className="max-w-xl">
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#1D3156] mb-4 ${gotham.className}`}>
                  Who We Are
                </h2>
                <p className={`text-gray-700 leading-relaxed text-[15px] mb-3 text-justify ${sora.className}`}>
                  Established to strengthen and streamline India's role in the international diamond market, BDB is
                  home to thousands of national and international traders, manufacturers, exporters, and service
                  providers. The campus offers a highly secure, transparent, and professionally managed environment
                  that reflects trust, scale, and operational excellence.
                </p>
                <p className={`text-gray-700 leading-relaxed text-[15px] text-justify ${sora.className}`}>
                  We represent not just a physical space but a vibrant ecosystem — where legacy, innovation, and
                  global commerce meet.
                </p>
              </div>

              {/* Building 1 image (no border, small rounded corners, lift on hover) */}
              <motion.div
                className="group flex justify-center md:justify-end items-end relative -mt-4 sm:-mt-12 md:-mt-45 mb-8 sm:mb-16 md:mb-25"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={building1Variants}
              >
                <div
                  className="relative rounded-[8px] overflow-hidden transform-gpu transition-transform duration-300 group-hover:-translate-y-2"
                  style={{
                    width: 450,
                    height: 450,
                    borderRadius: '8px', // ✅ border removed
                  }}
                >
                  <Image
                    src="/building1.jpg"
                    alt="Modern skyscrapers viewed from below"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              </motion.div>

              {/* Building 2 image (no border, small rounded corners, lift on hover) */}
              <motion.div
                className="group flex justify-center md:justify-start items-start relative -mb-8 sm:-mb-16 md:-mb-24 order-last md:order-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={building2Variants}
              >
                <div
                  className="relative rounded-[8px] overflow-hidden transform-gpu transition-transform duration-300 group-hover:-translate-y-2"
                  style={{
                    width: 450,
                    height: 450,
                    borderRadius: '8px', // ✅ border removed
                  }}
                >
                  <Image
                    src="/building2.jpg"
                    alt="Modern glass building architecture"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              </motion.div>

              {/* MISSION & VISION */}
              <div className="max-w-xl ml-auto flex flex-col justify-end">
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#1D3156] mb-3 ${gotham.className}`}>
                  Mission & Vision
                </h2>
                <p className={`text-gray-700 leading-relaxed text-[15px] mb-4 text-justify ${sora.className}`}>
                  To provide a world-class, secure, and transparent platform for the global diamond trade by fostering
                  excellence, innovation, and integrity — supporting businesses and advancing India's leadership in the
                  global gems and jewelry sector.
                </p>
                <p className={`text-gray-700 leading-relaxed text-[15px] mb-6 text-justify ${sora.className}`}>
                  To be the most trusted and advanced diamond trading destination in the world — a global epicenter
                  where commerce, collaboration, and community come together to shape the future of the diamond
                  industry.
                </p>
                <Link
                  href=""
                  className={[
                    'group relative inline-flex items-center justify-between',
                    'rounded-[8px] px-5 py-3.5',
                    'bg-[#0E234E]',
                    `${gotham.className}`,
                    'text-white hover:text-[#EAF0FA] active:text-[#DDE6F5] font-carentro uppercase text-[13px] font-[600] tracking-[0.5px]',
                    'transition-all duration-200 hover:-translate-y-px',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                    'w-max',
                  ].join(' ')}
                >
                  <span>Read more About us </span>
                  <Arrow
                    color="#FFFFFF"
                    size={16}
                    stroke={2}
                    className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
