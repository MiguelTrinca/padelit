import React from 'react'
import { UIIcons } from '../ui-icons'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const NotifcationCard = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='bg-transparent focus:ring-transparent cursor-pointer outline-0'>

            <div className='
                hover:bg-foreground/10
                hover:rounded-lg
                hover:ring-8
                hover:ring-foreground/10
'           >
            <UIIcons.notificationOff
                className='w-7 h-7 fill-foreground'
            />
            </div>

        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-background'>
            <DropdownMenuItem className='flex w-64 h-24 p-3 justify-center items-center gap-x-2 focus:bg-background'>
                <UIIcons.checkMark className='fill-none'/>
                <span className='text-foreground text-base font-inter'>Não tens notificações!</span>
            </DropdownMenuItem>
        </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default NotifcationCard