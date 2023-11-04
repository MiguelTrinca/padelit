import React from 'react'

import fs from 'fs';
import path from 'path';
import Link from 'next/link';



const TermsOfServicePage = () => {
    const termsPath = path.resolve("./public/newsletter/terms-of-service.html");
    const termsHTML = fs.readFileSync(termsPath, 'utf-8');

    return (
        <div>
            <div 
                dangerouslySetInnerHTML = {{__html : termsHTML}}
                className='p-8'
            />
            <Link href="/newsletter">
                <button className="fixed top-4 right-4 bg-accent-yellow text-white p-2 hover:bg-hover-yellow rounded cursor-pointer">
                    Voltar atrás
                </button>
            </Link>
        </div>
  )
}

export default TermsOfServicePage