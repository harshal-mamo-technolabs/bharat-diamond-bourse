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
  "Recent Events": {
    title: "Recent Events",
    img: "/recent-events.png",
    copy: [
      "This Independence Day, we come together to celebrate the spirit of freedom, unity, and pride that defines our nation. The event will be filled with cultural performances, patriotic tributes, and moments of reflection that honor the sacrifices of our freedom fighters. Join us as we raise the tricolor with pride and celebrate the journey of India — a land of rich heritage, resilience, and progress. Let us unite to cherish our independence and look forward to a brighter future together.",
      "Independence Day is a time to honor our nation's glorious past and embrace the promise of its future. Our celebration will feature inspiring speeches, cultural showcases, and activities that bring together people from all walks of life. ",
    ],
  },
  "Upcoming Events": {
    title: "Upcoming Events",
    img: "/upcoming-events.png",
    copy: [
      "From September 22-24, 2025, the Bharat Diamond Bourse (BDB) will host its highly anticipated Leadership Series at the iconic Convention Hall in Mumbai’s BKC. The event kicks off with a two-day symposium, AGDRT 2025 (Advances in Gem & Diamond Research and Technology), organized by the Gemmological Institute of India, spotlighting the latest in gemology, diamond—natural and lab-grown—technology, and R&D. On September 24, the program culminates with a high-impact conference themed “Polishing Our Future”, bringing together industry leaders from across the globe. "
    ],
  },
  "Special Announcements": {
    title: "Special Announcements",
    img: "/agdrt-banner.png",
    copy: [
      "AGDRT-2025: The Second GII Symposium on Advances in Gem & Diamond Research and Technology As part of the second edition of the BDB Leadership Series, the Gemmological Institute of India (GII) is proud to present its two-day symposium titled AGDRT-2025 (Advances in Gem & Diamond Research and Technology). Scheduled for September 22–23, 2025, at the BDB Convention Hall in Mumbai’s BKC, this event marks GII’s pivotal role in driving innovation in the gem and diamond sector.",
      "The symposium will bring together distinguished scientists and industry experts for invited talks, contributed oral and poster presentations, and panel discussions that explore cutting-edge R&D across gemstones, diamonds"
    ],
  },
  "Guest at BDB": {
    title: "Guest at BDB",
    img: "/guest-at-bdb.png",
    copy: [
      "Opening of the 38th World Diamond Congress – 2018 hosted by Bharat Diamond Bourse on 24th October, 2018 from 9.00 a.m to 10.30 a.m. at Convention Hall, Tower ‘DC’ Ground Floor, BDB, BKC, Mumbai 400 051. The World Diamond Congress is a Bi-annual industry event organized by The World Federation of Diamond Bourse (WFDB) and The International Diamond Manufacturers Association"
    ],
  },
};

export default function MissionSection() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Recent Events");

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
