'use client'
import React from 'react'

import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }


    return (
        <button 
            className="fixed top-4 right-4 bg-accent-yellow text-white p-2 hover:bg-hover-yellow rounded cursor-pointer"
            onClick={handleBack}
        >
            Voltar atrás
        </button>
    )
}

export default BackButton