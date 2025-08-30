import Header from "@/components/v3/Header";
import Partners from "@/components/v2/Partners";
import Facility from "@/components/v2/Facility";
import MissionSection from "@/components/v2/MissionSection";
import Footer from "@/components/v2/footer";
import Insights from "@/components/v2/Insight";
import BourseSection from "@/components/v2/BourseSection"
import AboutSection from "@/components/v2/AboutSection";
import PillarOfProgress from "@/components/v2/PillarOfProgress";
import BannerWrapper from "@/components/v3/BannerWrapper";

export default function Home() {
  return (
        <div className="">
            <Header/>
            <BannerWrapper />
            <Partners/>
            <AboutSection/>
            <PillarOfProgress/>
            <MissionSection/>
            <Facility/>
            <BourseSection/>
            <Insights/>
            <Footer/>
        </div>
  );
}