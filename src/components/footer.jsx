"use client";

import Image from "next/image";
import Link from "next/link";
import { Sora } from 'next/font/google';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

/** Small inline wrapper for the icons/emoji so they always render consistently */
function FieldIcon({ children }) {
    return (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-[#0E234E]/8 text-[#0E234E] mr-3 shrink-0">
      {children}
    </span>
    );
}

export default function Footer() {
    return (
        <footer className={`px-4 sm:px-6 lg:px-8 py-10 ${sora.className}`}>
            <div className="mx-auto rounded-[22px] border border-[#E1E6EF] bg-white overflow-hidden">
                {/* Top banner */}
                <div className="bg-[linear-gradient(180deg,#112C58_0%,#0E234E_100%)] px-5 md:px-7 py-5 md:py-6 rounded-t-[22px] rounded-b-[22px]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h3 className="font-carentro text-white text-[26px] md:text-[34px] leading-tight">
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
                            <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                                Office
                            </h4>

                            <div className="space-y-4 text-[#0E1425]/85 text-[14px]">
                                <div className="flex items-start gap-3">
                                    <Link href="#" aria-label="location" className="hover:opacity-80 shrink-0 mt-0.5">
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
                                    <Link href="#" aria-label="phone" className="hover:opacity-80 shrink-0">
                                        <Image
                                            src="/footer/phone-icon.png"
                                            alt="Phone"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                    <p>+91 22 3392 1500</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Link href="#" aria-label="email" className="hover:opacity-80 shrink-0">
                                        <Image
                                            src="/footer/email-icon.png"
                                            alt="Email"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                    </Link>
                                    <p>support@bdbindia.org</p>
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
                            ].map((item) => (
                                <li key={item} className="list-disc ml-5 marker:text-[#A6AFBE]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation (md: 3/12) */}
                    <nav className="w-full md:w-3/12 p-6 md:p-7">
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
                            ].map((item) => (
                                <li key={item} className="list-disc ml-5 marker:text-[#A6AFBE]">
                                    <Link href="#" className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Stay Connected + Logo (md: 3/12) */}
                    <div className="w-full md:w-3/12 p-6 md:p-7 flex flex-col justify-between">
                        <div className="w-full">
                            <h4 className="font-carentro text-[#A6AFBE] tracking-[2px] uppercase text-[13px] mb-4">
                                Stay Connected
                            </h4>
                            <div className="flex items-center gap-4 text-[#0E234E]">
                                <Link href="#" aria-label="X (Twitter)" className="hover:opacity-80">
                                    <Image
                                        src="/footer/twitter-icon.png"
                                        alt="Twitter"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </Link>
                                <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                                    <Image
                                        src="/footer/instagram-icon.png"
                                        alt="Instagram"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </Link>
                                <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                                    <Image
                                        src="/footer/linkedin-icon.png"
                                        alt="LinkedIn"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </Link>
                                <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                                    <Image
                                        src="/footer/facebook-icon.png"
                                        alt="Facebook"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-10 md:mt-auto flex justify-end">
                            <Image
                                src="/bdb-logo-black-font.png"
                                alt="Bharat Diamond Bourse"
                                width={190}
                                height={120}
                                className="h-auto w-[160px] md:w-[190px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}