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
              <Header backgroundImage="/facilities/facility-hero.png" backgroundType="image" title="Facilities" breadcrumb="HOME / FACILITIES" description="BDB provides a complete environment for diamond businesses with customs offices, banking halls, gem testing laboratories, trading halls, safe vaults, travel services, logistics support, telecom infrastructure, cafés, food courts and recreation spaces." showDivider={true}/>
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