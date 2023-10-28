'use client'

import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { subSchema, TSubSchema } from '../../lib/newsletter-types';
import { useRouter } from 'next/navigation';

//UI
import InputField from '../input-field';


const NewsletterForm = () => {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TSubSchema>({
    resolver: zodResolver(subSchema),
  });
  
  const onSubmit = async (data: TSubSchema) => {
    try {
      console.log("Sending Post data")
      const response = await fetch('/api/news-sub', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
    
      if(!response.ok){
        alert("Submitting form failed")
        return;  
      }

      const responseData = await response.json();

    
      if(responseData.errors) {
        const errors = responseData.errors;
        if (errors.email) {
          setError("email", {
            type: "server",
            message: errors.email,
          })
        } else if (errors.name) {
          setError("name", {
            type: "server",
            message: errors.name,
          })
        } else {
          alert("Something went wrong!");
        }
      } else {
        router.push('/newsletter/thanks');
      }

    } catch (error) {
      console.log(error)
    }
    
  }

  return ( 
    <div className='self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30px] gap-[16px] text-sm text-dark-gray'>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <div className='self-stretch flex flex-col items-start justify-start gap-[16px]'>
          
          <InputField
              register = {register}
              schemaProp="name"
              error={errors.name}
              
              type= "text"
              title="First Name"
              placeholder="John Doe"
          />
          <InputField
              register={register}
              schemaProp='email'
              error={errors.email}

              type='text'
              title='Email'
              placeholder='john.doe@padelit.com'
          />
  
        </div>
        <button 
            className="cursor-pointer [border:none] mt-4 py-3.5 px-7 bg-accent-yellow rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-hover-yellow disabled:bg-dark-blue"
            disabled={isSubmitting}
            type="submit"
        >
          <div className="relative text-base leading-[24px] font-inter text-white text-center">
            Subscribe
          </div>
        </button>
      </form>

    </div>
  )

}
export default NewsletterForm;