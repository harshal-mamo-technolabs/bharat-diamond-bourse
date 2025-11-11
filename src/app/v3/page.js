'use client';

import Header from "@/components/v3/Header";
import Partners from "@/components/v2/Partners";
import Facility from "@/components/v2/Facility";
import MissionSection from "@/components/v2/MissionSection";
import Footer from "@/components/v2/footer";
import Insights from "@/components/v2/Insight";
import BourseSection from "@/components/v2/BourseSection";
import StatsCard from "@/components/v3/StatCards";
import CorporateTaxSection from "@/components/v3/CorporateTaxSection";
import AboutSection from "@/components/v2/AboutSection";
import PillarOfProgress from "@/components/v2/PillarOfProgress";
import BannerWrapper from "@/components/v3/BannerWrapper";
import AdSection from "@/components/v3/AdSection";
import { useState, useEffect } from 'react';
import { FaArrowUp  } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-md transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp  
        className="h-6 w-6 transform" 
        style={{ color: '#0E234E' }}
      />
    </button>
  );
};

export default function Home() {
  return (
    <div className="">
      <Header/>
      <BannerWrapper />
      <Partners/>
      <AboutSection/>
      <StatsCard/>
      <CorporateTaxSection/>
      <PillarOfProgress/>
      <MissionSection/>
      <AdSection/>
      <Insights/>
      <Footer/>
      
      <ScrollToTop />
    </div>
  );
}