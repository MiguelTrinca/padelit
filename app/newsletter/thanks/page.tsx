"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Thanks = () => {
  	return (
    	  <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center py-[274px] px-[411px] box-border gap-[33px] text-center text-50x1 text-dark-blue font-inter">
      			<b className="relative text-accent-yellow">
              Thank You! 🧡
            </b>
      			<div className="flex flex-col items-center justify-center gap-[5px] text-xl">
        				<div className="relative">
                  You will soon receive an email. Make sure you check your spam folder
                </div>
        				<div 
                  className="relative text-sm text-gray-blue inline-block w-[616px] h-[18px] shrink-0">
                    We would love to hear from you! If you have 5 minutes please answer the following form: <Link href="www.google.com" style={{ textDecoration: 'none', color: 'inherit' }}><span className=" font-semibold underline text-accent-yellow">Padelit Form</span></Link>
                </div>
      			</div>
      			<div className="flex flex-row items-center justify-center gap-[22px] text-[30px]">
        				<div className="relative">Follow us</div>
        				<div className="flex flex-row items-center justify-center gap-[5px]">
                    <Image
                      className="relative" 
                      alt="facebook" 
                      src="../../facebook-dark.svg" 
                      width="35" height="35"
                    />
                    <Image
                      className="relative" 
                      alt="insta" 
                      src="../../insta-dark.svg" 
                      width="35" height="35"
                    />
                    <Image
                      className="relative" 
                      alt="twitter" 
                      src="../../twitter-dark.svg" 
                      width="35" height="35"
                    />
                    <Image
                      className="relative" 
                      alt="youtube" 
                      src="../../youtube-dark.svg" 
                      width="35" height="35"
                    />
        				</div>
      			</div>
          <Link className="font-inter text-2xs text-dark-blue visited:text-dark-blue" href="/">Return to Landing Page</Link>
    		</div>
      );
};


export default Thanks;