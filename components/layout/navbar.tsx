import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import SearchInput from '../search'
import { UIIcons } from '../ui-icons'

const Navbar = () => {
  return (
    <div className='flex h-[77px] p-3 items-center justify-between overflow-hidden'>
        {/* Div Left */}
        <div className='flex px-5 py-2 justify-center items-center gap-x-10 bg-slate-50'>

            <Image
                    src="logo/Logo-White.svg" 
                    alt="Padelit"
                    object-fit = "contain"
                    width="26"
                    height="39"
                    className=''
            />


              {/** Hamburgeuer Menu Here */}

            <div className="flex justify-center items-center
                gap-[31px] text-center text-lg text-foreground-light font-inter">

                <b className="text-accent-yellow">Home</b>
                <div className="font-light">Play</div>
                <div className="font-light">Communities</div>
                <div className=" font-light">Shop</div>

            </div>
        </div>

        {/* Div Right */}
        <div className='flex px-5 py-2 justify-center items-center gap-x-10'>
            <SearchInput
                placeholder='Procura'
                iconColor='fill-foreground-light'
            />

            <div className='flex justify-center items-center gap-x-8'>
                <UIIcons.friends
                    className='w-7 h-7 fill-foreground'
                />
                <UIIcons.notificationOn
                    className='w-7 h-7 fill-foreground'
                />
            </div>

            {/** Profile Div */}
            <div className='flex justify-center items-center gap-x-2'>
                <Image
                    src="logo/Logo-White.svg"
                    alt="Profile"
                    objectFit='contain'
                    width="34"
                    height="34"
                    className=''
                />
                <div className='flex flex-col justify-center items-start'>
                    <span className='font-inter text-xs'>
                        Profile 1
                    </span>
                    {/** Coins */}
                    <div className='flex items-center gap-x-1'>
                        <UIIcons.coin 
                            className='w-4 h-4'
                        />
                        <span className='font-inter text-xs text-primary'>
                            2
                        </span>
                    </div>

                </div>


            </div>
        </div>

    </div>
  )
}

export default Navbar