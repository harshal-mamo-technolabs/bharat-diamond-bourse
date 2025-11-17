import Header from "@/components/v3/about/Header";
import MembersDirectory from "@/components/v3/membersdirectory/MembersDirectory";
import Footer from "@/components/v2/footer";
import ScrollToTop from "@/components/v3/ScrollToTop";

export default function membersdirectory() {
    return (
          <div className="">
              <Header backgroundImage="/members-directory/dir-hero.png" backgroundType="image" title="MEMBERS DIRECTORY" description="Search verified member companies, explore profiles, view business details and connect with the trusted community of diamond traders." showDivider={true}/>
              <MembersDirectory/>
              <Footer/>
              <ScrollToTop />
          </div>
    );
  }