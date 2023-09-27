import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SignInButtonType = {
  /** Style props */
  property1FilledPosition?: CSSProperties["position"];
  property1FilledCursor?: CSSProperties["cursor"];
  property1FilledBorder?: CSSProperties["border"];
  property1FilledWidth?: CSSProperties["width"];
  property1FilledBackgroundColor?: CSSProperties["backgroundColor"];
  property1FilledBoxSizing?: CSSProperties["boxSizing"];
  property1FilledMargin?: CSSProperties["margin"];
  property1FilledTop?: CSSProperties["top"];
  property1FilledLeft?: CSSProperties["left"];
  property1FilledHeight?: CSSProperties["height"];
  property1FilledZIndex?: CSSProperties["zIndex"];
  startFreeTrailDisplay?: CSSProperties["display"];
  startFreeTrailColor?: CSSProperties["color"];
};

const SignInButton: NextPage<SignInButtonType> = ({
  property1FilledPosition,
  property1FilledCursor,
  property1FilledBorder,
  property1FilledWidth,
  property1FilledBackgroundColor,
  property1FilledBoxSizing,
  property1FilledMargin,
  property1FilledTop,
  property1FilledLeft,
  property1FilledHeight,
  property1FilledZIndex,
  startFreeTrailDisplay,
  startFreeTrailColor,
}) => {
  const property1FilledStyle: CSSProperties = useMemo(() => {
    return {
      position: property1FilledPosition,
      cursor: property1FilledCursor,
      border: property1FilledBorder,
      width: property1FilledWidth,
      backgroundColor: property1FilledBackgroundColor,
      boxSizing: property1FilledBoxSizing,
      margin: property1FilledMargin,
      top: property1FilledTop,
      left: property1FilledLeft,
      height: property1FilledHeight,
      zIndex: property1FilledZIndex,
    };
  }, [
    property1FilledPosition,
    property1FilledCursor,
    property1FilledBorder,
    property1FilledWidth,
    property1FilledBackgroundColor,
    property1FilledBoxSizing,
    property1FilledMargin,
    property1FilledTop,
    property1FilledLeft,
    property1FilledHeight,
    property1FilledZIndex,
  ]);

  const startFreeTrailStyle: CSSProperties = useMemo(() => {
    return {
      display: startFreeTrailDisplay,
      color: startFreeTrailColor,
    };
  }, [startFreeTrailDisplay, startFreeTrailColor]);

  return (
    <div
      className="rounded-31xl bg-sandybrown-100 flex flex-row items-center justify-center py-[13px] px-[50px] text-left text-base text-white font-montserrat"
      style={property1FilledStyle}
    >
      <b
        className="relative tracking-[-0.16px] leading-[24px]"
        style={startFreeTrailStyle}
      >
        Sign In
      </b>
    </div>
  );
};

export default SignInButton;
