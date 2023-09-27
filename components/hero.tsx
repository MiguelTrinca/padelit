import type { NextPage } from "next";
import SignInButton from "./sign-in-button";

const Hero: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[-1px] bg-gray-100 h-[971px] flex flex-col items-center justify-start py-[30px] px-0 box-border gap-[65px] text-left text-66xl text-white font-dm-sans">
      <header
        className="w-[1250px] flex flex-row items-center justify-between text-left text-xl text-white font-poppins"
        id="Nav Bar"
      >
        <div className="flex flex-row items-center justify-start gap-[40px]">
          <img
            className="relative w-[29.6px] h-5 object-cover"
            alt=""
            src="/combined-shape-16724.png"
          />
          <b className="relative leading-[24px] flex items-center w-[100px] h-6 shrink-0 opacity-[0.8]">
            Landguru
          </b>
        </div>
        <div className="w-[488px] flex flex-row items-center justify-between text-center text-base text-sandybrown-100 font-montserrat">
          <div className="relative leading-[33px] flex items-center justify-center w-[107px] h-[29px] shrink-0">
            Home
          </div>
          <div className="relative leading-[33px] flex items-center justify-center w-[107px] h-[29px] shrink-0">
            Features
          </div>
          <div className="relative leading-[33px] flex items-center justify-center w-[107px] h-[29px] shrink-0">
            Testimonials
          </div>
          <div className="relative leading-[33px] flex items-center justify-center w-[107px] h-[29px] shrink-0">
            Pricing
          </div>
        </div>
        <SignInButton
          property1FilledPosition="unset"
          property1FilledCursor="pointer"
          property1FilledBorder="1.5px solid #feaf53"
          property1FilledWidth="unset"
          property1FilledBackgroundColor="rgba(255, 255, 255, 0)"
          property1FilledBoxSizing="border-box"
          property1FilledMargin="unset"
          property1FilledTop="unset"
          property1FilledLeft="unset"
          property1FilledHeight="unset"
          property1FilledZIndex="unset"
          startFreeTrailDisplay="inline-block"
          startFreeTrailColor="#feaf53"
        />
      </header>
      <img
        className="relative w-[1922px] h-[3px] object-cover hidden opacity-[0.1] mix-blend-normal"
        alt=""
        src="/dividor2.png"
      />
      <div className="w-[1950px] overflow-hidden flex flex-row items-center justify-end">
        <div className="flex flex-col items-start justify-center gap-[40px] w-[633px] [align-self:start] mt-2.5">
          <div className="w-[642px] flex flex-col items-start justify-start gap-[30px]">
            <b className="self-stretch relative tracking-[-2px] leading-[100px]">
              Experience Padel like never before!
            </b>
            <div className="relative text-lg leading-[42px] font-medium inline-block w-[507px] h-[116px] shrink-0">
              Play padel with a plethora of players from beginners to pros! Find
              new teammates and participate in tournaments! Arrange groups to
              play when your friends can’t!
            </div>
          </div>
          <SignInButton
            property1FilledPosition="unset"
            property1FilledCursor="pointer"
            property1FilledBorder="none"
            property1FilledWidth="229px"
            property1FilledBackgroundColor="#feaf53"
            property1FilledBoxSizing="border-box"
            property1FilledMargin="unset"
            property1FilledTop="unset"
            property1FilledLeft="unset"
            property1FilledHeight="unset"
            property1FilledZIndex="unset"
            startFreeTrailDisplay="inline-block"
            startFreeTrailColor="#fff"
          />
        </div>
        <img
          className="relative w-[1033px] h-[653px] object-cover ml-[-48px]"
          alt=""
          src="/intersect@2x.png"
        />
      </div>
    </div>
  );
};

export default Hero;
