import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface Props {
    children: ReactNode
}

export default async function AuthLayout({ children }: Props){
    const session = await getServerSession(authOptions)

    if (session) redirect("/home")

    return <>{children}</>
}