'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { ChangeEvent, useState } from 'react';
import InputField from '../input-field';

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { Button } from "../../@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form"
import { Input } from "../../@/components/ui/input"

 
const subSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });


const NewsletterForm = () => {
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof subSchema>>({
      resolver: zodResolver(subSchema),
      defaultValues: {
        name: "John Doe",
        email: "john.doe@padeli.com"
      },
    })

    const onSubmit = async () => {
        try {
          // Perform form submission or any other action here.
          router.push('/newsletter/thanks');
        } catch (error) {
          console.log(error);
        }
      }

    return (
          <form onSubmit={onSubmit}>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            
                <InputField
                    title="First Name"
                    errorMessage={false}
                    placeholder="John Doe"
                />

                <InputField
                    title="Email"
                    errorMessage={false}
                    placeholder="john.doe@padelit.com"
                />
            </div>

            <button 
                className="cursor-pointer mt-4 [border:none] py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow"
                type='submit'
                >
              <div className="relative text-base leading-[24px] font-inter text-white text-center">
                Subscribe
              </div>
            </button>
          </form>
      )
}
/*const NewsletterForm = () => {

    return (
        <form
            onSubmit={handleFormSubmit}
        >
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                
                <InputField
                    title="First Name"
                    errorMessage={false}
                    placeholder="John Doe"
                />
                <InputField
                    title="Email"
                    errorMessage={false}
                    placeholder="john.doe@padelit.com"
                />
            
            </div>
            
            <button 
                className="cursor-pointer mt-4 [border:none] py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow"
                type='submit'
                >
              <div className="relative text-base leading-[24px] font-inter text-white text-center">
                Subscribe
              </div>
            </button>
        
        </form>
    )
}
*/
export default NewsletterForm;