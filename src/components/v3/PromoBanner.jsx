'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import StartBusinessModal from './StartBusinessModal';

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });
const gotham = localFont({ src: '../../../public/fonts/Gotham.otf', weight: '400', style: 'normal' });

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PromoBanner() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Images to rotate
  const images = useMemo(
    () => [
      '/leadership-banner.png',
      '/agdrt-banner.png',
    ],
    []
  );

  // Slides with clones for seamless loop
  const slides = useMemo(() => {
    if (images.length === 0) return [];
    if (images.length === 1) return [images[0]];
    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const hasClones = images.length > 1;
  const [index, setIndex] = useState(hasClones ? 1 : 0);
  const [withTransition, setWithTransition] = useState(true);
  const intervalRef = useRef(null);

  // Auto-advance every 5s
  useEffect(() => {
    if (!open || images.length <= 1) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setIndex((i) => i + 1), 5000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [open, images.length]);

  // Seamless wrap after hitting clones
  const handleTransitionEnd = () => {
    if (!hasClones) return;
    if (index === slides.length - 1) {
      setWithTransition(false);
      setIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    } else if (index === 0) {
      setWithTransition(false);
      setIndex(slides.length - 2);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
  };

  // Swipe/drag
  const onDragEnd = (_e, info) => {
    if (images.length <= 1) return;
    const swipe = info.offset.x + info.velocity.x * 50;
    const threshold = 80;
    if (swipe < -threshold) setIndex((i) => i + 1);
    else if (swipe > threshold) setIndex((i) => i - 1);
  };

  useEffect(() => setOpen(true), []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center">
            {/* Backdrop */}
            <button
              aria-label="Close"
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />

            {/* Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className={[
                // MOBILE — original size restored
                'relative w-[94vw] max-h-[85vh] h-auto min-w-[300px] bg-white rounded-[16px] shadow-2xl overflow-hidden',
                // DESKTOP/TABLET — unchanged
                'sm:w-[48vw] sm:h-[70vh] sm:max-w-[900px] sm:max-h-[600px] sm:min-w-[320px] sm:rounded-[18px]',
                sora.className,
              ].join(' ')}
            >
              {/* Close */}
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 hover:opacity-80 z-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E234E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Content */}
              <div className="w-full h-full flex flex-col">
                {/* Carousel — give mobile a real height using aspect ratio, not fixed vh */}
                <div
                  className="
                    relative
                    mt-3 mx-3 sm:mt-5 sm:mx-5
                    rounded-[14px] overflow-hidden
                    aspect-[16/9] min-h-[180px]      /* mobile height without changing modal size */
                    sm:flex-1
                  "
                >
                  {/* Track */}
                  <div
                    className="flex h-full"
                    style={{
                      transform: `translateX(-${index * 100}%)`,
                      transition: withTransition ? 'transform 450ms cubic-bezier(0.22,0.61,0.36,1)' : 'none',
                    }}
                    onTransitionEnd={handleTransitionEnd}
                  >
                    {slides.map((src, i) => (
                      <motion.div
                        key={`${src}-${i}`}
                        className="relative min-w-full h-full"
                        drag={images.length > 1 ? 'x' : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={onDragEnd}
                      >
                        <Image
                          src={src}
                          alt={`Slide ${i + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 94vw, 48vw"
                          priority={i === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom button */}
                <div className="px-4 pb-4 pt-3 flex items-center justify-center">
                  <button
                    onClick={() => {
                      setOpen(false);
                      setShowModal(true);
                    }}
                    className={[
                      'group inline-flex items-center gap-3 rounded-[12px]',
                      'bg-[#0E234E] text-white uppercase tracking-[0.14em]',
                      gotham.className,
                      'px-6 py-3 text-[12px] sm:px-8 sm:py-4 sm:text-[14px]',
                      'shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_20px_rgba(2,6,23,0.18)]',
                      'ring-1 ring-black/5 transition-all duration-300 ease-out',
                      'hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_28px_rgba(2,6,23,0.22)]',
                      'active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E234E]',
                    ].join(' ')}
                  >
                    Register Now
                    <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Start Business Modal */}
      <StartBusinessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}