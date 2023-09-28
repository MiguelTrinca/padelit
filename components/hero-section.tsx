import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeroSectionType = {
  newsletterTitle?: string;
  uxNewsletterDescription?: string;
  promoText?: string;
  emailAddress?: string;
  hintText?: string;
  emailPromoTitle?: string;
  newsletterSubtitle?: string;
  thisIsA?: boolean;
  showEmail?: boolean;
  icon2?: boolean;
  showIcon?: boolean;
  showThisIsA?: boolean;
  thisIsA1?: boolean;

  /** Style props */
  imageAlignmentBottomTypeFHeight?: CSSProperties["height"];
  imageAlignmentBottomTypeFBackgroundImage?: CSSProperties["backgroundImage"];
  imageAlignmentBottomTypeFZIndex?: CSSProperties["zIndex"];
  everythingUXNewsletterFontSize?: CSSProperties["fontSize"];
  everythingUXNewsletterColor?: CSSProperties["color"];
  everythingUXIsFontSize?: CSSProperties["fontSize"];
  everythingUXIsFontFamily?: CSSProperties["fontFamily"];
  everythingUXIsColor?: CSSProperties["color"];
  emailColor?: CSSProperties["color"];
  iconAlignSelf?: CSSProperties["alignSelf"];
  iconFontSize?: CSSProperties["fontSize"];
  iconLineHeight?: CSSProperties["lineHeight"];
  iconFontFamily?: CSSProperties["fontFamily"];
  iconColor?: CSSProperties["color"];
  iconTextAlign?: CSSProperties["textAlign"];
  jeraldinelocofyuiaiAlignSelf?: CSSProperties["alignSelf"];
  jeraldinelocofyuiaiDisplay?: CSSProperties["display"];
  jeraldinelocofyuiaiFlexDirection?: CSSProperties["flexDirection"];
  jeraldinelocofyuiaiAlignItems?: CSSProperties["alignItems"];
  jeraldinelocofyuiaiJustifyContent?: CSSProperties["justifyContent"];
  thisIsAFlexDirection?: CSSProperties["flexDirection"];
  thisIsAAlignItems?: CSSProperties["alignItems"];
  thisIsAJustifyContent?: CSSProperties["justifyContent"];
  thisIsAGap?: CSSProperties["gap"];
  inputFieldDisplay?: CSSProperties["display"];
  inputFieldPosition?: CSSProperties["position"];
  inputFieldFontSize?: CSSProperties["fontSize"];
  inputFieldLineHeight?: CSSProperties["lineHeight"];
  inputFieldFontFamily?: CSSProperties["fontFamily"];
  inputFieldColor?: CSSProperties["color"];
  inputFieldTextAlign?: CSSProperties["textAlign"];
  inputFieldBaseFlexDirection?: CSSProperties["flexDirection"];
  inputFieldBaseAlignItems?: CSSProperties["alignItems"];
  inputFieldBaseGap?: CSSProperties["gap"];
  inputFieldBaseBorder?: CSSProperties["border"];
  inputFieldBaseBackgroundColor?: CSSProperties["backgroundColor"];
  inputFieldBaseBorderRadius?: CSSProperties["borderRadius"];
  inputFieldBasePadding?: CSSProperties["padding"];
  emailColor1?: CSSProperties["color"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivBorder?: CSSProperties["border"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivCursor?: CSSProperties["cursor"];
  iconFontSize1?: CSSProperties["fontSize"];
  iconLineHeight1?: CSSProperties["lineHeight"];
  iconFontFamily1?: CSSProperties["fontFamily"];
  iconColor1?: CSSProperties["color"];
  iconTextAlign1?: CSSProperties["textAlign"];
  imageAlignmentBottomTypeFBorderRadius?: CSSProperties["borderRadius"];
  everythingUXIsLineHeight?: CSSProperties["lineHeight"];
  frameDivGap?: CSSProperties["gap"];
  iconWidth?: CSSProperties["width"];
  iconHeight?: CSSProperties["height"];
  iconOverflow?: CSSProperties["overflow"];
  iconFlexShrink?: CSSProperties["flexShrink"];
  jeraldinelocofyuiaiBorder?: CSSProperties["border"];
  jeraldinelocofyuiaiFontFamily?: CSSProperties["fontFamily"];
  jeraldinelocofyuiaiFontSize?: CSSProperties["fontSize"];
  jeraldinelocofyuiaiBackgroundColor?: CSSProperties["backgroundColor"];
  jeraldinelocofyuiaiFlex?: CSSProperties["flex"];
  jeraldinelocofyuiaiPosition?: CSSProperties["position"];
  jeraldinelocofyuiaiLineHeight?: CSSProperties["lineHeight"];
  jeraldinelocofyuiaiColor?: CSSProperties["color"];
  jeraldinelocofyuiaiTextAlign?: CSSProperties["textAlign"];
  jeraldinelocofyuiaiOverflow?: CSSProperties["overflow"];
  jeraldinelocofyuiaiTextOverflow?: CSSProperties["textOverflow"];
  jeraldinelocofyuiaiWhiteSpace?: CSSProperties["whiteSpace"];
  thisIsAPosition?: CSSProperties["position"];
  thisIsAFontSize?: CSSProperties["fontSize"];
  thisIsALineHeight?: CSSProperties["lineHeight"];
  thisIsAFontFamily?: CSSProperties["fontFamily"];
  thisIsAColor?: CSSProperties["color"];
  thisIsATextAlign?: CSSProperties["textAlign"];
  inputFieldFlexDirection?: CSSProperties["flexDirection"];
  inputFieldAlignItems?: CSSProperties["alignItems"];
  inputFieldJustifyContent?: CSSProperties["justifyContent"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivGap1?: CSSProperties["gap"];
  iconWidth1?: CSSProperties["width"];
  iconHeight1?: CSSProperties["height"];
  iconOverflow1?: CSSProperties["overflow"];
  iconFlexShrink1?: CSSProperties["flexShrink"];
};

const HeroSection: NextPage<HeroSectionType> = ({
  newsletterTitle,
  uxNewsletterDescription,
  promoText,
  emailAddress,
  hintText,
  emailPromoTitle,
  newsletterSubtitle,
  thisIsA,
  showEmail,
  icon2,
  imageAlignmentBottomTypeFHeight,
  imageAlignmentBottomTypeFBackgroundImage,
  imageAlignmentBottomTypeFZIndex,
  everythingUXNewsletterFontSize,
  everythingUXNewsletterColor,
  everythingUXIsFontSize,
  everythingUXIsFontFamily,
  everythingUXIsColor,
  emailColor,
  iconAlignSelf,
  iconFontSize,
  iconLineHeight,
  iconFontFamily,
  iconColor,
  iconTextAlign,
  jeraldinelocofyuiaiAlignSelf,
  jeraldinelocofyuiaiDisplay,
  jeraldinelocofyuiaiFlexDirection,
  jeraldinelocofyuiaiAlignItems,
  jeraldinelocofyuiaiJustifyContent,
  thisIsAFlexDirection,
  thisIsAAlignItems,
  thisIsAJustifyContent,
  thisIsAGap,
  inputFieldDisplay,
  inputFieldPosition,
  inputFieldFontSize,
  inputFieldLineHeight,
  inputFieldFontFamily,
  inputFieldColor,
  inputFieldTextAlign,
  inputFieldBaseFlexDirection,
  inputFieldBaseAlignItems,
  inputFieldBaseGap,
  inputFieldBaseBorder,
  inputFieldBaseBackgroundColor,
  inputFieldBaseBorderRadius,
  inputFieldBasePadding,
  emailColor1,
  frameDivBackgroundColor,
  frameDivBorder,
  frameDivJustifyContent,
  frameDivCursor,
  iconFontSize1,
  iconLineHeight1,
  iconFontFamily1,
  iconColor1,
  iconTextAlign1,
  imageAlignmentBottomTypeFBorderRadius,
  everythingUXIsLineHeight,
  frameDivGap,
  iconWidth,
  iconHeight,
  iconOverflow,
  iconFlexShrink,
  jeraldinelocofyuiaiBorder,
  jeraldinelocofyuiaiFontFamily,
  jeraldinelocofyuiaiFontSize,
  jeraldinelocofyuiaiBackgroundColor,
  jeraldinelocofyuiaiFlex,
  jeraldinelocofyuiaiPosition,
  jeraldinelocofyuiaiLineHeight,
  jeraldinelocofyuiaiColor,
  jeraldinelocofyuiaiTextAlign,
  jeraldinelocofyuiaiOverflow,
  jeraldinelocofyuiaiTextOverflow,
  jeraldinelocofyuiaiWhiteSpace,
  thisIsAPosition,
  thisIsAFontSize,
  thisIsALineHeight,
  thisIsAFontFamily,
  thisIsAColor,
  thisIsATextAlign,
  inputFieldFlexDirection,
  inputFieldAlignItems,
  inputFieldJustifyContent,
  frameDivAlignSelf,
  frameDivGap1,
  iconWidth1,
  iconHeight1,
  iconOverflow1,
  iconFlexShrink1,
  showIcon,
  showThisIsA,
  thisIsA1,
}) => {
  const imageAlignmentBottomTypeFStyle: CSSProperties = useMemo(() => {
    return {
      height: imageAlignmentBottomTypeFHeight,
      backgroundImage: imageAlignmentBottomTypeFBackgroundImage,
      zIndex: imageAlignmentBottomTypeFZIndex,
      borderRadius: imageAlignmentBottomTypeFBorderRadius,
    };
  }, [
    imageAlignmentBottomTypeFHeight,
    imageAlignmentBottomTypeFBackgroundImage,
    imageAlignmentBottomTypeFZIndex,
    imageAlignmentBottomTypeFBorderRadius,
  ]);

  const everythingUXNewsletterStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: everythingUXNewsletterFontSize,
      color: everythingUXNewsletterColor,
    };
  }, [everythingUXNewsletterFontSize, everythingUXNewsletterColor]);

  const everythingUXIsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: everythingUXIsFontSize,
      fontFamily: everythingUXIsFontFamily,
      color: everythingUXIsColor,
      lineHeight: everythingUXIsLineHeight,
    };
  }, [
    everythingUXIsFontSize,
    everythingUXIsFontFamily,
    everythingUXIsColor,
    everythingUXIsLineHeight,
  ]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      color: emailColor,
    };
  }, [emailColor]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: iconAlignSelf,
      fontSize: iconFontSize,
      lineHeight: iconLineHeight,
      fontFamily: iconFontFamily,
      color: iconColor,
      textAlign: iconTextAlign,
      width: iconWidth,
      height: iconHeight,
      overflow: iconOverflow,
      flexShrink: iconFlexShrink,
    };
  }, [
    iconAlignSelf,
    iconFontSize,
    iconLineHeight,
    iconFontFamily,
    iconColor,
    iconTextAlign,
    iconWidth,
    iconHeight,
    iconOverflow,
    iconFlexShrink,
  ]);

  const jeraldinelocofyuiaiStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: jeraldinelocofyuiaiAlignSelf,
      display: jeraldinelocofyuiaiDisplay,
      flexDirection: jeraldinelocofyuiaiFlexDirection,
      alignItems: jeraldinelocofyuiaiAlignItems,
      justifyContent: jeraldinelocofyuiaiJustifyContent,
      border: jeraldinelocofyuiaiBorder,
      fontFamily: jeraldinelocofyuiaiFontFamily,
      fontSize: jeraldinelocofyuiaiFontSize,
      backgroundColor: jeraldinelocofyuiaiBackgroundColor,
      flex: jeraldinelocofyuiaiFlex,
      position: jeraldinelocofyuiaiPosition,
      lineHeight: jeraldinelocofyuiaiLineHeight,
      color: jeraldinelocofyuiaiColor,
      textAlign: jeraldinelocofyuiaiTextAlign,
      overflow: jeraldinelocofyuiaiOverflow,
      textOverflow: jeraldinelocofyuiaiTextOverflow,
      whiteSpace: jeraldinelocofyuiaiWhiteSpace,
    };
  }, [
    jeraldinelocofyuiaiAlignSelf,
    jeraldinelocofyuiaiDisplay,
    jeraldinelocofyuiaiFlexDirection,
    jeraldinelocofyuiaiAlignItems,
    jeraldinelocofyuiaiJustifyContent,
    jeraldinelocofyuiaiBorder,
    jeraldinelocofyuiaiFontFamily,
    jeraldinelocofyuiaiFontSize,
    jeraldinelocofyuiaiBackgroundColor,
    jeraldinelocofyuiaiFlex,
    jeraldinelocofyuiaiPosition,
    jeraldinelocofyuiaiLineHeight,
    jeraldinelocofyuiaiColor,
    jeraldinelocofyuiaiTextAlign,
    jeraldinelocofyuiaiOverflow,
    jeraldinelocofyuiaiTextOverflow,
    jeraldinelocofyuiaiWhiteSpace,
  ]);

  const thisIsAStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: thisIsAFlexDirection,
      alignItems: thisIsAAlignItems,
      justifyContent: thisIsAJustifyContent,
      gap: thisIsAGap,
      position: thisIsAPosition,
      fontSize: thisIsAFontSize,
      lineHeight: thisIsALineHeight,
      fontFamily: thisIsAFontFamily,
      color: thisIsAColor,
      textAlign: thisIsATextAlign,
    };
  }, [
    thisIsAFlexDirection,
    thisIsAAlignItems,
    thisIsAJustifyContent,
    thisIsAGap,
    thisIsAPosition,
    thisIsAFontSize,
    thisIsALineHeight,
    thisIsAFontFamily,
    thisIsAColor,
    thisIsATextAlign,
  ]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      display: inputFieldDisplay,
      position: inputFieldPosition,
      fontSize: inputFieldFontSize,
      lineHeight: inputFieldLineHeight,
      fontFamily: inputFieldFontFamily,
      color: inputFieldColor,
      textAlign: inputFieldTextAlign,
      flexDirection: inputFieldFlexDirection,
      alignItems: inputFieldAlignItems,
      justifyContent: inputFieldJustifyContent,
    };
  }, [
    inputFieldDisplay,
    inputFieldPosition,
    inputFieldFontSize,
    inputFieldLineHeight,
    inputFieldFontFamily,
    inputFieldColor,
    inputFieldTextAlign,
    inputFieldFlexDirection,
    inputFieldAlignItems,
    inputFieldJustifyContent,
  ]);

  const inputFieldBaseStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: inputFieldBaseFlexDirection,
      alignItems: inputFieldBaseAlignItems,
      gap: inputFieldBaseGap,
      border: inputFieldBaseBorder,
      backgroundColor: inputFieldBaseBackgroundColor,
      borderRadius: inputFieldBaseBorderRadius,
      padding: inputFieldBasePadding,
    };
  }, [
    inputFieldBaseFlexDirection,
    inputFieldBaseAlignItems,
    inputFieldBaseGap,
    inputFieldBaseBorder,
    inputFieldBaseBackgroundColor,
    inputFieldBaseBorderRadius,
    inputFieldBasePadding,
  ]);

  const email1Style: CSSProperties = useMemo(() => {
    return {
      color: emailColor1,
    };
  }, [emailColor1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      border: frameDivBorder,
      justifyContent: frameDivJustifyContent,
      cursor: frameDivCursor,
      alignSelf: frameDivAlignSelf,
      gap: frameDivGap1,
    };
  }, [
    frameDivBackgroundColor,
    frameDivBorder,
    frameDivJustifyContent,
    frameDivCursor,
    frameDivAlignSelf,
    frameDivGap1,
  ]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: iconFontSize1,
      lineHeight: iconLineHeight1,
      fontFamily: iconFontFamily1,
      color: iconColor1,
      textAlign: iconTextAlign1,
      width: iconWidth1,
      height: iconHeight1,
      overflow: iconOverflow1,
      flexShrink: iconFlexShrink1,
    };
  }, [
    iconFontSize1,
    iconLineHeight1,
    iconFontFamily1,
    iconColor1,
    iconTextAlign1,
    iconWidth1,
    iconHeight1,
    iconOverflow1,
    iconFlexShrink1,
  ]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  return (
    <div
      className="rounded-5xs h-[566px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-5 px-10 box-border bg-[url('/image-alignmentbottom-typeform-backgroundsimple@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-21xl text-dark-gray font-text-small self-stretch"
      style={imageAlignmentBottomTypeFStyle}
    >
      <div className="w-[518px] flex flex-col items-start justify-start gap-[20px] max-w-[960px] md:w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <b
            className="self-stretch relative leading-[120%]"
            style={everythingUXNewsletterStyle}
          >
            {newsletterTitle}
          </b>
          <div
            className="self-stretch relative text-base leading-[24px]"
            style={everythingUXIsStyle}
          >
            {uxNewsletterDescription}
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-white flex flex-col items-center justify-end p-5 gap-[16px] text-sm">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div
                  className="self-stretch relative leading-[22px]"
                  style={emailStyle}
                >
                  First Name
                </div>
                <div
                  className="self-stretch rounded-default-border-raius bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-grey-white"
                  style={frameDiv3Style}
                >
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                    alt=""
                    src={promoText}
                    style={iconStyle}
                  />
                  <input
                    className="[border:none] font-text-small text-base bg-[transparent] flex-1 relative leading-[24px] text-gray-blue text-left overflow-hidden text-ellipsis whitespace-nowrap"
                    placeholder={emailAddress}
                    type="text"
                    style={jeraldinelocofyuiaiStyle}
                  />
                </div>
                {thisIsA && (
                  <div
                    className="self-stretch relative text-xs leading-[20px] text-gray-blue hidden"
                    style={thisIsAStyle}
                  >
                    {hintText}
                  </div>
                )}
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start"
              style={inputFieldStyle}
            >
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[6px]"
                style={inputFieldBaseStyle}
              >
                {showEmail && (
                  <div
                    className="self-stretch relative leading-[22px]"
                    style={email1Style}
                  >
                    {emailPromoTitle}
                  </div>
                )}
                <div
                  className="self-stretch rounded-default-border-raius bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-grey-white"
                  style={frameDiv2Style}
                >
                  {!icon2 && (
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src={newsletterSubtitle}
                      style={icon1Style}
                    />
                  )}
                  <input
                    className="[border:none] font-text-small text-base bg-[transparent] flex-1 relative leading-[24px] text-gray-blue text-left overflow-hidden text-ellipsis whitespace-nowrap"
                    placeholder="jeraldine@locofyui.ai"
                    type="text"
                  />
                </div>
                <div className="self-stretch relative text-xs leading-[20px] text-gray-blue hidden">
                  This is a hint text for the user
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-accent rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-lightseagreen">
            <div className="relative text-sm leading-[22px] font-text-small text-white text-center">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
