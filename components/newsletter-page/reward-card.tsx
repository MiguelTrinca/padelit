import React from 'react'
import type { NextPage } from "next";

type RewardCardType = {
  icon: string;
  title: string;
};

const RewardCard: NextPage<RewardCardType> = ({
  icon,
  title,
}) => {
  return (
    <div className="relative rounded-xl bg-white shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[160px] h-[200px] m-10 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px] text-center text-[15px] text-dark-blue font-inter">
      <div className="relative">{title}</div>
      <div className="w-20 h-20 flex flex-row items-center justify-center">
        <img className="relative w-[60.24px] h-[60.24px]" alt="" src={icon}/>
      </div>
    </div>  
  )
}

export default RewardCard