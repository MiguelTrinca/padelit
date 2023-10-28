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
            const redisClient = createClient();
            

            //Todo change to launch an error
            redisClient.on('error', err => console.log("Redis Client Error", err));
            await redisClient.connect();
            
            //Email Exists
            if (await redisClient.exists(subscriber.email) === 1){
                console.log(subscriber.email + " Exists")
                zodErrors.email = "Email already exists, introduce a new email";        
            }

            //Email Doenst Exist
            else {
                await redisClient.set(subscriber.email, subscriber.name)
                console.log(subscriber.email + " Added user")
            }
        
        
        } else if (process.env.NODE_ENV === 'production'){
            //TODO: KV implementation
            if (await kv.exists(subscriber.email)) {
                zodErrors.email = "Email already exists, introduce a new email";        
            }
            else {
                await kv.set(subscriber.email, subscriber.name);
            }
        }
    }    
    
    return  NextResponse.json(
        Object.keys(zodErrors).length > 0 
        ? { errors: zodErrors } 
        : {success: true}
    );
}