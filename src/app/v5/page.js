import Header from "@/components/v5/Header";
import BannerWrapper from "@/components/v5/BannerWrapper";
import Partners from "@/components/Partners";
import Facility from "@/components/Facility";
import CorporateTaxSection from "@/components/v5/CorporateTaxSection";
import AdSection from "@/components/v5/AdSection";
import MissionSection from "@/components/v5/MissionSection";
import Footer from "@/components/v5/footer";
import Insights from "@/components/v5/Insight";
import BourseSection from "@/components/BourseSection"
import AboutSection from "@/components/AboutSection";
import PillarOfProgress from "@/components/PillarOfProgress";


export default function Home() {
  return (
    <div className="relative min-h-screen">
    {/* Background Image with Low Opacity */}
    <div 
      className="fixed inset-0 z-0 opacity-20"
      style={{
        backgroundImage: 'url("/bdb-bg-1.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    />
    
    {/* Content Container */}
    <div className="relative z-10">
            <Header/>
            <BannerWrapper/>
            <Partners/>
            <AboutSection/>
            <PillarOfProgress/>
            <CorporateTaxSection/>
            <MissionSection/>
            <Facility/>
            <AdSection/>
            <BourseSection/>
            <Insights/>
            <Footer/>
        </div>
    </div>
  );
}
