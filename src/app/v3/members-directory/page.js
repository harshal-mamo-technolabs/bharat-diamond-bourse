import Header from "@/components/v3/about/Header";
import MembersDirectory from "@/components/v3/membersdirectory/MembersDirectory";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function membersdirectory() {
    return (
          <div className="">
              <Header backgroundImage="/members-directory/dir-hero.png" backgroundType="image" title="MEMBERS DIRECTORY" description="Bharat Diamond Bourse (BDB) is the world’s largest and most prestigious diamond trading hub, bringing together thousands of members across 100+ countries." showDivider={true}/>
              <MembersDirectory/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }