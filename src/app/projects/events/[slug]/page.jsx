import Image from 'next/image';
import React from 'react'


async function getData(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/events/${slug}`,
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


const ServiceDetails = async ({ params }) => {

    const event = await getData(params.slug);


    return (
        <div className='w-full py-12'>
            <div className='w-full md:w-[65%] px-4 md:px-20 flex flex-col gap-3 items-start'>
                <h3 className='text-zinc-400 mb-5 text-3xl'>{event?.title}</h3>
                <Image src={event?.imageUrl} alt="image cover" width={800} height={400} className='object-cover py-8' />
                <p className='text-lg md:text-xl leading-relaxed text-justify text-zinc-400'>{event?.content}</p>
            </div>
        </div>
    )
}

export default ServiceDetails