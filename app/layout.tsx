import React from "react";
import "./global.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })

export const metadata = {
    title: 'Padelit',
    description: 'A plataforma de Padel Portuguesa!',
    icons: '/logo/Logo-Dark.svg'
  }
  

function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={ cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                  )}
            >
                <main>
                    {children}
                </main>
            </body>
        </html>    
        )
}


export default RootLayout;
