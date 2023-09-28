import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TestimonialSectionType = {
  /** Style props */
  testimonialSectionZIndex?: CSSProperties["zIndex"];
  textWrapperJustifyContent?: CSSProperties["justifyContent"];
  wrapperJustifyContent?: CSSProperties["justifyContent"];
  wrapperGap?: CSSProperties["gap"];
};

const TestimonialSection: NextPage<TestimonialSectionType> = ({
  testimonialSectionZIndex,
  textWrapperJustifyContent,
  wrapperJustifyContent,
  wrapperGap,
}) => {
  const testimonialSectionStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: testimonialSectionZIndex,
    };
  }, [testimonialSectionZIndex]);

  const textWrapperStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: textWrapperJustifyContent,
    };
  }, [textWrapperJustifyContent]);

  const wrapperStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: wrapperJustifyContent,
      gap: wrapperGap,
    };
  }, [wrapperJustifyContent, wrapperGap]);

  return (
    <div
      className="bg-dark-blue flex flex-col items-center justify-center py-[72px] px-0 box-border gap-[80px] text-left text-21xl text-white font-text-small self-stretch"
      style={testimonialSectionStyle}
    >
      <div
        className="overflow-hidden flex flex-row items-center justify-center"
        style={textWrapperStyle}
      >
        <div className="relative leading-[48px] font-semibold">
          How Users Rate Us
        </div>
      </div>
      <div
        className="w-full flex flex-row flex-wrap items-center justify-center gap-[72px] max-w-[900px] text-center text-base text-dark-blue"
        style={wrapperStyle}
      >
        <div className="rounded-5xs bg-white shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] w-[252px] flex flex-col items-center justify-start py-6 px-4 box-border gap-[24px] min-w-[204px]">
          <img
            className="relative rounded-[50%] w-[119.98px] h-[119.98px] object-cover"
            alt=""
            src="/ellipse-21@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Jay Smith
            </div>
            <div className="relative text-xs leading-[20px] text-gray-blue text-left">
              Web Designer
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
          </div>
        </div>
        <div className="rounded-5xs bg-white shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] w-[252px] flex flex-col items-center justify-start py-6 px-4 box-border gap-[24px] min-w-[204px]">
          <img
            className="relative rounded-[50%] w-[119.98px] h-[119.98px] object-cover"
            alt=""
            src="/ellipse-22@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Jerome Bell
            </div>
            <div className="relative text-xs leading-[20px] text-gray-blue text-left">
              Web Designer
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
          </div>
        </div>
        <div className="rounded-5xs bg-white shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] w-[252px] flex flex-col items-center justify-start py-6 px-4 box-border gap-[24px] min-w-[204px]">
          <img
            className="relative rounded-[50%] w-[119.98px] h-[119.98px] object-cover"
            alt=""
            src="/ellipse-23@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Devon Lane
            </div>
            <div className="relative text-xs leading-[20px] text-gray-blue text-left">
              Web Designer
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
            <img className="relative w-5 h-[19px]" alt="" src="/vector4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
