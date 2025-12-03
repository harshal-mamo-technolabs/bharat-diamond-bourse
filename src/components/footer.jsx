"use client";

import Image from "next/image";
import Link from "next/link";
import { Sora } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

/** Small inline wrapper for the icons/emoji so they always render consistently */
function FieldIcon({ children }) {
    return (
        <motion.span 
            className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#0E234E]/8 text-[#0E234E] mr-3 shrink-0"
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15, 
                duration: 0.8 
            }}
        >
            {children}
        </motion.span>
    );
}

// Animation variants - EXTREMELY SLOW & ELEGANT
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // Very slow stagger
            delayChildren: 0.6, // Long initial delay
            duration: 2, // Very long overall duration
            ease: [0.16, 1, 0.3, 1] // Custom easing for smoothness
        }
    }
};

const itemVariants = {
    hidden: { 
        y: 60, // Much larger starting offset
        opacity: 0,
        scale: 0.95
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 60, // Very soft spring
            damping: 25, // More damping for slower motion
            mass: 2, // Heavier feel
            duration: 1.2, // Long duration
            delay: 0.2
        }
    }
};

const fadeInUp = {
    hidden: { 
        y: 60, 
        opacity: 0,
        filter: "blur(5px)" // Added blur for smooth appearance
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.4, // Very slow fade in
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3
        }
    }
};

const slideInLeft = {
    hidden: { 
        x: -80, // Much larger starting offset
        opacity: 0,
        filter: "blur(8px)"
    },
    visible: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.6, // Very slow slide
            ease: [0.22, 1, 0.36, 1],
            delay: 0.4 // Longer delay
        }
    }
};

const scaleUp = {
    hidden: { 
        scale: 0.92, 
        opacity: 0,
        filter: "blur(4px)"
    },
    visible: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.2, // Slow scale animation
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    }
};

const socialIconVariants = {
    initial: { 
        scale: 1,
        rotate: 0,
        filter: "brightness(1)"
    },
    hover: { 
        scale: 1.12,
        rotate: 4,
        filter: "brightness(1.2)",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 12,
            mass: 1.5,
            duration: 0.8 // Slow hover
        }
    }
};

const listItemVariants = {
    hidden: { 
        x: -25, // Larger offset
        opacity: 0,
        filter: "blur(3px)"
    },
    visible: (i) => ({
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.15, // Very slow sequential appearance
            duration: 0.9, // Slow per item
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

const buttonHover = {
    rest: { 
        scale: 1,
        boxShadow: "0px 2px 4px rgba(26, 54, 93, 0.1)"
    },
    hover: { 
        scale: 1.02, // Very subtle scale
        boxShadow: "0px 4px 12px rgba(26, 54, 93, 0.2)",
        transition: {
            type: "spring",
            stiffness: 150, // Very soft spring
            damping: 25,
            mass: 2,
            duration: 0.8 // Slow hover animation
        }
    },
    tap: { 
        scale: 0.98,
        transition: {
            duration: 0.3 // Quicker tap feedback
        }
    }
};

// Contact items hover with slow, elegant movement
const contactItemHover = {
    rest: { 
        x: 0,
        scale: 1,
        filter: "brightness(1)"
    },
    hover: { 
        x: 10,
        scale: 1.01,
        filter: "brightness(1.05)",
        transition: {
            type: "spring",
            stiffness: 150, // Very soft
            damping: 20,
            mass: 2,
            duration: 0.7 // Slow movement
        }
    }
};

// Slow icon hover animation
const iconHover = {
    rest: { 
        scale: 1, 
        rotate: 0,
        filter: "brightness(1)"
    },
    hover: { 
        scale: 1.06, // Subtle scale
        rotate: 2, // Minimal rotation
        filter: "brightness(1.1)",
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 15,
            mass: 1.8,
            duration: 0.6 // Slow animation
        }
    }
};

// New: Slow pulse animation for the main container
const pulseAnimation = {
    initial: { 
        scale: 1,
        boxShadow: "0 0 0 0 rgba(14, 35, 78, 0)"
    },
    pulse: {
        scale: [1, 1.002, 1], // Extremely subtle pulse
        boxShadow: [
            "0 0 0 0 rgba(14, 35, 78, 0)",
            "0 0 0 10px rgba(14, 35, 78, 0.05)",
            "0 0 0 0 rgba(14, 35, 78, 0)"
        ],
        transition: {
            duration: 3, // Very slow pulse
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
        }
    }
};

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { 
        once: true, 
        amount: 0.05, // Trigger earlier
        margin: "0px 0px -100px 0px" // Add margin for earlier trigger
    });

    return (
        <motion.footer 
            ref={footerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`px-4 sm:px-6 lg:px-8 py-10 ${sora.className}`}
        >
            <motion.div 
                variants={scaleUp}
                initial="initial"
                animate="pulse"
                whileHover={{ 
                    scale: 1.002,
                    transition: { duration: 1.5 }
                }}
                className="mx-auto rounded-[22px] border border-[#E1E6EF] bg-white overflow-hidden"
            >
                {/* Top banner */}
                <motion.div 
                    variants={fadeInUp}
                    className="bg-[linear-gradient(180deg,#112C58_0%,#0E234E_100%)] px-5 md:px-7 py-5 md:py-6 rounded-t-[22px] rounded-b-[22px] relative overflow-hidden"
                >
                    {/* Animated gradient background */}
                    <motion.div 
                        className="absolute inset-0 opacity-0"
                        animate={{
                            opacity: [0, 0.1, 0],
                            background: [
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                            ]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                        <motion.h3 
                            variants={slideInLeft}
                            className="font-carentro text-white text-[26px] md:text-[34px] leading-tight"
                        >
                            Join the World of Diamond Trade
                        </motion.h3>

                        {/* Email pill */}
                        <motion.form
                            variants={fadeInUp}
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center w-full md:w-[380px] lg:w-[420px] bg-white/95 backdrop-blur-sm rounded-[14px] pl-6 pr-2 py-3 border border-gray-200"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="flex-1 bg-transparent outline-none text-[14px] text-gray-600 placeholder:text-gray-400 font-normal mr-1"
                            />
                            <motion.button
                                variants={buttonHover}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                                type="submit"
                                className="inline-flex items-center justify-center h-[35px] px-6 rounded-[12px] text-white text-[12px] font-semibold uppercase tracking-[0.5px]
                           bg-[#1a365d] hover:bg-[#2d4a6b] ml-2"
                            >
                                SUBMIT
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>

                {/* Columns — flex layout so vertical alignment stays consistent */}
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E1E6EF]/50">
                    {/* Office (md: 3/12) */}
                    <motion.div 
                        variants={itemVariants}
                        className="w-full md:w-3/12 p-6 md:p-7 flex flex-col justify-between"
                    >
                        <div className="w-full">
                            <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                                Office
                            </h4>

                            <div className="space-y-5 text-[#0E1425]/85 text-[14px]">
                                <motion.div 
                                    variants={contactItemHover}
                                    initial="rest"
                                    whileHover="hover"
                                    className="flex items-start gap-3"
                                >
                                    <motion.div 
                                        variants={iconHover}
                                        className="shrink-0 mt-0.5"
                                    >
                                        <Link href="#" aria-label="location" className="block">
                                            <Image
                                                src="/footer/location-icon.png"
                                                alt="Location"
                                                width={20}
                                                height={20}
                                                className="w-5 h-5"
                                            />
                                        </Link>
                                    </motion.div>
                                    <p className="leading-[1.6]">
                                        G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
                                        Maharashtra 400051
                                    </p>
                                </motion.div>

                                <motion.div 
                                    variants={contactItemHover}
                                    initial="rest"
                                    whileHover="hover"
                                    className="flex items-center gap-3"
                                >
                                    <motion.div 
                                        variants={iconHover}
                                        className="shrink-0"
                                    >
                                        <Link href="#" aria-label="phone" className="block">
                                            <Image
                                                src="/footer/phone-icon.png"
                                                alt="Phone"
                                                width={20}
                                                height={20}
                                                className="w-5 h-5"
                                            />
                                        </Link>
                                    </motion.div>
                                    <p>+91 22 3392 1500</p>
                                </motion.div>

                                <motion.div 
                                    variants={contactItemHover}
                                    initial="rest"
                                    whileHover="hover"
                                    className="flex items-center gap-3"
                                >
                                    <motion.div 
                                        variants={iconHover}
                                        className="shrink-0"
                                    >
                                        <Link href="#" aria-label="email" className="block">
                                            <Image
                                                src="/footer/email-icon.png"
                                                alt="Email"
                                                width={20}
                                                height={20}
                                                className="w-5 h-5"
                                            />
                                        </Link>
                                    </motion.div>
                                    <p>support@bdbindia.org</p>
                                </motion.div>
                            </div>
                        </div>

                        <motion.p 
                            variants={itemVariants}
                            className="mt-8 md:mt-auto text-[11px] text-black/70"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: [0.5, 1, 0.5],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            © 2025 Bharat Diamond Bourse. All Rights Reserved.
                        </motion.p>
                    </motion.div>

                    {/* Facilities (md: 3/12) */}
                    <motion.div 
                        variants={itemVariants}
                        className="w-full md:w-3/12 p-6 md:p-7"
                    >
                        <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                            Facilities
                        </h4>
                        <ul className="space-y-2 text-[#0E1425]/85 text-[14px]">
                            {[
                                "Banks",
                                "Internet Telecom",
                                "Restaurants",
                                "Online Trading",
                                "Bus Services",
                                "Testing Laboratories",
                                "Diamond Equipments",
                                "Trading Hall",
                                "Travel Agents",
                            ].map((item, index) => (
                                <motion.li 
                                    key={item} 
                                    custom={index}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    whileHover={{ 
                                        x: 10,
                                        color: "#0E234E",
                                        transition: { 
                                            duration: 0.5,
                                            ease: "easeOut" 
                                        }
                                    }}
                                    className="list-disc ml-5 marker:text-[#A6AFBE]/70 cursor-default hover:text-[#0E234E]"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Navigation (md: 3/12) */}
                    <motion.nav 
                        variants={itemVariants}
                        className="w-full md:w-3/12 p-6 md:p-7"
                    >
                        <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-[#0E1425]/85 text-[14px]">
                            {[
                                "Home",
                                "About Us",
                                "Gallery",
                                "Facilities",
                                "BDB Circulars",
                                "Member's Directory",
                                "BDB Forms",
                                "News & Events",
                                "Contact Us",
                                "Privacy Policy",
                                "Cookie Policy",
                            ].map((item, index) => (
                                <motion.li 
                                    key={item} 
                                    custom={index}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    whileHover={{ 
                                        x: 10,
                                        transition: { 
                                            duration: 0.5,
                                            ease: "easeOut" 
                                        }
                                    }}
                                    className="list-disc ml-5 marker:text-[#A6AFBE]/70"
                                >
                                    <Link href="#" className="hover:text-[#0E234E] hover:underline transition-colors duration-500">
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* Stay Connected + Logo (md: 3/12) */}
                    <motion.div 
                        variants={itemVariants}
                        className="w-full md:w-3/12 p-6 md:p-7 flex flex-col justify-between"
                    >
                        <div className="w-full">
                            <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                                Stay Connected
                            </h4>
                            <div className="flex items-center gap-4 text-[#0E234E]">
                                {[
                                    { src: "/footer/twitter-icon.png", alt: "Twitter", label: "X (Twitter)" },
                                    { src: "/footer/instagram-icon.png", alt: "Instagram", label: "Instagram" },
                                    { src: "/footer/linkedin-icon.png", alt: "LinkedIn", label: "LinkedIn" },
                                    { src: "/footer/facebook-icon.png", alt: "Facebook", label: "Facebook" },
                                ].map((social, index) => (
                                    <motion.div
                                        key={social.alt}
                                        custom={index}
                                        variants={socialIconVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap={{ scale: 0.95 }}
                                        animate={{
                                            y: [0, -3, 0],
                                            transition: {
                                                delay: index * 0.3,
                                                duration: 3,
                                                repeat: Infinity,
                                                repeatDelay: 2
                                            }
                                        }}
                                    >
                                        <Link href="#" aria-label={social.label} className="block">
                                            <Image
                                                src={social.src}
                                                alt={social.alt}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5"
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            variants={itemVariants}
                            className="mt-10 md:mt-auto flex justify-end"
                            whileHover={{ 
                                scale: 1.01,
                                transition: { 
                                    type: "spring", 
                                    stiffness: 200,
                                    damping: 20,
                                    duration: 0.8 
                                }
                            }}
                            animate={{
                                filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <Image
                                src="/bdb-logo-black-font.png"
                                alt="Bharat Diamond Bourse"
                                width={190}
                                height={120}
                                className="h-auto w-[160px] md:w-[190px]"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.footer>
    );
}