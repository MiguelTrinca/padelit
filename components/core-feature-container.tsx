import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CoreFeatureContainerType = {
  icon?: string;
  feature?: string;
  descritption?: string;

  /** Style props */
  propZIndex?: CSSProperties["zIndex"];
  propOpacity?: CSSProperties["opacity"];
  propWidth?: CSSProperties["width"];
};

const CoreFeatureContainer: NextPage<CoreFeatureContainerType> = ({
  icon,
  feature,
  descritption,
  propZIndex,
  propOpacity,
  propWidth,
}) => {
  const lFGStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex,
      opacity: propOpacity,
    };
  }, [propZIndex, propOpacity]);

  const headerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start relative gap-[10px] z-[0] text-left text-lg text-gray-100 font-dm-sans hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
      style={lFGStyle}
    >
      <img
        className="relative w-[545.79px] h-[205.66px] object-cover z-[0]"
        alt=""
        src="/bg.png"
      />
      <div className="my-0 mx-[!important] absolute top-[25px] left-[32px] flex flex-row items-center justify-start gap-[18px] z-[1]">
        <img
          className="relative w-[57px] h-[57px] object-cover"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <b
            className="relative flex items-center w-[165px] h-3 shrink-0"
            style={headerStyle}
          >
            {feature}
          </b>
          <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[355px] h-10 shrink-0">
            {descritption}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatureContainer;
