import Header from "@/components/v3/about/Header";
import Sustainability from "@/components/v3/sustainability/Sustainibilty";
import Footer from "@/components/v2/footer";

export default function Sustainibility() {
    return (
          <div className="">
              <Header backgroundImage="/sustainibility/sustainability-hero.png" backgroundType="image" title="SUSTAINIBILTY" breadcrumb="HOME / SUSTAINIBILITY" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <Sustainability/>
              <Footer/>
          </div>
    );
  }