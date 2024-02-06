import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

import connectMongo from "@/lib/db";
import { TzodUserSchema, zodUserSchema } from "@/lib/zod-types/user-types";
import UserModel from "@/models/User";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    //Get data from request
    const body: unknown = await request.json()

    //Parse the data using Zod. Never trust the user
    const result = zodUserSchema.safeParse(body);
    let zodErrors: { [key: string]: string } = {};

    //Check for errors
    if (!result.success){
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        });
    
        //Return Errors
        return NextResponse.json(
            { errors: zodErrors }
        )

    //If no errors
    } else {
        //Connect to MongoDB
        try { 
            await connectMongo()
        } catch (error) {
            console.log("Can't connect to MongoDB")
            console.log(error)
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            )
        }

        //Get the input Data (email and password)
        const userData: TzodUserSchema = zodUserSchema.parse(body)
        try {
            //Check if email exists
            const oldUser = await UserModel.findOne( {email: userData.email})
            if(oldUser) { 
                zodErrors.email = "Este email já existe, introduz um email novo"
            
                return NextResponse.json(
                    { errors: zodErrors }
                )
            }
            
            //Email doesnt exist
            else {
                //Create the user with (email + password)
                const user = await UserModel.create({ ...userData, name: null, image: null  }); //Creates and Saves

                //Send the Email
                try {
                    //Get Email in HTML form
                    const emailPath = path.resolve("./public/newsletter/bem-vindo-padelit.html");
                    const emailHtml = fs.readFileSync(emailPath, 'utf-8');

                    const transport = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.NODEMAILER_USER,
                            pass: process.env.NODEMAILER_PASS,
                        }
                    })

                    const mailOptions = {
                        from: 'padelit.app@gmail.com',
                        to: userData.email,
                        subject: 'Bem-vindo à Padelit!',
                        html: emailHtml, //Use the HTML content from the file
                    }

                    await transport.sendMail(mailOptions)

                } catch (error) {
                    console.log("Node Mailer Failed:", error)

                    await UserModel.deleteOne({ email: userData.email })

                    return NextResponse.json(
                        { error: 'Internal Server Error' },
                        { status: 500 }
                    )
                }

            return NextResponse.json(
                Object.keys(zodErrors).length > 0 
                ? { errors: zodErrors }
                : {
                    success: true,
                    user: {
                        id: user._id,
                        email: user.email,
                    }
                }
            )

            }
        } catch (error) {
            console.log("Creating the User Failed")
            
            //Make sure that the user is deleted
            await UserModel.deleteOne({ email: userData.email })

            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            )
        }
    }
}