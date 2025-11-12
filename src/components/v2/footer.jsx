"use client";

import Image from "next/image";
import Link from "next/link";
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';

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
        { name: "Home", href: "/v3" },
        { name: "About Us", href: "/v3/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Facilities", href: "/v3/facilities" },
        { name: "BDB Circulars", href: "/v3/circulars" },
        { name: "Member's Directory", href: "/v3/members-directory" },
        { name: "BDB Forms", href: "/forms" },
        { name: "News & Events", href: "/v3/news&events" },
        { name: "Contact Us", href: "/v3/contact-us" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
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
            icon: "/footer/you-tube.png",
            ariaLabel: "You Tube"
        },
        { 
            name: "Instagram", 
            href: "https://www.instagram.com/bharatdiamondbourse/?hl=en", 
            icon: "/footer/instagram-icon.png",
            ariaLabel: "Instagram"
        },
        { 
            name: "LinkedIn", 
            href: "https://in.linkedin.com/company/bharat-diamond-bourse", 
            icon: "/footer/linkedin-icon.png",
            ariaLabel: "LinkedIn"
        },
    ];

    return (
        <footer className={`px-4 md:px-8 lg:px-16 xl:px-32 pb-10 ${sora.className}`}>
            <div className="mx-auto rounded-[22px] border border-[#E1E6EF] bg-white overflow-hidden">
                {/* Top banner */}
                <div className="bg-[linear-gradient(180deg,#112C58_0%,#0E234E_100%)] px-4 md:px-8 lg:px-16 xl:px-16 py-5 md:py-6 rounded-t-[22px] rounded-b-[22px]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h3 className={`${gotham.className} text-white text-[26px] md:text-[34px] leading-tight`}>
                            Join the World of Diamond Trade
                        </h3>

                        {/* Email pill */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center w-full md:w-[380px] lg:w-[420px] bg-white rounded-[14px] pl-6 pr-2 py-3 border border-gray-200"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="flex-1 bg-transparent outline-none text-[14px] text-gray-600 placeholder:text-gray-400 font-normal mr-1"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-[35px] px-6 rounded-[12px] text-white text-[12px] font-semibold uppercase tracking-[0.5px]
                           bg-[#1a365d] hover:bg-[#2d4a6b] active:scale-95 transition-all duration-300 ease-out ml-2"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>

                {/* Columns — flex layout so vertical alignment stays consistent */}
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E1E6EF]">
                    {/* Office (md: 3/12) */}
                    <div className="w-full md:w-3/12 p-6 md:p-7 flex flex-col justify-between">
                        <div className="w-full">
                            <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                                Office
                            </h4>

                            <div className="space-y-4 text-[#0E1425]/85 text-[14px]">
                                <div className="flex items-start gap-3">
                                    <Link 
                                        href="https://maps.google.com/?q=G+Block+BKC+Bandra+Kurla+Complex+Bandra+East+Mumbai+Maharashtra+400051" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label="View location on Google Maps" 
                                        className="hover:opacity-80 shrink-0 mt-0.5"
                                    >
                                        <Image
                                            src="/footer/location-icon.png"
                                            alt="Location"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                    <p className="leading-[1.6]">
                                        G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai,
                                        Maharashtra 400051
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="tel:+912233921500" 
                                        aria-label="Call +91 22 3392 1500" 
                                        className="hover:opacity-80 shrink-0"
                                    >
                                        <Image
                                            src="/footer/phone-icon.png"
                                            alt="Phone"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                    <Link href="tel:+912233921500" className="hover:underline">
                                        +91 22 3392 1500
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="mailto:support@bdbindia.org" 
                                        aria-label="Email support@bdbindia.org" 
                                        className="hover:opacity-80 shrink-0"
                                    >
                                        <Image
                                            src="/footer/email-icon.png"
                                            alt="Email"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                    <Link href="mailto:support@bdbindia.org" className="hover:underline">
                                        support@bdbindia.org
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 md:mt-auto text-[11px] text-black">
                            © 2025 Bharat Diamond Bourse. 
 All Rights Reserved.
                        </p>
                    </div>

                    {/* Facilities (md: 3/12) */}
                    <div className="w-full md:w-3/12 p-6 md:p-7">
                        <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                            Facilities
                        </h4>
                        <ul className="space-y-2 text-[#0E1425]/85 text-[14px]">
                            {facilitiesLinks.map((facility) => (
                                <li key={facility.name} className="list-disc ml-5 marker:text-[#A6AFBE]">
                                    <Link 
                                        href={facility.href} 
                                        className="hover:underline transition-colors duration-200"
                                    >
                                        {facility.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation (md: 3/12) */}
                    <nav className="w-full md:w-3/12 p-6 md:p-7" aria-label="Main navigation">
                        <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-[#0E1425]/85 text-[14px]">
                            {navigationLinks.map((link) => (
                                <li key={link.name} className="list-disc ml-5 marker:text-[#A6AFBE]">
                                    <Link 
                                        href={link.href} 
                                        className="hover:underline transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Stay Connected + Logo (md: 3/12) */}
                    <div className="w-full md:w-3/12 p-6 md:p-7 flex flex-col justify-between">
                        <div className="w-full">
                            <h4 className={`${gotham.className} text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4`}>
                                Stay Connected
                            </h4>
                            <div className="flex items-center gap-4 text-[#0E234E]">
                                {socialLinks.map((social) => (
                                    <Link 
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.ariaLabel}
                                        className="hover:opacity-80 transition-opacity duration-200"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}