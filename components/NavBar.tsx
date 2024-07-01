import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
  return (
    <section className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
        <Link href='/' className='flex items-center gap-3'>
            <Image src="/icons/logo.svg" width={32} height={32} alt='ultra-Zoom' className='max-sm:size-10' />
            <p className='text-[20px] font-extrabold text-white max-sm:hidden'>Ultra-Zoom</p>
        </Link>
        <div className='justify-between gap-5'>
            {/* clerk account */}
            <MobileNavBar/>
        </div>

    </section>
  )
}

export default NavBar