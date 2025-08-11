"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const carentro = localFont({
  src: "../../../public/fonts/Carentro.otf",
  weight: "400",
  style: "normal",
});

export default function Insights() {
  const insightCards = [
    {
      id: 1,
      image: "/insight/the-evolution-of-diamond-trading-in-india.png",
      title: "The Evolution of Diamond Trading in India",
      description:
        "Discover how Bharat Diamond Bourse transformed India's diamond industry into a global powerhouse with world-class infrastructure and international trust.",
      href: "#",
    },
    {
      id: 2,
      image: "/insight/diamond-certification-and-grading.png",
      title: "Diamond Certification & Grading",
      description:
        "Learn why accurate certification is vital for global trade, and how state-of-the-art testing laboratories at BDB uphold the highest standards of transparency, authenticity.",
      href: "#",
    },
    {
      id: 3,
      image: "/insight/inside-bdb-global-network.png",
      title: "Connecting: Inside BDB’s Global Network",
      description:
        "Explore how BDB facilitates international partnerships, connecting thousands of traders, suppliers, and industry professionals under one secure roof.",
      href: "#",
    },
  ];

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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-14">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={`text-[#b5872c] text-[32px] md:text-[42px] lg:text-[48px] leading-tight ${carentro.className}`}
          >
            INSIGHTS FROM THE DIAMOND TRADE
          </h2>
          <p
            className={`mx-auto mt-4 max-w-5xl text-[16px] md:text-[18px] leading-relaxed text-[#0E1425]/70 ${spaceGrotesk.className}`}
          >
            Stay informed with expert perspectives, industry updates, and
            stories that shape the global gem and jewelry market. From trade
            trends to infrastructure innovations, explore what's happening at
            the heart of diamond commerce.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insightCards.map((card, i) => (
            <article
              key={card.id}
              ref={(el) => (refs.current[i] = el)}
              className="
                group relative rounded-[8px] bg-white border border-[#e5e7eb]
                transition-all duration-500 ease-out
                opacity-0 translate-y-4
                hover:-translate-y-1 hover:shadow-lg
                will-change-transform
              "
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 360px, (min-width:768px) 50vw, 100vw"
                  priority={card.id === 1}
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3
                  className={`text-[18px] md:text-[20px] font-semibold text-[#0E234E] leading-snug ${carentro.className}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-3 text-[14px] leading-relaxed text-[#0E1425]/70 ${spaceGrotesk.className}`}
                >
                  {card.description}
                </p>

                {/* Read Blog CTA */}
                <Link
                  href={card.href}
                  className={`mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-[#0E234E] ${spaceGrotesk.className}`}
                >
                  Read Blog
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
