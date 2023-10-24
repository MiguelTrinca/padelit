import type { NextPage } from "next";
import Image from "next/image";
import RewardsSection from "../../components/newsletter-page/sections/rewards-section";
import NewsletterSection from "../../components/newsletter-page/sections/newsletter-section";

const NewsletterPage: NextPage = () => {
  return (
	<div className="flex">
    {/* First Column */}
    <div className="w-1/2 h-screen relative">
		<Image
        	alt=""
        	src={"/newsletter/darken-newsletterImage.png"}
        	layout="fill"
			objectFit="cover"
      	/>

		<RewardsSection/>
    <div className="h-screen">Hello 1</div>
	</div>

    {/* Second Column */}
	<NewsletterSection/>
	<div>HELLO!</div>
  </div>
  );
};

export default NewsletterPage;


/*
import React from 'react'
import NewsletterSection from '../../components/newsletter-page/sections/newsletter-section'
import RewardsSection from '../../components/newsletter-page/sections/rewards-section'

const Newsletter = () => {

  return (    
    <div className="flex justify-center">
      <div className="w-1/2 bg-cover bg-no-repeat bg-center bg-[url('/newsletter/newsletterImage.jpg')]">
        <RewardsSection />
      </div>
      <div className="w-1/2">
        <NewsletterSection />
      </div>
    </div>
  );
}

    /*
    <div className="relative bg-dominant w-full overflow-hidden flex flex-col items-center justify-center text-center text-[50px] text-dominant font-inter md:h-auto">
      <div className="self-stretch rounded-lg bg-dominant shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] h-[1024px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-between">
        <RewardsSection></RewardsSection>
        <NewsletterSection></NewsletterSection>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="w-1/2 bg-cover bg-no-repeat bg-center bg-[url('/newsletter/newsletterImage.jpg')] inset-0">
        <RewardsSection />
      </div>
      <div className="w-1/2">
        <NewsletterSection />
      </div>
    </div>
    */




  	/*return (
    		<div className="relative bg-dominant w-full overflow-hidden flex flex-col items-center justify-center text-center text-[50px] text-dominant font-inter md:h-auto">
      			<div className="self-stretch rounded-lg bg-dominant shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] h-[1024px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-between">
        				<div className="self-stretch flex-1 flex flex-col items-center justify-start py-[34px] px-[49px] gap-[40px] bg-[url('/newsletter/newsletterImage.jpg')] bg-cover bg-no-repeat bg-[top] md:gap-[100px] md:items-center md:justify-between sm:w-auto sm:[align-self:unset] sm:flex-col sm:gap-[40px] sm:pl-[49px] sm:box-border">
          					<div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-10 px-[181px] sm:flex-col sm:items-start sm:justify-between sm:gap-[0px] sm:pl-2.5 sm:pr-[30px] sm:box-border">
            						<b className="flex-1 relative sm:flex-[unset] sm:self-stretch">Rewards</b>
          					</div>
          					<div className="self-stretch flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-between py-[45px] px-[26px] text-mini text-black md:self-stretch md:w-auto md:gap-[150px] md:items-center md:justify-start sm:self-stretch sm:w-auto sm:flex-col sm:gap-[50px] sm:items-start sm:justify-between sm:pl-10 sm:pr-10 sm:box-border">
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Development News</div>
              							<div className="w-20 h-20 flex flex-row items-center justify-center">
                								<img className="relative w-[60.24px] h-[60.24px]" alt="" src="Vector.svg" />
              							</div>
            						</div>
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Premium</div>
              							<div className="w-20 h-20 flex flex-col items-center justify-center">
                								<img className="relative w-[61px] h-[58px]" alt="" src="Vector.svg" />
              							</div>
            						</div>
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Unique Badge</div>
              							<div className="w-20 h-20 flex flex-col items-center justify-center">
                								<img className="relative w-[60px] h-[60px]" alt="" src="Vector.svg" />
              							</div>
            						</div>
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Merch Discount</div>
              							<div className="w-20 h-20 flex flex-col items-center justify-center">
                								<img className="relative w-[61px] h-[61px]" alt="" src="Sale.svg" />
              							</div>
            						</div>
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Beta Features</div>
              							<div className="w-20 h-20 flex flex-col items-center justify-center">
                								<img className="relative w-[42px] h-[71px]" alt="" src="Vector.svg" />
              							</div>
            						</div>
            						<div className="rounded-xl bg-dominant shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[159px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[19px]">
              							<div className="relative">Much More</div>
              							<div className="w-20 h-20 flex flex-col items-center justify-center">
                								<img className="relative w-[67.19px] h-[11.58px]" alt="" src="More.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="self-stretch flex-1 flex flex-col items-center justify-center p-10 gap-[20px] text-left text-[39px] text-dark-blue md:items-center md:justify-start">
          					<div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            						<b className="self-stretch relative leading-[120%]">Be one of the First to Join Padelit</b>
            						<div className="self-stretch relative text-[20px] font-medium text-slategray">
              							<span>{`We are hard at work building PadelIt. We cannot be more exited for you to join us! Right now you can sign up for the `}</span>
              							<span className="text-accent-yellow">newsletter</span>
              							<span>{` and reap rewards!  `}</span>
            						</div>
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30px] gap-[16px] text-sm text-dark-gray">
            						<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              							<div className="self-stretch flex flex-col items-start justify-start">
                								<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  									<div className="self-stretch relative leading-[22px]">First Name</div>
                  									<input className="font-inter text-base bg-dominant self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border" placeholder="John Doe" type="text" />
                  									<div className="self-stretch relative text-xs leading-[20px] text-bad-red">Please include your name</div>
                								</div>
              							</div>
              							<div className="self-stretch flex flex-col items-start justify-start">
                								<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  									<div className="self-stretch relative leading-[22px]">Email</div>
                  									<input className="font-inter text-base bg-dominant self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border" placeholder="john.doe@padelit.com" type="text" />
                								</div>
                								<div className="self-stretch relative text-xs leading-[20px] text-bad-red flex items-center h-6 shrink-0">Please include your email</div>
              							</div>
            						</div>
            						<button className="cursor-pointer [border:none] py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-lightseagreen">
              							<div className="relative text-base leading-[24px] font-inter text-dominant text-center">Subscribe</div>
            						</button>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Newsletter;



    <div className="relative bg-dominant w-full overflow-hidden flex flex-col items-center justify-center md:h-auto">
      <div className="self-stretch rounded-5xs bg-dominant shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] h-[1024px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-between">
        <RewardsSection />
        <NewsletterSection />
      </div>
    </div>



*/