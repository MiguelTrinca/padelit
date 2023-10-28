import { kv } from '@vercel/kv';
import { createClient } from "redis";
import { NextRequest, NextResponse } from "next/server";
import { TSubSchema, subSchema } from "../../../lib/newsletter-types";

export async function POST(request: NextRequest){
    const body: unknown = await request.json()

    const result = subSchema.safeParse(body);
    let zodErrors: { [key: string]: string } = {};
    
    if (!result.success){
        console.log("Bad input from the user")
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        });

    } else {
        const subscriber: TSubSchema = subSchema.parse(body)
        if (process.env.NODE_ENV === 'development'){
    
            //Dev Locally
            //const redisClient = createClient();

            const redisClient = createClient({
                password: process.env.REDIS_PREV_PASSWORD,
                socket: {
                    host: process.env.REDIS_PREV_URL,
                    port: Number(process.env.REDIS_PREV_PORT)
                }
            })

            //Email Exists
            if (await redisClient.exists(subscriber.email) === 1){
                zodErrors.email = "Email already exists, introduce a new email";        
            }

            //Email Doenst Exist
            else {
                await redisClient.set(subscriber.email, subscriber.name)
            }

            redisClient.quit(); 
        
        
        } else if (process.env.NODE_ENV === 'production'){
            
            //Preview Redis Cloud
            const redisClient = createClient({
                password: process.env.REDIS_PREV_PASSWORD,
                socket: {
                    host: process.env.REDIS_PREV_URL,
                    port: Number(process.env.REDIS_PREV_PORT)
                }
            })

            //TODO: Add a error when Connection is down

            //Email Exists
            if (await redisClient.exists(subscriber.email) === 1){
                zodErrors.email = "Email already exists, introduce a new email";        
            }

            //Email Doenst Exist
            else {
                await redisClient.set(subscriber.email, subscriber.name)
            }

            redisClient.quit(); 

            //Uncomment before going to PRD
            /*if (await kv.exists(subscriber.email)) {
                zodErrors.email = "Email already exists, introduce a new email";        
            }
            else {
                await kv.set(subscriber.email, subscriber.name);
            }*/
        }
    }    
    
    return  NextResponse.json(
        Object.keys(zodErrors).length > 0 
        ? { errors: zodErrors } 
        : {success: true}
    );
}
