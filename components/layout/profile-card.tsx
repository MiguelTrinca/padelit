'use client'
import Image from 'next/image'
import React from 'react'
import { UIIcons } from '../ui-icons'  
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from 'next/link'
import { signOut } from 'next-auth/react'

const ProfileCard = () => {
    const handleSignOut = () => {
        signOut();
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='bg-transparent focus:ring-transparent cursor-pointer outline-0'>
        <div className='flex justify-center items-center gap-x-2 hover:bg-foreground/10
            hover:rounded-lg
            hover:ring-8
            hover:ring-foreground/10
            '>

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
                {/** Coins*/ }
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
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-background'>
            {/**  These four have muted colors and curosor not allowed for now */}
            {/*<Link href="/signout" style={{ textDecoration: 'none', color: 'inherit' }}>*/}
            <DropdownMenuItem className='text-muted font-inter gap-3 fill-muted hover:fill-secondary-foreground cursor-not-allowed'>
                <UIIcons.profile className='w-4 h-4'/>
                Profile
            </DropdownMenuItem>
            
            <DropdownMenuItem className='text-muted font-inter gap-3 fill-muted hover:fill-secondary-foreground cursor-not-allowed'>
                <UIIcons.messages/>
                Messages
            </DropdownMenuItem>
            
            <DropdownMenuItem className='text-muted font-inter gap-3 fill-muted hover:fill-secondary-foreground cursor-not-allowed'>
                <UIIcons.subscriptions/>
                Subscriptions
            </DropdownMenuItem>
            
            <DropdownMenuItem className='text-muted font-inter gap-3 fill-muted hover:fill-secondary-foreground cursor-not-allowed'>
                <UIIcons.settings/>
                Settings
            </DropdownMenuItem>

            <DropdownMenuItem 
                className='text-secondary font-inter gap-3 fill-secondary hover:fill-secondary-foreground cursor-pointer'
                onClick={handleSignOut}
            >
                <UIIcons.signOut/>
                Sign Out
            </DropdownMenuItem>

        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default ProfileCard


 