import type { NextPage } from "next";
import NewsletterForm from "../newsletter-form";

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
            
      <NewsletterForm/>
    
    </div>
  );
};

export default NewsletterSection;

