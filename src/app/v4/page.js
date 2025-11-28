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
        <div className="">
            <Header/>
            <BannerWrapper />
            <Partners/>
            <AboutSection/>
            <StatsCard/>
            {/* <BourseSection/>  */}
            <CorporateTaxSection/>
            <PillarOfProgress/>
            <MissionSection/>
            <AdSection/>
            {/* <Facility/> */}
            <Insights/>
            <Footer/>
            <ScrollToTop />
        </div>
  );
}