"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

const NavMobile = ({ open, setOpen, openForm, setOpenForm }) => {



  return (
    <>
      <nav className={`fixed w-full min-h-screen bg-[#131313] top-0 left-0 flex flex-col items-center justify-between gap-5 lg:hidden transition-all duration-300 ease-in-out ${open ? " text-white left-0" : "left-[-100%]"} `}>
        <span></span>
        <ul className='gap-5 flex flex-col items-center text-xl'>
          <li>
            <button type='button' onClick={() => setOpen(false)}>
              <Link passHref={true} href="/">Home</Link>
            </button>
          </li>
          <li>
            <button type='button' onClick={() => setOpen(false)}>
              <Link passHref={true} href="/about">About Us</Link>
            </button>
          </li>
          <li>
            <button type='button' onClick={() => setOpen(false)} >
              <Link passHref={true} href="/projects">Projects</Link>
            </button>
          </li>
          <li>
            <button type='button' onClick={() => setOpen(false)} >
              <Link passHref={true} href="/gallery">Gallery</Link>
            </button>
          </li>
          <li>
            <button type='button' onClick={() => setOpenForm(true)}>Contact Us</button>
          </li>
        </ul >
        <div className='flex gap-6 items-center justify-center py-6 px-4'>
          <Link passHref={true} href="">
            <ImFacebook2 size={24} />
          </Link>
          <Link passHref={true} href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus" target='_blink'>
            <FaWhatsapp size={24} />
          </Link>
          <Link passHref={true} href="https://www.instagram.com/aplusmultikreasi.id" target='_blink'>
            <GrInstagram size={24} />
          </Link>
          <Link passHref={true} href="https://www.youtube.com/@hello_aplus7424" target='_blink'>
            <FaYoutube size={24} />
          </Link>
        </div>

      </nav>
    </>
  )
}

export default NavMobile