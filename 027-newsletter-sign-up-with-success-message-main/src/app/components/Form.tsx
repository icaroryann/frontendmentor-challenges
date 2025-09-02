'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchemaType, FormSchema } from '@/validation/formSchema'

function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  })
  
  const router = useRouter()
  const onSubmit = (data: FormSchemaType) => {
    const params = new URLSearchParams(data).toString()
    router.push(`/sub-message?${params}`)
  }
  

  return (
    <form
          action=""
          className="mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label 
            htmlFor="email"
            className="font-bold"
          >
            Email address
          </label>
          {errors.email &&
            <span
              className='text-orange-700 float-right'
            >
              {errors.email.message}
            </span>}
          <input
            className={`block mt-2 border-1 rounded-md p-4 w-full ${
              errors.email
                ? 'border-orange-700 outline-orange-700 text-orange-700 bg-rose-100'
                : 'border-zinc-500'
            }`}
            id="email"
            {...register('email')}
            type="text" 
            name="email" 
            placeholder="email@company.com"
          />
          <button 
            className="mt-4 text-center bg-gray-900 text-white w-full py-4 rounded-md hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 ease-in-out"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
  )
}

export default Form