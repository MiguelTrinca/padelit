import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeroSectionType = {
  newsletterTitle?: string;
  newsletterDescription?: string;
  
  showHintName?: boolean,
  hintName?: string
  showHintEmail?: boolean,
  hintEmail?: string,

};

const HeroSection: NextPage<HeroSectionType> = ({
  newsletterTitle,
  newsletterDescription,

  showHintName,
  hintName,
  showHintEmail,
  hintEmail,

}) => {
  
  return (
    <div
      className="rounded-5xs h-[566px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-5 px-10 box-border bg-[url('/image-alignmentbottom-typeform-backgroundsimple@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-21xl text-dark-gray font-inter self-stretch"
      style={{height: "818px", backgroundImage: "url('/hero-sections@3x.png')"}}
    >
      <div className="w-[518px] flex flex-col items-start justify-start gap-[20px] max-w-[960px] md:w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <b
            className="self-stretch relative leading-[120%]"
            style={{fontSize: "60px", color:"#fff", fontFamily: "Inter"}}
          >
            {newsletterTitle}
          </b>
          <div
            className="self-stretch relative text-base leading-[24px]"
            style={{fontSize: "20px", color:"#fff", fontFamily: "Inter"}}
          >
            {newsletterDescription}
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-white flex flex-col items-center justify-end p-5 gap-[16px] text-sm">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div
                  className="self-stretch relative leading-[22px] text-dark-blue"
                >
                  First Name
                </div>
                <input
                  className="self-stretch rounded-default-border-raius bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-grey-white 
                  font-inter text-base text-gray-blue"
                  placeholder="John Doe"
                  type="text"
                />
                {showHintName && (
                  <div
                    className="self-stretch relative text-xs leading-[20px] text-gray-blue show"
                  >
                    {hintName}
                  </div>
                )}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div
                  className="self-stretch relative leading-[22px] text-dark-blue"
                >
                  Email
                </div>
                <input
                  className="self-stretch rounded-default-border-raius bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-grey-white 
                  font-inter text-base text-gray-blue"
                  placeholder="john.doe@padelit.com"
                  type="email"
                />
                {showHintEmail && (
                  <div
                    className="self-stretch relative text-xs leading-[20px] text-gray-blue show"
                  >
                    {hintEmail}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow">
            <div className="relative text-sm leading-[22px] font-inter text-white text-center">
              Subscribe to Newsletter
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
