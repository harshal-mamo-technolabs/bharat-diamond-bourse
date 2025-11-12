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

const gothamLight = localFont({
    src: "../../../../public/fonts/Gotham Medium.otf",
    weight: "400",
    style: "normal",
  });

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function OpenPosition() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const items = [
    {
      id: 1,
      position: 'Jewellery Merchandiser',
      type: 'Full time',
      requirements: [
        'Minimum 3 years experience in jewellery merchandising',
        'Strong knowledge of jewellery materials and trends',
        'Excellent communication and negotiation skills'
      ]
    },
    {
      id: 2,
      position: 'Diamond Grader',
      type: 'Full time',
      requirements: [
        'Certified diamond grader with 2+ years experience',
        'Proficiency with grading equipment and tools',
        'Attention to detail and accuracy'
      ]
    },
    {
      id: 3,
      position: 'Sales Associate',
      type: 'Part time',
      requirements: [
        '1+ years in retail sales, preferably in jewellery',
        'Customer service oriented with product knowledge',
        'Flexible to work weekends and holidays'
      ]
    },
    {
      id: 4,
      position: 'Inventory Manager',
      type: 'Full time',
      requirements: [
        'Bachelor\'s degree in supply chain management',
        '3+ years inventory management experience',
        'Proficiency in inventory management software'
      ]
    },
  ];

  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-2">
        
        {/* List */}
        <div className="divide-y divide-gray-200">
          {/* Headings - Only shown once at the top */}
          <div className="py-3 sm:py-4 hidden sm:block">
            <div className="w-full flex justify-between items-start mb-2">
              {/* Left Column Heading */}
              <div className="flex-1 text-left">
                <div className={`${gothamLight.className} text-sm sm:text-base md:text-[22px] font-semibold text-[#05183A] mb-1`}>
                  Open Position
                </div>
              </div>

              {/* Right Column Heading */}
              <div className="flex-1 text-left flex justify-between items-start">
                <div>
                  <div className={`${gothamLight.className} text-sm sm:text-base md:text-[22px] font-semibold text-[#05183A] mb-1`}>
                    Type
                  </div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 ml-4"></div> {/* Spacer for arrow alignment */}
              </div>
            </div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="py-4 sm:py-6">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full focus:outline-none px-2 sm:px-0"
              >
                {/* Table-like structure without borders */}
                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  {/* Left Column - Position Title */}
                  <div className="flex-1 text-left">
                    <div className={`${sora.className} text-base sm:text-lg md:text-[20px] text-[#05183A] leading-tight`}>
                      {item.position}
                    </div>
                  </div>

                  {/* Right Column - Type and Arrow */}
                  <div className="flex-1 text-left flex justify-between items-center sm:items-start">
                    <div>
                      <div className={`${sora.className} text-sm sm:text-base md:text-[12px] text-[#05183A] bg-gray-100 sm:bg-transparent px-2 py-1 sm:px-0 sm:py-0 rounded sm:rounded-none`}>
                        {item.type}
                      </div>
                    </div>
                    
                    {/* Circular bordered icon */}
                    <span
                      className={`flex items-center justify-center w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-[#05183A] rounded-full transition-transform duration-300 ml-2 sm:ml-4 ${
                        openItem === item.id ? 'rotate-90' : ''
                      }`}
                    >
                      <FaArrowRight className="text-[#05183A] text-xs sm:text-[10px] md:text-[12px]" />
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`mt-4 sm:mt-6 ${sora.className}`}
                  >
                    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      {/* Left Column - Empty space to maintain alignment on desktop */}
                      <div className="hidden sm:block flex-1"></div>

                      {/* Right Column - Requirements and Apply Button */}
                      <div className="flex-1 text-left sm:pl-4">
                        {/* Requirements Section */}
                        <div className="mb-6">
                          <h4 className={`${gothamLight.className} text-base sm:text-sm font-semibold text-[#05183A] mb-3 sm:mb-3`}>
                            Requirements
                          </h4>
                          <ul className="space-y-3 sm:space-y-2 text-gray-600">
                            {item.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-1.5 h-1.5 sm:w-1 sm:h-1 bg-[#05183A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm sm:text-[11px] md:text-[12px] leading-relaxed">
                                  {requirement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Now Button */}
                        <button className="group flex items-center justify-center sm:justify-start gap-2 bg-[#05183A] text-white px-6 py-3 sm:py-3 rounded-lg hover:bg-[#0a2a5a] transition-colors duration-300 w-full sm:w-fit">
                          <span className={`${gothamLight.className} text-sm font-semibold`}>
                            Apply Now
                          </span>
                          <FaArrowRight className="text-white text-xs group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
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