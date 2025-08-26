import Header from "@/components/v2/Header";
import Partners from "@/components/v2/Partners";
import Facility from "@/components/v2/Facility";
import MissionSection from "@/components/v2/MissionSection";
import Footer from "@/components/v2/footer";
import Insights from "@/components/v2/Insight";
import BourseSection from "@/components/v2/BourseSection"
import AboutSection from "@/components/v2/AboutSection";
import PillarOfProgress from "@/components/v2/PillarOfProgress";


export default function Home() {
  return (
        <div className="">
            <Header/>
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
