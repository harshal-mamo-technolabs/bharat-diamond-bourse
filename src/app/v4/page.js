import Header from "@/components/v4/Header";
import Partners from "@/components/v4/Partners";
import MissionSection from "@/components/v4/MissionSection";
import Footer from "@/components/v4/footer";
import Insights from "@/components/v4/Insight";
import StatsCard from "@/components/v4/StatCards";
import CorporateTaxSection from "@/components/v4/CorporateTaxSection";
import AboutSection from "@/components/v4/AboutSection";
import PillarOfProgress from "@/components/v4/PillarOfProgress";
import BannerWrapper from "@/components/v4/BannerWrapper";
import AdSection from "@/components/v4/AdSection";
import ScrollToTop from "@/components/v4/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Low Opacity */}
      <div 
        className="fixed inset-0 z-0 opacity-75"
        style={{
          backgroundImage: 'url("/service-banner.jpg")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
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
    </div>
  );
}