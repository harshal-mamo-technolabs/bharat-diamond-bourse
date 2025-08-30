import Header from "@/components/Page2/Header";
import Feature from "@/components/Page2/Feature";
import BourseSection from "@/components/Page2/BourseSection";
import WorldClassFacilities from "@/components/Page2/WorldclassFacilities";
import Trust from "@/components/Page2/Trust";
import Insights from "@/components/Page2/InSights";
import PartnerSection from "@/components/Page2/PartnerSection";
import Footer from "@/components/Page2/footer";

export default function Home(){
    return (
    <div className="">
        <Header/>
        <Feature/>
        <BourseSection/>
        {/* <WorldClassFacilities/> */}
        <Trust/>
        <Insights/>
        <PartnerSection/>
        <Footer/>
    </div>
    )
}