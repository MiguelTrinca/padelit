import type { NextPage } from "next";

const ClientCommentsContainer: NextPage = () => {
  return (
    <div className="absolute top-[3617px] left-[-7px] bg-gray-100 w-[1932px] h-[727px] flex flex-col items-center justify-center py-[60px] px-[168px] box-border text-center text-sm text-sandybrown-100 font-dm-sans">
      <div className="flex flex-col items-center justify-center relative gap-[18px]">
        <div className="flex flex-col items-center justify-start z-[0]">
          <b className="relative tracking-[2.1px] leading-[55.5px] uppercase inline-block w-[142px] h-10 shrink-0">
            Testimonies
          </b>
          <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-white items-center justify-center w-[425px] h-[65px] shrink-0 mt-[-5px]">
            Our Padel Players!
          </b>
        </div>
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-center py-[30px] px-[43px] z-[1] text-left text-base text-gold font-font-awesome-5-free">
          <div className="rounded-4xl bg-white w-[422px] h-[437px] flex flex-col items-center justify-center gap-[37px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <div className="relative tracking-[1.6px] leading-[32px] flex items-center w-[126px] h-8 shrink-0">
                  
                </div>
                <b className="relative leading-[33px] flex font-dm-sans text-darkslategray items-center w-[250px] h-[33px] shrink-0">{`Design Quality & performance`}</b>
              </div>
              <div className="relative text-lg leading-[38px] font-dm-sans text-darkslategray inline-block w-[368px] h-[146px] shrink-0">
                This Padel App is absolutely amazing! The 'Looking For Group'
                feature helps me find teammates easily, and the dynamic
                tournaments keep the competition thrilling.
              </div>
            </div>
            <div className="w-[382px] flex flex-row items-center justify-start py-2.5 px-1.5 box-border gap-[20px] text-gray-200 font-dm-sans">
              <img
                className="relative rounded-[50%] w-[55px] h-[55px] object-cover"
                alt=""
                src="/ellipse@2x.png"
              />
              <div className="flex flex-col items-start justify-center">
                <b className="relative tracking-[-0.4px] leading-[44px] flex items-center w-[142px] h-8 shrink-0">
                  Denny Hilguston
                </b>
                <div className="relative text-mini tracking-[-0.37px] leading-[44.5px] font-medium text-cornflowerblue flex items-center w-[100px] h-4 shrink-0 mt-[-4px]">
                  @denny.hil
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[619px] left-[214px] w-[79.98px] h-[19px] object-cover z-[2]"
          alt=""
          src="/slide-switcher.png"
        />
      </div>
    </div>
  );
};

export default ClientCommentsContainer;
