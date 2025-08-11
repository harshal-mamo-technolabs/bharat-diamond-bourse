'use client';
import Head from 'next/head';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function BourseSection() {
  return (
    <>
      <section className="relative bg-white py-12 overflow-hidden mt-10">
        {/* large faint diamond on the right */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-80 md:w-100 opacity-10 flex items-center z-0">
          <Image
            src="/example2/diamond-bg.png"
            alt="diamond-bg"
            fill
            sizes="(max-width: 768px) 200px, 384px"
            className="object-contain object-right hidden md:block"
            priority
          />
        </div>

        <div className="mx-auto px-14 relative z-10">
          {/* bordered card */}
          <div className="bg-white/10 border border-gray-200 p-8 md:p-12 ">
            <div className="md:flex md:items-start">
              {/* LEFT - Title, copy, CTA */}
              <div className="md:w-[40%] md:pr-12">
                <h2
                  className={`text-[22px] md:text-2xl lg:text-[28px] leading-tight tracking-widest text-[#b5872c] uppercase ${carentro.className}`}
                 >
                  TAKE A LOOK AT OUR BOURSE
                </h2>

                <p
                  className={`mt-2 text-black text-sm md:text-base leading-5 ${spaceGrotesk.className}`}>
                  Experience the unmatched scale, sophistication, and security of the world's premier diamond trading hub —
                  a purpose-built ecosystem designed to empower the global gem and jewellery industry with world-class
                  infrastructure, seamless connectivity, and unwavering trust.
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 bg-[#b5872c] hover:bg-[#9a6f25] text-black text-[16px] px-7 py-3"
                >
                  Read More About Us →
                </a>

                {/* thin horizontal rule that matches image's subtle line */}
                <div className="hidden md:block mt-6 border-t border-gray-100" />
              </div>

              {/* RIGHT - stats grid with vertical divider */}
              <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                  {/* Stat 1 */}
                  <div>
                    <div className="flex w-[200px] h-[2px] mb-3">
                      <div className="w-[85px] bg-[#b5872c]" />
                        <div className="flex-1 bg-gray-300" />
                      </div>
                    <h3 className={`text-[16px] font-semibold text-gray-800 leading-snug ${carentro.className}`}>
                      2,500+ <br /> DIAMOND OFFICES
                    </h3>
                    <p className={`text-[13px] text-gray-500 mt-2 ${spaceGrotesk.className}`}>
                      A vibrant community of traders, manufacturers and exporters — all under one secure roof.
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="flex w-[200px] h-[2px] mb-3">
                      <div className="w-[85px] bg-[#b5872c]" />
                        <div className="flex-1 bg-gray-300" />
                      </div>
                    <h3 className={`text-[16px] font-semibold text-gray-800 leading-snug ${carentro.className}`}>
                      2 MILLION SQ. FT. <br /> OF TRADING SPACE
                    </h3>
                    <p className={`text-[13px] text-gray-500 mt-2 ${spaceGrotesk.className}`}>
                      Smartly designed office spaces to suit every scale of business — from startups to industry giants.
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="flex w-[200px] h-[2px] mb-3">
                      <div className="w-[85px] bg-[#b5872c]" />
                        <div className="flex-1 bg-gray-300" />
                      </div>
                    <h3 className={`text-[16px] font-semibold text-gray-800 leading-snug ${carentro.className}`}>
                      9 <br /> INTERCONNECTED TOWERS
                    </h3>
                    <p className={`text-[13px] text-gray-500 mt-2 ${spaceGrotesk.className}`}>
                      Seamlessly linked structures offering state-of-the-art infrastructure and ease of access.
                    </p>
                  </div>

                  {/* Stat 4 */}
                  <div>
                    <div className="flex w-[200px] h-[2px] mb-3">
                      <div className="w-[85px] bg-[#b5872c]" />
                        <div className="flex-1 bg-gray-300" />
                      </div>
                    <h3 className={`text-[16px] font-semibold text-gray-800 leading-snug ${carentro.className}`}>
                      1 <br /> WORLD'S DIAMOND BOURSE
                    </h3>
                    <p className={`text-[13px] text-gray-500 mt-2 ${spaceGrotesk.className}`}>
                      BDB stands as the biggest and most advanced diamond exchange facility globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* very subtle, almost invisible thin inner border at bottom same as screenshot */}
            <div className="mt-6 border-t border-gray-100" />
          </div>
        </div>
      </section>
    </>
  );
}
