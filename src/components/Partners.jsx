'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sora } from 'next/font/google';

// Load Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

// Partner logos array
const partnerLogos = [
  '/trusted-partners/partner1.png',
  '/trusted-partners/partner2.png',
  '/trusted-partners/partner3.png',
  '/trusted-partners/partner4.png',
  '/trusted-partners/partner5.png',
  '/trusted-partners/partner1.png',
  '/trusted-partners/partner2.png',
  '/trusted-partners/partner3.png',
];

export default function Partners() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
        
        {/* Heading */}
        <p
          className={`text-center text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto ${sora.className}`}
        >
          With 4,000+ member offices representing over 100
          countries and specializing in every aspect of the diamond and gemstone trade,
        </p>

        {/* Scrolling Logos */}
        <div
          className={`mt-8 w-full overflow-hidden transition-all duration-700 ${
            isVisible ? 'fade-in-top' : 'opacity-0'
          }`}
        >
          <div className="flex animate-scroll gap-12">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center logo-hover"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        /* Smooth scrolling keyframes */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        /* Fade-in from top animation */
        @keyframes fadeInTop {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-top {
          animation: fadeInTop 1s ease-out forwards;
        }

        /* Hover effect */
        .logo-hover {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .logo-hover:hover {
          transform: scale(1.1);
          filter: brightness(1.2);
        }
      `}</style>
    </section>
  );
}
