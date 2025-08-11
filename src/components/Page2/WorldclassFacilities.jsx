'use client';
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

export default function WorldClassFacilities() {
  const facilities = [
    { icon: '/example2/icons/bank.png', title: 'BANK', description: 'Multiple national and international banks are located within the BDB complex, offering secure and convenient financial services to support seamless trading.' },
    { icon: '/example2/icons/travel.png', title: 'TRAVEL AGENTS', description: 'On-site travel agencies provide members and visitors with comprehensive travel planning, ticketing, and visa support for both domestic and international travel.' },
    { icon: '/example2/icons/internet.png', title: 'INTERNET & TELECOM', description: 'High-speed internet and telecom services ensure uninterrupted communication, digital connectivity, and operational efficiency across the Bourse.' },
    { icon: '/example2/icons/resturant.png', title: 'RESTAURANT', description: 'A variety of food courts and restaurants serve hygienic, multi-cuisine meals—ensuring comfort and convenience for traders and visitors throughout the day.' },
    { icon: '/example2/icons/trading.png', title: 'TRADING', description: 'BDB offers a secure and structured environment for diamond trading with state-of-the-art infrastructure that supports transparency, accountability.' },
    { icon: '/example2/icons/bus-services.png', title: 'BUS SERVICES', description: 'Regular and well-organized bus services provide easy and timely transport for members and employees commuting to and from the complex.' },
    { icon: '/example2/icons/testing.png', title: 'TESTING LABORATORIES', description: 'Accredited gemological labs are available on-site for authenticating and grading diamonds and gemstones, ensuring quality and buyer confidence.' },
    { icon: '/example2/icons/diamond.png', title: 'DIAMOND EQUIPMENTS', description: 'Specialized shops and services for diamond tools, machinery, and accessories are accessible within the complex to support day-to-day trade and craftsmanship.' },
    { icon: '/example2/icons/trading-hall.png', title: 'TRADING HALL', description: 'The central trading hall is the heart of BDB—designed with modern amenities to accommodate large-scale trading activities in a secure and professional setting.' },
  ];

  return (
    <section className="bg-black text-white py-16 px-14">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className={`text-[#AD8B3A] text-2xl md:text-5xl font-semibold tracking-wide ${carentro.className}`}>
          OUR WORLD-CLASS FACILITIES
        </h2>
        <p className={`mt-4 text-sm md:text-base text-gray-300 leading-relaxed ${spaceGrotesk.className}`}>
          From cutting-edge trading halls to essential on-site services, every facility at Bharat Diamond Bourse is designed to support efficiency, security, and seamless business operations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {facilities.map((item, index) => {
          const isTopRow = index < 3;
          const isLeftCol = index % 3 === 0;

          return (
            <div
              key={index}
              className={`p-6 text-center flex flex-col items-start border-[#AD8B3A]
                ${!isTopRow ? 'border-t' : ''}
                ${!isLeftCol ? 'border-l' : ''}

                ${index === 1 ? 'border-t' : ''}
                ${index === 3 ? 'border-l' : ''}
                ${index === 5 ? 'border-r' : ''}
                ${index === 7 ? 'border-b' : ''}
              `}
            >
              <Image src={item.icon} alt={item.title} width={70} height={70} className="mb-4" />
              <h3 className={`font-semibold text-2xl mb-3 text-[#AD8B3A] ${carentro.className}`}>
                {item.title}
              </h3>
              <p className={`text-gray-300 text-sm text-start leading-relaxed ${spaceGrotesk.className}`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
