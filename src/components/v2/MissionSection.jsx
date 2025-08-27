// app/components/MissionSection.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StartBusinessModal from "../v3/StartBusinessModal";
import { AnimatePresence, motion } from "framer-motion";
import { Sora } from "next/font/google";
import localFont from "next/font/local";

const gotham = localFont({
  src: "../../../public/fonts/Gotham.otf",
  weight: "400",
  style: "normal",
});

const gothamLight = localFont({
  src: "../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Mission");

  const easing = [0.22, 0.61, 0.36, 1];
  const IMAGE_DELAY = 0.2;
  const TEXT_DELAY = 0.4;
  const DURATION = 0.6;

  const activeContent = CONTENT[activeTab];

  return (
    <section
      className={`w-full bg-[#EFF3F6] px-6 md:px-16 xl:px-28 py-10 ${gotham.className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <div className="flex md:justify-between overflow-x-auto md:overflow-visible no-scrollbar">
            {Object.keys(CONTENT).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 flex-shrink-0 px-4 md:flex-1 text-lg font-medium text-center transition-all ${gothamLight.className} ${
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

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* IMAGE */}
          <div className="col-span-12 md:col-span-5 flex md:justify-start justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeTab}`}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: DURATION, ease: easing, delay: IMAGE_DELAY }}
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

          {/* TEXT + BUTTON (animate together) */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeContent.title}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.55, ease: easing, delay: TEXT_DELAY }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <h2
                    className={`text-[32px] md:text-[50px] leading-tight font-bold text-[#0A1D56] mb-6 ${gothamLight.className}`}
                  >
                    {activeContent.title}
                  </h2>

                  {activeContent.copy.map((para, i) => (
                    <p
                      key={i}
                      className={`text-gray-700 text-base md:text-[17px] leading-relaxed mb-5 text-justify ${sora.className}`}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-8 md:mt-0">
                  <button
                    onClick={() => setShowModal(true)}
                    className={[
                      "group relative inline-flex items-center justify-between",
                      "rounded-[8px] px-5 py-3.5",
                      "bg-[#0E234E]",
                      `${gotham.className}`,
                      "text-white hover:text-[#EAF0FA] active:text-[#DDE6F5] font-carentro uppercase text-[13px] font-[600] tracking-[0.5px]",
                      "transition-all duration-200 hover:-translate-y-px",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      "w-max",
                    ].join(" ")}
                  >
                    <span>Read more about us</span>
                    <Arrow
                      color="#FFFFFF"
                      size={16}
                      stroke={2}
                      className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {showModal && (
        <StartBusinessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}
