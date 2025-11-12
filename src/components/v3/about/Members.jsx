"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sora } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import localFont from "next/font/local";

const gotham = localFont({
  src: "../../../../public/fonts/Gotham.otf",
  weight: "400",
  style: "normal",
});

const gothamLight = localFont({
  src: "../../../../public/fonts/Gotham Medium.otf",
  weight: "400",
  style: "normal",
});

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const directors = [
  {
    id: 1,
    name: "Mr. Anoop V. Mehta",
    position: "PRESIDENT",
    image: "/About/members/AnoopMehta.png",

    officeNo: "+91 22 1234 5678",
    contactNo: "+91 98765 43210",
    email: "anoopmehta@bdb.com",
    QBC1: "9584",
    QBC2: "26754288",
    location: "GW6021, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 2,
    name: "Mr. Mehul N. Shah",
    position: "VICE-PRESIDENT",
    image: "/About/members/MehulShah.jpg",
    officeNo: "+91 22 1234 5679",
    contactNo: "+91 98765 43211",
    email: "mehulshah@bdb.com",
    QBC1: "9585",
    QBC2: "26754289",
    location: "GW6022, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 3,
    name: "Mr. Suresh Shah",
    position: "HONORARY SECRETARY",
    image: "/About/members/Suresh-Shah.jpg.png",
    officeNo: "+91 22 1234 5680",
    contactNo: "+91 98765 43212",
    email: "sureshshah@bdb.com",
    QBC1: "9586",
    QBC2: "26754290",
    location: "GW6023, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 4,
    name: "Mr. Prakash C. Shah",
    position: "HONORARY JOINT SECRETARY",
    image: "/About/members/Prakash-C-Shah.jpg.png",
    officeNo: "+91 22 1234 5681",
    contactNo: "+91 98765 43213",
    email: "prakashshah@bdb.com",
    QBC1: "9587",
    QBC2: "26754291",
    location: "GW6024, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 5,
    name: "Mr. Anup Zaveri",
    position: "HONORARY TREASURE",
    image: "/About/members/AnupZaveri.jpg.png",
    officeNo: "+91 22 1234 5682",
    contactNo: "+91 98765 43214",
    email: "anupzaveri@bdb.com",
    QBC1: "9588",
    QBC2: "26754292",
    location: "GW6025, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 6,
    name: "Mr. Arun Shah",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Arun-Shah.jpg.png",
    officeNo: "+91 22 1234 5683",
    contactNo: "+91 98765 43215",
    email: "arunshah@bdb.com",
    QBC1: "9589",
    QBC2: "26754293",
    location: "GW6026, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 7,
    name: "Ms. Bharati S. Mehta",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Bharati-Mehta.jpg.png",
    officeNo: "+91 22 1234 5684",
    contactNo: "+91 98765 43216",
    email: "bharatimehta@bdb.com",
    QBC1: "9590",
    QBC2: "26754294",
    location: "GW6027, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 8,
    name: "Mr. Jagdish Somani",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Jagdish-Somani.jpg.png",
    officeNo: "+91 22 1234 5685",
    contactNo: "+91 98765 43217",
    email: "jagdishsomani@bdb.com",
    QBC1: "9591",
    QBC2: "26754295",
    location: "GW6028, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 9,
    name: "Mr. Jasvant A. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Jasvant-Parikh.jpg",
    officeNo: "+91 22 1234 5686",
    contactNo: "+91 98765 43218",
    email: "jasvantparikh@bdb.com",
    QBC1: "9592",
    QBC2: "26754296",
    location: "GW6029, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 10,
    name: "Mr. Jay K. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Jay-Parikh.jpg",
    officeNo: "+91 22 1234 5687",
    contactNo: "+91 98765 43219",
    email: "jayparikh@bdb.com",
    QBC1: "9593",
    QBC2: "26754297",
    location: "GW6030, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 11,
    name: "Mr. Kiran K. Gandhi",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Kiran-Gandhi.jpg",
    officeNo: "+91 22 1234 5688",
    contactNo: "+91 98765 43220",
    email: "kirangandhi@bdb.com",
    QBC1: "9594",
    QBC2: "26754298",
    location: "GW6031, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 12,
    name: "Mr. Kirit A. Bhansali",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Kirit-Bhansali.jpg",
    officeNo: "+91 22 1234 5689",
    contactNo: "+91 98765 43221",
    email: "kiritbhansali@bdb.com",
    QBC1: "9595",
    QBC2: "26754299",
    location: "GW6032, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 13,
    name: "Mr. Lalit Sheth",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Lalit-Sheth.jpg",
    officeNo: "+91 22 1234 5690",
    contactNo: "+91 98765 43222",
    email: "lalitsheth@bdb.com",
    QBC1: "9596",
    QBC2: "26754300",
    location: "GW6033, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 14,
    name: "Mr. Mahesh Vaghani",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Mahesh-Vaghani.jpg",
    officeNo: "+91 22 1234 5691",
    contactNo: "+91 98765 43223",
    email: "maheshvaghani@bdb.com",
    QBC1: "9597",
    QBC2: "26754301",
    location: "GW6034, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 15,
    name: "Mr. Milan K. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Milan-Parikh.jpg.png",
    officeNo: "+91 22 1234 5692",
    contactNo: "+91 98765 43224",
    email: "milanparikh@bdb.com",
    QBC1: "9598",
    QBC2: "26754302",
    location: "GW6035, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 16,
    name: "Mr. Paresh Mehta",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Paresh-Mehta.jpg.png",
    officeNo: "+91 22 1234 5693",
    contactNo: "+91 98765 43225",
    email: "pareshmehta@bdb.com",
    QBC1: "9599",
    QBC2: "26754303",
    location: "GW6036, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 17,
    name: "Mr. Ramniklal Shah",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Ramniklal-Shah.jpg.png",
    officeNo: "+91 22 1234 5694",
    contactNo: "+91 98765 43226",
    email: "ramniklalshah@bdb.com",
    QBC1: "9600",
    QBC2: "26754304",
    location: "GW6037, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 18,
    name: "Mr. Rohit Shah",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Rohit-Shah.jpg.png",
    officeNo: "+91 22 1234 5695",
    contactNo: "+91 98765 43227",
    email: "rohitshah@bdb.com",
    QBC1: "9601",
    QBC2: "26754305",
    location: "GW6038, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 19,
    name: "Mr. Surendrakumar Dassani",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Surendrakumar-Dassani.jpg.png",
    officeNo: "+91 22 1234 5696",
    contactNo: "+91 98765 43228",
    email: "surendradassani@bdb.com",
    QBC1: "9602",
    QBC2: "26754306",
    location: "GW6039, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
  {
    id: 20,
    name: "Mr. Saket Mehta",
    position: "COMMITTEE MEMBER",
    image: "/About/members/Saket-Mehta-150x150.jpg.png",
    officeNo: "+91 22 1234 5697",
    contactNo: "+91 98765 43229",
    email: "saketmehta@bdb.com",
    QBC1: "9603",
    QBC2: "26754307",
    location: "GW6040, Bharat Diamond Bourse, G- Block, Bandra Kurla Complex, BKC, Bandra-East, Mumbai-400051"
  },
];

export default function BoardOfDirectors() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10"
      >
        <h1
          className={`text-2xl sm:text-3xl md:text-[38px] font-bold text-[#05183A] ${gothamLight.className}`}
        >
          Board of Directors
        </h1>
      </motion.div>

      {/* Directors Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {directors.map((director) => (
          <motion.div
            key={director.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-[#F2F4F6] border border-[#D9D9D9] transition-all rounded-md duration-300 overflow-hidden"
          >
            <div className='p-3'>
              {/* Director Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden p-5 sm:p-6 rounded-md">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Arrow Button - Bottom Right Corner */}
                <motion.button
                  className="absolute bottom-0 right-0 bg-[#05183A] text-white p-2.5 sm:p-4 md:p-5 rounded-br-md flex items-center justify-center hover:bg-[#0b214f] transition-all z-10"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaArrowRight className='w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5'/>
                </motion.button>
              </div>

              {/* Director Details */}
              <div className="mt-4 space-y-1.5">
                {/* Name */}
                <h3 className={`text-[#05183A] text-xl sm:text-[20px] font-bold leading-tight ${gothamLight.className}`}>
                  {director.name}
                </h3>

                {/* Position */}
                <p className={`text-[#05183A] text-base uppercase sm:text-[13px] font-medium ${sora.className}`}>
                  {director.position}
                </p>

                {/* View Details Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleViewDetails(director)}
                  className={`flex items-center gap-2 bg-[#05183A] text-white px-5 py-3 rounded-lg text-sm sm:text-[14px] font-semibold transition-colors duration-200 hover:bg-[#0a2a5a] w-full justify-center mt-4 ${sora.className}`}
                >
                  View Details
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
            />
            
            {/* Modal Content - Vice-President Style Card */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative bg-[#F2F4F6] overflow-hidden max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-md"
            >
              {/* Close Button - Top Right */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 text-[#05183A] hover:text-[#0a2a5a] transition-colors duration-200 p-2"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                aria-label="Close"
              >
                <IoClose className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </motion.button>

              {/* Abstract Design - Left on mobile, Top Right on desktop */}
              <motion.div
                className="absolute top-0 left-0 lg:top-0 lg:right-0 lg:left-auto z-0"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Image
                  src="/About/AbstractDesign.png"
                  alt="Decorative Pattern"
                  width={300}
                  height={300}
                  className="opacity-70 max-w-[80%] sm:max-w-[60%] md:max-w-[100%] h-auto"
                />
              </motion.div>

              {/* Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[2.5fr_2fr] gap-2 md:gap-6 items-stretch">
                {/* Right Side - Image first in responsive */}
                <motion.div
                  className="order-1 lg:order-2 relative flex items-center justify-center p-4 sm:p-6 h-full"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <div className="relative w-full h-full rounded-md overflow-hidden">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={800}
                      height={1000}
                      className="w-full h-full rounded-md"
                      // style={{ objectFit: 'contain' }}
                    />
                  </div>
                </motion.div>

                {/* Left Side - Content */}
                <motion.div
                  className="order-2 lg:order-1 bg-white rounded-md md:m-6 m-2 p-6 sm:p-8 md:p-12 relative flex flex-col"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h2 className={`${gothamLight.className} text-xl sm:text-2xl md:text-3xl font-bold text-[#05183A]`}>
                        {selectedMember.name}
                      </h2>
                      <p className={`${sora.className} text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 mt-2`}>
                        {selectedMember.position} Of Bharat Diamond Bourse
                      </p>
                    </div>

                    {/* Content */}
                    <div className={`${sora.className} space-y-4 text-gray-700 leading-relaxed text-justify text-[12px] sm:text-[13px] md:text-[14px]`}>
                      <p>
                        It is a privilege and an honour to serve as the {selectedMember.position} of the 
                        Bharat Diamond Bourse — the pride of India&apos;s gem and 
                        jewellery industry and a shining symbol of our nation&apos;s 
                        craftsmanship, trust, and global leadership.
                      </p>
                      <p>
                        BDB is not merely an exchange; it is a vision brought to life — a 
                        community built on transparency, excellence, and innovation. 
                        Our commitment remains firm to uphold the highest 
                        standards of integrity, foster sustainable growth, and create 
                        opportunities that empower every stakeholder in our 
                        ecosystem.
                      </p>
                      <p>
                        Together, we continue to illuminate the world with the 
                        brilliance of Indian diamonds and the values that define us.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}