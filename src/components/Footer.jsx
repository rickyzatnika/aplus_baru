import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="w-full relative z-50 flex flex-col  gap-0  items-center justify-between ">
      <div className="footer bg-[#080808] py-12 lg:py-18 p-8 text-base-content">
        <div className="flex flex-col">
          <Image src="/logo.png" alt='logo_aplus' width={100} height={100} className='object-cover ' />
          <p className="w-full max-w-sm text-justify text-zinc-400">
            Aplus Multi Kreasi are a creative agency in the marketing spehere that focuses on Event, Production and Branding.
          </p>
        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold mb-2">Support</span>
          <div className='flex gap-2 items-center text-zinc-400'>
            <FaPhoneSquareAlt size={20} />
            <span>+6281214707415</span>
          </div>
          <div className='flex gap-2 items-center text-zinc-400'>
            <AiOutlineMail size={20} />
            <span>sayhi@aplusmultikreasi.id</span>
          </div>
          <div className='flex flex-col gap-1 items-start text-zinc-400'>
            <p>Address 1 :</p>
            <span className='pl-3'>Jl. Sariwangi No.165, Parongpong - <br /> Kabupaten Bandung Barat 40559</span>
          </div>
          <div className='flex flex-col gap-1 items-start text-zinc-400'>
            <p>Address 2 :</p>
            <span className='pl-3'>Jl. Koja I No.1 Jatiasih, Kec. Jatiasih - <br/> Kota Bekasi - Jawa Barat 17423</span>
          </div>

        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold">Menu</span>
          <Link href="/" passHref={true} className="text-zinc-400 link link-hover">
            Home
          </Link>
          <Link href="/about" passHref={true} className="text-zinc-400 link link-hover">
            About Us
          </Link>
          <Link href="/projects" passHref={true} className="text-zinc-400 link link-hover">
            Projects
          </Link>
          <Link href="/gallery" passHref={true} className="text-zinc-400 link link-hover">
            Gallery
          </Link>
        </div>
        <div className=''>
          <span className=" text-zinc-200 font-semibold">Legal</span>
          <Link href="/terms&conditions" className="text-zinc-400 link link-hover">
            Terms and Conditions
          </Link>
          <Link href="/privacypolicy" className="text-zinc-400 link link-hover">
            Privacy Policy
          </Link>
          
        </div>
      </div>
      <div className="w-full bg-[#000000] gap-5 py-4 px-6 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
        <div className="text-sm text-center text-zinc-400 ">
          <span className='flex items-center gap-1'>
            PT. APLUS MULTI KREASI © 2016
          </span>
        </div>
        <div className='flex gap-5 items-center text-zinc-400 py-2 px-4'>
          <Link href="/">
            <ImFacebook2 size={20} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus" target='_blink'>
            <FaWhatsapp size={20} />
          </Link>
          <Link href="https://www.instagram.com/aplusmultikreasi.id" target='_blink'>
            <GrInstagram size={20} />
          </Link>
          <Link href="https://www.youtube.com/@hello_aplus7424" target='_blink'>
            <FaYoutube size={20} />
          </Link>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer