import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white py-1 sm:py-5'>
      <div className="container flex max-w-3xl h-20 mx-auto px-4">
        <div className="flex w-full justify-between items-center">
          <Link href={'/'} className='flex items-center' >
            <Image src={'logo-no-background.svg'} alt='d.sh logo' width={85} height={85} />
          </Link>
          <div className='flex items-center justify-center gap-5 text-lg text-text-secondary' >
            <Link className='hover:text-white text-neutral-400' href={'/'}>Home</Link>
            <Link className='hover:text-white text-neutral-400' href={'/explore'}>Explore</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar 
