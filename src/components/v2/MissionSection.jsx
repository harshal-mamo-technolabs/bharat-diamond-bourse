// app/components/MissionSection.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Sora } from "next/font/google";
import localFont from "next/font/local";

const gotham = localFont({
  src: "../../../public/fonts/Gotham.otf",
  weight: "400",
  style: "normal",
});

// Load Sora font
const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

const CONTENT = {
  Mission: {
    title: "Mission & Vision",
    img: "/bdb-image-1.png",
    copy: [
      "To provide a world-class, secure, and transparent platform for the global diamond trade by fostering excellence, innovation, and integrity — supporting businesses and advancing India’s leadership in the global gems and jewelry sector.",
      "To be the most trusted and advanced diamond trading destination in the world — a global epicenter where commerce, collaboration, and community come together to shape the future of the diamond industry.",
    ],
  },
  Innovation: {
    title: "Driving Innovation",
    img: "/bdb-image-1.png",
    copy: [
      "We continuously adopt modern technologies to enhance transparency and efficiency in the diamond trade.",
      "Innovation at BDB ensures the ecosystem remains future-ready for global trade opportunities.",
    ],
  },
  "Our Impact": {
    title: "Our Global Impact",
    img: "/bdb-image-1.png",
    copy: [
      "BDB strengthens India's global leadership in gems and jewelry.",
      "Our initiatives empower businesses, create opportunities, and drive economic growth worldwide.",
    ],
  },
  Sustainability: {
    title: "Sustainability at BDB",
    img: "/bdb-image-1.png",
    copy: [
      "We are committed to eco-friendly operations, energy efficiency, and sustainable practices.",
      "BDB fosters an environment where growth aligns with responsibility toward future generations.",
    ],
  },
  Vision: {
    title: "Our Vision",
    img: "/bdb-image-1.png",
    copy: [
      "To establish BDB as the most advanced and secure diamond trading hub in the world.",
      "We envision a future where commerce, collaboration, and community transform the diamond industry.",
    ],
  },
};

export default function MissionSection() {
  const [activeTab, setActiveTab] = useState("Mission");
  const ease = [0.22, 0.61, 0.36, 1]; // smooth easing
  const activeContent = CONTENT[activeTab];

  return (
    <section
      className={`w-full bg-[#EFF3F6] px-6 md:px-16 xl:px-28 py-10 ${gotham.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* ========== TABS ========== */}
        <div className="relative mb-12 border-b border-gray-200">
          <div className="flex md:justify-between overflow-x-auto md:overflow-visible no-scrollbar">
            {Object.keys(CONTENT).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 flex-shrink-0 px-4 md:flex-1 text-lg font-medium text-center transition-all ${
                  activeTab === tab
                    ? "text-[#0A1D56] font-semibold"
                    : "text-gray-700 hover:text-[#0A1D56]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-[1px] left-0 right-0 mx-auto w-2/3 h-[3px] bg-[#0A1D56] rounded" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ========== CONTENT (Animated) ========== */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* IMAGE */}
          <div className="col-span-12 md:col-span-5 flex md:justify-start justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.img}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.6, ease }}
                className="relative w-full md:w-[400px] h-[400px] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={activeContent.img}
                  alt={activeContent.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT CONTENT */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
              >
                <h2 className="text-[32px] md:text-[50px] leading-tight font-bold text-[#0A1D56] mb-6">
                  {activeContent.title}
                </h2>

                {activeContent.copy.map((para, i) => (
                  <p
                    key={i}
                    className={`text-gray-700 text-base md:text-lg leading-relaxed mb-5 text-justify ${sora.className}`}
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 md:mt-0">
              <button className="px-6 py-3 bg-[#0A1D56] text-white rounded-md font-medium shadow hover:bg-[#112973] transition">
                READ MORE ABOUT US →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
