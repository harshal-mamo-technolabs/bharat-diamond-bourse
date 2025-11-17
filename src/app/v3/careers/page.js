import Header from "@/components/v3/about/Header";
import HRComponent from "@/components/v3/careers/HRComponent";
import ServicesSection from "@/components/v3/careers/ServiceSection";
import SportsFacilities from "@/components/v3/careers/SportsFacilities";
import EmployeeReview from "@/components/v3/careers/EmployeeReview";
import OpenPosition from "@/components/v3/careers/OpenPosition";
import Insights from "@/components/v2/Insight";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function Careers() {
    return (
          <div className="">
              <Header backgroundImage="/careers-hero.png" backgroundType="image" title="CAREERS" description="Explore job opportunities and be part of a team contributing to the future of the diamond trade." showDivider={true}/>
              <HRComponent/>
              <ServicesSection/>
              <SportsFacilities/>
              <EmployeeReview/>
              <OpenPosition/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }