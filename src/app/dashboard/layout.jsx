import Link from 'next/link'
import React from 'react'


const links = [
    {
        id: "1",
        title: "Add Event",
        url: "/dashboard/add-events",
    },
    {
        id: "2",
        title: "Add Production",
        url: "/dashboard/add-production",
    },
    {
        id: "3",
        title: "Add Branding",
        url: "/dashboard/add-branding",
    }
]


const DashboardLayout = ({children}) => {

   

  return (
    <div className='w-full grid grid-cols-1 gap-2 lg:grid-cols-12 min-h-screen bg-white'>
        <div className='col-span-1 lg:col-span-2 flex flex-col items-start gap-8 w-full min-h-screen bg-red-600 text-zinc-100 px-4 py-12 lg:py-44'>
            {links?.map((link, i) => (
                <Link key={i} href={link?.url}>
                    {link?.title}
                </Link>
            ))}
        </div>
        <div className='col-span-1 lg:col-span-10 py-14 lg:py-32 px-4 lg:px-12'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout