import Header from "@/components/v3/about/Header";
import Contact from "@/components/v3/Contact/Contact";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function ContactUs() {
    return (
          <div className="">
              <Header backgroundImage="/contact-hero.png" backgroundType="image" title="CONTACT US" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <Contact/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }