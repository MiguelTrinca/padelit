import Image from 'next/image'
import React from 'react'
import { UIIcons } from '../ui-icons'

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const ProfileCard = () => {
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
            <DropdownMenuItem className='text-muted font-inter gap-3 fill-muted hover:fill-secondary-foreground cursor-not-allowed'>
                <UIIcons.profile/>
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

            <Link href="/signout" style={{ textDecoration: 'none', color: 'inherit' }}>
                <DropdownMenuItem className='text-secondary font-inter gap-3 fill-secondary hover:fill-secondary-foreground cursor-pointer'>
                    <UIIcons.signOut/>
                    Sign Out
                </DropdownMenuItem>
            </Link>

        </DropdownMenuContent>
    </DropdownMenu>




  )
}

export default ProfileCard


 /* <div className='flex justify-center items-center gap-x-2 hover:bg-foreground/10
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
                {/** Coins 
                <div className='flex items-center gap-x-1'>
                    <UIIcons.coin 
                        className='w-4 h-4'
                    />
                    <span className='font-inter text-xs text-primary'>
                        2
                    </span>
                </div>  
            </div>
  </div>*/