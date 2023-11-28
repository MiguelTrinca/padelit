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
		<header className="w-full absolute my-0 mx-[!important] h-[77px] flex items-center justify-between px-10 mt-5 box-border text-left text-[11.04px] text-ghostwhite font-inter lg:pl-10 lg:pr-10 lg:box-border md:flex-col md:pl-6 md:pr-6 md:box-border text-light-background">
    		<div className="flex items-center justify-start gap-[10.03px] md:flex-row">
      			<img
        			className='relative w-full h-[57.87px] lg:p-4 md:p-4 sm:p-4'
        			alt=''
        			src='/logo/Logo-Compacto-Landing.svg'
      			/>
    		</div>
  		</header>
	)
};

export default LandingNavbar;
