import { kv } from '@vercel/kv';
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

        //Emial Exists
            if (await kv.exists(subscriber.email) === 1){
                zodErrors.email = "Email already exists, introduce a new email";        
            }

        //Email Doenst Exist
            else {
                await kv.set(subscriber.email, subscriber.name)
            }
        
    }    
    
    return  NextResponse.json(
        Object.keys(zodErrors).length > 0 
        ? { errors: zodErrors } 
        : {success: true}
    );
}
