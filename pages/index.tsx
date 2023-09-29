import type { NextPage } from "next";
import ExitingFeaturesSection from "../components/landing-page/sections/exiting-features-section";
import FooterSection from "../components/landing-page/sections/footer-section";
import HeroSection from "../components/landing-page/sections/hero-section";
import NavbarSection from "../components/landing-page/sections/navbar-section";


const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start">
      
      <HeroSection
        newsletterTitle="Experience Padel like Never Before!"
        newsletterDescription="We are hard at work building PadelIt. We cannot be more exited for you to join us! Right now you can sign up for the newsletter and get additional rewards!  "
        hintName="This is a hint text for the user"
        showHintName={false}
      />
      <NavbarSection/>
      <ExitingFeaturesSection/>
      <FooterSection/>
     
    </div>
  );
};

export default Home;