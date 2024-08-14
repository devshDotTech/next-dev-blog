import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-center text-base sm:text-xl mt-5 space-y-2 pt-5 sm:mt-16 text-neutral-400' >
        <div>made with <Link href={'/create'} >-`♡´-</Link> by  
            <Link  href={'https://github.com/devshdottech'} target='_blank' className='text-cyan-700'  > dev.sh</Link>
        </div>
        <div>&copy; 2024 All right reserved.</div>
    </div>
  )
}

export default Footer