import React, { ReactNode } from 'react'
import { getServerSession  } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Navbar from '@/components/layout/navbar'

interface Props {
    children: ReactNode
}

export default async function PrivateLayout({ children }: Props){
    //const session = await getServerSession(authOptions)
    
    //Add this to prod
    //if(!session?.user) redirect("/login")

    return (
        <>
        {
        // Add his in prod to 
        // <Navbar session={session}
        }
        <Navbar/>
        {children}
        </>
    )
}