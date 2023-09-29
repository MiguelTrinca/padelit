import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type QualityFeaturesSectionType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsCode?: string;
  imageDimensionsId?: string;

  /** Style props */
  property1QualityFeaturesAlignSelf?: CSSProperties["alignSelf"];
  property1QualityFeaturesZIndex?: CSSProperties["zIndex"];
  feauteHighlightWidth?: CSSProperties["width"];
  feauteHighlightAlignSelf?: CSSProperties["alignSelf"];
};

const QualityFeaturesSection: NextPage<QualityFeaturesSectionType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageDimensionsId,
  property1QualityFeaturesAlignSelf,
  property1QualityFeaturesZIndex,
  feauteHighlightWidth,
  feauteHighlightAlignSelf,
}) => {
  const property1QualityFeaturesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: property1QualityFeaturesAlignSelf,
      zIndex: property1QualityFeaturesZIndex,
    };
  }, [property1QualityFeaturesAlignSelf, property1QualityFeaturesZIndex]);

  const feauteHighlightStyle: CSSProperties = useMemo(() => {
    return {
      width: feauteHighlightWidth,
      alignSelf: feauteHighlightAlignSelf,
    };
  }, [feauteHighlightWidth, feauteHighlightAlignSelf]);

  return (
    <div
      className="flex flex-col items-start justify-start p-2.5 text-left text-21xl text-dark-blue font-inter"
      style={property1QualityFeaturesStyle}
    >
      <div
        className="bg-white w-[978px] flex flex-row flex-wrap items-center justify-center py-10 px-8 box-border gap-[30px] md:flex-col md:mt-[2rem]"
        style={feauteHighlightStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] md:items-center md:justify-center md:flex-[unset] md:self-stretch">
          <b className="self-stretch relative leading-[120%] md:text-center">
            Quality Features
          </b>
          <div className="self-stretch relative text-base leading-[24px] md:text-center">
            Powerful features that will make you enjoy Padel like never before.
          </div>
        </div>
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[40px] text-base md:flex-[unset] md:self-stretch">
          <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[200px]">
            <img
              className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src={imageDimensions}
            />
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Look for Group
              </div>
              <div className="self-stretch relative text-sm leading-[22px]">
                Connect with fellow players who share your passion!
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[200px]">
            <img
              className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src={imageDimensionsText}
            />
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Search for Padel Courts
              </div>
              <div className="self-stretch relative text-sm leading-[22px]">
                Explore a wide range of available courts.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[200px]">
            <img
              className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src={imageDimensionsCode}
            />
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Create and Join Teams
              </div>
              <div className="self-stretch relative text-sm leading-[22px]">
                Unite with like-minded players and form unstoppable teams!
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[200px]">
            <img
              className="relative rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src={imageDimensionsId}
            />
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Statistics
              </div>
              <div className="self-stretch relative text-sm leading-[22px]">
                Keep track of your statistics of the matches you played.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityFeaturesSection;
