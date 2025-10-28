"use client";
import { motion } from "framer-motion";
import { Sora } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
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
    name: "Mr. Anoop V. Mehta",
    position: "PRESIDENT",
    image: "/about/members/AnoopMehta-2.jpg.png",
  },
  {
    name: "Mr. Mehul N. Shah",
    position: "VICE-PRESIDENT",
    image: "/about/members/MehulShah.jpg.png",
  },
  {
    name: "Mr. Suresh Shah",
    position: "HONORARY SECRETARY",
    image: "/about/members/Suresh-Shah.jpg.png",
  },
  {
    name: "Mr. Prakash C. Shah",
    position: "HONORARY JOINT SECRETARY",
    image: "/about/members/Prakash-C-Shah.jpg.png",
  },
  {
    name: "Mr. Anup Zaveri",
    position: "HONORARY TREASURE",
    image: "/about/members/AnupZaveri.jpg.png",
  },
  {
    name: "Mr. Arun Shah",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Arun-Shah.jpg.png",
  },
  {
    name: "Ms. Bharati S. Mehta",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Bharati-Mehta.jpg.png",
  },
  {
    name: "Mr. Jagdish Somani",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Jagdish-Somani.jpg.png",
  },
  {
    name: "Mr. Jasvant A. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Jasvant-Parikh.jpg",
  },
  {
    name: "Mr. Jay K. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Jay-Parikh.jpg",
  },
  {
    name: "Mr. Kiran K. Gandhi",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Kiran-Gandhi.jpg",
  },
  {
    name: "Mr. Kirit A. Bhansali",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Kirit-Bhansali.jpg",
  },
  {
    name: "Mr. Lalit Sheth",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Lalit-Sheth.jpg",
  },
  {
    name: "Mr. Mahesh Vaghani",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Mahesh-Vaghani.jpg",
  },
  {
    name: "Mr. Milan K. Parikh",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Milan-Parikh.jpg.png",
  },
  {
    name: "Mr. Paresh Mehta",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Paresh-Mehta.jpg.png",
  },
  {
    name: "Mr. Ramniklal Shah",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Ramniklal-Shah.jpg.png",
  },
  {
    name: "Mr. Rohit Shah",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Rohit-Shah.jpg.png",
  },
  {
    name: "Mr. Surendrakumar Dassani",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Surendrakumar-Dassani.jpg.png",
  },
  {
    name: "Mr. Saket Mehta",
    position: "COMMITTEE MEMBER",
    image: "/about/members/Saket-Mehta-150x150.jpg.png",
  },
];

export default function BoardOfDirectors() {
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
        {/* <p
          className={`text-gray-600 md:w-[45%] mt-3 md:mt-0 text-sm sm:text-sm leading-relaxed ${sora.className}`}
        >
          Our team is built on a foundation of collaborative excellence,
          combining diverse talents and expertise to deliver outstanding
          results.
        </p> */}
      </motion.div>

      {/* Directors Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {directors.map((director, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.15, // gradual stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#F2F4F6] rounded-xl overflow-hidden shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition border border-[#D9D9D9]"
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

            <motion.button
              className={`bg-[#05183A] text-white text-xs sm:text-sm font-medium py-2 sm:py-3 w-full rounded-lg 
                         flex justify-center items-center gap-2 hover:bg-[#05183A] transition ${sora.className}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details <FaArrowRight className="text-white" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
