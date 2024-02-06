'use client'
import Image from 'next/image'
import React, { useState, CSSProperties, useRef, useEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import SearchInput from '../search'
import ProfileCard from './profile-card'
import NotifcationCard from './notifications-card'
import FriendsSheet from './friends-sheet'
import { UIIcons } from '../ui-icons'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { Session } from 'next-auth'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const Navbar =  ({session}: {session: Session }) => {

    const currentPage = usePathname()  
    const isMobile = useMediaQuery('(max-width: 1020px)')
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const sheetStyles: CSSProperties = {
        //width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: isSheetOpen ? 0 : '-100rem', // Slide off-screen initially
        backgroundColor: 'background',
        boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
        transition: 'left 0.3s ease-in-out', // Animation duration and easing
      };

      const toggleSheet = () => {
        setIsSheetOpen(!isSheetOpen);
      };
      

      const handleFocus = () => {
        if (wrapperRef.current) {
          wrapperRef.current.classList.add('ring-2', 'ring-primary');
        }
      };
    
      const handleBlur = () => {
        if (wrapperRef.current) {
          wrapperRef.current.classList.remove('ring-2', 'ring-primary');
        }
      };

      const handleSearch = () => {
        alert("You Search For something")
      }


  return (
    <div className='flex h-[77px] p-3 items-center justify-between overflow-hidden'>
        {/* Div Left */}
        <div className='flex px-5 py-2 justify-center items-center gap-x-10'>

            <Image
                    src="logo/Logo-White.svg" 
                    alt="Padelit"
                    object-fit = "contain"
                    width="26"
                    height="39"
                    className=''
            />


              {/** Hamburgeuer Menu Here */}
            {isMobile ? 
                //Mobile View
                (
                    <div>
                        <UIIcons.hamburguer className='text-secondary cursor-pointer hover:bg-foreground/10
                            hover:rounded-lg
                            hover:ring-8
                            hover:ring-foreground/10
                            hover:text-primary' onClick={toggleSheet}/> 
                
                        {/* Sheet */}
                        <div className={`flex flex-col py-5 px-7 gap-5 items-start fixed top-0 left-0 h-full w-full bg-background shadow-lg transition-transform duration-300 transform ${isSheetOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                            {/* Content of your sheet */}
                            <div className='relative flex flex-col items-start w-11/12 gap-5'>
                                <UIIcons.x className='w-5 h-5 absolute top-5 right-5 text-secondary hover:text-primary cursor-pointer' onClick={toggleSheet}/>
                                
                                <Image
                                    src='logo/Logo-Extenso-Light.svg'
                                    alt='Padelit'
                                    object-fit='contain'
                                    width='125'
                                    height='75'
                                    className=''
                                />

                                <div 
                                    ref={wrapperRef} 
                                    className='flex items-center rounded-md p-2 gap-x-2 ring-1 ring-muted/70 self-stretch '
                                >
                                    <UIIcons.magnifier
                                        className='w-5 h-5 fill-secondary'
                                        onClick={handleSearch}
                                    />

                                    <input
                                        className='bg-transparent outline-none font-inter placeholder:text-muted'
                                        type='email'
                                        placeholder='Procura'
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />

                                </div>
                            </div>

                            <div className='flex flex-col w-11/12 gap-3 items-start '>
                                <Link href='home' 
                                    style={{textDecoration: 'none', color: 'inherit'}} 
                                    className={`flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg hover:font-bold ${currentPage === '/home' ? 'font-semibold hover:bg-primary/10 fill-primary cursor-default' : 'hover:bg-foreground/10 hover:font-bold fill-secondary cursor-pointer'} `} onClick={toggleSheet}>
                                        <UIIcons.home/>
                                        <span className={`font-inter text-base ${currentPage === '/home' ? 'text-primary' : 'text-secondary'}`}>Home</span>
                                </Link>
                                
                                <Link href='play' 
                                    style={{textDecoration: 'none', color: 'inherit'}} 
                                    className={`flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg hover:font-bold ${currentPage === '/play' ? 'font-semibold hover:bg-primary/10 fill-primary cursor-default' : 'hover:bg-foreground/10 hover:font-bold fill-secondary cursor-pointer'} `} onClick={toggleSheet}>
                                        <UIIcons.racketBall/>
                                        <span className={`font-inter text-base ${currentPage === '/play' ? 'text-primary' : 'text-secondary'}`}>Play</span>
                                </Link>
                                
                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.shop className='fill-muted'/>
                                    <span className='font-inter text-muted text-base'>Shop</span>
                                </div>
                                
                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.friends className='fill-muted'/>
                                    <span className='font-inter text-muted text-base '>Communities</span>
                                </div>
                                                                
                                <Separator className=''/>

                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.profile className='fill-muted'/>
                                    <span className='font-inter text-muted text-base'>Profile</span>
                                </div>
                                
                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.messages className='w-6 h-6 fill-muted'/>
                                    <span className='font-inter text-muted text-base'>Messages</span>
                                </div>
                                
                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.subscriptions className='w-6 h-6 fill-muted'/>
                                    <span className='font-inter text-muted text-base'>Subscriptions</span>
                                </div>
                                
                                <div className='flex py-4 px-3 gap-4 justify-start items-center self-stretch rounded-lg font-normal hover:bg-foreground/10 hover:font-bold cursor-not-allowed'>
                                    <UIIcons.settings className=' w-6 h-6 fill-muted'/>
                                    <span className='font-inter text-muted text-base'>Settings</span>
                                </div>                                
                            </div>

                            <div className='flex pt-56 w-11/12 gap-5 items-end '>
                                <div className='flex w-12 h-12 justify-center items-center'>

                                        <Image
                                            src={session.user?.image ?  session.user?.image : 'logo/Logo-White.svg' }
                                            alt='Profile Picture'
                                            objectFit='contain'
                                            width='48'
                                            height='48'
                                            className='rounded-lg'
                                        />
                                        
                                </div>
                                <div className='flex flex-col items-start gap-2 font-inter font-bold text-lg text-foreground'>
                                    <span>{session.user?.name ? session.user.name : session.user?.email}</span>
                                    <div className='flex items-center gap-1'>
                                        <UIIcons.coin 
                                            className='w-4 h-4'
                                        />
                                        <span className='font-normal text-xs text-primary'>2</span>
                                    </div>
                                </div>
                                <div className='ml-auto mr-2'>
                                    <Button onClick={() => signOut()}>Sign Out</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                //Desktop View
                <div className="flex justify-center items-center
                    gap-[31px] text-center text-lg text-secondary font-inter">

                    <div className={`hover:font-bold ${currentPage === '/home' ? 'font-bold text-primary cursor-default' : 'cursor-pointer'} `}> 
                        <Link href='home' style={{textDecoration: 'none', color: 'inherit', cursor: 'inherit'}}>
                                Home
                        </Link>
                    </div>

                    <div className={`hover:font-bold ${currentPage === '/play' ? 'font-bold text-primary cursor-default' : 'cursor-pointer'}`}>
                        <Link href='play' style={{textDecoration: 'none', color: 'inherit', cursor: 'inherit'}}>
                                Play
                        </Link>
                    </div>

                    <div className="text-muted hover:font-bold cursor-not-allowed">Communities</div>
                    <div className="text-muted hover:font-bold cursor-not-allowed">Shop</div>

                </div>
            }
            
        </div>

        {/* Div Right */}
        {!isMobile &&
            <div className='flex px-5 py-2 justify-center items-center gap-x-10'>
                <SearchInput
                    placeholder='Procura'
                    iconColor='fill-secondary'
                />

                <div className='flex justify-center items-center gap-x-8'>
                    <FriendsSheet/>
                    <NotifcationCard/>
                </div>

                {/** Profile Div */}
                <ProfileCard session={session}/>
            </div>
        }

    </div>
  )
}

export default Navbar
//<div className='flex flex-col items-start gap-5 py-5 px-6 w-full' style={sheetStyles}>
                        