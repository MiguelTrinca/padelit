import type { NextPage } from "next";

type KeyFeaturesStatsType = {
  icon?: string;
  feature?: string;
  description?: string;
};

const KeyFeaturesStats: NextPage<KeyFeaturesStatsType> = ({
  icon,
  feature,
  description,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[21px] text-center text-lg text-gray-100 font-dm-sans">
      <img
        className="relative w-[110px] h-[110px] overflow-hidden shrink-0 object-cover"
        alt=""
        src={icon}
      />
      <b className="relative leading-[30px] inline-block w-[265px] h-[30px] shrink-0">
        {feature}
      </b>
      <div className="relative text-mini leading-[28px] text-darkslategray inline-block w-[265px]">
        {description}
      </div>
    </div>
  );
};

export default KeyFeaturesStats;
