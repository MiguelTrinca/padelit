import Link  from "next/link";

/*
const HeroSection = () => {
  return (
    <div className="rounded-5xs h-[566px] sm:h-[818px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-5 px-10 box-border bg-[url('/image-alignmentbottom-typeform-backgroundsimple@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-21xl text-dark-gray font-inter self-stretch" style={{ backgroundImage: "url('/hero-sections@3x.png')" }}>
      <div className="w-full flex flex-col items-center justify-start gap-[20px] max-w-[960px] lg:w-auto md:w-auto sm:w-auto">
        <b className="relative text-white text-4xl sm:text-5xl lg:text-6xl leading-[120%] font-inter">
          Construindo a Padelit para ti!
        </b>
        <div className="relative text-grey-white text-lg sm:text-xl leading-[24px] font-inter text-left sm:text-center">
          Estamos empenhados em desenvolver esta plataforma para ti, mantém-te atualizado com as últimas notícias da plataforma e fica elegível a ganhar recompensas.
          Junta-te à comunidade <span className="font-bold text-accent-yellow">Padelit</span> hoje e faz parte da revolução do <span className="font-bold">Padel em Portugal.</span>
        </div>
        <div>
          <Link href="/newsletter" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="cursor-pointer py-3 px-5 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow">
              <div className="relative text-sm leading-[22px] font-bold font-inter text-white text-center">
                Subscreve à Newsletter
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
*/

const HeroSection = () => {
 
  return ( 
    <div
      className="rounded-5xs h-[566px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-5 px-10 box-border bg-cover bg-no-repeat bg-[top] text-left text-21xl text-dark-gray font-inter self-stretch sm:h-[818px]"
      style={{height: "818px", backgroundImage: "url('/hero-sections@3x.png')"}}
    >
      <div className="md:text-center md:justify-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-[960px] lg:w-auto lg:[align-self:unset] md:w-auto sm:w-auto sm:[align-self:unset]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <b
              className="self-stretch relative leading-[120%] text-[60px] text-white font-inter md:text-[50px]"
            >
              Construindo a Padelit para ti!
            </b>
            <div
              className="self-stretch relative text-grey-white leading-[24px]"
              style={{fontSize: "20px", fontFamily: "Inter"}}
            >              
              
              Estamos empenhados em desenvolver esta plataforma para ti, mantém-te atualizado com as últimas notícias da plataforma e fica elegível a ganhar recompensas. 
              Junta-te à comunidade <span className="font-bold text-accent-yellow">Padelit</span> hoje e faz parte da revolução do <span className="font-bold">Padel em Portugal.</span>

            </div>
          </div>

          <button 
            className="cursor-pointer [border:none] mt-4 py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow md:w-full"
          >
            <Link 
              className="relative text-base leading-[24px] font-inter font-bold text-white text-center"
              href="/newsletter" style={{ textDecoration: 'none', color: 'white'}}
            >
              Subscreve à Newsletter
            </Link>
          </button>


        </div>
      </div>
    </div>
  );
};

export default HeroSection;
