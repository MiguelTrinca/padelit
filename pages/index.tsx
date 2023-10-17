import type { NextPage } from "next";
import ExitingFeaturesSection from "../components/landing-page/sections/exiting-features-section";
import FooterSection from "../components/landing-page/sections/footer-section";
import HeroSection from "../components/landing-page/sections/hero-section";
import Nav from "../components/landing-page/landing-navbar";


const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start">
      
      <HeroSection/>
      <Nav/>
      <ExitingFeaturesSection/>
      <FooterSection/>
           
    </div>
  );
};

export default Home;