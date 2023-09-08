"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import useSWR from "swr";
import { BsArrowRight } from "react-icons/bs";

const Production = () => {


  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/production", fetcher);

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
    <section className='pt-12 w-full overflow-hidden'>
      <div className="w-full relative overflow-hidden py-8 lg:py-12 ">
        <div className="target block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
          <span className="hidden">Production</span>
          <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity text-white ">
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              Production
            </span>
          </div>
        </div>
      </div>

      <div className='w-full px-4 md:px-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 py-6 md:py-14 md:px-20'>
        {data?.map((production, i) => (
          <div key={i} className='w-full  text-white text-center '>
            <Link
              href={`/projects/production/${production?.slug}`}
              passHref
              prefetch={true}
              className="group"
            >
              <div
                className={`relative py-6  bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}
              >
                <Image
                  src={production?.imageUrl}
                  alt="images"
                  width={1200}
                  height={950}
                  layout='responsive'
                  className="object-cover w-full h-full absolute left-0 top-0 z-0"
                />
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent z-5" />
                <div>
                  <h3 className="relative text-xl">{production?.title}</h3>
                </div>
                <div></div>
                <div className="w-full py-4 flex flex-col gap-2 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed relative text-center border-b pb-4">
                    {production?.desc}
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
    </section>
  )
}

export default Production