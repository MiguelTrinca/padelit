import type { NextPage } from "next";
import InputField from "../../input-field"

const NewsletterSection: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-center p-10 gap-[20px] text-left text-20xl text-dark-blue font-inter md:items-center md:justify-start">
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-[40px]">
        <b className="self-stretch relative leading-[120%]">
          Be one of the First to Join Padelit
        </b>
        <div className="self-stretch relative text-xl font-medium text-gray-blue">
          <span>{`We are hard at work building PadelIt. We cannot be more exited for you to join us! Right now you can sign up for the `}</span>
          <span className="text-accent-yellow">newsletter</span>
          <span>{` and reap rewards!  `}</span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30px] gap-[16px] text-sm text-dark-gray">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <InputField
            title="First Name"
            errorMessage={false}
            placeholder="John Doe"
          />
           <InputField
            title="Email"
            errorMessage={false}
            placeholder="john.doe@padelit.com"
          />
          {/*<div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative leading-[22px]">Email</div>
              <input
                className="font-inter text-base bg-dominant self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border"
                placeholder="john.doe@padelit.com"
                type="text"
              />
            </div>
            <div className="self-stretch relative text-xs leading-[20px] text-bad-red flex items-center h-6 shrink-0">
              Please include your email
            </div>
          </div>*/}
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow">
          <div className="relative text-base leading-[24px] font-inter text-white text-center">
            Subscribe
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;


/*import React from 'react'

const NewsletterSection = () => {
  return (
    // Text Part
    <div className="h-full flex-1 w-full relative flex flex-col items-center justify-center p-10 box-border gap-[20px] text-left text-[39px] text-dark-blue font-inter md:items-center md:justify-start">
      <div className="w-full relative flex flex-col items-center justify-start gap-[8px] text-left text-[39px] text-dark-blue font-inter">
        <b className="self-stretch relative leading-[120%]">Be one of the First to Join Padelit</b>
        <div className="self-stretch relative text-[20px] font-medium text-slategray">
          <span>{`We are hard at work building PadelIt. We cannot be more exited for you to join us! Right now you can sign up for the `}</span>
          <span className="text-accent-yellow">newsletter</span>
          <span>{` and reap rewards! `}</span>
        </div>
      </div>

    
    <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[16px] text-left text-sm text-dark-gray font-inter">
      		<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        			<div className="self-stretch flex flex-col items-start justify-start">
          				<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          						<div className="self-stretch relative leading-[22px] font-inter">First Name</div>
          						<input className="font-inter text-base bg-white self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border font-inter" placeholder="John Doe" type="text" />
          						<div className="self-stretch relative text-xs leading-[20px] font-inter">Please include your name</div>
          				</div>
        			</div>
        			<div className="self-stretch flex flex-col items-start justify-start">
          				<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          						<div className="self-stretch relative leading-[22px] font-inter">Email</div>
          						<input className="font-inter text-base bg-white self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border font-inter" placeholder="john.doe@padelit.com" type="text" />
          				</div>
          				<div className="self-stretch relative text-xs leading-[20px] font-inter">Please include your email</div>
        			</div>
      		</div>
      		<button className="cursor-pointer [border:none] py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow">
        			<div className="relative text-base leading-[24px] font-inter text-white text-center">Subscribe</div>
      		</button>
    	</div>
    </div>


  )
}

export default NewsletterSection*/