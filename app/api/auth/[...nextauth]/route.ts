import NextAuth, { NextAuthOptions } from "next-auth"
import {Account, User } from "next-auth" 

//Providers
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'

import connectMongo from "@/lib/db"
import UserModel from "@/models/User"
import { TzodUserSchema, zodUserSchema } from "@/lib/zod-types/user-types";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                //Simplify Validation with Zod
                console.log("Verifying!")
                const result = zodUserSchema.safeParse(credentials)
                if (!result.success){
                    throw Error("Email ou palavra-passe incorretos")                    
                }

                const { email, password } = credentials as {
                    email: string;
                    password: string;
                }

                await connectMongo()

                const user = await UserModel.findOne({ email })
                if (!user) throw Error("Email ou palavra-passe incorretos")

                const passwordMatch = await user.comparePassword(password)
                if (!passwordMatch) throw Error("Email ou palavra-passe incorretos")

                return {
                    id: user._id,
                    email: user.email
                }

            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    //This functions will run the first time and we run the log in request
    callbacks: {
        jwt(params: any) {
            if (params.user) {
                params.token.id = params.user.id
            } 
            return params.token
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as { id: string }).id = token.id as string
            }
            return session
        },
        async signIn({ user, account }) {
            if (account?.provider == "credentials") return true
            
            else if (account?.provider == "google") {
                await connectMongo()
                
                try {
                    const existingUser = await UserModel.findOne({ email: user.email })
                    if (!existingUser) {
                        await UserModel.create({ email: user.email })
                        return true
                    }

                    return true

                } catch (error) {
                    throw Error("Ocorreu um erro com a nossa aplicação, por favor tente mais tarde")
                }

            }
            return true
        }
    }
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }