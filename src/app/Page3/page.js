import Header from "@/components/Page3/Header";
import AboutUs from "@/components/Page3/AboutUs";
import Facilities from "@/components/Page3/Facilities";
import WorldDiamondCenterCard from "@/components/Page3/WorldDiamondCenteredCard";
import WhyChooseBDB from "@/components/Page3/WhyChooseBDB";
import Blog from "@/components/Page3/Blog";
import VideoSection from "@/components/Page3/VideoSection";
import Footer from "@/components/Page3/Footer";

export default function Home(){
    return (
    <div className="">
        <Header/>
        <AboutUs/>
        <Facilities/>
        <WorldDiamondCenterCard/>
        <WhyChooseBDB/>
        <Blog/>
        <VideoSection/>
        <Footer/>
    </div>
    )
}