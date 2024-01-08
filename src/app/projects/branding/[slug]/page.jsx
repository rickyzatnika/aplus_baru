import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import { BsCalendarDate } from "react-icons/bs"
import { BiMap } from "react-icons/bi"

async function getData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/branding/${slug}`,
    {
      cache: "no-store", // this will fresh data on every fetch request;
      // next: { revalidate: 10 }, // and this , will be refresh data every 10 seconds;
    }
  );
  if (!res) {
    return notFound();
  }
  return res.json();
}

async function getImages(slug) {

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
  const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const auth = btoa(`${apiKey}:${apiSecret}`);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/aplus/branding/${slug}&max_results=50`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })

  return response.json()

}


const BrandingDetails = async ({ params }) => {

  const branding = await getData(params.slug);

  const images = await getImages(params.slug);




  return (
    <div className='w-full py-12'>
      <div className='w-full md:w-[65%] px-4 md:px-20 flex flex-col gap-3 items-start'>
        <div className='flex flex-col gap-2 mb-5'>
          <h3 className='text-zinc-400  text-3xl'>{branding?.title}</h3>
          <div className='flex items-center gap-3'>
            <BsCalendarDate size={14} className="text-zinc-500" />
            <p className='text-zinc-500 text-md'>{branding?.date}</p>
          </div>
          <div className='flex items-center gap-3'>
            <BiMap size={14} className="text-zinc-500" />
            <p className='text-zinc-500 text-md'>{branding?.place}</p>
          </div>
        </div>
        <Image src={branding?.imageUrl} alt="image cover" width={800} height={400} className='object-cover py-8' />
        <p className='text-lg md:text-xl leading-relaxed text-justify text-zinc-400'>{branding?.content}</p>
      </div>
      <div className='w-full relative z-10 h-full columns-1 md:columns-3 gap-1 md:gap-3 px-1 md:px-12 py-8 md:py-20' >
        {images?.resources?.map((image, i) => (
          <div>
            <Image
              className="w-full md:w-96 hover:scale-110 duration-700 h-auto object-cover mb-[4px] md:mb-3 mx-auto"
              src={image?.secure_url}
              alt=""
              placeholder="blur"
              blurDataURL={image?.secure_url}
              width={1200}
              height={900}
              
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandingDetails