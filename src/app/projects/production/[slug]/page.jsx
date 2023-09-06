import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'


async function getData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/production/${slug}`,
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/aplus/event/${slug}&max_results=50`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })

  return response.json()

}


const ProductionDetails = async ({ params }) => {

  const production = await getData(params.slug);

  const images = await getImages(params.slug);




  return (
    <div className='w-full py-12'>
      <div className='w-full md:w-[65%] px-4 md:px-20 flex flex-col gap-3 items-start'>
        <div className='flex flex-col gap-2 mb-5'>
        <h3 className='text-zinc-400  text-3xl'>{production?.title}</h3>
        <p className='text-zinc-500 text-md'>{production?.date}</p>
        </div>
        <Image src={production?.imageUrl} alt="image cover" width={800} height={400} className='object-cover py-8' />
        <p className='text-lg md:text-xl leading-relaxed text-justify text-zinc-400'>{production?.content}</p>
      </div>
      <div className='w-full flex items-center justify-center flex-wrap  gap-3 px-4 md:px-20 py-24' >
        {images?.resources?.map((image, i) => (
          <div key={i} className='w-full lg:w-1/4 md:w-1/2'>
            <Image src={image?.secure_url} alt='image cover' width={800} height={400} className='object-cover' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductionDetails