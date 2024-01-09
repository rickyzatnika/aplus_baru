"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaWhatsapp, FaHome, FaRegBuilding, FaWhmcs, FaRegImages, FaAddressCard } from "react-icons/fa";

const NavMobile = ({ open, setOpen, openForm, setOpenForm }) => {



  return (
    <>
      <nav className={`fixed w-full min-h-screen bg-[#080808] top-0 left-0 flex flex-col items-start justify-between gap-5 lg:hidden transition-all duration-300 ease-in-out ${open ? " left-0" : "left-[-100%]"} `}>
      
        <div></div>
        <ul className='gap-5 flex flex-col items-start text-lg pl-6 text-zinc-300'>
          <li className='flex items-center gap-2'>
            <FaHome size={20} />
            <button type='button' onClick={() => setOpen(false)}>
              <Link passHref={true} href="/">Home</Link>
            </button>
          </li>
          <li className='flex items-center gap-2'>
            <FaRegBuilding size={20} />
            <button type='button' onClick={() => setOpen(false)}>
              <Link passHref={true} href="/about">About Us</Link>
            </button>
          </li>
          <li className='flex items-center gap-2'>
            <FaWhmcs size={20} />
            <button type='button' onClick={() => setOpen(false)} >
              <Link passHref={true} href="/projects">Projects</Link>
            </button>
          </li>
          <li className='flex items-center gap-2'>
            <FaRegImages size={20} />
            <button type='button' onClick={() => setOpen(false)} >
              <Link passHref={true} href="/gallery">Gallery</Link>
            </button>
          </li>
          <li className='flex items-center gap-2'>
            <FaAddressCard size={20} />
            <button type='button' onClick={() => setOpenForm(true)}>Contact Us</button>
          </li>
        </ul >
       
        <div className='w-full flex items-center gap-3 py-3 px-2 flex-col justify-center bg-gradient-to-tr from-red-700 to-orange-600'>
          <span className='text-zinc-200'>Follow Us :</span>
          <div className='w-full flex gap-4 items-center justify-center  text-zinc-200 '>
            <Link passHref={true} href="">
              <ImFacebook2 size={20} />
            </Link>
            <Link passHref={true} href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus" target='_blink'>
              <FaWhatsapp size={20} />
            </Link>
            <Link passHref={true} href="https://www.instagram.com/aplusmultikreasi.id" target='_blink'>
              <GrInstagram size={20} />
            </Link>
            <Link passHref={true} href="https://www.youtube.com/@hello_aplus7424" target='_blink'>
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

      </nav>
    </>
  )
}

export default NavMobile