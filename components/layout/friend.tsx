import React from 'react'
import { UIIcons } from '../ui-icons'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const Friend = () => {
  return (
    <div className='flex py-4 px-3 items-center gap-5 self-strech fill-secondary text-secondary hover:bg-foreground/10 hover:rounded-lg cursor-pointer '>
        <UIIcons.profile
            className='w-6 h-6'        
        />
        <div className='flex flex-col justify-center items-start'>
            <span className="text-base font-normal font-inter leading-normal">
                Friend  1
            </span>
            <span className='text-positive text-[10px] font-light font-inter leading-3'>
                online
            </span>
        </div>
        <div className="pl-5 justify-end items-end gap-5 inline-flex ">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className='bg-transparent rounded-lg hover:ring-4 hover:ring-accent  hover:bg-accent hover:fill-accent-foreground cursor-pointer'>
                        <UIIcons.messages className='w-5 h-5'/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Enviar Mensagem</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger className='bg-transparent rounded-lg hover:ring-4 hover:ring-accent  hover:bg-accent hover:fill-accent-foreground cursor-pointer'>
                        <UIIcons.racketBall className='w-5 h-5'/>
                    </TooltipTrigger>
                    <TooltipContent className='bg-foreground'>
                        <p>Convida para jogar</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
                        
                        
                        
        </div>
    </div>
  )
}

export default Friend;

