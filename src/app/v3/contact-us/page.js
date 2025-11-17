import Header from "@/components/v3/about/Header";
import Contact from "@/components/v3/Contact/Contact";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function ContactUs() {
    return (
          <div className="">
              <Header backgroundImage="/contact-hero.png" backgroundType="image" title="CONTACT US" description="We are here to assist you with membership queries, facility related support, event information and general guidance." showDivider={true}/>
              <Contact/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }