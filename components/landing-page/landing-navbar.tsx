import type { NextPage } from 'next';
import { CSSProperties, useMemo } from 'react';



const LandingNavbar:NextPage = () => {

	const navLinksStyle: CSSProperties = useMemo(() => {
		return {
			cursor: 'pointer',
			border: 'none',
			padding: '0',
			background: 'transparent',
			position: 'relative',
			fontSize: '15px', 
			fontWeight: '300', 
			fontFamily: 'Inter', 
			color: '#f3f6fd', 
			textAlign: 'center',
			display: 'inline-block',
			flexShrink: '0',
			backgroundColor: '#fffff',
		}
	}, []);

  	return (
    		<header className="w-full absolute my-0 mx-[!important] top-[0] left-[0px] h-[77px] flex flex-row items-center justify-between py-[22px] px-20 box-border text-left text-[11.04px] text-ghostwhite font-inter lg:pl-10 lg:pr-10 lg:box-border md:flex-col md:pl-6 md:pr-6 md:box-border text-light-background">
      			<div className="flex flex-row items-center justify-start gap-[10.03px] md:flex-row sm:hidden sm:flex-row sm:items-center sm:justify-start sm:pt-0 sm:pb-5 sm:box-border">
        				<img className='relative w-full h-[57.87px]'
							alt=''
							src='/logo/Logo-Compacto-Landing.svg'/>
      			</div>
      			<div className="flex flex-row items-center justify-between md:hidden text-light-background">
        				{/*<button className='w-[51.82px]' style={navLinksStyle}>Home</button>
        				<button className="w-[105.18px]" style={navLinksStyle}>Features</button>
        				<button className="w-[92.74px]" style={navLinksStyle}>Testimonials</button>
        				<button className="w-[89.46px]" style={navLinksStyle}>Plans</button>*/}
      			</div>
    		</header>);
};

export default LandingNavbar;
