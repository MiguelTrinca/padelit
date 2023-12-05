"use client"

import { useState } from 'react'

import { UIIcons } from '@/components/ui-icons'
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { useRouter } from 'next/navigation';

import Image from "next/image"
import Link from 'next/link'
import React from "react"


const Register = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleRegister = () => {
    //Update step to switch to the form view
    setStep(2);
  }

  const handleBack = () => {
    setStep(1);
  }

  const handleClose  = () => {
    router.push('/');
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      {step === 1 && (
        <Card>
          <CardHeader className="space-y-1">
            <Image
              src="logo/Logo-Dark.svg" 
              alt="Padelit"
              object-fit = "contain"
              width="70"
              height="70"
              className="flex flex-col relative self-center mb-5"
            />
            <UIIcons.x 
              className='absolute fill-none text-muted w-4 h-4 hover:cursor-pointer'
              onClick={handleClose}
            />
            <CardTitle className="text-2xl">Cria a tua conta</CardTitle>
            <CardDescription className="text-muted w-[400px]">
              Cria uma conta com o Google ou cria com o teu email 
            </CardDescription>
          </CardHeader>
          
          <CardContent className="grid gap-4">
            <div className="grid gap-6">
              <Button variant="outline" className="hover:bg-background hover:text-foreground">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative flex justify-center items-center text-xs font-inter">
              <Separator className="mr-3 h-0.5 w-[100px] bg-border"/>
              <span className="px-2 text-muted">
                Ou
              </span>
              <Separator className="ml-3 h-0.5 w-[100px] bg-border"/>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <Button 
              className="w-full"
              onClick={handleRegister}
            >
                Criar conta
            </Button>

            <p className='text-muted text-sm'>Ao criares uma conta estás a aceitar os nossos {" "} 
              <Link href={"terms-of-service"} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className='underline text-muted hover:text-accent'>termos e condições</span>
              </Link> 
            </p>

            <p className="text-sm text-muted"> Já tens uma conta? {}  
              <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="text-accent underline hover:text-accent/70">Inicia aqui </span>
              </Link>
            </p>

          </CardFooter>
        </Card>  
      )}

      {step === 2 && (
        <Card>
          <CardHeader className="space-y-1">
            <Image
              src="logo/Logo-Dark.svg" 
              alt="Padelit"
              object-fit = "contain"
              width="70"
              height="70"
              className="flex flex-col relative self-center mb-5"
            />
            <UIIcons.leftArrow 
              className='absolute fill-none text-muted w-4 h-4 hover:cursor-pointer'
              onClick={handleBack}
            />
            <CardTitle className="text-2xl">Cria a tua conta</CardTitle>
            <CardDescription className="text-muted w-[400px]">
              Cria uma com o teu email 
            </CardDescription>
          </CardHeader>
        
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="joao.silva@padelit.pt" className="placeholder:text-muted"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="******" className="placeholder:text-muted" />
            </div>
          </CardContent>
        
          <CardFooter className="flex flex-col">
            <Button className="w-full">Criar conta</Button>

            <p className="text-sm text-muted"> Já tens uma conta? {}  
              <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="text-accent underline hover:text-accent/70">Inicia aqui </span>
              </Link>
            </p>

          </CardFooter>
        </Card>  
      )}
      
    </div>
  )
}
export default Register;