"use client"

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

import Image from "next/image"
import Link from 'next/link'

import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();

  const handleClose  = () => {
    router.push('/');
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
            <Button variant="outline" className="hover:bg-background hover:text-foreground">
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
          <Button className="w-full">Entrar</Button>

          <p className="text-sm text-muted"> Ainda não tens conta? {}  
            <Link href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="text-accent underline hover:text-accent/70">Cria aqui </span>
            </Link>
          </p>

        </CardFooter>
      </Card>  
    </div>
  )
}
export default Login;