import type { NextPage } from "next";
import SignInButton from "../components/sign-in-button";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[6940px] overflow-hidden text-center text-sm text-dark-blue font-dm-sans">
      <div className="absolute top-[1206px] left-[calc(50%_-_740px)] flex flex-col items-center justify-center py-0 px-[242px] gap-[45px] text-17xl">
        <div className="w-[478px] flex flex-row items-start justify-center relative gap-[10px]">
          <b className="flex-1 relative tracking-[-1.5px] leading-[55px] z-[0]">
            Key Features in Development!
          </b>
          <b className="flex-1 absolute my-0 mx-[!important] top-[-33px] left-[calc(50%_-_80.5px)] text-sm tracking-[2.1px] leading-[40px] uppercase inline-block text-darkslateblue-200 z-[1]">
            Quality features
          </b>
        </div>
        <div className="w-[995px] flex flex-row flex-wrap items-start justify-center gap-[100px] text-lg">
          <div className="flex-1 flex flex-col items-center justify-start gap-[21px]">
            <img
              className="relative w-[110px] h-[110px] overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
            <b className="relative leading-[30px] inline-block w-[265px] h-[30px] shrink-0">
              Ranked Matchmaking
            </b>
            <div className="relative text-mini leading-[28px] text-darkslategray inline-block w-[265px]">
              Engage in games against players who match your skill level. An
              ideal opportunity to enhance your abilities and improve your rank!
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[21px]">
            <img
              className="relative w-[110px] h-[110px] overflow-hidden shrink-0"
              alt=""
              src="/icon1.svg"
            />
            <b className="relative leading-[30px] inline-block w-[265px] h-[30px] shrink-0">
              Leaderboards
            </b>
            <div className="relative text-mini leading-[28px] text-darkslategray inline-block w-[265px]">{`Climb up the community leaderboards, from most wins, most tournaments and most matches `}</div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[21px]">
            <img
              className="relative w-[110px] h-[110px] overflow-hidden shrink-0"
              alt=""
              src="/icon2.svg"
            />
            <b className="relative leading-[30px] inline-block w-[265px] h-[30px] shrink-0">
              Statistics
            </b>
            <div className="relative text-mini leading-[28px] text-darkslategray inline-block w-[265px]">
              Keep track of your statistics of the matches you played. Results,
              points scored, wins/losses, and much much more
            </div>
          </div>
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
            <b className="relative text-29xl tracking-[-1.5px] leading-[55px] flex text-dark-blue items-center w-[510px] h-[124px] shrink-0">
              Padel at your fingertips! Discover new features like:
            </b>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-[20px] text-lg text-dark-blue">
            <div className="flex flex-col items-start justify-start relative gap-[10px] z-[0] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
              <img
                className="relative w-[545.79px] h-[205.66px] z-[0]"
                alt=""
                src="/bg.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[25px] left-[32px] flex flex-row items-center justify-start gap-[18px] z-[1]">
                <img
                  className="relative w-[57px] h-[57px]"
                  alt=""
                  src="/icon3.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <b className="relative flex items-center w-[165px] h-3 shrink-0">
                    Look For Group
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[355px] h-10 shrink-0">
                    Create a post detailing time, date and location, and engage
                    with the vibrant community. Connect with fellow players who
                    share your passion!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start relative gap-[10px] z-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
              <img
                className="relative w-[545.79px] h-[205.66px] z-[0]"
                alt=""
                src="/bg.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[25px] left-[32px] flex flex-row items-center justify-start gap-[18px] z-[1]">
                <img
                  className="relative w-[57px] h-[57px]"
                  alt=""
                  src="/icon4.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <b className="relative flex items-center w-[231px] h-3 shrink-0">
                    Search For Padel Courts
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[355px] h-10 shrink-0">{`Explore a wide range of available courts based on location, and availability. Whether you prefer indoor or outdoor courts, discover the perfect venue. `}</div>
                </div>
              </div>
            </div>
            <b className="absolute my-0 mx-[!important] top-[422px] left-[87px] text-[64px] tracking-[10px] leading-[30px] inline-block text-accent-yellow-100 text-center w-[326px] h-9 shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] opacity-[0.8] z-[2]">
              SOON!
            </b>
            <div className="flex flex-col items-start justify-start relative gap-[10px] opacity-[0.4] z-[3] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
              <img
                className="relative w-[545.79px] h-[205.66px] z-[0]"
                alt=""
                src="/bg.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[25px] left-[32px] flex flex-row items-center justify-start gap-[18px] z-[1]">
                <img
                  className="relative w-[57px] h-[57px]"
                  alt=""
                  src="/icon5.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <b className="relative flex items-center w-[165px] h-3 shrink-0">
                    Tournaments
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[355px] h-10 shrink-0">
                    Showcase your skills as you participate in of tournaments.
                    Whether you're a pro or a beginner, our platform offers the
                    ideal tournaments for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2871px] left-[calc(50%_-_626px)] flex flex-col items-start justify-start text-17xl">
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
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <img
                  className="relative w-[82px] h-[82px]"
                  alt=""
                  src="/icon6.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[19px]">
                  <b className="relative flex items-center w-[227px] h-3 shrink-0">
                    Showcase your Badges
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Earn recognition for your achievements and stand out from
                    the crowd with our unique badges.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <img
                  className="relative w-[82px] h-[82px]"
                  alt=""
                  src="/icon7.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[19px]">
                  <b className="relative flex items-center w-[165px] h-3 shrink-0">
                    Book Padel Courts
                  </b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Reserve your desired padel court and secure your spot for a
                    match through our booking feature.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="relative w-[82px] h-[82px] z-[0]"
                    alt=""
                    src="/bg-copy-4.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[21px] left-[18px] w-[45.88px] h-[40.78px] z-[1]"
                    alt=""
                    src="/vector.svg"
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
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <img
                  className="relative w-[82px] h-[82px]"
                  alt=""
                  src="/icon8.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[13px]">
                  <b className="relative">Join Vast Communities</b>
                  <div className="relative text-mini leading-[26px] text-darkslategray inline-block w-[263px] h-10 shrink-0">
                    Connect with other players within our communities! Discuss
                    strategies, and share experiences!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="relative w-[82px] h-[82px] z-[0]"
                    alt=""
                    src="/bg-copy-5.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[18px] left-[18px] w-[45.88px] h-[45.78px] z-[1]"
                    alt=""
                    src="/group.svg"
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
                    className="relative w-[82px] h-[82px] opacity-[0.12] z-[0]"
                    alt=""
                    src="/bg-copy-51.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[18px] left-[18px] w-[45.88px] h-[45.88px] z-[1]"
                    alt=""
                    src="/sale.svg"
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
      <div className="absolute top-[3617px] left-[-7px] bg-dark-blue w-[1932px] h-[727px] flex flex-col items-center justify-center py-[60px] px-[168px] box-border text-accent-yellow-100">
        <div className="flex flex-col items-center justify-center relative gap-[18px]">
          <div className="flex flex-col items-center justify-start z-[0]">
            <b className="relative tracking-[2.1px] leading-[55.5px] uppercase inline-block w-[142px] h-10 shrink-0">
              Testimonies
            </b>
            <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-white items-center justify-center w-[425px] h-[65px] shrink-0 mt-[-5px]">
              Our Padel Players!
            </b>
          </div>
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-center py-[30px] px-[43px] z-[1] text-left text-base text-gold font-font-awesome-5-free">
            <div className="rounded-4xl bg-white w-[422px] h-[437px] flex flex-col items-center justify-center gap-[37px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative tracking-[1.6px] leading-[32px] flex items-center w-[126px] h-8 shrink-0">
                    
                  </div>
                  <b className="relative leading-[33px] flex font-dm-sans text-darkslategray items-center w-[250px] h-[33px] shrink-0">{`Design Quality & performance`}</b>
                </div>
                <div className="relative text-lg leading-[38px] font-dm-sans text-darkslategray inline-block w-[368px] h-[146px] shrink-0">
                  This Padel App is absolutely amazing! The 'Looking For Group'
                  feature helps me find teammates easily, and the dynamic
                  tournaments keep the competition thrilling.
                </div>
              </div>
              <div className="w-[382px] flex flex-row items-center justify-start py-2.5 px-1.5 box-border gap-[20px] text-gray-200 font-dm-sans">
                <img
                  className="relative rounded-[50%] w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/ellipse@2x.png"
                />
                <div className="flex flex-col items-start justify-center">
                  <b className="relative tracking-[-0.4px] leading-[44px] flex items-center w-[142px] h-8 shrink-0">
                    Denny Hilguston
                  </b>
                  <div className="relative text-mini tracking-[-0.37px] leading-[44.5px] font-medium text-cornflowerblue-200 flex items-center w-[100px] h-4 shrink-0 mt-[-4px]">
                    @denny.hil
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[619px] left-[214px] w-[79.98px] h-[19px] z-[2]"
            alt=""
            src="/slide-switcher.svg"
          />
        </div>
      </div>
      <div className="absolute top-[4455px] left-[468px] w-[990px] h-[842px] flex flex-col items-center justify-end gap-[82px] text-darkslateblue-200">
        <div className="w-[444px] overflow-hidden flex flex-col items-center justify-center">
          <b className="relative tracking-[2.1px] leading-[40px] uppercase flex items-center justify-center w-[215px] h-10 shrink-0 opacity-[0.7]">
            Subscription
          </b>
          <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-dark-blue items-center justify-center w-[444px] h-10 shrink-0">
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
                  className="relative w-5 h-5"
                  alt=""
                  src="/combined-shape-16072.svg"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Create up to 5 “Looking for Group” posts.
                </div>
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/combined-shape-16073.svg"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Search for Padel Courts near your area, availability and
                  prices!
                </div>
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/combined-shape-16074.svg"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                  Participate in Tournaments of all types of skill levels. Or
                  create your own!
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 opacity-[0.3]"
                  alt=""
                  src="/close-1.svg"
                />
                <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0 opacity-[0.55]">
                  Enhanced Analysis of your Matches and Tournaments.
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 opacity-[0.3]"
                  alt=""
                  src="/close-1.svg"
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
                <div className="rounded-[3px] bg-accent-yellow-100 flex flex-row items-start justify-start py-px px-2">
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
                    <b className="relative tracking-[-0.55px] flex text-mediumaquamarine-200 items-end w-[173px] h-[18px] shrink-0 text-[26px]">
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
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-160721.svg"
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
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-160731.svg"
                  />
                  <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                    Search for Padel Courts near your area, availability and
                    prices!
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-160741.svg"
                  />
                  <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                    Participate in Tournaments of all types of skill levels. Or
                    create your own!
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-160741.svg"
                  />
                  <div className="relative leading-[26px] flex items-end w-[291px] h-[42px] shrink-0">
                    Enhanced Analysis of your Matches and Tournaments.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-160741.svg"
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
      <div className="absolute top-[5497px] left-[calc(50%_-_404px)] flex flex-col items-center justify-start gap-[92px] text-darkslateblue-400">
        <div className="w-[436px] h-[75px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <b className="relative tracking-[2.1px] leading-[40px] uppercase flex items-center justify-center w-[204px] h-10 shrink-0">
            Frequent Question
          </b>
          <b className="relative text-17xl tracking-[-1.5px] leading-[55px] flex text-dark-blue items-center justify-center w-[436px] h-10 shrink-0 mt-[-5px]">
            Do you have any question?
          </b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px] text-left text-lg text-dark-blue">
          <div className="flex flex-col items-start justify-start gap-[9px]">
            <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
              <img
                className="relative w-5 h-5"
                alt=""
                src="/combined-shape-15714.svg"
              />
              <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[400px] h-10 shrink-0">
                What happens when no one shows up?
              </div>
            </div>
            <img
              className="relative w-[752px] h-[3px]"
              alt=""
              src="/dividor.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
              <img
                className="relative w-5 h-5"
                alt=""
                src="/combined-shape-15713.svg"
              />
              <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[511px] h-10 shrink-0">
                App installation failed, how to update system information?
              </div>
            </div>
            <img
              className="relative w-[752px] h-[3px]"
              alt=""
              src="/dividor-copy.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[33px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src="/combined-shape-15712.svg"
                  />
                  <div className="relative tracking-[-0.5px] leading-[40px] font-medium inline-block w-[412px] h-10 shrink-0">
                    Website reponse taking time, how to improve?
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-[7px] px-[47px] text-base text-darkslategray">
                  <div className="relative leading-[32px] inline-block w-[713px] shrink-0">
                    Get your blood tests delivered at the home collect a sample
                    from management news. Get your blood tests delivered at the
                    home collect a sample from management news. Get your blood
                    tests delivered at the home collect a sample from management
                    news. Get your blood tests delivered at the home.
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-[752px] h-[3px]"
              alt=""
              src="/dividor-copy-2.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[15px]">
              <img
                className="relative w-5 h-5"
                alt=""
                src="/combined-shape-15711.svg"
              />
              <div className="relative tracking-[-0.5px] leading-[30px] font-medium inline-block w-[321px] h-10 shrink-0">
                New update fixed all bug and issues
              </div>
            </div>
            <img
              className="relative w-[752px] h-[3px]"
              alt=""
              src="/dividor-copy-4.svg"
            />
          </div>
        </div>
      </div>
      <footer
        className="absolute top-[calc(50%_+_2814px)] left-[calc(50%_-_519px)] w-[1038px] h-[280px] text-left text-lg text-dark-blue font-dm-sans"
        id="Footer"
      >
        <div className="absolute top-[46px] left-[870px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
          <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
            Policy
          </div>
          <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[180px] opacity-[0.8]">
            <p className="m-0">Application security</p>
            <p className="m-0">Software principles</p>
            <p className="m-0">Unwanted software policy</p>
            <p className="m-0">Responsible supply chain</p>
          </a>
        </div>
        <div className="absolute top-[46px] left-[580px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
          <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
            My Account
          </div>
          <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[161px] h-[182px] shrink-0 opacity-[0.8]">
            <p className="m-0">Press inquiries</p>
            <p className="m-0">{`Social media `}</p>
            <p className="m-0">directories</p>
            <p className="m-0">{`Images & B-roll`}</p>
            <p className="m-0">Permissions</p>
          </a>
        </div>
        <div className="absolute top-[46px] left-[290px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
          <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
            Our Information
          </div>
          <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray opacity-[0.8]">
            <p className="m-0">{`Return Policy `}</p>
            <p className="m-0">Privacy Policy</p>
            <p className="m-0">{`Terms & Conditions`}</p>
            <p className="m-0">Site Map</p>
            <p className="m-0">Store Hours</p>
          </a>
        </div>
        <div className="absolute top-[46px] left-[0px] w-[150px] flex flex-col items-start justify-start gap-[22px]">
          <div className="relative tracking-[-0.5px] leading-[30px] font-medium">
            About Us
          </div>
          <a className="[text-decoration:none] relative text-sm leading-[250%] text-darkslategray inline-block w-[164px] h-[175px] shrink-0 opacity-[0.8]">
            <p className="m-0">Support Center</p>
            <p className="m-0">Customer Support</p>
            <p className="m-0">About Us</p>
            <p className="m-0">Copyright</p>
            <p className="m-0">Popular Campaign</p>
          </a>
        </div>
        <img
          className="absolute top-[1px] left-[40.2px] w-[900px] h-[3px]"
          alt=""
          src="/dividor1.svg"
        />
      </footer>
      <div className="absolute top-[0px] left-[-1px] bg-dark-blue h-[971px] flex flex-col items-center justify-start py-[30px] px-0 box-border gap-[65px] text-left text-[85px] text-white">
        <header
          className="w-[1250px] flex flex-row items-center justify-between text-left text-xl text-white font-poppins"
          id="Nav Bar"
        >
          <div className="flex flex-row items-center justify-start gap-[40px]">
            <img
              className="relative w-[29.6px] h-5"
              alt=""
              src="/combined-shape-16724.svg"
            />
            <b className="relative leading-[24px] flex items-center w-[100px] h-6 shrink-0 opacity-[0.8]">
              Landguru
            </b>
          </div>
          <div className="w-[488px] flex flex-row items-center justify-between text-center text-base text-accent-yellow-100 font-montserrat">
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
          className="relative w-[1922px] h-[3px] hidden opacity-[0.1] mix-blend-normal"
          alt=""
          src="/dividor2.svg"
        />
        <div className="w-[1950px] overflow-hidden flex flex-row items-center justify-end">
          <div className="flex flex-col items-start justify-center gap-[40px] w-[633px] [align-self:start] mt-2.5">
            <div className="w-[642px] flex flex-col items-start justify-start gap-[30px]">
              <b className="self-stretch relative tracking-[-2px] leading-[100px]">
                Experience Padel like never before!
              </b>
              <div className="relative text-lg leading-[42px] font-medium inline-block w-[507px] h-[116px] shrink-0">
                Play padel with a plethora of players from beginners to pros!
                Find new teammates and participate in tournaments! Arrange
                groups to play when your friends can’t!
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
    </div>
  );
};

export default LandingPage;
