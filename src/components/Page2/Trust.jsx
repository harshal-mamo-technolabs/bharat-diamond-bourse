'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { useState } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

// Load Carentro from OTF
const carentro = localFont({
  src: '../../../public/fonts/Carentro.otf',
  weight: '400',
  style: 'normal',
});

export default function Trust() {
      const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "World’s Largest Diamond Market",
      content:
        "Every day the bourse attracts hundreds of domestic and international trade community for selling and buying diamonds in every size, shape and quality diamonds of every grade and natural colored diamonds in every shade. Its ability to ensure supply of any type of goods makes India the most preferred Diamond Polishing Centre to diamantaires worldwide."
    },
    {
      title: "Business Facilities",
      content: "Every day the bourse attracts hundreds of domestic and international trade community for selling and buying diamonds in every size, shape and quality diamonds of every grade and natural colored diamonds in every shade. Its ability to ensure supply of any type of goods makes India the most preferred Diamond Polishing Centre to diamantaires worldwide."
    },
    {
      title: "Promoting Diamond Trade",
      content: "Every day the bourse attracts hundreds of domestic and international trade community for selling and buying diamonds in every size, shape and quality diamonds of every grade and natural colored diamonds in every shade. Its ability to ensure supply of any type of goods makes India the most preferred Diamond Polishing Centre to diamantaires worldwide."
    },
    {
      title: "International Presence",
      content: "Every day the bourse attracts hundreds of domestic and international trade community for selling and buying diamonds in every size, shape and quality diamonds of every grade and natural colored diamonds in every shade. Its ability to ensure supply of any type of goods makes India the most preferred Diamond Polishing Centre to diamantaires worldwide."
    },
    {
      title: "Contribution to India’s Economic Development",
      content: "Every day the bourse attracts hundreds of domestic and international trade community for selling and buying diamonds in every size, shape and quality diamonds of every grade and natural colored diamonds in every shade. Its ability to ensure supply of any type of goods makes India the most preferred Diamond Polishing Centre to diamantaires worldwide."
    }
  ];

  return (
    <section className="relative w-full mb-5">
      {/* Top background with play button */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/bourse.jpg"
          alt="Bourse Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/100"></div>

        {/* Play button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-0 h-0 border-t-[15px] sm:border-t-[20px] md:border-t-[25px] border-t-transparent border-l-[25px] sm:border-l-[35px] md:border-l-[40px] border-l-[#AD8B3A] border-b-[15px] sm:border-b-[20px] md:border-b-[25px] border-b-transparent cursor-pointer"></div>
        </div>
      </div>

      {/* Stats Section */}
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Left Side */}
      <div>
        <h2
          className={`text-[#AD8B3A] text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 leading-snug ${carentro.className}`}
        >
          BUILT FOR BRILLIANCE.<br />DRIVEN BY TRUST.
        </h2>
        <p className="text-[#000] text-sm sm:text-base mb-4">
          Established with a vision to strengthen India’s position as a global diamond leader, BDB offers state-of-the-art infrastructure, international-standard security, advanced testing laboratories, customs facilities, and seamless business operations — all within a secure, well-governed ecosystem.
        </p>
        <p className="text-[#000] text-sm sm:text-base mb-6">
          We serve as a dynamic platform for networking, innovation, and global trade, empowering thousands of businesses to connect, collaborate, and thrive.
        </p>
        <button className="bg-[#AD8B3A] text-black px-6 py-3 rounded-sm hover:bg-[#9C7E34] transition flex items-center gap-2">
          Read More About Us →
        </button>
      </div>

      {/* Right Side - Accordion */}
      <div className="border border-gray-400">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-400">
            <button
              className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                activeIndex === index ? 'bg-[#AD8B3A] text-white' : 'bg-white text-black'
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className={`text-sm sm:text-base font-medium ${spaceGrotesk.className}`}>{item.title}</span>
              <span>{activeIndex === index ? '↓' : '↑'}</span>
            </button>
            {activeIndex === index && (
              <div className={`px-4 py-3 text-sm text-gray-700 bg-white ${spaceGrotesk.className}`}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-[#F2F4F6] border border-black/10 rounded-[8px] sm:rounded-[10px] p-4 sm:p-5 md:p-6 text-center">
      <div className="text-[#0d1a3b] text-3xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{number}</div>
      <div className="text-[#000000] text-xs sm:text-sm">{label}</div>
    </div>
  );
}
