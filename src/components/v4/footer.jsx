"use client";

import Link from "next/link";
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';
import { FaMapMarkerAlt, FaPhoneAlt , FaEnvelope } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// Load Gotham from OTF (replaces Carentro)
const gotham = localFont({
  src: '../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

/** Small inline wrapper for the icons/emoji so they always render consistently */
function FieldIcon({ children }) {
    return (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#0E234E]/8 text-[#0E234E] mr-3 shrink-0">
      {children}
    </span>
    );
}

export default function Footer() {
    // Navigation links with proper routes
    const navigationLinks = [
        { name: "Home", href: "/v4" },
        { name: "About Us", href: "/v3/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Facilities", href: "/v3/facilities" },
        { name: "BDB Circulars", href: "/v3/circulars" },
        { name: "Member's Directory", href: "/v3/members-directory" },
        // { name: "BDB Forms", href: "/forms" },
        { name: "News & Events", href: "/v3/news&events" },
        { name: "Contact Us", href: "/v3/contact-us" },
        // { name: "Privacy Policy", href: "/privacy-policy" },
        // { name: "Cookie Policy", href: "/cookie-policy" },
    ];

    // Facilities links - you can create individual pages or use anchor links
    const facilitiesLinks = [
        { name: "Banks", href: "/facilities#banks" },
        { name: "Internet Telecom", href: "/facilities#internet-telecom" },
        { name: "Restaurants", href: "/v3/resturants" },
        { name: "Online Trading", href: "/facilities#online-trading" },
        { name: "Bus Services", href: "/facilities#bus-services" },
        { name: "Testing Laboratories", href: "/facilities#testing-labs" },
        { name: "Diamond Equipments", href: "/facilities#equipments" },
        { name: "Trading Hall", href: "/facilities#trading-hall" },
        { name: "Travel Agents", href: "/facilities#travel-agents" },
    ];

    // Social media links
    const socialLinks = [
        { 
            name: "You Tube", 
            href: "https://youtube.com/@bharatdiamondbourse?si=Gmf8Og-vbMyfJ6-o", 
            icon: <FaYoutube className="w-6 h-6" />,
            ariaLabel: "You Tube"
        },
        { 
            name: "Instagram", 
            href: "https://www.instagram.com/bharatdiamondbourse/?hl=en", 
            icon: <FaInstagram className="w-6 h-6" />,
            ariaLabel: "Instagram"
        },
        { 
            name: "LinkedIn", 
            href: "https://in.linkedin.com/company/bharat-diamond-bourse", 
            icon: <FaLinkedin className="w-6 h-6" />,
            ariaLabel: "LinkedIn"
        },
    ];

    return (
        <footer className={`w-full pb-0 ${sora.className} relative overflow-hidden`}>
            {/* Animated Background with Diamond Video */}
            <div className="absolute inset-0 z-0">
                {/* Diamond Video Background */}
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/diamond-video-1.webm" type="video/webm" />
                    <source src="/diamond-video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A]/90 via-[#0E234E]/80 to-[#152A5B]/90">
                    {/* Animated Sparkle Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
                        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse opacity-25"></div>
                        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-35"></div>
                        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-pulse opacity-20"></div>
                    </div>
                    
                    {/* Moving Gradient Orbs */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#1E3A8A]/20 to-[#3B82F6]/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#0EA5E9]/15 to-[#0369A1]/10 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/15 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto rounded-b-[22px] overflow-hidden">
                {/* Navigation & Facilities Section */}
                <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 relative z-20">
                    {/* Navigation */}
                    <div className="mb-6">
                        <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                            Navigation
                        </h4>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-white/90 text-[14px]">
                            {navigationLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={link.href} 
                                    className="hover:text-white hover:underline transition-all duration-200 px-2 py-1 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Big Dash Line */}
                    <div className="border-t border-[#3A4A76] my-6"></div>

                    {/* Office & Facilities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Office Information */}
                        <div>
                            <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                                Office
                            </h4>
                            <div className="space-y-4 text-white/85 text-[14px]">
                                <div className="flex items-start gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
                                    <Link 
                                        href="https://maps.google.com/?q=G+Block+BKC+Bandra+Kurla+Complex+Bandra+East+Mumbai+Maharashtra+400051" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label="View location on Google Maps" 
                                        className="hover:opacity-80 shrink-0 mt-0.5"
                                    >
                                        <FaMapMarkerAlt className="w-5 h-5 text-white" />
                                    </Link>
                                    <p className="leading-[1.6]">
                                        G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
                                        Maharashtra 400051
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
                                    <Link 
                                        href="tel:+912233921500" 
                                        aria-label="Call +91 22 3392 1500" 
                                        className="hover:opacity-80 shrink-0"
                                    >
                                        <FaPhoneAlt  className="w-5 h-5 text-white" />
                                    </Link>
                                    <Link href="tel:+912233921500" className="hover:underline hover:text-white transition-colors">
                                        +91 22 3392 1500
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-lg p-3">
                                    <Link 
                                        href="mailto:support@bdbindia.org" 
                                        aria-label="Email support@bdbindia.org" 
                                        className="hover:opacity-80 shrink-0"
                                    >
                                        <FaEnvelope className="w-5 h-5 text-white" />
                                    </Link>
                                    <Link href="mailto:support@bdbindia.org" className="hover:underline hover:text-white transition-colors">
                                        support@bdbindia.org
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                                Facilities
                            </h4>
                            <div className="grid grid-cols-2 gap-2 text-white/85 text-[14px]">
                                {facilitiesLinks.map((facility) => (
                                    <Link 
                                        key={facility.name}
                                        href={facility.href} 
                                        className="hover:text-white hover:underline transition-colors duration-200 px-3 py-2 rounded backdrop-blur-sm bg-white/5 hover:bg-white/10"
                                    >
                                        {facility.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Big Dash Line */}
                    <div className="border-t border-[#3A4A76] my-6"></div>

                    {/* Stay Connected Section */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 backdrop-blur-sm bg-white/5 rounded-2xl p-6">
                        {/* Stay Connected Text */}
                        <div className="flex-1">
                            <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                                Stay Connected
                            </h4>
                            <p className="text-white/80 text-[14px]">
                                Follow us on social media for the latest updates and news
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.ariaLabel}
                                    className="hover:scale-110 transition-transform duration-200 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                                >
                                    <div className="text-white">
                                        {social.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Big Dash Line */}
                    <div className="border-t border-[#3A4A76] my-6"></div>

                    {/* Join the World Section */}
                    <div className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-8">
                        <h3 className={`${gotham.className} text-white text-[26px] md:text-[34px] leading-tight mb-6`}>
                            Join the World of Diamond Trade
                        </h3>

                        {/* Email Input */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="flex-1 w-full sm:max-w-md bg-white/10 border border-[#3A4A76] rounded-[14px] px-6 py-4 text-white placeholder:text-white/60 outline-none focus:border-[#5A6BA8] transition-colors backdrop-blur-sm"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-white text-[14px] font-semibold uppercase tracking-[0.5px] bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#051a54] active:scale-95 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="bg-[#0A1A3A]/80 backdrop-blur-sm px-4 md:px-8 lg:px-16 xl:px-32 py-4 border-t border-[#3A4A76] relative z-20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-[14px] text-white/60 text-center md:text-left">
                            © 2025 Bharat Diamond Bourse. All Rights Reserved.
                        </p>
                        <div className="flex items-center justify-center md:justify-end gap-6 text-[14px] text-white/60">
                            <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/cookie-policy" className="hover:text-white hover:underline transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animations to global CSS */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateX(0px) translateY(0px); }
                    33% { transform: translateX(20px) translateY(-15px); }
                    66% { transform: translateX(-15px) translateY(10px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.2; transform: scale(1.1); }
                }
                .animate-float {
                    animation: float 15s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 20s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
}