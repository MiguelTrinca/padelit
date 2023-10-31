import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

import { createClient } from "redis";
import { NextRequest, NextResponse } from "next/server";
import { TSubSchema, subSchema } from "../../../lib/newsletter-types";


export async function POST(request: NextRequest){
    const body: unknown = await request.json()

    const result = subSchema.safeParse(body);
    let zodErrors: { [key: string]: string } = {};
    
    if (!result.success){
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        });

    } else {
        const subscriber: TSubSchema = subSchema.parse(body)

        //REDIS Dev => Localhost | Prd/Prev => Cloud
        const redisClient = createClient({
            password: process.env.REDIS_PREV_PASSWORD,
            socket: {
                host: process.env.REDIS_PREV_URL,
                port: Number(process.env.REDIS_PREV_PORT)
            }
        })

        try {
            await redisClient.connect();
        } catch (error) {
            console.log("Redis Closed: ", error)
        }

        try {
            //Email Exists
            if (await redisClient.exists(subscriber.email) === 1){
                zodErrors.email = "Email already exists, introduce a new email";        
            }
    
            //Email Doenst Exist
            else {
                await redisClient.set(subscriber.email, subscriber.name)

                //Send Email
                try {
                    //Get Email in HTML form
                    const emailV2 = path.resolve("./public/newsletter/bem-vindo-padelit.html");
                    //const emailPath = path.join(__dirname, '../../../../../public/newsletter/bem-vindo-padelit.html');
                    const emailHtml = fs.readFileSync(emailV2, 'utf-8');

                    const transport = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.NODEMAILER_USER,
                            pass: process.env.NODEMAILER_PASS,
                        },
                    });

                    const mailOptions = {
                        from: 'padelit.app@gmail.com',
                        to: subscriber.email,
                        subject: `Bem-vindo a Padelit! ${subscriber.name}`,
                        html: emailHtml, // Use the HTML content from the file
                    };

                    await transport.sendMail(mailOptions);

                } catch (error) {
                    console.log("Node Mailer Failed:", error);

                    await redisClient.del(subscriber.email);
                    redisClient.quit();

                    return NextResponse.json(
                        { error: 'Internal Server Error' }, 
                        { status: 500 }
                    )
                }
            }
    
            redisClient.quit(); 
            
        } catch (error) {
            console.log("Redis Closed: " , error);
            
            await redisClient.del(subscriber.email);
            redisClient.quit();
            
            return NextResponse.json(
                { error: 'Internal Server Error' }, 
                { status: 500 }
            )
        }
        
    }    
    
    return  NextResponse.json(
        Object.keys(zodErrors).length > 0 
        ? { errors: zodErrors } 
        : {success: true}
    );
}
