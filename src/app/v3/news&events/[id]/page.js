import Header from "@/components/v3/about/Header";
import NewsDetail from "@/components/v3/newsDetail/NewsDetail";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function NewsDetailPage() {
    return (
          <div className="">
              <Header backgroundImage="/events/news-hero.png" backgroundType="image" title="News & Events" breadcrumb="HOME / NEWS & EVENTS" description="Stay updated with announcements, press releases, media coverage and major events happening at Bharat Diamond Bourse." showDivider={true}/>
              <NewsDetail/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }