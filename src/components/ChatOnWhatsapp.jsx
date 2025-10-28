"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const ChatOnWhatsapp = () => {

  const router = useRouter();

  return (
    <div className='fixed bottom-3 text-sm md:text-base md:bottom-14 right-2 md:right-8 z-50 '>
      <Link passHref
        href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus"
        target="_blink">
        <div className='py-1 px-2 md:p-3 bg-green-500 hover:bg-green-600 cursor-pointer rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center'>
          <Image src="/wa.png" width={40} height={40} className='object-cover' priority={true} />
          <h3 className='text-white'>Chat On Whatsapp</h3>
        </div>
      </Link>
    </div>
  )
}

export default ChatOnWhatsapp
