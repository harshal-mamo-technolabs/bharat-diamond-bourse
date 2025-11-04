"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sora } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
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
    image: "/About/members/AnoopMehta-2.jpg.png",
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
    image: "/About/members/MehulShah.jpg.png",
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

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-8 md:py-12 bg-white">
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
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {directors.map((director, index) => (
          <motion.div
            key={director.id}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#F2F4F6] rounded-xl overflow-hidden shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition border border-[#D9D9D9] cursor-pointer"
            onClick={() => handleViewDetails(director)}
          >
            <motion.div
              className="w-full aspect-[1/1] overflow-hidden rounded-lg mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            <motion.h3
              className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800 ${gothamLight.className}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              {director.name}
            </motion.h3>

            <motion.p
              className={`text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 ${gothamLight.className}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
              viewport={{ once: true }}
            >
              {director.position}
            </motion.p>

            {/* <motion.button
              className={`bg-[#05183A] text-white text-xs sm:text-sm font-medium py-2 sm:py-3 w-full rounded-lg 
                         flex justify-center items-center gap-2 hover:bg-[#05183A] transition ${sora.className}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details <FaArrowRight className="text-white" />
            </motion.button> */}
          </motion.div>
        ))}
      </div>

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
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              
              {/* White Card Container */}
              <div className="bg-white rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {/* Left Side - Image */}
                  <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center p-4 lg:p-6">
                    {/* Name */}
                    <h2 className={`text-[#05183A] text-2xl lg:text-3xl font-bold mb-4 ${gothamLight.className}`}>
                      {selectedMember.name}
                    </h2>

                    {/* Position */}
                    <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
                      <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                        Position:
                      </span>
                      <span className={`text-[#05183A] text-sm ${sora.className}`}>
                        {selectedMember.position}
                      </span>
                    </div>

                    {/* Details Grid */}
                    <div className="space-y-3">
                      {/* Office No */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Office No:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.officeNo}
                        </span>
                      </div>

                      {/* Contact No */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Contact Person:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          QBC-1:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.QBC1}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          QBC-2:
                        </span>
                        <span className={`text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.QBC2}
                        </span>
                      </div>

                      {/* Email */}
                      <div className="flex justify-between items-center pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Email:
                        </span>
                        <span className={`flex items-start text-[#05183A] text-sm ${sora.className}`}>
                          {selectedMember.email}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex justify-between items-start pb-3">
                        <span className={`text-[#05183A] text-sm font-semibold ${sora.className}`}>
                          Address:
                        </span>
                        <div className="flex items-start max-w-[70%]">
                          <span className={`text-[#05183A] text-sm ${sora.className}`}>
                            {selectedMember.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={closeModal}
                      className={`flex items-center gap-2 bg-[#05183A] text-white px-5 py-3 rounded-lg text-sm sm:text-[14px] font-semibold transition-colors duration-200 hover:bg-[#0a2a5a] w-full justify-center mt-4 ${sora.className}`}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}