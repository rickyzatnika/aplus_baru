import NavDashboard from '@/components/NavDashboard'
import React from 'react'


const Layout = ({ children }) => {


  return (
    <div className='w-full grid grid-cols-1 gap-2 lg:grid-cols-12 min-h-screen bg-white'>
      <NavDashboard/>
      <div className='col-span-1 lg:col-span-10 py-14 lg:py-32 px-4 lg:px-12'>
        {children}
      </div>
    </div>
  )
}

export default Layout;