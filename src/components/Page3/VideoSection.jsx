'use client';

import Image from "next/image";
import buildingVideoImg from "../../../public/example3/video-bg.png"; // your image here
//import { Play } from "lucide-react"; // lucide-react icon

export default function VideoSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-6 lg:px-10">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border">
          {/* Background image */}
          <Image
            src={buildingVideoImg}
            alt="BDB Building Video"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 bg-opacity-30" />

          {/* Play button */}
          <button className="absolute inset-0 flex items-center justify-center">
            {/* Play button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-0 h-0 border-t-[15px] sm:border-t-[20px] md:border-t-[25px] border-t-transparent border-l-[25px] sm:border-l-[35px] md:border-l-[40px] border-l-[#0d1a3b] border-b-[15px] sm:border-b-[20px] md:border-b-[25px] border-b-transparent cursor-pointer"></div>
        </div>
          </button>
        </div>
      </div>
    </section>
  );
}
