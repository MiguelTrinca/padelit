import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type NavbarSectionType = {

};

const NavbarSection: NextPage<NavbarSectionType> = ({
}) => {

  const textStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: "Inter",
      cursor: "pointer",
      fontWeight: "300",
    }
  }, []);

  return (
    <header
      className="w-full h-[77px] flex flex-row items-center justify-between py-[22px] px-20 box-border top-[0] [background:white] text-left text-[11.04px] text-light-background font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      style={{backgroundColor: "unset", position: "absolute"}}
    >
      <div className="flex flex-row items-center justify-start gap-[10.03px]">
        <img
          className="relative rounded-[8.03px] w-[34.12px] h-[34.12px] overflow-hidden shrink-0"
          alt=""
          src="/locouilogo3.svg"
        />
        <div className="flex flex-col items-start justify-center gap-[4.01px]">
          <img
            className="relative w-[57.46px] h-[13.6px]"
            alt=""
            src="/locoui3.svg"
          />
          <div className="relative tracking-[-0.04em]">by Team Locofy</div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-start gap-[30px] text-center text-base text-white font-roboto md:hidden"
      >
        <div
          className="relative inline-block w-[51.82px] shrink-0"
          style={textStyle}
        >
          Home
        </div>
        <div
          className="relative inline-block w-[105.18px] shrink-0"
          style={textStyle}
        >
          Features
        </div>
        <a
          className="[text-decoration:none] relative text-[inherit] inline-block w-[92.74px] shrink-0"
          style={textStyle}
        >
          Testimonials
        </a>
        <div
          className="relative inline-block w-[89.46px] shrink-0"
          style={textStyle}
        >
          Plans
        </div>
      </div>
    </header>
  );
};

export default NavbarSection;
