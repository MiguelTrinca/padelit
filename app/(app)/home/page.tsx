'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter, redirect } from "next/navigation"
import React from 'react'

const Home = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Home Page</h1>
            <Button onClick={() => {
                signOut();
            }}>
                Logout
            </Button>
        </div>
    )
}

export default Home