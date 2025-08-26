"use client";

import Image from "next/image";
import Link from "next/link";
import StartBusinessModal from "../v3/StartBusinessModal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import localFont from 'next/font/local';
import { Sora } from "next/font/google";

// Load Gotham from OTF (replaces Carentro)
const gotham = localFont({
  src: '../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const gothamLight = localFont({
  src: '../../../public/fonts/Gotham Medium.otf',
  weight: '400',
  style: 'normal',
});
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });


const ROWS = [
    {
        iconSrc: "/home-facility/bank-icon.png",
        name: "BANK",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our on-premise banking partners provide secure, high-value transaction services, personal and corporate lockers, and full compliance support tailored to the diamond trade’s unique operational needs. Enjoy the convenience of financial services without leaving the BDB campus.",
        url: "/facilities/bank"
    },
    {
        iconSrc: "/home-facility/travel-icon.png",
        name: "TRAVEL AGENTS",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our dedicated on-site travel experts handle every aspect of your journey — from booking international and domestic flights to managing visa processes, hotel arrangements, and itinerary planning. Members and delegates benefit from personalised, end-to-end travel coordination.",
        url: "/facilities/travel-agents"
    },
    {
        iconSrc: "/home-facility/internet-icon.png",
        name: "INTERNET TELECOM",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "We provide enterprise-grade connectivity featuring redundant uplinks, dedicated high-speed internet, secure VLAN setups, and managed voice services. Designed for the demands of the diamond trade, our infrastructure ensures your business remains online, secure, and uninterrupted.",
        url: "/facilities/internet-telecom"
    },
    {
        iconSrc: "/home-facility/restaurant-icon.png",
        name: "RESTAURANT",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our curated dining options range from quick-service counters to executive lounges, all designed to accommodate the fast-paced schedules of traders and visitors. Enjoy diverse cuisine, meeting-friendly spaces, and impeccable service within steps of your workplace.",
        url: "/facilities/restaurant"
    },
    {
        iconSrc: "/home-facility/trading-icon.png",
        name: "TRADING",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our purpose-built trading halls feature controlled access, round-the-clock surveillance, private cabins, and visitor management systems. Designed for high-value transactions, the environment combines unmatched security with operational efficiency for every trade interaction.",
        url: "/facilities/trading"
    },
    {
        iconSrc: "/home-facility/bus-service-icon.png",
        name: "BUS SERVICES",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Reliable shuttle connectivity links the BDB complex to major transit hubs across the city. Enjoy predictable schedules, live status updates, and comfortable travel, ensuring timely arrival and departure for members, visitors, and staff alike.",
        url: "/facilities/bus-services"
    },
    {
        iconSrc: "/home-facility/microscope-icon.png",
        name: "TESTING LABORATORIES",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our accredited laboratories offer grading, identification, and certification services with industry-leading turnaround times. Secure handling protocols, cutting-edge equipment, and expert gemologists ensure absolute accuracy and trust in every report issued.",
        url: "/facilities/testing-laboratories"
    },
    {
        iconSrc: "/home-facility/diamond-icon.png",
        name: "DIAMOND EQUIPMENT",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Within the BDB complex, retailers supply precision tools, imaging systems, and accessories for the diamond trade. OEM-grade support, product demonstrations, and expert consultations make it easy to select the right equipment for your business needs.",
        url: "/facilities/diamond-equipment"
    },
    {
        iconSrc: "/home-facility/trading-hall-icon.png",
        name: "TRADING HALL",
        img: "/home-facility/asian-business-people-landing-airport.jpg",
        copy: "Our expansive trading hall offers modular seating arrangements, a full audiovisual backbone, and concierge services to support events, auctions, and large-scale meetings. Designed to inspire confidence, it is the premier venue for high-profile trading activities.",
        url: "/facilities/trading-hall"
    }
];


function Arrow({ color = "#FFFFFF", size = 16, stroke = 2, className = "" }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
            <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function Facility() {
    const [active, setActive] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const current = ROWS[active];
    const ease = [0.22, 0.61, 0.36, 1]; // smooth

    return (
        <section className="bg-[#EFF3F6] px-16 xl:px-20 py-14">
            <div className="mx-auto max-w-[1180px]">
                {/* Header */}
                <header className="mb-8">
                    <h1 className={`text-[#0E234E] text-[44px] md:text-[48px] leading-[1] font-[300] ${gotham.className}`}>
                        Our World-class Facilities
                    </h1>

                    {/* EXACTLY one line on xl+, small size like the mock */}
                    <p className={`mt-3 text-[16px] md:text-[15px] leading-[1.75] font-[400] text-[#162033]/90 ${sora.className}`}>
                        From cutting-edge trading halls to essential on-site services, every facility at Bharat Diamond Bourse is designed to support efficiency, security, and seamless business operations.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
                    {/* LEFT LIST */}
                    <div className="space-y-3">
                        {ROWS.map((row, i) => {
                            const isActive = i === active;
                            return (
                                <button
                                    key={row.name}
                                    onClick={() => setActive(i)}
                                    className={[
                                        "group relative w-full overflow-hidden rounded-[14px] min-h-[72px]",
                                        "px-5 md:px-6 flex items-center justify-between text-left",
                                        "transform-gpu transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4A8F]/40",
                                        "hover:-translate-y-px",
                                        !isActive
                                            ? "bg-white shadow-[0_1px_1px_rgba(16,24,40,.04),0_6px_18px_rgba(16,24,40,.08)] ring-1 ring-[rgba(20,33,61,0.10)] text-[#0E234E]"
                                            : "text-white bg-[linear-gradient(180deg,#1F356B_0%,#0E234E_100%)] shadow-[0_8px_24px_rgba(14,35,78,.30),0_2px_6px_rgba(14,35,78,.18)]",
                                    ].join(" ")}
                                >
                                    {isActive && (
                                        <span className="pointer-events-none absolute inset-0" aria-hidden="true">
                      <span className="absolute left-0 right-0 top-0 h-[38%] bg-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_100%)]" />
                    </span>
                                    )}

                                    <span className="flex items-center gap-4">
                    <span
                        className={[
                            "inline-flex items-center justify-center w-12 h-12 rounded-[12px]",
                            "transform-gpu transition-transform duration-200 group-hover:scale-[1.02]",
                            isActive
                                ? "bg-white border border-white/30 shadow-[0_1px_2px_rgba(16,24,40,.06)]"
                                : "bg-[#F2F4F6] border border-[rgba(20,33,61,.08)] shadow-[0_1px_2px_rgba(16,24,40,.06)]",
                        ].join(" ")}
                    >
                      <Image src={row.iconSrc} alt={`${row.name} icon`} width={22} height={22} />
                    </span>

                    <span className={[`${gothamLight.className} text-[20px] leading-[1] tracking-[0.2px]`, isActive ? `text-white` : `text-[#0E234E]`].join(" ")}>
                      {row.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </span>

                                    <Arrow color={isActive ? "#FFFFFF" : "#C5CAD1"} size={24} stroke={2} className="transform-gpu transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT PANEL (Framer Motion) */}
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`media-${active}`}
                                initial={{ opacity: 0, scale: 1.015 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.01 }}
                                transition={{ duration: 0.75, ease }}
                                className="rounded-[16px] overflow-hidden border border-[rgba(20,33,61,.10)] bg-white"
                            >
                                <Image
                                    src={current.img}
                                    alt={current.name}
                                    width={1200}
                                    height={800}
                                    className="h-[300px] w-full object-cover md:h-[320px]"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`copy-${active}`}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.55, ease, delay: 0.1 }}
                                className="mt-4 md:mt-6 space-y-4"
                            >
                                <p className={`${sora.className} text-justify text-[16px] md:text-[17px] leading-[1.75] font-[400] text-[#162033]/90`}>
                                    {current.copy}
                                </p>

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
                  <span>Learn more </span>
                  <Arrow
                    color="#FFFFFF"
                    size={16}
                    stroke={2}
                    className="ml-3 transform-gpu transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
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