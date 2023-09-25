import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <>
        <aside className='max-w-[300px] fixed h-auto inset-0 z-10 translate-x-0 transition hidden md:block scrollbar-none overflow-hidden overflow-y-auto bg-[#1d293e]'>
            <div className='bg-[#24324a] p-6'>
                <Link to="/" className='flex items-center gap-3'>
                    <img src="/images/logo-2.png" alt="house-logo" />
                    <h4 className="text-white text-lg font-semibold">FindHouse</h4>
                </Link>
            </div>
        </aside>
    </>
  )
}

export default DashboardSidebar