import type { NextPage } from "next";
import RewardCard from "../reward-card";

const RewardsSection: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[34px] px-[49px] gap-[40px] text-center text-31xl text-dominant font-text-large md:gap-[100px] md:items-center md:justify-between sm:w-auto sm:[align-self:unset] sm:flex-col sm:gap-[40px] sm:pl-[49px] sm:box-border relative">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-10 px-[181px] sm:flex-col sm:items-start sm:justify-between sm:gap-[0px] sm:pl-2.5 sm:pr-[30px] sm:box-border">
        <b className="flex-1 relative font-inter text-50x1 text-white sm:flex-[unset] sm:self-stretch">
          Rewards
        </b>
      </div>
      <div className="self-stretch flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-between py-[45px] px-[26px] text-mini text-black md:self-stretch md:w-auto md:gap-[150px] md:items-center md:justify-start sm:self-stretch sm:w-auto sm:flex-col sm:gap-[50px] sm:items-start sm:justify-between sm:pl-10 sm:pr-10 sm:box-border">
        <RewardCard title="Development News" icon="/newsletter/news-icon.svg" />
        <RewardCard title="Premium" icon="/newsletter/premium-icon.svg" />
        <RewardCard title="Unique Badge" icon="/newsletter/badge-icon.svg" />
        <RewardCard title="Merch Discount" icon="/newsletter/sale-icon.svg" />
        <RewardCard title="Beta Features" icon="/newsletter/betafeatures-icon.svg" />
        <RewardCard title="Much More" icon="/newsletter/more-icon.svg" />
      </div>
    </div>
  );
};

export default RewardsSection;
