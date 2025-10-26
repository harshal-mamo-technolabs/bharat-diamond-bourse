'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
import { motion } from 'framer-motion';

const gotham = localFont({
  src: '../../../../public/fonts/Gotham.otf',
  weight: '400',
  style: 'normal',
});

const gothamLight = localFont({
    src: "../../../../public/fonts/Gotham Medium.otf",
    weight: "400",
    style: "normal",
  });

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function DiamondHubSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video with muted audio
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section className="relative w-full bg-white pt-8 md:pt-10 pb-16 md:pb-20">
      {/* White background with top border radius */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[30px] md:rounded-t-[40px] -translate-y-6 md:-translate-y-8 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main content card */}
        <motion.div 
          className="bg-[#F2F4F6] rounded-2xl p-6 sm:p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            {/* Left side - Text content - comes first on mobile */}
            <motion.div 
              className="space-y-4 sm:space-y-6 lg:pr-6 order-1 lg:order-1"
              variants={textVariants}
            >
              {/* Title */}
              <h1 className={`${gothamLight.className} text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#05183A] `}>
                World&apos;s largest Diamond Hub
              </h1>
              
              {/* Description */}
              <motion.div 
                className={`space-y-3 sm:space-y-4 text-[#364153] text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-justify ${sora.className}`}
                variants={textVariants}
              >
                <p>
                  The Bharat Diamond Bourse (BDB) is the world&apos;s largest diamond trading hub, 
                  located in the heart of Mumbai&apos;s Banda-Kuria Complex. Spread across 20 acres 
                  and 8 interlinked towers, BDB is home to more than 2,500 diamond companies and 
                  thousands of professionals who power India&apos;s diamond and jewellery trade.
                </p>
                
                <p>
                  Our campus is not just a marketplace—it is a secure global ecosystem where every 
                  service a diamond business needs is available under one roof: customs, banks, 
                  insurance, vaults, gem labs, logistics, and world-class trading halls.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right side - Video - comes below on mobile */}
            <motion.div 
              className="relative lg:col-start-2 lg:-mr-6 lg:ml-0 order-2 lg:order-2"
              variants={videoVariants}
            >
              <div className="relative overflow-hidden shadow-xl sm:shadow-2xl rounded-lg lg:rounded-none">
                {/* Video container with responsive sizing */}
                <div className="relative bg-gray-900 overflow-hidden w-full h-full">
                  {/* Responsive container */}
                  <div className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] lg:min-w-[800px] xl:min-w-[900px]">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/about/diamond-hub-poster.jpg"
                    >
                      <source src="/videos/diamond-hub-showcase.mp4" type="video/mp4" />
                      <source src="/videos/diamond-hub-showcase.webm" type="video/webm" />
                      {/* Fallback image if video doesn't load */}
                      <Image
                        src="/diamond-hub-fallback.jpg"
                        alt="Bharat Diamond Bourse Campus"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                      />
                    </video>
                    
                    {/* Video play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg 
                            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900 ml-0.5 sm:ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}