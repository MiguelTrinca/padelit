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
    <div className="relative rounded-xl bg-white shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[120px] h-[160px] m-5 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px] text-center text-[18,5px] text-dark-blue font-inter">
      <div className="relative mb-2">{title}</div>
      <div className="w-10 h-10 flex flex-row items-center justify-center">
        <img className="relative w-[20] h-[20]" alt="" src={icon}/>
      </div>
    </div>  
  )
}

export default RewardCard