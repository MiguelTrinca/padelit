import type { NextPage } from "next";
import FeatureCard from "./feature-card";

type FeaturesListType = {
  icon1: string,
  icon2: string,
  icon3: string,

  title1: string;
  title2: string;
  title3: string;

  description1: string;
  description2: string;
  description3: string;

};

const FeaturesList: NextPage<FeaturesListType> = ({
  icon1,
  icon2,
  icon3,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3
}) => {
  
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[100px]">
        <FeatureCard
          icon={icon1}
          title={title1}
          description={description1}
        />
        <FeatureCard
          icon={icon2}
          title={title2}
          description={description2}
        />
        <FeatureCard
          icon={icon3}
          title={title3}
          description={description3}
        />
      </div>
  )
}

export default FeaturesList;