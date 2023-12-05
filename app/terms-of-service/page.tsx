import React from 'react'

import fs from 'fs';
import path from 'path';
import BackButton from '@/components/terms-of-service/back-button';

const TermsOfServicePage = () => {
    const termsPath = path.resolve("./public/newsletter/terms-of-service.html");
    const termsHTML = fs.readFileSync(termsPath, 'utf-8');

    return (
        <div>
            <div 
                dangerouslySetInnerHTML = {{__html : termsHTML}}
                className='p-8'
            />
                <BackButton/>
        </div>
  )
}

export default TermsOfServicePage