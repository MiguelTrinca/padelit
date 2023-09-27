import type { NextPage } from "next";
import SignInButton from "./sign-in-button";

const Subscriptons: NextPage = () => {
  return (
    <div className="absolute top-[4455px] left-[468px] w-[990px] h-[842px] flex flex-col items-center justify-end gap-[82px] text-center text-sm text-darkslateblue-200 font-dm-sans">
      <div className="w-[444px] overflow-hidden flex flex-col items-center justify-center">
        <b className="relative tracking-[2.1px] leading-[40px] uppercase flex items-center justify-center w-[215px] h-10 shrink-0 opacity-[0.7]">
          Subscription
        </b>
        <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-gray-100 items-center justify-center w-[444px] h-10 shrink-0">
          Enhance your Experience
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[30px] text-left text-3xl text-white">
        <div className="rounded-3xs bg-darkslateblue-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[480px] h-[680px] flex flex-col items-start justify-start py-[50px] px-10 box-border relative gap-[72px]">
          <div className="flex flex-col items-start justify-start py-[25px] px-0 gap-[40px] z-[0]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="relative tracking-[-0.55px] flex items-end w-[173px] h-[18px] shrink-0">
                Free Plan
              </b>
              <div className="relative text-base leading-[28px] flex items-center w-[197px] h-7 shrink-0 opacity-[0.7]">
                For New Padel Players
              </div>
            </div>
            <div className="w-[325px] flex flex-row flex-wrap items-center justify-center gap-[14px] text-base">
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/combined-shape-16072.png"
              />
              <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                Create up to 5 “Looking for Group” posts.
              </div>
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/combined-shape-16073.png"
              />
              <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                Search for Padel Courts near your area, availability and prices!
              </div>
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/combined-shape-16074.png"
              />
              <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                Participate in Tournaments of all types of skill levels. Or
                create your own!
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.3]"
                alt=""
                src="/close-1.png"
              />
              <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0 opacity-[0.55]">
                Enhanced Analysis of your Matches and Tournaments.
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover opacity-[0.3]"
                alt=""
                src="/close-1.png"
              />
              <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0 opacity-[0.55]">
                Earn points and get huge discounts with every merchandise
                purchase!
              </div>
            </div>
          </div>
          <SignInButton
            property1FilledPosition="absolute"
            property1FilledCursor="pointer"
            property1FilledBorder="none"
            property1FilledWidth="170px"
            property1FilledBackgroundColor="#fff"
            property1FilledBoxSizing="border-box"
            property1FilledMargin="0 !important"
            property1FilledTop="580px"
            property1FilledLeft="calc(50% - 85px)"
            property1FilledHeight="unset"
            property1FilledZIndex="1"
            startFreeTrailDisplay="inline-block"
            startFreeTrailColor="#2256a9"
          />
        </div>
        <div className="rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[480px] h-[680px] flex flex-col items-start justify-start py-[21px] px-[35px] box-border relative gap-[73px] text-sm">
          <div className="flex flex-col items-start justify-start gap-[40px] z-[0]">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="rounded-10xs bg-sandybrown-100 flex flex-row items-start justify-start py-px px-2">
                <b className="relative tracking-[-0.14px] leading-[28px]">
                  Recommended
                </b>
              </div>
              <div className="flex flex-row items-end justify-start text-3xl text-gray-200 font-montserrat">
                <div className="flex flex-col items-start justify-end gap-[2px]">
                  <b className="relative tracking-[-0.55px] flex items-end w-[173px] h-[18px] shrink-0">
                    Premium
                  </b>
                  <div className="relative text-base leading-[19.5px] text-darkslategray flex items-center w-[267px] h-7 shrink-0">
                    For Passionate Padel Players
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start gap-[16px] ml-[-35px] text-right text-base text-darkslategray">
                  <div className="relative leading-[28px] flex items-center w-[197px] h-7 shrink-0">
                    Starting from
                  </div>
                  <b className="relative tracking-[-0.55px] flex text-mediumaquamarine-200 items-end w-[173px] h-[18px] shrink-0 text-7xl">
                    <span className="[line-break:anywhere] w-full">
                      <span>4.99€/</span>
                      <span className="text-3xl">mo</span>
                    </span>
                  </b>
                </div>
              </div>
            </div>
            <div className="w-[344px] flex flex-row flex-wrap items-center justify-center gap-[34px] text-base text-darkslategray">
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/combined-shape-160721.png"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <span>{`Create up to `}</span>
                    <b className="text-mediumaquamarine-100">10</b>
                    <span> “Looking for Group” posts</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/combined-shape-160731.png"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Search for Padel Courts near your area, availability and
                  prices!
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/combined-shape-160741.png"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Participate in Tournaments of all types of skill levels. Or
                  create your own!
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/combined-shape-160741.png"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Enhanced Analysis of your Matches and Tournaments.
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <img
                  className="relative w-5 h-5 object-cover"
                  alt=""
                  src="/combined-shape-160741.png"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Earn points and get huge discounts with every merchandise
                  purchase!
                </div>
              </div>
            </div>
          </div>
          <SignInButton
            property1FilledPosition="absolute"
            property1FilledCursor="pointer"
            property1FilledBorder="none"
            property1FilledWidth="216px"
            property1FilledBackgroundColor="#2256aa"
            property1FilledBoxSizing="border-box"
            property1FilledMargin="0 !important"
            property1FilledTop="580px"
            property1FilledLeft="calc(50% - 108px)"
            property1FilledHeight="50px"
            property1FilledZIndex="1"
            startFreeTrailDisplay="inline-block"
            startFreeTrailColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscriptons;
