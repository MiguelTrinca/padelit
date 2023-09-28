import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ExitingMoreFeaturesSectionType = {
  imageCode?: string;
  imageCode2?: string;
  imageCodeUrl?: string;
  imageCodeDimensions?: string;
  imageCodeDimensionsUrl?: string;
  imageCodeText?: string;

  /** Style props */
  property1OtherFeaturesZIndex?: CSSProperties["zIndex"];
  frameDivWidth?: CSSProperties["width"];
  exitingMoreFeaturesTextAlign?: CSSProperties["textAlign"];
  exitingMoreFeaturesAlignSelf?: CSSProperties["alignSelf"];
  theseExcitingNewTextAlign?: CSSProperties["textAlign"];
  theseExcitingNewAlignSelf?: CSSProperties["alignSelf"];
};

const ExitingMoreFeaturesSection: NextPage<ExitingMoreFeaturesSectionType> = ({
  imageCode,
  imageCode2,
  imageCodeUrl,
  imageCodeDimensions,
  imageCodeDimensionsUrl,
  imageCodeText,
  property1OtherFeaturesZIndex,
  frameDivWidth,
  exitingMoreFeaturesTextAlign,
  exitingMoreFeaturesAlignSelf,
  theseExcitingNewTextAlign,
  theseExcitingNewAlignSelf,
}) => {
  const property1OtherFeaturesStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: property1OtherFeaturesZIndex,
    };
  }, [property1OtherFeaturesZIndex]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const exitingMoreFeaturesStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: exitingMoreFeaturesTextAlign,
      alignSelf: exitingMoreFeaturesAlignSelf,
    };
  }, [exitingMoreFeaturesTextAlign, exitingMoreFeaturesAlignSelf]);

  const theseExcitingNewStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: theseExcitingNewTextAlign,
      alignSelf: theseExcitingNewAlignSelf,
    };
  }, [theseExcitingNewTextAlign, theseExcitingNewAlignSelf]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-start py-[50px] px-5 box-border gap-[40px] text-center text-lg text-black font-text-small self-stretch"
      style={property1OtherFeaturesStyle}
    >
      <div
        className="flex flex-col items-center justify-start gap-[6px] text-left text-21xl text-dark-blue"
        style={frameDivStyle}
      >
        <b className="relative leading-[120%]" style={exitingMoreFeaturesStyle}>
          Exiting More Features
        </b>
        <div
          className="relative text-base leading-[24px]"
          style={theseExcitingNewStyle}
        >{`These exciting new features will be at your fingertips in no time! `}</div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[23px]">
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCode}
          />
          <div className="relative leading-[22px] font-semibold">
            Showcase your Badges
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-dark-blue">
            Earn recognition for your achievements and stand out from the crowd
            with our unique badges.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCode2}
          />
          <div className="relative leading-[22px] font-semibold">
            Book Padel Courts
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-dark-blue">
            Reserve your desired padel court and secure your spot for a match
            through our booking feature.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCodeUrl}
          />
          <div className="relative leading-[22px] font-semibold">
            Affiliate Program
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-dark-blue">
            Share the excitement of our platform with others and reap the
            benefits of your referrals
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[23px]">
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCodeDimensions}
          />
          <div className="relative leading-[22px] font-semibold">
            Join Vast Communities
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-dark-blue">
            Connect with other players within our communities! Discuss
            strategies, and share experiences!
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCodeDimensionsUrl}
          />
          <div className="relative leading-[22px] font-semibold">
            Buy Premium Merchandise
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-dark-blue">
            Show off your love for padel with our exclusive merchandise. Stylish
            apparel, rackets and accessories!
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] min-w-[200px]">
          <img
            className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
            alt=""
            src={imageCodeText}
          />
          <div className="relative leading-[22px] font-semibold">
            Ranked Matchmaking
          </div>
          <div className="self-stretch relative text-sm leading-[22px] text-darkslategray">
            Engage in games against players who match your skill level. An ideal
            opportunity to enhance your abilities and improve your rank!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitingMoreFeaturesSection;
