import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Facility from "@/components/Facility";
import Footer from "@/components/footer";
import Insights from "@/components/Insight";
import BourseSection from "@/components/BourseSection"
import AboutSection from "@/components/AboutSection";
import PillarOfProgress from "@/components/PillarOfProgress";


export default function Home() {
  return (
        <div className="">
            <Header/>
            <Partners/>
            <AboutSection/>
            <PillarOfProgress/>
            <Facility/>
            <BourseSection/>
            <Insights/>
            <Footer/>
        </div>

  );
}
