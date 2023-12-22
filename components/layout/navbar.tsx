import Image from 'next/image'
import React from 'react'
import SearchInput from '../search'
import { UIIcons } from '../ui-icons'
import ProfileCard from './profile-card'

const Navbar = () => {
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

            <div className="flex justify-center items-center
                gap-[31px] text-center text-lg text-secondary font-inter">

                <b className="text-accent-yellow">Home</b>
                <div className="font-light hover:font-bold">Play</div>
                <div className="font-light hover:font-bold">Communities</div>
                <div className=" font-light hover:font-bold">Shop</div>

            </div>
        </div>

        {/* Div Right */}
        <div className='flex px-5 py-2 justify-center items-center gap-x-10'>
            <SearchInput
                placeholder='Procura'
                iconColor='fill-secondary'
            />

            <div className='flex justify-center items-center gap-x-8'>
                <div className='
                    hover:bg-foreground/10
                    hover:rounded-lg
                    hover:ring-8
                    hover:ring-foreground/10
                '>
                    <UIIcons.friends
                        className='w-7 h-7 fill-foreground'
                    />
                </div>
                <div className='
                    hover:bg-foreground/10
                    hover:rounded-lg
                    hover:ring-8
                    hover:ring-foreground/10
                '>
                <UIIcons.notificationOn
                    className='w-7 h-7 fill-foreground'
                />
                </div>
            </div>

            {/** Profile Div */}
            <ProfileCard/>
        </div>

    </div>
  )
}

export default Navbar