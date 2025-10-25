'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const gotham = localFont({
  src: '../../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function SustainabilityInitiatives() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const items = [
    {
      id: 1,
      title: 'Solar power generation to reduce carbon footprint.',
      content:
        'Bharat Diamond Bourse has implemented extensive solar power systems across its campus to harness renewable energy. This initiative significantly reduces our carbon footprint and promotes sustainable energy practices in the diamond industry.',
    },
    {
      id: 2,
      title: 'Sewage Treatment Plants (STP) for water recycling.',
      content:
        'We have established advanced Sewage Treatment Plants that recycle wastewater for non-potable uses like landscaping, flushing, and cooling systems. This water conservation initiative helps in reducing freshwater consumption.',
    },
    {
      id: 3,
      title: 'Green landscaping & rooftop gardens.',
      content:
        'Our campus features extensive green landscaping with native plants and beautiful rooftop gardens that improve air quality, reduce urban heat island effect, and provide serene spaces for our community.',
    },
    {
      id: 4,
      title: 'Blood donation camps and community health programs.',
      content:
        'Regular blood donation camps are organized in collaboration with leading hospitals, along with comprehensive community health programs including health check-ups, awareness sessions, and wellness initiatives.',
    },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <h1
          className={`${gotham.className} text-4xl sm:text-4xl md:text-5xl font-bold text-[#05183A] text-center mb-14`}
        >
          Sustainability & Community Initiatives
        </h1>

        {/* List */}
        <div className="divide-y divide-gray-200">
          {items.map((item) => (
            <div key={item.id} className="py-3 sm:py-4">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
              >
                <span
                  className={`${gotham.className} text-sm sm:text-base md:text-[14px] font-semibold text-[#05183A]`}
                >
                  {item.title}
                </span>

                {/* Circular bordered icon */}
                <span
                  className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#05183A] rounded-full transition-transform duration-300 ${
                    openItem === item.id ? 'rotate-90' : ''
                  }`}
                >
                  <FaArrowRight className="text-[#05183A] text-[10px] sm:text-[12px]" />
                </span>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`mt-3 text-gray-600 text-[11px] sm:text-sm md:text-[12px] leading-relaxed ${sora.className}`}
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
