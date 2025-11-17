import Header from "@/components/v3/about/Header";
import Circulars from "@/components/v3/circulars/circular";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function Circular() {
    return (
          <div className="">
              <Header backgroundImage="/circular-hero.png" backgroundType="image" title="CIRCULARS" description="Access the latest circulars, important notices, security updates and downloadable documents issued for BDB members." showDivider={true}/>
              <Circulars/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }