import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type NavbarSectionType = {
  imageDimensions?: string;
  componentSize?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionLinkText?: string;
  imageDimensions2?: string;
  showGroupIcon?: boolean;

  /** Style props */
  typeFillBackgroundColor?: CSSProperties["backgroundColor"];
  typeFillPosition?: CSSProperties["position"];
  typeFillBackground?: CSSProperties["background"];
  typeFillAlignSelf?: CSSProperties["alignSelf"];
  typeFillMargin?: CSSProperties["margin"];
  typeFillLeft?: CSSProperties["left"];
  typeFillZIndex?: CSSProperties["zIndex"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
  homeFontFamily?: CSSProperties["fontFamily"];
  homeCursor?: CSSProperties["cursor"];
  homeBorder?: CSSProperties["border"];
  homePadding?: CSSProperties["padding"];
  homeBackgroundColor?: CSSProperties["backgroundColor"];
  homeFontWeight?: CSSProperties["fontWeight"];
  gettingATaxiFontFamily?: CSSProperties["fontFamily"];
  gettingATaxiCursor?: CSSProperties["cursor"];
  gettingATaxiBorder?: CSSProperties["border"];
  gettingATaxiPadding?: CSSProperties["padding"];
  gettingATaxiBackgroundColor?: CSSProperties["backgroundColor"];
  gettingATaxiFontWeight?: CSSProperties["fontWeight"];
  mobileAppTextDecoration?: CSSProperties["textDecoration"];
  mobileAppFontFamily?: CSSProperties["fontFamily"];
  mobileAppCursor?: CSSProperties["cursor"];
  mobileAppBorder?: CSSProperties["border"];
  mobileAppPadding?: CSSProperties["padding"];
  mobileAppBackgroundColor?: CSSProperties["backgroundColor"];
  mobileAppFontWeight?: CSSProperties["fontWeight"];
  contactUsFontFamily?: CSSProperties["fontFamily"];
  contactUsCursor?: CSSProperties["cursor"];
  contactUsBorder?: CSSProperties["border"];
  contactUsPadding?: CSSProperties["padding"];
  contactUsBackgroundColor?: CSSProperties["backgroundColor"];
  contactUsFontWeight?: CSSProperties["fontWeight"];
};

const NavbarSection: NextPage<NavbarSectionType> = ({
  imageDimensions,
  componentSize,
  sectionTitle,
  sectionSubtitle,
  sectionLinkText,
  imageDimensions2,
  showGroupIcon,
  typeFillBackgroundColor,
  typeFillPosition,
  typeFillBackground,
  typeFillAlignSelf,
  typeFillMargin,
  typeFillLeft,
  typeFillZIndex,
  frameDivJustifyContent,
  frameDivGap,
  homeFontFamily,
  homeCursor,
  homeBorder,
  homePadding,
  homeBackgroundColor,
  homeFontWeight,
  gettingATaxiFontFamily,
  gettingATaxiCursor,
  gettingATaxiBorder,
  gettingATaxiPadding,
  gettingATaxiBackgroundColor,
  gettingATaxiFontWeight,
  mobileAppTextDecoration,
  mobileAppFontFamily,
  mobileAppCursor,
  mobileAppBorder,
  mobileAppPadding,
  mobileAppBackgroundColor,
  mobileAppFontWeight,
  contactUsFontFamily,
  contactUsCursor,
  contactUsBorder,
  contactUsPadding,
  contactUsBackgroundColor,
  contactUsFontWeight,
}) => {
  const typeFillStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeFillBackgroundColor,
      position: typeFillPosition,
      background: typeFillBackground,
      alignSelf: typeFillAlignSelf,
      margin: typeFillMargin,
      left: typeFillLeft,
      zIndex: typeFillZIndex,
    };
  }, [
    typeFillBackgroundColor,
    typeFillPosition,
    typeFillBackground,
    typeFillAlignSelf,
    typeFillMargin,
    typeFillLeft,
    typeFillZIndex,
  ]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivJustifyContent, frameDivGap]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
      cursor: homeCursor,
      border: homeBorder,
      padding: homePadding,
      backgroundColor: homeBackgroundColor,
      fontWeight: homeFontWeight,
    };
  }, [
    homeFontFamily,
    homeCursor,
    homeBorder,
    homePadding,
    homeBackgroundColor,
    homeFontWeight,
  ]);

  const gettingATaxiStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: gettingATaxiFontFamily,
      cursor: gettingATaxiCursor,
      border: gettingATaxiBorder,
      padding: gettingATaxiPadding,
      backgroundColor: gettingATaxiBackgroundColor,
      fontWeight: gettingATaxiFontWeight,
    };
  }, [
    gettingATaxiFontFamily,
    gettingATaxiCursor,
    gettingATaxiBorder,
    gettingATaxiPadding,
    gettingATaxiBackgroundColor,
    gettingATaxiFontWeight,
  ]);

  const mobileAppStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: mobileAppTextDecoration,
      fontFamily: mobileAppFontFamily,
      cursor: mobileAppCursor,
      border: mobileAppBorder,
      padding: mobileAppPadding,
      backgroundColor: mobileAppBackgroundColor,
      fontWeight: mobileAppFontWeight,
    };
  }, [
    mobileAppTextDecoration,
    mobileAppFontFamily,
    mobileAppCursor,
    mobileAppBorder,
    mobileAppPadding,
    mobileAppBackgroundColor,
    mobileAppFontWeight,
  ]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: contactUsFontFamily,
      cursor: contactUsCursor,
      border: contactUsBorder,
      padding: contactUsPadding,
      backgroundColor: contactUsBackgroundColor,
      fontWeight: contactUsFontWeight,
    };
  }, [
    contactUsFontFamily,
    contactUsCursor,
    contactUsBorder,
    contactUsPadding,
    contactUsBackgroundColor,
    contactUsFontWeight,
  ]);

  return (
    <header
      className="bg-accent w-full h-[77px] flex flex-row items-center justify-between py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-[11.04px] text-light-background font-text-small lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      style={typeFillStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[10.03px]">
        <img
          className="relative rounded-[8.03px] w-[34.12px] h-[34.12px] overflow-hidden shrink-0"
          alt=""
          src={imageDimensions}
        />
        <div className="flex flex-col items-start justify-center gap-[4.01px]">
          <img
            className="relative w-[57.46px] h-[13.6px]"
            alt=""
            src={componentSize}
          />
          <div className="relative tracking-[-0.04em]">by Team Locofy</div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-start gap-[30px] text-center text-base text-white font-roboto md:hidden"
        style={frameDiv1Style}
      >
        <div
          className="relative inline-block w-[51.82px] shrink-0"
          style={homeStyle}
        >
          Home
        </div>
        <div
          className="relative inline-block w-[105.18px] shrink-0"
          style={gettingATaxiStyle}
        >
          {sectionTitle}
        </div>
        <a
          className="[text-decoration:none] relative text-[inherit] inline-block w-[92.74px] shrink-0"
          style={mobileAppStyle}
        >
          {sectionSubtitle}
        </a>
        <div
          className="relative inline-block w-[89.46px] shrink-0"
          style={contactUsStyle}
        >
          {sectionLinkText}
        </div>
      </div>
      {showGroupIcon && (
        <img className="relative w-[100px] h-9" alt="" src={imageDimensions2} />
      )}
    </header>
  );
};

export default NavbarSection;
