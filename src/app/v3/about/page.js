import Header from "@/components/v3/about/Header";
import DiamondhubSection from "@/components/v3/about/DiamondhubSection";
import Mission from "@/components/v3/about/Mission";
import HistoryTimeline from "@/components/v3/about/HistoryTimeline"
import President from "@/components/v3/about/President";
import SustainabilityInitiatives from "@/components/v3/about/SustainabilityInitiatives";
import Members from "@/components/v3/about/Members";
import Footer from "@/components/v2/footer";

export default function About() {
    return (
          <div className="">
              <Header backgroundImage="/About/about-hero.png" backgroundType="image" title="About Us" description="Bharat Diamond Bourse (BDB) is the world's largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <DiamondhubSection/>
              <Mission/>
              <HistoryTimeline/>
              <President/>
              <SustainabilityInitiatives/>
              <Members/>
              <Footer/>
          </div>
    );
  }