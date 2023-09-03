import React from 'react'


async function getData(slug) {
    const res = await fetch(
        `/api/events/${slug}`,
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
        <div className='text-white'>{event?.title}</div>
    )
}

export default ServiceDetails