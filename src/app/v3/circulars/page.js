import Header from "@/components/v3/about/Header";
import Circulars from "@/components/v3/circulars/circular";
import Footer from "@/components/v2/footer";

export default function Circular() {
    return (
          <div className="">
              <Header backgroundImage="/circular-hero.png" backgroundType="image" title="CIRCULARS" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <Circulars/>
              <Footer/>
          </div>
    );
  }