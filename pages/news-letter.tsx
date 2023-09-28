import type { NextPage } from "next";

const NewsLetter: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center text-center text-5xl text-white font-montserrat">
      <div className="rounded-4xl bg-dark-blue w-[559px] h-[575px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-8 pb-[21px] pr-10 pl-6 box-border">
        <button className="cursor-pointer [border:none] py-1 px-2.5 bg-[transparent] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="relative w-[17.36px] h-[17.36px]"
            alt=""
            src="/vector9.svg"
          />
        </button>
        <div className="flex-1 flex flex-col items-center justify-center py-0 px-16 gap-[24px] ml-[-24px]">
          <img
            className="relative w-[66.24px] h-[44.76px]"
            alt=""
            src="/combined-shape-16725.svg"
          />
          <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[340px] h-[25px] shrink-0">
            Sign Up for Newsletter
          </h1>
          <h1 className="m-0 relative text-base inline-block w-[312px] font-inherit">
            <span>{`We are hard at work building `}</span>
            <b className="text-accent-yellow">PadelIt.</b>
            <span>
              <span className="font-montserrat">{` We cannot be more `}</span>
              <b className="font-montserrat">exited</b>
              <span className="font-montserrat">{` for you to `}</span>
              <b className="font-montserrat">join us!</b>
              <span className="font-montserrat">{` Right now you can `}</span>
              <b className="font-montserrat">sign up</b>
              <span>{` for the newsletter and get additional `}</span>
            </span>
            <b className="text-accent-yellow">rewards!</b>
            <span>{`  `}</span>
          </h1>
          <div className="flex flex-col items-center justify-center text-mini">
            <div className="w-[312px] h-[33px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[15px]">
              <div className="overflow-hidden flex flex-col items-center justify-center py-0 px-[17px]">
                <div className="relative inline-block w-14 h-[18px] shrink-0">
                  News
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-center justify-center py-0 px-[17px]">
                <div className="relative inline-block w-[75px] h-[18px] shrink-0">
                  Premium
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-center justify-center py-3 px-1">
                <div className="relative">And More</div>
              </div>
            </div>
            <div className="w-[312px] overflow-hidden flex flex-row items-center justify-center gap-[15px] mt-[-10px]">
              <div className="w-[94px] h-[88.24px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[17px] box-border">
                <img
                  className="relative w-[60.24px] h-[60.24px]"
                  alt=""
                  src="/vector10.svg"
                />
              </div>
              <div className="w-[94px] h-[88.24px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[17px] box-border">
                <img
                  className="relative w-[60.24px] h-[60.24px]"
                  alt=""
                  src="/-icon-star.svg"
                />
              </div>
              <div className="w-[94px] h-[88.24px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-3 px-1 box-border">
                <img
                  className="relative w-[67.19px] h-[11.58px]"
                  alt=""
                  src="/more.svg"
                />
              </div>
            </div>
          </div>
          <input
            className="font-montserrat text-xs bg-white box-border w-[312px] h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 px-[18px] border-[1px] border-solid border-gray-400"
            placeholder="john.doe@hotmail.com"
            type="text"
          />
          <div className="w-[312px] flex flex-row items-center justify-end gap-[24px]">
            <div className="relative w-[226px] h-[41px] overflow-hidden shrink-0" />
            <button className="cursor-pointer [border:none] p-2.5 bg-accent-yellow self-stretch flex-1 rounded-41xl flex flex-row items-center justify-center hover:bg-darkorange">
              <b className="relative text-2xs font-montserrat text-white text-center">
                Sign Up
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
