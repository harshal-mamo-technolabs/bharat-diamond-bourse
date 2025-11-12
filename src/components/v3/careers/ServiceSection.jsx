'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';

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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Sample data for the cards
const cardData = [
  {
    id: 1,
    title: "Diamond Trading",
    description: "3-level basement parking for over 3,000 cars",
    image: "/career/career1.png"
  },
  {
    id: 2,
    title: "Member Services",
    description: "Sports and recreation facilities",
    image: "/career/career-c-2.png"
  },
  {
    id: 3,
    title: "Security",
    description: "Food courts and restaurants serving diverse cuisines",
    image: "/career/career-c-3.png"
  },
  {
    id: 4,
    title: "Banking",
    description: "Banking, insurance, and telecom services on-site",
    image: "/career/career-c-4.png"
  },
  {
    id: 5,
    title: "Customs",
    description: "Medical and wellness support, including health check-up camps and blood donation drives",
    image: "/career/career-c-5.png"
  },
  {
    id: 6,
    title: "Conference",
    description: "Sustainable campus powered by solar panels, water recycling, and green landscaping",
    image: "/career/career-c-6.png"
  }
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-[#F2F4F6] border border-[#D0D0D0] rounded-lg p-6 md:p-8 lg:p-12"
        >
          {/* Title and Subtitle Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className={`text-2xl md:text-3xl lg:text-5xl font-bold text-[#05183A] mb-4 ${gothamLight.className}`}>
            Employee benefits
            </h2>
            <p className={`text-black text-sm md:text-[13px] max-w-7xl ${sora.className}`}>
            As the world’s leading business hub, we are committed to providing our employees with exceptional benefits and incentives 
            </p>
          </motion.div>

          {/* Grid Cards Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-[#B9CADA] hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
                    {/* Replace with actual Image component if you have images */}
                    {/* <div className="text-white text-lg font-bold">
                      {card.title.charAt(0)}
                    </div> */}
                   
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-10 md:h-10"
                    />
                
                  </div>
                </div>

                {/* Title */}
                {/* <h3 className={`text-[#05183A] font-semibold text-sm md:text-base mb-2 ${gothamLight.className}`}>
                  {card.title}
                </h3> */}

                {/* Description */}
                <p className={`text-black text-xs md:text-[13px] leading-relaxed ${sora.className}`}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}