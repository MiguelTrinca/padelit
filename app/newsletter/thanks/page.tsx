"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Thanks = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-10 px-4 sm:px-10 box-border gap-3 text-center text-50x1 text-dark-blue font-inter">
      <b className="relative text-accent-yellow">Muito Obrigado 🧡</b>
      <div className="flex flex-col items-center justify-center gap-2 text-lg sm:text-xl">
        <div className="relative">
          Brevemente receberás um email. Por favor verifica na tua pasta spam.
        </div>
        <div className="relative text-sm text-gray-blue w-full sm:w-[24rem]">
          Adoraríamos a tua ajuda. Se tiveres 5 minutos, por favor responde ao seguinte formulário: {" "}
          <Link href="https://forms.gle/qES23EyddR3EqA94A" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="font-semibold underline text-accent-yellow">Formulário Padelit</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-lg">
        <div className="relative">Segue-nos!</div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Link href="https://www.facebook.com/profile.php?id=61552954830370" target="_blank">
            <Image
              className="relative"
              alt="facebook"
              src="../../facebook-dark.svg"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://www.instagram.com/padelitapp/" target="_blank">
            <Image
              className="relative"
              alt="insta"
              src="../../insta-dark.svg"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://twitter.com/PadelitApp" target="_blank">
            <Image
              className="relative"
              alt="twitter"
              src="../../twitter-dark.svg"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCMiz6nAHdqrI4B2K2TeBdCw" target="_blank">
            <Image
              className="relative"
              alt="youtube"
              src="../../youtube-dark.svg"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
      <Link className="font-inter text-2xs text-dark-blue visited:text-dark-blue" href="/">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default Thanks;
