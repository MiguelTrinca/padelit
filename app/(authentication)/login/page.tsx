"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'

//UI Components
import { Icons } from "@/components/icons"
import { UIIcons } from "@/components/ui-icons"
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

// Next Imports
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

// Zod & React Hook Form
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { zodUserSchema, TzodUserSchema } from "@/lib/zod-types/user-types"

const Login = () => {
  const router = useRouter();
  const session = useSession();

  //useEffect(() => {
  //  if (session?.status === "authenticated") {
  //    router.replace("/home")
  //  }
  //}, [session, router] )

  const handleClose  = () => {
    router.push('/');
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TzodUserSchema>({
    resolver: zodResolver(zodUserSchema)
  })

  const onSubmit = async (data: TzodUserSchema) => {
    //CAll API
    console.log("Logging in")

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res?.status == 400 || res?.status == 401){
      alert("Whoops alguma coisa aconteceu! Por favor tenta mais tarde")
    }

    if (res?.error) {
      setError("root", {
        type: "server",
        message: "Email ou palavra-passe incorretos"
      })
    return
  }
    
    router.push('/home')
    
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
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
          <CardTitle className="text-2xl">Entra na tua conta</CardTitle>
          <CardDescription className="text-muted w-[400px]">
            Entra com o Google ou continua com o teu email
          </CardDescription>
        </CardHeader>


      <CardContent className="grid gap-4">
        <div className="grid gap-6">
          <Button 
            variant="outline" 
            className="hover:bg-background hover:text-foreground"
            onClick={ () => {signIn("google")} }
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
          
        <div className="relative flex justify-center items-center text-xs font-inter">
          <Separator className="mr-3 h-0.5 w-[100px] bg-border"/>
          <span className="px-2 text-muted">
            Continuar com
          </span>
          <Separator className="ml-3 h-0.5 w-[100px] bg-border"/>
        </div>

      </CardContent>
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className='grid gap-4'>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="joao.silva@padelit.pt" 
                className="placeholder:text-muted"
                {...register("email")}
              />

                {errors.email && (
                  <Label className="text-destructive/70">
                    {errors.email.message}
                  </Label>
                )}
            
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Palavra-Passe</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="******" 
                className="placeholder:text-muted" 
                {...register("password")}
              />
               
               {errors.password && (
                  <Label className="text-destructive/70">
                    Email ou palavra-passe incorretos
                  </Label>
                )}

            </div>
          
            {errors.root && (
              <Label className="text-destructive/70">
                {errors.root.message}
              </Label>
            )}
        </CardContent>


        <CardFooter className="flex flex-col">

          <Button 
            className="w-full disabled:bg-muted"
            disabled={isSubmitting}
            type='submit'
            >
            Entrar
          </Button>
          <p className="text-sm text-muted"> Ainda não tens conta? {}  
            <Link href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="text-accent underline hover:text-accent/70">Cria aqui </span>
            </Link>
          </p>
        </CardFooter>  

        </form>

      </Card>  
    </div>
    
  )
}
export default Login;