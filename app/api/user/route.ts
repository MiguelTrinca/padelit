import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

import { createClient } from 'redis';

const client = createClient();



export async function GET() {
    //const user = await kv.hgetall('user:me');
    //console.log(JSON.stringify(user));
    //return new NextResponse(JSON.stringify(user));
    
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
  
    await client.set('key', 'value');
    const value = await client.get('key');

    console.log(value)


  if (process.env.NODE_ENV === 'development'){
    console.log("Hello my friend")
    
  }

  return new NextResponse("Hello World!")
}