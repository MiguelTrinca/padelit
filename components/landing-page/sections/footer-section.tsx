import { useMemo, type CSSProperties } from "react";


const FooterSection = ({
}) => {
  
  const socialLogoStyle: CSSProperties = useMemo(() => {
    return {
        position: 'absolute',
        height: '96%',
        width: '96%',
        top: '2%',
        right: '2%',
        bottom: '2%',
        left: '2%',
        maxWidth: '100%',
        overflow: 'hidden',
        maxHeight: '100%',
    }
}, []);


return (
    <div className="w-full relative bg-dark-blue flex flex-row items-start justify-start py-10 px-20 box-border gap-[180px] [border-top:1px] [border-top-style:solid] border-t-darkslategray text-left text-[16.82px] text-white font-inter lg:py-6 lg:px-5 lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray lg:gap-[20px] md:flex-col md:p-10 md:box-border md:gap-[20px] md:mt-[30px] sm:py-[30px] sm:px-6 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] lg:w-[329px] md:flex-[unset] md:self-stretch">
            <div className="flex flex-row items-center justify-start gap-[15.29px]">
                
                        <img className="relative w-full h-[116.03px]"
                            alt=""
                            src="/logo/Logo-Extenso-Dark.svg"
                        />
            </div>
            
            <div className="relative w-[158.47px] h-[36.57px]">
                <a className="[text-decoration:none] absolute top-[0px] left-[0px] w-[36.57px] h-[36.57px] overflow-hidden">
                    <img className="" 
                                    alt="" 
                                    src="/vector5.svg"
                                    style={socialLogoStyle} 
                        />
                </a>
                <a className="[text-decoration:none] absolute top-[0px] left-[121.9px] w-[36.57px] h-[36.57px] overflow-hidden">
                    <img className="" 
                                    alt="" 
                                    src="/vector6.svg"
                                    style={socialLogoStyle} 
                                />
                </a>
                <a className="[text-decoration:none] absolute top-[0px] left-[60.95px] w-[36.57px] h-[36.57px] overflow-hidden">
                    <img className="" 
                                    alt="" 
                                    src="/vector7.svg"
                                    style={socialLogoStyle}
                    />
                </a>
            </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-[62px] px-0 text-[20px] md:flex-[unset] md:self-stretch">
            <div className="relative leading-[27px] font-semibold">Made with love for Padel 🧡</div>
        </div>
    </div>
      );
};

export default FooterSection;



