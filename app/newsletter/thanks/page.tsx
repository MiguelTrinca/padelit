"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Thanks = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center py-10 px-4 sm:px-10 box-border gap-3 text-center text-50x1 text-dark-blue font-inter">
      <b className="relative text-accent-yellow">Muito Obrigado 🧡</b>
      <div className="flex flex-col items-center justify-center gap-2 text-lg sm:text-xl">
        <div className="relative">
          Brevemente recebirá um email. Por favor verifique na sua pasta spam.
          {/*You will soon receive an email. Make sure you check your spam folder.*/}
        </div>
        <div className="relative text-sm text-gray-blue w-full sm:w-[24rem]">
          Adoraríamos a sua ajuda. Se tiver 5 minutos, por favor responda ao seguinte formulário: {" "}
          {/*We would love to hear from you! If you have 5 minutes, please answer the following form:{" "}*/}
          <Link href="www.google.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="font-semibold underline text-accent-yellow">Padelit Form</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-lg">
        <div className="relative">Follow us</div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Image
            className="relative"
            alt="facebook"
            src="../../facebook-dark.svg"
            width={35}
            height={35}
          />
          <Image
            className="relative"
            alt="insta"
            src="../../insta-dark.svg"
            width={35}
            height={35}
          />
          <Image
            className="relative"
            alt="twitter"
            src="../../twitter-dark.svg"
            width={35}
            height={35}
          />
          <Image
            className="relative"
            alt="youtube"
            src="../../youtube-dark.svg"
            width={35}
            height={35}
          />
        </div>
      </div>
      <Link className="font-inter text-2xs text-dark-blue visited:text-dark-blue" href="/">
        Voltar à página principal
        {/*Return to Landing Page*/}
      </Link>
    </div>
  );
};

export default Thanks;
