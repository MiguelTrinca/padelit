import type { NextPage } from "next";
import FeaturesList from "../features-list";

type ExitingFeaturesSectionType = {
  
};

const ExitingFeaturesSection: NextPage<ExitingFeaturesSectionType> = ({

}) => {
  
  return (
    <div
      className="bg-white flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[120px] text-center text-lg text-dark-blue font-inter self-stretch"
    >
      <div
        className="flex flex-col items-center justify-start gap-[6px] text-left text-21xl text-dark-blue"
      >
        <b className="relative leading-[120%] text-center">
          Exiting Features
        </b>
        <div className="relative text-base leading-[24px]">
          We are exicted to showcase these amazing features as soon as possible. Make sure you <span className="font-semibold text-accent-yellow">subscribe to the newsletter</span> to keep up to date a earn rewards!
        </div>
      </div>

      <FeaturesList
        icon1="/heroiconsusergroupsolid1.svg"
        title1="Look for Group"
        description1="Find and connect with fellow players who share your passion, and play together! Create a post detailing time, date and location."
        
        icon2="/icoutlinesearch1.svg"
        title2="Search for Padel Courts"
        description2="Explore a wide range of available courts based on location, availability and indoor or outdoor."

        icon3="/icbaselinerocket7.svg"
        title3="Teams and Tournaments"
        description3="Unite with like-minded players and form unstoppable teams. Compete in tournaments to prove your dominance!"

      />
      
          
      <FeaturesList
        icon1="/icbaselinerocket9.svg"
        title1="Showcase your Badges"
        description1="Earn recognition for your achivement and stand out from the crowd with our unique badges."
        
        icon2="/icbaselinerocket10.svg"
        title2="Book Padel Courts"
        description2="Reserve your desired padel court and secure your spot for a match through our booking feature."

        icon3="/icbaselinerocket11.svg"
        title3="Affiliate Program"
        description3="Share the excitement of our platform with others and reap the
        benefits of your referrals."

      />

      <FeaturesList
        icon1="/icbaselinerocket12.svg"
        title1="Join Vast Communities"
        description1="Connect with other players within our communities! Discuss
        strategies, and share experiences!"
        
        icon2="/icbaselinerocket13.svg"
        title2="Buy Premium Merchandises"
        description2="Show off your love for padel with our exclusive merchandise. Stylish apparel, rackets and accessories!"

        icon3="/phcrownsimple1.svg"
        title3="Ranked Matchmaking"
        description3=" Engage in games against players who match your skill level. An ideal opportunity to enhance your abilities and improve your rank!"

      />
      
    </div>
  );
};

export default ExitingFeaturesSection;
