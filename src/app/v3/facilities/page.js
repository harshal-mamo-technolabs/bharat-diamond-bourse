import Header from "@/components/v3/about/Header";
import CustomsIDTC from "@/components/v3/facility/CustomsIDTC";
import FacilitiesSection from "@/components/v3/facility/FacilitiesSection";
import SportsFacilities from "@/components/v3/facility/SportsFacilities";
import RestaurantsSection from "@/components/v3/facility/ResturantsSection";
import BankingSection from "@/components/v3/facility/BankingSection";
import WorldClassSection from "@/components/v3/facility/WorldClassSection";
import AncillariesSection from "@/components/v3/facility/AncillariesSection";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function Facilities() {
    return (
          <div className="">
              <Header backgroundImage="/facilities/facility-hero.png" backgroundType="image" title="Facilities" breadcrumb="HOME / FACILITIES" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <CustomsIDTC/>
              <FacilitiesSection/>
              <SportsFacilities/>
              <RestaurantsSection/>
              <BankingSection/>
              <WorldClassSection/>
              <AncillariesSection/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }