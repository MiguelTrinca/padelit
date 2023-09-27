import type { NextPage } from "next";

type MoreFeaturesType = {
  icon?: string;
  feature?: string;
  description?: string;
};

const MoreFeatures: NextPage<MoreFeaturesType> = ({
  icon,
  feature,
  description,
}) => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-lg text-gray-200 font-dm-sans">
      <div className="flex flex-row items-start justify-start gap-[25px]">
        <img
          className="relative w-[82px] h-[82px] object-cover"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <b className="relative flex items-center w-[227px] h-3 shrink-0">
            {feature}
          </b>
          <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
