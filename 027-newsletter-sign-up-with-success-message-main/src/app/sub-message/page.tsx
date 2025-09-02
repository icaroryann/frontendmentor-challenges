'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function Sub() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    email 
    ?
      <Suspense fallback={<div>Carregando...</div>}>
        <div className='min-h-screen grid place-items-center p-6 md:bg-white md:min-h-auto md:w-md md:p-10 md:rounded-4xl'>
          <div>
            <img src="/assets/images/icon-success.svg" alt="Success icon" />
            <h1
              className='mt-4 text-4xl font-bold'
              >Thanks for subscribing!</h1>
            <p
              className='mt-4'
            >A confirmation email has been sent to <strong>{email}</strong>. Prease open it and click the button inside to confirm your subscription</p>
          </div>
          <Link 
            className="mt-4 text-center bg-gray-900 text-white w-full py-4 rounded-md self-end hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 ease-in-out"
            href='/'
          > Dismiss message
          </Link>
        </div>
      </Suspense>
    :
      <div>
        <h1>You should not be here without a email :)</h1>
      </div>
  )
}

export default Sub