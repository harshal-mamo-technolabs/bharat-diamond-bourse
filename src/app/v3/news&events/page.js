import Header from "@/components/v3/about/Header";
import News from "@/components/v3/NewsEvents/News";
import Footer from "@/components/v2/footer";

export default function About() {
    return (
          <div className="">
              <Header backgroundImage="/events/news-hero.png" backgroundType="image" title="News & Events" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <News/>
              <Footer/>
          </div>
    );
  }