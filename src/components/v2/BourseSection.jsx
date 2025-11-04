"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

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

const STATS = [
    { value: "2500", label: "Diamond Offices" },
    { value: "9", label: "Interconnected Towers" },
    { value: "2 M+", label: "sq. ft. of Office Space" },
    { value: "#1", label: "Largest Diamond Bourse" },
];

export default function BourseSection() {
    const videoRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [error, setError] = useState("");
    const reduce = useReducedMotion();

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onError = () => setError("Video failed to load. Check the path/format.");

        el.addEventListener("play", onPlay);
        el.addEventListener("pause", onPause);
        el.addEventListener("error", onError);
        return () => {
            el.removeEventListener("play", onPlay);
            el.removeEventListener("pause", onPause);
            el.removeEventListener("error", onError);
        };
    }, []);

    async function playVideo() {
        const el = videoRef.current;
        if (!el) return;
        setError("");
        try {
            await el.play();
        } catch {
            try {
                el.muted = true;
                await el.play();
            } catch {
                setError("Unable to start playback.");
            }
        }
    }
    function pauseVideo() {
        videoRef.current?.pause();
    }

    // Smooth timings
    const ease = [0.22, 0.61, 0.36, 1];
    const timings = {
        header: reduce ? 0 : 0.7,
        containerStagger: reduce ? 0 : 0.15,
        containerDelay: reduce ? 0 : 0.1,
        item: reduce ? 0 : 0.75,
    };

    const tilesContainer = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: timings.containerStagger,
                delayChildren: timings.containerDelay,
            },
        },
    };
    const tileItem = {
        hidden: { opacity: 0, y: 14, scale: 0.985 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: timings.item, ease },
        },
    };

    return (
        <section className="bg-white py-5 pb-16">
          

            {/* Overlapping stats card */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: timings.header, ease, delay: 0.1 }}
                className="relative -mt-10 z-20"
            >
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    {/* OUTER CARD â€” rounded + #262626 border */}
                    <div
                        className={[
                            "rounded-[24px] bg-white",
                            "border border-[#262626]",
                            "shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
                            "px-6 sm:px-8 lg:px-10 py-7 lg:py-9",
                        ].join(" ")}
                    >
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: timings.header, ease }}
                            className={`${gotham.className} text-[#0E234E] leading-tight text-center text-[22px] sm:text-[24px] lg:text-[30px] mb-6 lg:mb-7`}
                        >
                            Take A Look At Our Bourse
                        </motion.h2>

                        {/* TILES â€” animated, no borders */}
                        <motion.div
                            variants={tilesContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.35 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7"
                        >
                            {STATS.map((s) => (
                                <motion.div
                                    key={s.value + s.label}
                                    variants={tileItem}
                                    whileHover={
                                        reduce
                                            ? undefined
                                            : {
                                                y: -4,
                                                transition: { duration: 0.35, ease },
                                            }
                                    }
                                    whileTap={reduce ? undefined : { scale: 0.995 }}
                                    className={[
                                        "rounded-[16px] bg-[#EFF3F6]",
                                        "px-6 sm:px-7 lg:px-9 py-6 lg:py-7",
                                        "min-h-[112px] lg:min-h-[120px]",
                                        "flex flex-col items-center justify-center text-center",
                                        "transition-all duration-500 ease-out will-change-transform",
                                    ].join(" ")}
                                >
<div className={`text-[#0E234E] ${gothamLight.className} font-extrabold leading-none tracking-tight text-[30px] sm:text-[34px] lg:text-[40px]`}>
{s.value}
                                    </div>
                                    <div
                                        className={[
                                            `${sora.className} mt-3 text-[#0E234E]/70 uppercase tracking-[0.18em]`,
                                            "text-[11px] sm:text-[12px] lg:text-[9px]",
                                            "leading-[1.25] text-center",
                                            "whitespace-normal lg:whitespace-nowrap",
                                        ].join(" ")}
                                    >
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {error && (
                            <p className="mt-3 text-sm text-red-600">
                                {error} Place the file in <code className="font-mono">/public/bourse-tour/</code> and reference it as{" "}
                                <code className="font-mono">/bourse-tour/bourse-tour.mp4</code>.
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
