import React from "react";
import "./global.css";

export const metadata = {
    title: 'Padelit',
    description: 'Best Padel Tennis Platform to engage with the community',
    icons: '/logo/Logo-Dark.svg'
  }
  

function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>    
        )
}


export default RootLayout;
