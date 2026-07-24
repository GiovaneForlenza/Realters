import HomeHero from "../components/home page/HomeHero";
import OurStory from "../components/home page/OurStory";
import WhoWeAre from "../components/home page/WhoWeAre";
import InvestmentCards from "../components/InvestmentCards";
import LineDivider from "../components/LineDivider";

function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <HomeHero />
      <WhoWeAre />
      <LineDivider />
      <InvestmentCards />
      <OurStory />
    </div>
  );
}

export default Home;
