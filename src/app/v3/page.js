'use client';

import Header from "@/components/v3/Header";
import Partners from "@/components/v2/Partners";
import MissionSection from "@/components/v2/MissionSection";
import Footer from "@/components/v2/footer";
import Insights from "@/components/v2/Insight";
import StatsCard from "@/components/v3/StatCards";
import CorporateTaxSection from "@/components/v3/CorporateTaxSection";
import AboutSection from "@/components/v2/AboutSection";
import PillarOfProgress from "@/components/v2/PillarOfProgress";
import BannerWrapper from "@/components/v3/BannerWrapper";
import AdSection from "@/components/v3/AdSection";
import ScrollToTop from "@/components/v3/ScrollToTop";


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