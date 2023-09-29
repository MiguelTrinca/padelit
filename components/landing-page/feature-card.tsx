import type { NextPage } from "next";


type FeatureCardType = {
    icon: string;
    title: string;
    description: string;
};

const FeatureCard: NextPage<FeatureCardType> = ({
    icon,
    title,
    description
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[100px] h-[100px] overflow-hidden shrink-0"
            alt=""
            src={icon}
          />
          <div className="relative leading-[50px] font-semibold text-[30px]">
            {title}
          </div>
          <div className="self-stretch relative text-[18] leading-[22px] text-dark-blue">
            {description}
          </div>
        </div>
  )
}

export default FeatureCard;