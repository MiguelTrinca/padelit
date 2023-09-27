import type { NextPage } from "next";
import CoreFeatureContainer from "./core-feature-container";

const CoreFeaturesContainer: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start relative gap-[20px] text-left text-lg text-gray-100 font-dm-sans">
      <CoreFeatureContainer
        icon="/icon3.png"
        feature="Look For Group"
        descritption="Create a post detailing time, date and location, and engage with the vibrant community. Connect with fellow players who share your passion!"
      />
      <CoreFeatureContainer
        icon="/icon4.png"
        feature="Search For Padel Courts"
        descritption="Explore a wide range of available courts based on location, and availability. Whether you prefer indoor or outdoor courts, discover the perfect venue. "
        propZIndex="1"
        propOpacity="unset"
        propWidth="231px"
      />
      <b className="absolute my-0 mx-[!important] top-[422px] left-[87px] text-45xl tracking-[10px] leading-[30px] inline-block text-sandybrown-100 text-center w-[326px] h-9 shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] opacity-[0.8] z-[2]">
        SOON!
      </b>
      <CoreFeatureContainer
        icon="/icon5.png"
        feature="Tournaments"
        descritption="Showcase your skills as you participate in of tournaments. Whether you're a pro or a beginner, our platform offers the ideal tournaments for you."
        propZIndex="3"
        propOpacity="0.4"
        propWidth="165px"
      />
    </div>
  );
};

export default CoreFeaturesContainer;
