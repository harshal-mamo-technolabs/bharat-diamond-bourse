'use client';

import Image from 'next/image';
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Load Carentro from OTF
const carentro = localFont({
  src: '../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

function Arrow({ color = "#FFFFFF", size = 16, stroke = 2, className = "" }) {
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
      <path
        d="M14 7l5 5-5 5"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
            className={`text-3xl sm:text-4xl font-bold text-[#1D3156] leading-tight max-w-6xl mx-auto ${carentro.className}`}
          >
            BDB: SHAPING THE FUTURE
            <br className="hidden sm:block" />
            <span className="block sm:inline">OF DIAMOND TRADE</span>
          </h1>
        </div>

        {/* Card container */}
        <div className="relative mb-10">
          <div className="bg-[#F2F4F6] rounded-3xl shadow-xl p-6 sm:p-10 sm:pt-20 relative mb-20 overflow-visible">
            {/* Grid for md+ screens, stacked for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-10 items-start">

              {/* WHO WE ARE */}
              <div className="max-w-xl">
                <h2
                  className={`text-3xl sm:text-4xl font-bold text-[#1D3156] mb-4 ${carentro.className}`}
                >
                  WHO WE ARE
                </h2>
                <p
                  className={`text-gray-700 leading-relaxed text-[15px] mb-3 ${sora.className}`}
                >
                  Established to strengthen and streamline India's role in the
                  international diamond market, BDB is home to thousands of
                  national and international traders, manufacturers, exporters,
                  and service providers. The campus offers a highly secure,
                  transparent, and professionally managed environment that
                  reflects trust, scale, and operational excellence.
                </p>
                <p
                  className={`text-gray-700 leading-relaxed text-[15px] ${sora.className}`}
                >
                  We represent not just a physical space but a vibrant ecosystem
                  — where legacy, innovation, and global commerce meet.
                </p>
              </div>

              {/* Building 1 image with framer-motion */}
              <motion.div
                className="flex justify-center md:justify-end items-end relative -mt-4 sm:-mt-12 md:-mt-45 mb-8 sm:mb-16 md:mb-25"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={building1Variants}
              >
                <div
                  className="relative rounded-[40px] overflow-hidden shadow-[20px_0px_50px_rgba(0,0,0,0.3)]"
                  style={{
                    width: 450,
                    height: 450,
                    border: '4px solid transparent',
                    borderRadius: '40px',
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0)) padding-box, linear-gradient(135deg, #1D3156, #D6DCE5) border-box',
                  }}
                >
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.15), rgba(0,0,0,0.2))',
                      mixBlendMode: 'overlay',
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      boxShadow:
                        'inset 0 0 40px rgba(255,255,255,0.7), inset 0 0 60px rgba(0,0,0,0.3)',
                      borderRadius: '40px',
                    }}
                  />
                  <Image
                    src="/building1.jpg"
                    alt="Modern skyscrapers viewed from below"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '40px' }}
                  />
                </div>
              </motion.div>

              {/* Building 2 image with framer-motion */}
              <motion.div
                className="flex justify-center md:justify-start items-start relative -mb-8 sm:-mb-16 md:-mb-24 order-last md:order-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={building2Variants}
              >
                <div
                  className="relative rounded-[40px] overflow-hidden shadow-[-20px_0px_50px_rgba(0,0,0,0.3)]"
                  style={{
                    width: 450,
                    height: 450,
                    border: '4px solid transparent',
                    borderRadius: '40px',
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0)) padding-box, linear-gradient(135deg, #1D3156, #D6DCE5) border-box',
                  }}
                >
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.15), rgba(0,0,0,0.2))',
                      mixBlendMode: 'overlay',
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      boxShadow:
                        'inset 0 0 40px rgba(255,255,255,0.7), inset 0 0 60px rgba(0,0,0,0.3)',
                      borderRadius: '40px',
                    }}
                  />
                  <Image
                    src="/building2.jpg"
                    alt="Modern glass building architecture"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '40px' }}
                  />
                </div>
              </motion.div>

              {/* MISSION & VISION */}
              <div className="max-w-xl ml-auto flex flex-col justify-end">
                <h2
                  className={`text-3xl sm:text-4xl font-bold text-[#1D3156] mb-3 ${carentro.className}`}
                >
                  MISSION & VISION
                </h2>
                <p
                  className={`text-gray-700 leading-relaxed text-[15px] mb-4 ${sora.className}`}
                >
                  To provide a world-class, secure, and transparent platform for
                  the global diamond trade by fostering excellence, innovation,
                  and integrity — supporting businesses and advancing India's
                  leadership in the global gems and jewelry sector.
                </p>
                <p
                  className={`text-gray-700 leading-relaxed text-[15px] mb-6 ${sora.className}`}
                >
                  To be the most trusted and advanced diamond trading destination
                  in the world — a global epicenter where commerce, collaboration,
                  and community come together to shape the future of the diamond
                  industry.
                </p>
                <Link
                  href=""
                  className={[
                    "group relative inline-flex items-center justify-between",
                    "rounded-[8px] px-5 py-3.5",
                    "bg-[#0E234E]",
                    "text-white font-carentro uppercase text-[13px] font-[600] tracking-[0.5px]",
                    "shadow-[0_0_12px_rgba(14,35,78,0.6)]",
                    "transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_16px_rgba(14,35,78,0.7)]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                    "w-max",
                  ].join(" ")}
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
