"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Sora } from "next/font/google";

// Load Gotham from OTF (replaces Carentro)
const gotham = localFont({
  src: "../../../public/fonts/Gotham.otf",
  weight: "400",
  style: "normal",
});

// Load Sora font
const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ITEMS = [
  { title: "Empowering Diamond\nTrade", src: "/pillar-of-progress/empowering-diamond-trade.jpg" },
  { title: "Boosting Imports\n& Exports", src: "/pillar-of-progress/boosting-imports-and-exports.jpg" },
  { title: "Connecting Trade\n& Industry", src: "/pillar-of-progress/connecting-trade-and-industry.jpg" },
  { title: "Positioning Modern\nIndia", src: "/pillar-of-progress/positioning-modern-india.jpg" },
  { title: "Supporting Business\nInfrastructure", src: "/bdb-image-2.png" },
];

function widthClass(rel) {
  const a = Math.abs(rel);
  if (a === 0) {
    return [
      "w-[72vw] sm:w-[54vw] lg:w-[19vw]", // match largest width
      "min-w-[260px] lg:min-w-[19vw]", // prevent shrink
      "max-w-[600px]",
    ].join(" ");
  }
  if (a === 1) {
    return [
      "w-[68vw] sm:w-[50vw] lg:w-[17vw]",
      "min-w-[240px] lg:min-w-[17vw]",
      "max-w-[560px]",
    ].join(" ");
  }
  return [
    "w-[68vw] sm:w-[50vw] lg:w-[17vw]",
    "min-w-[240px] lg:min-w-[17vw]",
    "max-w-[560px]",
  ].join(" ");
}

function offsetClass(rel) {
  switch (rel) {
    case -2:
      return "-translate-y-2 sm:-translate-y-3";
    case -1:
      return "translate-y-3 sm:translate-y-4";
    case 0:
      return "-translate-y-6 sm:-translate-y-7";
    case 1:
      return "translate-y-3 sm:translate-y-4";
    case 2:
      return "-translate-y-2 sm:-translate-y-3";
    default:
      return "";
  }
}

export default function PillarOfProgress() {
  const scrollerRef = useRef(null);
  const itemsRef = useRef([]);

  const LOOPS = 9;
  const TOTAL = ITEMS.length * LOOPS;
  const MIDDLE_START = Math.floor(LOOPS / 2) * ITEMS.length;

  const [active, setActive] = useState(MIDDLE_START + 2);
  const activeRef = useRef(MIDDLE_START + 2);
  const [ready, setReady] = useState(false);

  const scrollToIndex = (i, smooth = true) => {
    const scroller = scrollerRef.current;
    const el = itemsRef.current[i];
    if (!scroller || !el) return;
    const target = el.offsetLeft - scroller.clientWidth / 2 + el.clientWidth / 2;

    if (smooth) {
      const start = scroller.scrollLeft;
      const change = target - start;
      const duration = 800;
      let startTime = null;

      const animateScroll = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // easeInOutQuad
        scroller.scrollLeft = start + change * ease;
        if (progress < 1) requestAnimationFrame(animateScroll);
      };
      requestAnimationFrame(animateScroll);
    } else {
      scroller.scrollLeft = target;
    }
  };

  const updateActiveFromScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const centerX = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
    let best = 0,
      bestDist = Infinity,
      secondBestDist = Infinity,
      secondBest = 0;
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(centerX - (rect.left + rect.width / 2));
      if (dist < bestDist) {
        secondBest = best;
        secondBestDist = bestDist;
        bestDist = dist;
        best = i;
      } else if (dist < secondBestDist) {
        secondBestDist = dist;
        secondBest = i;
      }
    });
    const currentBestDist = itemsRef.current[activeRef.current]
      ? Math.abs(
          centerX -
            (itemsRef.current[activeRef.current].getBoundingClientRect().left +
              itemsRef.current[activeRef.current].getBoundingClientRect().width / 2)
        )
      : Infinity;
    if (best !== activeRef.current && bestDist + 6 < currentBestDist) {
      setActive(best);
    } else if (best === activeRef.current) {
      setActive(best);
    }
  };

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useLayoutEffect(() => {
    scrollToIndex(active, false);
    requestAnimationFrame(() => {
      updateActiveFromScroll();
      requestAnimationFrame(() => setReady(true));
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        updateActiveFromScroll();
      });
    };
    const onResize = () => {
      scrollToIndex(activeRef.current, false);
      updateActiveFromScroll();
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (active < ITEMS.length) {
      const newIndex = active + ITEMS.length;
      scrollToIndex(newIndex, false);
      setActive(newIndex);
      return;
    }
    if (active > TOTAL - ITEMS.length - 1) {
      const newIndex = active - ITEMS.length;
      scrollToIndex(newIndex, false);
      setActive(newIndex);
    }
  }, [active, ready]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = activeRef.current + 1;
      scrollToIndex(nextIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const LOOP_ITEMS = Array.from({ length: LOOPS }, () => ITEMS).flat();
  const baseIndex = (idx) => ((idx % ITEMS.length) + ITEMS.length) % ITEMS.length;

  return (
    <section className="bg-white pt-10 pb-12 sm:pb-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-[#CBD3DD] text-center leading-none select-none pointer-events-none mb-8 sm:mb-10 tracking-[0.035em] ${gotham.className}`}
          style={{ fontSize: "clamp(34px, 6.2vw, 66px)" }}
        >
          Our Pillars Of Progress
        </h2>
      </div>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible">
        <div
          ref={scrollerRef}
          className={[
            "overflow-x-auto pt-8",
            "flex items-start gap-[3vw] lg:gap-[2vw] px-[3vw] lg:px-[2vw] pb-2",
            "[-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {LOOP_ITEMS.map((item, i) => {
            const rel = i - active;
            const isActive = rel === 0;

            return (
              <div
                key={`${item.src}-${i}`}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                onClick={() => scrollToIndex(i)}
                className={[
                  "shrink-0 relative transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform",
                  widthClass(rel),
                  offsetClass(rel),
                  isActive ? "z-10" : "z-0",
                ].join(" ")}
              >
                {isActive ? (
                  // Frame removed for active card
                  <div className="relative">
                    <div className="relative h-[64vw] sm:h-[48vw] lg:h-[360px] w-full overflow-hidden rounded-[8px]">
                      <img
                        src={item.src}
                        alt={item.title.replace("\n", " ")}
                        decoding="async"
                        loading="eager"
                        className="block w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-3 rounded-[14px] bg-[#0E234E] text-white px-4 py-3 flex items-center justify-between">
                      <div className={`text-[13px] leading-tight whitespace-pre-line ${sora.className}`}>{item.title}</div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative h-[64vw] sm:h-[48vw] lg:h-[360px] w-full overflow-hidden rounded-[8px]">
                      <Image
                        src={item.src}
                        alt={item.title.replace("\n", " ")}
                        fill
                        className="object-cover brightness-[0.98] saturate-[0.9] contrast-[0.98]"
                        sizes="100vw"
                      />
                    </div>
                    <div className="mt-3 text-[#0E234E]/90 flex items-start justify-between">
                      <div className={`text-[13px] leading-snug whitespace-pre-line ${sora.className}`}>{item.title}</div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-3 mt-1 text-[#0E234E]/60 shrink-0" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {ITEMS.map((_, i) => {
          const isActiveDot = baseIndex(active) === i;
          const targetIndex = MIDDLE_START + i;
          return (
            <button
              key={i}
              onClick={() => scrollToIndex(targetIndex)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                isActiveDot ? "w-5 bg-[#0E234E]" : "w-1.5 bg-[#0E234E]/30 hover:bg-[#0E234E]/50",
              ].join(" ")}
            />
          );
        })}
      </div>
    </section>
  );
}
