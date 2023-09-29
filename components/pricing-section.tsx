import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type PricingSectionType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsId?: string;
  imageDimensionsTextId?: string;
  imageDimensionsTimestamp?: string;
  imageDimensionsKey?: string;
  imageDimensionsTimestampT?: string;
  imageDimensionsUniqueId?: string;
  imageDimensionsCode?: string;
  imageDimensionsTextCode?: string;
  imageDimensionsTextCode2?: string;
  imageDimensionsTextId2?: string;

  /** Style props */
  plansZIndex?: CSSProperties["zIndex"];
  plansWrapperAlignSelf?: CSSProperties["alignSelf"];
  basicWidth?: CSSProperties["width"];
  basicFlexShrink?: CSSProperties["flexShrink"];
  basicFlex?: CSSProperties["flex"];
  hobbyWidth?: CSSProperties["width"];
  hobbyFlexShrink?: CSSProperties["flexShrink"];
  hobbyFlex?: CSSProperties["flex"];
  planNameBorder?: CSSProperties["border"];
  hobbyColor?: CSSProperties["color"];
  buttonBorder?: CSSProperties["border"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonColor?: CSSProperties["color"];
  proWidth?: CSSProperties["width"];
  proFlexShrink?: CSSProperties["flexShrink"];
  proFlex?: CSSProperties["flex"];
};

const PricingSection: NextPage<PricingSectionType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsId,
  imageDimensionsTextId,
  imageDimensionsTimestamp,
  imageDimensionsKey,
  imageDimensionsTimestampT,
  imageDimensionsUniqueId,
  imageDimensionsCode,
  imageDimensionsTextCode,
  imageDimensionsTextCode2,
  imageDimensionsTextId2,
  plansZIndex,
  plansWrapperAlignSelf,
  basicWidth,
  basicFlexShrink,
  basicFlex,
  hobbyWidth,
  hobbyFlexShrink,
  hobbyFlex,
  planNameBorder,
  hobbyColor,
  buttonBorder,
  buttonBackgroundColor,
  buttonColor,
  proWidth,
  proFlexShrink,
  proFlex,
}) => {
  const plansStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: plansZIndex,
    };
  }, [plansZIndex]);

  const plansWrapperStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: plansWrapperAlignSelf,
    };
  }, [plansWrapperAlignSelf]);

  const basicStyle: CSSProperties = useMemo(() => {
    return {
      width: basicWidth,
      flexShrink: basicFlexShrink,
      flex: basicFlex,
    };
  }, [basicWidth, basicFlexShrink, basicFlex]);

  const hobbyStyle: CSSProperties = useMemo(() => {
    return {
      width: hobbyWidth,
      flexShrink: hobbyFlexShrink,
      flex: hobbyFlex,
    };
  }, [hobbyWidth, hobbyFlexShrink, hobbyFlex]);

  const planNameStyle: CSSProperties = useMemo(() => {
    return {
      border: planNameBorder,
    };
  }, [planNameBorder]);

  const hobby1Style: CSSProperties = useMemo(() => {
    return {
      color: hobbyColor,
    };
  }, [hobbyColor]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonBorder,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBorder, buttonBackgroundColor]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  const proStyle: CSSProperties = useMemo(() => {
    return {
      width: proWidth,
      flexShrink: proFlexShrink,
      flex: proFlex,
    };
  }, [proWidth, proFlexShrink, proFlex]);

  return (
    <div
      className="bg-white overflow-hidden flex flex-col items-center justify-start py-[39px] px-28 box-border gap-[41px] text-center text-29xl text-dark-blue font-inter self-stretch"
      style={plansStyle}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start p-2.5">
        <div className="relative font-semibold inline-block w-[345px]">{`Plans & Pricing`}</div>
      </div>
      <div
        className="flex flex-row flex-wrap items-start justify-center gap-[32px] text-left text-sm"
        style={plansWrapperStyle}
      >
        <div
          className="rounded-5xs box-border w-[228px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 gap-[10px] border-[1px] border-solid border-grey-white"
          style={basicStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[10px]">
            <div className="rounded-5xs flex flex-row items-center justify-center py-1 px-3 border-[1px] border-solid border-grey-white">
              <div className="relative leading-[120%] uppercase font-semibold">
                Basic
              </div>
            </div>
            <div className="relative text-29xl leading-[120%] font-semibold">
              $Free
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-2.5 gap-[10px] text-center text-mini">
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensions}
              />
              <div className="relative leading-[120%] font-semibold">
                5 LFG Post
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsText}
              />
              <div className="relative leading-[120%] font-semibold">
                Search Padel Courts
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsId}
              />
              <div className="relative leading-[120%] font-semibold">
                Book Padel Courts
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTextId}
              />
              <div className="relative leading-[120%] font-semibold">
                Statistics
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-gray-blue hover:bg-gainsboro-100">
            <div className="relative text-xs leading-[20px] font-inter text-dark-blue text-center">
              Start today
            </div>
          </button>
        </div>
        <div
          className="rounded-5xs bg-dark-blue w-[228px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-white"
          style={hobbyStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[10px]">
            <div className="flex flex-row items-center justify-center">
              <div
                className="rounded-5xs flex flex-row items-center justify-center py-1 px-3 border-[1px] border-solid border-white"
                style={planNameStyle}
              >
                <div
                  className="relative leading-[120%] uppercase font-semibold"
                  style={hobby1Style}
                >
                  Hobby
                </div>
              </div>
            </div>
            <div className="relative text-29xl leading-[120%] font-semibold">
              $3,99
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-2.5 gap-[10px] text-center text-mini">
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTimestamp}
              />
              <div className="relative leading-[120%] font-semibold">
                Basic Plan + 5 LFG
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsKey}
              />
              <div className="relative leading-[120%] font-semibold">
                Create and Join Teams
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTimestampT}
              />
              <div className="relative leading-[120%] font-semibold">
                Play Tournaments
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsUniqueId}
              />
              <div className="relative leading-[120%] font-semibold">
                5% on Merchandise
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-1.5 px-4 bg-white rounded-xl overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue-200"
            style={buttonStyle}
          >
            <div
              className="relative text-xs leading-[20px] font-inter text-dark-blue text-center"
              style={button1Style}
            >
              Start today
            </div>
          </button>
        </div>
        <div
          className="rounded-5xs bg-white box-border w-[228px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 gap-[10px] border-[1px] border-solid border-grey-white"
          style={proStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 gap-[10px]">
            <div className="rounded-5xs flex flex-row items-center justify-center py-1 px-3 border-[1px] border-solid border-grey-white">
              <div className="relative leading-[120%] uppercase font-semibold">
                Pro
              </div>
            </div>
            <div className="relative text-29xl leading-[120%] font-semibold">
              $9,99
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-2.5 gap-[10px] text-center text-mini">
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsCode}
              />
              <div className="relative leading-[120%] font-semibold">
                Hobby Plan + 10 LFG
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px]">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTextCode}
              />
              <div className="relative leading-[120%] font-semibold">
                Ranked Matchmaking
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px] text-left">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTextCode2}
              />
              <div className="relative leading-[120%] font-semibold flex items-center w-[156px] shrink-0">
                Host Tournaments
              </div>
            </div>
            <div className="h-[38px] flex flex-row items-center justify-center gap-[10px] text-left">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src={imageDimensionsTextId2}
              />
              <div className="relative leading-[120%] font-semibold flex items-center w-[156px] shrink-0">
                10% on Merchandise
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-gray-blue hover:bg-gainsboro-100">
            <div className="relative text-xs leading-[20px] font-inter text-dark-blue text-center">
              Start today
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
