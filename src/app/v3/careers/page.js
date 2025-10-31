import Header from "@/components/v3/about/Header";
import HRComponent from "@/components/v3/careers/HRComponent";
import ServicesSection from "@/components/v3/careers/ServiceSection";
import SportsFacilities from "@/components/v3/careers/SportsFacilities";
import EmployeeReview from "@/components/v3/careers/EmployeeReview";
import OpenPosition from "@/components/v3/careers/OpenPosition";
import Insights from "@/components/v2/Insight";
import Footer from "@/components/v2/footer";

export default function Careers() {
    return (
          <div className="">
              <Header backgroundImage="/careers-hero.png" backgroundType="image" title="CAREERS" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <HRComponent/>
              <ServicesSection/>
              <SportsFacilities/>
              <EmployeeReview/>
              <OpenPosition/>
              <Insights/>
              <Footer/>
          </div>
    );
  }