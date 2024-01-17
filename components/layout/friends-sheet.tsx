'use client'
import React, { useRef } from 'react'
import { UIIcons } from '../ui-icons'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import SearchInput from '../search'
import Image from 'next/image'
import Friend from './friend'
  

const FriendsSheet = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleSearch = () => {
        alert("You Search For something")
      }

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

  return (
    <Sheet>
        <SheetTrigger className='bg-transparent cursor-pointer'>
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
        </SheetTrigger>
        <SheetContent className=''>
            <SheetHeader className='flex'>
                <Image
                        src="logo/Logo-Extenso-Light.svg" 
                        alt="Padelit"
                        object-fit = "contain"
                        width="100"
                        height="50"
                        className=''
                />
            </SheetHeader>
            <div className='flex flex-col mt-5'>
                <div 
                    ref={wrapperRef} 
                    className='flex items-center rounded-md p-2 gap-x-2 ring-1 ring-muted/70'
                >
                    <UIIcons.magnifier
                        className='w-5 h-5 fill-secondary'
                        onClick={handleSearch}
                    />
                    
                    <input
                        className='bg-transparent outline-none text-inter placeholder:text-muted w-full'
                        type='email'
                        placeholder='Procurar por jogadores'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />

                </div>

                {/** Friends List */}
                <div className='flex flex-grow flex-col mt-4 gap-4'>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                </div>

            </div>
      
      </SheetContent>
    </Sheet>
    
  )
}

export default FriendsSheet
/*
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
*/