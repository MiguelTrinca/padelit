import type { NextPage } from "next";
import HeroSection from "../components/hero-section";
import NavbarSection from "../components/navbar-section";
import QualityFeaturesSection from "../components/quality-features-section";
import TestimonialSection from "../components/testimonial-section";
import ExitingMoreFeaturesSection from "../components/landing-page/sections/exiting-features-section";
import PricingSection from "../components/pricing-section";
import FooterSection from "../components/footer-section";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start">
      <HeroSection
        newsletterTitle="Experience Padel like Never Before!"
        newsletterDescription="We are hard at work building PadelIt. We cannot be more exited for you to join us! Right now you can sign up for the newsletter and get additional rewards!  "
        hintName="This is a hint text for the user"
        showHintName={false}
      />

      <NavbarSection/>
      <ExitingMoreFeaturesSection/>
      <FooterSection
        dimension="/locouilogo4.svg"
        dimensionText="/locoui4.svg"
        dimensionValue="/vector5.svg"
        dimensionTextValue="/vector6.svg"
        dimensionTextValueImage="/vector7.svg"
        footerZIndex="6"
      />


      {/*<QualityFeaturesSection
        imageDimensions="/heroiconsusergroupsolid1.svg"
        imageDimensionsText="/icoutlinesearch1.svg"
        imageDimensionsCode="/icbaselinerocket7.svg"
        imageDimensionsId="/icbaselinerocket8.svg"
        property1QualityFeaturesAlignSelf="stretch"
        property1QualityFeaturesZIndex="2"
        feauteHighlightWidth="unset"
        feauteHighlightAlignSelf="stretch"
      />*/}
      {/*<TestimonialSection
        testimonialSectionZIndex="3"
        textWrapperJustifyContent="space-between"
        wrapperJustifyContent="space-between"
        wrapperGap="unset"
      />*/}
      {/*<PricingSection
        imageDimensions="/icon5.svg"
        imageDimensionsText="/icon5.svg"
        imageDimensionsId="/icon5.svg"
        imageDimensionsTextId="/icon5.svg"
        imageDimensionsTimestamp="/icon6.svg"
        imageDimensionsKey="/icon6.svg"
        imageDimensionsTimestampT="/icon6.svg"
        imageDimensionsUniqueId="/icon6.svg"
        imageDimensionsCode="/icon7.svg"
        imageDimensionsTextCode="/icon8.svg"
        imageDimensionsTextCode2="/icon8.svg"
        imageDimensionsTextId2="/icon8.svg"
        plansZIndex="5"
        plansWrapperAlignSelf="stretch"
        basicWidth="unset"
        basicFlexShrink="unset"
        basicFlex="1"
        hobbyWidth="unset"
        hobbyFlexShrink="unset"
        hobbyFlex="1"
        planNameBorder="1px solid #feaf53"
        hobbyColor="#feaf53"
        buttonBorder="1px solid #676f82"
        buttonBackgroundColor="#feaf53"
        buttonColor="#fff"
        proWidth="unset"
        proFlexShrink="unset"
        proFlex="1"
      />*/}
      
    </div>
  );
};

export default LandingPage;
