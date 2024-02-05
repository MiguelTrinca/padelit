'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const Home = () => {
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