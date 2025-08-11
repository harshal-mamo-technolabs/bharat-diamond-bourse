'use client';

import Image from 'next/image';
import bgImage from '../../../public/example2/bg-partner.png'; // replace with your background image path
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function PartnerSection() {
  return (
    <div className="px-12 mb-10">
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-28">
        {/* Title */}
        <h1 className={`text-white text-2xl md:text-4xl font-light tracking-wide ${carentro.className}`}>
          PARTNER WITH THE HEART OF THE GLOBAL DIAMOND TRADE
        </h1>

        {/* Subtitle */}
        <p className={`text-white/90 max-w-3xl mt-4 text-sm md:text-base ${spaceGrotesk.className}`}>
          Join a world-class ecosystem trusted by thousands of traders,
          manufacturers, and industry leaders. Whether you’re expanding your
          business, seeking secure trading solutions, or looking to connect
          globally.
        </p>

        {/* Button */}
        <button className="mt-8 bg-[#C39B50] hover:bg-[#b58a3d] text-black font-semibold px-6 py-3 rounded shadow-md transition-all duration-200">
          Contact Us Today →
        </button>
      </div>
    </section>
    </div>
  );
}
