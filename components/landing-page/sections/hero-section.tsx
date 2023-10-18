import Link  from "next/link";

const HeroSection = () => {
 
  return ( 
    <div
      className="rounded-5xs h-[566px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-5 px-10 box-border bg-[url('/image-alignmentbottom-typeform-backgroundsimple@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-21xl text-dark-gray font-inter self-stretch"
      style={{height: "818px", backgroundImage: "url('/hero-sections@3x.png')"}}
    >
      <div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-[960px] lg:w-auto lg:[align-self:unset] md:w-auto sm:w-auto sm:[align-self:unset]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <b
              className="self-stretch relative leading-[120%]"
              style={{fontSize: "60px", color:"#fff", fontFamily: "Inter"}}
            >
              Experience Padel Like Never Before!
            </b>
            <div
              className="self-stretch relative text-base leading-[24px]"
              style={{fontSize: "20px", color:"#fff", fontFamily: "Inter"}}
            >
              We are hard at work building <span className="font-bold text-accent-yellow">PadelIt!</span>. We cannot be more excited for you to join us! Keep up to date with our development and gain rewards for subscribing to our <span className="font-bold text-accent-yellow">Newsletter!</span>
            </div>
          </div>

          <div>
            <Link href="/newsletter" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="cursor-pointer py-3 px-5 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow">
                  <div className="relative text-sm leading-[22px] font-bold font-inter text-white text-center">
                    Subscribe to Newsletter
                  </div>
                </div>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HeroSection;
