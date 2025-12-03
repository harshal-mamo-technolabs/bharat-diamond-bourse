import Header from "@/components/version1/Header";
import Partners from "@/components/Partners";
import Facility from "@/components/Facility";
import Footer from "@/components/footer";
import Insights from "@/components/Insight";
import BourseSection from "@/components/BourseSection"
import AboutSection from "@/components/AboutSection";
import PillarOfProgress from "@/components/PillarOfProgress";


export default function Home() {
  return (
    <div className="relative min-h-screen">
    {/* Background Image with Low Opacity */}
    <div 
      className="fixed inset-0 z-0 opacity-20"
      style={{
        backgroundImage: 'url("/bdb-bg-1.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    />
    
    {/* Content Container */}
    <div className="relative z-10">
            <Header/>
            <Partners/>
            <AboutSection/>
            <PillarOfProgress/>
            <Facility/>
            <BourseSection/>
            <Insights/>
            <Footer/>
        </div>
    </div>
  );
}
