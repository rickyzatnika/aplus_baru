"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import useSWR from "swr";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowLeftLong } from 'react-icons/fa6';

const Branding = () => {


  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/branding", fetcher);

  useEffect(() => { }, [data]);

  if (error)
    return (
      <div className="min-h-screen w-full flex flex-col gap-2 items-center justify-center text-white">
        <Image src="/logo_merah.png" alt="logo" width={100} height={100} />
        <div className="flex gap-2 items-center justify-center">
          <span>Ups sorry something went wrong!</span>
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="min-h-screen w-full flex flex-col gap-2 items-center justify-center text-white">
        <Image src="/logo_merah.png" alt="logo" width={100} height={100} />
        <div className="flex gap-2 items-center justify-center">
          <span>Loading...</span>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );

  return (
    <section className='pt-12 w-full overflow-hidden bg-[#000]'>
      <div className="w-full relative overflow-hidden py-8 lg:py-12 ">
        <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="target block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
          <span className="hidden">Branding</span>
          <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity text-transparent bg-clip-text bg-gradient-to-tr from-black to-red-600/90  ">
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Branding
            </span>
          </div>
        </div>
      </div>

      <div className='w-full px-4 md:px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 py-6 md:py-14 md:px-20 '>
          {data?.map((branding, i) => (
            <div key={i} className='w-full  text-white text-center '>
              <Link
                href={`/projects/branding/${branding?.slug}`}
                passHref
                prefetch={true}
                className="group"
              >
                <div
                  className={`relative py-6  bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}
                >
                  <Image
                    src={branding?.imageUrl}
                    alt="images"
                    width={1200}
                    height={950}
                    layout='responsive'
                    className="object-cover w-full h-full absolute left-0 top-0 z-0"
                  />
                  <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent z-5" />
                  <div>
                    <h3 className="relative text-xl">{branding?.title}</h3>
                  </div>
                  <div></div>
                  <div className="w-full py-4 flex flex-col gap-2 backdrop-blur-sm">
                    <p className="text-sm leading-relaxed relative text-center border-b pb-4">
                      {branding?.desc}
                    </p>
                    <div className="w-full flex items-center justify-center">
                      <button className='text-zinc-100 py-2 px-6 '>Details</button>
                      <span className='opacity-0 group-hover:opacity-100 relative left-0 group-hover:left-6 transition-all duration-300 ease-linear text-zinc-400'><BsArrowRight size={20} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='w-fit mx-auto'>
        <Link href="/projects" className='group' passHref>
          <button type='button' className='group text-zinc-500 flex items-center justify-center gap-2 px-5 py-2 border-zinc-500 group-hover:border-zinc-200 group-hover:text-zinc-200  transition-all duration-300 ease-linear'>
            <span className='relative group-hover:-left-3 '>
              <FaArrowLeftLong />
            </span>
            <span>back</span>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Branding