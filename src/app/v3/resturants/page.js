import Header from "@/components/v3/about/Header";
import Resturant from "@/components/v3/Resturants/resturant";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function Resturants() {
    return (
          <div className="">
              <Header backgroundImage="/resturant-hero.png" backgroundType="image" title="RESTURANTS" breadcrumb="HOME / FACILITIES / RESTURANTS" description="Bharat Diamond Bourse offers a convenient and comfortable dining experience with multiple restaurants located within the premises. Each restaurant provides quality food, clean seating areas and efficient service for members, visitors and staff." showDivider={true}/>
              <Resturant/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }