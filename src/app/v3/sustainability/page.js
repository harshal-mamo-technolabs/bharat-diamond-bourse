import Header from "@/components/v3/about/Header";
import Sustainability from "@/components/v3/sustainability/Sustainibilty";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function Sustainibility() {
    return (
          <div className="">
              <Header backgroundImage="/sustainibility/sustainability-hero.png" backgroundType="image" title="SUSTAINIBILTY" breadcrumb="HOME / SUSTAINIBILITY" description="BDB is committed to environmental care, responsible operational practices and community welfare. The campus integrates renewable energy systems, water conservation structures and waste management solutions." showDivider={true}/>
              <Sustainability/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }