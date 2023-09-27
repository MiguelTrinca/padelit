import type { NextPage } from "next";
import KeyFeaturesStats from "../components/key-features-stats";
import CoreFeaturesContainer from "../components/core-features-container";
import MoreFeatures from "../components/more-features";
import ClientCommentsContainer from "../components/client-comments-container";
import Subscriptons from "../components/subscriptons";
import FAQContainer from "../components/f-a-q-container";
import FooterLinks from "../components/footer-links";
import Hero from "../components/hero";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[6940px] overflow-hidden text-center text-17xl text-gray-100 font-dm-sans">
      <div className="absolute top-[1206px] left-[calc(50%_-_740px)] flex flex-col items-center justify-center py-0 px-[242px] gap-[45px]">
        <div className="w-[478px] flex flex-row items-start justify-center relative gap-[10px]">
          <b className="flex-1 relative tracking-[-1.5px] leading-[55px] z-[0]">
            Key Features in Development!
          </b>
          <b className="flex-1 absolute my-0 mx-[!important] top-[-33px] left-[calc(50%_-_80.5px)] text-sm tracking-[2.1px] leading-[40px] uppercase inline-block text-darkslateblue-200 z-[1]">
            Quality features
          </b>
        </div>
        <div className="w-[995px] flex flex-row flex-wrap items-start justify-center gap-[100px]">
          <KeyFeaturesStats
            icon="/icon.png"
            feature="Ranked Matchmaking"
            description="Engage in games against players who match your skill level. An ideal opportunity to enhance your abilities and improve your rank!"
          />
          <KeyFeaturesStats
            icon="/icon1.png"
            feature="Leaderboards"
            description="Climb up the community leaderboards, from most wins, most tournaments and most matches "
          />
          <KeyFeaturesStats
            icon="/icon2.png"
            feature="Statistics"
            description="Keep track of your statistics of the matches you played. Results, points scored, wins/losses, and much much more"
          />
        </div>
      </div>
      <div className="absolute top-[1834px] left-[390px] flex flex-row items-center justify-between text-left text-[100px]">
        <div className="relative w-[479px] h-[837px] bg-[url('/placeholder@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <b className="absolute top-[776.2px] left-[97px] tracking-[10px] leading-[30px] [transform:_rotate(-71.51deg)] [transform-origin:0_0]">
            PLACEHOLDER
          </b>
        </div>
        <div className="flex flex-col items-start justify-start py-0 px-[53px] gap-[60px] text-sm text-darkslateblue-200">
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <b className="relative tracking-[2.1px] leading-[40px] uppercase flex items-center w-[162px] h-10 shrink-0">
              Core features
            </b>
            <b className="relative text-[48px] tracking-[-1.5px] leading-[55px] flex text-gray-100 items-center w-[510px] h-[124px] shrink-0">
              Padel at your fingertips! Discover new features like:
            </b>
          </div>
          <CoreFeaturesContainer />
        </div>
      </div>
      <div className="absolute top-[2871px] left-[calc(50%_-_626px)] flex flex-col items-start justify-start">
        <div className="flex flex-col items-center justify-start gap-[78px]">
          <div className="flex flex-row items-start justify-start relative gap-[10px]">
            <b className="relative tracking-[-1.5px] leading-[55px] flex items-center justify-center w-[510px] h-[124px] shrink-0 z-[0]">
              Meet Exciting Features
            </b>
            <b className="absolute my-0 mx-[!important] top-[0px] left-[183px] text-sm tracking-[2.1px] leading-[40px] uppercase inline-block text-darkslateblue-200 z-[1]">
              Other features
            </b>
          </div>
          <div className="w-[1252px] flex flex-row flex-wrap items-start justify-start gap-[71px] text-left text-lg text-gray-200">
            <MoreFeatures
              icon="/icon6.png"
              feature="Showcase your Badges"
              description="Earn recognition for your achievements and stand out from the crowd with our unique badges."
            />
            <MoreFeatures
              icon="/icon7.png"
              feature="Book Padel Courts"
              description="Reserve your desired padel court and secure your spot for a match through our booking feature."
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="relative w-[82px] h-[82px] object-cover z-[0]"
                    alt=""
                    src="/bg-copy-4.png"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[21px] left-[18px] w-[45.88px] h-[40.78px] object-cover z-[1]"
                    alt=""
                    src="/vector.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[19px]">
                  <b className="relative flex items-center w-[165px] h-3 shrink-0">
                    Affiliate Program
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Share the excitement of our plataform with others and reap
                    the benefits of your referrals!
                  </div>
                </div>
              </div>
            </div>
            <MoreFeatures
              icon="/icon8.png"
              feature="Join Vast Communities"
              description="Connect with other players within our communities! Discuss strategies, and share experiences!"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="relative w-[82px] h-[82px] object-cover z-[0]"
                    alt=""
                    src="/bg-copy-5.png"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[18px] left-[18px] w-[45.88px] h-[45.78px] object-cover z-[1]"
                    alt=""
                    src="/group.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[19px]">
                  <b className="relative flex items-center w-[219px] h-3 shrink-0">
                    Create and Join Teams
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Unite with like-minded players and form unstoppable teams!
                    Achieve victories that will last!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="relative w-[82px] h-[82px] object-cover opacity-[0.12] z-[0]"
                    alt=""
                    src="/bg-copy-51.png"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[18px] left-[18px] w-[45.88px] h-[45.88px] object-cover z-[1]"
                    alt=""
                    src="/sale.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[19px]">
                  <b className="relative flex items-center w-[253px] h-3 shrink-0">
                    Buy Premium Merchandise
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Show off your love for padel with our exclusive merchandise.
                    Stylish apperal, rackets and accessories!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientCommentsContainer />
      <Subscriptons />
      <div className="absolute top-[5497px] left-[calc(50%_-_404px)] flex flex-col items-center justify-start gap-[92px] text-sm text-darkslateblue-400">
        <div className="w-[436px] h-[75px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <b className="relative tracking-[2.1px] leading-[40px] uppercase flex items-center justify-center w-[204px] h-10 shrink-0">
            Frequent Question
          </b>
          <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-gray-100 items-center justify-center w-[436px] h-10 shrink-0 mt-[-5px]">
            Do you have any question?
          </b>
        </div>
        <FAQContainer />
      </div>
      <FooterLinks />
      <Hero />
    </div>
  );
};

export default LandingPage;
