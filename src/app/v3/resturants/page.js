import Header from "@/components/v3/about/Header";
import Resturant from "@/components/v3/Resturants/resturant";
import Footer from "@/components/v2/footer";

export default function Resturants() {
    return (
          <div className="">
              <Header backgroundImage="/resturant-hero.png" backgroundType="image" title="RESTURANTS" breadcrumb="HOME / FACILITIES / RESTURANTS" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <Resturant/>
              <Footer/>
          </div>
    );
  }