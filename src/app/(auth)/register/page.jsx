"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import RegisterForm from '@/components/RegisterForm'
import React, { useEffect } from 'react'

const RegisterPages = () => {

  const { data: session } = useSession()
  const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/")
  //   }
  //   return;
  // }, [session, router])


  return (
    <div className='w-full bg-[url("/bg.jpg")] bg-cover min-h-screen flex items-center justify-center px-4'>
      <div className='bg-white/20 overflow-hidden pt-8 w-full md:w-[40%] rounded-lg backdrop-blur-md '>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPages