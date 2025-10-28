'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '700'] });

const AncillariesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Safe Vaults",
      description: "Ultra-secure storage facilities for diamonds & valuables.",
      image: "/facilities/safety.png"
    },
    {
      title: "Logistics Partners",
      description: "Trusted Angadia & GHA networks ensuring smooth trade flow.",
      image: "/facilities/partner.png"
    },
    {
      title: "Travel & Telecom",
      description: "On-site travel desks & communication services for global traders.",
      image: "/facilities/travel.png"
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Main Title */}
          <motion.h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#05183A] text-center mb-12 md:mb-16 ${gothamLight.className}`}
            variants={itemVariants}
          >
            Ancillaries & Safe Vaults
          </motion.h1>

          {/* Three Services Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-16 md:mb-20"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Service Image */}
                <motion.div 
                  className="relative h-30 md:h-35 lg:h-35 rounded-lg overflow-hidden mb-4"
                  variants={imageVariants}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                  />
                </motion.div>

                {/* Service Title */}
                <motion.h2 
                  className={`text-xl md:text-2xl font-semibold text-gray-900 mb-2 ${sora.className}`}
                  variants={itemVariants}
                >
                  {service.title}
                </motion.h2>

                {/* Service Description */}
                <motion.p 
                  className={`text-[#364153] text-base md:text-[16px] leading-relaxed ${sora.className}`}
                  variants={itemVariants}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Food & Dining Section - Only mobile responsiveness added */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            variants={imageVariants}
          >
            <div className="relative h-64 md:h-80 lg:h-[400px] w-full">
              <Image
                src="/facilities/dining.jpg"
                alt="Food & Dining at Bharat Diamond Bourse"
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Gradient Overlay - Left 100% to Right 0% */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/0" />
              
              {/* Content Overlay - Only mobile adjustments */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl ml-4 sm:ml-6 md:ml-12 lg:ml-16 mr-4 sm:mr-0 text-white">
                  <motion.h2 
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${gothamLight.className}`}
                    variants={itemVariants}
                  >
                    Food & Dining
                  </motion.h2>
                  
                  <motion.p 
                    className={`text-sm sm:text-base md:text-[15px] leading-relaxed mb-4 sm:mb-6 max-w-xl ${sora.className}`}
                    variants={itemVariants}
                  >
                    Bharat Diamond Bourse offers a diverse range of dining options, from Indian specialties to global cuisines. Each restaurant and café provides a comfortable space to relax or connect, blending taste, convenience, and hospitality for an exceptional experience.
                  </motion.p>

                  <motion.button
                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 rounded-md font-semibold text-xs sm:text-[13px] hover:bg-gray-100 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    KNOW MORE
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AncillariesSection;