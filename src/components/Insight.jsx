"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function Insights() {
    const insightCards = [
        {
            id: 1,
            image: "/insight/inside-bdb-global-network.png",
            title: "The Evolution of Diamond Trading in India",
            description:
                "Discover how Bharat Diamond Bourse transformed India's diamond industry into a global powerhouse...",
            href: "#",
        },
        {
            id: 2,
            image: "/insight/diamond-certification-and-grading.png",
            title: "Diamond Certification & Grading",
            description:
                "Learn why accurate certification is vital for global trade, and how state-of-the-art testing laboratories at BDB...",
            href: "#",
        },
        {
            id: 3,
            image: "/insight/the-evolution-of-diamond-trading-in-india.png",
            title: "Connecting: Inside BDB’s Global Network",
            description:
                "Explore how BDB facilitates international partnerships, connecting thousands of traders, suppliers, and...",
            href: "#",
        },
    ];

    const cardBg = "#F2F4F6";

    // Fade/slide-in on enter view with stagger (no TS)
    const refs = useRef([]);
    useEffect(() => {
        const els = refs.current.filter(Boolean);
        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target;
                        el.classList.remove("opacity-0", "translate-y-4");
                        el.classList.add("opacity-100", "translate-y-0");
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.15 }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className={`font-carentro text-[#0E234E] text-[32px] md:text-[42px] lg:text-[48px] leading-tight ${carentro.className}`}>
                        INSIGHTS FROM THE DIAMOND TRADE
                    </h2>
                    <p className={`mx-auto mt-4 max-w-5xl text-[16px] md:text-[16px] leading-relaxed text-[#0E1425]/70 ${sora.className}`}>
                        Stay informed with expert perspectives, industry updates, and stories that shape the global gem and jewelry
                        market. From trade trends to infrastructure innovations, explore what's happening at the heart of diamond commerce.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {insightCards.map((card, i) => (
                        <article
                            key={card.id}
                            ref={(el) => (refs.current[i] = el)}
                            className="
                group relative rounded-[20px] bg-[#F2F4F6]
                ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                transition-all duration-500 ease-out
                opacity-0 translate-y-4
                hover:-translate-y-1 hover:shadow-lg
                active:scale-[0.99]
                will-change-transform
                motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0
              "
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            {/* Image wrapper */}
                            <div className="relative mx-5 mt-5">
                                <div className="relative h-[240px] w-full overflow-hidden rounded-[12px] bg-gray-100">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                                        sizes="(min-width:1024px) 360px, (min-width:768px) 50vw, 100vw"
                                        priority={card.id === 1}
                                    />
                                </div>

                                {/* Arrow holder overlays the image corner to fake the notch */}
                                <button
                                    type="button"
                                    aria-label="Open"
                                    className="
                    absolute -right-px -top-px z-20 grid h-9 w-9 place-items-center
                    rounded-bl-[12px]
                    transition-colors duration-300
                    hover:bg-[#0E234E]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E] focus-visible:ring-offset-2
                  "
                                    style={{ backgroundColor: cardBg }}
                                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                    <Image src="/insight/arrow-icon-black.png" alt="" width={16} height={16} />
                  </span>
                                </button>
                            </div>

                            {/* Text */}
                            <div className="px-5 pb-6 pt-4">
                                <h3 className={`text-[20px] md:text-[22px] leading-snug text-[#0E234E] font-semibold ${sora.className}`}>
                                    {card.title}
                                </h3>
                                <p className={`mt-3 text-justify text-[14px] md:text-[15px] leading-relaxed text-[#0E1425]/70 ${sora.className}`}>
                                    {card.description}
                                </p>
                            </div>

                            {/* Whole card clickable + keyboard focus ring */}
                            <Link
                                href={card.href}
                                className="absolute inset-0 z-[1] rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E234E] focus-visible:ring-offset-2"
                                aria-label={card.title}
                            />
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="#"
                        className="
              group inline-flex items-center gap-3 rounded-[12px]
              bg-[#0E234E] px-8 py-4 text-[13px] sm:text-[14px]
              font-semibold uppercase tracking-[0.14em] text-white
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_20px_rgba(2,6,23,0.18)]
              ring-1 ring-black/5
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_28px_rgba(2,6,23,0.22)]
              active:translate-y-0
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E234E]
            "
                        aria-label="View News and Events"
                    >
                        View News & Events
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12h14M13 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
