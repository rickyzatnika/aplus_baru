"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import useSWR from "swr";
import { BsArrowRight } from "react-icons/bs";

const Branding = () => {


  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/events", fetcher);

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
    <section className='pt-12'>
      {data?.map((event, i) => (
        <div key={i} className='w-full py-8 md:py-24 md:px-20 flex gap-6 items-center justify-center text-white text-center '>
          <div className="w-full">
            <Link
              href={`/projects/events/${event?.slug}`}
              passHref
              prefetch={true}
              className="group"
            >
              <div
                className={`relative py-6  bg-cover w-full h-[350px] rounded-lg flex flex-col items-center justify-between `}
              >
                <Image
                  src={event?.imageUrl}
                  alt="images"
                  width={1200}
                  height={950}
                  layout='responsive'
                  className="object-cover w-full h-full absolute left-0 top-0 z-0"
                />
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent z-5" />
                <div>
                  <h3 className="relative text-xl">{event?.title}</h3>
                </div>
                <div></div>
                <div className="w-full py-4 flex flex-col gap-2 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed relative text-center border-b pb-4">
                    {event?.desc}
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <button className='text-zinc-100 py-2 px-6 '>Details</button>
                    <span className='opacity-0 group-hover:opacity-100 relative left-0 group-hover:left-6 transition-all duration-300 ease-linear text-zinc-400'><BsArrowRight size={20}/></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Branding