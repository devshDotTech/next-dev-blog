import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white py-1 sm:py-5'>
      <div className="container flex max-w-3xl h-20 mx-auto px-4 bg-red-200">
        <div className="flex w-full justify-between items-center bg-blue-300">
          <Link href={'/'} className='flex items-center' >
            d.sh
          </Link>
          <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/explore'}>Explore</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
