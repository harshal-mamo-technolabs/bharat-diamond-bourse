'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

const gotham = localFont({ src: '../../../public/fonts/Gotham.otf', weight: '400', style: 'normal' });
const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

function Arrow({ color = '#FFFFFF', size = 16, stroke = 2, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 7l5 5-5 5" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AdSection() {
  return (
    <section className="w-full bg-[#EFF3F6] px-6 md:px-16 xl:px-28 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Left text */}
        <div className="col-span-12 md:col-span-6">
          <p className={`text-sm text-[#6B7280] mb-2 ${sora.className}`}>Our Advertising Partners</p>
          <h3 className={`text-[40px] md:text-[64px] leading-[1.1] text-[#0E234E] font-bold mb-6 ${gotham.className}`}>Daimond co.</h3>
          <div className={`space-y-5 text-[#364153] ${sora.className}`}>
            <p>
              A diamond ring is more than just jewelry — it is a timeless symbol of love, commitment, and elegance.
              Crafted with precision and brilliance, each diamond captures the light in a way that reflects your most
              precious moments. Whether chosen for an engagement, an anniversary, or simply as a statement of
              style, a diamond ring speaks the language of forever.
            </p>
            <p>
              A diamond ring blends sophistication with lasting beauty. Designed to shine with unmatched brilliance,
              it is the perfect expression of love, confidence, and individuality. Every diamond is carefully selected
              and set to create a piece that is not only stunning to wear but also holds meaning that lasts a lifetime.
            </p>
          </div>

          <div className="mt-8">
            <button
              className={[
                'group inline-flex items-center gap-3 rounded-[12px]',
                'bg-[#0E234E] px-6 py-3 text-[12px] sm:px-7 sm:py-3.5 sm:text-[13px]',
                `${gotham.className} uppercase tracking-[0.14em] text-white`,
                'shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_20px_rgba(2,6,23,0.18)]',
                'ring-1 ring-black/5 transition-all duration-300 ease-out',
                'hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_28px_rgba(2,6,23,0.22)]',
                'active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E234E]'
              ].join(' ')}
            >
              Read More About Us
              <Arrow color="#FFFFFF" size={16} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right image card */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative w-full rounded-[24px] overflow-hidden shadow-lg bg-[#0E1A31]">
            <Image src="/ad.png" alt="Ad banner" width={1200} height={900} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


