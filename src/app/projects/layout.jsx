
import Image from 'next/image'
import React from 'react'

const ServiceLayout = ({ children }) => {


  return (
    <div>
      <div className="w-full  py-24 lg:py-40 relative bg-black px-2 "
      >
        <div className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 ">
          <Image src="/logo.png" alt="logo" width={350} height={350} className="opacity-5 " />
        </div>
        <div className="bg-path" />
        <div className="w-full relative lg:w-5/6 mb-20 grid grid-cols-1 lg:grid-cols-12 mx-auto items-center  px-2 ">
          <div className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed">
            <h2 className="text-[#adadad] pb-2 text-xl lg:text-1xl  font-bold ">
              OUR PROJECTS
            </h2>
            <p className="textCustom font-bold text-5xl lg:text-6xl w-full lg:w-4/6 ">
              CREATIVE <br /> INNOVATIVE <br /> INSPIRING
            </p>
          </div>
          <div className="col-span-1 lg:col-span-4  pb-8 relative top-8">
            <p className="text-zinc-400 lg:text-zinc-600 relative top-0 lg:top-32 antialiased tracking-wide">
              We focus on finding way to make life as easy as possible when planning an event and production. We always want to remind you that our team, is your team.
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ServiceLayout