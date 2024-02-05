import React, { ReactNode } from 'react'
import { getServerSession  } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Navbar from '@/components/layout/navbar'

interface Props {
    children: ReactNode
}

export default async function PrivateLayout({ children }: Props){
    const session = await getServerSession(authOptions)

    console.log("THIS IS MY SESSIONNNNN")
    console.log("======================")
    console.log("======================")
    console.log(session)

    //    user: {
    //      name: 'padelit',
    //      email: 'padelit.app@gmail.com',
    //      image: 'https://lh3.googleusercontent.com/a/ACg8ocKDisooC64UsvQ7L-e17RZXySte_f9Fvyj19iKL2wRFWA=s96-c',
    //      id: '112389572366237730831'
    //  }
    
    console.log("======================")
    console.log("======================")

    if(!session?.user) redirect("/login")

    return (
        <>
        <Navbar session={session}/>
        {children}
        </>
    )
}