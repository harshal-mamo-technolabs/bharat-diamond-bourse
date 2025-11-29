"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Load Gotham from OTF (replaces Carentro)
const gotham = localFont({
  src: "../../../public/fonts/Gotham.otf",
  weight: "400",
  style: "normal",
});

const gothamLight = localFont({
  src: "../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
})

// Load Sora font
const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ITEMS = [
  { title: "Bank", src: "/Bank.png" },
  { title: "Restaurants", src: "/restaurent.png" },
  { title: "Sports", src: "/sport.png" },
  { title: "MDMA Diamond Hall", src: "/MDMA-Diamond-Hall.png" },
  { title: "Convention Hall", src: "/Convention-Hall.png" },
  { title: "IDTC", src: "/IDTC.png" },
];

function widthClass(rel) {
  const a = Math.abs(rel);
  if (a === 0) {
    return [
      "w-[80vw] sm:w-[60vw] lg:w-[20vw]", // Reduced from 24vw to 20vw for center card on md+ screens
      "min-w-[280px] lg:min-w-[20vw]", // Reduced from 24vw to 20vw
      "max-w-[600px]", // Reduced from 680px
    ].join(" ");
  }
  if (a === 1) {
    return [
      "w-[76vw] sm:w-[56vw] lg:w-[20vw]", 
      "min-w-[260px] lg:min-w-[20vw]", 
      "max-w-[640px]", 
    ].join(" ");
  }
  return [
    "w-[76vw] sm:w-[56vw] lg:w-[20vw]", 
    "min-w-[260px] lg:min-w-[20vw]", 
    "max-w-[640px]", 
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

// Function to determine visibility
function visibilityClass(rel) {
  const absRel = Math.abs(rel);
  // Show only 3 cards: -1, 0, +1 positions
  if (absRel <= 1) {
    return "opacity-100 visible";
  }
  // Hide cards beyond the 3 visible ones but keep them in DOM for scrolling
  return "opacity-0 invisible pointer-events-none";
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Navigation functions
  const goToNext = () => {
    const nextIndex = activeRef.current + 1;
    scrollToIndex(nextIndex);
    // Reset auto-play timer when manually navigating
    resetAutoPlay();
  };

  const goToPrev = () => {
    const prevIndex = activeRef.current - 1;
    scrollToIndex(prevIndex);
    // Reset auto-play timer when manually navigating
    resetAutoPlay();
  };

  // Auto-slide functionality
  const resetAutoPlay = () => {
    setIsAutoPlaying(true);
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

  // Auto-sliding effect
  useEffect(() => {
    if (!isAutoPlaying || !ready) return;

    const intervalId = setInterval(() => {
      const nextIndex = activeRef.current + 1;
      scrollToIndex(nextIndex);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, ready]);

  // Pause auto-play on hover
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const LOOP_ITEMS = Array.from({ length: LOOPS }, () => ITEMS).flat();
  const baseIndex = (idx) => ((idx % ITEMS.length) + ITEMS.length) % ITEMS.length;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Professional button animation variants
  const buttonVariants = {
    initial: { 
      scale: 1,
      backgroundColor: "#F2F4F6",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#E5E7EB",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: { 
      scale: 0.95,
      backgroundColor: "#D1D5DB",
      boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <section className="">
      {/* Updated container with consistent max-w-7xl and padding */}
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <h2
          className={`text-[#CBD3DD] text-center leading-none select-none pointer-events-none mb-8 sm:mb-10 tracking-[0.035em] ${gothamLight.className}`}
          style={{ fontSize: "clamp(34px, 6.2vw, 66px)" }}
        >
          Our Facilities
        </h2>

        {/* Scrollable carousel section - now contained within max-w-7xl */}
        <div className="relative overflow-visible">
          <div
            ref={scrollerRef}
            className={[
              "overflow-x-auto pt-8",
              "flex items-start gap-[3vw] lg:gap-[1.5vw] px-[3vw] lg:px-[2vw] pb-2",
              "[-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
              "cursor-grab active:cursor-grabbing", // Better cursor feedback
            ].join(" ")}
          >
            {LOOP_ITEMS.map((item, i) => {
              const rel = i - active;
              const isActive = rel === 0;

              return (
                <motion.div
                  key={`${item.src}-${i}`}
                  ref={(el) => {
                    if (el) itemsRef.current[i] = el;
                  }}
                  onClick={() => {
                    scrollToIndex(i);
                    resetAutoPlay();
                  }}
                  className={[
                    "shrink-0 relative transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform",
                    widthClass(rel),
                    offsetClass(rel),
                    visibilityClass(rel), // Add visibility control
                    isActive ? "z-10" : "z-0",
                  ].join(" ")}
                  whileHover={{ 
                    scale: isActive ? 1.02 : 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  {isActive ? (
                    // Frame removed for active card
                    <div className="relative">
                      <div className="relative h-[72vw] sm:h-[54vw] lg:h-[400px] w-full overflow-hidden rounded-md"> {/* Reduced height for center card */}
                        <img
                          src={item.src}
                          alt={item.title.replace("\n", " ")}
                          decoding="async"
                          loading="eager"
                          className="block w-full h-full object-cover"
                        />
                      </div>

                      <div className="mt-4 rounded-md bg-[#0E234E] text-white px-5 py-4 flex items-center justify-between">
                        <div className={`text-[14px] leading-tight whitespace-pre-line ${sora.className}`}>{item.title}</div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="relative h-[72vw] sm:h-[54vw] lg:h-[420px] w-full overflow-hidden rounded-md">
                        <Image
                          src={item.src}
                          alt={item.title.replace("\n", " ")}
                          fill
                          className="object-cover brightness-[0.98] saturate-[0.9] contrast-[0.98]"
                          sizes="100vw"
                        />
                      </div>
                      <div className="mt-4 text-[#0E234E]/90 flex items-start justify-between">
                        <div className={`text-[14px] leading-snug whitespace-pre-line ${sora.className}`}>{item.title}</div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-3 mt-1 text-[#0E234E]/60 shrink-0" aria-hidden>
                          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Single jointed underline indicator */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="relative h-1 w-70 md:w-95 bg-[#0E234E]/20">
            <div 
              className="absolute top-0 left-0 h-full bg-[#0E234E] rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: `${(100 / ITEMS.length)}%`,
                transform: `translateX(${(baseIndex(active) * 100)}%)`
              }}
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-center items-center gap-2">
          <motion.div 
            className="flex space-x-3"
            variants={itemVariants}
          >
            <motion.button
              onClick={goToPrev}
              className="w-12 h-12 bg-[#F2F4F6] text-[#05183A] rounded-md flex items-center justify-center shadow-lg"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <FaArrowLeft className='w-3 h-3 justify-center'/>
            </motion.button>
            
            <motion.button
              onClick={goToNext}
              className="w-12 h-12 bg-[#F2F4F6] text-[#05183A] rounded-md flex items-center justify-center shadow-lg"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <FaArrowRight className='w-3 h-3 justify-center'/>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}