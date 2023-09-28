import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FooterSectionType = {
  dimension?: string;
  dimensionText?: string;
  dimensionValue?: string;
  dimensionTextValue?: string;
  dimensionTextValueImage?: string;

  /** Style props */
  footerZIndex?: CSSProperties["zIndex"];
};

const FooterSection: NextPage<FooterSectionType> = ({
  dimension,
  dimensionText,
  dimensionValue,
  dimensionTextValue,
  dimensionTextValueImage,
  footerZIndex,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: footerZIndex,
    };
  }, [footerZIndex]);

  return (
    <div
      className="bg-dark-blue flex flex-row items-start justify-start py-10 px-20 box-border gap-[80px] [border-top:1px] [border-top-style:solid] border-t-darkslategray text-left text-[16.82px] text-white font-text-small self-stretch lg:py-6 lg:px-5 lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray lg:gap-[20px] md:flex-col md:p-10 md:box-border md:gap-[20px] md:mt-[30px] sm:py-[30px] sm:px-6 sm:box-border"
      style={footerStyle}
    >
      <div className="w-[332px] flex flex-col items-start justify-start gap-[63px] lg:w-[329px]">
        <div className="flex flex-row items-center justify-start gap-[15.29px]">
          <img
            className="relative rounded-[12.23px] w-[52px] h-[52px] overflow-hidden shrink-0"
            alt=""
            src={dimension}
          />
          <div className="flex flex-col items-start justify-center gap-[6.12px]">
            <img
              className="relative w-[87.58px] h-[20.73px]"
              alt=""
              src={dimensionText}
            />
            <div className="relative tracking-[-0.04em]">by Team Locofy</div>
          </div>
        </div>
        <div className="relative w-[158.47px] h-[36.57px]">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] w-[36.57px] h-[36.57px] overflow-hidden">
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionValue}
            />
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[121.9px] w-[36.57px] h-[36.57px] overflow-hidden">
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionTextValue}
            />
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[60.95px] w-[36.57px] h-[36.57px] overflow-hidden">
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={dimensionTextValueImage}
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[20px] text-base text-grey-white md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[40px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-semibold text-white">
            Company
          </div>
          <div className="self-stretch relative font-light">About Us</div>
          <div className="self-stretch relative font-light">News</div>
          <div className="self-stretch relative font-light">Careers</div>
          <div className="self-stretch relative font-light">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-semibold text-white">
            Support
          </div>
          <div className="self-stretch relative font-light">FAQ</div>
          <div className="self-stretch relative font-light">US Office</div>
          <div className="self-stretch relative font-light">Asia Office</div>
          <div className="self-stretch relative font-light">Help Center</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-semibold text-white">
            More
          </div>
          <div className="self-stretch relative font-light">
            Become a partner
          </div>
          <div className="self-stretch relative font-light">
            Partner Support
          </div>
          <div className="self-stretch relative font-light">
            Driver Requirements
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-semibold text-white">
            App
          </div>
          <div className="self-stretch relative font-light">Report Bug</div>
          <div className="self-stretch relative font-light">App Helpdesk</div>
          <div className="self-stretch relative font-light">
            Mobile app links
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
