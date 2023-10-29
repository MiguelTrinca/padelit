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

        //Preview Cloud
        const redisClient = createClient({
            password: process.env.REDIS_PREV_PASSWORD,
            socket: {
                host: process.env.REDIS_PREV_URL,
                port: Number(process.env.REDIS_PREV_PORT)
            }
        })

        redisClient.on('error', err => console.log("Redis Client Error", err));
        await redisClient.connect();

        //Email Exists
        if (await redisClient.exists(subscriber.email) === 1){
            zodErrors.email = "Email already exists, introduce a new email";        
        }

        //Email Doenst Exist
        else {
            await redisClient.set(subscriber.email, subscriber.name)
        }

        redisClient.quit(); 

        
    }    
    
    return  NextResponse.json(
        Object.keys(zodErrors).length > 0 
        ? { errors: zodErrors } 
        : {success: true}
    );
}
